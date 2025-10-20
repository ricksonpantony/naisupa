import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import SeoHead from '../components/SeoHead'
import { faqPageJsonLd, breadcrumbJsonLd, BASE_DOMAIN } from '../seo/jsonld'

const NCLEXFAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    // OBA & Registration Process
    {
      category: "OBA & Registration Process",
      question: "What is OBA?",
      answer: "Outcome Based Assessment (OBA) is the new process of assessment model introduced by Nursing and Midwifery Board of Australia (NMBA), Australian Health Practitioner Regulation Agency (AHPRA) for Internationally Qualified Nurses and Midwives (IQNM). It is a two‑staged assessment process introduced by NMBA, AHPRA in March 2020. The OBA process includes multiple‑choice question exam (MCQ) also known as Next Generation NCLEX (NGN) or Nursing Council Licensure Examination and an Objective Structured Clinical Exam (OSCE). Before moving to the next stage, Internationally Qualified Nurses and Midwives (IQNMs) should pass these stages first."
    },
    {
      category: "OBA & Registration Process",
      question: "How can an IQNM qualify for OBA?",
      answer: "For IQNMs to be qualified for Outcome Based Assessment (OBA), they must conduct the SELF CHECK which is the first step in OBA to determine the pathway required by Australian Health Practitioner Regulation Agency (AHPRA). From there, candidate can determine their stream and proceed with the steps needed for Nurse registration in Australia."
    },
    {
      category: "OBA & Registration Process",
      question: "What is AHPRA Self‑check and how it can be done?",
      answer: "For IQNMs who wish to register in Australia, they will need to complete the AHPRA Self‑check before applying for registration. It is an online check where you will need to enter your qualification information which includes personal and educational background. Based on your qualification you will be assigned to one of three streams for registration: Stream A (IQNMs who hold a qualification considered to be substantially equivalent, or based on similar competencies, to an approved qualification), Stream B (IQNMs who hold a qualification that is relevant to the profession, but is not substantially equivalent, nor based on similar competencies to an approved qualification), or Stream C (IQNMs who hold a qualification that is not substantially equivalent or relevant to an approved qualification). IQNMs who do not hold relevant qualifications or do not meet the required criteria will need to upgrade their qualification in Australia before being eligible to apply for registration."
    },
    {
      category: "OBA & Registration Process",
      question: "Do I need to pay for AHPRA Self‑Check?",
      answer: "No, there is no fee for self‑check since it will just determine your stream first. Before registering, a Self‑check needs to be completed first by anyone who is planning to apply in Australia and is considered an internationally qualified nurse or midwife (IQNM). Further information about self‑check can be found and read on Nurse Assist International webpage."
    },
    {
      category: "OBA & Registration Process",
      question: "What comes after AHPRA Self‑Check?",
      answer: "If an IQNM successfully completes the self‑check, he/she may proceed with the IQNM Assessment Process where they have to pay $640 AUD. The fee is non‑refundable and will be used by Australian Health Practitioner Regulation Agency (AHPRA) in checking documentation so that IQNM may proceed with Orientation Stage."
    },
    {
      category: "OBA & Registration Process",
      question: "What is with Orientation Stage?",
      answer: "This stage is an online learning course that will give information and introduction to Australia (geography, territories, languages, ethnic groups, etc.) and Australian Healthcare context. It includes watching videos, reading and some sort of question‑and‑answer portions. This stage of Outcome Based Assessment (OBA) is free of charge."
    },
    {
      category: "OBA & Registration Process",
      question: "What comes after Orientation Stage?",
      answer: "Once done with Orientation phase, IQNM will be eligible to sit for Next Generation NCLEX (NGN), a multiple‑choice question exam that is being taken online through Pearson VUE test centers in many countries."
    },
    {
      category: "OBA & Registration Process",
      question: "What are the requirements to work as a nurse in Australia?",
      answer: "Complete the nursing registration. Pass the TOEFL, PTE, OET, or IELTS English language competency exam. Education level equivalent to AHPRA criteria. Pass the OSCE or MCQ tests."
    },
    {
      category: "OBA & Registration Process",
      question: "Can I use my RN licence in Australia?",
      answer: "No, you can't use your RN license in Australia without registering with the Nursing and Midwifery Board of Australia (NMBA)."
    },
    {
      category: "OBA & Registration Process",
      question: "Can nurses get PR in Australia?",
      answer: "Yes, nurses can get permanent residency (PR) in Australia."
    },
    
    // NCLEX Exam Details
    {
      category: "NCLEX Exam Details",
      question: "What is the MCQ exam described in Outcome Based Assessment (OBA)?",
      answer: "The multiple‑choice question (MCQ) exam is designed to evaluate the professional knowledge and skills of the candidates. Exams are administered separately for IQNMs who are aspiring to be licensed in Australia as a registered nurse (RN), enrolled nurse (EN), or midwife. The MCQ exam intended for RNs is administered through the National Council Licensure Examination for Registered Nurses (Next Generation NCLEX‑NGN). This is developed by the National Council of State Boards of Nursing (NCSBN) and is conducted through the Pearson VUE test centers in most countries. After the completion of Orientation Part 1 and Portfolio stage, Stream B candidates should undergo the MCQ exam alternatively also referred as the Next Generation NCLEX‑NGN exam. A candidate must successfully pass the exam first before progressing to the Objective Structured Clinical Exam (OSCE)."
    },
    {
      category: "NCLEX Exam Details",
      question: "What is Next Generation NCLEX (NGN)?",
      answer: "The National Council Licensure Examination for Registered Nurses (NCLEX‑NGN) also known as the multiple‑choice question (MCQ) is a newly introduced method of assessment by the Australian Health Practitioner Regulation Agency (AHPRA). Next Generation NCLEX (NGN) is a computer‑administered examination and consists of items ranging from 75 to 145 questions. The examination results of Next Generation NCLEX (NGN) are utilized by the nursing regulatory bodies (NRBs) as a critical component in the decision‑making regarding registration/licensure of the nursing profession."
    },
    {
      category: "NCLEX Exam Details",
      question: "What is the difference between OBA's MCQ and Next Generation NCLEX (NGN)?",
      answer: "Multiple‑choice question (MCQ) exam is a cognitive assessment and it is computer‑based. It is also called Next Generation NCLEX (NGN) or National Council Licensure Examination for Registered Nurses which is being administered by National Council of State Boards of Nursing or NCSBN. It is a standardized test used to test the competency of nursing graduates and determine if they are eligible to work on their own in Australia. Next Generation NCLEX (NGN) is an examination that is developed to assess appropriate knowledge, skills, and capabilities critical to the profession and to practice nursing effectively. The examination is fashioned to assess the safety of a nurse at their entry‑level. They are computer generated and are considered to be adaptive tests. For Next Generation NCLEX (NGN), examinations cannot be accessed through written and oral versions. The Next Generation NCLEX (NGN) examination consists of items ranging from 75 to 145 questions. This examination is taken strictly for five hours despite the number of items given. The examination results of Next Generation NCLEX (NGN) are utilized by the nursing regulatory bodies (NRBs) as a critical component in the decision‑making regarding registration/licensure of the nursing profession."
    },
    {
      category: "NCLEX Exam Details",
      question: "Do I need NCLEX to work as a nurse in Australia?",
      answer: "Yes, in order to become a registered nurse (RN) in Australia, one must pass the National Council Licensure Examination (NCLEX). A licensure exam that evaluates a nurse's knowledge and abilities is the NCLEX. It is administered using computerised adaptive testing (CAT) technology by the National Council of State Boards of Nursing (NCSBN)."
    },
    {
      category: "NCLEX Exam Details",
      question: "What if I already passed NCLEX‑RN US, am I be exempted?",
      answer: "It will be Australian Health Practitioner Regulation Agency (AHPRA) to decide whether you need to take Next Generation NCLEX (NGN) again or not."
    },
    
    // Registration & Fees
    {
      category: "Registration & Fees",
      question: "How much is Next Generation NCLEX (NGN) registration fee?",
      answer: "The registration fee for Next Generation NCLEX (NGN) for registered nurses is $200 USD plus an additional international scheduling fee of $150 USD. Total fee for the whole process will be $350 USD."
    },
    {
      category: "Registration & Fees",
      question: "How much does NCLEX cost in Australia?",
      answer: "The registration fee for the National Council Licensure Examination (NCLEX) in Australia is $200 USD, plus an additional international scheduling fee of $150 USD, totaling $350 USD."
    },
    {
      category: "Registration & Fees",
      question: "How can I pay for the exam fee?",
      answer: "IQNM must register and pay the exam fee at Pearson VUE online or by calling directly Pearson VUE NCLEX Candidate Services. Payment can be done via credit, debit or prepaid card (MasterCard, Visa or American Express). Once paid, Pearson VUE will email the candidate regarding Acknowledgement of Receipt of Next Generation NCLEX (NGN) Registration."
    },
    {
      category: "Registration & Fees",
      question: "Can an IQNM get a refund for any Next Generation NCLEX (NGN) fees?",
      answer: "There are NO refunds of Next Generation NCLEX (NGN) fees for any reason."
    },
    {
      category: "Registration & Fees",
      question: "What is the Registration Process for the Next Generation NCLEX (NGN) in Australia?",
      answer: "1. Complete Self‑Check and Portfolio to progress with the Next Generation NCLEX (NGN) Exam (cost AUD $640). 2. Register and pay the exam fee online or by calling Pearson VUE. Registration valid for 365 days (cost USD $200). 3. Receive acknowledgement and receipt from Pearson VUE via email. AHPRA makes you eligible to attempt the exam at Pearson VUE. 4. Schedule your exam at Pearson VUE online or by calling candidate service (Cost USD $150) and appear for your exam with your passport."
    },
    {
      category: "Registration & Fees",
      question: "How is the process of nursing registration for internationally qualified nursing Registration Process in Australia?",
      answer: "Next Generation NCLEX (NGN) information for Internationally qualified nurses seeking registration in Australia has been explained to you in a very concise manner. Click on the link to understand the eight steps of booking Next Generation NCLEX (NGN) with Australian Health Practitioner Regulation Agency (AHPRA)."
    },
    
    // Scheduling & Testing
    {
      category: "Scheduling & Testing",
      question: "How many days I am eligible to test?",
      answer: "Australian Health Practitioner Regulation Agency (AHPRA) makes you eligible to test within 365 days of your Next Generation NCLEX (NGN) registration and payment."
    },
    {
      category: "Scheduling & Testing",
      question: "Will I get my Authority to Test (ATT) right after registering for NCLEX?",
      answer: "Once eligible, you will receive an Authority to Test (ATT) to the email address you have provided when registering. You should take the exam within the validity dates of your ATT (average length of 90 days). NO EXTENSIONS given. Validity dates cannot be extended. Failure to take the exam within the dates provided will result in forfeiture and you will be needed to register and pay again another exam fee."
    },
    {
      category: "Scheduling & Testing",
      question: "What is with ATT?",
      answer: "The ATT contains the authorization number, candidate identification number and an expiration date. You will need the ATT to schedule an appointment to take the Next Generation NCLEX (NGN)."
    },
    {
      category: "Scheduling & Testing",
      question: "How long is NCLEX Australia valid for?",
      answer: "The Authorization to Test (ATT) for the NCLEX‑RN exam in Australia is valid for 90 days from the date it's issued."
    },
    {
      category: "Scheduling & Testing",
      question: "Can I take the Next Generation NCLEX (NGN) outside Australia?",
      answer: "Yes. You can take Next Generation NCLEX (NGN) at any Pearson Professional Testing locations worldwide. Aside from Australia, international locations where Next Generation NCLEX (NGN) is offered include USA, Brazil, Canada, UK, Hong Kong, India, Japan, Mexico, Philippines, Puerto Rico, South Africa and Taiwan."
    },
    {
      category: "Scheduling & Testing",
      question: "What are the Rules for Scheduling/Rescheduling/Unscheduling my Next Generation NCLEX (NGN) exam?",
      answer: "If you need to reschedule your appointment: Tuesday, Wednesday, Thursday or Friday appointments must be changed 24 hours in advance of the original date and time. For example, if your appointment is on Wednesday at 2:00 pm, then you must call or go online to reschedule by Tuesday at 2:00 pm. Saturday, Sunday or Monday appointments must be changed no later than the Friday before the original date and time. For example, if your appointment is on Monday at 2:00 pm, then you must call or go online to reschedule by Friday at 2:00 pm."
    },
    
    // Test Day & Results
    {
      category: "Test Day & Results",
      question: "Do I need to bring identifications at the test centers?",
      answer: "IQNMs should bring valid identifications and meet all requirements. If ID doesn't meet these requirements, you cannot take the exam and are required to register and pay again another examination fee. Requirements: Government issued ID, Non‑expired, Name (in Roman Characters), Recent Photographs, Signature. Acceptable forms of ID for test centers are: Passport books and cards, Driver's License, Provincial/Territorial or State ID card, Permanent Residence Card, Military ID Card."
    },
    {
      category: "Test Day & Results",
      question: "When will I get my results?",
      answer: "Official exam results will be available and sent to candidates approximately six weeks after taking the exam."
    },
    {
      category: "Test Day & Results",
      question: "Do I need to register again for a retake?",
      answer: "Yes. Candidate who didn't pass the exam needs to reregister with Pearson VUE and pay again the fee. Wait for new ATT and then schedule for next exam date."
    },
    
    // NCLEX vs OSCE
    {
      category: "NCLEX vs OSCE",
      question: "What is the difference between the NCLEX and the OSCE?",
      answer: "The OSCE assesses practical competencies, whereas the NCLEX gauges theoretical knowledge for licensing. In your nursing profession, both are crucial steps!"
    }
  ]

  // SEO: NCLEX FAQ page preserving old keywords (55-60 chars)
  const seoData = {
    title: "NCLEX Australia FAQ | NCLEX NGN Questions | NAI", // 52 chars
    description: "NCLEX Australia frequently asked questions with expert guidance and support. Get answers about NCLEX NGN exam preparation from Nurse Assist International reviews and success stories.",
    canonical: `${BASE_DOMAIN}/pages/nclex-ngn-faq`,
    og: {
      title: "NCLEX-RN FAQ | Next Generation NGN Questions | NAI",
      description: "Everything you need to know about NCLEX-RN and Next Generation NGN exam preparation in Australia.",
      url: `${BASE_DOMAIN}/pages/nclex-ngn-faq`,
      image: `${BASE_DOMAIN}/images/og/nclex-faq.webp`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "NCLEX-RN FAQ | NGN Questions Answered | NAI",
      description: "Get expert answers to your NCLEX-RN and Next Generation NGN exam questions from Australia's leading nursing institute.",
      image: `${BASE_DOMAIN}/images/og/nclex-faq.webp`
    },
    jsonLd: [
      faqPageJsonLd(faqs.map(faq => ({
        question: faq.question,
        answer: faq.answer
      }))),
      breadcrumbJsonLd([
        { name: "Home", url: BASE_DOMAIN },
        { name: "Resources", url: `${BASE_DOMAIN}/#resources` },
        { name: "NCLEX FAQ", url: `${BASE_DOMAIN}/pages/nclex-ngn-faq` }
      ])
    ]
  };

  return (
    <>
      <SeoHead {...seoData} />

      <div className="min-h-screen bg-nai-soft pt-20">
        <div className="container-responsive py-16">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nai-dark mb-6">
              NEXT GENERATION NCLEX (NGN)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to your most common questions about the Next Generation NCLEX and our preparation programs.
            </p>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-nai-teal/5 transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-nai-dark pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-nai-highlight flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-nai-highlight flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="px-6 py-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-xl p-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-6 opacity-90">Our expert team is here to help you succeed in your NCLEX journey.</p>
            <a 
              href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20have%20questions%20about%20the%20NCLEX%20preparation%20course"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-nai-highlight px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Contact Our Experts
            </a>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default NCLEXFAQPage
