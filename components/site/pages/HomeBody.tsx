'use client'
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element, react/no-unescaped-entities */
// Generated from the approved design mock-up (HomePlatform). Edit freely.
import { Fragment } from 'react'
import { DCLogic, useDC } from '@/lib/dc'
import InsightStripCards from '@/components/site/insight-strip-cards'
import type { InsightCard } from '@/lib/insights'

class HomeLogic extends DCLogic {
renderVals(): any {
const logos = [{ name:"MINDEF Singapore", src:'/images/site/client-mindef-singapore.png' },{ name:"Ministry of Education", src:'/images/site/client-moe-singapore.png' },{ name:"Ministry of Home Affairs", src:'/images/site/client-mha-singapore.png' },{ name:"People's Association", src:'/images/site/client-peoples-association.png' },{ name:"IMDA", src:'/images/site/client-imda-singapore.png' },{ name:"Korn Ferry", src:'/images/site/client-korn-ferry.png' },{ name:"ResMed", src:'/images/site/client-resmed.png' },{ name:"Ping An", src:'/images/site/client-ping-an.png' },{ name:"Australian Volunteers", src:'/images/site/client-australian-volunteers.png' },{ name:"UWC South East Asia", src:'/images/site/client-uwc-sea.png' },{ name:"PAVE", src:'/images/site/client-pave-singapore.png' }];
const cws = [
{ name:'Rina', role:'AI Receptionist', fn:'Customer', img:'/images/site/coworker-rina.jpg', stat:'40%', statl:'more bookings' },
{ name:'Ethan', role:'AI Customer Care Officer', fn:'Customer', img:'/images/site/coworker-ethan.jpg', stat:'70%', statl:'lower support costs' },
{ name:'Farah', role:'AI Finance Assistant', fn:'Finance', img:'/images/site/coworker-farah.jpg', stat:'4 to 1.5', statl:'days to close' },
{ name:'Sanjay', role:'AI Sales Development Associate', fn:'Sales', img:'/images/site/coworker-sanjay.jpg', stat:'95%', statl:'faster first contact' },
{ name:'Mei', role:'AI Marketing and Content Executive', fn:'Marketing', img:'/images/site/coworker-mei.jpg', stat:'10x', statl:'content output' },
{ name:'Tara', role:'AI Talent and Market Researcher', fn:'Research', img:'/images/site/coworker-tara.jpg', stat:'500+', statl:'profiles a week' },
{ name:'Omar', role:'AI Operations Coordinator', fn:'Operations', img:'/images/site/coworker-omar.jpg', stat:'80%', statl:'fewer missed deadlines' },
{ name:'Nadia', role:'AI Quality and Compliance Auditor', fn:'Risk and Compliance', img:'/images/site/coworker-nadia.jpg', stat:'100%', statl:'of calls audited' },
{ name:'Hafiz', role:'AI Bid Analyst', fn:'Risk and Compliance', img:'/images/site/coworker-hafiz.jpg', stat:'200 pages', statl:'into one record' },
{ name:'Grace', role:'AI Executive Assistant', fn:'Executive', img:'/images/site/coworker-grace.jpg', stat:'3h to 35m', statl:'of email a day' }
].map(c => ({ ...c, alt: c.name + ', ' + c.role }));
return { logos: logos.concat(logos), cws };
}
}

export default function HomeBody({ insights }: { insights: InsightCard[] }) {
  const V: any = useDC(HomeLogic)
  return (
<div className="k p-home">

{/* HERO: people first */}
<section className="sec" style={{padding: "72px 0 84px", background: "radial-gradient(900px 520px at 80% 35%,rgba(254,80,0,0.12),rgba(14,18,21,0) 70%)"}}>
<div className="streak" style={{top: "20%", left: "0"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center"}}>
<div style={{flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px"}}>
<div className="eyebrow">Kydon ZilLearn · Learning and performance platform</div>
<h1 style={{fontSize: "clamp(44px,5.8vw,84px)", lineHeight: "0.96", fontWeight: "800"}}>The platform where people and AI agents{" "}<span style={{color: "#FE5000"}}>learn to perform together.</span></h1>
<p className="lead" style={{fontSize: "19px"}}>Whatever AI agents your teams work with, Kydon ZilLearn makes your people and your agents learn from each other, so performance keeps improving long after go-live.</p>
<div style={{display: "flex", gap: "16px", flexWrap: "wrap"}}><a className="btn" href="/platform">See the platform{" "}<span aria-hidden="true">→</span></a><a className="btn-line" href="/contact">Book an assessment</a></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: "20px", paddingTop: "18px", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "6px"}}>
<div><div className="big" style={{fontSize: "40px"}}>100K+</div><div className="muted" style={{fontSize: "14px", marginTop: "6px"}}>learners on our platforms</div></div>
<div><div className="big" style={{fontSize: "40px"}}>100+</div><div className="muted" style={{fontSize: "14px", marginTop: "6px"}}>customers</div></div>
<div><div className="big" style={{fontSize: "40px"}}>10</div><div className="muted" style={{fontSize: "14px", marginTop: "6px"}}>countries</div></div>
<div><div className="big" style={{fontSize: "40px"}}>20+</div><div className="muted" style={{fontSize: "14px", marginTop: "6px"}}>years designing learning</div></div>
</div>
</div>
<div className="herovis" style={{flex: "1 1 500px", minWidth: "0", position: "relative", padding: "0 0 40px 28px"}}>
<div style={{position: "relative", height: "520px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)"}}>
<div className="plane" aria-hidden="true" style={{right: "0", top: "0", width: "34%", height: "100%", background: "var(--kfold)", clipPath: "polygon(70% 0,100% 0,100% 100%,30% 100%)", zIndex: "1", opacity: "0.85"}}></div>
<img src="/images/site/photo-444a8290.jpg" alt="A Kydon team working through ideas together at a wall" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "62% 40%"}} />
<div aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(14,18,21,0) 55%,rgba(14,18,21,0.75) 100%)", zIndex: "1"}}></div>
</div>
<div className="float2" style={{position: "absolute", left: "0", bottom: "0", width: "300px", background: "#151B20", border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 24px 60px rgba(0,0,0,0.55)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px", zIndex: "2"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", color: "#fff", fontSize: "14px"}}>kydon{" "}<span style={{fontWeight: "500", color: "#93A0A8"}}>| your workforce this month</span></div></div>
<div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px"}}>
<div><div className="big" style={{fontSize: "26px", color: "#FE5000"}}>−34%</div><div style={{fontSize: "11px"}} className="muted">time to competence</div></div>
<div><div className="big" style={{fontSize: "26px"}}>12</div><div style={{fontSize: "11px"}} className="muted">staff coached to supervise AI</div></div>
<div><div className="big" style={{fontSize: "26px"}}>46</div><div style={{fontSize: "11px"}} className="muted">expert know-how items captured</div></div>
<div><div className="big" style={{fontSize: "26px"}}>128</div><div style={{fontSize: "11px"}} className="muted">AI corrections learned</div></div>
</div>
<div style={{display: "flex", alignItems: "center", gap: "8px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "10px"}}>
<div style={{display: "flex"}}><span aria-hidden="true" style={{width: "26px", height: "26px", borderRadius: "50%", background: "var(--kfold)", color: "#0E1215", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "11px", boxSizing: "border-box", border: "2px solid #151B20"}}>R</span><span aria-hidden="true" style={{width: "26px", height: "26px", borderRadius: "50%", background: "var(--kfold)", color: "#0E1215", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "11px", boxSizing: "border-box", border: "2px solid #151B20", marginLeft: "-8px"}}>G</span><span aria-hidden="true" style={{width: "26px", height: "26px", borderRadius: "50%", background: "var(--kfold)", color: "#0E1215", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "11px", boxSizing: "border-box", border: "2px solid #151B20", marginLeft: "-8px"}}>F</span></div>
<div style={{fontSize: "11px"}} className="muted"><span className="live"></span>{" "}6 AI agents supporting the team</div>
</div>
</div>
<div style={{fontSize: "11px", marginTop: "8px", textAlign: "right"}} className="muted mhide">Illustrative figures</div>
</div>
</div>
</section>
{/* LOGO MARQUEE */}
<section style={{borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "22px 0", overflow: "hidden", background: "#11161A"}}>
<div style={{display: "flex", alignItems: "center", gap: "28px"}}>
<div style={{flex: "none", paddingLeft: "32px", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#93A0A8", fontWeight: "600", whiteSpace: "nowrap"}}>Trusted by</div>
<div style={{overflow: "hidden", flex: "1", minWidth: "0"}}><div className="marq" style={{display: "flex", gap: "16px", width: "max-content", animation: "marquee 50s linear infinite"}}>
{(V.logos).map((l: any, __i0: number) => (<Fragment key={__i0}><img className="clogo" src={l.src} alt={l.name} style={{height: "76px", width: "152px", objectFit: "contain", display: "block", flex: "none", borderRadius: "3px"}} /></Fragment>))}
</div></div>
</div>
</section>
{/* WORKS WITH YOUR AGENTS */}
<section id="agents" className="sec" style={{padding: "80px 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px"}}><div className="eyebrow">Any agent, one platform</div><h2 className="h2">Built to work with the AI agents you already have.</h2></div>
<p className="lead" style={{maxWidth: "440px", fontSize: "17px"}}>Your value is not in which agents you buy. It is in how well your people and your agents learn to perform together.</p>
</div>
<div className="mstack" style={{display: "grid", gridTemplateColumns: "1fr auto 1.25fr auto 1fr", gap: "16px", alignItems: "stretch"}}>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
<div className="card" style={{padding: "20px"}}><div className="tag" style={{fontSize: "11px", color: "#93A0A8"}}>Your own agents</div><p style={{margin: "6px 0 0", fontSize: "15px", color: "#E3E8EB"}}>Built in-house or with partners</p></div>
<div className="card" style={{padding: "20px"}}><div className="tag" style={{fontSize: "11px", color: "#93A0A8"}}>Agents in your software</div><p style={{margin: "6px 0 0", fontSize: "15px", color: "#E3E8EB"}}>Arriving inside the business tools you already use</p></div>
<div className="card" style={{padding: "20px"}}><div className="tag" style={{fontSize: "11px"}}>Kydon AI Co-Workers</div><p style={{margin: "6px 0 0", fontSize: "15px", color: "#E3E8EB"}}>Ten ready-built roles, live in weeks</p></div>
</div>
<div className="marrow" aria-hidden="true" style={{display: "flex", alignItems: "center", color: "#FE5000", fontSize: "28px"}}>⇄</div>
<div style={{position: "relative", background: "#151B20", border: "1px solid rgba(254,80,0,0.6)", padding: "28px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center", overflow: "hidden"}}>
<div className="plane" aria-hidden="true" style={{left: "0", top: "0", width: "100%", height: "4px", background: "var(--kfold)"}}></div>
<div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", color: "#fff", fontSize: "30px", lineHeight: "1"}}>Kydon{" "}<span style={{color: "#FE5000"}}>ZilLearn</span></div>
<div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "14px"}}>
<div style={{border: "1px solid rgba(255,255,255,0.12)", padding: "10px"}}><strong style={{color: "#fff"}}>People learn</strong><br /><span className="muted">in the flow of work</span></div>
<div style={{border: "1px solid rgba(255,255,255,0.12)", padding: "10px"}}><strong style={{color: "#fff"}}>AI learns</strong><br /><span className="muted">from your best people</span></div>
<div style={{border: "1px solid rgba(255,255,255,0.12)", padding: "10px"}}><strong style={{color: "#fff"}}>Performance</strong><br /><span className="muted">measured across both</span></div>
<div style={{border: "1px solid rgba(255,255,255,0.12)", padding: "10px"}}><strong style={{color: "#fff"}}>The organisation</strong><br /><span className="muted">learns from the world</span></div>
</div>
</div>
<div className="marrow" aria-hidden="true" style={{display: "flex", alignItems: "center", color: "#FE5000", fontSize: "28px"}}>⇄</div>
<div className="mimg" style={{position: "relative", minHeight: "240px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)"}}><img src="/images/site/zillearn-hero.jpg" alt="A team member learning on a tablet" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "88% 50%"}} /><div aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(14,18,21,0) 45%,rgba(14,18,21,0.9) 100%)"}}></div><div style={{position: "absolute", left: "16px", bottom: "14px", color: "#fff", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "20px"}}>Your people</div></div>
</div>
<p style={{margin: "0", fontSize: "13px"}} className="muted">Kydon ZilLearn is designed to work with any AI agent. Connectors for third-party agents are on our roadmap.</p>
</div>
</section>
{/* THE SHIFT */}
<section className="sec" style={{padding: "80px 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexWrap: "wrap", gap: "36px", alignItems: "flex-end"}}>
<div style={{flex: "1 1 560px", display: "flex", flexDirection: "column", gap: "20px"}}><div className="eyebrow">The shift</div><h2 className="h2">AI is becoming a co-worker.{" "}<span className="muted">Most organisations are buying AI, not preparing their people to work with it.</span></h2></div>
<div style={{flex: "0 1 380px", borderLeft: "2px solid #FE5000", paddingLeft: "24px"}}><div className="big" style={{fontSize: "80px", color: "#FE5000"}}>95%</div><p style={{margin: "10px 0 0"}}>of organisations saw no P&L return from their GenAI pilots (MIT NANDA). The model is rarely the problem. The work around it is.</p></div>
</div>
<div className="grid4">
<div className="card"><div className="tag">No one owns it</div><p style={{margin: "10px 0 0"}}>The pilot ends and nobody runs or improves it.</p></div>
<div className="card"><div className="tag">No one trusts it</div><p style={{margin: "10px 0 0"}}>Risk teams can't see what the AI did or why.</p></div>
<div className="card"><div className="tag">It doesn't fit the work</div><p style={{margin: "10px 0 0"}}>Generic tools don't match how teams actually work.</p></div>
<div className="card"><div className="tag">People are left behind</div><p style={{margin: "10px 0 0"}}>Staff avoid or fear AI they were never shown how to use.</p></div>
</div>
<p style={{margin: "0", fontFamily: "var(--font-league-spartan),sans-serif", fontSize: "clamp(22px,2.4vw,32px)", lineHeight: "1.2", color: "#fff", maxWidth: "900px"}}>Three of these four are people and learning problems, not technology problems.{" "}<span style={{color: "#FE5000"}}>That is where Kydon is strongest.</span></p>
</div>
</section>
{/* THE KYDON PLATFORM */}
<section id="platform" className="sec" style={{padding: "84px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="streak" style={{top: "10%", left: "25%", animationDelay: "-1s"}}></div>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "36px"}}>
<div style={{display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "flex-end", justifyContent: "space-between"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "780px"}}><div className="eyebrow">Kydon ZilLearn</div><h2 className="h2">Four things it does for any team of people and AI.</h2></div>
<a className="btn-line" href="/platform">Explore the platform →</a>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "16px"}}>
<a href="/ai-learning-platform" className="card" style={{textDecoration: "none", color: "#B9C2C8", display: "flex", flexDirection: "column", gap: "10px", padding: "0", overflow: "hidden"}}><img src="/images/site/photo-444a8625.jpg" alt="Professionals working through notes together" style={{width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block"}} /><div style={{padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: "8px"}}><div className="tag">01 · People learn</div><h3 style={{fontSize: "22px"}}>In the flow of work</h3><p style={{margin: "0", fontSize: "15px"}}>A coach, trainer and assessor alongside the agents your teams use, so staff learn to work with, check and supervise AI.</p><span style={{color: "#FF7A3D", fontWeight: "600", fontSize: "14px"}}>AI Learning Platform →</span></div></a>
<div className="card" style={{color: "#B9C2C8", display: "flex", flexDirection: "column", gap: "10px", padding: "0", overflow: "hidden"}}><img src="/images/site/ill-team-ai.jpg" alt="A team working alongside AI agents" style={{width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block"}} /><div style={{padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: "8px"}}><div className="tag">02 · AI learns</div><h3 style={{fontSize: "22px"}}>From your best people</h3><p style={{margin: "0", fontSize: "15px"}}>Corrections and expert judgement are captured and fed back, so your agents get better and know-how stays when people leave.</p></div></div>
<div className="card" style={{color: "#B9C2C8", display: "flex", flexDirection: "column", gap: "10px", padding: "0", overflow: "hidden"}}><img src="/images/site/ill-highfive.jpg" alt="A team celebrating performance that keeps improving" style={{width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block"}} /><div style={{padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: "8px"}}><div className="tag">03 · Performance</div><h3 style={{fontSize: "22px"}}>Measured across people and AI</h3><p style={{margin: "0", fontSize: "15px"}}>One view of agent accuracy, time to competence, work shifted to higher value and know-how captured.</p></div></div>
<a href="/kydon-intelligence" className="card" style={{textDecoration: "none", color: "#B9C2C8", display: "flex", flexDirection: "column", gap: "10px", padding: "0", overflow: "hidden"}}><img src="/images/site/ill-man-hologram.jpg" alt="A professional reading signals with AI" style={{width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block"}} /><div style={{padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: "8px"}}><div className="tag">04 · The organisation learns</div><h3 style={{fontSize: "22px"}}>From the world around it</h3><p style={{margin: "0", fontSize: "15px"}}>Spot change early and feed it into what your people learn and which agents you add next.</p><span style={{color: "#FF7A3D", fontWeight: "600", fontSize: "14px"}}>Kydon Intelligence →</span></div></a>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)"}}>
<div style={{background: "#151B20", padding: "20px"}}><div className="tag" style={{fontSize: "11px"}}>Built in · Governance</div><p style={{margin: "8px 0 0", fontSize: "15px"}}>Controls matched to the risk of each agent's work, with a full audit trail.</p></div>
<div style={{background: "#151B20", padding: "20px"}}><div className="tag" style={{fontSize: "11px"}}>Built in · Measured monthly</div><p style={{margin: "8px 0 0", fontSize: "15px"}}>One report that pairs performance with learning, in hard numbers.</p></div>
<div style={{background: "#151B20", padding: "20px"}}><div className="tag" style={{fontSize: "11px"}}>Built in · Deployed forward</div><p style={{margin: "8px 0 0", fontSize: "15px"}}>A Kydon-trained operator inside your team from day one.</p></div>
</div>
</div>
</section>
{/* THE LOOP COMPOUNDS */}
<section className="sec" style={{padding: "84px 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center"}}>
<div style={{flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
<div className="eyebrow">Why it compounds</div>
<h2 className="h2" style={{fontSize: "clamp(32px,3.8vw,52px)"}}>Performance is the entry ticket. Learning is the lasting advantage.</h2>
<p className="lead" style={{fontSize: "17px"}}>Most AI is at its best on launch day. A Kydon workforce gets better every month, because the platform captures what your best people know and shows everyone else how to work with AI.</p>
<p style={{margin: "0", color: "#E3E8EB"}}>That is why we report learning with hard measures, not as a soft benefit: time to competence, work shifted to higher value and know-how captured.</p>
<div style={{borderLeft: "2px solid #FE5000", padding: "6px 0 6px 18px", color: "#fff", fontFamily: "var(--font-league-spartan),sans-serif", fontSize: "20px", lineHeight: "1.3"}}>Every deployment makes the platform better.</div>
</div>
<div style={{flex: "1 1 440px", minWidth: "0", display: "flex", justifyContent: "center"}}>
<svg viewBox="-70 0 580 440" width="100%" style={{maxWidth: "540px"}} role="img" aria-label="The learning loop: people learn from AI, AI learns from people">
<defs><linearGradient id="kf" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#B83A00" /><stop offset="1" stopColor="#FE5000" /></linearGradient>
<marker id="ah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#FE5000" /></marker></defs>
<circle cx="220" cy="220" r="150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="40" />
<path d="M220 70 A150 150 0 0 1 220 370" fill="none" stroke="url(#kf)" strokeWidth="4" markerEnd="url(#ah)" />
<path d="M220 370 A150 150 0 0 1 220 70" fill="none" stroke="#5B6770" strokeWidth="4" markerEnd="url(#ah)" />
<rect x="150" y="190" width="140" height="60" fill="#151B20" stroke="rgba(254,80,0,0.6)" />
<text x="220" y="215" textAnchor="middle" fill="#fff" fontFamily="League Spartan,sans-serif" fontWeight="700" fontSize="15">Kydon platform</text>
<text x="220" y="235" textAnchor="middle" fill="#93A0A8" fontFamily="Montserrat,sans-serif" fontSize="11">run by your FDO</text>
<text x="440" y="200" textAnchor="middle" fill="#FE5000" fontFamily="League Spartan,sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5">AI LEARNS</text>
<text x="440" y="218" textAnchor="middle" fill="#FE5000" fontFamily="League Spartan,sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5">FROM PEOPLE</text>
<text x="440" y="240" textAnchor="middle" fill="#B9C2C8" fontFamily="Montserrat,sans-serif" fontSize="11">corrections</text>
<text x="440" y="254" textAnchor="middle" fill="#B9C2C8" fontFamily="Montserrat,sans-serif" fontSize="11">and know-how</text>
<text x="0" y="200" textAnchor="middle" fill="#E3E8EB" fontFamily="League Spartan,sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5">PEOPLE LEARN</text>
<text x="0" y="218" textAnchor="middle" fill="#E3E8EB" fontFamily="League Spartan,sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5">FROM AI</text>
<text x="0" y="240" textAnchor="middle" fill="#B9C2C8" fontFamily="Montserrat,sans-serif" fontSize="11">coaching in</text>
<text x="0" y="254" textAnchor="middle" fill="#B9C2C8" fontFamily="Montserrat,sans-serif" fontSize="11">the flow of work</text>
</svg>
</div>
</div>
</section>
{/* DEPLOYED FORWARD */}
<section id="fdo" className="sec" style={{padding: "84px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center"}}>
<div style={{flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
<div className="eyebrow">People make it work</div>
<h2 className="h2" style={{fontSize: "clamp(32px,3.8vw,52px)"}}>Our platform, deployed forward by people.</h2>
<p className="lead" style={{fontSize: "17px"}}>Software alone stalls after the demo. So every Kydon deployment comes with a Forward Deployed Operator: a Kydon-trained specialist inside your team who switches the platform on, connects it to your agents, handles exceptions, coaches your staff and improves performance every month.</p>
<div style={{display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "1px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)"}}>
<div style={{background: "#151B20", padding: "20px"}}><div className="tag" style={{fontSize: "11px"}}>Shared or dedicated</div><p style={{margin: "8px 0 0", fontSize: "15px"}}>One operator seat can support a whole growing business.</p></div>
<div style={{background: "#151B20", padding: "20px"}}><div className="tag" style={{fontSize: "11px"}}>Trained at FEI</div><p style={{margin: "8px 0 0", fontSize: "15px"}}>Every FDO comes through Future Edge Institute, the talent engine of the AI Workforce Factory™.</p></div>
</div>
<div style={{display: "flex", gap: "14px", flexWrap: "wrap"}}><a className="btn-line" href="/ai-workforce-factory">The AI Workforce Factory™</a><a className="btn-line" href="/careers#fdo">Become an FDO</a></div>
</div>
<div style={{flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px"}}>
<div style={{position: "relative", height: "300px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)"}}><img src="/images/site/photo-444a8275.jpg" alt="A Kydon specialist walking through work on screen" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%"}} /><div aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(14,18,21,0) 50%,rgba(14,18,21,0.85) 100%)"}}></div><div style={{position: "absolute", left: "18px", bottom: "16px", right: "18px", color: "#fff", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600", fontSize: "18px", borderLeft: "2px solid #FE5000", paddingLeft: "10px"}}>Coaching your team in the flow of work</div></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px"}}>
<div style={{position: "relative", height: "200px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)"}}><img src="/images/site/photo-444a8876.jpg" alt="A Kydon operator in conversation with a client team" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% 40%"}} /></div>
<div style={{position: "relative", height: "200px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)"}}><img src="/images/site/photo-444a8262.jpg" alt="A Kydon operator at work across several systems" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "40% 50%"}} /></div>
</div>
<div style={{fontSize: "13px"}} className="muted">Real people, trained by Kydon, working inside client teams in Singapore and Australia.</div>
</div>
</div>
</section>
{/* READY-BUILT CO-WORKERS (supporting role) */}
<section className="sec" style={{padding: "80px 0 76px"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px", maxWidth: "720px"}}><div className="eyebrow">No agents yet?</div><h2 className="h2">Start with ready-built Kydon AI Co-Workers.</h2><p className="lead">Ten ready-built roles, live in 1 to 2 weeks, with learning built in from day one. Already have agents? Kydon ZilLearn works with those too.</p></div>
<div style={{display: "flex", gap: "14px", flexWrap: "wrap"}}><a className="btn-line" href="/ai-co-workers">See all ten</a><a className="btn" href="/ai-co-workers#catalogue">Download the catalogue</a></div>
</div>
<div style={{overflowX: "auto", padding: "0 32px 16px"}}><div style={{display: "flex", gap: "16px", width: "max-content", margin: "0 auto"}}>
{(V.cws).map((c: any, __i0: number) => (<Fragment key={__i0}>
<a className="cw" href="/ai-co-workers"><img src={c.img} alt={c.alt} /><div style={{padding: "16px 18px", display: "flex", flexDirection: "column", gap: "4px"}}><div className="tag" style={{fontSize: "11px"}}>{c.fn}</div><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", color: "#fff", fontSize: "20px"}}>{c.name}</div><div style={{fontSize: "13px"}}>{c.role}</div><div style={{fontSize: "13px", color: "#FFFFFF", marginTop: "8px", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.1)"}}><strong style={{color: "#FE5000", marginRight: "6px"}}>{c.stat}</strong>{c.statl}</div></div></a>
</Fragment>))}
</div></div>
</section>
{/* RESULTS */}
<section className="sec" style={{padding: "76px 0", background: "var(--kfold)"}}>
<div aria-hidden="true" style={{position: "absolute", right: "-5%", top: "0", width: "40%", height: "100%", background: "var(--kfacet)", opacity: "0.55", clipPath: "polygon(30% 0,100% 0,100% 100%,0 100%)"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexDirection: "column", gap: "40px"}}>
<h2 className="h2" style={{color: "#0E1215", maxWidth: "820px"}}>A workforce that shows up in the numbers.</h2>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "28px"}}>
<div style={{borderTop: "2px solid #0E1215", paddingTop: "16px"}}><div className="big" style={{fontSize: "72px", color: "#0E1215"}}>85%</div><p style={{margin: "8px 0 0", color: "#0E1215", fontWeight: "500"}}>faster application processing</p></div>
<div style={{borderTop: "2px solid #0E1215", paddingTop: "16px"}}><div className="big" style={{fontSize: "72px", color: "#0E1215"}}>90%</div><p style={{margin: "8px 0 0", color: "#0E1215", fontWeight: "500"}}>faster customer responses on WhatsApp</p></div>
<div style={{borderTop: "2px solid #0E1215", paddingTop: "16px"}}><div className="big" style={{fontSize: "72px", color: "#0E1215"}}>3x</div><p style={{margin: "8px 0 0", color: "#0E1215", fontWeight: "500"}}>more work handled by the same team</p></div>
<div style={{borderTop: "2px solid #0E1215", paddingTop: "16px"}}><div className="big" style={{fontSize: "72px", color: "#0E1215"}}>100%</div><p style={{margin: "8px 0 0", color: "#0E1215", fontWeight: "500"}}>of customer calls quality-audited, up from under 10%</p></div>
</div>
<p style={{margin: "0", fontSize: "13px", color: "#0E1215"}}>Kydon client deployments; client names withheld.</p>
</div>
</section>
{/* WHY KYDON */}
<section id="businesses" className="sec" style={{padding: "84px 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px"}}><div className="eyebrow">Where we sit</div><h2 className="h2">Others build agents or run courses. We make people and AI perform together.</h2></div>
<div style={{overflowX: "auto", border: "1px solid rgba(255,255,255,0.1)"}}>
<table className="tbl">
<thead><tr><th style={{width: "18%"}}></th><th>AI agent builders</th><th>Learning management systems</th><th style={{color: "#FE5000"}}>Kydon ZilLearn</th></tr></thead>
<tbody>
<tr><td data-label=""><strong style={{color: "#fff"}}>Focus</strong></td><td data-label="AI agent builders">Building the agent</td><td data-label="Learning management systems">Courses, separate from the work</td><td data-label="Kydon ZilLearn" className="kyd">People and agents learning together, inside the work</td></tr>
<tr><td data-label=""><strong style={{color: "#fff"}}>Works with</strong></td><td data-label="AI agent builders">Their own agents</td><td data-label="Learning management systems">Learning content</td><td data-label="Kydon ZilLearn" className="kyd">Any agent, yours or ours</td></tr>
<tr><td data-label=""><strong style={{color: "#fff"}}>After go-live</strong></td><td data-label="AI agent builders">Support tickets</td><td data-label="Learning management systems">Course completions</td><td data-label="Kydon ZilLearn" className="kyd">An embedded operator who coaches and improves</td></tr>
<tr><td data-label=""><strong style={{color: "#fff"}}>Measures</strong></td><td data-label="AI agent builders">Tasks automated</td><td data-label="Learning management systems">Hours of training</td><td data-label="Kydon ZilLearn" className="kyd">Performance and learning, together</td></tr>
<tr><td data-label=""><strong style={{color: "#fff"}}>Outcome</strong></td><td data-label="AI agent builders">Efficiency</td><td data-label="Learning management systems">Compliance</td><td data-label="Kydon ZilLearn" className="kyd">Performance that keeps improving</td></tr>
</tbody>
</table>
</div>
<div style={{display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between", background: "#151B20", border: "1px solid rgba(255,255,255,0.08)", padding: "28px 32px", position: "relative", overflow: "hidden"}}>
<div className="plane" aria-hidden="true" style={{left: "0", top: "0", width: "5px", height: "100%", background: "var(--kfold)"}}></div>
<div style={{display: "flex", alignItems: "center", gap: "22px", flexWrap: "wrap"}}><img src="/images/site/aiwf-horizontal-white.png" alt="AI Workforce Factory\u2122" style={{height: "44px", width: "auto"}} /><p style={{margin: "0", maxWidth: "560px"}}>The talent engine behind the platform. Future Edge Institute develops the FDOs who deploy it, and the AI entrepreneurs who build on it.</p></div>
<div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}><a className="btn-line" href="/ai-workforce-factory">The framework</a><a className="btn-line" href="https://futureedgeinstitute.com">Future Edge Institute ↗</a></div>
</div>
<div style={{fontSize: "14px"}} className="muted">Also from Kydon Systems:{" "}<a href="https://lsi.kydongrp.com/">Kydon Learning Systems Institute ↗</a>, 500,000+ hours of learning design, content and systems.</div>
</div>
</section>
{/* KYDON ADVANTAGE */}
<section id="advantage" className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px"}}><div className="eyebrow">The Kydon advantage</div><h2 className="h2">Why organisations choose Kydon.</h2></div>
<div className="grid3">
<div className="card"><div className="tag">Agentic AI</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>Agents that learn and adapt</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>Learning agents that adapt and optimise pathways without manual intervention.</p></div>
<div className="card"><div className="tag">Enterprise-grade security</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>Trusted with sensitive work</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>Data residency options. Trusted by government agencies and Fortune 500 companies.</p></div>
<div className="card"><div className="tag">Proven ROI</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>Faster competence, more completion</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>40% faster time to competence and 3x higher completion rates.</p></div>
<div className="card"><div className="tag">Global scale</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>100K+ learners, 10 countries</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>Multi-language and localised for teams across the region.</p></div>
<div className="card"><div className="tag">Deep industry expertise</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>14 years in learning and development</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>A team with leaders from Shell, StarHub and government agencies.</p></div>
<div className="card"><div className="tag">Award-winning platform</div><h3 style={{fontSize: "22px", marginTop: "8px"}}>Recognised by the industry</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>Multiple industry accolades for our learning platform.</p></div>
</div>
</div>
</section>
{/* WHO WE SERVE */}
<section id="serve" className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px", maxWidth: "760px"}}><div className="eyebrow">Who we serve</div><h2 className="h2">Built for growing businesses. Trusted by governments and enterprises.</h2></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "14px"}}>
<a href="/ai-co-workers" className="card" style={{textDecoration: "none", color: "#B9C2C8", borderColor: "rgba(254,80,0,0.5)"}}><div className="tag">SMEs · Our focus</div><h3 style={{fontSize: "21px", marginTop: "8px"}}>Start small, live in weeks</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>Ready-built AI Co-Workers and a shared FDO, for companies with 20 to 500 staff.</p><span style={{display: "block", marginTop: "10px", color: "#FF7A3D", fontWeight: "600", fontSize: "14px"}}>Start here →</span></a>
<a href="/solutions/enterprise" className="card" style={{textDecoration: "none", color: "#B9C2C8"}}><div className="tag">Enterprise</div><h3 style={{fontSize: "21px", marginTop: "8px"}}>People and agents at scale</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>ZilLearn across your agents, with dedicated FDOs and reskilling.</p><span style={{display: "block", marginTop: "10px", color: "#FF7A3D", fontWeight: "600", fontSize: "14px"}}>Enterprise →</span></a>
<a href="/solutions/government" className="card" style={{textDecoration: "none", color: "#B9C2C8"}}><div className="tag">Government</div><h3 style={{fontSize: "21px", marginTop: "8px"}}>Transformation at national scale</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>Trusted by MINDEF, MOE and MHA.</p><span style={{display: "block", marginTop: "10px", color: "#FF7A3D", fontWeight: "600", fontSize: "14px"}}>Government →</span></a>
<a href="/solutions/education" className="card" style={{textDecoration: "none", color: "#B9C2C8"}}><div className="tag">Education</div><h3 style={{fontSize: "21px", marginTop: "8px"}}>Learners ready for the AI economy</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>Curriculum, credentials and adaptive pathways.</p><span style={{display: "block", marginTop: "10px", color: "#FF7A3D", fontWeight: "600", fontSize: "14px"}}>Education →</span></a>
<a href="/solutions/partners" className="card" style={{textDecoration: "none", color: "#B9C2C8"}}><div className="tag">Partners</div><h3 style={{fontSize: "21px", marginTop: "8px"}}>Build on the platform</h3><p style={{margin: "8px 0 0", fontSize: "15px"}}>Technology, content, channel and agent partners.</p><span style={{display: "block", marginTop: "10px", color: "#FF7A3D", fontWeight: "600", fontSize: "14px"}}>Partners →</span></a>
</div>
</div>
</section>
{/* INSIGHTS */}
<section id="insights" className="sec" style={{padding: "80px 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "28px"}}>
<div style={{display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between", alignItems: "flex-end"}}><div style={{display: "flex", flexDirection: "column", gap: "16px"}}><div className="eyebrow">Insights</div><h2 className="h2">Thinking on people, AI and performance.</h2></div><a className="btn-line" href="/insights">All insights</a></div>
<div className="grid3">
<InsightStripCards items={insights} />
</div>
</div>
</section>
{/* CTA */}
<section id="contact" className="sec" style={{padding: "84px 0", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<img src="/images/site/photo-444a8249.jpg" alt="" aria-hidden="true" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: "0.16"}} />
<div aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(90deg,#0E1215 35%,rgba(14,18,21,0.55) 100%)"}}></div>
<div className="streak" style={{top: "30%", left: "0", animationDelay: "-2s", width: "50%"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", justifyContent: "space-between"}}>
<div style={{display: "flex", flexDirection: "column", gap: "22px", maxWidth: "800px"}}><h2 style={{fontSize: "clamp(40px,5.4vw,76px)", lineHeight: "0.98", fontWeight: "800"}}>Build a workforce that{" "}<span style={{color: "#FE5000"}}>keeps learning.</span></h2>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px 24px", fontSize: "16px", color: "#fff"}}>
<div style={{display: "flex", gap: "10px", alignItems: "baseline"}}><span style={{color: "#FE5000"}}>●</span>Faster time to competence</div>
<div style={{display: "flex", gap: "10px", alignItems: "baseline"}}><span style={{color: "#FE5000"}}>●</span>Higher engagement and completion</div>
<div style={{display: "flex", gap: "10px", alignItems: "baseline"}}><span style={{color: "#FE5000"}}>●</span>Skills gaps closed faster</div>
<div style={{display: "flex", gap: "10px", alignItems: "baseline"}}><span style={{color: "#FE5000"}}>●</span>Personalised learning at scale</div>
</div></div>
<div style={{display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center"}}>
<a className="btn" href="/contact">Book a free AI Workforce Assessment{" "}<span aria-hidden="true">→</span></a>
<a className="btn-line" href="/platform">See the platform</a>
</div>
</div>
</section>

</div>
  )
}
