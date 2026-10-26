'use client'
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element, react/no-unescaped-entities */
// Generated from the approved design mock-up (Insights). Edit freely.
import { LEAD_FORMS, submitLead } from '@/lib/lead-forms'
import { DCLogic, useDC } from '@/lib/dc'
import type { InsightCard } from '@/lib/insights'

class InsightsLogic extends DCLogic {
constructor(props: any) { super(props); this.state = { sent: false }; }
renderVals(): any {
return { sent: !!this.state.sent, sending: !!this.state.sending, submit: (e: any) => { e.preventDefault(); const f = new FormData(e.currentTarget); this.setState({ sending: true }); submitLead('subscribe', { email: String(f.get('email') || '') }).finally(() => this.setState({ sending: false, sent: true })); } };
}
}

export default function InsightsBody({ featured, more, total }: { featured: InsightCard[]; more: InsightCard[]; total: number }) {
  const V: any = useDC(InsightsLogic)
  return (
<div className="k p-insights">

{/* HERO */}
<section className="sec" style={{padding: "72px 0 56px", background: "radial-gradient(900px 520px at 80% 35%,rgba(254,80,0,0.12),rgba(14,18,21,0) 70%)"}}>
<div className="streak" style={{top: "30%", left: "0"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-end", justifyContent: "space-between"}}>
<div style={{maxWidth: "820px", display: "flex", flexDirection: "column", gap: "20px"}}><div className="eyebrow">Insights</div><h1 style={{fontSize: "clamp(44px,5.6vw,80px)", lineHeight: "0.96", fontWeight: "800"}}>Thinking on people, AI and{" "}<span style={{color: "#FE5000"}}>performance.</span></h1></div>
<nav aria-label="Insights sections" style={{display: "flex", gap: "8px", flexWrap: "wrap"}}><a className="chipf on" href="#featured" style={{textDecoration: "none"}}>Featured</a><a className="chipf" href="#all" style={{textDecoration: "none"}}>All articles</a><a className="chipf" href="/ai-workforce-factory#paper" style={{textDecoration: "none"}}>White paper</a><a className="chipf" href="#subscribe" style={{textDecoration: "none"}}>Subscribe</a></nav>
</div>
</section>
{/* FEATURED */}
<section id="featured" className="sec" style={{padding: "24px 0 72px"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "20px"}}>
<div className="mstack" style={{display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "16px"}}>
<a href="/ai-workforce-factory#paper" className="card" style={{textDecoration: "none", color: "#B9C2C8", padding: "0", overflow: "hidden", display: "flex", flexDirection: "column", background: "#151B20"}}><div style={{background: "#5B6770", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "240px"}}><img src="/images/site/aiwf-stacked-white.png" alt="AI Workforce Factory\u2122" style={{height: "150px", width: "auto"}} /></div><div style={{padding: "24px", display: "flex", flexDirection: "column", gap: "8px"}}><div className="tag" style={{fontSize: "11px"}}>White paper · David Yeo</div><h3 style={{fontSize: "28px", lineHeight: "1.1"}}>The AI Workforce Factory™: a Kydon framework for putting AI to work</h3></div></a>
<div className="card" style={{display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center", position: "relative", overflow: "hidden"}}><div className="plane" aria-hidden="true" style={{left: "0", top: "0", width: "5px", height: "100%", background: "var(--kfold)"}}></div><div className="tag">LEARNTech AI</div><h3 style={{fontSize: "26px", lineHeight: "1.1"}}>Conversations on people, AI and the future of work</h3><p style={{margin: "0"}}>An interview series hosted by David Yeo.</p><span style={{alignSelf: "flex-start", border: "1px solid rgba(254,80,0,0.6)", color: "#FF7A3D", fontWeight: "600", fontSize: "13px", letterSpacing: ".08em", textTransform: "uppercase", padding: "6px 12px"}}>Coming soon</span></div>
</div>
<div className="grid3">{featured.map((c) => (<a key={c.slug} href={`/insights/${c.slug}`} className="card" style={{textDecoration: "none", color: "#B9C2C8", padding: "0", overflow: "hidden", display: "flex", flexDirection: "column"}}><img src={c.image} alt="" style={{width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block"}} /><div style={{padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: "8px"}}><div className="tag" style={{fontSize: "11px"}}>{c.category}{c.date ? ` · ${c.date}` : ''}</div><h3 style={{fontSize: "20px", lineHeight: "1.2"}}>{c.title}</h3></div></a>))}</div>
</div>
</section>
{/* ALL ARTICLES */}
<section id="all" className="sec" style={{padding: "72px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "20px"}}>
<div style={{display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", alignItems: "flex-end"}}><div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px"}}><div className="eyebrow">Latest</div><h2 className="h2">More from Kydon.</h2></div><span className="muted" style={{fontSize: "14px"}}>{total} articles</span></div>
<div style={{borderTop: "1px solid rgba(255,255,255,0.1)"}}>{more.map((c) => (<a key={c.slug} href={`/insights/${c.slug}`} style={{display: "grid", gridTemplateColumns: "1fr auto", gap: "20px", alignItems: "baseline", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", color: "#B9C2C8"}}><span style={{color: "#fff", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600", fontSize: "18px"}}>{c.title}</span><span style={{fontSize: "13px", whiteSpace: "nowrap"}}>{c.category}{c.date ? ` · ${c.date}` : ''}</span></a>))}</div>
</div>
</section>
{/* SUBSCRIBE */}
<section id="subscribe" className="sec" style={{padding: "64px 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between", background: "#151B20", border: "1px solid rgba(255,255,255,0.08)", padding: "36px"}}>
<div><h2 style={{fontSize: "30px"}}>Stay ahead of the curve.</h2><p style={{margin: "6px 0 0"}}>New thinking on people, AI and performance, once a month.</p></div>
{LEAD_FORMS.subscribe.formId ? (<>
<form onSubmit={V.submit} style={{display: "flex", gap: "10px", flexWrap: "wrap"}} aria-label="Subscribe"><label className="fld" style={{minWidth: "280px"}}>Work email<input type="email" name="email" autoComplete="email" required /></label><button className="btn" type="submit" disabled={V.sending} style={{alignSelf: "flex-end", border: "0", cursor: "pointer"}}>{V.sending ? 'Sending…' : 'Subscribe'}</button></form>
{(V.sent) && (<><p role="status" style={{margin: "10px 0 0", color: "#3DDC84", fontWeight: "600", fontSize: "15px"}}>Subscribed. Look out for our next issue.</p></>)}
</>) : (<a className="btn" href="/contact" style={{alignSelf: "flex-start"}}>Get in touch to subscribe →</a>)}
</div>
</section>

</div>
  )
}
