import { ReactNode } from "react";
import "../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next MCU Movie</title>
      </head>
      <body>
        <nav></nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
