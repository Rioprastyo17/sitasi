// File: app/layout.tsx (BARU)
import { Inter } from 'next/font/google' // Ganti Lora menjadi Inter
import './globals.css'
import type { Metadata } from 'next'


// Ganti Lora menjadi Inter dan sesuaikan nama variabelnya
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // Ganti dengan judul aplikasi Anda
  title: 'Manajer Sitasi',
  description: 'Aplikasi untuk mengelola sitasi dan referensi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}