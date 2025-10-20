import React, { lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'

// Import all the specific blog post components
const BlogPost1 = lazy(() => import('./BlogPost1'))
const BlogPost2 = lazy(() => import('./BlogPost2'))
const BlogPost3 = lazy(() => import('./BlogPost3'))
const BlogPost4 = lazy(() => import('./BlogPost4'))
const BlogPost5 = lazy(() => import('./BlogPost5'))
const BlogPost6 = lazy(() => import('./BlogPost6'))
const BlogPost7 = lazy(() => import('./BlogPost7'))
const BlogPost8 = lazy(() => import('./BlogPost8'))
const BlogPost9 = lazy(() => import('./BlogPost9'))
const BlogPost10 = lazy(() => import('./BlogPost10'))
const BlogPost11 = lazy(() => import('./BlogPost11'))
const BlogPost12 = lazy(() => import('./BlogPost12'))
const BlogPost13 = lazy(() => import('./BlogPost13'))
const BlogPost14 = lazy(() => import('./BlogPost14'))
const BlogPost15 = lazy(() => import('./BlogPost15'))
const BlogPost16 = lazy(() => import('./BlogPost16'))
const BlogPost17 = lazy(() => import('./BlogPost17'))
const BlogPost18 = lazy(() => import('./BlogPost18'))
const BlogPost19 = lazy(() => import('./BlogPost19'))
const BlogPost20 = lazy(() => import('./BlogPost20'))
const BlogPost21 = lazy(() => import('./BlogPost21'))
const BlogPost22 = lazy(() => import('./BlogPost22'))
const BlogPost23 = lazy(() => import('./BlogPost23'))
const BlogPost24 = lazy(() => import('./BlogPost24'))
const BlogPost25 = lazy(() => import('./BlogPost25'))
const BlogPost26 = lazy(() => import('./BlogPost26'))
const BlogPost27 = lazy(() => import('./BlogPost27'))
const BlogPost28 = lazy(() => import('./BlogPost28'))
const BlogPost29 = lazy(() => import('./BlogPost29'))
const BlogPost30 = lazy(() => import('./BlogPost30'))
const BlogPost31 = lazy(() => import('./BlogPost31'))

const BlogPost = () => {
  const { slug } = useParams()
  
  // Map slugs to components
  const blogComponents = {
    'how-to-prepare-for-your-first-nursing-job-in-australia': BlogPost31,
    'aurn-pathway-explained-step-by-step-guide-for-international-nurses-in-australia': BlogPost1,
    'essential-nursing-knowledge-and-competencies-for-international-nurses-seeking-registration-in-australia-preparing-for-nclex-and-osce-success': BlogPost2,
    'top-5-reasons-to-choose-australia-for-your-rn-journey': BlogPost3,
    'becoming-an-rn-in-australia-your-roadmap-to-a-rewarding-career-with-nai': BlogPost4,
    'top-nclex-mistakes-and-how-to-avoid-them-a-guide-to-success': BlogPost5,
    'osce-success-excelling-in-patient-assessment-like-a-pro': BlogPost6,
    'nclex-mastery-breaking-down-infection-control-isolation-precautions': BlogPost7,
    'excelling-in-osce-a-guide-to-clinical-decision-making-under-pressure': BlogPost8,
    'acing-nclex-prioritization-and-delegation-questions-a-nurses-guide': BlogPost9,
    'the-art-of-answering-nclex-psychosocial-integrity-questions': BlogPost10,
    'australia-a-land-of-growing-opportunities-for-nurses': BlogPost11,
    'the-importance-of-reflective-practice-in-osce-success': BlogPost12,
    'nai-pioneering-success-in-osce-training-and-inspiring-a-generation-of-nurses': BlogPost13,
    'breaking-down-the-select-all-that-apply-sata-questions-in-nclex': BlogPost14,
    'navigating-the-nursing-registration-landscape-in-australia-the-outcome-based-assessment-pathway': BlogPost15,
    'cracking-the-medication-administration-code-safe-practices-for-the-australian-osce': BlogPost16,
    'managing-anxiety-during-osce-exams': BlogPost17,
    'mastering-communication-in-high-pressure-scenarios': BlogPost18,
    'decoding-the-nclex-cat-exam': BlogPost19,
    'mastering-pharmacology-on-the-nclex': BlogPost20,
    'silent-station-a-hidden-challenge-in-osce': BlogPost21,
    'silent-station-osce-challenge-guide': BlogPost21,
    // Fixed mappings to match newsArticles.json slugs
    'nclex-international-gateway-nursing-careers': BlogPost22,
    'osce-soft-skills-mastery-guide': BlogPost23,
    'first-aid-importance-australian-nursing': BlogPost24,
    'nai-osce-training-excellence': BlogPost25,
    'nursing-career-diversity-beyond-bedside': BlogPost26,
    'crucial-elements-for-mastering-online-osce-review': BlogPost27,
    'nclex-test-taking-strategies-for-success': BlogPost28,
    'nclex-question-analysis-and-comprehension-techniques': BlogPost29,
    'nclex-ngn-preparation-balancing-school-and-exam-success': BlogPost30,
    // Keep legacy mappings for backward compatibility
    'nclex-your-gateway-to-a-successful-nursing-career-abroad': BlogPost22,
    'osce-mastery-the-power-of-soft-skills-in-a-clinical-exam': BlogPost23,
    'why-is-learning-first-aid-important': BlogPost24,
    'navigating-osce-training-in-australia-with-nurse-assist-international-your-pathway-to-becoming-a-registered-nurse': BlogPost25,
    'learn-about-the-varied-field-of-nursing-careers': BlogPost26,
    'nclex-test-taking-strategies': BlogPost28,
    'crucial-techniques-to-analyse-and-comprehend-nclex-questions': BlogPost29,
    'strategies-on-how-to-prepare-for-the-nclex-ngn': BlogPost30,
  }
  
  const BlogComponent = blogComponents[slug]
  
  if (!BlogComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <a href="/blogs/news" className="text-blue-600 hover:text-blue-800 underline">
            Back to News
          </a>
        </div>
      </div>
    )
  }
  
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    }>
      <BlogComponent />
    </Suspense>
  )
}

export default BlogPost