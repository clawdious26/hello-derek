export const metadata = {
  title: 'Hello, Derek',
  description: 'A gloriously overdesigned hello world for Derek.'
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
