'use client';

import Script from 'next/script';

export const GoogleAds = ({ ad_id }: { ad_id: string }) => (
  <>
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${ad_id}`} />
    <Script
      id="google-ads"
      dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${ad_id}'); `, }}
    />
  </>
);
