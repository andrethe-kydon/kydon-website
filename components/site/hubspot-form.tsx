'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Kydon's "Marketing Contact Template" HubSpot form.
 * Decoded from the share link https://1gocq.share-na2.hsforms.com/2mjyPRpC5TLGyuU1B7sJ5lA
 * Sanity contactPage values (hubspotPortalId / hubspotFormId / hubspotEmbedCode) override these.
 */
export const HUBSPOT_DEFAULTS = {
  portalId: '2457674',
  formId: '9a3c8f46-90b9-4cb1-b2b9-4d41eec27994',
  region: 'na2',
  shareUrl: 'https://1gocq.share-na2.hsforms.com/2mjyPRpC5TLGyuU1B7sJ5lA',
}

interface Props {
  portalId?: string
  formId?: string
  embedCode?: string
  region?: string
}

export default function HubSpotForm({ portalId, formId, embedCode, region }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)
  const pid = portalId || HUBSPOT_DEFAULTS.portalId
  const fid = formId || HUBSPOT_DEFAULTS.formId
  const reg = region || HUBSPOT_DEFAULTS.region

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Raw embed code from Sanity, only when no IDs are configured there.
    if (embedCode && !(portalId && formId)) {
      el.innerHTML = embedCode
      el.querySelectorAll('script').forEach((old) => {
        const s = document.createElement('script')
        Array.from(old.attributes).forEach((a) => s.setAttribute(a.name, a.value))
        s.textContent = old.textContent
        old.parentNode?.replaceChild(s, old)
      })
      return
    }

    const create = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const hbspt = (window as any).hbspt
      if (!hbspt) return setFailed(true)
      el.innerHTML = ''
      hbspt.forms.create({ region: reg, portalId: pid, formId: fid, target: '#hubspot-form-container' })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).hbspt) return create()
    const script = document.createElement('script')
    script.src = `https://js${reg === 'na1' ? '' : '-' + reg}.hsforms.net/forms/embed/v2.js`
    script.async = true
    script.onload = create
    script.onerror = () => setFailed(true)
    document.head.appendChild(script)
  }, [pid, fid, reg, embedCode, portalId, formId])

  return (
    <>
      <div id="hubspot-form-container" ref={ref} style={{ minHeight: '320px' }} />
      {failed && (
        <p style={{ margin: '0', fontSize: '15px' }}>
          The form did not load.{' '}
          <a href={HUBSPOT_DEFAULTS.shareUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#FF7A3D' }}>
            Open it in a new tab
          </a>{' '}
          or email contact@kydongrp.com.
        </p>
      )}
    </>
  )
}
