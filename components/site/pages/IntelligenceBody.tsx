'use client'
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element, react/no-unescaped-entities */
// Generated from the approved design mock-up (Intelligence). Edit freely.
import { LEAD_FORMS, submitLead } from '@/lib/lead-forms'
import { DCLogic, useDC } from '@/lib/dc'

class IntelligenceLogic extends DCLogic {
constructor(props: any) { super(props); this.state = { sent: false }; }
renderVals(): any {
return { sent: !!this.state.sent, sending: !!this.state.sending, submit: (e: any) => { e.preventDefault(); const f = new FormData(e.currentTarget); this.setState({ sending: true }); submitLead('demo', { firstname: String(f.get('firstname') || ''), lastname: String(f.get('lastname') || ''), email: String(f.get('email') || ''), company: String(f.get('company') || '') }).finally(() => this.setState({ sending: false, sent: true })); } };
}
}

export default function IntelligenceBody() {
  const V: any = useDC(IntelligenceLogic)
  return (
<div className="k p-intelligence">

{/* HERO */}
<section className="sec" style={{padding: "72px 0 76px", background: "radial-gradient(800px 500px at 80% 40%,rgba(254,80,0,0.14),rgba(14,18,21,0) 70%)"}}>
<div className="plane mhide" aria-hidden="true" style={{right: "0", top: "0", width: "30%", height: "100%", background: "var(--kfold)", clipPath: "polygon(55% 0,100% 0,100% 100%,15% 100%)", opacity: "0.9"}}></div>
<div className="streak" style={{top: "24%", left: "0"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center"}}>
<div style={{flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
<div className="eyebrow">Kydon ZilLearn · Capability 04 · The organisation learns</div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
<div style={{display: "flex", alignItems: "center", gap: "14px"}}><svg width="46" height="46" viewBox="0 0 46 46" aria-hidden="true"><defs><linearGradient id="kig" x1="0" x2="1"><stop offset="0" stopColor="#B83A00" /><stop offset="1" stopColor="#FE5000" /></linearGradient></defs><circle cx="23" cy="23" r="21" fill="none" stroke="url(#kig)" strokeWidth="3" /><circle cx="23" cy="23" r="12" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" /><circle cx="23" cy="23" r="4" fill="#FE5000" /></svg>
<h1 style={{fontSize: "clamp(48px,6vw,86px)", lineHeight: "0.95", fontWeight: "800"}}>Kydon{" "}<span style={{color: "#FE5000"}}>Intelligence</span></h1></div>
</div>
<p style={{margin: "0", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600", fontSize: "clamp(24px,2.6vw,36px)", lineHeight: "1.15", color: "#FFFFFF"}}>Help your organisation learn faster than the world changes.</p>
<p className="lead">Monitor change, understand what it means for you, and decide with evidence. Kydon Intelligence takes learning beyond the individual, to the capacity of the organisation itself.</p>
<div style={{display: "flex", gap: "16px", flexWrap: "wrap"}}><a className="btn" href="#demo">Request a demo{" "}<span aria-hidden="true">→</span></a><a className="btn-line" href="#how">How it works</a></div>
</div>
{/* Live, illustrative product screen */}
<div style={{flex: "1 1 500px", minWidth: "0", position: "relative"}}>
<div style={{background: "#151B20", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 30px 70px rgba(0,0,0,0.55)"}}>
<div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
<div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", color: "#fff", fontSize: "16px"}}>kydon{" "}<span style={{fontWeight: "500", color: "#93A0A8"}}>| Intelligence</span></div>
<div style={{fontSize: "11px", color: "#3DDC84"}}><span className="ki-live"></span>{" "}Monitoring 1,240 sources</div>
</div>
<div className="mstack" style={{display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "12px", padding: "14px"}}>
<div style={{background: "#0E1215", border: "1px solid rgba(255,255,255,0.08)", padding: "12px", display: "flex", flexDirection: "column", gap: "8px"}}>
<div style={{fontWeight: "600", color: "#fff", fontSize: "12px"}}>Signal radar</div>
<div style={{position: "relative", aspectRatio: "1/1"}}>
<svg viewBox="0 0 200 200" width="100%" height="100%" aria-label="Signal radar showing emerging signals">
<defs><radialGradient id="sweep" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stopColor="rgba(254,80,0,0.45)" /><stop offset="1" stopColor="rgba(254,80,0,0)" /></radialGradient></defs>
<circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,0.1)" /><circle cx="100" cy="100" r="62" fill="none" stroke="rgba(255,255,255,0.1)" /><circle cx="100" cy="100" r="32" fill="none" stroke="rgba(255,255,255,0.1)" />
<line x1="100" y1="8" x2="100" y2="192" stroke="rgba(255,255,255,0.06)" /><line x1="8" y1="100" x2="192" y2="100" stroke="rgba(255,255,255,0.06)" />
<g className="ki-sweep"><path d="M100 100 L100 8 A92 92 0 0 1 179 54 Z" fill="url(#sweep)" /></g>
<circle className="ki-ping" cx="146" cy="62" r="5" fill="#FE5000" /><circle className="ki-ping d2" cx="62" cy="128" r="4" fill="#FF7A3D" /><circle className="ki-ping d3" cx="128" cy="150" r="4" fill="#E3E8EB" /><circle className="ki-ping d4" cx="80" cy="58" r="3" fill="#93A0A8" />
</svg>
</div>
<div style={{display: "flex", justifyContent: "space-between", fontSize: "10px"}} className="muted"><span>Regulation</span><span>Market</span><span>Skills</span></div>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
<div style={{background: "#0E1215", border: "1px solid rgba(255,255,255,0.08)", padding: "12px"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}><div style={{fontWeight: "600", color: "#fff", fontSize: "12px"}}>Signal strength · 12 weeks</div><div style={{fontSize: "11px", color: "#FE5000", fontWeight: "600"}}>▲ 38%</div></div>
<svg viewBox="0 0 220 70" width="100%" height="70" aria-hidden="true"><defs><linearGradient id="ar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(254,80,0,0.35)" /><stop offset="1" stopColor="rgba(254,80,0,0)" /></linearGradient></defs>
<path d="M0 58 L20 54 L40 56 L60 48 L80 50 L100 41 L120 44 L140 33 L160 30 L180 20 L200 16 L220 8 L220 70 L0 70 Z" fill="url(#ar)" />
<path className="ki-draw" d="M0 58 L20 54 L40 56 L60 48 L80 50 L100 41 L120 44 L140 33 L160 30 L180 20 L200 16 L220 8" fill="none" stroke="#FE5000" strokeWidth="2.5" /></svg>
</div>
<div style={{background: "#0E1215", border: "1px solid rgba(255,255,255,0.08)", padding: "12px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "11px"}}>
<div style={{fontWeight: "600", color: "#fff", fontSize: "12px"}}>New insights</div>
<div className="ki-feed" style={{display: "flex", gap: "8px", alignItems: "flex-start"}}><span style={{flex: "none", fontSize: "9px", fontWeight: "700", color: "#0E1215", background: "var(--kfold)", padding: "2px 6px"}}>REG</span><span style={{color: "#E3E8EB"}}>New AI governance guidance in Singapore. Affects 3 of your processes.</span></div>
<div className="ki-feed d2" style={{display: "flex", gap: "8px", alignItems: "flex-start"}}><span style={{flex: "none", fontSize: "9px", fontWeight: "700", color: "#0E1215", background: "#E3E8EB", padding: "2px 6px"}}>SKILL</span><span style={{color: "#E3E8EB"}}>Demand for AI supervision skills up in your sector.</span></div>
<div className="ki-feed d3" style={{display: "flex", gap: "8px", alignItems: "flex-start"}}><span style={{flex: "none", fontSize: "9px", fontWeight: "700", color: "#0E1215", background: "#93A0A8", padding: "2px 6px"}}>MKT</span><span style={{color: "#E3E8EB"}}>Two competitors launch AI service desks.</span></div>
</div>
</div>
<div style={{gridColumn: "span 2", background: "#0E1215", border: "1px solid rgba(255,255,255,0.08)", padding: "12px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "12px", fontSize: "11px"}}>
<div><div className="muted">Recommended action</div><div style={{color: "#fff", fontWeight: "600", marginTop: "2px"}}>Update HR helpdesk policy</div></div>
<div><div className="muted">Confidence</div><div style={{display: "flex", alignItems: "center", gap: "8px", marginTop: "4px"}}><div style={{flex: "1", height: "6px", background: "rgba(255,255,255,0.08)"}}><div className="ki-grow" style={{height: "100%", width: "82%", background: "var(--kline)"}}></div></div><span style={{color: "#fff", fontWeight: "600"}}>82%</span></div></div>
<div><div className="muted">Feeds into</div><div style={{color: "#fff", fontWeight: "600", marginTop: "2px"}}>Training plan · Next AI role</div></div>
</div>
</div>
</div>
<div style={{fontSize: "11px", marginTop: "8px"}} className="muted">Illustrative interface</div>
</div>
</div>
</section>
{/* WHERE IT FITS */}
<section className="sec" style={{padding: "76px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px", maxWidth: "860px"}}>
<div className="eyebrow">Where it fits</div>
<h2 className="h2">The organisations that win are the ones that{" "}<span style={{color: "#FE5000"}}>learn fastest.</span></h2>
<p className="lead">Kydon Intelligence is capability 04 of Kydon ZilLearn. Your people learn in the flow of work, your AI agents learn from your best people, and Kydon Intelligence helps the whole organisation learn from the world around it.</p>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px"}}>
<a className="stage" href="/ai-learning-platform" style={{textDecoration: "none"}}><div className="tag" style={{color: "#93A0A8"}}>01 · People learn</div><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600", color: "#fff", fontSize: "18px", marginTop: "4px"}}>AI Learning Platform</div></a>
<a className="stage" href="/platform#capabilities" style={{textDecoration: "none"}}><div className="tag" style={{color: "#93A0A8"}}>02 · AI learns</div><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600", color: "#fff", fontSize: "18px", marginTop: "4px"}}>From your best people</div></a>
<a className="stage" href="/platform#capabilities" style={{textDecoration: "none"}}><div className="tag" style={{color: "#93A0A8"}}>03 · Performance</div><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600", color: "#fff", fontSize: "18px", marginTop: "4px"}}>People and AI, measured</div></a>
<div className="stage kfold" style={{border: "0"}}><div className="tag" style={{color: "#0E1215"}}>04 · The organisation learns</div><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "18px", marginTop: "4px"}}>Kydon Intelligence</div></div>
</div>
</div>
</section>
{/* BEYOND INDIVIDUAL LEARNING */}
<section className="sec" style={{padding: "80px 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start"}}>
<div style={{flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px"}}>
<div className="eyebrow">Beyond individual learning</div>
<h2 className="h2" style={{fontSize: "clamp(30px,3.4vw,46px)"}}>Training makes people better. Intelligence makes the organisation better.</h2>
<p style={{margin: "0"}}>Most learning investment stops at the individual: a course completed, a skill gained. But organisations also need to learn as a whole. They need to notice change early, agree on what it means and adjust what they do, faster than competitors and before regulators or customers force the issue.</p>
<p style={{margin: "0", color: "#E3E8EB"}}>That is organisational capacity. Kydon Intelligence builds it by turning the flood of outside information into a shared, evidence-backed view that leaders can act on, and by feeding it back into how the organisation trains, deploys and decides.</p>
</div>
<div style={{flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "0"}}>
<div style={{display: "flex", gap: "18px", alignItems: "stretch", padding: "22px 0", borderTop: "1px solid rgba(255,255,255,0.1)"}}><div className="big" style={{fontSize: "44px", color: "rgba(255,255,255,0.16)", flex: "0 0 64px"}}>01</div><div><div className="tag">Individual</div><h3 style={{fontSize: "21px", marginTop: "4px"}}>People learn skills</h3><p style={{margin: "4px 0 0", fontSize: "15px"}}>Future Edge Institute and the AI Learning Platform.</p></div></div>
<div style={{display: "flex", gap: "18px", alignItems: "stretch", padding: "22px 0", borderTop: "1px solid rgba(255,255,255,0.1)"}}><div className="big" style={{fontSize: "44px", color: "rgba(255,255,255,0.16)", flex: "0 0 64px"}}>02</div><div><div className="tag">Team</div><h3 style={{fontSize: "21px", marginTop: "4px"}}>People and AI learn together</h3><p style={{margin: "4px 0 0", fontSize: "15px"}}>Kydon AI Co-Workers, FDOs and the learning loop.</p></div></div>
<div style={{display: "flex", gap: "18px", alignItems: "stretch", padding: "24px", background: "#151B20", border: "1px solid rgba(254,80,0,0.5)", position: "relative", overflow: "hidden"}}><div className="plane" aria-hidden="true" style={{left: "0", top: "0", width: "4px", height: "100%", background: "var(--kfold)"}}></div><div className="big" style={{fontSize: "44px", color: "#FE5000", flex: "0 0 64px"}}>03</div><div><div className="tag">Organisation</div><h3 style={{fontSize: "21px", marginTop: "4px"}}>The organisation learns from the world</h3><p style={{margin: "4px 0 0", fontSize: "15px"}}>Kydon Intelligence: sensing change, interpreting it and acting on it together.</p></div></div>
</div>
</div>
</section>
{/* FEATURES */}
<section className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px"}}><div className="eyebrow">Turn complexity into clarity</div><h2 className="h2">Intelligence for a changing world.</h2></div>
<div className="grid4">
<div className="card" style={{display: "flex", flexDirection: "column", gap: "12px"}}><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg><h3 style={{fontSize: "21px"}}>One trusted view</h3><p style={{margin: "0"}}>Bring diverse sources together into a single view your leaders can rely on.</p></div>
<div className="card" style={{display: "flex", flexDirection: "column", gap: "12px"}}><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20V14" /><path d="M10 20V9" /><path d="M16 20V12" /><path d="M22 20V4" /></svg><h3 style={{fontSize: "21px"}}>Early signals</h3><p style={{margin: "0"}}>See what is changing and what is likely next, so you can act ahead of it.</p></div>
<div className="card" style={{display: "flex", flexDirection: "column", gap: "12px"}}><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 8v5" /><path d="M12 16h.01" /></svg><h3 style={{fontSize: "21px"}}>Every insight explained</h3><p style={{margin: "0"}}>Each finding shows why it matters and the evidence behind it.</p></div>
<div className="card" style={{display: "flex", flexDirection: "column", gap: "12px"}}><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg><h3 style={{fontSize: "21px"}}>Decision support</h3><p style={{margin: "0"}}>Turn intelligence into clear, practical recommendations for action.</p></div>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)"}}>
<div style={{background: "#151B20", padding: "24px"}}><div className="tag" style={{fontSize: "11px"}}>Module</div><h3 style={{fontSize: "19px", marginTop: "4px"}}>Overview</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Market signals and key insights on one screen, with what has changed since you last looked.</p></div>
<div style={{background: "#151B20", padding: "24px"}}><div className="tag" style={{fontSize: "11px"}}>Module</div><h3 style={{fontSize: "19px", marginTop: "4px"}}>Monitoring</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>The topics, regulators, competitors and skills you choose, watched continuously.</p></div>
<div style={{background: "#151B20", padding: "24px"}}><div className="tag" style={{fontSize: "11px"}}>Module</div><h3 style={{fontSize: "19px", marginTop: "4px"}}>Insights</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Opportunities, regulatory updates, market developments and risks, flagged as they surface.</p></div>
<div style={{background: "#151B20", padding: "24px"}}><div className="tag" style={{fontSize: "11px"}}>Module</div><h3 style={{fontSize: "19px", marginTop: "4px"}}>Analysis</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>What a change means for your organisation, with the evidence and a confidence level.</p></div>
<div style={{background: "#151B20", padding: "24px"}}><div className="tag" style={{fontSize: "11px"}}>Module</div><h3 style={{fontSize: "19px", marginTop: "4px"}}>Reports</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Briefings for leadership and boards, ready to share and traceable to source.</p></div>
</div>
</div>
</section>
{/* HOW IT WORKS */}
<section id="how" className="sec" style={{padding: "80px 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px"}}><div className="eyebrow">How it works</div><h2 className="h2">From information to decisions.</h2></div>
<div style={{display: "flex", flexWrap: "wrap", gap: "0", alignItems: "stretch"}}>
<div style={{flex: "1 1 220px", padding: "28px", borderTop: "2px solid #2A333A"}}><div className="big" style={{fontSize: "56px", color: "rgba(255,255,255,0.14)"}}>01</div><h3 style={{fontSize: "24px", marginTop: "8px"}}>Discover</h3><p style={{margin: "8px 0 0"}}>Gather relevant information from trusted sources.</p></div>
<div style={{flex: "1 1 220px", padding: "28px", borderTop: "2px solid #5B6770"}}><div className="big" style={{fontSize: "56px", color: "rgba(255,255,255,0.14)"}}>02</div><h3 style={{fontSize: "24px", marginTop: "8px"}}>Analyse</h3><p style={{margin: "8px 0 0"}}>Combine AI with expert judgement to find the patterns.</p></div>
<div style={{flex: "1 1 220px", padding: "28px", borderTop: "2px solid #B83A00"}}><div className="big" style={{fontSize: "56px", color: "rgba(255,255,255,0.14)"}}>03</div><h3 style={{fontSize: "24px", marginTop: "8px"}}>Interpret</h3><p style={{margin: "8px 0 0"}}>Turn findings into clear implications for your organisation.</p></div>
<div style={{flex: "1 1 220px", padding: "28px", borderTop: "2px solid #FE5000"}}><div className="big" style={{fontSize: "56px", color: "#FE5000"}}>04</div><h3 style={{fontSize: "24px", marginTop: "8px"}}>Act</h3><p style={{margin: "8px 0 0"}}>Make faster, more confident decisions, backed by evidence.</p></div>
</div>
</div>
</section>
{/* CLOSING THE LOOP */}
<section className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="streak" style={{top: "14%", left: "30%", animationDelay: "-1s"}}></div>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px", maxWidth: "860px"}}><div className="eyebrow">Closing the loop</div><h2 className="h2">What your organisation learns shapes what it builds next.</h2></div>
<div className="grid3">
<div className="card"><div className="tag">Feeds Develop</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>Which skills to build next</h3><p style={{margin: "8px 0 0"}}>Skills shifts flow into training plans at Future Edge Institute and on the AI Learning Platform.</p></div>
<div className="card"><div className="tag">Feeds Deploy</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>Which roles to add next</h3><p style={{margin: "8px 0 0"}}>Changes in demand and regulation point to the next AI agents worth deploying.</p></div>
<div className="card"><div className="tag">Feeds leadership</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>Decisions with evidence</h3><p style={{margin: "8px 0 0"}}>Leaders see what is changing, what it means and what to do, in one place.</p></div>
</div>
</div>
</section>
{/* TRUST + USE CASES + DEPLOYMENT */}
<section className="sec" style={{padding: "80px 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "72px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "36px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px"}}><div className="eyebrow">Built for confidence</div><h2 className="h2">Transparent. Traceable. Ready for scale.</h2></div>
<div className="grid4">
<div style={{borderTop: "2px solid #FE5000", paddingTop: "16px"}}><h3 style={{fontSize: "20px"}}>Evidence and traceability</h3><p style={{margin: "8px 0 0"}}>Every insight is traceable to its source.</p></div>
<div style={{borderTop: "2px solid #FE5000", paddingTop: "16px"}}><h3 style={{fontSize: "20px"}}>Confidence levels</h3><p style={{margin: "8px 0 0"}}>Clear confidence levels help you judge when to act.</p></div>
<div style={{borderTop: "2px solid #FE5000", paddingTop: "16px"}}><h3 style={{fontSize: "20px"}}>Your data protected</h3><p style={{margin: "8px 0 0"}}>Access only to what you approve, under the data protection law of each market.</p></div>
<div style={{borderTop: "2px solid #FE5000", paddingTop: "16px"}}><h3 style={{fontSize: "20px"}}>Flexible deployment</h3><p style={{margin: "8px 0 0"}}>Cloud, private cloud or on-premises, to fit your requirements.</p></div>
</div>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "36px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px"}}><div className="eyebrow">Use cases</div><h2 className="h2">Real impact across your organisation.</h2></div>
<div className="grid4">
<div className="card" style={{padding: "26px 26px 26px 26px", position: "relative", overflow: "hidden", minHeight: "170px"}}><div className="plane" aria-hidden="true" style={{right: "0", top: "0", width: "64px", height: "100%", background: "var(--kfold)", clipPath: "polygon(62% 0,100% 0,100% 100%,0 100%)"}}></div><h3 style={{fontSize: "21px", maxWidth: "78%"}}>Regulatory and policy monitoring</h3><p style={{margin: "10px 0 0", fontSize: "14px", maxWidth: "80%"}}>Track new rules and guidance in every market you operate in, and what each means for your processes.</p></div><div className="card" style={{padding: "26px 26px 26px 26px", position: "relative", overflow: "hidden", minHeight: "170px"}}><div className="plane" aria-hidden="true" style={{right: "0", top: "0", width: "64px", height: "100%", background: "var(--kfold)", clipPath: "polygon(62% 0,100% 0,100% 100%,0 100%)"}}></div><h3 style={{fontSize: "21px", maxWidth: "78%"}}>Market and competitive insight</h3><p style={{margin: "10px 0 0", fontSize: "14px", maxWidth: "80%"}}>See competitor moves, customer shifts and new entrants early enough to respond.</p></div><div className="card" style={{padding: "26px 26px 26px 26px", position: "relative", overflow: "hidden", minHeight: "170px"}}><div className="plane" aria-hidden="true" style={{right: "0", top: "0", width: "64px", height: "100%", background: "var(--kfold)", clipPath: "polygon(62% 0,100% 0,100% 100%,0 100%)"}}></div><h3 style={{fontSize: "21px", maxWidth: "78%"}}>Strategic planning</h3><p style={{margin: "10px 0 0", fontSize: "14px", maxWidth: "80%"}}>Ground plans and board papers in current, sourced evidence rather than last year's assumptions.</p></div><div className="card" style={{padding: "26px 26px 26px 26px", position: "relative", overflow: "hidden", minHeight: "170px"}}><div className="plane" aria-hidden="true" style={{right: "0", top: "0", width: "64px", height: "100%", background: "var(--kfold)", clipPath: "polygon(62% 0,100% 0,100% 100%,0 100%)"}}></div><h3 style={{fontSize: "21px", maxWidth: "78%"}}>Workforce and skills</h3><p style={{margin: "10px 0 0", fontSize: "14px", maxWidth: "80%"}}>Spot the skills your sector will need next and feed them into training and AI agent plans.</p></div>
</div>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "28px"}}>
<div className="tag" style={{color: "#93A0A8"}}>Deployment options</div>
<div className="grid3">
<div style={{borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: "16px"}}><h3 style={{fontSize: "21px"}}>Cloud</h3><p style={{margin: "8px 0 0"}}>Rapid deployment with full feature access and automatic updates.</p></div>
<div style={{borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: "16px"}}><h3 style={{fontSize: "21px"}}>Private cloud</h3><p style={{margin: "8px 0 0"}}>Greater control with a dedicated environment in your infrastructure.</p></div>
<div style={{borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: "16px"}}><h3 style={{fontSize: "21px"}}>On-premises</h3><p style={{margin: "8px 0 0"}}>Deploy within your own environment to meet specific security and compliance needs.</p></div>
</div>
</div>
</div>
</section>
{/* DEMO */}
<section id="demo" className="sec" style={{padding: "80px 0", background: "var(--kfold)"}}>
<div className="plane" aria-hidden="true" style={{left: "0", top: "0", width: "28%", height: "100%", background: "linear-gradient(90deg,rgba(14,18,21,0.22),rgba(14,18,21,0))", clipPath: "polygon(0 0,100% 0,60% 100%,0 100%)"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "36px", alignItems: "center"}}>
<div style={{flex: "1 1 420px", display: "flex", flexDirection: "column", gap: "14px"}}>
<div className="tag" style={{color: "#0E1215"}}>Kydon Intelligence</div>
<h2 className="h2" style={{color: "#0E1215"}}>Make intelligence actionable.</h2>
<p style={{margin: "0", fontSize: "18px", color: "#0E1215", fontWeight: "500"}}>See how Kydon Intelligence helps your organisation monitor change, reduce risk and decide with confidence.</p>
</div>
{LEAD_FORMS.demo.formId ? (<>
<form onSubmit={V.submit} style={{flex: "1 1 420px", background: "#0E1215", padding: "34px", display: "flex", flexDirection: "column", gap: "16px", boxSizing: "border-box", boxShadow: "0 30px 70px rgba(0,0,0,0.35)"}} aria-label="Request a demo">
<h3 style={{fontSize: "24px"}}>Request a demo</h3>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "14px"}}>
<label className="fld">First name<input type="text" name="firstname" autoComplete="given-name" required /></label>
<label className="fld">Last name<input type="text" name="lastname" autoComplete="family-name" required /></label>
<label className="fld">Work email<input type="email" name="email" autoComplete="email" required /></label>
<label className="fld">Organisation<input type="text" name="company" autoComplete="organization" required /></label>
</div>
<button className="btn" type="submit" disabled={V.sending} style={{alignSelf: "flex-start", border: "0", cursor: "pointer"}}>{V.sending ? 'Sending…' : 'Request a demo'}</button>
</form>
{(V.sent) && (<><p role="status" style={{margin: "10px 0 0", color: "#3DDC84", fontWeight: "600", fontSize: "15px"}}>Thanks. We'll be in touch to set up your demo.</p></>)}
</>) : (<div style={{flex: "1 1 420px", background: "#0E1215", padding: "34px", display: "flex", flexDirection: "column", gap: "16px", boxSizing: "border-box", boxShadow: "0 30px 70px rgba(0,0,0,0.35)"}}><h3 style={{fontSize: "24px"}}>Request a demo</h3><p style={{margin: "0"}}>Tell us about your organisation and we'll set up a demo of Kydon Intelligence.</p><a className="btn" href="/contact" style={{alignSelf: "flex-start"}}>Request a demo →</a></div>)}
</div>
</section>

</div>
  )
}
