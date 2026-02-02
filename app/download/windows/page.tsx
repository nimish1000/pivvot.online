"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Download, CheckCircle, ShieldCheck, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function WindowsDownloadPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-blue-50 dark:bg-blue-950/20 py-16 border-b">
                <div className="container mx-auto px-4 flex flex-col items-center text-center">
                    <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                            <path d="M0 3.449L9.75 2.1v9.451H0v-8.102zm10.724-1.63L24 0v11.4h-13.276V1.818zM24 12.75v11.25L10.724 22.182V12.75H24zM0 12.953h9.75v8.001L0 20.25v-7.297z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Download Read Your Lib for Windows</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        The complete library management experience, optimized for Windows 10 and 11.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <a
                            href="/downloads/LibrarySoftware.exe"
                            download
                            className="inline-block"
                        >
                            <Button
                                size="lg"
                                className="h-14 px-8 text-lg shadow-xl shadow-primary/20 bg-blue-600 hover:bg-blue-700"
                            >
                                <Download className="mr-2 h-5 w-5" />
                                Download Installer (.exe)
                            </Button>
                        </a>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        Version 2.5.0 • 64-bit • 145 MB • Verified Safe <ShieldCheck className="inline h-3 w-3 text-green-500" />
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4 max-w-4xl">
                <Alert className="mb-12 bg-amber-50 dark:bg-amber-950/20 border-amber-200 text-amber-900 dark:text-amber-100">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                        Read Your Lib requires the .NET Desktop Runtime 6.0 or higher. The installer will prompt you to download it if missing.
                    </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Installation Instructions</h2>
                        <ol className="space-y-6 relative border-l border-muted ml-3 pl-8">
                            {[
                                "Download the installer file (ReadLib_Setup_v2.5.0.exe).",
                                "Double-click the file to launch the setup wizard.",
                                "Accept the license agreement and choose your installation folder.",
                                "Click 'Install' and wait for the process to complete.",
                                "Launch Read Your Lib from your desktop shortcut."
                            ].map((step, i) => (
                                <li key={i} className="relative">
                                    <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground ring-4 ring-background">
                                        {i + 1}
                                    </span>
                                    <p className="text-foreground font-medium">{step}</p>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-2xl border">
                        <h2 className="text-xl font-bold mb-6">System Requirements</h2>
                        <ul className="space-y-4">
                            <li className="flex justify-between border-b border-muted pb-2">
                                <span className="text-muted-foreground">OS</span>
                                <span className="font-medium text-right">Windows 10 (1809+) or Windows 11</span>
                            </li>
                            <li className="flex justify-between border-b border-muted pb-2">
                                <span className="text-muted-foreground">Processor</span>
                                <span className="font-medium text-right">Intel Core i3 / AMD Ryzen 3 (or better)</span>
                            </li>
                            <li className="flex justify-between border-b border-muted pb-2">
                                <span className="text-muted-foreground">RAM</span>
                                <span className="font-medium text-right">4 GB Minimum (8 GB Recommended)</span>
                            </li>
                            <li className="flex justify-between border-b border-muted pb-2">
                                <span className="text-muted-foreground">Disk Space</span>
                                <span className="font-medium text-right">2 GB Available Space</span>
                            </li>
                        </ul>
                        <div className="mt-6 pt-4 text-center">
                            <Link href="/system-requirements" className="text-primary hover:underline font-medium">
                                View Full Requirements
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screen Preview */}
            <section className="py-20 bg-muted/20">
                <div className="container px-4 text-center">
                    <h2 className="text-2xl font-bold mb-8">Preview</h2>

                    <div className="rounded-xl border shadow-2xl overflow-hidden max-w-4xl mx-auto bg-black">
                        <div className="relative aspect-video">
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
            </section>
        </div>
    );
}
