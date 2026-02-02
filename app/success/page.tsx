"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SuccessPage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-muted/20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full text-center p-8 bg-background rounded-2xl border shadow-xl"
            >
                <div className="h-20 w-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                </div>

                <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
                <p className="text-muted-foreground mb-8">
                    Thank you for your purchase. Your license key has been sent to your email.
                </p>

                <div className="space-y-3">
                    <Link href="/download">
                        <Button className="w-full h-12 text-lg">
                            <Download className="mr-2 h-5 w-5" /> Download Software
                        </Button>
                    </Link>

                    <Link href="/">
                        <Button variant="outline" className="w-full">
                            Return to Home
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
