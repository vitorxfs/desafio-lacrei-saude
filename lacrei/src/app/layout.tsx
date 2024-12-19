import type { Metadata } from "next";
import { Nunito } from 'next/font/google'

import StyledComponentsRegistry from '@/lib/registry';

import './global.css';
import 'material-symbols';

const font = Nunito({
  subsets: ['latin'],
  display: 'auto',
});

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Saúde para pessoas LGBTQIAPN+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
