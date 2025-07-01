
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Rocket, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Globe 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Blazing Fast Setup',
      description: 'Launch your product in minutes with zero friction and streamlined deployment processes.',
      color: 'text-blue-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'End-to-end encryption and access control with bank-level security standards.',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Workflows that learn and optimize over time, reducing manual work by 90%.',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: 'Built to Scale',
      description: 'Modular architecture that grows with your needs, from startup to enterprise.',
      color: 'text-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into user behavior with real-time performance metrics.',
      color: 'text-pink-500'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Worldwide content delivery network ensures fast loading from anywhere on Earth.',
      color: 'text-cyan-500'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.15, 
        duration: 0.6, 
        ease: 'easeOut' 
      }
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-foreground">
            Built for speed, scale, and{' '}
            <span className="text-gradient">success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your ideas into reality with 
            cutting-edge technology and enterprise-grade reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="group"
            >
              <Card className="h-full border-0 shadow-sm bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
