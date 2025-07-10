'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Code, 
  Palette, 
  Rocket, 
  ArrowRight, 
  Github, 
  Globe,
  Terminal,
  Layers,
  CheckCircle,
  Play,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Development",
      description: "Advanced AI understands your requirements and generates production-ready code instantly."
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Zero Setup Required",
      description: "Start building immediately with our browser-based development environment."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Modern Design Systems",
      description: "Automatically generates beautiful, responsive designs following best practices."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Capabilities",
      description: "From frontend to backend, database to deployment - everything in one platform."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Instant Deployment",
      description: "Deploy your applications globally with one click. No DevOps knowledge required."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Framework Agnostic",
      description: "Supports React, Vue, Angular, Next.js, and many more modern frameworks."
    }
  ];

  const stats = [
    { number: "10K+", label: "Websites Built", icon: <Globe className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "30s", label: "Avg Build Time", icon: <Zap className="w-5 h-5" /> },
    { number: "150+", label: "Countries", icon: <Users className="w-5 h-5" /> }
  ];

  const examples = [
    { name: "E-commerce Store", tech: "React + Stripe", preview: "🛍️" },
    { name: "Portfolio Website", tech: "Next.js + Tailwind", preview: "👨‍💻" },
    { name: "Blog Platform", tech: "Vue + Markdown", preview: "📝" },
    { name: "Dashboard App", tech: "React + Charts", preview: "📊" }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#F7F9FB' }}>
      {/* Navigation */}
      <nav className="relative z-50 border-b border-border/20 backdrop-blur-xl bg-white/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-slate-900">WebCraft AI</span>
                <span className="text-xs text-slate-500 -mt-1">AI Website Builder</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Link href="/webcraft">
                <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  Launch App
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-300 mb-8">
              <Sparkles className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Powered by AI & WebContainers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Create websites with
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                just a prompt
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Transform your ideas into fully functional websites using AI. No coding required. 
              Just describe what you want, and watch it come to life in seconds.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/webcraft">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 h-14 px-10 text-lg font-medium">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Building Free
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-medium border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>No Setup Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Instant Preview</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Professional Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200 group-hover:bg-slate-200 transition-all duration-300">
                    <div className="text-slate-700">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Everything you need to
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
                build amazing websites
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Powerful features that make website creation effortless and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 bg-white group">
                <CardContent className="p-0">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 border border-slate-200 group-hover:bg-slate-200 transition-all duration-300">
                    <div className="text-slate-700">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-24 bg-gradient-to-r from-slate-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Built for
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
                every use case
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              From simple landing pages to complex web applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {examples.map((example, index) => (
              <Card 
                key={index}
                className="p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 bg-white cursor-pointer group"
              >
                <CardContent className="p-0 text-center">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {example.preview}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{example.name}</h3>
                  <Badge className="bg-slate-100 text-slate-700 border border-slate-300 text-xs">
                    {example.tech}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-none">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Ready to build your
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
                  dream website?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium">
                Join thousands of creators who are already building amazing websites with WebCraft AI
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/webcraft">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 h-14 px-12 text-lg font-medium">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Now
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="h-14 px-12 text-lg font-medium border-2 border-slate-600 text-slate-300 hover:border-slate-400 hover:bg-slate-800">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">WebCraft AI</span>
            </div>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
              Building the future of web development with AI-powered tools that make website creation accessible to everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Documentation</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-sm">
              © 2025 WebCraft AI. All rights reserved. Building the future of web development.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
