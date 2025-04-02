import React from 'react';
import Navbar from '@/app/_components/Navbar';

export default function MdxLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center content-center w-full sm:max-w-[650px] lg:max-w-[700px] mx-auto">
        {children}
      </div>
    </>
  );
}
