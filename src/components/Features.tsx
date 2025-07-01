
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Rocket, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Globe 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Lightning Fast',
      description: 'Deploy applications in seconds with our optimized infrastructure and cutting-edge technology stack.',
      color: 'text-blue-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      title: 'Instant Scaling',
      description: 'Automatically scales to handle millions of users without any configuration or downtime.',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in collaboration tools that keep your team in sync and boost productivity.',
      color: 'text-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into user behavior, performance metrics, and business intelligence.',
      color: 'text-pink-500'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Worldwide content delivery network ensures fast loading times from anywhere on Earth.',
      color: 'text-cyan-500'
    }
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Everything you need to{' '}
            <span className="text-gradient">succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            Our comprehensive platform provides all the tools and features you need 
            to build, deploy, and scale your applications with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-background/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
