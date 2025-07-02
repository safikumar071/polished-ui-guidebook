import { motion } from 'framer-motion';
import { Check, Shield, Zap, Users, BarChart3, Globe, Rocket } from 'lucide-react';

const FeaturesSplit = () => {
  const features = [
    {
      eyebrow: "Streamlined & Secure",
      title: "Everything you need, without the bloat",
      description: "Our interface is designed to maximize usability while keeping things clean. Powered by robust APIs and secure by default.",
      image: "/placeholder.svg",
      points: [
        "Secure login & session management",
        "REST & GraphQL API access", 
        "Built-in analytics dashboard"
      ],
      reverse: false
    },
    {
      eyebrow: "AI-Powered Workflows",
      title: "Automation that learns and adapts",
      description: "Create intelligent workflows that optimize themselves over time, reducing manual work and increasing efficiency across your entire organization.",
      image: "/placeholder.svg", 
      points: [
        "Smart task automation",
        "Machine learning optimization",
        "Custom trigger conditions"
      ],
      reverse: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: i * 0.15, 
        duration: 0.5, 
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 last:mb-0 ${
              feature.reverse ? 'md:grid-flow-col-dense' : ''
            }`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.div 
              className={`relative ${feature.reverse ? 'md:col-start-2' : ''}`}
              variants={imageVariants}
            >
              <div className="relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full rounded-2xl border border-muted shadow-xl bg-muted/50"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-2xl" />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className={feature.reverse ? 'md:col-start-1 md:row-start-1' : ''}
              variants={textVariants}
            >
              <p className="text-sm font-medium uppercase text-primary mb-3 tracking-wide">
                {feature.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                {feature.title}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {feature.description}
              </p>

              <ul className="space-y-4">
                {feature.points.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4"
                    variants={listItemVariants}
                    custom={i}
                  >
                    <Check className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSplit;
