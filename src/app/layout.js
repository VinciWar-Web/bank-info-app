import SessionAuthProvider from '@/context/SessionAuthProvider'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/store/Providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BankInfo",
  description: "Banking information application",
  manifest: "/manifest.json",
  icons: [
    {
      src: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/icon-256x256.png",
      sizes: "256x256",
      type: "image/png"
    },
    {
      src: "/icon-384x384.png",
      sizes: "384x384",
      type: "image/png"
    },
    {
      src: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ],

};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SessionAuthProvider>
          <Providers>
            {children}
          </Providers>
        </SessionAuthProvider>
      </body>
    </html>
  );
}
