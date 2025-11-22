export const metadata = {
  title: "Jessepunk Marketplace",
  description: "NFT Marketplace built with Base Mini App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
