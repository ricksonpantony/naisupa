import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const OSCEFAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: "What is Objective Structured Clinical Examination (OSCE)?",
      answer: "Registered Nurse Objective Structured Clinical Examination (RN OSCE) is a test that examines foreign registered nurses. RN OSCE is administered to such nurses desiring to become registered as nurses in Australia. After the candidate successfully passes the Next Generation NCLEX (NGN), they will proceed with OSCE which is a behavioral assessment developed to determine if the IQNM demonstrates the knowledge, skills and competence required."
    },
    {
      question: "How does OSCE differ from Next Generation NCLEX (NGN)?",
      answer: "Next Generation NCLEX (NGN) is multiple choice while OSCE is an actual practical exam. OSCE will simulate a clinical environment and patient scenarios which Registered Nurses are likely to encounter when they assess, diagnose, plan, implement and evaluate care. Nurses are expected to utilize contemporary evidence-based practice and effectively demonstrate the safe practical application of nursing skills."
    },
    {
      question: "How much is the fee for OSCE?",
      answer: "OSCE costs $4,000 AUD. It will be used by AHPRA in running and maintaining OSCE. The fee is non-refundable regardless of reasons, similar to the Next Generation NCLEX (NGN) examination fee."
    },
    {
      question: "Are there offered courses for OSCE Preparation?",
      answer: "Yes. There are institutions offering OSCE Preparation courses. Most of them offer 6 weeks course structure and training and the fee costs around $3,500 – $5,500 AUD. Nurse Assist International provides comprehensive resources and materials to get you skilled and competent for your OSCE examination."
    },
    {
      question: "What is the content of OSCE?",
      answer: "The RN OSCE test has ten clinical scenarios meant to evaluate persons based on the NMBA Registered Nurse Standards for Practice. RN OSCE is the minimum entry practice level for RNs in Australia. It is a regulatory and not an educational OSCE. It integrates consistency for all candidates, meaning: The candidate will not be coached, prompted or given extra explanations of responsibilities or findings by the examiners."
    },
    {
      question: "When can I register for OSCE?",
      answer: "Once you pass the Next Generation NCLEX (NGN), your OBA IQNM Dashboard will advise you of your eligibility for the OSCE exam. Successful RNs who have passed the NGN MCQ Examination will be contacted and updated from their dashboard to pay for the OSCE test."
    },
    {
      question: "Will AHPRA book travel for candidates to take OSCE?",
      answer: "No. It's the candidate who will book travel for themselves including accommodation. You are responsible for all travel arrangements to attend the OSCE examination in Adelaide."
    },
    {
      question: "Can I reschedule my OSCE?",
      answer: "Yes. Rescheduling the exam is possible. The IQNM should make a request for a reschedule at least three (3) days or 72 hours before the scheduled date of examination. Consider Australia's territorial and national holidays when deciding to reschedule. During these times, offices are automatically closed. A confirmation notice will be sent once the reschedule is approved."
    },
    {
      question: "How long will OSCE take?",
      answer: "The examination will take approximately 3-3.5 hours. It may be scheduled for morning or afternoon. OSCE has 10 individual stations, with each station having 10 minutes allocation: 2 minutes for reading and 8 minutes for interaction."
    },
    {
      question: "When will I know the results of the exam?",
      answer: "The examination result will be sent to you within six (6) weeks through registered email. Results must be calculated and ratified by the RN OSCE Examination Committee before they are released to candidates."
    },
    {
      question: "What if I fail? Can I retake the examination?",
      answer: "Candidates who fail the OSCE can apply to retake the examination as soon as they receive their result notification. First, ensure the fee for your next OSCE has been paid via the IQNM dashboard. Once the IQNM exam team has been notified of payment, a booking selection email will be sent with the next available examination schedule."
    },
    {
      question: "What should I bring to the examination?",
      answer: "You must provide photographic ID on the registration date. The only acceptable IDs are: Australian or overseas passport, or Australian driver's licence. The photographic ID should have the same name present in the IQNM portfolio submitted to AHPRA."
    },
    {
      question: "What skills will I be assessed on?",
      answer: "Each candidate will be tested on practical skills including but not limited to: Physiological observations, Vital signs, Calculating drug dosages, Subcutaneous/Intramuscular injection, Aseptic Non-Touch Technique (ANTT), In-hospital resuscitation, Safe disposal of sharps, Medication administration, Wound care, Hand hygiene, Therapeutic patient communication/consent, Infection control practices, Patient identification, Intravenous therapy administration/management, Risk management in the clinical environment, and Communication."
    },
    {
      question: "What does the Examiner assess in relation to communication?",
      answer: "Verbal, non-verbal, and written skills will be examined including interaction with the patient (who may be acting or a manikin). The examiner will evaluate: Clear explanation of care, diagnosis and medications; Ability to involve the patient in making critical decisions; Interacting with patient's relatives and other medical professionals; Ability to seek and acquire informed consent; Active listening; Managing anxious patients or household members; Giving clear discharge instructions; Being compassionate and empathetic; and Documenting information correctly."
    },
    {
      question: "Does the RN OSCE involve working with real patients?",
      answer: "Patients will be simulated patients (actors) in most stations. In other instances manikins may be used. You are expected to show empathy and interaction as you would with a real patient."
    },
    {
      question: "What are Examination cycles and Maximum Candidate Numbers?",
      answer: "Examination cycles are the timelines for each RN OSCE test. Each cycle will handle two days of examinations including a maximum of four exam sessions (2 sessions per day) and will manage up to 40 RNs."
    },
    {
      question: "How can I book my OSCE examination after Next Generation NCLEX (NGN)?",
      answer: "Upon the IQNM exams team receiving notification of payment, you must select an examination date. You are informed within five days of payment confirmation. The IQNM exams team will send a Booking selection email with information about the next available 1 or 2 exam dates. Places are limited and fill quickly on a first-come, first-served basis."
    },
    {
      question: "What are reasonable adjustments?",
      answer: "These refer to special arrangements for administering the test to offer persons with an impairment complete access to the examination. Adjustments are only made based on the means for nursing practice in Australia and must not affect OSCE integrity. Candidates wishing to request reasonable adjustments should send requests to the IQNM exam team in writing within 14 days of making payment, including appropriate documentation supporting the need for adjustment. Contact: IQNMexams@ahpra.gov.au"
    },
    {
      question: "How do I get confirmation of OSCE Exam booking?",
      answer: "You are assured of doing exams only when the IQNM exams team sends the RN OSCE Candidate Confirmation communication. This includes the location, specific date and time, and expectations for RNs. You must understand the specific requirements before getting to the exam center in Adelaide. A copy of the RN OSCE terms and RN OSCE Video and Audio consent form will be attached. The IQNM exams team will email a reminder two weeks before the test date."
    },
    {
      question: "How can I change my scheduled OSCE examination?",
      answer: "If you need to alter your test date, contact the IQNM exams team at IQNMexams@ahpra.gov.au or on 1300 419 495 at least 72 hours prior to the test. Consider Australian National and State holidays. NOTE: A message left on an answering machine does not establish providing the mandated notice for changing or cancelling your exam appointment."
    },
    {
      question: "What happens if I miss an OSCE Exam date?",
      answer: "If you fail to attend your test appointment or don't give notice to reschedule or cancel with the required notice, you will forfeit your fee. You will have to submit another OSCE fee to sit for the test later. The Exam Invigilator will note and communicate your failure to attend to the IQNM exams team."
    },
    {
      question: "Can I get refunds for OSCE exam if I fail to attend?",
      answer: "No. Refund of examination fee will not be provided if you: Fail to give an alternative date or cancel the test more than 72 hours before the confirmed examination date, or fail to appear for an exam appointment."
    },
    {
      question: "Where is the OSCE exam held?",
      answer: "The exam is held at Adelaide Health Simulation, within the University of Adelaide. AHS has two different regions where tests can be administered. The confirmation email will indicate the area where your exam will be conducted."
    },
    {
      question: "How do I register on OSCE exam day?",
      answer: "The invigilator will guide you to the registration desk when you arrive. You will need to provide your photographic ID and sign the candidate register. You must also sign the terms of agreement giving consent for video recording."
    },
    {
      question: "What are the Candidate Terms of Agreement?",
      answer: "You are obligated to sign a Terms of Agreement document to ensure data within the OSCE stations is private. This contract will be witnessed by an AHPRA Invigilator on testing day. Signing prevents you from sharing any information about the OSCE."
    },
    {
      question: "What are Video and Audio Consent forms?",
      answer: "You must sign video and audio consent documents. By using AHS facilities, the RN OSCE will include video and audio recording for education and research purposes, including: Maintaining quality of cases, examiners, and RNs; Examiner and simulation patient education; and Reporting during clinical scenarios. Video and audio recordings will be secured and comply with relevant legislation. Faces of RNs being tested will be blurred."
    },
    {
      question: "Do I need an ID card?",
      answer: "At registration you will receive your ID card. This card initiates the exam process at each phase as you progress through the examination. The information must match that in your exam communications and registration document. Raise any issues with the AHPRA Invigilator during registration."
    },
    {
      question: "What is the RN OSCE format?",
      answer: "The OSCE has ten stations, with each station running for ten minutes: 2 minutes for reading and 8 minutes for performing."
    },
    {
      question: "What are examination station setup and patient types?",
      answer: "The OSCE will have different types of patients. Some are simulated (actors) and others are manikins. In testing stations requiring demonstration of application skills, you may find both a simulated patient and equipment. You should treat simulated patients as you would real patients."
    },
    {
      question: "How many examiners are there?",
      answer: "An examiner will be in all stations. Their role is strictly observing and marking your performance. Unless directly stated in exam instructions, examiners are not to offer prompts during the test. An observer (audit examiner) may appear in a station for quality assurance or benchmarking purposes but will not mark your performance or interfere with the exam."
    },
    {
      question: "What forms are used in OSCE?",
      answer: "Examples of charts you may be required to be familiar with include: National Medication Charts, Rapid deterioration and response, Adult observation chart (MR59A), Adult Observation Charts (Acute, Long Stay, GP e-version), Paediatric Observation Chart (Acute, Long Stay), Neurological observation chart, Blood glucose record chart, Adult falls risk assessment chart, Pressure care risk Assessment, Mental health risk assessment chart, and Intravenous order chart. NAI has included all these forms in Moodle and the student handbook."
    },
    {
      question: "What is expected on the OSCE exam day in the Candidate Waiting Area?",
      answer: "All candidates will be collected from the waiting room by an Invigilator wearing a bright colored tabard vest. The invigilator will call your name in alphabetical order by surname and issue you a clipboard with note paper. You will stay in this order as you process through the exam circuit."
    },
    {
      question: "How is the OSCE exam conducted?",
      answer: "As you're led onto the circuit, the invigilator will call out station letters. Remain at your assigned starting station. When the exam starts, you'll hear a bell - scan your ID on the black box to display reading material. After 2 minutes, a second bell signals entry to the room for 8 minutes of interaction. A one-minute warning will be announced. At the final bell, leave notes in the room and move to the next station. Repeat this process for all 10 stations."
    },
    {
      question: "What happens if I'm not able to finish a station during OSCE?",
      answer: "If you cannot finish the station within allocated time, no extra time will be given. You must stop and move immediately to the next station. If you finish early, remain in the station room and wait for the final announcement. You cannot talk with anyone in the room during this time."
    },
    {
      question: "What happens after the OSCE exam is finished?",
      answer: "After completing all ten stations: Leave clipboards and ID cards on the chair of your exit station; Follow the invigilator back to the candidate waiting room; Listen to the 5-minute post-examination debrief; Be escorted from the exam center; Follow your Invigilator as you leave the building. Once outside, you can access your belongings, but remember: your confidence applies and no exam-related information should be shared."
    },
    {
      question: "What is expected from a candidate during OSCE?",
      answer: "While at the Simulation Centre and during OSCE, behave professionally and adhere to NMBA professional standards including Registered nurse standards for practice, Code of conduct for nurses, and Code of ethics for nurses. Deviation from professional standards may result in discontinuation of the OSCE. This includes: Simulated patient feeling unsafe due to behavior/actions, or examiner deeming behavior unsafe or unprofessional."
    },
    {
      question: "What happens if I am not feeling well during my OSCE examination?",
      answer: "If you're not feeling well, need to go to the bathroom, or cannot continue the OSCE, remain at the station door with your hand raised and an exam invigilator will assist you. If you're in a station room and unable to attempt the station, notify the examiner immediately and remain calm until changeover time, then exit and raise your hand for assistance."
    },
    {
      question: "What is the marking criteria for OSCE?",
      answer: "An evidence-based assessment criterion is used by trained and qualified examiners in each OSCE station. This criteria is mapped to the Registered nurse standards for practice and referenced against those listed in the recommended readings section. The examiner marks each candidate's performance during and at the conclusion of the station."
    },
    {
      question: "How do I report an incident that prevented me from attending or completing my scheduled OSCE?",
      answer: "Submit a special consideration request if exceptional circumstances beyond your control prevented attendance or completion. These include: Acute illness or injury, Loss or bereavement, Hardship or trauma, Unforeseen service call-up, Work commitments beyond control (with employer letter), Religious convictions (with religious leader letter), or Natural disaster/evacuation event. Submit the request in writing within 7 calendar days with relevant documentary evidence."
    },
    {
      question: "What happens if I pass?",
      answer: "Candidates who pass the RN OSCE will progress with their IQNM journey and may apply to AHPRA for registration with the NMBA. Your IQNM dashboard will update to identify next steps in this process."
    },
    {
      question: "What happens if I fail?",
      answer: "If you fail the RN-OSCE, you can retake the OSCE. Follow the steps identified in the result communication, including paying and registering for another exam attempt."
    },
    {
      question: "What should I do before the OSCE?",
      answer: "Familiarize yourself with the OSCE location and expectations; Get enough sleep the night before; Review all sections of the information module to understand requirements including what to bring and wear; Review information about OSCE format and conduct; Review Registered nurse standards for practice, Professional standards, Code of conduct and ethics; Review the reference list, recommended readings, and potential skills to be examined."
    },
    {
      question: "What should I remember on the day of the OSCE Exam?",
      answer: "Follow appropriate dress requirements; Bring identification document; Keep time and allow enough travel time for unexpected delays; Eat prior to arriving for your session; Notify the AHPRA Invigilator of any special considerations needed (e.g., access to medications or food during OSCE)."
    },
    {
      question: "What should I remember before and during the OSCE examination?",
      answer: "Remember you'll be assessed against entry level registered nurse standards; Utilize the two-minute reading time; Be prepared to use manikins, simulated patients and part-task trainers, treating them as real patients; Listen carefully to all instructions provided."
    },
    {
      question: "What is the difference between the NCLEX and the OSCE?",
      answer: "The OSCE assesses practical competencies, whereas the NCLEX gauges theoretical knowledge for licensing. Both are crucial steps in your nursing profession!"
    },
    {
      question: "What happens if I fail my OSCE?",
      answer: "You must wait six months before submitting an application to NMC for re-registration."
    },
    {
      question: "What visa do I need for OSCE in Australia?",
      answer: "You can apply for a tourist or guest visa to take the OSCE exam in Australia. International nurses must present a valid visa to the IQNM exam team within three months."
    },
    {
      question: "What happens if you fail OSCE 3 times?",
      answer: "Your application will be closed and you will have to reapply if you wish to register after failing your OSCE on your third try. You must wait at least six months before retaking the 10 stations and sitting for the OSCE again."
    },
    {
      question: "How many attempts for OSCE in Australia?",
      answer: "In Australia, a candidate may retake the OSCE as many times as they choose. However, candidates should carefully evaluate their prior performance before choosing to repeat, according to the Board and AHPRA."
    },
    {
      question: "What are the requirements to work as a nurse in Australia?",
      answer: "Complete the nursing registration; Pass the TOEFL, PTE, OET, or IELTS English language competency exam; Have education level equivalent to AHPRA criteria; Pass the OSCE or MCQ tests."
    },
    {
      question: "Can I use my RN licence in Australia?",
      answer: "No, you can't use your RN license in Australia without registering with the Nursing and Midwifery Board of Australia (NMBA)."
    },
    {
      question: "Can nurses get PR in Australia?",
      answer: "Yes, nurses can get permanent residency (PR) in Australia."
    }
  ]

  return (
    <>
      <Helmet>
        <title>OSCE‑FAQS</title>
        <meta name="description" content="NAI provides the best OSCE Preparation Course Australia. Our expertly crafted course material is sure to help you achieve your dream." />
        <link rel="canonical" href="https://nurseassistinternational.com/pages/osce-faqs" />
        
        {/* Open Graph */}
        <meta property="og:title" content="OSCE‑FAQS" />
        <meta property="og:description" content="Frequently asked questions about OSCE preparation for Australian nursing registration with NAI." />
        <meta property="og:url" content="https://nurseassistinternational.com/pages/osce-faqs" />
        <meta property="og:type" content="website" />
        
        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

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
              OSCE
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to your most common questions about OSCE preparation and Australian nursing registration.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Excel in Your OSCE?</h2>
            <p className="text-xl mb-6 opacity-90">Join our comprehensive OSCE preparation program and achieve your Australian nursing registration.</p>
            <a 
              href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20OSCE%20preparation%20course"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-nai-highlight px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Start Your OSCE Preparation
            </a>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default OSCEFAQPage
