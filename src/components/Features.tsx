
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Clock, 
  Shield, 
  FileText, 
  Users, 
  BarChart3, 
  UserCheck 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: 'Smart Attendance Tracking',
      description: 'Automated time tracking with geofencing, biometric integration, and real-time monitoring.',
      color: 'text-blue-500'
    },
    {
      icon: FileText,
      title: 'Automated Payroll Processing',
      description: 'Process payroll in minutes with automated calculations, tax compliance, and instant payslips.',
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: 'Employee Self-Service',
      description: 'Empower employees with self-service access to payslips, leave requests, and profile updates.',
      color: 'text-yellow-500'
    },
    {
      icon: UserCheck,
      title: 'Seamless Onboarding',
      description: 'Streamlined onboarding workflows with document management and task automation.',
      color: 'text-purple-500'
    },
    {
      icon: BarChart3,
      title: 'HR Analytics & Reports',
      description: 'Deep insights into workforce metrics, attendance patterns, and performance analytics.',
      color: 'text-pink-500'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Stay compliant with labor laws, tax regulations, and data protection requirements.',
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
        ease: "easeOut"
      }
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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
            Complete HR suite for{' '}
            <span className="text-gradient">modern teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to streamline HR operations, from attendance tracking 
            to payroll processing, all in one integrated platform.
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
