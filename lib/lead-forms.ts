/**
 * The website's four lead forms and the HubSpot forms they post to.
 * Each form keeps the site's own design; on submit the details are sent to
 * HubSpot in the background. Paste each form's ID from HubSpot below.
 * While an ID is empty, that form still works on the page but nothing reaches HubSpot.
 */
export const HUBSPOT_PORTAL_ID = '2457674'

export const LEAD_FORMS = {
  catalogue: { formId: '', label: 'Website: AI Co-Worker catalogue' },
  whitePaper: { formId: '', label: 'Website: AI Workforce Factory white paper' },
  subscribe: { formId: '', label: 'Website: Insights subscribe' },
  demo: { formId: '', label: 'Website: Kydon Intelligence demo request' },
} as const

export type LeadFormKey = keyof typeof LEAD_FORMS

/** Field names must match HubSpot's internal property names. */
export async function submitLead(form: LeadFormKey, fields: Record<string, string>): Promise<boolean> {
  const { formId } = LEAD_FORMS[form]
  if (!formId) return false
  const hutk = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1]
  try {
    const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: Object.entries(fields).filter(([, v]) => v).map(([name, value]) => ({ name, value })),
        context: { pageUri: window.location.href, pageName: document.title, ...(hutk ? { hutk } : {}) },
      }),
    })
    return res.ok
  } catch {
    return false
  }
}
