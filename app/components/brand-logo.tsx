import Image from 'next/image';

export function BrandLogo({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  return (
    <span className={`brand-logo ${inverse ? 'brand-logo-inverse' : ''}`}>
      <Image src={`/brand/payminto-logo-${inverse ? 'dark' : 'light'}.svg`} alt="Payminto" width={224} height={48} className="brand-logo-lockup" />
      {!compact && <span className="brand-logo-description">Composable payments</span>}
    </span>
  );
}
