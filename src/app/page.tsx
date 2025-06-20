"use client"
import { useState, useEffect } from 'react';
import { citations } from '@/constants/mockData';
import { motion } from 'framer-motion';
import styles from './page.module.css';
import CitationCard from '@/components/CitationCard';

export default function Home() {
  // State untuk menyimpan input dari pengguna
  const [searchQuery, setSearchQuery] = useState('');
  
  // State untuk menyimpan hasil sitasi yang telah difilter
  const [filteredCitations, setFilteredCitations] = useState(citations);

  // useEffect akan berjalan setiap kali searchQuery berubah
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    
    // Jika query kosong, tampilkan semua sitasi
    if (query === '') {
      setFilteredCitations(citations);
      return;
    }

    // Lakukan filter berdasarkan query
    const filtered = citations.filter(citation => {
      // Cek di semua field yang relevan
      const inQuote = citation.quote.toLowerCase().includes(query);
      const inAuthor = citation.author.toLowerCase().includes(query);
      const inYear = citation.year.toString().includes(query);
      const inBibliography = citation.bibliography.toLowerCase().includes(query);

      // Logika untuk keywords telah dihapus dari sini
      return inQuote || inAuthor || inYear || inBibliography;
    });

    setFilteredCitations(filtered);
  }, [searchQuery]); // Dependensi: efek ini berjalan saat searchQuery berubah

  return (
    <main className={styles.main}>
      <div className={styles.grouper}>
        <h1 className={styles.title}>Pencari Sitasi</h1>
        
        {/* === FORM PENCARIAN === */}
        <div className={styles.searchContainer}>
          <input
            type="search"
            placeholder="Cari berdasarkan kata kunci, penulis, atau tahun..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* === DAFTAR HASIL PENCARIAN === */}
        <ul className={styles.ulGroupStyle}>
          {filteredCitations.length > 0 ? (
            filteredCitations.map((citation, i) => (
              <motion.li
                className={styles.listItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                key={citation.id}
              >
                <CitationCard citation={citation} />
              </motion.li>
            ))
          ) : (
            // Pesan jika tidak ada hasil yang ditemukan
            <p className={styles.noResults}>
              Tidak ada sitasi yang ditemukan untuk "<strong>{searchQuery}</strong>".
            </p>
          )}
        </ul>
      </div>
    </main>
  );
}