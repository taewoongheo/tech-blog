'use client';

import React, { useEffect, useRef } from 'react';
// import { useTheme } from 'next-themes';

export default function Giscus(): React.ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  //   const { resolvedTheme } = useTheme();

  // https://github.com/giscus/giscus/tree/main/styles/themes
  //   const theme = resolvedTheme === 'dark' ? 'dark' : 'light';
  const theme = 'light';

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';

    scriptElem.setAttribute('data-repo', 'taewoongheo/tech-blog');
    scriptElem.setAttribute('data-repo-id', 'R_kgDONQoFPA');
    scriptElem.setAttribute('data-category', 'Comments');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDONQoFPM4Ck4y_');
    scriptElem.setAttribute('data-mapping', 'pathname');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'preferred_color_scheme');
    scriptElem.setAttribute('data-theme', theme);
    scriptElem.setAttribute('data-lang', 'ko');

    ref.current.appendChild(scriptElem);
  }, [theme]);

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame',
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      'https://giscus.app',
    );
  }, [theme]);

  return <section ref={ref} />;
}
