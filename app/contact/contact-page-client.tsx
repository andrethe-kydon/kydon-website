'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Building2 } from 'lucide-react'

interface ContactContent {
  heroHeadline: string
  heroHighlight: string
  heroDescription: string
  contactEmail: string
  officeAddress: string
  hubspotPortalId?: string
  hubspotFormId?: string
  hubspotEmbedCode?: string
}

interface ContactPageClientProps {
  content: ContactContent
}

// Office locations data
const offices = [
  {
    country: 'Malaysia',
    email: 'contact_my@kydongrp.com',
    address: '#15-02, Jalan Laksamana 1, Puteri Harbour, 79250, Iskandar Puteri, Johor Bahru, Johor.',
  },
  {
    country: 'Indonesia',
    email: 'contact_id@kydongrp.com',
    address: 'Jalan Pembangunan 1 no. 3, Jakarta Pusat, Jakarta, Indonesia 10130.',
  },
  {
    country: 'Vietnam',
    email: 'contact_vn@kydongrp.com',
    address: '8th Floor, Anh Minh Building, No. 36 Hoang Cau, O Cho Dua Ward, Dong Da District, Hanoi.',
  },
  {
    country: 'India',
    email: 'contact_in@kydongrp.com',
    address: '320 First Floor, Room No. 101, Delhi Gate Bazar, New Delhi, India 11006.',
  },
]

export default function ContactPageClient({ content }: ContactPageClientProps) {
  const formContainerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // If HubSpot portal ID and form ID are provided, load HubSpot form
    if (content?.hubspotPortalId && content?.hubspotFormId) {
      // Load HubSpot script
      const script = document.createElement('script')
      script.src = '//js.hsforms.net/forms/embed/v2.js'
      script.charset = 'utf-8'
      script.type = 'text/javascript'
      script.async = true
      
      script.onload = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const hbspt = (window as any).hbspt
        if (hbspt) {
          hbspt.forms.create({
            portalId: content.hubspotPortalId,
            formId: content.hubspotFormId,
            target: '#hubspot-form-container',
          })
        }
      }
      
      document.head.appendChild(script)
      
      return () => {
        // Cleanup
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }
    // If raw embed code is provided, use it
    else if (content?.hubspotEmbedCode && formContainerRef.current) {
      // Parse and execute any scripts in the embed code
      const container = formContainerRef.current
      container.innerHTML = content.hubspotEmbedCode
      
      // Find and execute scripts
      const scripts = container.querySelectorAll('script')
      scripts.forEach(oldScript => {
        const newScript = document.createElement('script')
        Array.from(oldScript.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value)
        })
        newScript.textContent = oldScript.textContent
        oldScript.parentNode?.replaceChild(newScript, oldScript)
      })
    }
  }, [content?.hubspotPortalId, content?.hubspotFormId, content?.hubspotEmbedCode])
  
  const hasHubSpotForm = !!(content?.hubspotPortalId && content?.hubspotFormId) || !!content?.hubspotEmbedCode

  return (
    <main className="pt-24">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Stereogram_Tut_Random_Dot_Shark.png/500px-Stereogram_Tut_Random_Dot_Shark.png fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-wide"
          >
            CONNECT WITH US
          </motion.h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Let's Chat */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-primary">Let&apos;s Chat</h2>
              <p className="text-neutral-700 leading-relaxed">
                At Kydon, we&apos;re driving the future of learning through innovative technology.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Whether you&apos;re seeking solutions for your organizational training needs, exploring potential partnerships, or simply have questions about our products and services, we are here to support you.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                We&apos;re excited to explore how we can work together to transform the landscape of workplace job readiness, learning and performance.
              </p>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100">
                <h3 className="text-xl font-bold text-primary mb-2 text-center tracking-wide">SEND US A MESSAGE</h3>
                <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                
                {hasHubSpotForm ? (
                  <div 
                    id="hubspot-form-container" 
                    ref={formContainerRef}
                    className="hubspot-form-wrapper min-h-[400px]"
                  />
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-neutral-50 rounded-xl p-6 mb-6 border-2 border-dashed border-neutral-200">
                      <p className="text-neutral-500 text-sm">
                        HubSpot form will be embedded here via CMS
                      </p>
                    </div>
                    <p className="text-neutral-600 mb-4">
                      In the meantime, please reach out via email:
                    </p>
                    <a 
                      href="mailto:contact@kydongrp.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all"
                    >
                      <Mail className="w-5 h-5" />
                      contact@kydongrp.com
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">Headquarters</h2>
            <p className="text-xl text-primary font-semibold">Singapore</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto space-y-4"
          >
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+6566815691" className="text-neutral-700 hover:text-primary transition-colors">
                +65 6681 5691
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:contact@kydongrp.com" className="text-neutral-700 hover:text-primary transition-colors">
                contact@kydongrp.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-neutral-700 text-center">
                2 Science Park Drive, Ascent #01-32, Singapore 118222
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900">Offices</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <h3 className="text-xl font-bold text-primary">{office.country}</h3>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-neutral-400 mt-1 flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="text-neutral-600 hover:text-primary transition-colors text-sm">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-neutral-400 mt-1 flex-shrink-0" />
                  <span className="text-neutral-600 text-sm">{office.address}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Building2 className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Learning?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you explore AI-powered learning solutions tailored to your organization&apos;s needs.
            </p>
            <a 
              href="mailto:contact@kydongrp.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-xl hover:bg-neutral-200 transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
