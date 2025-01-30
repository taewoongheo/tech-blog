import React from 'react';
import SATURN_ASCII from '@/app/_constants/ascii/saturn';

export default function SaturnAscii(): React.ReactNode {
  return (
    <pre className="leading-[4.3px] xl:leading-[4.5px] text-[3.3px] xl:text-[3.5px]">
      {SATURN_ASCII}
    </pre>
  );
}
