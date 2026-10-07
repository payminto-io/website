export function BrandLogo({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  return (
    <span className={`brand-logo ${inverse ? 'brand-logo-inverse' : ''}`}>
      <span className="brand-logo-mark" aria-hidden="true">P<span /></span>
      <span className="brand-logo-type"><strong>Payminto</strong>{!compact && <small>Merchant infrastructure</small>}</span>
    </span>
  );
}
