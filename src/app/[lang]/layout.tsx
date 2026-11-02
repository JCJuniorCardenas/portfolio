import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import "../globals.css";
import { getDictionary, hasLocale, locales } from "./dictionaries";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    metadataBase: new URL("https://portfolio-junior-a5f7.vercel.app"),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${lang}`, languages: { es: "/es", pt: "/pt", "x-default": "/es" } },
    // Vista previa al compartir el enlace (LinkedIn, WhatsApp, X).
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: "Julio César Deglise Cárdenas",
      title: meta.title,
      description: meta.description,
      locale: lang === "pt" ? "pt_BR" : "es_AR",
      alternateLocale: lang === "pt" ? ["es_AR"] : ["pt_BR"],
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: meta.title }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: ["/og.jpg"] },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${spaceGrotesk.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
