import { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
import Header from 'components/Header';

const mulish = Mulish({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'smntic.dev',
  description: "smntic's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mulish.className}>
      <body className="flex flex-col min-w-screen min-h-screen bg-background text-foreground font-sans text-base">
        <Header />
        <main className="flex flex-col flex-grow items-center w-full h-full background-pattern">
          <div className="flex-grow w-full sm:w-[90%] lg:max-w-5xl h-full bg-panel p-8 panel-shadow">
            <article className="prose dark:prose-invert max-w-none">{children}</article>
          </div>
        </main>
      </body>
    </html>
  );
}
