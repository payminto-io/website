import { BrandLogo } from './brand-logo';

export function DashboardPreview() {
  return (
    <div className="dashboard-preview" role="img" aria-label="Illustrative Payminto merchant workspace with payments, wallets, and transaction activity using example data">
      <aside className="preview-sidebar" aria-hidden="true">
        <BrandLogo />
        <small>Workspace</small>
        {['Dashboard', 'Payments', 'Customers', 'Onramp'].map((item, index) => <div key={item} className={index === 0 ? 'preview-nav-active' : ''}><span>{['▦', '▤', '◇', '▱'][index]}</span>{item}</div>)}
        <small>Assets</small>
        {['Sweeps', 'Wallet management', 'Withdrawals'].map(item => <div key={item}><span>○</span>{item}</div>)}
        <small>General</small><div><span>⌘</span>Developers</div><div><span>⚙</span>Settings</div>
      </aside>
      <div className="preview-workspace" aria-hidden="true">
        <div className="preview-topbar"><span>Workspace / Dashboard</span><span>Example workspace</span></div>
        <div className="preview-content">
          <div className="preview-banner"><div><small>Merchant overview</small><h3>Payments at a glance</h3><p>Incoming payments, settlement activity, and integrations.</p></div><span className="preview-create">＋ Create payment</span></div>
          <div className="preview-section-label">Account activity</div>
          <div className="preview-metrics">{[['Payment volume', '$24,850.00'], ['Payments received', '128'], ['Active wallets', '6']].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong><small>Example data</small></div>)}</div>
          <div className="preview-chart"><div><strong>Transaction summary</strong><span>Last 7 days</span></div><svg viewBox="0 0 720 145" preserveAspectRatio="none"><path d="M0 30H720M0 75H720M0 120H720" stroke="#e4e7ec" fill="none"/><path d="M0 125 L85 110 L160 119 L235 67 L310 88 L385 56 L465 70 L540 33 L625 49 L720 14 L720 145 L0 145Z" fill="#fceeea"/><path d="M0 125 L85 110 L160 119 L235 67 L310 88 L385 56 L465 70 L540 33 L625 49 L720 14" stroke="#e22323" strokeWidth="3" fill="none"/></svg><div className="preview-chart-days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div>
          <div className="preview-transactions"><strong>Recent payments</strong><div className="preview-table-header"><span>Payment</span><span>Asset</span><span>Amount</span><span>Status</span></div>{[['Order #1048', 'USDC', '$149.00', 'Confirmed'], ['Order #1047', 'USDT', '$320.00', 'Confirmed'], ['Order #1046', 'ETH', '$89.00', 'Pending']].map(([name, asset, amount, status]) => <div key={name}><span>{name}</span><span>{asset}</span><span>{amount}</span><span className={status === 'Confirmed' ? 'preview-success' : 'preview-pending'}>{status}</span></div>)}</div>
        </div>
      </div>
    </div>
  );
}
