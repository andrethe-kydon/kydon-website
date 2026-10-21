'use client'
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element, react/no-unescaped-entities */
// Generated from the approved design mock-up (Factory). Edit freely.
import { Fragment } from 'react'
import { DCLogic, useDC } from '@/lib/dc'

class FactoryLogic extends DCLogic {
constructor(props: any) { super(props); this.state = { sent: false, open: 0 }; }
renderVals(): any {
const items = [
{ q: 'What is an AI Workforce Factory™?', a: 'Kydon\'s integrated system for putting AI to work in organisations. It develops Forward Deployed Operators through Future Edge Institute, deploys them with Kydon ZilLearn alongside any AI agents, including Kydon AI Co-Workers, inside client teams, and captures what people and AI learn so performance keeps improving.' },
{ q: 'Who created the AI Workforce Factory™?', a: 'The name and framework were originated by Kydon and developed by Founder and Group CEO David Yeo, drawing on two decades of instructional systems design for defence, government and enterprise. AI Workforce Factory™ is a trademark of Kydon Holdings Pte Ltd.' },
{ q: 'How is it different from an AI training programme?', a: 'A training programme ends at a certificate. The AI Workforce Factory™ continues into deployment: operators are placed into real work with AI Co-Workers, are accountable for results, and feed what they learn back into training.' },
{ q: 'How is it different from buying AI software?', a: 'Software stops at go-live. Kydon deploys AI Co-Workers together with an FDO who owns them, runs the controls, coaches your staff and improves the roles every month.' },
{ q: 'Is it only for large companies?', a: 'No. It is built for growing businesses: start with one to three AI Co-Workers and a shared FDO, priced like headcount with no large upfront licence. Enterprises and government agencies run larger programmes.' },
{ q: 'Will AI Co-Workers replace our staff?', a: 'AI Co-Workers take the routine volume and hand anything that needs judgement to a person. Freed time moves to higher-value work, and affected staff get a path into new roles through reskilling.' },
{ q: 'Can we partner with the AI Workforce Factory™?', a: 'Yes. Kydon designs and runs the AI Workforce Factory™, and works with institutes of higher learning, industry bodies, agencies and enterprises as delivery, demand and talent partners, guided by an advisory board Kydon convenes.' }
];
const open = this.state.open;
return { sent: !!this.state.sent, submit: () => this.setState({ sent: true }),  faqs: items.map((it, i) => ({ q: it.q, a: it.a, open: open === i, expanded: open === i ? 'true' : 'false', sign: open === i ? '−' : '+', toggle: () => this.setState({ open: open === i ? -1 : i }) })) };
}
}

export default function FactoryBody() {
  const V: any = useDC(FactoryLogic)
  return (
<div className="k p-factory">

{/* HERO */}
<section className="sec" style={{padding: "76px 0 72px", background: "radial-gradient(800px 500px at 80% 40%,rgba(254,80,0,0.13),rgba(14,18,21,0) 70%)"}}>
<div className="streak" style={{top: "30%", left: "0"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center"}}>
<div style={{flex: "1 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px"}}>
<div className="eyebrow">A Kydon framework</div>
<h1 style={{fontSize: "clamp(48px,6.4vw,96px)", lineHeight: "0.94", fontWeight: "800"}}>The AI Workforce{" "}<span style={{color: "#FE5000"}}>Factory™</span></h1>
<p style={{margin: "0", fontFamily: "var(--font-league-spartan),sans-serif", fontSize: "clamp(22px,2.2vw,30px)", color: "#FFFFFF", lineHeight: "1.2"}}>We develop the people who put AI to work.</p>
<p className="lead">The talent engine behind Kydon ZilLearn. Not another training programme and not another software tool: one repeatable model that links people, deployment and performance.</p>
<div style={{display: "flex", gap: "16px", flexWrap: "wrap"}}><a className="btn" href="#paper">Download the white paper →</a><a className="btn-line" href="#how">See how it works</a></div>
<div className="muted" style={{fontSize: "14px"}}>Originated by Kydon · By David Yeo, Founder and Group CEO</div>
</div>
<div className="kring" style={{flex: "1 1 420px", minWidth: "0", display: "flex", justifyContent: "center"}}>
<div style={{position: "relative", width: "100%", maxWidth: "460px", aspectRatio: "1/1"}}>
<div className="spin" aria-hidden="true" style={{position: "absolute", inset: "0", border: "1px dashed rgba(254,80,0,0.55)", borderRadius: "50%"}}></div>
<div aria-hidden="true" style={{position: "absolute", inset: "12%", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "50%"}}></div>
<div style={{position: "absolute", inset: "22%", display: "flex", alignItems: "center", justifyContent: "center"}}><img src="/images/site/aiwf-stacked-white.png" alt="AI Workforce Factory\u2122 logo" style={{width: "100%", height: "auto"}} /></div>
<div style={{position: "absolute", top: "-2%", left: "50%", transform: "translateX(-50%)", background: "#151B20", border: "1px solid rgba(254,80,0,0.6)", padding: "10px 16px", textAlign: "center"}}><div className="tag" style={{fontSize: "11px"}}>01 · Develop</div><div style={{color: "#fff", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600"}}>People</div></div>
<div style={{position: "absolute", bottom: "8%", right: "-4%", background: "#151B20", border: "1px solid rgba(254,80,0,0.6)", padding: "10px 16px", textAlign: "center"}}><div className="tag" style={{fontSize: "11px"}}>02 · Deploy</div><div style={{color: "#fff", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600"}}>People with AI</div></div>
<div style={{position: "absolute", bottom: "8%", left: "-4%", background: "#151B20", border: "1px solid rgba(254,80,0,0.6)", padding: "10px 16px", textAlign: "center"}}><div className="tag" style={{fontSize: "11px"}}>03 · Learn</div><div style={{color: "#fff", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600"}}>Performance</div></div>
</div>
</div>
</div>
</section>
{/* DEFINITION */}
<section style={{padding: "20px 0 76px"}}>
<div className="wrap">
<div style={{display: "flex", flexWrap: "wrap", gap: "40px", background: "#151B20", border: "1px solid rgba(255,255,255,0.08)", borderLeft: "3px solid #FE5000", padding: "48px"}}>
<div style={{flex: "1 1 280px"}}><h2 style={{fontSize: "34px", lineHeight: "1.08"}}>What is an AI Workforce Factory™?</h2></div>
<div style={{flex: "2 1 560px", display: "flex", flexDirection: "column", gap: "14px"}}>
<p style={{margin: "0", fontSize: "20px", lineHeight: "1.55", color: "#FFFFFF"}}>An AI Workforce Factory™ is Kydon's integrated system for putting AI to work in organisations. It develops Forward Deployed Operators through Future Edge Institute, deploys them with Kydon ZilLearn alongside any AI agents, including Kydon AI Co-Workers, inside client teams, and captures what people and AI learn so performance keeps improving.</p>
<p style={{margin: "0", fontSize: "14px"}} className="muted">The AI Workforce Factory™ name and framework were originated by Kydon. AI Workforce Factory™ is a trademark of Kydon Holdings Pte Ltd.</p>
</div>
</div>
</div>
</section>
{/* WHY: NATIONAL CONTEXT + QUOTE */}
<section className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px", maxWidth: "880px"}}>
<div className="eyebrow">Why it exists</div>
<h2 className="h2">The shortage is not AI tools. It is people who can operate AI, and a way to connect them to real work.</h2>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "32px"}}>
<div style={{borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "20px"}}><div className="big" style={{fontSize: "64px"}}>100,000</div><p style={{margin: "10px 0 0"}}>workers Singapore aims to make "AI bilingual" under its National AI Impact Programme</p></div>
<div style={{borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "20px"}}><div className="big" style={{fontSize: "64px"}}>84,000</div><p style={{margin: "10px 0 0"}}>AI-related job openings in Singapore last year, against about 16,000 tech graduates a year</p></div>
<div style={{borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "20px"}}><div className="big" style={{fontSize: "64px"}}>S$1B+</div><p style={{margin: "10px 0 0"}}>committed by the Singapore government to AI research and talent through 2030</p></div>
<div style={{borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "20px"}}><div className="big" style={{fontSize: "64px", color: "#FE5000"}}>95%</div><p style={{margin: "10px 0 0"}}>of organisations saw no P&L return from their GenAI pilots (MIT NANDA)</p></div>
</div>
<figure style={{margin: "0", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", padding: "48px", background: "#0E1215", border: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden"}}>
<div aria-hidden="true" style={{position: "absolute", left: "28px", top: "-30px", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "220px", color: "rgba(254,80,0,0.18)", lineHeight: "1"}}>“</div>
<blockquote style={{flex: "2 1 560px", margin: "0", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600", fontSize: "clamp(24px,2.6vw,36px)", lineHeight: "1.2", color: "#FFFFFF", position: "relative"}}>We will exploit AI to grow the economy, and we will ensure that growth translates into good jobs and better wages.</blockquote>
<figcaption style={{flex: "1 1 240px", borderLeft: "2px solid #FE5000", paddingLeft: "18px"}}><div style={{color: "#fff", fontWeight: "600"}}>Prime Minister Lawrence Wong</div><div className="muted" style={{fontSize: "14px"}}>Budget 2026 debate wrap-up speech, 26 Feb 2026</div><div style={{fontSize: "14px", marginTop: "10px"}}>The AI Workforce Factory™ is Kydon's answer: AI that grows businesses, and people who earn from running it.</div></figcaption>
</figure>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "18px"}}>
<div className="card"><div className="tag">Gap 01</div><h3 style={{fontSize: "23px", marginTop: "10px"}}>AI talk, not AI operators</h3><p style={{margin: "8px 0 0"}}>Courses build familiarity, not operating skill.</p></div>
<div className="card"><div className="tag">Gap 02</div><h3 style={{fontSize: "23px", marginTop: "10px"}}>No bridge to real work</h3><p style={{margin: "8px 0 0"}}>Certificates do not prove capability, so new skills fade.</p></div>
<div className="card"><div className="tag">Gap 03</div><h3 style={{fontSize: "23px", marginTop: "10px"}}>Deployment without people</h3><p style={{margin: "8px 0 0"}}>Pilots end when the vendor leaves, and SMEs are priced out of the help they need.</p></div>
</div>
</div>
</section>
{/* HOW: THE FLYWHEEL */}
<section id="how" className="sec" style={{padding: "84px 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px", maxWidth: "820px"}}>
<div className="eyebrow">How it works</div>
<h2 className="h2">One flywheel.{" "}<span style={{color: "#FE5000"}}>Three stages.</span></h2>
<p className="lead">Training creates the operators. Deployment creates the demand that employs them. Learning makes both better, and decides what we train and deploy next.</p>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "2px", background: "rgba(255,255,255,0.06)"}}>
<div style={{display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", background: "#0E1215", padding: "40px 0"}}>
<div className="big" style={{flex: "0 0 120px", fontSize: "96px", color: "rgba(255,255,255,0.12)"}}>01</div>
<div style={{flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "8px"}}><div className="tag">Develop · Future Edge Institute</div><h3 style={{fontSize: "32px"}}>From capable professional to AI operator.</h3><p style={{margin: "0"}}>Select people with domain expertise. Train them in applied AI, workflow design and running AI Co-Workers safely. Place them into real work instead of "graduating" them into the market.</p></div>
<div style={{flex: "0 1 280px", display: "flex", flexDirection: "column", gap: "12px"}}><img src="/images/site/ill-opc.jpg" alt="A graduate running their own AI-powered business" style={{width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", border: "1px solid rgba(255,255,255,0.1)"}} /><a className="btn-line" href="/careers#fdo">The FDO journey →</a></div>
</div>
<div style={{display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", background: "#0E1215", padding: "40px 0"}}>
<div className="big" style={{flex: "0 0 120px", fontSize: "96px", color: "rgba(255,255,255,0.12)"}}>02</div>
<div style={{flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "8px"}}><div className="tag">Deploy · Kydon ZilLearn</div><h3 style={{fontSize: "32px"}}>FDOs put the platform to work inside your team.</h3><p style={{margin: "0"}}>The operator switches on Kydon ZilLearn, connects it to your agents, whether your own or Kydon AI Co-Workers, and coaches your staff to work with AI. Governed by risk tier and priced like headcount.</p>
<div style={{display: "flex", marginTop: "8px"}}>
<span aria-hidden="true" style={{width: "46px", height: "46px", borderRadius: "50%", background: "var(--kfold)", color: "#0E1215", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "19px", boxSizing: "border-box", border: "2px solid #0E1215"}}>R</span>
<span aria-hidden="true" style={{width: "46px", height: "46px", borderRadius: "50%", background: "var(--kfold)", color: "#0E1215", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "19px", boxSizing: "border-box", border: "2px solid #0E1215", marginLeft: "-12px"}}>E</span>
<span aria-hidden="true" style={{width: "46px", height: "46px", borderRadius: "50%", background: "var(--kfold)", color: "#0E1215", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "19px", boxSizing: "border-box", border: "2px solid #0E1215", marginLeft: "-12px"}}>F</span>
<span aria-hidden="true" style={{width: "46px", height: "46px", borderRadius: "50%", background: "var(--kfold)", color: "#0E1215", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "19px", boxSizing: "border-box", border: "2px solid #0E1215", marginLeft: "-12px"}}>S</span>
<span aria-hidden="true" style={{width: "46px", height: "46px", borderRadius: "50%", background: "var(--kfold)", color: "#0E1215", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "19px", boxSizing: "border-box", border: "2px solid #0E1215", marginLeft: "-12px"}}>M</span>
<span aria-hidden="true" style={{width: "46px", height: "46px", borderRadius: "50%", background: "var(--kfold)", color: "#0E1215", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "19px", boxSizing: "border-box", border: "2px solid #0E1215", marginLeft: "-12px"}}>G</span>
</div>
</div>
<div style={{flex: "0 1 280px", display: "flex", flexDirection: "column", gap: "12px"}}><img src="/images/site/ill-man-hologram.jpg" alt="A professional working side by side with an AI Co-Worker" style={{width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", border: "1px solid rgba(255,255,255,0.1)"}} /><a className="btn-line" href="/ai-co-workers">Meet the AI Co-Workers →</a></div>
</div>
<div style={{display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", background: "#0E1215", padding: "40px 0"}}>
<div className="big" style={{flex: "0 0 120px", fontSize: "96px", color: "rgba(255,255,255,0.12)"}}>03</div>
<div style={{flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "8px"}}><div className="tag">Learn · AI Learning Platform and Kydon Intelligence</div><h3 style={{fontSize: "32px"}}>People, AI and the organisation keep getting better.</h3><p style={{margin: "0"}}>People learn from AI Co-Workers. AI Co-Workers learn from your best people. The organisation learns from the world around it. Every client gets a monthly report pairing performance with learning.</p></div>
<div style={{flex: "0 1 280px", display: "flex", flexDirection: "column", gap: "12px"}}><img src="/images/site/ill-highfive.jpg" alt="A team celebrating performance that keeps improving" style={{width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", border: "1px solid rgba(255,255,255,0.1)"}} /><a className="btn-line" href="/ai-learning-platform">How the learning works →</a></div>
</div>
</div>
</div>
</section>
{/* TRAIN DEPLOY HIRE */}
<section className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px"}}><div className="eyebrow">The talent pipeline</div><h2 className="h2">Train. Deploy. Hire.</h2><p className="lead" style={{fontSize: "17px"}}>How the AI Workforce Factory™ turns working professionals into AI operators, and gives growing businesses AI capability they could not otherwise afford.</p></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "0", borderTop: "2px solid #FE5000"}}>
<div style={{padding: "24px 24px 0 0"}}><div className="big" style={{fontSize: "44px", color: "rgba(255,255,255,0.14)"}}>01</div><div className="tag" style={{marginTop: "6px"}}>Train</div><h3 style={{fontSize: "24px", marginTop: "6px"}}>At Future Edge Institute</h3><p style={{margin: "8px 0 0"}}>Working professionals with no coding background. Funded up to 95% through SkillsFuture.</p></div>
<div style={{padding: "24px 24px 0 0"}}><div className="big" style={{fontSize: "44px", color: "rgba(255,255,255,0.14)"}}>02</div><div className="tag" style={{marginTop: "6px"}}>Deploy</div><h3 style={{fontSize: "24px", marginTop: "6px"}}>Train-and-Place</h3><p style={{margin: "8px 0 0"}}>Kydon employs graduates and places them inside SMEs and technology companies to run real AI work.</p></div>
<div style={{padding: "24px 24px 0 0"}}><div className="big" style={{fontSize: "44px", color: "rgba(255,255,255,0.14)"}}>03</div><div className="tag" style={{marginTop: "6px"}}>Hire</div><h3 style={{fontSize: "24px", marginTop: "6px"}}>Keep the talent</h3><p style={{margin: "8px 0 0"}}>Companies that see the work can hire the operator directly, or keep a trained FDO at a fraction of consulting cost.</p></div>
</div>
<div className="grid3">
<div className="card"><div className="tag">For talent</div><p style={{margin: "8px 0 0"}}>Reskill into an AI career by adding AI to the expertise you already have.</p></div>
<div className="card"><div className="tag">For SMEs and enterprises</div><p style={{margin: "8px 0 0"}}>Affordable AI capability without building a full AI team or hiring a top-tier consultancy.</p></div>
<div className="card"><div className="tag">For government and partners</div><p style={{margin: "8px 0 0"}}>A repeatable model for national AI workforce goals, built with institutes of higher learning, agencies and industry bodies.</p></div>
</div>
</div>
</section>
{/* DEMAND ENGINE + FDO */}
<section className="sec" style={{padding: "80px 0", background: "var(--kfold)"}}>
<div aria-hidden="true" style={{position: "absolute", left: "-6%", top: "0", width: "36%", height: "100%", background: "var(--kfacet)", clipPath: "polygon(0 0,100% 0,70% 100%,0 100%)"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "36px", alignItems: "center"}}>
<div style={{flex: "1 1 480px", display: "flex", flexDirection: "column", gap: "16px"}}>
<div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "13px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0E1215"}}>The connection</div>
<h2 className="h2" style={{color: "#0E1215"}}>More than manpower. More than software.</h2>
</div>
<div style={{flex: "1 1 480px", display: "flex", flexDirection: "column", gap: "14px", color: "#0E1215", fontSize: "17px"}}>
<p style={{margin: "0"}}>Most programmes train people and hope the market absorbs them. Most AI vendors deploy software and leave. The AI Workforce Factory™ builds the demand first: every AI Co-Worker deployment needs an operator, and every operator is trained to run AI Co-Workers.</p>
<p style={{margin: "0", fontWeight: "600"}}>The Forward Deployed Operator is the link. They own the AI, run the controls, coach your staff and make the gains last.</p>
</div>
<div style={{flex: "1 1 100%", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "12px"}}>
<div style={{position: "relative", aspectRatio: "16/10", overflow: "hidden", border: "3px solid #0E1215"}}><img src="/images/site/photo-444a8907.jpg" alt="A professional taking notes while learning" style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}} /><div style={{position: "absolute", left: "0", bottom: "0", background: "#0E1215", color: "#fff", padding: "8px 14px", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600", fontSize: "14px"}}>People learn</div></div>
<div style={{position: "relative", aspectRatio: "16/10", overflow: "hidden", border: "3px solid #0E1215", background: "#0E1215", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "16px", boxSizing: "border-box"}}>
<img src="/images/site/ill-woman-ai.jpg" alt="A professional working with an AI Co-Worker" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}} />
<div style={{position: "absolute", left: "0", bottom: "0", background: "var(--kfold)", color: "#0E1215", padding: "8px 14px", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "14px"}}>AI Co-Workers deliver</div></div>
<div style={{position: "relative", aspectRatio: "16/10", overflow: "hidden", border: "3px solid #0E1215"}}><img src="/images/site/photo-444a8249.jpg" alt="A Kydon specialist at work on a laptop" style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}} /><div style={{position: "absolute", left: "0", bottom: "0", background: "#0E1215", color: "#fff", padding: "8px 14px", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600", fontSize: "14px"}}>FDOs make it work</div></div>
</div>
</div>
</section>
{/* COMPARISON */}
<section className="sec" style={{padding: "84px 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px", maxWidth: "860px"}}>
<div className="eyebrow">Where it sits</div>
<h2 className="h2">Not an automation project. A workforce that improves.</h2>
</div>
<div style={{overflowX: "auto"}}>
<table className="tbl">
<thead><tr><th></th><th>Automation agencies</th><th>Enterprise AI co-worker firms</th><th style={{color: "#FE5000"}}>Kydon AI Workforce Factory™</th></tr></thead>
<tbody>
<tr><td data-label="" style={{color: "#fff", fontWeight: "600"}}>Sells</td><td data-label="Automation agencies">Automation projects</td><td data-label="Enterprise AI co-worker firms">Bespoke AI co-workers</td><td data-label="Kydon AI Workforce Factory\u2122" className="kyd">AI Co-Workers plus operators plus learning</td></tr>
<tr><td data-label="" style={{color: "#fff", fontWeight: "600"}}>Speed</td><td data-label="Automation agencies">Fast</td><td data-label="Enterprise AI co-worker firms">Months</td><td data-label="Kydon AI Workforce Factory\u2122" className="kyd">Weeks, from pre-built roles</td></tr>
<tr><td data-label="" style={{color: "#fff", fontWeight: "600"}}>Governance</td><td data-label="Automation agencies">Light</td><td data-label="Enterprise AI co-worker firms">Enterprise-grade</td><td data-label="Kydon AI Workforce Factory\u2122" className="kyd">Tiered to the risk of each role</td></tr>
<tr><td data-label="" style={{color: "#fff", fontWeight: "600"}}>After go-live</td><td data-label="Automation agencies">Short support window</td><td data-label="Enterprise AI co-worker firms">Vendor delivery team</td><td data-label="Kydon AI Workforce Factory\u2122" className="kyd">Embedded FDO who coaches and improves</td></tr>
<tr><td data-label="" style={{color: "#fff", fontWeight: "600"}}>People side</td><td data-label="Automation agencies">Not addressed</td><td data-label="Enterprise AI co-worker firms">Change support</td><td data-label="Kydon AI Workforce Factory\u2122" className="kyd">Learning loop, reskilling and redeployment</td></tr>
<tr><td data-label="" style={{color: "#fff", fontWeight: "600"}}>Outcome</td><td data-label="Automation agencies">Efficiency</td><td data-label="Enterprise AI co-worker firms">Efficiency at scale</td><td data-label="Kydon AI Workforce Factory\u2122" className="kyd">Performance that keeps improving</td></tr>
</tbody>
</table>
</div>
</div>
</section>
{/* FAQ */}
<section className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "40px"}}>
<div style={{flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "18px"}}><div className="eyebrow">Questions</div><h2 className="h2" style={{fontSize: "clamp(32px,3.6vw,48px)"}}>About the AI Workforce Factory™</h2></div>
<div style={{flex: "2 1 600px", minWidth: "0", borderTop: "1px solid rgba(255,255,255,0.15)"}}>
{(V.faqs).map((f: any, __i0: number) => (<Fragment key={__i0}>
<div>
<button className="faq-q" onClick={f.toggle} aria-expanded={f.expanded}><span>{f.q}</span><span aria-hidden="true" style={{color: "#FE5000", fontSize: "28px", lineHeight: "1"}}>{f.sign}</span></button>
{(f.open) && (<><p style={{margin: "0", padding: "18px 0 26px", borderBottom: "1px solid rgba(255,255,255,0.1)"}}>{f.a}</p></>)}
</div>
</Fragment>))}
</div>
</div>
</section>
{/* WHITE PAPER CTA */}
<section id="paper" className="sec" style={{padding: "84px 0"}}>
<div className="streak" style={{top: "20%", left: "20%", animationDelay: "-2s"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center"}}>
<div style={{flex: "0 1 380px", background: "#5B6770", aspectRatio: "3/4", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "36px", boxSizing: "border-box", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", transform: "rotate(-3deg)"}}>
<img src="/images/site/aiwf-stacked-white.png" alt="AI Workforce Factory\u2122" style={{width: "80%", height: "auto"}} />
<div><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "26px", color: "#fff", lineHeight: "1.1"}}>A Kydon framework for putting AI to work</div><div style={{fontSize: "13px", color: "#E3E8EB", marginTop: "10px"}}>White paper · David Yeo</div></div>
</div>
<div style={{flex: "1 1 480px", display: "flex", flexDirection: "column", gap: "20px"}}>
<div className="eyebrow">White paper</div>
<h2 className="h2">The full framework, in one document.</h2>
<p className="lead">Why training alone and tools alone both fail, how the Develop, Deploy and Learn flywheel works, and what it takes to run AI Co-Workers that keep improving.</p>
<form aria-label="Download the white paper" style={{display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end"}}>
<label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "#E3E8EB", flex: "1 1 220px"}}>Work email<input type="email" autoComplete="email" style={{minHeight: "52px", background: "#151B20", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0 14px", font: "inherit"}} /></label>
<button className="btn" type="button" onClick={V.submit} style={{border: "0", cursor: "pointer"}}>Download</button>
</form>
{(V.sent) && (<><p role="status" style={{margin: "10px 0 0", color: "#3DDC84", fontWeight: "600", fontSize: "15px"}}>Thanks. The white paper is on its way to your inbox.</p></>)}
</div>
</div>
</section>

</div>
  )
}
