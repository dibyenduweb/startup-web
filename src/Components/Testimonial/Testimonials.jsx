

import testimonialsData from './../../../public/testimonials.json';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Happy Clients & Feedbacks</h2>
        <p className="text-teal-500 uppercase mt-2">Testimonials</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            title={testimonial.title}
            review={testimonial.review}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
