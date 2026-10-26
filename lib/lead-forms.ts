/**
 * The website's four lead forms and the HubSpot forms they post to.
 * Each form keeps the site's own design; on submit the details are sent to
 * HubSpot in the background. Paste each form's ID from HubSpot below.
 * While an ID is empty, that form still works on the page but nothing reaches HubSpot.
 */
export const HUBSPOT_PORTAL_ID = '2457674'

export const LEAD_FORMS = {
  catalogue: { formId: 'ae2234c7-907e-42c3-aaa4-dd3d9756d749', label: 'Website: AI Co-Worker catalogue' },
  whitePaper: { formId: '5c7ef712-321e-4d4c-b694-2587aebc7ea8', label: 'Website: AI Workforce Factory white paper' },
  subscribe: { formId: '5e309679-d2c0-426f-893b-35f9625759a3', label: 'Website: Insights subscribe' },
  demo: { formId: 'eba64bc4-2e9d-4e25-84b9-2a8c7abcbce5', label: 'Website: Kydon Intelligence demo request' },
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
