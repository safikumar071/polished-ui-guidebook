
import { motion } from 'framer-motion';
import { ArrowDown, Code, Video, Book, Clock, Users, FileText } from 'lucide-react';

const BentoGrid = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.6, 
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
            Everything you need for{' '}
            <span className="text-gradient">modern HR management</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline your HR processes with powerful tools for attendance tracking, 
            payroll management, and employee engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[200px]">
          {/* Attendance Tracking - Large Card */}
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
                <Clock className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Smart Attendance Tracking</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Automated time tracking with geofencing, biometric integration, and real-time monitoring. 
              Never miss attendance irregularities again.
            </p>
          </motion.div>

          {/* Payroll Management - Large Card */}
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
                  <FileText className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Automated Payroll</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Process payroll in minutes with automated calculations, tax compliance, and instant payslip generation.
              </p>
            </div>
            <a 
              href="#" 
              className="text-sm text-primary font-medium hover:underline group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-2"
            >
              Learn more <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
            </a>
          </motion.div>

          {/* HR Manager Testimonial */}
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
                "Cut our payroll processing time by 80%. This platform transformed our HR operations completely."
              </blockquote>
              <div className="mt-4 pt-4 border-t border-accent/20">
                <p className="text-xs text-muted-foreground font-medium">
                  — Ayesha Khan, HR Manager @ DevSync
                </p>
              </div>
            </div>
          </motion.div>

          {/* Employee Self-Service */}
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
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Employee Self-Service Portal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empower your employees with self-service access to payslips, leave requests, and profile updates.
              </p>
            </div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            
            <button className="relative z-10 text-sm font-medium text-primary hover:underline group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-2">
              View Demo <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
            </button>
          </motion.div>

          {/* Compliance Stats */}
          <motion.div
            className="md:col-span-2 bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-green-500/20 group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Tax Compliance</p>
            </div>
          </motion.div>

          {/* Integration Card */}
          <motion.div
            className="md:col-span-4 bg-muted/30 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-muted group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Seamless Integrations</h3>
              <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                50+ Apps
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Connect with Slack, Zoom, QuickBooks, and more. Built-in API for custom integrations and third-party tools.
            </p>
            <div className="flex gap-2 text-xs text-muted-foreground">
              <span className="bg-background/50 px-2 py-1 rounded border">Slack</span>
              <span className="bg-background/50 px-2 py-1 rounded border">QuickBooks</span>
              <span className="bg-background/50 px-2 py-1 rounded border">Zoom</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
