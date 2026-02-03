"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageCircle, FileText, Search, Mail, BookOpen } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Search Hero */}
            <section className="py-24 bg-primary text-primary-foreground text-center">
                <div className="container px-4 mx-auto">
                    <h1 className="text-4xl font-bold mb-6">How can we help you today?</h1>
                    <div className="max-w-2xl mx-auto relative cursor-not-allowed opacity-90">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search help articles (e.g., 'How to reset password')"
                            className="pl-12 h-12 bg-background/95 text-foreground border-none shadow-xl"
                            disabled
                        />
                    </div>
                </div>
            </section>

            {/* Help Categories */}
            <section className="py-20 -mt-10">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-none shadow-primary/5">
                            <CardHeader>
                                <BookOpen className="h-10 w-10 text-primary mb-2" />
                                <CardTitle>Documentation</CardTitle>
                                <CardDescription>Step-by-step guides for setting up and using Read Your Lib.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="link" className="px-0">Browse Guides &rarr;</Button>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-none shadow-primary/5">
                            <CardHeader>
                                <FileText className="h-10 w-10 text-primary mb-2" />
                                <CardTitle>FAQs</CardTitle>
                                <CardDescription>Quick answers to common questions about billing and setup.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Link href="/faq">
                                    <Button variant="link" className="px-0">View FAQ &rarr;</Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-none shadow-primary/5">
                            <CardHeader>
                                <MessageCircle className="h-10 w-10 text-primary mb-2" />
                                <CardTitle>Community Forum</CardTitle>
                                <CardDescription>Connect with other librarians and share tips and tricks.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="link" className="px-0">Join Discussion &rarr;</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-10">Still need help?</h2>
                    <div className="inline-flex flex-col md:flex-row gap-8 text-left max-w-2xl mx-auto w-full">
                        <div className="flex-1 bg-background p-6 rounded-xl border flex items-start gap-4">
                            <Mail className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-bold">Email Support</h3>
                                <p className="text-sm text-muted-foreground mb-4">Get a response within 24 hours.</p>
                                <a href="mailto:support@pivvot.online" className="text-primary hover:underline">support@pivvot.online</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
