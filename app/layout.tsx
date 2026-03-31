import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "XIRA Dance Studio | Entrena con Pasión, Baila sin Límites",
  description:
    "Academia de baile urbano en Iquitos, Perú. Clases de danza para todos los niveles con instructores profesionales. Descubre tu estilo y lleva tu baile al siguiente nivel.",
  keywords: [
    "academia de baile",
    "danza urbana",
    "Iquitos",
    "Perú",
    "clases de baile",
    "coreografía",
  ],
  openGraph: {
    title: "XIRA Dance Studio",
    description: "Entrena con Pasión, Baila sin Límites",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
