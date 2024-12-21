import React from 'react';

export default function MdxLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <div className="flex flex-col mt-10 sm:mt-md mb-10 px-all sm:px-sm md:px-md lg:px-lg xl:px-xl">
      {children}
    </div>
  );
}
