'use client';

import Footer from './footer';
import Header from './header';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-20">{children}</main>
      <Footer />
    </>
  );
}
