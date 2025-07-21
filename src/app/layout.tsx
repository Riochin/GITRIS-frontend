import type { Metadata, Viewport } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import { AuthProvider } from "@/hooks/useAuth";

const dotGothic16 = DotGothic16({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

//Webページの<head>タグ内に記述される情報
export const metadata: Metadata = {
  title: "GITRIS",
  description: "GitHubのコントリビューション履歴でテトリスを楽しもう",
};

// モバイル用viewport設定（自動ズーム防止）
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* 追加のmeta tag for 自動ズーム防止 */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-touch-fullscreen" content="yes" />
      </head>
      {/* 3. classNameをbodyタグに渡す */}
      <body className={dotGothic16.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
