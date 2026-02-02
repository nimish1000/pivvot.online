"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Layout, Smartphone, Shield, Zap, Globe, BarChart } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-background">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-primary/20 text-primary">
                            The All-In-One Solution
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Transform Your Library with <br />
                            <span className="text-primary">Read Your Lib</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            A powerful, intuitive, and secure library management system designed for modern institutions. 
                            Automate workflows, engage patrons, and make data-driven decisions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/download">
                                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
                                    Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                                    Schedule Demo
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-16 mx-auto max-w-5xl rounded-2xl border border-border/50 shadow-2xl overflow-hidden"
                    >
                        <div className="aspect-video relative bg-muted/20">
                            <Image 
                                src="/dashboard-preview.png" 
                                alt="Read Your Lib Dashboard" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-24 bg-muted/10">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to manage physical and digital assets efficiently.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Layout className="h-8 w-8 text-blue-500" />,
                                title: "Smart Cataloging",
                                desc: "Automated ISBN fetching, custom tagging, and bulk import capabilities."
                            },
                            {
                                icon: <Zap className="h-8 w-8 text-amber-500" />,
                                title: "Instant Circulation",
                                desc: "Fast check-in/out with barcode scanning and RFID support."
                            },
                            {
                                icon: <Smartphone className="h-8 w-8 text-green-500" />,
                                title: "Member Portal",
                                desc: "Self-service portal for members to search, reserve, and renew books."
                            },
                            {
                                icon: <BarChart className="h-8 w-8 text-purple-500" />,
                                title: "Advanced Analytics",
                                desc: "Real-time reports on fines, circulation trends, and inventory health."
                            },
                            {
                                icon: <Globe className="h-8 w-8 text-cyan-500" />,
                                title: "Cloud Sync",
                                desc: "Access your library data from anywhere with secure cloud synchronization."
                            },
                            {
                                icon: <Shield className="h-8 w-8 text-red-500" />,
                                title: "Role-Based Access",
                                desc: "Granular permission settings for admins, librarians, and staff."
                            }
                        ].map((feature, i) => (
                            <Card key={i} className="border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
                                <CardHeader>
                                    <div className="bg-background w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-2 border border-border/50">
                                        {feature.icon}
                                    </div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Unique Selling Points */}
            <section className="py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Why Leaders Choose <br />Read Your Lib?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We didn't just build software; we engineered a partner for your library's success.
                                Unlike legacy systems, Read Your Lib is built on modern tech for speed and reliability.
                            </p>
                            
                            <ul className="space-y-4">
                                {[
                                    "Zero Setup Cost - Get started in minutes, not months.",
                                    "99.9% Uptime Guarantee with automated backups.",
                                    "Intuitive Interface requiring no specialized training.",
                                    "Dedicated 24/7 Support team."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10">
                                <Link href="/case-studies">
                                    <Button variant="link" className="text-primary px-0 font-semibold text-lg hover:no-underline">
                                        Read Success Stories <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                            <div className="relative bg-card border border-border p-8 rounded-3xl shadow-xl">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 border-b border-border/50 pb-4">
                                        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">A+</div>
                                        <div>
                                            <h4 className="font-bold">Top Rated Software</h4>
                                            <p className="text-sm text-muted-foreground">Voted #1 by Education Tech Weekly</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 border-b border-border/50 pb-4">
                                        <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-green-500">2K+</div>
                                        <div>
                                            <h4 className="font-bold">Active Libraries</h4>
                                            <p className="text-sm text-muted-foreground">Trusting us with their collections</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-blue-500">5M+</div>
                                        <div>
                                            <h4 className="font-bold">Books Managed</h4>
                                            <p className="text-sm text-muted-foreground">Cataloged and circulated daily</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-primary-foreground">
                <div className="container px-4 text-center mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Modernize?</h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
                        Join thousands of librarians who have switched to a smarter way of working.
                        Try Read Your Lib today.
                    </p>
                    <Link href="/download">
                        <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-semibold shadow-xl">
                            Download Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
