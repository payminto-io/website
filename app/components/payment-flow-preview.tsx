import Image from 'next/image';

export function PaymentFlowPreview() {
  return (
    <figure className="payment-flow-preview" aria-label="Illustrative payment flow from customer checkout and agent APIs through your self-hosted Payminto core to connected providers and networks">
      <div className="payment-flow-heading"><span>A payment layer of your own</span><span>Illustration</span></div>
      <div className="payment-flow-inputs">
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18M7 15h4"/></svg><strong>Customer checkout</strong><span>Card or crypto</span></div>
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"/></svg><strong>Agent payments</strong><span>API or MCP</span></div>
      </div>
      <svg className="payment-flow-connection" viewBox="0 0 360 52" preserveAspectRatio="none" aria-hidden="true"><path d="M86 0v18q0 8 8 8h172q8 0 8-8V0M180 26v26"/></svg>
      <div className="payment-flow-core">
        <Image src="/brand/payminto-mark-light.svg" width={48} height={48} alt="" />
        <div><strong>Your payment core</strong><span>Hosted in your environment</span></div>
        <ul><li>Routing</li><li>Fees & reserves</li><li>Events</li></ul>
      </div>
      <svg className="payment-flow-connection payment-flow-connection-short" viewBox="0 0 360 32" preserveAspectRatio="none" aria-hidden="true"><path d="M180 0v32"/></svg>
      <div className="payment-flow-output"><span className="payment-flow-output-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 5h14v14H5zM9 9h6v6H9zM12 2v3m0 14v3M2 12h3m14 0h3"/></svg></span><div><strong>Your providers & networks</strong><span>Connected with your credentials</span></div></div>
      <figcaption>One integration. Your choice of payment rails.</figcaption>
    </figure>
  );
}
