/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element, react/no-unescaped-entities */
// Generated from the approved design mock-up (Careers). Edit freely.
import type { RoleRow } from '@/lib/careers'

export default function CareersBody({ roles }: { roles: RoleRow[] }) {
  return (
<div className="k p-careers">

{/* HERO */}
<section className="sec" style={{padding: "72px 0 72px", background: "radial-gradient(900px 520px at 80% 35%,rgba(254,80,0,0.12),rgba(14,18,21,0) 70%)"}}>
<div className="streak" style={{top: "22%", left: "0"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "44px", alignItems: "center"}}>
<div style={{flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
<div className="eyebrow">Careers at Kydon</div>
<h1 style={{fontSize: "clamp(44px,5.6vw,80px)", lineHeight: "0.96", fontWeight: "800"}}>Build the workforce of{" "}<span style={{color: "#FE5000"}}>people and AI.</span></h1>
<p className="lead" style={{fontSize: "19px"}}>We are on a mission to transform how the world learns. Join innovators, educators and technologists making learning more intelligent and more human.</p>
<div style={{display: "flex", gap: "16px", flexWrap: "wrap"}}><a className="btn" href="#roles">See open roles{" "}<span aria-hidden="true">→</span></a><a className="btn-line" href="#fdo">Become an FDO</a></div>
</div>
<div className="herovis" style={{flex: "1 1 440px", minWidth: "0", position: "relative", height: "420px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)"}}>
<img src="/images/site/careers-hero.jpg" alt="" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% 45%"}} />
<div className="plane" aria-hidden="true" style={{right: "0", top: "0", width: "30%", height: "100%", background: "var(--kfold)", clipPath: "polygon(70% 0,100% 0,100% 100%,30% 100%)", opacity: "0.88"}}></div>
</div>
</div>
</section>
<section className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px"}}><div className="eyebrow">Why Kydon</div><h2 className="h2">Work that changes how people learn and work.</h2></div>
<div className="grid3">
<div className="card"><div className="tag">Meaningful impact</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>100K+ learners</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>Your work shapes how people learn, grow and stay employable in the age of AI.</p></div>
<div className="card"><div className="tag">Collaborative culture</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>Diverse teams</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>Colleagues from many backgrounds, sharing ideas openly and celebrating curiosity.</p></div>
<div className="card"><div className="tag">Growth</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>Keep learning</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>We practise what we build: continuous learning and real investment in your development.</p></div>
</div>
</div>
</section>
<section id="fdo" className="sec" style={{padding: "80px 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center"}}>
<div style={{flex: "1 1 440px", minHeight: "340px", position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)"}}><img src="/images/site/desk-phone.jpg" alt="A Kydon operator coaching on screen" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}} /></div>
<div style={{flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px"}}>
<div className="eyebrow">A new career in AI</div>
<h2 className="h2" style={{fontSize: "clamp(30px,3.4vw,46px)"}}>Become a Forward Deployed Operator.</h2>
<p className="lead" style={{fontSize: "17px"}}>FDOs are the people who make AI work inside client teams. You will be trained through Future Edge Institute (FEI), then deployed with Kydon ZilLearn and AI agents to coach teams and improve performance every month. No coding background needed.</p>
<div className="mstack" style={{display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)"}}>
<div style={{background: "#151B20", padding: "18px"}}><div className="tag" style={{fontSize: "11px"}}>Train</div><p style={{margin: "6px 0 0", fontSize: "14px"}}>FDO Track at FEI</p></div>
<div style={{background: "#151B20", padding: "18px"}}><div className="tag" style={{fontSize: "11px"}}>Deploy</div><p style={{margin: "6px 0 0", fontSize: "14px"}}>Inside client teams</p></div>
<div style={{background: "#151B20", padding: "18px"}}><div className="tag" style={{fontSize: "11px"}}>Grow</div><p style={{margin: "6px 0 0", fontSize: "14px"}}>AI Adoption Associate to AI Transformation Specialist</p></div>
</div>
<a className="btn-line" href="https://futureedgeinstitute.com" style={{alignSelf: "flex-start"}}>Explore the FDO Track at FEI ↗</a>
</div>
</div>
</section>
<section id="roles" className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "28px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px"}}><div className="eyebrow">Open roles</div><h2 className="h2">Join the team.</h2></div>
<div style={{borderTop: "1px solid rgba(255,255,255,0.12)"}}>
{roles.map((r) => (
<a key={r.href + r.title} href={r.href} className="mstack" style={{display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: "24px", alignItems: "center", padding: "22px 0", borderBottom: "1px solid rgba(255,255,255,0.12)", textDecoration: "none", color: "#B9C2C8"}}><div><div style={{color: "#fff", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "22px"}}>{r.title}</div>{r.summary && <div style={{fontSize: "14px", marginTop: "4px"}}>{r.summary}</div>}</div>{r.department ? <span className="chipf">{r.department}</span> : <span />}{r.location ? <span className="chipf">{r.location}</span> : <span />}{r.type ? <span className="chipf">{r.type}</span> : <span />}</a>
))}
</div>
<div className="card" style={{display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between"}}><div><h3 style={{fontSize: "22px"}}>Don't see your role?</h3><p style={{margin: "6px 0 0"}}>Send us your CV and tell us how you would contribute.</p></div><a className="btn-line" href="/contact">Get in touch</a></div>
</div>
</section>
{/* CTA */}
<section className="sec" style={{padding: "80px 0", background: "var(--kfold)"}}>
<div className="plane" aria-hidden="true" style={{right: "0", top: "0", width: "34%", height: "100%", background: "linear-gradient(90deg,rgba(14,18,21,0.18),rgba(14,18,21,0))", clipPath: "polygon(40% 0,100% 0,100% 100%,0 100%)"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between"}}>
<div style={{flex: "1 1 520px", display: "flex", flexDirection: "column", gap: "12px"}}><h2 className="h2" style={{color: "#0E1215"}}>Help build the AI-ready workforce.</h2><p style={{margin: "0", fontSize: "18px", color: "#0E1215", fontWeight: "500"}}>Apply for an open role, or start your FDO journey at Future Edge Institute.</p></div>
<div style={{display: "flex", gap: "14px", flexWrap: "wrap"}}><a href="/contact" style={{display: "inline-flex", alignItems: "center", minHeight: "54px", padding: "0 30px", background: "#0E1215", color: "#ffffff", textDecoration: "none", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "18px"}}>Contact us</a></div>
</div>
</section>

</div>
  )
}
