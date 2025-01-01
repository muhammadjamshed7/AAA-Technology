import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import FeaturedWork from '../components/FeaturedWork';
import Testimonials from '../components/Testimonials';
// import BlogPreview from '../components/BlogPreview';
// import ContactCTA from '../components/ContactCTA';
import ContactForm from '../components/ContactCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <FeaturedWork />
      <Testimonials />
      {/* <BlogPreview /> */}
      <ContactForm />
    </main>
  );
}