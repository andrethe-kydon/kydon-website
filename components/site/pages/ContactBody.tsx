/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element, react/no-unescaped-entities */
// Generated from the approved design mock-up (Contact). Edit freely.
import HubSpotForm from '@/components/site/hubspot-form'

export default function ContactBody({ hubspot }: { hubspot?: { portalId?: string; formId?: string; embedCode?: string } }) {
  return (
<div className="k p-contact">

{/* HERO */}
<section className="sec" style={{padding: "72px 0 80px", background: "radial-gradient(900px 520px at 80% 35%,rgba(254,80,0,0.12),rgba(14,18,21,0) 70%)"}}>
<div className="streak" style={{top: "22%", left: "0"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-start"}}>
<div style={{flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
<div className="eyebrow">Contact</div>
<h1 style={{fontSize: "clamp(44px,5.6vw,80px)", lineHeight: "0.96", fontWeight: "800"}}>Let's{" "}<span style={{color: "#FE5000"}}>talk.</span></h1>
<p className="lead" style={{fontSize: "19px"}}>Book a platform demo, a free AI Workforce Assessment, or talk to us about partnerships and careers.</p>
<div style={{display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px"}}>
<div className="card" style={{padding: "18px"}}><div className="tag" style={{fontSize: "11px"}}>Platform demo</div><p style={{margin: "6px 0 0", fontSize: "14px"}}>See Kydon ZilLearn with your use case.</p></div>
<div className="card" style={{padding: "18px"}}><div className="tag" style={{fontSize: "11px"}}>AI Workforce Assessment</div><p style={{margin: "6px 0 0", fontSize: "14px"}}>Free, two weeks, practical.</p></div>
<div className="card" style={{padding: "18px"}}><div className="tag" style={{fontSize: "11px"}}>Partnerships</div><p style={{margin: "6px 0 0", fontSize: "14px"}}>Technology, content, channel, agents.</p></div>
<div className="card" style={{padding: "18px"}}><div className="tag" style={{fontSize: "11px"}}>Careers</div><p style={{margin: "6px 0 0", fontSize: "14px"}}>Roles at Kydon, and FDO training.</p></div>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}><div className="tag" style={{color: "#93A0A8"}}>We can help with</div>
<div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}><span style={{border: "1px solid rgba(255,255,255,0.14)", padding: "7px 12px", fontSize: "14px", color: "#DDE3E7"}}>Enterprise workforce reskilling</span><span style={{border: "1px solid rgba(255,255,255,0.14)", padding: "7px 12px", fontSize: "14px", color: "#DDE3E7"}}>Government agency training programmes</span><span style={{border: "1px solid rgba(255,255,255,0.14)", padding: "7px 12px", fontSize: "14px", color: "#DDE3E7"}}>Educational institution modernisation</span><span style={{border: "1px solid rgba(255,255,255,0.14)", padding: "7px 12px", fontSize: "14px", color: "#DDE3E7"}}>Partner ecosystem enablement</span></div></div>
<div style={{fontSize: "15px"}}><strong style={{color: "#fff"}}>Singapore HQ</strong>{" "}· 2 Science Park Drive, Ascent #01-32, Singapore 118222 · +65 6681 5691 · contact@kydongrp.com</div>
</div>
<div style={{flex: "1 1 480px", background: "#151B20", border: "1px solid rgba(255,255,255,0.12)", padding: "34px", display: "flex", flexDirection: "column", gap: "14px", boxSizing: "border-box", boxShadow: "0 30px 70px rgba(0,0,0,0.45)"}}>
<h2 style={{fontSize: "28px"}}>Send us a message</h2>
<HubSpotForm portalId={hubspot?.portalId} formId={hubspot?.formId} embedCode={hubspot?.embedCode} />
<p style={{margin: "0", fontSize: "12px"}} className="muted">By sending, you agree to our{" "}<a href="/privacy-policy">Privacy Policy</a>.</p>
</div>
</div>
</section>
{/* OFFICES */}
<section className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "28px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px"}}><div className="eyebrow">Our offices</div><h2 className="h2">Singapore headquarters. Teams across Asia and Australia.</h2></div>
<div style={{display: "flex", flexWrap: "wrap", gap: "40px 56px", alignItems: "stretch", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "36px"}}>
<div style={{flex: "0 1 330px", minWidth: "260px", position: "relative", paddingLeft: "24px"}}><div className="plane" aria-hidden="true" style={{left: "0", top: "0", width: "4px", height: "100%", background: "var(--kfold)"}}></div><div className="tag">Headquarters</div><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "clamp(40px,4vw,56px)", lineHeight: "1", color: "#fff", marginTop: "10px"}}>Singapore</div><p style={{margin: "16px 0 0", fontSize: "15px", lineHeight: "1.7"}}>2 Science Park Drive, Ascent #01-32<br />Singapore 118222<br /><span style={{color: "#fff"}}>+65 6681 5691 · contact@kydongrp.com</span></p></div>
<div style={{flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}><div className="tag" style={{color: "#93A0A8"}}>Also working from</div><div style={{display: "flex", flexWrap: "wrap", gap: "24px 0"}}><div style={{flex: "0 0 auto", padding: "4px 36px 4px 24px", borderLeft: "1px solid rgba(255,255,255,0.14)"}}><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "30px", lineHeight: "1.05", color: "#fff", whiteSpace: "nowrap"}}>Kuala Lumpur</div><div style={{marginTop: "8px", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#93A0A8", fontWeight: "600"}}>Malaysia</div></div><div style={{flex: "0 0 auto", padding: "4px 36px 4px 24px", borderLeft: "1px solid rgba(255,255,255,0.14)"}}><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "30px", lineHeight: "1.05", color: "#fff", whiteSpace: "nowrap"}}>Jakarta</div><div style={{marginTop: "8px", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#93A0A8", fontWeight: "600"}}>Indonesia</div></div><div style={{flex: "0 0 auto", padding: "4px 36px 4px 24px", borderLeft: "1px solid rgba(255,255,255,0.14)"}}><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "30px", lineHeight: "1.05", color: "#fff", whiteSpace: "nowrap"}}>Chennai</div><div style={{marginTop: "8px", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#93A0A8", fontWeight: "600"}}>India</div></div><div style={{flex: "0 0 auto", padding: "4px 36px 4px 24px", borderLeft: "1px solid rgba(255,255,255,0.14)"}}><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "30px", lineHeight: "1.05", color: "#fff", whiteSpace: "nowrap"}}>Sydney</div><div style={{marginTop: "8px", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#93A0A8", fontWeight: "600"}}>Australia</div></div></div></div>
</div>
</div>
</section>
{/* PRIVACY */}
<section id="privacy" className="sec" style={{padding: "64px 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between"}}>
<div style={{maxWidth: "760px"}}><div className="tag">Privacy Policy</div><p style={{margin: "8px 0 0"}}>How we collect, use and protect your personal data.</p></div>
<a className="btn-line" href="/privacy-policy">Read the Privacy Policy ↗</a>
</div>
</section>

</div>
  )
}
