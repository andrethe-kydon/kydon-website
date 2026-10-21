'use client'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/platform', label: 'Platform', match: ['/platform', '/ai-learning-platform', '/kydon-intelligence'] },
  { href: '/ai-co-workers', label: 'AI Co-Workers', match: ['/ai-co-workers'] },
  { href: '/ai-workforce-factory', label: 'AI Workforce Factory™', match: ['/ai-workforce-factory'] },
  { href: '/#serve', label: 'Solutions', match: ['/solutions'] },
  { href: '/insights', label: 'Insights', match: ['/insights'] },
  { href: '/company', label: 'Company', match: ['/company', '/careers', '/contact'] },
]

export function Header() {
  const path = usePathname() || '/'
  const isActive = (m: string[]) => m.some((p) => path === p || path.startsWith(p + '/'))
  return (
    <div className="k">
<header style={{position: "relative", zIndex: "5", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "#0E1215"}}>
<div className="wrap" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "80px", flexWrap: "wrap"}}>
<a href="/" aria-label="Kydon home"><img src="/images/site/kydon-white.png" alt="Kydon, Leading Learning" style={{height: "42px", width: "auto", display: "block"}} /></a>
<nav className="nav" aria-label="Main" style={{display: "flex", gap: "26px", flexWrap: "wrap", alignItems: "center"}}>
{NAV.map((n) => (
<a key={n.href} href={n.href} style={isActive(n.match) ? { color: '#FE5000' } : undefined}>{n.label}</a>
))}
</nav>
<a className="btn" href="/platform" style={{minHeight: "46px", fontSize: "16px", padding: "0 22px"}}>See the platform</a>
</div>
</header>
    </div>
  )
}
