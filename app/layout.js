export const metadata = {
  title: 'Hello Denys!',
  description: 'A gloriously overdesigned 2000s internet greeting for Denys.'
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
