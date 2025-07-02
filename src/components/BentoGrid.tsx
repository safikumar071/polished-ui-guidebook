
import { motion } from 'framer-motion';
import { ArrowDown, Code, Video, Book } from 'lucide-react';

const BentoGrid = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-foreground">
            Everything in one{' '}
            <span className="text-gradient">powerful platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the tools and features that make building, scaling, and maintaining 
            your applications effortless and enjoyable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[200px]">
          {/* AI Workflow Builder - Large Card */}
          <motion.div
            className="md:col-span-3 bg-primary/5 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-primary/10 group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-primary/10 text-primary p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Code className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">AI Workflow Builder</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Drag-and-drop interface to build automated flows with logic blocks. 
              Create complex workflows without writing a single line of code.
            </p>
          </motion.div>

          {/* Use Case Library - Large Card */}
          <motion.div
            className="md:col-span-3 bg-muted/50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-muted group flex flex-col justify-between"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-accent/20 text-accent p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Book className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Use Case Library</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Explore pre-built templates and real-world applications from our community.
              </p>
            </div>
            <a 
              href="#" 
              className="text-sm text-primary font-medium hover:underline group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-2"
            >
              Explore library <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
            </a>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            className="md:col-span-2 bg-accent/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-accent/20 group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <div className="flex flex-col justify-between h-full">
              <blockquote className="text-sm italic text-foreground leading-relaxed">
                "I built a full onboarding system in 10 minutes. This platform is absolutely unreal."
              </blockquote>
              <div className="mt-4 pt-4 border-t border-accent/20">
                <p className="text-xs text-muted-foreground font-medium">
                  — Alex Chen, Founder @ Codex
                </p>
              </div>
            </div>
          </motion.div>

          {/* Demo Video Card */}
          <motion.div
            className="md:col-span-4 bg-gradient-to-tr from-primary/10 via-accent/5 to-background p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-primary/10 group flex flex-col justify-between relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/20 text-primary p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Video className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">See it in action</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Watch how teams are building powerful applications in minutes, not hours.
              </p>
            </div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            
            <button className="relative z-10 text-sm font-medium text-primary hover:underline group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-2">
              Watch Demo <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
            </button>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="md:col-span-2 bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-green-500/20 group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime SLA</p>
            </div>
          </motion.div>

          {/* API Card */}
          <motion.div
            className="md:col-span-4 bg-muted/30 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-muted group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Developer-First API</h3>
              <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                REST & GraphQL
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Comprehensive API with SDKs for Python, JavaScript, Go, and more. Built for scale with rate limiting and authentication.
            </p>
            <div className="bg-background/50 rounded-lg p-3 border border-muted/50">
              <code className="text-xs text-muted-foreground font-mono">
                curl -X POST https://api.cosmic.dev/v1/workflows
              </code>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
