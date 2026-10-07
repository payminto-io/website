import { BrandLogo } from './brand-logo';

const NAV: [string, [string, string][]][] = [
  ['Workspace', [['▦', 'Dashboard'], ['▤', 'Payments'], ['⛓', 'Payment links'], ['◇', 'Customers']]],
  ['Composable', [['⇄', 'Processors'], ['％', 'Fees & reserves'], ['◎', 'Settlement']]],
  ['Assets', [['○', 'Wallets'], ['↻', 'Sweeps'], ['↗', 'Withdrawals']]],
  ['General', [['⌘', 'Developers'], ['⚙', 'Settings']]],
];

const PAYMENTS = [
  ['Order #1048', 'USDC · Solana', '$149.00', 'Confirmed'],
  ['Order #1047', 'Card · Kuberpayss', '$320.00', 'Confirmed'],
  ['Order #1046', 'USDT · Tron', '$89.00', 'Pending'],
  ['Order #1045', 'USDC · Base', '$1,240.00', 'Confirmed'],
  ['Order #1044', 'Card · Payvang', '$56.00', 'Confirmed'],
  ['Order #1043', 'ETH · Ethereum', '$410.00', 'Pending'],
];

export function DashboardPreview() {
  return (
    <div className="dashboard-preview" role="img" aria-label="Illustrative Payminto merchant workspace with payments, processors, and transaction activity using example data">
      <aside className="preview-sidebar" aria-hidden="true">
        <BrandLogo />
        <div className="preview-sidebar-nav">
          {NAV.map(([group, items]) => (
            <div key={group}>
              <small>{group}</small>
              {items.map(([icon, label]) => <div key={label} className={label === 'Dashboard' ? 'preview-nav-active' : ''}><span>{icon}</span>{label}</div>)}
            </div>
          ))}
        </div>
      </aside>
      <div className="preview-workspace" aria-hidden="true" data-lenis-prevent>
        <div className="preview-topbar"><span>Workspace / Dashboard</span><span>Example workspace</span></div>
        <div className="preview-content">
          <div className="preview-banner"><div><small>Merchant overview</small><h3>Payments at a glance</h3><p>Card and crypto payments, settlement, and connected processors.</p></div><span className="preview-create">＋ Create payment</span></div>
          <div className="preview-section-label">Account activity</div>
          <div className="preview-metrics">{[['Payment volume', '$24,850.00'], ['Payments received', '128'], ['Connected processors', '4']].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong><small>Example data</small></div>)}</div>
          <div className="preview-chart"><div><strong>Transaction summary</strong><span>Last 7 days</span></div><svg viewBox="0 0 720 145" preserveAspectRatio="none"><path d="M0 30H720M0 75H720M0 120H720" stroke="#e4e7ec" fill="none"/><path d="M0 125 L85 110 L160 119 L235 67 L310 88 L385 56 L465 70 L540 33 L625 49 L720 14 L720 145 L0 145Z" fill="#fceeea"/><path d="M0 125 L85 110 L160 119 L235 67 L310 88 L385 56 L465 70 L540 33 L625 49 L720 14" stroke="#e22323" strokeWidth="3" fill="none"/></svg><div className="preview-chart-days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div>
          <div className="preview-transactions"><strong>Recent payments</strong><div className="preview-table-header"><span>Payment</span><span>Rail</span><span>Amount</span><span>Status</span></div>{PAYMENTS.map(([name, rail, amount, status]) => <div key={name}><span>{name}</span><span>{rail}</span><span>{amount}</span><span className={status === 'Confirmed' ? 'preview-success' : 'preview-pending'}>{status}</span></div>)}</div>
        </div>
      </div>
    </div>
  );
}
