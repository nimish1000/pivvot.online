"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Book, Users, Cloud, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full mb-4">
                🚀 Leading Investment & Holdings Company
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70"
            >
              Strategic Investments <br />
              <span className="text-primary">for Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-[700px] leading-relaxed"
            >
              Prime Way Holdings specializes in strategic investments across diverse sectors,
              delivering sustainable growth and exceptional returns for our partners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4"
            >
              <Link href="/download">
                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
                  Learn More<ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              {/* <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                Request Demo
              </Button> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos / Trust Badges */}
      {/* <section className="py-12 border-y border-muted/50 bg-secondary/20">
        <div className="container px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by Top Institutions
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {["University of Tech", "City Public Library", "Knowledge School", "EduCenter Inc", "Global Books"].map((logo) => (
              <div key={logo} className="flex items-center gap-2 text-xl font-bold text-muted-foreground/60">
                <div className="h-8 w-8 bg-muted-foreground/20 rounded-full"></div>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Key Highlights */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Cloud className="h-10 w-10 text-primary" />,
                title: "Cloud-Based",
                desc: "Access your library data from anywhere, anytime. Secure and reliable."
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Lightning Fast",
                desc: "Optimized for speed. Search thousands of books in milliseconds."
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                title: "Secure & Reliable",
                desc: "Enterprise-grade security to keep your member data safe."
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={item}>
                <Card className="border-none shadow-none bg-transparent">
                  <CardHeader>
                    <div className="mb-4 inline-block p-3 rounded-2xl bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Everything you need to run a modern library.
              </h2>
              <p className="text-lg text-muted-foreground">
                Read Your Lib eliminates the chaos of manual book tracking. Our automated system handles the heavy lifting so you can focus on reading.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Real-time Inventory Tracking",
                  "Automated Fine Calculation",
                  "Student & Staff Member Portals",
                  "Barcode & RFID Integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link href="/features">
                  <Button variant="default" size="lg">Explore Features</Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <Image
                  src="/lib-app-pic.jpg"
                  alt="Read Your Lib Dashboard Interface"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-primary px-6 py-16 md:px-16 md:py-24 text-center">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Ready to modernize your library?
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Join hundreds of schools and libraries already using Read Your Lib to manage their collections effortlessly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button size="lg" variant="secondary" className="font-semibold h-12 px-8">
                  Get Started for Free
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
