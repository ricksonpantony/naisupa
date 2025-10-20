// Hero Gallery Images Data
// You can easily add, remove, or modify images and descriptions here

import { getGalleryImageUrl } from '../utils/imageStorage'

export const heroTestimonials = [
  { 
    name: "Aayushma Koirala", 
    course: "NCLEX-RN", 
    country: "Nepal", 
    img: getGalleryImageUrl("NAI GALLERY/Students/Aayushma Koirala.webp"), 
    quote: "NAI's program gave me the confidence to pass on my first attempt!" 
  },
  { 
    name: "Abhay Sharma", 
    course: "OSCE", 
    country: "India", 
    img: getGalleryImageUrl("NAI GALLERY/Students/Abhay Sharma.webp"), 
    quote: "The hands-on training was exactly what I needed!" 
  },
  { 
    name: "Airi Sano", 
    course: "NCLEX-NGN", 
    country: "Japan", 
    img: getGalleryImageUrl("NAI GALLERY/Students/Airi Sano.webp"), 
    quote: "From doubt to success - NAI made it possible!" 
  },
  { 
    name: "Akindele Titilayo", 
    course: "OSCE", 
    country: "Nigeria", 
    img: getGalleryImageUrl("NAI GALLERY/Students/Akindele Titilayo.webp"), 
    quote: "Professional training that delivered results!" 
  },
  { 
    name: "Aneesha Gottamukkala", 
    course: "NCLEX", 
    country: "India", 
    img: getGalleryImageUrl("NAI GALLERY/Students/Aneesha Gottamukkala.webp"), 
    quote: "The best investment in my nursing career!" 
  }
];

export const heroGridStudents = [
  { name: "Aayushma", course: "NCLEX", img: getGalleryImageUrl("NAI GALLERY/Students/Aayushma Koirala.webp") },
  { name: "Abhay", course: "OSCE", img: getGalleryImageUrl("NAI GALLERY/Students/Abhay Sharma.webp") },
  { name: "Airi", course: "OBA", img: getGalleryImageUrl("NAI GALLERY/Students/Airi Sano.webp") },
  { name: "Akindele", course: "NCLEX", img: getGalleryImageUrl("NAI GALLERY/Students/Akindele Titilayo.webp") },
  { name: "Aneesha", course: "OSCE", img: getGalleryImageUrl("NAI GALLERY/Students/Aneesha Gottamukkala.webp") },
  { name: "Bianca", course: "NCLEX", img: getGalleryImageUrl("NAI GALLERY/Students/Bianca Asuncion.webp") },
  { name: "Bunu", course: "OSCE", img: getGalleryImageUrl("NAI GALLERY/Students/Bunu Maharjan.webp") },
  { name: "Yuki", course: "OBA", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational001.jpg") },
  { name: "Anna", course: "NCLEX", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational002.jpg") },
  { name: "Mohammed", course: "OSCE", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational003.jpg") },
  { name: "Emma", course: "NCLEX", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational004.jpg") },
  { name: "David", course: "OSCE", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational005.jpg") },
  { name: "Sarah", course: "NCLEX", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational006.jpg") },
  { name: "Michael", course: "OSCE", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational058.jpg") },
  { name: "Priya", course: "OBA", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational059.jpg") },
  { name: "John", course: "NCLEX", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational064.jpg") },
  { name: "Fatima", course: "OSCE", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational065.jpg") },
  { name: "Robert", course: "NCLEX", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational067.jpg") },
  { name: "Aisha", course: "OSCE", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational070.jpg") },
  { name: "Thomas", course: "OBA", img: getGalleryImageUrl("NAI GALLERY/nurseassistinternational071.jpg") }
];

// Instructions for adding new images:
// 1. For testimonials: Add new objects to heroTestimonials array
// 2. For grid students: Add new objects to heroGridStudents array
// 3. Each object should have: name, course, img (image URL), and quote (for testimonials only)
// 4. Save the file and the changes will appear automatically on the website

// Example of adding a new testimonial:
// { 
//   name: "Your Name", 
//   course: "NCLEX-RN", 
//   country: "Your Country", 
//   img: "https://your-image-url.com/image.jpg", 
//   quote: "Your testimonial quote here!" 
// }

// Example of adding a new grid student:
// { name: "Student Name", course: "NCLEX", img: "https://your-image-url.com/image.jpg" }

