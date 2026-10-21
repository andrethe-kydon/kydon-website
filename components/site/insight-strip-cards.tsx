import type { InsightCard } from '@/lib/insights'

/** Text-only article cards used in the insight strips on Home and ZilLearn. */
export default function InsightStripCards({ items }: { items: InsightCard[] }) {
  return (
    <>
      {items.map((c) => (
        <a key={c.slug} href={`/insights/${c.slug}`} className="card" style={{ textDecoration: 'none', color: '#B9C2C8', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div aria-hidden="true" style={{ height: '4px', background: 'var(--kfold)' }}></div>
          <div style={{ padding: '26px 26px 28px', display: 'flex', flexDirection: 'column', gap: '10px', height: '100%', boxSizing: 'border-box' }}>
            <div className="tag" style={{ fontSize: '11px' }}>{c.date ? `${c.category} · ${c.date}` : c.category}</div>
            <h3 style={{ fontSize: '20px', marginTop: '6px', lineHeight: '1.2' }}>{c.title}</h3>
            <span style={{ marginTop: 'auto', paddingTop: '8px', color: '#FF7A3D', fontWeight: '600', fontSize: '14px' }}>Read the article →</span>
          </div>
        </a>
      ))}
    </>
  )
}
