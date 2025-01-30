import React from 'react';
import WAVE_ASCII from '@/app/_constants/ascii/wave';

export default function WaveAscii(): React.ReactNode {
  return <pre className="text-[1.9px] xl:text-[2px]">{WAVE_ASCII}</pre>;
}
