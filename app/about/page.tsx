"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Lightbulb, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="pt-24 pb-16 bg-muted/20">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Read Your Lib</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We are on a mission to modernize libraries and make knowledge accessible to everyone through smart technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Our Mission</Badge>
                            <h2 className="text-3xl font-bold">Empowering Education</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our mission is to provide educational institutions and public libraries with the tools they need to operate efficiently in the digital age. We believe that by reducing administrative burdens, librarians can focus on what matters most: helping readers find their next great book.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Our Vision</Badge>
                            <h2 className="text-3xl font-bold">A Connected Future</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We envision a world where every library, regardless of size or budget, has access to state-of-the-art management software. We see Read Your Lib as the backbone of a global network of interconnected knowledge hubs.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Who it's for */}
            <section className="py-20 bg-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">Who Use Read Your Lib?</h2>
                        <p className="text-muted-foreground">Built for versatility, customized for you.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Schools & Universities", desc: "Manage textbooks, student records, and automated due dates seamlessly." },
                            { title: "Public Libraries", desc: "Handle large member databases and community events with ease." },
                            { title: "Private Collections", desc: "Organize personal or corporate libraries with a professional touch." }
                        ].map((item, i) => (
                            <Card key={i} className="bg-background border-none shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Heart className="h-6 w-6" />, title: "Passion", desc: "We love books and technology equally." },
                            { icon: <Lightbulb className="h-6 w-6" />, title: "Innovation", desc: "Always improving, always evolving." },
                            { icon: <Users className="h-6 w-6" />, title: "Community", desc: "Libraries are the heart of communities." },
                            { icon: <Globe className="h-6 w-6" />, title: "Accessibility", desc: "Technology should be for everyone." }
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    {val.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{val.title}</h3>
                                <p className="text-sm text-muted-foreground">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
