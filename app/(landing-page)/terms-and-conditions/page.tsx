'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Terms and Conditions</h1>
        <p className="text-center text-gray-600 mb-12">Last updated: December 15, 2024</p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <Card className="lg:w-1/4 p-4 lg:p-6 h-auto  lg:sticky top-8">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-purple-700">Table of Contents</h2>
            <ScrollArea className="h-auto pr-4">
              <nav className="space-y-1">
                {[
                  { id: 'introduction', title: 'Introduction' },
                  { id: 'refund-policy', title: 'Refund Policy' },
                  { id: 'piracy-prevention', title: 'Piracy Prevention' },
                  { id: 'success-promotion', title: 'Success & Promotion' },
                  { id: 'access-issues', title: 'Access Issues' },
                ].map((section) => (
                  <Button
                    key={section.id}
                    variant="ghost"
                    className={`w-full justify-start py-2 text-left ${
                      activeSection === section.id
                        ? "bg-purple-100 text-purple-800 font-medium"
                        : "text-gray-600 hover:text-purple-600"
                    }`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.title}
                  </Button>
                ))}
              </nav>
            </ScrollArea>
          </Card>

          <Card className="lg:w-3/4 p-6 lg:p-10 max-w-4xl mx-auto">
            <div className="prose prose-purple prose-sm sm:prose-base lg:prose-lg max-w-none">
              <section id="introduction" className="mb-8 lg:mb-12">
                <p className="lead">
                  Please read these terms carefully before purchasing from E-Boi. By completing a purchase, you agree to these terms. In case of any disputes, these terms will govern.
                </p>
              </section>

              <section id="refund-policy" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">1. Refund Policy</h2>
                <p>
                  We do not offer refunds for our ebooks. Once purchased, your access will be activated immediately, and you will receive the ebook in your mailbox within the next 10 hours. There will be no option for refunds.
                </p>
              </section>

              <section id="piracy-prevention" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">2. Piracy Prevention</h2>
                <p>
                  We take the protection of our content seriously. If you are caught illegally sharing, distributing, or selling our ebooks, we will take legal action in accordance with the laws of Bangladesh.
                </p>
              </section>

              <section id="success-promotion" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">3. Success & Promotion</h2>
                <p>
                  By submitting testimonials or feedback to us, either via email or through social media, you grant us permission to use that material for marketing and promotional purposes.
                </p>
              </section>

              <section id="access-issues" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">4. Access Issues</h2>
                <p>
                  If you encounter any issues accessing your ebook, or if you do not receive the ebook within 10 hours of purchase, please contact us via the email provided in the Contact Us section or submit a query through the Reach Us form.
                </p>
              </section>

              <section className="mt-12">
                <p className="text-center text-lg font-semibold text-purple-700">
                  Thank you for choosing E-Boi.
                </p>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

