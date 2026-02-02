"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export default function CancelPage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-muted/20">
            <div className="max-w-md w-full text-center p-8 bg-background rounded-2xl border shadow-xl">
                <div className="h-20 w-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <XCircle className="h-10 w-10 text-red-600" />
                </div>

                <h1 className="text-3xl font-bold mb-2">Payment Cancelled</h1>
                <p className="text-muted-foreground mb-8">
                    Your payment was not processed. No charges were made to your account.
                </p>

                <div className="space-y-3">
                    <Link href="/pricing">
                        <Button className="w-full h-12 text-lg">
                            Try Again
                        </Button>
                    </Link>

                    <Link href="/support">
                        <Button variant="outline" className="w-full">
                            Contact Support
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
