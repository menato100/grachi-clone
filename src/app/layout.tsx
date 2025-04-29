import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta
          name="netpub_4710d63e7b873f28900a0e4932bfd7a2"
          content="4710d63e7b873f28900a0e4932bfd7a2_a7f557ab0f42d3af1c70d4c870c120fe"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
