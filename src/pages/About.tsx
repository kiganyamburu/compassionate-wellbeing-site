import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Heart,
  Users,
  Shield,
  CheckCircle,
} from "lucide-react";
import therapistImage from "@/assets/therapist-portrait.jpg";
import meditationImage from "@/assets/meditation-garden.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
              About Anne
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
              Dedicated to helping individuals and families find their path to
              healing, growth, and lasting well-being through compassionate,
              evidence-based therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img
                src={therapistImage}
                alt="Dr. Sarah Johnson"
                className="rounded-lg shadow-hover w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Your Partner in Mental Health
              </h2>
              <p className="text-lg text-muted-foreground">
                Anne is a licensed Counseling Psychologist with over 9
                years of experience supporting individuals, couples, families,
                and teams. She offers compassionate, confidential therapy rooted
                in evidence-based practices, tailored to your unique needs. Anne
                specializes in anxiety, trauma, grief, addiction, relationship
                challenges, and workplace stress.
              </p>
              <p className="text-lg text-muted-foreground">
                Her experience spans humanitarian work, corporate wellness,
                schools, faith-based settings, and private practice. She creates
                a safe, non-judgmental space where clients can explore thoughts,
                emotions, and behaviors freely. Sessions are available both
                in-person and online for clients in Kenya and internationally.
                Whether you're feeling stuck or ready for change, Anne is here
                to walk with you on your journey.
              </p>
              <Button variant="healing" size="lg" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Education */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Credentials & Education
            </h2>
            <p className="text-lg text-muted-foreground">
              Extensive training and continuous education in mental health
              practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Degree in Clinical Psychology",
                description: "Kenyatta University, 2008",
                color: "text-healing-blue",
              },
              {
                icon: BookOpen,
                title: "Licensed Clinical Psychologist",
                description: "California Board of Psychology, License #12345",
                color: "text-healing-green",
              },
              {
                icon: Heart,
                title: "Certified CBT Therapist",
                description: "Beck Institute for Cognitive Behavior Therapy",
                color: "text-primary",
              },
              {
                icon: Users,
                title: "EMDR Certified",
                description: "EMDR International Association",
                color: "text-healing-blue",
              },
              {
                icon: Shield,
                title: "Trauma-Informed Care",
                description: "National Council for Mental Wellbeing",
                color: "text-healing-green",
              },
              {
                icon: CheckCircle,
                title: "Mindfulness-Based Therapy",
                description: "Mindfulness-Based Stress Reduction (MBSR)",
                color: "text-primary",
              },
            ].map((credential, index) => (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <credential.icon
                    className={`w-12 h-12 ${credential.color} mx-auto mb-4`}
                  />
                  <CardTitle className="text-lg">{credential.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {credential.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Areas of Specialization
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive treatment for a wide range of mental health
              conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Individual Therapy
              </h3>
              <ul className="space-y-3">
                {[
                  "Anxiety and Panic Disorders",
                  "Depression and Mood Disorders",
                  "Trauma and PTSD",
                  "Grief and Loss",
                  "Life Transitions",
                  "Self-Esteem and Confidence",
                  "Stress Management",
                  "Relationship Issues",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-healing-blue rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Couples & Family Therapy
              </h3>
              <ul className="space-y-3">
                {[
                  "Communication Problems",
                  "Conflict Resolution",
                  "Pre-marital Counseling",
                  "Infidelity Recovery",
                  "Parenting Challenges",
                  "Blended Family Issues",
                  "Divorce Mediation",
                  "Teen and Adolescent Issues",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-healing-green rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                My Therapeutic Philosophy
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  I believe that every person has the innate capacity for
                  healing and growth. My role is to provide a safe, supportive
                  environment where you can explore your inner world and develop
                  the tools you need to create positive change.
                </p>
                <p>
                  Using an integrative approach that combines evidence-based
                  techniques with compassionate understanding, I work
                  collaboratively with clients to address their unique needs and
                  goals.
                </p>
                <p>
                  Whether you're dealing with anxiety, depression, relationship
                  challenges, or life transitions, I'm here to walk alongside
                  you on your journey toward greater well-being and fulfillment.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="professional" size="lg" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src={meditationImage}
                alt="Peaceful meditation space"
                className="rounded-lg shadow-hover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-healing-blue to-healing-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Take the first step towards better mental health. Book a
            consultation today.
          </p>
          <Button variant="calm" size="lg" asChild>
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
