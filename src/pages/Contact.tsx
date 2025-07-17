import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredContact: "",
    urgency: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      preferredContact: "",
      urgency: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
              Ready to begin your journey to better mental health? Contact us today 
              to schedule your consultation or ask any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Schedule a Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual Therapy</SelectItem>
                        <SelectItem value="couples">Couples Therapy</SelectItem>
                        <SelectItem value="family">Family Counseling</SelectItem>
                        <SelectItem value="cbt">Cognitive Behavioral Therapy</SelectItem>
                        <SelectItem value="trauma">Trauma Therapy</SelectItem>
                        <SelectItem value="crisis">Crisis Intervention</SelectItem>
                        <SelectItem value="consultation">Initial Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                    <Select onValueChange={(value) => handleChange("preferredContact", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="text">Text Message</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select onValueChange={(value) => handleChange("urgency", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="routine">Routine (1-2 weeks)</SelectItem>
                        <SelectItem value="soon">Soon (within 1 week)</SelectItem>
                        <SelectItem value="urgent">Urgent (2-3 days)</SelectItem>
                        <SelectItem value="crisis">Crisis (same day)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      required
                      className="mt-1"
                      placeholder="Tell us about your concerns, goals, or any questions you have..."
                    />
                  </div>

                  <Button type="submit" variant="healing" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-healing-blue" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-healing-blue" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@healingmind.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-healing-blue" />
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="text-muted-foreground">
                        123 Wellness Street<br />
                        Suite 200<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-healing-green" />
                    <div>
                      <h3 className="font-semibold text-foreground">Monday - Friday</h3>
                      <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-healing-green" />
                    <div>
                      <h3 className="font-semibold text-foreground">Saturday</h3>
                      <p className="text-muted-foreground">9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-healing-green" />
                    <div>
                      <h3 className="font-semibold text-foreground">Sunday</h3>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Emergency Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you're experiencing a mental health crisis, please reach out immediately:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-healing-green" />
                      <span>Crisis Hotline: 988 (Suicide & Crisis Lifeline)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-healing-green" />
                      <span>Emergency Services: 911</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-healing-green" />
                      <span>Text Crisis Line: Text HOME to 741741</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our therapy services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I know if therapy is right for me?",
                answer: "If you're struggling with mental health concerns, relationship issues, or life transitions, therapy can be beneficial. Our initial consultation helps determine if we're a good fit."
              },
              {
                question: "What should I expect in the first session?",
                answer: "The first session is an assessment where we'll discuss your concerns, goals, and medical history. We'll also explain our approach and develop a treatment plan together."
              },
              {
                question: "Do you accept insurance?",
                answer: "Yes, we accept most major insurance plans. We also offer sliding scale fees for those experiencing financial hardship."
              },
              {
                question: "How long does therapy typically last?",
                answer: "The duration varies depending on your needs and goals. Some clients benefit from short-term therapy (8-12 sessions), while others prefer longer-term support."
              },
              {
                question: "Are sessions confidential?",
                answer: "Yes, all sessions are strictly confidential. We only share information with your written consent or in cases where there's a legal obligation to protect safety."
              },
              {
                question: "Can I switch therapists if needed?",
                answer: "Absolutely. The therapeutic relationship is crucial for success. If you feel we're not a good fit, we'll help you find another therapist who better meets your needs."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-healing-blue to-healing-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Take the First Step Today</h2>
          <p className="text-xl mb-8 text-white/90">
            Your mental health journey starts with a single conversation. 
            Reach out now to schedule your consultation.
          </p>
          <Button variant="calm" size="lg">
            Call (555) 123-4567
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;