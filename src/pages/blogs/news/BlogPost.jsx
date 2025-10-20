import React from 'react'
import { useParams } from 'react-router-dom'

// Direct imports instead of lazy loading (this file is already lazy-loaded in App.jsx)
import BlogPost1 from './BlogPost1'
import BlogPost2 from './BlogPost2'
import BlogPost3 from './BlogPost3'
import BlogPost4 from './BlogPost4'
import BlogPost5 from './BlogPost5'
import BlogPost6 from './BlogPost6'
import BlogPost7 from './BlogPost7'
import BlogPost8 from './BlogPost8'
import BlogPost9 from './BlogPost9'
import BlogPost10 from './BlogPost10'
import BlogPost11 from './BlogPost11'
import BlogPost12 from './BlogPost12'
import BlogPost13 from './BlogPost13'
import BlogPost14 from './BlogPost14'
import BlogPost15 from './BlogPost15'
import BlogPost16 from './BlogPost16'
import BlogPost17 from './BlogPost17'
import BlogPost18 from './BlogPost18'
import BlogPost19 from './BlogPost19'
import BlogPost20 from './BlogPost20'
import BlogPost21 from './BlogPost21'
import BlogPost22 from './BlogPost22'
import BlogPost23 from './BlogPost23'
import BlogPost24 from './BlogPost24'
import BlogPost25 from './BlogPost25'
import BlogPost26 from './BlogPost26'
import BlogPost27 from './BlogPost27'
import BlogPost28 from './BlogPost28'
import BlogPost29 from './BlogPost29'
import BlogPost30 from './BlogPost30'
import BlogPost31 from './BlogPost31'

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
  
  // No Suspense needed since we're using direct imports
  return <BlogComponent />
}

export default BlogPost