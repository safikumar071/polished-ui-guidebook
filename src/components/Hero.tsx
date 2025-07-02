
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const brandLogos = [
    'Slack',
    'QuickBooks', 
    'Zoom',
    'BambooHR',
    'Workday',
    'ADP'
  ];

  return (
    <section className="py-24 md:py-32 lg:py-36 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-cosmic opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent to-primary opacity-10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              Empower Your Team with{' '}
              <span className="text-gradient bg-gradient-cosmic bg-clip-text text-transparent animate-gradient-shift">
                Smarter HR
              </span>
              {' '}Management
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              From onboarding to payroll, everything you need to manage people, culture, and growth — all in one powerful dashboard that scales with your business.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-cosmic text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-xl group px-8 py-6 text-lg rounded-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="hover:bg-muted/50 transition-all duration-300 hover:scale-105 border-2 px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - HRMS Dashboard Mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&h=480&fit=crop&auto=format"
                alt="HRMS Dashboard showing employee management interface"
                className="w-full h-auto rounded-2xl shadow-xl border border-muted/20 hover:shadow-2xl transition-shadow duration-500"
                width={720}
                height={480}
              />
              {/* Floating HR metrics */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary/10 backdrop-blur-sm text-primary p-3 rounded-xl shadow-lg border border-primary/20"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-xs font-medium">Active Employees</div>
                <div className="text-lg font-bold">247</div>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-accent/10 backdrop-blur-sm text-accent p-3 rounded-xl shadow-lg border border-accent/20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-xs font-medium">Payroll Processed</div>
                <div className="text-lg font-bold">98%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* HR Tools Trust Banner */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground mb-8 font-medium">
            Integrates seamlessly with your favorite HR tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70">
            {brandLogos.map((brand, index) => (
              <motion.div
                key={brand}
                className="text-sm md:text-base font-semibold tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 grayscale hover:grayscale-0 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
