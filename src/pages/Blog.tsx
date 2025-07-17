import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, Clock, Search, ArrowRight, Heart, Brain, Shield, Users } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
      excerpt: "Learn to recognize the signs of anxiety and discover effective coping strategies that can help you manage symptoms and improve your quality of life.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop",
      tags: ["anxiety", "coping", "mental health"]
    },
    {
      id: 2,
      title: "The Power of Mindfulness in Daily Life",
      excerpt: "Discover how incorporating mindfulness practices into your daily routine can reduce stress, improve focus, and enhance overall well-being.",
      author: "Dr. Sarah Johnson",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      tags: ["mindfulness", "meditation", "stress"]
    },
    {
      id: 3,
      title: "Building Healthy Relationships: Communication Tips",
      excerpt: "Explore effective communication strategies that can strengthen your relationships and help you navigate conflicts with understanding and empathy.",
      author: "Dr. Sarah Johnson",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Relationships",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop",
      tags: ["relationships", "communication", "couples"]
    },
    {
      id: 4,
      title: "Overcoming Depression: A Journey to Recovery",
      excerpt: "Understanding depression and the path to recovery. Learn about treatment options, self-care strategies, and how to build a support system.",
      author: "Dr. Sarah Johnson",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      tags: ["depression", "recovery", "treatment"]
    },
    {
      id: 5,
      title: "The Importance of Self-Care in Mental Health",
      excerpt: "Self-care isn't selfish—it's essential. Learn practical self-care strategies that can improve your mental health and overall quality of life.",
      author: "Dr. Sarah Johnson",
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=250&fit=crop",
      tags: ["self-care", "wellness", "mental health"]
    },
    {
      id: 6,
      title: "Trauma Recovery: Healing from Past Experiences",
      excerpt: "Understanding trauma and its impact on mental health. Explore evidence-based approaches to trauma recovery and the journey toward healing.",
      author: "Dr. Sarah Johnson",
      date: "February 15, 2024",
      readTime: "15 min read",
      category: "Trauma",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      tags: ["trauma", "recovery", "healing"]
    }
  ];

  const categories = [
    { name: "Mental Health", icon: Brain, count: 8 },
    { name: "Wellness", icon: Heart, count: 6 },
    { name: "Relationships", icon: Users, count: 4 },
    { name: "Trauma", icon: Shield, count: 3 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Mental Health Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
              Insights, tips, and guidance on mental health, wellness, and personal growth 
              from our experienced therapists.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <category.icon className="w-12 h-12 text-healing-blue mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Article</h2>
          </div>
          <Card className="border-0 shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-healing-blue text-white">
                    {blogPosts[0].category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{blogPosts[0].title}</h3>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="healing" asChild>
                  <Link to={`/blog/${blogPosts[0].id}`}>
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={post.id} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-healing-blue text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/blog/${post.id}`}>
                      Read Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-healing-blue to-healing-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl mb-8 text-white/90">
            Subscribe to our newsletter for the latest mental health insights and tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
            />
            <Button variant="calm" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;