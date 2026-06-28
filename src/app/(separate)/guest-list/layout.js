import { TooltipProvider } from "@/components/ui/tooltip";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: [],
});

export const metadata = {
  title: "Liste des invités",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png" />
      </head>
      <body>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
