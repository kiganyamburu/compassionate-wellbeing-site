import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Quote, Heart, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Client, 40",
      service: "Individual Therapy",
      text: "Grief was swallowing me whole. I didn’t think therapy could help, but Anne made space for my tears and taught me how to carry the love without drowning in the pain.",
      rating: 5,
      location: "Mombasa, Kenya"
    },
    {
      name: "Couple, 37 & 39",
      service: "Couples Therapy",
      text: "We came to Anne on the verge of divorce. She didn’t take sides  she held space for both of us. We learned how to fight fair, communicate, and reconnect.",
      rating: 5,
      location: "Nairobi, Kenya"
    },
    {
      name: "Client, 15",
      service: "Family Counseling",
      text: "Finding this practice was a turning point for our family. The supportive environment and professional care exceeded our expectations. Our teenage daughter finally started opening up and our family dynamics improved dramatically.",
      rating: 5,
      location: "Nairobi, Kenya"
    },
    {
      name: "Client,24",
      service: "Trauma Therapy",
      text: "I struggled with anxiety and constant overthinking. Anne taught me grounding tools and how to speak to myself with kindness. I finally feel like I can breathe again.",
      rating: 5,
      location: "Nairobi, Kenya"
    },
    {
      name: "Client, 30",
      service: "CBT Therapy",
      text: "The cognitive behavioral therapy approach was exactly what I needed. Anne taught me practical tools to manage my depression and negative thinking patterns. I feel empowered and hopeful about the future.",
      rating: 5,
      location: "Nairobi, Kenya"
    },
    {
      name: "Client, 45",
      service: "Individual Therapy",
      text: "Betrayal from the person I trusted most  that is my sister and my husband was the worst I had ever experienced.Anne helped me to overcome the pain and the brokenness I had with a lot of warmth and compassion.She gave me a hand in my journey of healing without any form judgement making me feel at home and free.",
      rating: 5,
      location: "Nairobi, Kenya"
    },
    {
      name: "Client, 32",
      service: "Couples Therapy",
      text: "My teenage daughter was withdrawn and struggling emotionally. Anne connected with her so well and helped her open up. We’ve seen a huge change at home.",
      rating: 5,
      location: "Nairobi, Kenya"
    },
    {
      name: "Client, 34",
      service: "Anxiety Treatment",
      text: "I’m a survivor of trauma, and Anne’s gentle, trauma-informed approach helped me feel safe in my own body again. She gave me back my voice",
      rating: 5,
      location: "Nairobi, Kenya"
    },
    {
      name: "Client, 29",
      service: "Grief Counseling",
      text: "Sometimes I’d walk into session not knowing what I needed  but Anne always helped me untangle my emotions and make sense of what was really going on.",
      rating: 5,
      location: "Nairobi, Kenya"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Client Testimonials
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
              Real stories from real people who found healing, growth, and hope 
              through our professional therapy services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-healing-blue">500+</div>
              <div className="text-muted-foreground">Clients Helped</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-healing-green">9+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-healing-blue">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-healing-blue mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-healing-blue" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-healing-blue">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear directly from my clients about their transformative experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah M.",
                title: "Overcoming Anxiety",
                thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b332c108?w=400&h=300&fit=crop&crop=face"
              },
              {
                name: "John D.",
                title: "Marriage Transformation",
                thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face"
              }
            ].map((video, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">{video.name}</h3>
                    <p className="text-sm text-white/80">{video.title}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Click to watch this inspiring story of transformation and healing.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Common challenges our clients have overcome
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Anxiety & Depression",
                description: "92% of clients report significant improvement in anxiety and depression symptoms within 12 weeks."
              },
              {
                icon: Star,
                title: "Relationship Issues",
                description: "85% of couples report improved communication and relationship satisfaction after therapy."
              },
              {
                icon: Quote,
                title: "Trauma Recovery",
                description: "88% of trauma survivors experience reduced PTSD symptoms and improved quality of life."
              }
            ].map((story, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <story.icon className="w-12 h-12 text-healing-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{story.title}</h3>
                  <p className="text-muted-foreground">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-healing-blue to-healing-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Your Success Story Starts Here</h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of clients who have found healing and transformation through our professional therapy services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="calm" size="lg" asChild>
              <Link to="/contact">Start Your Journey</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/services">View Services <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;