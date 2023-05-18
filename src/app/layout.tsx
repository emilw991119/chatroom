import "./globals.css";

export const metadata = {
  title: "NextJs Messenger Clone",
  description: "NextJs Messenger Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
