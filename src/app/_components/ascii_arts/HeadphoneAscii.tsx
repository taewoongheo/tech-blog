import React from 'react';
import HEADPHONE_ASCII from '@/app/_constants/ascii/headphone';

export default function HeadphoneAscii(): React.ReactNode {
  return <pre className="text-[1.1px] xl:text-[1.2px]">{HEADPHONE_ASCII}</pre>;
}
