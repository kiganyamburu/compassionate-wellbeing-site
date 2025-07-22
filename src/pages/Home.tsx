import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users, Star, Quote } from "lucide-react";
import heroImage from "@/assets/hero-therapy-office.jpg";
import meditationImage from "@/assets/meditation-garden.jpg";
import therapistImage from "@/assets/therapist-portrait.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-healing-blue/80 to-healing-green/60 z-10" />
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Your Path to <br />
            <span className="text-calm-blue">Healing & Growth</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-in-left">
            Professional therapy services to support your mental health journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button variant="calm" size="lg" asChild>
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive mental health services tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Individual Therapy",
                description: "One-on-one sessions focused on your personal growth and healing journey.",
                color: "text-healing-blue"
              },
              {
                icon: Users,
                title: "Couples Therapy",
                description: "Strengthen your relationship through guided communication and understanding.",
                color: "text-healing-green"
              },
              {
                icon: Shield,
                title: "Family Counseling",
                description: "Build stronger family bonds and resolve conflicts in a supportive environment.",
                color: "text-primary"
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <service.icon className={`w-12 h-12 ${service.color} mx-auto mb-4`} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="professional" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Meet Anne Mburu
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 9 years of experience in mental health counseling, Anne 
                is dedicated to helping individuals and families find their path to healing 
                and personal growth.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-healing-blue rounded-full" />
                  <span className="text-foreground">Licensed Counseling Psychologist</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-healing-green rounded-full" />
                  <span className="text-foreground">Specializes in CBT and Mindfulness</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">500+ Successful Treatment Cases</span>
                </li>
              </ul>
              <Button variant="healing" size="lg" asChild>
                <Link to="/about">Learn More About Anne</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={therapistImage}
                alt="Dr. Sarah Johnson"
                className="rounded-lg shadow-hover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Real stories from people who found healing and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emily R.",
                text: "Dr. Johnson helped me work through my anxiety in ways I never thought possible. Her compassionate approach made all the difference.",
                rating: 5
              },
              {
                name: "Michael T.",
                text: "The couples therapy sessions saved our marriage. We learned to communicate better and understand each other's perspectives.",
                rating: 5
              },
              {
                name: "Lisa M.",
                text: "Finding this practice was a turning point in my life. The supportive environment and professional care exceeded my expectations.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-healing-blue mb-4" />
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{testimonial.name}</span>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-healing-blue" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="healing" size="lg" asChild>
              <Link to="/testimonials">
                Read More Testimonials <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-healing-blue to-healing-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Take the first step towards better mental health. Book a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="calm" size="lg" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/location">Find Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;