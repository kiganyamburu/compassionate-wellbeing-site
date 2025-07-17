import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Home, Brain, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your specific needs and goals",
      price: "$150 per session",
      duration: "50 minutes",
      features: [
        "Personalized treatment plans",
        "Evidence-based approaches",
        "Flexible scheduling",
        "Confidential environment"
      ]
    },
    {
      icon: Users,
      title: "Couples Therapy",
      description: "Strengthen your relationship through guided communication",
      price: "$200 per session",
      duration: "60 minutes",
      features: [
        "Improved communication",
        "Conflict resolution",
        "Intimacy building",
        "Relationship skills"
      ]
    },
    {
      icon: Home,
      title: "Family Counseling",
      description: "Build stronger family bonds and resolve conflicts",
      price: "$180 per session",
      duration: "60 minutes",
      features: [
        "Family dynamics improvement",
        "Parent-child relationships",
        "Sibling conflict resolution",
        "Behavioral management"
      ]
    },
    {
      icon: Brain,
      title: "Cognitive Behavioral Therapy",
      description: "Change negative thought patterns and behaviors",
      price: "$150 per session",
      duration: "50 minutes",
      features: [
        "Thought restructuring",
        "Behavioral modification",
        "Coping strategies",
        "Homework assignments"
      ]
    },
    {
      icon: Shield,
      title: "Trauma Therapy",
      description: "Specialized treatment for trauma and PTSD",
      price: "$160 per session",
      duration: "50 minutes",
      features: [
        "EMDR therapy",
        "Trauma-informed care",
        "Safety planning",
        "Grounding techniques"
      ]
    },
    {
      icon: Clock,
      title: "Crisis Intervention",
      description: "Immediate support during mental health crises",
      price: "$200 per session",
      duration: "Variable",
      features: [
        "24/7 availability",
        "Emergency protocols",
        "Safety assessment",
        "Crisis stabilization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
              Comprehensive mental health services designed to support your journey 
              toward healing, growth, and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <service.icon className="w-12 h-12 text-healing-blue mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-medium text-healing-blue">{service.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-healing-green" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="healing" className="w-full mt-4" asChild>
                    <Link to="/contact">Book Session</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Therapeutic Approaches
            </h2>
            <p className="text-lg text-muted-foreground">
              Evidence-based methods tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cognitive Behavioral Therapy (CBT)",
                description: "Focuses on identifying and changing negative thought patterns and behaviors."
              },
              {
                title: "Dialectical Behavior Therapy (DBT)",
                description: "Teaches skills for managing emotions and improving relationships."
              },
              {
                title: "Eye Movement Desensitization (EMDR)",
                description: "Effective treatment for trauma and PTSD using bilateral stimulation."
              },
              {
                title: "Mindfulness-Based Therapy",
                description: "Incorporates meditation and mindfulness practices for present-moment awareness."
              },
              {
                title: "Solution-Focused Brief Therapy",
                description: "Goal-oriented approach focusing on solutions rather than problems."
              },
              {
                title: "Acceptance and Commitment Therapy",
                description: "Helps develop psychological flexibility and values-based living."
              }
            ].map((approach, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {approach.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Insurance & Payment Options
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-healing-green mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Insurance Accepted</h3>
                    <p className="text-muted-foreground text-sm">
                      We accept most major insurance plans including Blue Cross, Aetna, 
                      Cigna, and United Healthcare.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-healing-green mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Flexible Payment</h3>
                    <p className="text-muted-foreground text-sm">
                      Payment plans available. We accept cash, credit cards, and HSA/FSA accounts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-healing-green mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Sliding Scale</h3>
                    <p className="text-muted-foreground text-sm">
                      Limited sliding scale spots available for those experiencing financial hardship.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What to Expect
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-healing-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Initial Consultation</h3>
                    <p className="text-muted-foreground text-sm">
                      90-minute initial session to assess your needs and develop a treatment plan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-healing-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Regular Sessions</h3>
                    <p className="text-muted-foreground text-sm">
                      Weekly or bi-weekly sessions tailored to your progress and needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Progress Review</h3>
                    <p className="text-muted-foreground text-sm">
                      Regular check-ins to evaluate progress and adjust treatment as needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-healing-blue to-healing-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Choose the service that best fits your needs and take the first step toward better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="calm" size="lg" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/about">Learn More <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;