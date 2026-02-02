"use client";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Video, Download, CheckSquare, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InstallationGuidePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Installation Guide</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Follow these simple steps to get Read Your Lib up and running in minutes.
                    </p>
                </div>
            </section>

            <section className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Pre-install Checklist */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <CheckSquare className="h-6 w-6 text-primary" /> Pre-Installation Checklist
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Administrator privileges on your PC",
                                "Stable internet connection",
                                ".NET Desktop Runtime 6.0 installed",
                                "Valid license key (for paid versions)"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-card border rounded-lg shadow-sm">
                                    <div className="h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                                    </div>
                                    <span className="font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-12">
                        <h2 className="text-2xl font-bold mb-8 text-center border-b pb-4">Step-by-Step Installation</h2>

                        {[
                            {
                                title: "Download the Installer",
                                desc: "Get the latest .exe file from our Download Center. Ensure you select the correct version for your Windows architecture.",
                                action: <Link href="/download"><Button variant="outline" size="sm" className="mt-2 text-xs"><Download className="mr-2 h-3 w-3" /> Go to Downloads</Button></Link>
                            },
                            {
                                title: "Run Setup Wizard",
                                desc: "Double-click 'ReadLib_Setup.exe'. You may see a User Account Control prompt—click 'Yes' to proceed.",
                                icon: "User Account Control"
                            },
                            {
                                title: "Choose Location",
                                desc: "Select the destination folder. We recommend keeping the default: C:\\Program Files\\Read Your Lib."
                            },
                            {
                                title: "Complete Installation",
                                desc: "Click 'Install' and wait for the files to copy. Once finished, ensure 'Launch Read Your Lib' is checked and click 'Finish'."
                            }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6 md:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shrink-0">
                                        {i + 1}
                                    </div>
                                    {i < 3 && <div className="w-0.5 h-full bg-border mt-4" />}
                                </div>
                                <div className="pb-10">
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed max-w-lg mb-3">
                                        {step.desc}
                                    </p>
                                    {step.action}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Video Tutorial */}
                    <div className="my-16 p-8 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900 text-center">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-background shadow-lg text-red-500 mb-6 group cursor-pointer hover:scale-110 transition-transform">
                            <Video className="h-8 w-8 ml-1 group-hover:text-red-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Watch Video Tutorial</h3>
                        <p className="text-muted-foreground mb-6">Visual learner? Watch our 3-minute setup guide on YouTube.</p>
                        <Button className="gap-2 bg-red-600 hover:bg-red-700 text-white">
                            Watch on YouTube <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Common Errors */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <AlertTriangle className="h-6 w-6 text-amber-500" /> Troubleshooting
                        </h2>
                        <div className="space-y-4">
                            <Alert variant="destructive">
                                <AlertDescription>
                                    <strong>Error: ".NET Runtime Missing"</strong>
                                    <br />
                                    Fix: Download and install the .NET Desktop Runtime 6.0 from the official Microsoft site.
                                </AlertDescription>
                            </Alert>
                            <Alert>
                                <AlertDescription>
                                    <strong>Error: "Access Denied"</strong>
                                    <br />
                                    Fix: Right-click the installer and select "Run as Administrator".
                                </AlertDescription>
                            </Alert>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
