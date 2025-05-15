
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollingHelpdesk from './ScrollingHelpdesk';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollingHelpdesk />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
