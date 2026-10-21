/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'
import type { CSSProperties } from 'react'

/**
 * Small helpers for the pages ported from the approved design mock-up.
 *
 * Interactive sections (co-worker selector, FAQ, forms) keep the mock-up's
 * original state logic in a class with renderVals(); useDC() runs that class
 * inside a React component so the logic stays identical to what was signed off.
 */
export class DCLogic {
  props: any
  state: any = {}
  _rerender?: () => void
  constructor(props: any) {
    this.props = props
  }
  setState(patch: any) {
    this.state = { ...this.state, ...patch }
    this._rerender?.()
  }
  renderVals(): any {
    return {}
  }
}

export function useDC(Logic: new (props: any) => DCLogic, props: any = {}): any {
  const ref = useRef<DCLogic | null>(null)
  if (!ref.current) ref.current = new Logic(props)
  const [, force] = useState(0)
  ref.current._rerender = () => force((n) => n + 1)
  return ref.current.renderVals()
}

/** Convert an inline CSS string (as used by the mock-up's dynamic styles) to a React style object. */
export function sx(css?: string): CSSProperties {
  const out: Record<string, string> = {}
  if (!css) return out
  css.split(';').forEach((decl) => {
    const i = decl.indexOf(':')
    if (i < 0) return
    const k = decl.slice(0, i).trim()
    const v = decl.slice(i + 1).trim()
    if (!k) return
    const key = k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
    out[key] = v
  })
  return out as CSSProperties
}
