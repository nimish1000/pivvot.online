"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Cloud, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OverviewPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary text-primary-foreground py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Product Overview
                    </motion.h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        A complete ecosystem for modern library management.
                    </p>
                </div>
            </section>

            {/* What is Read Your Lib */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6">What is Read Your Lib?</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Read Your Lib is a comprehensive software solution designed to automate the day-to-day operations of a library. From cataloging books to managing checkouts and fines, Read Your Lib handles it all through an intuitive, easy-to-use interface.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Whether you are running a small school library or a large public institution, our software scales to meet your needs, ensuring that your focus remains on education and literacy rather than paperwork.
                    </p>
                </div>
            </section>

            {/* How it works */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Setup Library", desc: "Create your account, configure branches, and set up your library rules." },
                            { step: "02", title: "Add Inventory", desc: "Bulk import books via CSV or scan ISBNs to populate your catalog instantly." },
                            { step: "03", title: "Start Managing", desc: "Issue books, track returns, and generate reports from your dashboard." }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 bg-background rounded-2xl border shadow-sm">
                                <div className="text-6xl font-bold text-muted/40 absolute top-4 right-4">{item.step}</div>
                                <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                                <p className="text-muted-foreground relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deployment Options */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Choose Your Deployment</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="p-8 rounded-2xl border bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
                            <Cloud className="h-12 w-12 text-blue-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Cloud-Based (SaaS)</h3>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Accessible anywhere</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Automatic updates</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> No server maintenance</li>
                            </ul>
                            <Button className="w-full">Select Cloud</Button>
                        </div>

                        <div className="p-8 rounded-2xl border bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-background">
                            <Server className="h-12 w-12 text-purple-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">On-Premise</h3>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Full data control</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Local network speed</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> One-time licensing</li>
                            </ul>
                            <Button variant="outline" className="w-full">Select On-Premise</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
