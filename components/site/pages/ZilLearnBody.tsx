/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element, react/no-unescaped-entities */
// Generated from the approved design mock-up (ZilLearn). Edit freely.
import InsightStripCards from '@/components/site/insight-strip-cards'
import type { InsightCard } from '@/lib/insights'

export default function ZilLearnBody({ insights }: { insights: InsightCard[] }) {
  return (
<div className="k p-zillearn">

{/* HERO */}
<section className="sec" style={{padding: "72px 0 76px", background: "radial-gradient(900px 520px at 80% 35%,rgba(254,80,0,0.12),rgba(14,18,21,0) 70%)"}}>
<div className="streak" style={{top: "20%", left: "0"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "44px", alignItems: "center"}}>
<div style={{flex: "1 1 500px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
<div className="eyebrow">The Kydon platform</div>
<h1 style={{fontSize: "clamp(50px,6.4vw,92px)", lineHeight: "0.94", fontWeight: "800"}}>Kydon{" "}<span style={{color: "#FE5000"}}>ZilLearn</span></h1>
<p style={{margin: "0", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600", fontSize: "clamp(24px,2.6vw,34px)", lineHeight: "1.15", color: "#FFFFFF"}}>The learning and performance platform for people and AI agents.</p>
<p className="lead">AI agents are arriving in every team, from many vendors. Kydon ZilLearn sits across all of them and makes your people and your agents learn from each other, so performance keeps improving instead of stalling after the demo.</p>
<div style={{display: "flex", gap: "16px", flexWrap: "wrap"}}><a className="btn" href="/contact">Book a platform demo{" "}<span aria-hidden="true">→</span></a><a className="btn-line" href="#agents">Works with your agents</a></div>
</div>
<div className="herovis mflow" style={{flex: "1 1 520px", minWidth: "0", position: "relative", padding: "0 0 0 0"}}>
<div style={{position: "relative", height: "200px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", margin: "0 0 -40px 60px"}}><img src="/images/site/zillearn-hero.jpg" alt="A professional reviewing AI insights on a tablet" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "78% 62%"}} /><div className="plane" aria-hidden="true" style={{right: "0", top: "0", width: "28%", height: "100%", background: "var(--kfold)", clipPath: "polygon(60% 0,100% 0,100% 100%,20% 100%)", opacity: "0.85"}}></div></div>
<div style={{position: "relative", zIndex: "2"}}><div style={{background: "#151B20", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 30px 70px rgba(0,0,0,0.6)"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", borderBottom: "1px solid rgba(255,255,255,0.08)"}}><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", color: "#fff", fontSize: "15px"}}>kydon{" "}<span style={{fontWeight: "500", color: "#93A0A8"}}>| ZilLearn · Finance team</span></div><div style={{fontSize: "11px", color: "#3DDC84"}}><span className="ki-live"></span>{" "}Live</div></div>
<div className="tag" style={{fontSize: "10px", color: "#93A0A8", padding: "10px 14px 4px"}}>People and agents this month</div><div className="row"><div style={{width: "36px", height: "36px", borderRadius: "50%", background: "#E3E8EB", display: "flex", alignItems: "center", justifyContent: "center", color: "#0E1215", fontSize: "13px", fontWeight: "700"}}>ML</div><div><div style={{color: "#fff", fontWeight: "600", fontSize: "13px"}}>Mei Ling</div><div className="muted" style={{fontSize: "11px"}}>Accounts executive</div></div><span className="src" style={{borderColor: "#FE5000", color: "#FE5000"}}>PERSON</span><div style={{textAlign: "right", minWidth: "92px"}}><div style={{color: "#fff", fontWeight: "600"}}>−41%</div><div className="muted" style={{fontSize: "10px"}}>time to competence</div></div></div><div className="row"><div style={{width: "36px", height: "36px", borderRadius: "50%", background: "#2A333A", display: "flex", alignItems: "center", justifyContent: "center", color: "#93A0A8", fontSize: "13px", fontWeight: "700"}}>AI</div><div><div style={{color: "#fff", fontWeight: "600", fontSize: "13px"}}>Invoice agent</div><div className="muted" style={{fontSize: "11px"}}>Accounts payable</div></div><span className="src">YOUR AGENT</span><div style={{textAlign: "right", minWidth: "92px"}}><div style={{color: "#fff", fontWeight: "600"}}>98.7%</div><div className="muted" style={{fontSize: "10px"}}>accuracy, ▲ 2.1 pts</div></div></div><div className="row"><div style={{width: "36px", height: "36px", borderRadius: "50%", background: "#2A333A", display: "flex", alignItems: "center", justifyContent: "center", color: "#93A0A8", fontSize: "13px", fontWeight: "700"}}>AI</div><div><div style={{color: "#fff", fontWeight: "600", fontSize: "13px"}}>Reporting assistant</div><div className="muted" style={{fontSize: "11px"}}>Management reports</div></div><span className="src">SOFTWARE AGENT</span><div style={{textAlign: "right", minWidth: "92px"}}><div style={{color: "#fff", fontWeight: "600"}}>64</div><div className="muted" style={{fontSize: "10px"}}>drafts approved</div></div></div><div className="row"><span aria-hidden="true" style={{width: "36px", height: "36px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "var(--kfold)", color: "#0E1215", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "13px", boxSizing: "border-box"}}>FA</span><div><div style={{color: "#fff", fontWeight: "600", fontSize: "13px"}}>Farah</div><div className="muted" style={{fontSize: "11px"}}>AI Finance Assistant</div></div><span className="src">KYDON AI CO-WORKER</span><div style={{textAlign: "right", minWidth: "92px"}}><div style={{color: "#fff", fontWeight: "600"}}>4 → 1.5</div><div className="muted" style={{fontSize: "10px"}}>days to close</div></div></div><div style={{borderTop: "1px solid rgba(255,255,255,0.08)", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "7px", fontSize: "12px"}}>
<div className="tag" style={{fontSize: "10px", color: "#93A0A8"}}>Learning events</div>
<div className="ki-feed" style={{display: "flex", gap: "8px"}}><span style={{color: "#FE5000"}}>●</span><span style={{color: "#E3E8EB"}}>Mei Ling corrected 3 invoice exceptions.{" "}<strong style={{color: "#fff"}}>Invoice agent learned the rule.</strong></span></div>
<div className="ki-feed d2" style={{display: "flex", gap: "8px"}}><span style={{color: "#FE5000"}}>●</span><span style={{color: "#E3E8EB"}}>Coaching sent to 4 staff on checking AI-drafted reports.</span></div>
<div className="ki-feed d3" style={{display: "flex", gap: "8px"}}><span style={{color: "#FE5000"}}>●</span><span style={{color: "#E3E8EB"}}>New regulation flagged. Training plan updated.</span></div>
</div>
</div></div>
<div style={{fontSize: "11px", marginTop: "8px", textAlign: "right"}} className="muted">Illustrative interface and names</div>
</div>
</div>
</section>
{/* THE PROBLEM */}
<section className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "860px"}}><div className="eyebrow">Why a platform</div><h2 className="h2">Agents are easy to buy. Getting people and agents to perform together is not.</h2></div>
<div className="grid3">
<div className="card"><div className="tag">Many agents, no common view</div><p style={{margin: "10px 0 0"}}>Agents come from different vendors and teams. Nobody sees how people and agents are performing together.</p></div>
<div className="card"><div className="tag">Learning sits apart from the work</div><p style={{margin: "10px 0 0"}}>Skills tools and courses run separately from the agents doing the work, so staff never learn to supervise them.</p></div>
<div className="card"><div className="tag">Agents don't learn from your experts</div><p style={{margin: "10px 0 0"}}>Corrections disappear into inboxes. The same mistakes repeat, and know-how leaves when people do.</p></div>
</div>
</div>
</section>
{/* FOUR CAPABILITIES */}
<section id="capabilities" className="sec" style={{padding: "84px 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px"}}><div className="eyebrow">What Kydon ZilLearn does</div><h2 className="h2">Four capabilities. One learning loop across people and AI.</h2></div>
<div style={{display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)"}}>
<div className="mstack" style={{display: "grid", gridTemplateColumns: "90px 1.2fr 1fr", gap: "28px", background: "#0E1215", padding: "28px", alignItems: "start"}}><div className="big" style={{fontSize: "56px", color: "#FE5000"}}>01</div><div><div className="tag">People learn</div><h3 style={{fontSize: "26px", marginTop: "6px"}}>Learning in the flow of work</h3><p style={{margin: "8px 0 0"}}>A coach, trainer and assessor that sit alongside the agents your teams use. Staff learn their roles faster, and learn to delegate to, check and supervise AI. Powered by Kydon's AI Learning Platform, in development since 2019.</p><a href="/ai-learning-platform" style={{display: "inline-block", marginTop: "10px", fontWeight: "600"}}>AI Learning Platform →</a></div><div style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px"}}><div className="tag" style={{fontSize: "10px", color: "#93A0A8"}}>You see</div><div>Time to competence</div><div>Skills gained, by person and role</div><div>Readiness to supervise AI</div></div></div>
<div className="mstack" style={{display: "grid", gridTemplateColumns: "90px 1.2fr 1fr", gap: "28px", background: "#0E1215", padding: "28px", alignItems: "start"}}><div className="big" style={{fontSize: "56px", color: "#FE5000"}}>02</div><div><div className="tag">AI learns</div><h3 style={{fontSize: "26px", marginTop: "6px"}}>Agents that learn from your best people</h3><p style={{margin: "8px 0 0"}}>Every correction, approval and expert decision is captured and fed back, so your agents improve with use. Know-how stays in the organisation when people move on.</p></div><div style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px"}}><div className="tag" style={{fontSize: "10px", color: "#93A0A8"}}>You see</div><div>Agent accuracy over time</div><div>Corrections learned</div><div>Know-how captured</div></div></div>
<div className="mstack" style={{display: "grid", gridTemplateColumns: "90px 1.2fr 1fr", gap: "28px", background: "#0E1215", padding: "28px", alignItems: "start"}}><div className="big" style={{fontSize: "56px", color: "#FE5000"}}>03</div><div><div className="tag">Performance</div><h3 style={{fontSize: "26px", marginTop: "6px"}}>One view of people and AI performance</h3><p style={{margin: "8px 0 0"}}>See how your team of people and agents is performing, whoever built the agents. Governance is matched to the risk of each agent's work, with a full audit trail.</p></div><div style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px"}}><div className="tag" style={{fontSize: "10px", color: "#93A0A8"}}>You see</div><div>Work handled and quality</div><div>Work shifted to higher value</div><div>Exceptions and approvals</div></div></div>
<div className="mstack" style={{display: "grid", gridTemplateColumns: "90px 1.2fr 1fr", gap: "28px", background: "#0E1215", padding: "28px", alignItems: "start"}}><div className="big" style={{fontSize: "56px", color: "#FE5000"}}>04</div><div><div className="tag">The organisation learns</div><h3 style={{fontSize: "26px", marginTop: "6px"}}>Sense change, decide with evidence</h3><p style={{margin: "8px 0 0"}}>Kydon Intelligence watches regulation, markets and skills, and feeds what it finds into what your people learn and which agents you add next.</p><a href="/kydon-intelligence" style={{display: "inline-block", marginTop: "10px", fontWeight: "600"}}>Kydon Intelligence →</a></div><div style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px"}}><div className="tag" style={{fontSize: "10px", color: "#93A0A8"}}>You see</div><div>Signals that matter to you</div><div>Implications, with evidence</div><div>Recommended actions</div></div></div>
</div>
</div>
</section>
{/* WORKS WITH YOUR AGENTS */}
<section id="agents" className="sec" style={{padding: "84px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="streak" style={{top: "12%", left: "30%", animationDelay: "-2s"}}></div>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px"}}><div className="eyebrow">Works with your agents</div><h2 className="h2">Any agent. Yours, your vendors', or ours.</h2></div>
<p className="lead" style={{maxWidth: "420px", fontSize: "17px"}}>You choose the agents. Kydon ZilLearn makes them, and your people, perform better together.</p>
</div>
<div className="grid3">
<div className="card" style={{display: "flex", flexDirection: "column", gap: "10px"}}><div className="tag" style={{color: "#93A0A8"}}>Your own agents</div><h3 style={{fontSize: "22px"}}>Built in-house or with partners</h3><p style={{margin: "0", fontSize: "15px"}}>Connect the agents your teams have already built, and add learning and measurement around them.</p><span style={{marginTop: "auto", fontSize: "12px", fontWeight: "600", color: "#FF7A3D"}}>Connectors on our roadmap</span></div>
<div className="card" style={{display: "flex", flexDirection: "column", gap: "10px"}}><div className="tag" style={{color: "#93A0A8"}}>Agents in your software</div><h3 style={{fontSize: "22px"}}>Arriving in the tools you already use</h3><p style={{margin: "0", fontSize: "15px"}}>As your business software adds AI agents, bring them into one view of people and AI performance.</p><span style={{marginTop: "auto", fontSize: "12px", fontWeight: "600", color: "#FF7A3D"}}>Connectors on our roadmap</span></div>
<a href="/ai-co-workers" className="card" style={{textDecoration: "none", color: "#B9C2C8", display: "flex", flexDirection: "column", gap: "10px"}}><div className="tag">Kydon AI Co-Workers</div><h3 style={{fontSize: "22px"}}>Ready-built, learning built in</h3><p style={{margin: "0", fontSize: "15px"}}>No agents yet? Start with ten ready-built roles, live in 1 to 2 weeks.</p><span style={{marginTop: "auto", fontSize: "12px", fontWeight: "600", color: "#3DDC84"}}>Available now →</span></a>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "0", borderTop: "2px solid #FE5000"}}>
<div style={{padding: "20px 16px 0 0"}}><div className="tag" style={{fontSize: "11px"}}>Step 1</div><h3 style={{fontSize: "19px", marginTop: "6px"}}>Connect</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Link your agents and your people's roles.</p></div>
<div style={{padding: "20px 16px 0 0"}}><div className="tag" style={{fontSize: "11px"}}>Step 2</div><h3 style={{fontSize: "19px", marginTop: "6px"}}>Observe the work</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>See what agents and people do, and where they struggle.</p></div>
<div style={{padding: "20px 16px 0 0"}}><div className="tag" style={{fontSize: "11px"}}>Step 3</div><h3 style={{fontSize: "19px", marginTop: "6px"}}>Coach people</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Learning delivered in the moment, inside the work.</p></div>
<div style={{padding: "20px 16px 0 0"}}><div className="tag" style={{fontSize: "11px"}}>Step 4</div><h3 style={{fontSize: "19px", marginTop: "6px"}}>Teach the agents</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Capture corrections and expert judgement.</p></div>
<div style={{padding: "20px 16px 0 0"}}><div className="tag" style={{fontSize: "11px"}}>Step 5</div><h3 style={{fontSize: "19px", marginTop: "6px"}}>Report monthly</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Performance and learning, in hard numbers.</p></div>
</div>
<p style={{margin: "0", fontSize: "13px"}} className="muted">Kydon ZilLearn is designed to work with any AI agent. Connectors for third-party agents are on our roadmap; Kydon AI Co-Workers are supported today.</p>
</div>
</section>
{/* RESULTS */}
<section className="sec" style={{padding: "80px 0", background: "var(--kfold)"}}>
<div aria-hidden="true" style={{position: "absolute", right: "-5%", top: "0", width: "40%", height: "100%", background: "var(--kfacet)", opacity: "0.55", clipPath: "polygon(30% 0,100% 0,100% 100%,0 100%)"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexDirection: "column", gap: "32px"}}>
<h2 className="h2" style={{color: "#0E1215", maxWidth: "860px"}}>Results from Kydon programmes.</h2>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "24px"}}>
<div style={{borderTop: "2px solid #0E1215", paddingTop: "14px"}}><div className="big" style={{fontSize: "60px", color: "#0E1215"}}>41%</div><p style={{margin: "6px 0 0", color: "#0E1215", fontWeight: "500"}}>less manual task time, 1,500 staff at a professional services firm</p></div>
<div style={{borderTop: "2px solid #0E1215", paddingTop: "14px"}}><div className="big" style={{fontSize: "60px", color: "#0E1215"}}>27%</div><p style={{margin: "6px 0 0", color: "#0E1215", fontWeight: "500"}}>better project efficiency at the same firm</p></div>
<div style={{borderTop: "2px solid #0E1215", paddingTop: "14px"}}><div className="big" style={{fontSize: "60px", color: "#0E1215"}}>93%</div><p style={{margin: "6px 0 0", color: "#0E1215", fontWeight: "500"}}>satisfaction across thousands of professionals trained</p></div>
<div style={{borderTop: "2px solid #0E1215", paddingTop: "14px"}}><div className="big" style={{fontSize: "60px", color: "#0E1215"}}>3x</div><p style={{margin: "6px 0 0", color: "#0E1215", fontWeight: "500"}}>more work handled by the same team with AI Co-Workers</p></div>
</div>
<p style={{margin: "0", fontSize: "13px", color: "#0E1215"}}>Kydon client programmes; client names withheld.</p>
</div>
</section>
{/* MEASURED MONTHLY */}
<section className="sec" style={{padding: "84px 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center"}}>
<div style={{flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px"}}>
<div className="eyebrow">Measured monthly</div>
<h2 className="h2" style={{fontSize: "clamp(30px,3.4vw,46px)"}}>Learning reported with hard measures, not as a soft benefit.</h2>
<p className="lead" style={{fontSize: "17px"}}>Every month, one report pairs how your people and agents performed with how much they learned. That is why learning sits in the operations budget, not a discretionary training line.</p>
</div>
<div style={{flex: "1 1 520px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "12px"}}>
<div className="card"><div className="tag" style={{fontSize: "11px"}}>Performance</div><div className="big" style={{fontSize: "44px", marginTop: "8px"}}>3x</div><p style={{margin: "6px 0 0", fontSize: "14px"}}>work handled by the same team</p></div>
<div className="card"><div className="tag" style={{fontSize: "11px"}}>Learning</div><div className="big" style={{fontSize: "44px", marginTop: "8px", color: "#FE5000"}}>−34%</div><p style={{margin: "6px 0 0", fontSize: "14px"}}>time to competence for new joiners</p></div>
<div className="card"><div className="tag" style={{fontSize: "11px"}}>Learning</div><div className="big" style={{fontSize: "44px", marginTop: "8px"}}>28%</div><p style={{margin: "6px 0 0", fontSize: "14px"}}>of time shifted to higher-value work</p></div>
<div className="card"><div className="tag" style={{fontSize: "11px"}}>Learning</div><div className="big" style={{fontSize: "44px", marginTop: "8px"}}>46</div><p style={{margin: "6px 0 0", fontSize: "14px"}}>expert know-how items captured</p></div>
<div style={{gridColumn: "span 2", fontSize: "12px"}} className="muted">Illustrative report. Real figures to come from Kydon deployments.</div>
</div>
</div>
</section>
{/* WHAT COMES WITH IT */}
<section className="sec" style={{padding: "84px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px"}}><div className="eyebrow">Inside the platform</div><h2 className="h2">Built on two decades of designing how people learn.</h2></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "14px"}}>
<a href="/ai-learning-platform" className="card" style={{textDecoration: "none", color: "#B9C2C8"}}><div className="tag">Learning</div><h3 style={{fontSize: "20px", marginTop: "6px"}}>AI Learning Platform</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Kydon's learning engine, refined since 2019.</p></a>
<a href="/kydon-intelligence" className="card" style={{textDecoration: "none", color: "#B9C2C8"}}><div className="tag">Intelligence</div><h3 style={{fontSize: "20px", marginTop: "6px"}}>Kydon Intelligence</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Organisational learning from the world outside.</p></a>
<a href="/ai-co-workers" className="card" style={{textDecoration: "none", color: "#B9C2C8"}}><div className="tag">Ready-built agents</div><h3 style={{fontSize: "20px", marginTop: "6px"}}>Kydon AI Co-Workers</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Optional. Ten roles with learning built in.</p></a>
<a href="/ai-workforce-factory" className="card" style={{textDecoration: "none", color: "#B9C2C8"}}><div className="tag">People</div><h3 style={{fontSize: "20px", marginTop: "6px"}}>Forward Deployed Operators</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Trained through the AI Workforce Factory™.</p></a>
</div>
</div>
</section>
{/* INSIGHTS */}
<section id="insights" className="sec" style={{padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "28px"}}>
<div style={{display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between", alignItems: "flex-end"}}><div style={{display: "flex", flexDirection: "column", gap: "16px"}}><div className="eyebrow">Insights</div><h2 className="h2">Further reading on people, agents and the platform.</h2></div><a className="btn-line" href="/insights">All insights</a></div>
<div className="grid3">
<InsightStripCards items={insights} />
</div>
</div>
</section>
{/* CTA */}
<section id="contact" className="sec" style={{padding: "84px 0", background: "var(--kfold)"}}>
<div className="plane" aria-hidden="true" style={{right: "0", top: "0", width: "34%", height: "100%", background: "linear-gradient(90deg,rgba(14,18,21,0.18),rgba(14,18,21,0))", clipPath: "polygon(40% 0,100% 0,100% 100%,0 100%)"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between"}}>
<div style={{flex: "1 1 520px", display: "flex", flexDirection: "column", gap: "12px"}}>
<h2 className="h2" style={{color: "#0E1215"}}>See your people and agents learn together.</h2>
<p style={{margin: "0", fontSize: "18px", color: "#0E1215", fontWeight: "500"}}>Book a platform demo, or talk to us about a 90-day pilot with the agents you already have.</p>
</div>
<div style={{display: "flex", gap: "14px", flexWrap: "wrap"}}>
<a href="/contact" style={{display: "inline-flex", alignItems: "center", minHeight: "54px", padding: "0 30px", background: "#0E1215", color: "#ffffff", textDecoration: "none", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "18px"}}>Book a platform demo</a>
<a href="/contact" style={{display: "inline-flex", alignItems: "center", minHeight: "54px", padding: "0 30px", border: "2px solid #0E1215", color: "#0E1215", textDecoration: "none", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "18px"}}>Pilot with your agents</a>
</div>
</div>
</section>

</div>
  )
}
