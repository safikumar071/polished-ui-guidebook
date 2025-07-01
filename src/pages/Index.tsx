
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeaturesSplit from '@/components/FeaturesSplit';
import ServicesGrid from '@/components/ServicesGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <FeaturesSplit />
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
