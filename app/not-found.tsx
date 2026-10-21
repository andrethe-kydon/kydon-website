export default function NotFound() {
  return (
    <div className="k">
      <section className="sec" style={{ padding: '120px 0 140px', background: 'radial-gradient(900px 520px at 80% 30%,rgba(254,80,0,0.12),rgba(14,18,21,0) 70%)' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '760px' }}>
          <div className="eyebrow">Page not found</div>
          <h1 style={{ fontSize: 'clamp(40px,5vw,72px)', lineHeight: '1', fontWeight: '800' }}>
            This page has <span style={{ color: '#FE5000' }}>moved on.</span>
          </h1>
          <p className="lead" style={{ fontSize: '19px', margin: '0' }}>The page you were looking for is not here. Try one of these instead.</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a className="btn" href="/">Go to the home page</a>
            <a className="btn-line" href="/insights">Read our insights</a>
            <a className="btn-line" href="/contact">Contact us</a>
          </div>
        </div>
      </section>
    </div>
  )
}
