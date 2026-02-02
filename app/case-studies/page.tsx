"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Quote, BarChart, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function CaseStudiesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-20 bg-muted/20">
                <div className="container px-4 mx-auto text-center">
                    <Badge className="mb-4">Success Stories</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">See How Others Succeed</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover how Read Your Lib helped institutions transform their operations and serve their communities better.
                    </p>
                </div>
            </section>

            {/* Case Study 1: University */}
            <section className="py-20 border-b">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-2 text-primary font-semibold">
                                <span className="h-2 w-2 rounded-full bg-primary" />
                                Higher Education
                            </div>
                            <h2 className="text-3xl font-bold">St. Xavier's Technical University</h2>
                            <p className="text-lg text-muted-foreground">
                                Managing a collection of 50,000+ technical journals and serving 12,000 students required a robust system. St. Xavier's moved from manual spreadsheets to Read Your Lib.
                            </p>

                            <div className="grid grid-cols-3 gap-6 py-6">
                                <div>
                                    <div className="text-2xl font-bold text-primary">40%</div>
                                    <div className="text-sm text-muted-foreground">Faster Checkouts</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-primary">0</div>
                                    <div className="text-sm text-muted-foreground">Lost Books</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-primary">100%</div>
                                    <div className="text-sm text-muted-foreground">Digital Adoption</div>
                                </div>
                            </div>

                            <div className="bg-muted/50 p-6 rounded-xl border-l-4 border-primary">
                                <Quote className="h-8 w-8 text-primary/40 mb-2" />
                                <p className="italic text-muted-foreground mb-4">
                                    "The transition was seamless. The students love the self-service portal, and our librarians finally have time to focus on research assistance rather than data entry."
                                </p>
                                <div className="font-semibold">- Dr. Sarah Jenkins, Head Librarian</div>
                            </div>
                        </motion.div>
                        <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-xl">
                            {/* Placeholder for University Library Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/80 flex items-center justify-center text-white/50">
                                University Library Interior Visual
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study 2: Public Library */}
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                            {/* Placeholder for Public Library Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-slate-900/80 flex items-center justify-center text-white/50">
                                Public Library Community Visual
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 order-1 md:order-2"
                        >
                            <div className="flex items-center gap-2 text-green-600 font-semibold">
                                <span className="h-2 w-2 rounded-full bg-green-600" />
                                Public Library
                            </div>
                            <h2 className="text-3xl font-bold">Metro City Public Library</h2>
                            <p className="text-lg text-muted-foreground">
                                With 4 branches and limited staff, Metro City needed a centralized cloud solution. Read Your Lib enabled real-time sync across all locations.
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-green-600" />
                                    <span>Reduced inter-branch transfer time by 2 days</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Users className="h-5 w-5 text-green-600" />
                                    <span>Increased membership signup by 25%</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <BarChart className="h-5 w-5 text-green-600" />
                                    <span>Real-time inventory view for all branches</span>
                                </li>
                            </ul>

                            <div className="bg-green-50/50 dark:bg-green-950/20 p-6 rounded-xl border-l-4 border-green-500">
                                <Quote className="h-8 w-8 text-green-500/40 mb-2" />
                                <p className="italic text-muted-foreground mb-4">
                                    "We can now manage all 4 branches from a single dashboard. It's affordable, reliable, and simply works."
                                </p>
                                <div className="font-semibold">- Mark Thompson, Director</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
