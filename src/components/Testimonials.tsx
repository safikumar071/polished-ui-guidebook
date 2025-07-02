import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Cut our payroll processing time by 80%. This platform transformed our HR operations completely.",
      name: "Ayesha Khan",
      role: "HR Manager at DevSync Technologies",
      avatar: "/placeholder.svg",
      rating: 5
    },
    {
      quote: "The attendance tracking and leave management features are incredibly intuitive. Our employees love it.", 
      name: "Krish Patel",
      role: "Operations Lead at Hexagon Solutions",
      avatar: "/placeholder.svg",
      rating: 5
    },
    {
      quote: "Finally, an HRMS that actually delivers on its promises. Clean interface, powerful features.",
      name: "Priya Sharma",
      role: "People Operations at TechFlow Inc",
      avatar: "/placeholder.svg", 
      rating: 5
    },
    {
      quote: "The compliance features give us peace of mind. Perfect for our growing startup needs.",
      name: "Rohit Mehta",
      role: "Co-founder at StartupLab",
      avatar: "/placeholder.svg",
      rating: 5
    },
    {
      quote: "Best HR investment we made this year. The ROI was immediate with payroll automation.",
      name: "Neha Gupta",
      role: "Founder at GrowthHack Solutions",
      avatar: "/placeholder.svg",
      rating: 5
    },
    {
      quote: "Outstanding customer support helped us integrate seamlessly with our existing tools.",
      name: "Amit Singh",
      role: "HR Director at Enterprise Corp",
      avatar: "/placeholder.svg",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'
        }`}
      />
    ));
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
            Trusted by HR teams and{' '}
            <span className="text-gradient">growing companies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of organizations who have streamlined their HR processes 
            and improved employee satisfaction with our platform.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-background p-6 md:p-8 rounded-2xl border border-muted shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 italic text-sm leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <Avatar className="w-12 h-12 border-2 border-muted">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
