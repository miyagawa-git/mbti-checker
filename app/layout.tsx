import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

const siteUrl = "https://mbti-checker-bice.vercel.app/"; // 本番URLに変更

export const metadata: Metadata = {
  title: "MBTI性格診断 - あなたのタイプを見つけよう",
  description: "4つの質問であなたの性格タイプを診断します",
  openGraph: {
    title: "MBTI Checker",
    description: "MBTI性格診断アプリwithペンちゃん",
    url: siteUrl,
    siteName: "MBTI Checker",
    images: [
      {
        url: `${siteUrl}/ogp.png`,
        width: 1200,
        height: 630,
        alt: "MBTI Checker OGP",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBTI Checker",
    description: "MBTI性格診断アプリwithペンちゃん",
    images: [`${siteUrl}/ogp.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
