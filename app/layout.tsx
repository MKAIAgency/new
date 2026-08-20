import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MKAI Agency | AI that moves business forward",
  description: "MKAI Agency builds intelligent systems that help ambitious teams move faster.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
