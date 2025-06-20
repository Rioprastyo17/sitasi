// File: src/components/CitationCard.tsx

import styles from './CitationCard.module.css';

// Karena kita menggunakan file .js untuk data, kita tidak mendefinisikan tipe di sini.
// Komponen menerima prop 'citation' dan langsung menggunakannya.
export default function CitationCard({ citation }) {
  return (
    <div className={styles.card}>
      <blockquote className={styles.quote}>
        “{citation.quote}”
      </blockquote>
      <footer className={styles.footer}>
        — {citation.author} ({citation.year})
      </footer>
      <p className={styles.bibliography}>
        {citation.bibliography}
      </p>
    </div>
  );
}