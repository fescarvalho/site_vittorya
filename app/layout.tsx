import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vittorya | Psicologia e Bem-Estar",
  description:
    "Consultório de psicologia da Dra. Vittorya. Atendimento humanizado, acolhedor e especializado em ansiedade, terapia individual e relacionamentos. Agende sua consulta.",
  keywords: [
    "psicologia",
    "psicóloga",
    "Vittorya",
    "terapia",
    "ansiedade",
    "saúde mental",
    "atendimento online",
  ],
  authors: [{ name: "Vittorya" }],
  openGraph: {
    title: "Vittorya | Psicologia e Bem-Estar",
    description:
      "Encontre seu espaço de acolhimento e equilíbrio com atendimento psicológico humanizado.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
