import React from 'react';
import GUITAR_ASCII from '@/app/_constants/ascii/guitar';

export default function AtomAscii(): React.ReactNode {
  return <pre className="text-[1.9px] xl:text-[2px]">{GUITAR_ASCII}</pre>;
}
