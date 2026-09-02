import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Ekezie Emmanuel Chinonyerem — Software Developer",
  description:
    "Portfolio of Ekezie Emmanuel Chinonyerem, a Software Developer building modern, responsive, and scalable web applications and full-stack systems with React, Next.js, TypeScript, and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  if (localStorage.getItem('theme') !== 'light') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
