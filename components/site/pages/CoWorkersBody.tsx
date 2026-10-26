'use client'
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element, react/no-unescaped-entities */
// Generated from the approved design mock-up (CoWorkers). Edit freely.
import { Fragment } from 'react'
import { submitLead } from '@/lib/lead-forms'
import { DCLogic, useDC, sx } from '@/lib/dc'

class CoWorkersLogic extends DCLogic {
constructor(props: any) { super(props); this.state = { sent: false, sel: 0, pain: 0 }; }
renderVals(): any {
const D = [
{ name:'Rina', role:'AI Receptionist', fn:'Customer', img:'/images/site/coworker-rina.jpg', line:'Answers every call on the first ring, books appointments into your live calendar and confirms before the caller hangs up.', forwho:'clinics, dental and aesthetic practices, law firms, salons, hotels and home-services businesses.', skills:['24/7 call answering','Appointment booking','Case status and logging'], results:[{v:'40%',l:'more bookings captured'},{v:'95%',l:'shorter wait times'}] },
{ name:'Ethan', role:'AI Customer Care Officer', fn:'Customer', img:'/images/site/coworker-ethan.jpg', line:'Answers customers on WhatsApp and chat using your product information, FAQs and policies, remembers every past conversation and keeps orders in sync.', forwho:'online retailers, service businesses, education providers and any team flooded with repeat questions.', skills:['WhatsApp customer support','Order status and updates','Multilingual replies'], results:[{v:'70%',l:'lower support costs'},{v:'10x',l:'conversations at once'}] },
{ name:'Farah', role:'AI Finance Assistant', fn:'Finance', img:'/images/site/coworker-farah.jpg', line:'Runs the daily finance routine: invoices out on time, payments matched, ledgers reconciled, reports ready before anyone asks.', forwho:'SME finance teams, CFOs and controllers of growing companies, and accounting and corporate service firms.', skills:['Bank and ledger reconciliation','Collections follow-up','Month-end close pack'], results:[{v:'22h → 6h',l:'monthly reconciliation'},{v:'4 → 1.5',l:'days to close the month'}] },
{ name:'Sanjay', role:'AI Sales Development Associate', fn:'Sales and Marketing', img:'/images/site/coworker-sanjay.jpg', line:'Calls or messages every new enquiry within seconds, qualifies it, books the meeting and follows up until it is won or closed.', forwho:'sales directors, B2B founders, real estate agencies and education providers.', skills:['Speed-to-lead calling','Qualification and booking','Follow-up and nurture'], results:[{v:'95%',l:'faster first contact'},{v:'4x',l:'more qualified leads'}] },
{ name:'Mei', role:'AI Marketing and Content Executive', fn:'Sales and Marketing', img:'/images/site/coworker-mei.jpg', line:'Researches, writes and publishes articles and social posts across every channel, in your brand voice, with your approval.', forwho:'marketing managers at SMEs, brands and professional firms.', skills:['Content engine','SEO articles at scale','Content repurposing'], results:[{v:'10x',l:'blog output, same team'},{v:'90%',l:'less creation time'}] },
{ name:'Tara', role:'AI Talent and Market Researcher', fn:'Sales and Marketing', img:'/images/site/coworker-tara.jpg', line:'Tracks who is hiring and buying in your market, enriches prospect and candidate profiles, and keeps your outreach lists fresh.', forwho:'recruitment agencies, HR teams and business development teams.', skills:['Market and talent research','Profile enrichment','Clean, de-duplicated outreach lists'], results:[{v:'500+',l:'profiles enriched a week'},{v:'90%',l:'less manual research'}] },
{ name:'Omar', role:'AI Operations Coordinator', fn:'Operations', img:'/images/site/coworker-omar.jpg', line:'Tracks shipments and jobs, routes requests to the right team, chases overdue tasks and keeps every system and dashboard current.', forwho:'COOs and operations managers in logistics, facilities, field services, property and multi-site businesses.', skills:['Shipment and job tracking','Service request routing','Task chasing on WhatsApp'], results:[{v:'15h → 16m',l:'weekly tracking work'},{v:'80%',l:'fewer missed deadlines'}] },
{ name:'Nadia', role:'AI Quality and Compliance Auditor', fn:'Risk and Compliance', img:'/images/site/coworker-nadia.jpg', line:'Transcribes and scores every customer call overnight against your script, strips out card details and reports to each manager by 7am.', forwho:'contact centres, banks, insurers, clinics and multi-outlet service businesses.', skills:['Call quality audit','Sensitive data redaction','Daily manager reports'], results:[{v:'100%',l:'of calls audited, from under 10%'},{v:'100%',l:'of card details redacted'}] },
{ name:'Hafiz', role:'AI Bid Analyst', fn:'Risk and Compliance', img:'/images/site/coworker-hafiz.jpg', line:'Collects tenders and RFPs, reads every document in the pack, screens out what you cannot win and ranks the rest by morning.', forwho:'construction, engineering and MEP contractors, IT services firms and any business that bids for work.', skills:['Tender monitoring','Tender pack reading','Go or no-go screening'], results:[{v:'200 pages',l:'condensed into one record'},{v:'Every morning',l:'a ranked shortlist'}] },
{ name:'Grace', role:'AI Executive Assistant', fn:'Executive', img:'/images/site/coworker-grace.jpg', line:'Sorts your inbox and drafts replies in your voice, turns meetings into actions and answers research questions with sources.', forwho:'CEOs, partners, directors and the busy professional teams around them.', skills:['Inbox triage','Draft replies in your voice','Meeting notes and actions'], results:[{v:'3h → 35m',l:'of email handling a day'},{v:'90%',l:'less research time'}] }
];
const P: any[] = [
['Calls going unanswered or customers on hold',0],['Hours a week answering the same questions',1],['Month-end takes too long',2],['Leads going cold before anyone calls',3],['Content not going out consistently',4],['Too much time researching prospects or candidates',5],['Teams chasing updates across systems',6],['Only sampling calls for quality and compliance',7],['Days spent reading tenders',8],['Leaders buried in email and research',9]
];
const sel = this.state.sel, pain = this.state.pain;
const cws = D.map((d, i) => ({ ...d, alt: d.name + ', ' + d.role, selAria: sel === i ? 'true' : 'false', tabStyle: sel === i ? 'background:#151B20;border-left-color:#FE5000' : '', pick: () => this.setState({ sel: i }) }));
const cur = cws[sel];
const pains = P.map((p, i) => ({ text: p[0], selAria: pain === i ? 'true' : 'false', style: pain === i ? 'border-color:#FE5000;background:#1E262C;color:#FFFFFF' : '', pick: () => this.setState({ pain: i }) }));
const rec = cws[P[pain][1]];
const wall: any[] = [];
D.forEach((d, i) => { wall.push({ isImg: true, isText: false, img: d.img, alt: d.name + ', ' + d.role }); if (i === 4) wall.push({ isImg: false, isText: true, text: 'On shift 24/7' }); });
wall.push({ isImg: false, isText: true, text: '60 skills' });
return { sent: !!this.state.sent, sending: !!this.state.sending, submit: (e: any) => { e.preventDefault(); const f = new FormData(e.currentTarget); this.setState({ sending: true }); submitLead('catalogue', { firstname: String(f.get('firstname') || ''), lastname: String(f.get('lastname') || ''), email: String(f.get('email') || ''), company: String(f.get('company') || '') }).finally(() => this.setState({ sending: false, sent: true })); },  cws, cur, pains, rec, wall };
}
}

export default function CoWorkersBody() {
  const V: any = useDC(CoWorkersLogic)
  return (
<div className="k p-coworkers">

{/* HERO */}
<section className="sec" style={{padding: "76px 0 80px", background: "radial-gradient(800px 500px at 75% 40%,rgba(254,80,0,0.12),rgba(14,18,21,0) 70%)"}}>
<div className="streak" style={{top: "26%", left: "0"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center"}}>
<div style={{flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px"}}>
<div className="eyebrow">Ready-built agents · Run on Kydon ZilLearn</div>
<h1 style={{fontSize: "clamp(46px,6.2vw,88px)", lineHeight: "0.95", fontWeight: "800"}}>AI Co-Workers that learn from{" "}<span style={{color: "#FE5000"}}>your best people.</span></h1>
<p className="lead" style={{fontSize: "19px"}}>Ready-built AI roles that take on the routine work, so your people can do more of what only people can. Your team stays in charge, every correction makes them better, and a Forward Deployed Operator runs them inside your team. Already have agents? Kydon ZilLearn is built to work with those too.</p>
<div style={{display: "flex", gap: "16px", flexWrap: "wrap"}}><a className="btn" href="#assess">Book a free AI Workforce Assessment →</a><a className="btn-line" href="#catalogue">Download the catalogue</a></div>
<div style={{display: "flex", gap: "40px", flexWrap: "wrap", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.1)"}}>
<div><div className="big" style={{fontSize: "40px"}}>10</div><div className="muted" style={{fontSize: "14px", marginTop: "6px"}}>AI Co-Workers</div></div>
<div><div className="big" style={{fontSize: "40px"}}>60</div><div className="muted" style={{fontSize: "14px", marginTop: "6px"}}>ready-to-deploy skills</div></div>
<div><div className="big" style={{fontSize: "40px"}}>1–2 wks</div><div className="muted" style={{fontSize: "14px", marginTop: "6px"}}>to go live, simple roles</div></div>
</div>
</div>
<div className="wall" style={{flex: "1 1 460px", minWidth: "0", position: "relative", padding: "0 0 36px 24px"}}>
<div style={{position: "relative", zIndex: "0", height: "500px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)"}}>
<div aria-hidden="true" style={{position: "absolute", right: "0", top: "0", width: "30%", height: "100%", background: "var(--kfold)", clipPath: "polygon(72% 0,100% 0,100% 100%,30% 100%)", zIndex: "1", opacity: "0.85"}}></div>
<img src="/images/site/photo-444a8876.jpg" alt="A professional reviewing work with her team" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "35% 45%"}} />
</div>
<div style={{position: "absolute", left: "0", bottom: "0", width: "310px", background: "#151B20", border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 24px 60px rgba(0,0,0,0.55)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px", zIndex: "3"}}>
<div style={{display: "flex", gap: "10px", alignItems: "center"}}><span aria-hidden="true" style={{width: "40px", height: "40px", borderRadius: "50%", background: "var(--kfold)", color: "#0E1215", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "16px", boxSizing: "border-box"}}>G</span><div><div style={{color: "#fff", fontWeight: "600", fontSize: "14px"}}>Grace · AI Executive Assistant</div><div style={{fontSize: "11px"}} className="muted">This morning</div></div></div>
<div style={{fontSize: "13px", color: "#E3E8EB"}}>14 replies drafted.{" "}<strong style={{color: "#fff"}}>12 approved by you</strong>, 2 corrected.</div>
<div style={{fontSize: "12px", color: "#FF7A3D", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "8px"}}>Both corrections learned for next time.</div>
</div>
<div style={{fontSize: "11px", marginTop: "6px", textAlign: "right"}} className="muted">Illustrative</div>
</div>
</div>
</section>
{/* TEAM EXPLORER */}
<section id="team" className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px", maxWidth: "760px"}}>
<div className="eyebrow">Meet the team</div>
<h2 className="h2">Ten AI Co-Workers across six functions.</h2>
<p className="lead">Select an AI Co-Worker to see what they do, who they are for and the results they deliver.</p>
</div>
<div style={{display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "flex-start"}}>
<div role="tablist" aria-label="AI Co-Workers" style={{flex: "0 1 300px", display: "flex", flexDirection: "column", gap: "2px"}}>
{(V.cws).map((c: any, __i0: number) => (<Fragment key={__i0}>
<button className="tab" role="tab" aria-selected={c.selAria} onClick={c.pick} style={sx(c.tabStyle)}><img src={c.img} alt="" /><span><span style={{display: "block", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", color: "#fff", fontSize: "17px"}}>{c.name}</span><span style={{display: "block", fontSize: "13px"}}>{c.role}</span></span></button>
</Fragment>))}
</div>
<div className="rise" role="tabpanel" style={{flex: "1 1 560px", minWidth: "0", background: "#151B20", border: "1px solid rgba(255,255,255,0.08)", display: "flex", flexWrap: "wrap"}}>
<div style={{flex: "0 1 300px", minWidth: "240px", position: "relative"}}>
<img src={V.cur.img} alt={V.cur.alt} style={{width: "100%", height: "100%", minHeight: "320px", objectFit: "cover", display: "block"}} />
<div style={{position: "absolute", left: "16px", bottom: "16px", background: "rgba(14,18,21,0.85)", padding: "8px 12px", fontSize: "12px", color: "#3DDC84", fontWeight: "600"}}>● On shift 24/7</div>
</div>
<div style={{flex: "1 1 300px", padding: "32px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0"}}>
<div className="tag">{V.cur.fn}</div>
<h3 style={{fontSize: "36px", lineHeight: "1", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 12px"}}><span>{V.cur.name}</span><span className="muted" style={{fontSize: "20px", fontWeight: "500", display: "inline-flex", gap: "8px"}}><span>·</span><span>{V.cur.role}</span></span></h3>
<p style={{margin: "0", fontSize: "17px", color: "#E3E8EB"}}>{V.cur.line}</p>
<p style={{margin: "0", fontSize: "14px"}}><strong style={{color: "#fff", marginRight: "6px"}}>For</strong>{V.cur.forwho}</p>
<div style={{display: "flex", flexDirection: "column", gap: "6px", paddingTop: "6px"}}>
<div className="tag" style={{color: "#93A0A8", fontSize: "11px"}}>Popular skills</div>
{(V.cur.skills).map((s: any, __i0: number) => (<Fragment key={__i0}><div style={{display: "flex", gap: "10px", alignItems: "baseline"}}><span style={{color: "#FE5000"}}>▸</span><span style={{color: "#E3E8EB"}}>{s}</span></div></Fragment>))}
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "12px", marginTop: "auto", paddingTop: "10px"}}>
{(V.cur.results).map((r: any, __i0: number) => (<Fragment key={__i0}><div style={{borderTop: "2px solid #FE5000", paddingTop: "10px"}}><div className="big" style={{fontSize: "30px"}}>{r.v}</div><div style={{fontSize: "13px", marginTop: "4px"}}>{r.l}</div></div></Fragment>))}
</div>
</div>
</div>
</div>
</div>
</section>
{/* EVERY AI CO-WORKER COMES WITH AN FDO */}
<section className="sec" style={{padding: "90px 0 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", background: "#151B20", border: "1px solid rgba(254,80,0,0.45)", padding: "40px", boxSizing: "border-box"}}>
<div style={{flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "14px"}}>
<div className="eyebrow">Every AI Co-Worker comes with a person</div>
<h2 style={{fontSize: "clamp(28px,3vw,42px)", lineHeight: "1.05"}}>Your Forward Deployed Operator makes them work.</h2>
<p style={{margin: "0"}}>A Kydon-trained FDO owns your AI Co-Workers, handles the exceptions, coaches your staff and improves the roles every month. Shared for growing businesses, dedicated for larger teams.</p>
</div>
<div style={{flex: "1 1 420px", position: "relative", minHeight: "260px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)"}}><img src="/images/site/fdo-coach.jpg" alt="A Kydon operator coaching a client team" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 40%"}} /><div aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(14,18,21,0) 55%,rgba(14,18,21,0.85) 100%)"}}></div><div style={{position: "absolute", left: "16px", bottom: "14px", right: "16px", color: "#fff", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "600", fontSize: "17px", borderLeft: "2px solid #FE5000", paddingLeft: "10px"}}>Real people, trained by Kydon, inside your team</div></div>
</div>
</section>
{/* WHERE TO START PICKER */}
<section className="sec" style={{padding: "80px 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "36px", alignItems: "flex-start"}}>
<div style={{flex: "1 1 460px", display: "flex", flexDirection: "column", gap: "18px"}}>
<div className="eyebrow">Where to start</div>
<h2 className="h2" style={{fontSize: "clamp(32px,3.6vw,50px)"}}>What is your biggest pain right now?</h2>
<div style={{display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px"}}>
{(V.pains).map((p: any, __i0: number) => (<Fragment key={__i0}><button className="pain" onClick={p.pick} aria-pressed={p.selAria} style={sx(p.style)}>{p.text}</button></Fragment>))}
</div>
</div>
<div className="rise" style={{flex: "1 1 420px", position: "sticky", top: "20px", background: "var(--kfold)", color: "#0E1215", padding: "36px", display: "flex", flexDirection: "column", gap: "16px"}}>
<div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "13px", letterSpacing: "0.16em", textTransform: "uppercase"}}>Start with</div>
<div style={{display: "flex", gap: "18px", alignItems: "center"}}>
<img src={V.rec.img} alt={V.rec.alt} style={{width: "96px", height: "96px", objectFit: "cover", border: "3px solid #0E1215"}} />
<div><div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "800", fontSize: "40px", lineHeight: "1"}}>{V.rec.name}</div><div style={{fontWeight: "600"}}>{V.rec.role}</div></div>
</div>
<p style={{margin: "0", fontSize: "17px"}}>{V.rec.line}</p>
<a href="/contact" style={{alignSelf: "flex-start", display: "inline-flex", alignItems: "center", minHeight: "50px", padding: "0 24px", background: "#0E1215", color: "#fff", textDecoration: "none", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", gap: "7px"}}><span>Talk to us about</span><span>{V.rec.name}</span><span aria-hidden="true">→</span></a>
</div>
</div>
</section>
{/* FOUNDATIONS */}
<section className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px", maxWidth: "760px"}}><div className="eyebrow">How every AI Co-Worker works</div><h2 className="h2">Your systems, your rules, your people in charge.</h2></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)"}}>
<div style={{background: "#11161A", padding: "28px"}}><div className="big" style={{fontSize: "28px", color: "#FE5000"}}>01</div><h3 style={{fontSize: "21px", marginTop: "10px"}}>Works with your stack</h3><p style={{margin: "6px 0 0", fontSize: "15px"}}>Accounting, CRM, Microsoft 365, Google Workspace, WhatsApp, phone systems and spreadsheets. No rip and replace.</p></div>
<div style={{background: "#11161A", padding: "28px"}}><div className="big" style={{fontSize: "28px", color: "#FE5000"}}>02</div><h3 style={{fontSize: "21px", marginTop: "10px"}}>Your people stay in charge</h3><p style={{margin: "6px 0 0", fontSize: "15px"}}>You decide what it does alone, what needs approval and what is off limits. Pause, correct or override at any time.</p></div>
<div style={{background: "#11161A", padding: "28px"}}><div className="big" style={{fontSize: "28px", color: "#FE5000"}}>03</div><h3 style={{fontSize: "21px", marginTop: "10px"}}>Controls are built in</h3><p style={{margin: "6px 0 0", fontSize: "15px"}}>Confidence thresholds, approvals, materiality limits and least-privilege access, set before go-live.</p></div>
<div style={{background: "#11161A", padding: "28px"}}><div className="big" style={{fontSize: "28px", color: "#FE5000"}}>04</div><h3 style={{fontSize: "21px", marginTop: "10px"}}>Every action is recorded</h3><p style={{margin: "6px 0 0", fontSize: "15px"}}>A full audit trail of what it did, why, and who approved it.</p></div>
<div style={{background: "#11161A", padding: "28px"}}><div className="big" style={{fontSize: "28px", color: "#FE5000"}}>05</div><h3 style={{fontSize: "21px", marginTop: "10px"}}>Exceptions go to people</h3><p style={{margin: "6px 0 0", fontSize: "15px"}}>When unsure, it hands over to a named person with full context instead of guessing.</p></div>
<div style={{background: "#11161A", padding: "28px"}}><div className="big" style={{fontSize: "28px", color: "#FE5000"}}>06</div><h3 style={{fontSize: "21px", marginTop: "10px"}}>Your data stays protected</h3><p style={{margin: "6px 0 0", fontSize: "15px"}}>Access only to what you approve, card numbers removed before AI processing, local data laws followed.</p></div>
</div>
</div>
</section>
{/* DEPLOYMENT PATH + GOVERNANCE */}
<section className="sec" style={{padding: "80px 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px", maxWidth: "760px"}}><div className="eyebrow">From first conversation to first shift</div><h2 className="h2">Live in weeks. Improving every month.</h2><p className="lead">Simple AI Co-Workers go live in 1 to 2 weeks. Voice, multi-system and multi-site roles take 3 to 8 weeks.</p></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: "0", borderTop: "2px solid #FE5000"}}>
<div style={{padding: "22px 18px 0 0"}}><div className="tag" style={{fontSize: "11px"}}>Free</div><h3 style={{fontSize: "20px", marginTop: "6px"}}>1 · Assess</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Map workflows, size the opportunity, pick the first AI Co-Worker.</p></div>
<div style={{padding: "22px 18px 0 0"}}><div className="tag" style={{fontSize: "11px"}}>Week 1</div><h3 style={{fontSize: "20px", marginTop: "6px"}}>2 · Design</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Agree the role, rules, approvals and systems.</p></div>
<div style={{padding: "22px 18px 0 0"}}><div className="tag" style={{fontSize: "11px"}}>Weeks 1–6</div><h3 style={{fontSize: "20px", marginTop: "6px"}}>3 · Build and test</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Tested on your real past calls, emails and documents.</p></div>
<div style={{padding: "22px 18px 0 0"}}><div className="tag" style={{fontSize: "11px"}}>One cycle</div><h3 style={{fontSize: "20px", marginTop: "6px"}}>4 · Parallel run</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Runs alongside your process so you can compare.</p></div>
<div style={{padding: "22px 18px 0 0"}}><div className="tag" style={{fontSize: "11px"}}>Staged</div><h3 style={{fontSize: "20px", marginTop: "6px"}}>5 · Go live</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Starting where risk is lowest.</p></div>
<div style={{padding: "22px 18px 0 0"}}><div className="tag" style={{fontSize: "11px"}}>Monthly</div><h3 style={{fontSize: "20px", marginTop: "6px"}}>6 · Run and improve</h3><p style={{margin: "6px 0 0", fontSize: "14px"}}>Your FDO tunes, reports and trains your team.</p></div>
</div>
<div style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start"}}>
<div style={{flex: "2 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px"}}>
<h3 style={{fontSize: "28px"}}>Controls matched to the risk of each role.</h3>
<div style={{overflowX: "auto"}}><table className="tbl">
<thead><tr><th>Tier</th><th>Controls</th><th>Typical work</th></tr></thead>
<tbody>
<tr><td data-label="Tier" style={{color: "#fff", fontWeight: "600"}}>1 · Core</td><td data-label="Controls">Activity log, human review of exceptions, weekly operator check</td><td data-label="Typical work">Enquiries, reminders, routine admin</td></tr>
<tr><td data-label="Tier" style={{color: "#fff", fontWeight: "600"}}>2 · Governed</td><td data-label="Controls">Approvals on set actions, full audit trail, monthly quality report</td><td data-label="Typical work">Work touching personal data</td></tr>
<tr><td data-label="Tier" style={{color: "#fff", fontWeight: "600"}}>3 · Regulated</td><td data-label="Controls">Maker-checker, data residency, quarterly compliance review</td><td data-label="Typical work">Payments, vendor records, regulated documents</td></tr>
</tbody></table></div>
</div>
<div style={{flex: "1 1 320px", background: "#151B20", border: "1px solid rgba(254,80,0,0.5)", padding: "32px", display: "flex", flexDirection: "column", gap: "12px"}}>
<div className="tag">Commercial model</div>
<h3 style={{fontSize: "28px", lineHeight: "1.05"}}>Priced like headcount, not an IT project.</h3>
<p style={{margin: "0"}}>A monthly fee per AI Co-Worker plus an FDO seat, a one-off setup per role, and no large upfront licence.</p>
<div style={{display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", paddingTop: "6px"}}>
<div><strong style={{color: "#fff"}}>Start small:</strong>{" "}1 to 3 AI Co-Workers and a shared FDO</div>
<div><strong style={{color: "#fff"}}>Staff a department:</strong>{" "}3 to 8 AI Co-Workers plus team learning</div>
<div><strong style={{color: "#fff"}}>Run a programme:</strong>{" "}multi-function, dedicated FDOs, reskilling</div>
</div>
</div>
</div>
</div>
</section>
{/* CATALOGUE (GATED) */}
<section id="catalogue" className="sec" style={{padding: "80px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center"}}>
<div style={{flex: "0 1 380px", background: "#151B20", border: "1px solid rgba(255,255,255,0.12)", aspectRatio: "3/4", padding: "32px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", transform: "rotate(3deg)"}}>
<div style={{fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase"}} className="muted">Capability Catalogue · Southeast Asia</div>
<img src="/images/site/aiwf-horizontal-white.png" alt="AI Workforce Factory\u2122" style={{width: "100%", height: "auto"}} />
<div style={{display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "4px"}}>
{(V.cws).map((c: any, __i0: number) => (<Fragment key={__i0}><img src={c.img} alt="" style={{width: "100%", aspectRatio: "1/1", objectFit: "cover"}} /></Fragment>))}
</div>
<div style={{fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", color: "#fff", fontSize: "20px", lineHeight: "1.15"}}>Ten AI Co-Workers. Sixty skills. Every step, control and result, explained.</div>
</div>
<div style={{flex: "1 1 480px", display: "flex", flexDirection: "column", gap: "20px"}}>
<div className="eyebrow">The full catalogue</div>
<h2 className="h2">Every skill, step and result. In one download.</h2>
<p className="lead">All sixty skills with typical results, twelve step-by-step deep dives with before-and-after numbers, the controls you keep, and how the assessment works.</p>
<form aria-label="Download the capability catalogue" onSubmit={V.submit} style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "12px", alignItems: "end"}}>
<label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "#E3E8EB"}}>First name<input type="text" name="firstname" autoComplete="given-name" required style={{minHeight: "52px", background: "#151B20", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0 14px", font: "inherit"}} /></label>
<label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "#E3E8EB"}}>Last name<input type="text" name="lastname" autoComplete="family-name" required style={{minHeight: "52px", background: "#151B20", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0 14px", font: "inherit"}} /></label>
<label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "#E3E8EB"}}>Work email<input type="email" name="email" autoComplete="email" required style={{minHeight: "52px", background: "#151B20", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0 14px", font: "inherit"}} /></label>
<label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "#E3E8EB"}}>Company<input type="text" name="company" autoComplete="organization" required style={{minHeight: "52px", background: "#151B20", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0 14px", font: "inherit"}} /></label>
<button className="btn" type="submit" disabled={V.sending} style={{border: "0", cursor: "pointer"}}>{V.sending ? 'Sending…' : 'Get the catalogue'}</button>
</form>
{(V.sent) && (<><p role="status" style={{margin: "10px 0 0", color: "#3DDC84", fontWeight: "600", fontSize: "15px"}}>Thanks. Your catalogue is ready.</p><p style={{margin: "6px 0 0"}}><a className="btn-line" href="/downloads/kydon-ai-co-workers-overview.pdf" target="_blank" rel="noopener">Download the catalogue (PDF, 2.6 MB) ↓</a></p></>)}
</div>
</div>
</section>
{/* CLIENT ZERO + ASSESSMENT */}
<section id="assess" className="sec" style={{padding: "80px 0"}}>
<div className="streak" style={{top: "18%", left: "10%", animationDelay: "-3s"}}></div>
<div className="wrap" style={{position: "relative", display: "flex", flexDirection: "column", gap: "40px"}}>
<div className="grid" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "20px"}}>
<div className="card" style={{padding: "0", display: "flex", flexDirection: "column", gap: "12px", overflow: "hidden"}}>
<img src="/images/site/photo-img-08.jpg" alt="Kydon systems at work in the office" style={{width: "100%", height: "200px", objectFit: "cover", display: "block"}} />
<div style={{padding: "0 36px 36px", display: "flex", flexDirection: "column", gap: "12px"}}>
<div className="tag">Kydon is client zero</div>
<h3 style={{fontSize: "28px", lineHeight: "1.05"}}>We run AI Co-Workers inside our own group first.</h3>
<p style={{margin: "0"}}>We are deploying HR helpdesk, onboarding and receivables AI Co-Workers inside Kydon, and will publish the results here.</p>
</div>
</div>
<div className="card" style={{padding: "36px", display: "flex", flexDirection: "column", gap: "12px"}}>
<div className="tag">Design partners</div>
<h3 style={{fontSize: "28px", lineHeight: "1.05"}}>Join a 90-day pilot.</h3>
<p style={{margin: "0"}}>A limited number of businesses can pilot AI Co-Workers for 90 days in exchange for a named case study.</p>
<a href="/contact" style={{fontWeight: "600", marginTop: "auto"}}>Apply to be a design partner →</a>
</div>
</div>
<div style={{background: "var(--kfold)", color: "#0E1215", padding: "48px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center"}}>
<div style={{flex: "1 1 480px", display: "flex", flexDirection: "column", gap: "12px"}}>
<h2 className="h2" style={{color: "#0E1215"}}>Find where an AI Co-Worker helps your people most.</h2>
<p style={{margin: "0", fontSize: "17px"}}>A free AI Workforce Assessment maps your workflows, shows where an AI Co-Worker pays back fastest, and recommends which one to hire first.</p>
</div>
<a href="/contact" style={{display: "inline-flex", alignItems: "center", minHeight: "56px", padding: "0 30px", background: "#0E1215", color: "#fff", textDecoration: "none", fontFamily: "var(--font-league-spartan),sans-serif", fontWeight: "700", fontSize: "18px"}}>Book your assessment →</a>
</div>
</div>
</section>
{/* PART OF THE PLATFORM */}
<section className="sec" style={{padding: "72px 0", background: "#11161A", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between"}}>
<div style={{flex: "1 1 520px", display: "flex", flexDirection: "column", gap: "12px"}}><div className="eyebrow">Part of Kydon ZilLearn</div><h2 style={{fontSize: "clamp(28px,3vw,40px)", lineHeight: "1.05"}}>Kydon AI Co-Workers are one way in. The platform works with any agent.</h2><p style={{margin: "0"}}>Every Kydon AI Co-Worker runs on Kydon ZilLearn, the learning and performance platform for people and AI agents. It is built to work with the agents you already have too.</p></div>
<div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}><a className="btn" href="/platform">See the platform →</a><a className="btn-line" href="/platform#agents">Works with your agents</a></div>
</div>
</section>

</div>
  )
}
