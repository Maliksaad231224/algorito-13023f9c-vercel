
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import UseCases from '@/components/UseCases';
import Demos from '@/components/Demos';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <UseCases />
        <Demos />
        <Testimonials />
        <BookingForm />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
