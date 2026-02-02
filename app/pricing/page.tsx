"use client";

import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function PricingPage() {
    const handleCheckout = async () => {
        try {
            const res = await fetch("/api/create-checkout-session", {
                method: "POST",
            });
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error("Failed to create checkout session", data);
            }
        } catch (error) {
            console.error("Error during checkout:", error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-muted/20">
                <div className="container px-4 mx-auto text-center">
                    <Badge variant="outline" className="mb-4">Simple Pricing</Badge>
                    <h1 className="text-4xl font-bold mb-6">One Price, Lifetime Access</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get full access to Read Your Lib with a simple one-time payment. No hidden fees, no recurring subscriptions.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-md mx-auto"
                    >
                        <Card className="border-2 border-primary shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-bl-lg">
                                BEST VALUE
                            </div>
                            <CardHeader className="text-center pt-10">
                                <CardTitle className="text-2xl">Lifetime License</CardTitle>
                                <CardDescription>For individual libraries & schools</CardDescription>
                                <div className="mt-6">
                                    <span className="text-5xl font-bold">$49.99</span>
                                    <span className="text-muted-foreground"> / one-time</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {[
                                        "Unlimited Books & Members",
                                        "Cloud Sync & Backup",
                                        "Advanced Reporting",
                                        "Priority Email Support",
                                        "Free Updates for Life",
                                        "Multi-User Access"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="pb-8">
                                <Button size="lg" className="w-full text-lg h-12" onClick={handleCheckout}>
                                    <Zap className="mr-2 h-4 w-4" /> Buy Now
                                </Button>
                            </CardFooter>
                            <div className="bg-muted/50 p-4 text-center text-xs text-muted-foreground border-t">
                                <div className="flex justify-center items-center gap-2 mb-1">
                                    <ShieldCheck className="h-3 w-3" /> Secure payment via Stripe
                                </div>
                                <p>30-day money-back guarantee</p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
