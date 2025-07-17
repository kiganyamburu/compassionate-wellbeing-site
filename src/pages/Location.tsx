import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Car, Train, Bus, Clock, Phone, Accessibility, Wifi, Coffee, Shield } from "lucide-react";

const Location = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Visit Our Practice
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
              Located in the heart of San Francisco, our practice offers a peaceful, 
              accessible environment for your therapy sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Address & Map */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <Card className="border-0 shadow-card overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-healing-blue to-healing-green relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                    <p className="text-white/80">Click to open in Google Maps</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Address Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Our Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-healing-blue mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Healing Mind Therapy</h3>
                      <p className="text-muted-foreground">
                        123 Wellness Street<br />
                        Suite 200<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-healing-blue" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-healing-blue" />
                    <div>
                      <h3 className="font-semibold text-foreground">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Mon-Fri: 9:00 AM - 6:00 PM<br />
                        Sat: 9:00 AM - 2:00 PM<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="healing" size="lg" className="flex-1">
                  Get Directions
                </Button>
                <Button variant="calm" size="lg" className="flex-1" asChild>
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Getting Here
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple transportation options to reach our practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader className="text-center">
                <Car className="w-12 h-12 text-healing-blue mx-auto mb-4" />
                <CardTitle className="text-xl">By Car</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Convenient parking available in our building garage
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Validated parking for patients</li>
                  <li>• Accessible parking spaces</li>
                  <li>• 2 hours free with appointment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader className="text-center">
                <Train className="w-12 h-12 text-healing-green mx-auto mb-4" />
                <CardTitle className="text-xl">By BART/Muni</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Easy access via public transportation
                </p>
                <ul className="text-sm space-y-2">
                  <li>• 3 blocks from Montgomery Station</li>
                  <li>• Multiple Muni lines nearby</li>
                  <li>• 5-minute walk from transit</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader className="text-center">
                <Bus className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">By Bus</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Multiple bus lines serve our area
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Lines 1, 12, 30, 45 nearby</li>
                  <li>• Bus stop 1 block away</li>
                  <li>• Real-time arrival info</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Practice Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Designed with your comfort and privacy in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Accessibility,
                title: "Fully Accessible",
                description: "ADA compliant with elevator access and accessible restrooms"
              },
              {
                icon: Shield,
                title: "Private & Secure",
                description: "Soundproof offices ensure complete privacy and confidentiality"
              },
              {
                icon: Wifi,
                title: "Modern Technology",
                description: "Free WiFi and telehealth capabilities for hybrid sessions"
              },
              {
                icon: Coffee,
                title: "Comfort Amenities",
                description: "Comfortable seating, natural lighting, and refreshments"
              },
              {
                icon: Clock,
                title: "Flexible Hours",
                description: "Extended hours including evenings and Saturday appointments"
              },
              {
                icon: MapPin,
                title: "Central Location",
                description: "Downtown location with easy access from all Bay Area regions"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader className="text-center">
                  <feature.icon className="w-12 h-12 text-healing-blue mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Amenities */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nearby Amenities
            </h2>
            <p className="text-lg text-muted-foreground">
              Convenient services and attractions in our neighborhood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Dining & Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Whole Foods Market - 2 blocks</li>
                  <li>• Starbucks - Ground floor</li>
                  <li>• Ferry Building Marketplace - 0.5 miles</li>
                  <li>• Union Square Shopping - 0.8 miles</li>
                  <li>• Variety of restaurants within 3 blocks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Healthcare & Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• UCSF Medical Center - 1.2 miles</li>
                  <li>• CVS Pharmacy - 1 block</li>
                  <li>• Bank of America - Same building</li>
                  <li>• FedEx Office - 2 blocks</li>
                  <li>• Multiple hotels for out-of-town clients</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-healing-blue to-healing-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Visit?</h2>
          <p className="text-xl mb-8 text-white/90">
            Schedule your appointment today and take the first step toward better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="calm" size="lg" asChild>
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;