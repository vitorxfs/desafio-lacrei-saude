import type { Metadata } from "next";

import StyledComponentsRegistry from '@/lib/registry';

import './global.css';

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
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
