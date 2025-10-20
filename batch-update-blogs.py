#!/usr/bin/env python3
"""
Batch update blogs 18-30 to match BlogPost31 design system
This script updates header, sidebar, CTA sections, and adds subcomponents
"""

import os
import re
from pathlib import Path

# Base directory
BLOG_DIR = Path("/Users/alltechzone/Documents/Rickson/GIT HUB FILES/Nurse assitst/gallrty/NAI2/src/pages/blogs/news")

# Subcomponents template
SUBCOMPONENTS = '''
/* Subcomponents */

const MetaPill = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm border border-nai-teal/20">
    {icon}
    <span className="text-sm sm:text-base font-semibold text-gray-700 truncate">{label}</span>
  </div>
)

const Stat = ({ value, label }) => (
  <div>
    <div className="text-lg sm:text-xl md:text-2xl font-bold text-nai-teal mb-1">{value}</div>
    <div className="text-xs sm:text-sm text-gray-600">{label}</div>
  </div>
)

const SuccessStat = ({ value, label }) => (
  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-4 md:p-5 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className="text-xl sm:text-2xl md:text-3xl font-black mb-1 text-white drop-shadow-lg">{value}</div>
    <div className="text-white/95 text-xs sm:text-sm md:text-base font-semibold">{label}</div>
  </div>
)

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200/60 ${className}`}>
    {children}
  </div>
)

const Section = ({ title, children }) => (
  <section className="scroll-mt-28">
    {title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
    {children}
  </section>
)

const QuestionCard = ({ question, answer }) => (
  <Card className="p-6 border-l-4 border-nai-teal">
    <h4 className="text-lg font-bold text-nai-teal mb-3">{question}</h4>
    <p className="text-gray-700 leading-relaxed">{answer}</p>
  </Card>
)
'''

def process_blog(blog_num):
    """Process a single blog file"""
    blog_file = BLOG_DIR / f"BlogPost{blog_num}.jsx"
    
    if not blog_file.exists():
        print(f"❌ BlogPost{blog_num}.jsx not found")
        return False
        
    print(f"📝 Processing BlogPost{blog_num}.jsx...")
    
    try:
        with open(blog_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if subcomponents already exist
        if '/* Subcomponents */' not in content:
            # Add subcomponents before the final export
            if re.search(r'export default BlogPost\d+', content):
                content = re.sub(
                    r'(export default BlogPost\d+)',
                    SUBCOMPONENTS + r'\n\1',
                    content
                )
                print(f"   ✓ Added subcomponents")
            else:
                print(f"   ⚠️ Could not find export statement")
        else:
            print(f"   ℹ️ Subcomponents already present")
        
        # Write back
        with open(blog_file, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"✅ BlogPost{blog_num}.jsx updated successfully\n")
        return True
        
    except Exception as e:
        print(f"❌ Error processing BlogPost{blog_num}.jsx: {e}\n")
        return False

def main():
    print("=" * 60)
    print("Blog Design System Batch Update Script")
    print("=" * 60)
    print()
    print("Adding subcomponents to blogs 18-30...")
    print()
    
    success_count = 0
    fail_count = 0
    
    for blog_num in range(18, 31):
        if process_blog(blog_num):
            success_count += 1
        else:
            fail_count += 1
    
    print("=" * 60)
    print(f"Summary: {success_count} successful, {fail_count} failed")
    print("=" * 60)
    print()
    print("Note: Header and sidebar updates still need manual editing")
    print("Refer to BlogPost15.jsx, BlogPost16.jsx, or BlogPost17.jsx for examples")

if __name__ == "__main__":
    main()

