
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const ServicesGrid = () => {
  const services = [
    {
      icon: "🧠",
      title: "AI Content Generation",
      description: "Generate high-quality content with powerful AI models and customizable templates.",
      pro: true
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Get instant insights into user behavior, performance metrics, and growth trends.",
      pro: false
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      description: "Built-in two-factor authentication, encryption, and compliance management.",
      pro: false
    },
    {
      icon: "⚙️",
      title: "Custom Workflows",
      description: "Create automated workflows and triggers that adapt to your business needs.",
      pro: true
    },
    {
      icon: "🌐",
      title: "Global CDN",
      description: "Lightning-fast content delivery worldwide with 99.9% uptime guarantee.",
      pro: false
    },
    {
      icon: "🔗",
      title: "API Integration",
      description: "Connect with 500+ third-party services through our robust API ecosystem.",
      pro: true
    },
    {
      icon: "📱",
      title: "Mobile Optimization",
      description: "Responsive design and mobile-first approach for all devices and platforms.",
      pro: false
    },
    {
      icon: "💎",
      title: "White-label Solutions",
      description: "Fully customizable branding and white-label options for enterprise clients.",
      pro: true
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.4, 
        ease: "easeOut" 
      }
    })
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-muted/10">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-foreground">
            Everything you need to{' '}
            <span className="text-gradient">build and grow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and services designed to accelerate your success 
            from day one to enterprise scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="group"
            >
              <div className="bg-background rounded-xl p-6 border border-muted/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  {service.pro && (
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                      PRO
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
