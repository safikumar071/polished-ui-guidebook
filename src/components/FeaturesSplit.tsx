
import { motion } from 'framer-motion';
import { Check, Shield, Zap, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturesSplit = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise-grade Security',
      description: 'Bank-level security with end-to-end encryption and multi-factor authentication.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with global CDN and edge computing capabilities.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights and detailed reporting to track your success metrics.',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    })
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* First Split - Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=720&h=480&fit=crop&auto=format"
                alt="Dashboard analytics showing comprehensive data visualization"
                className="w-full h-auto rounded-2xl shadow-xl border border-muted/20"
                width={720}
                height={480}
              />
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/10 rounded-full backdrop-blur-sm"></div>
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium uppercase text-primary mb-3 tracking-wide">
              Powerful Analytics
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Data-driven insights that{' '}
              <span className="text-gradient">drive growth</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Transform raw data into actionable insights with our comprehensive analytics platform. 
              Make informed decisions backed by real-time metrics and advanced reporting.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature.title}
                  className="flex items-start gap-4"
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="bg-primary/10 text-primary p-1.5 rounded-lg mt-0.5">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <Button size="lg" className="hover:scale-105 transition-transform">
              Explore Analytics
            </Button>
          </motion.div>
        </div>

        {/* Second Split - Text Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium uppercase text-primary mb-3 tracking-wide">
              Seamless Integration
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Connect everything in{' '}
              <span className="text-gradient">one platform</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Integrate with your existing tools and workflows. Our platform supports hundreds of 
              integrations and provides flexible APIs for custom connections.
            </p>

            <ul className="space-y-3 mb-8">
              <motion.li
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Check className="text-primary w-5 h-5" />
                <span className="text-foreground">500+ pre-built integrations</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Check className="text-primary w-5 h-5" />
                <span className="text-foreground">REST & GraphQL API access</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Check className="text-primary w-5 h-5" />
                <span className="text-foreground">Real-time webhook support</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Check className="text-primary w-5 h-5" />
                <span className="text-foreground">Custom workflow automation</span>
              </motion.li>
            </ul>

            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
              View Integrations
            </Button>
          </motion.div>

          <motion.div 
            className="relative md:order-last"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=720&h=480&fit=crop&auto=format"
                alt="Code integration and API connections visualization"
                className="w-full h-auto rounded-2xl shadow-xl border border-muted/20"
                width={720}
                height={480}
              />
              {/* Floating accent elements */}
              <div className="absolute -top-6 -left-4 w-10 h-10 bg-accent/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -right-6 w-6 h-6 bg-primary/30 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSplit;
