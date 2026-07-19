export const trackContactConversion = () => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-18329572887/GyYJCLnl_NEcEJesnKRE',
      value: 1.0,
      currency: 'USD',
    });
  }
};
