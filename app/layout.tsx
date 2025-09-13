import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/context/theme-provider";
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: "./fonts/SuisseIntl-Regular-WebM.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SuisseIntl-Medium-WebM.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SuisseIntl-SemiBold-WebM.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SuisseIntl-Book-WebM.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SuisseIntl-Bold-WebM.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Krea",
  description: "Krea.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${myFont.className}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
