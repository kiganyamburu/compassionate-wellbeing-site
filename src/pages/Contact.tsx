import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Calendar,
  Link,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xovllanp");
  const { toast } = useToast();

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md mx-auto shadow-lg">
          <CardContent className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-muted-foreground mb-6">
              Your message has been sent successfully. I will get back to you
              shortly.
            </p>
            <Button
              variant="healing"
              onClick={() => window.location.reload()}
            >
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

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
              Ready to begin your journey to better mental health? Contact us
              today to schedule your consultation or ask any questions.
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
                <CardTitle className="text-2xl text-foreground">
                  Schedule a Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        name="name"
                        type="text"
                        required
                        className="mt-1"
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        name="email"
                        type="email"
                        required
                        className="mt-1"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      name="phone"
                      type="tel"
                      className="mt-1"
                    />
                      <ValidationError 
                        prefix="Phone" 
                        field="phone"
                        errors={state.errors}
                      />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">
                          Individual Therapy
                        </SelectItem>
                        <SelectItem value="couples">Couples Therapy</SelectItem>
                        <SelectItem value="family">
                          Family Counseling
                        </SelectItem>
                        <SelectItem value="cbt">
                          Cognitive Behavioral Therapy
                        </SelectItem>
                        <SelectItem value="trauma">Trauma Therapy</SelectItem>
                        <SelectItem value="crisis">
                          Crisis Intervention
                        </SelectItem>
                        <SelectItem value="consultation">
                          Initial Consultation
                        </SelectItem>
                      </SelectContent>
                    </Select>
                      <ValidationError 
                        prefix="Service" 
                        field="service"
                        errors={state.errors}
                      />
                  </div>

                  <div>
                    <Label htmlFor="preferredContact">
                      Preferred Contact Method
                    </Label>
                    <Select
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="text">WhatsApp Message</SelectItem>
                      </SelectContent>
                    </Select>
                      <ValidationError 
                        prefix="Preferred Contact" 
                        field="preferredContact"
                        errors={state.errors}
                      />
                  </div>

                  <div>
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="routine">
                          Routine (1-2 weeks)
                        </SelectItem>
                        <SelectItem value="soon">
                          Soon (within 1 week)
                        </SelectItem>
                        <SelectItem value="urgent">
                          Urgent (2-3 days)
                        </SelectItem>
                        <SelectItem value="crisis">
                          Crisis (same day)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                      <ValidationError 
                        prefix="Urgency" 
                        field="urgency"
                        errors={state.errors}
                      />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      name="message"
                      rows={4}
                      required
                      className="mt-1"
                      placeholder="Tell us about your concerns, goals, or any questions you have..."
                    />
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                      />
                  </div>

                  <Button
                    type="submit"
                    variant="healing"
                    size="lg"
                    className="w-full"
                     disabled={state.submitting}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-healing-blue" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+254 792427737</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-healing-blue" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">
                        mburuanne19@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-healing-blue" />
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="text-muted-foreground">
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-healing-green" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Monday - Friday
                      </h3>
                      <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-healing-green" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Saturday
                      </h3>
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
                  <CardTitle className="text-xl text-foreground">
                    Emergency Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you're experiencing a mental health crisis, please reach
                    out immediately:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-healing-green" />
                      <span>
                        Crisis Hotline: +254 739 935 333 (Suicide & Crisis
                        Lifeline)
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-healing-green" />
                      <span>Emergency Services: 999</span>
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
                question: "How do I book a session?",
                answer:
                  "Booking a session is simple. You can reach out to me directly via email or WhatsApp, or use the Book a Session button on this site to schedule a convenient time. I offer both in-person and virtual sessions.",
              },
              {
                question: "How long is each session?",
                answer:
                  "Each therapy session lasts approximately 50 minutes. For couples, families, or corporate sessions, extended time may be arranged based on your needs.",
              },
              {
                question: "What is the cost per session?",
                answer:
                  "Session fees vary depending on the type of service (individual, couple, family, or organizational). Please get in touch for the current rate card. I strive to keep my services accessible and may offer sliding scale options in certain cases.",
              },
              {
                question: "Do you offer virtual therapy?",
                answer:
                  "Yes, I offer secure and confidential online therapy sessions via Zoom or Google Meet for clients within Kenya and abroad. This provides flexibility and comfort from your own space.",
              },
              {
                question: "Is counseling confidential?",
                answer:
                  "Absolutely. Everything shared in session is treated with strict confidentiality, in line with professional ethical standards. Exceptions apply only in cases where there is a risk of harm to yourself or others, as guided by law and ethical guidelines.",
              },
              {
                question: "What if I’m not sure therapy is for me?",
                answer:
                  "That’s completely okay — many people feel that way at first. I offer a free 15-minute discovery call where we can talk about your concerns and see if therapy is the right fit for you. There’s no pressure, just support.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
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
            Your mental health journey starts with a single conversation. Reach
            out now to schedule your consultation.
          </p>
          <a href="https://wa.me/254792427737">
            <FaWhatsapp className="w-6 h-6 inline-block mr-2" />
            Chat with me on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
