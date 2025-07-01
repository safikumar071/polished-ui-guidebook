
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-cosmic opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent to-primary opacity-10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in border border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Introducing the future of development
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in-up">
            Build the{' '}
            <span className="text-gradient bg-gradient-cosmic bg-clip-text text-transparent animate-gradient-shift">
              Future
            </span>
            {' '}of Digital Experiences
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
            Empower your team with cutting-edge tools that transform ideas into reality. 
            Build faster, scale smarter, and deliver exceptional experiences that users love.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-300">
            <Button 
              size="lg" 
              className="bg-gradient-cosmic text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-xl group px-8 py-6 text-lg"
            >
              Start Building Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-muted/50 transition-all duration-300 hover:scale-105 border-2 px-8 py-6 text-lg"
            >
              <Zap className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="animate-slide-in-right delay-500">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by innovative teams worldwide
            </p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              {['Acme Corp', 'TechFlow', 'InnovateLab', 'FutureWorks'].map((company) => (
                <div key={company} className="text-sm font-semibold tracking-wider uppercase">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
