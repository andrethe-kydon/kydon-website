import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getJobPositions } from '@/lib/sanity-queries'
import { getPosition, applyHref, DEPARTMENTS, EMPLOYMENT } from '@/lib/careers'
import { BreadcrumbSchema } from '@/components/seo/json-ld'

export const revalidate = 60

export async function generateStaticParams() {
  const positions = await getJobPositions()
  return positions.map((p) => ({ id: p._id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const p = await getPosition(params.id)
  if (!p) return { title: { absolute: 'Careers at Kydon' } }
  const title = `${p.title} | Careers at Kydon`
  const description = p.description?.slice(0, 160) || `${p.title} at Kydon, ${p.location}.`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/careers/${params.id}` },
    openGraph: { title, description, url: `/careers/${params.id}` },
  }
}

function List({ heading, items }: { heading: string; items?: string[] }) {
  if (!items?.length) return null
  return (
    <>
      <h2>{heading}</h2>
      <ul>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </>
  )
}

export default async function JobPage({ params }: { params: { id: string } }) {
  const p = await getPosition(params.id)
  if (!p) notFound()

  const dept = DEPARTMENTS[p.department] || p.department
  const type = EMPLOYMENT[p.employmentType] || p.employmentType
  const apply = applyHref(p)
  const external = apply.startsWith('http')
  const chips = [dept, p.location, type].filter(Boolean)

  return (
    <div className="k p-careers">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://kydongrp.com' },
          { name: 'Careers', url: 'https://kydongrp.com/careers' },
          { name: p.title, url: `https://kydongrp.com/careers/${params.id}` },
        ]}
      />
      <section className="sec" style={{ padding: '64px 0 40px', background: 'radial-gradient(900px 520px at 80% 30%,rgba(254,80,0,0.12),rgba(14,18,21,0) 70%)' }}>
        <div className="streak" style={{ top: '20%', left: '0' }}></div>
        <div className="wrap" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
          <a href="/careers#roles" style={{ color: '#FF7A3D', fontSize: '15px', textDecoration: 'none' }}>← All open roles</a>
          <div className="eyebrow">Open role</div>
          <h1 style={{ fontSize: 'clamp(36px,4.4vw,60px)', lineHeight: '1.02', fontWeight: '800' }}>{p.title}</h1>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {chips.map((c) => (
              <span key={c} className="chipf">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ padding: '24px 0 80px' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'flex-start' }}>
          <article className="prose-k" style={{ flex: '1 1 560px', minWidth: '0', maxWidth: '760px' }}>
            {p.description && (
              <p className="lead" style={{ fontSize: '21px', lineHeight: '1.5', color: '#fff' }}>{p.description}</p>
            )}
            <List heading="What you will do" items={p.responsibilities} />
            <List heading="What you bring" items={p.requirements} />
            <List heading="Good to have" items={p.niceToHave} />
          </article>
          <aside style={{ flex: '0 1 320px', minWidth: '260px', display: 'flex', flexDirection: 'column', gap: '14px', position: 'sticky', top: '24px' }}>
            <div className="card" style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}>
              <div className="plane" aria-hidden="true" style={{ left: '0', top: '0', width: '5px', height: '100%', background: 'var(--kfold)' }}></div>
              <div className="tag">Apply</div>
              <h3 style={{ fontSize: '22px', marginTop: '8px' }}>Send us your CV and tell us how you would contribute.</h3>
              <a className="btn" href={apply} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ marginTop: '14px', minHeight: '46px', fontSize: '15px' }}>
                Apply for this role
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
