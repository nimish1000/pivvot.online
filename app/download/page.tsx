"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Monitor, Apple, Terminal, ArrowRight, FileQuestion } from "lucide-react";

export default function DownloadPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-20">
                <div className="container mx-auto px-4 text-center">
                    <Badge className="mb-4">Version 2.5.0 Now Available</Badge>
                    <h1 className="text-4xl font-bold mb-6">Download Read Your Lib</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get the latest version of the smartest library management software for your operating system.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="flex flex-col items-center justify-center">
                    {/* Windows */}
                    <Card className="border-2 border-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                            RECOMMENDED
                        </div>
                        <CardHeader className="text-center pb-2">
                            <div className="mx-auto bg-blue-100 dark:bg-blue-900/20 p-4 rounded-full mb-4">
                                <Monitor className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <CardTitle>Windows</CardTitle>
                            <CardDescription>Windows 10, 11 (64-bit)</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <div className="text-sm text-muted-foreground">
                                <p>Version: 2.5.0</p>
                                <p>Size: 145 MB</p>
                                <p>Released: Oct 24, 2025</p>
                            </div>
                            <Link href="/download/windows" className="block">
                                <Button className="w-full gap-2">
                                    <Download className="h-4 w-4" /> Download for Windows
                                </Button>
                            </Link>
                            <Link href="/installation-guide" className="text-xs text-primary hover:underline block">
                                Installation Guide
                            </Link>
                        </CardContent>
                    </Card>

                    {/* macOS */}
                    {/* <Card className="opacity-90 hover:opacity-100 transition-opacity">
                        <CardHeader className="text-center pb-2">
                            <div className="mx-auto bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-4">
                                <Apple className="h-8 w-8 text-foreground" />
                            </div>
                            <CardTitle>macOS</CardTitle>
                            <CardDescription>macOS 12+ (Intel & Apple Silicon)</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <div className="text-sm text-muted-foreground">
                                <p>Version: 2.5.0</p>
                                <p>Size: 142 MB</p>
                                <p>Released: Oct 24, 2025</p>
                            </div>
                            <Button variant="outline" className="w-full gap-2" disabled>
                                <Download className="h-4 w-4" /> Coming Soon
                            </Button>
                            <span className="text-xs text-muted-foreground block">
                                Join waitlist for macOS beta
                            </span>
                        </CardContent>
                    </Card> */}

                    {/* Linux */}
                    {/* <Card className="opacity-90 hover:opacity-100 transition-opacity">
                        <CardHeader className="text-center pb-2">
                            <div className="mx-auto bg-orange-100 dark:bg-orange-900/20 p-4 rounded-full mb-4">
                                <Terminal className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                            </div>
                            <CardTitle>Linux</CardTitle>
                            <CardDescription>Ubuntu, Debian, Fedora</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <div className="text-sm text-muted-foreground">
                                <p>Version: 2.5.0</p>
                                <p>Size: 138 MB</p>
                                <p>Released: Oct 24, 2025</p>
                            </div>
                            <Button variant="outline" className="w-full gap-2">
                                <Download className="h-4 w-4" /> Download .deb
                            </Button>
                            <Link href="/installation-guide" className="text-xs text-primary hover:underline block">
                                Installation Guide
                            </Link>
                        </CardContent>
                    </Card> */}
                </div>
            </section>

            <section className="bg-secondary/20 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-8">Need Help?</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/system-requirements">
                            <Button variant="ghost" className="h-auto py-4 px-6 border bg-background hover:bg-muted">
                                <div className="flex flex-col items-center gap-2">
                                    <Monitor className="h-6 w-6" />
                                    <span className="font-semibold">System Requirements</span>
                                </div>
                            </Button>
                        </Link>
                        <Link href="/installation-guide">
                            <Button variant="ghost" className="h-auto py-4 px-6 border bg-background hover:bg-muted">
                                <div className="flex flex-col items-center gap-2">
                                    <FileQuestion className="h-6 w-6" />
                                    <span className="font-semibold">Installation Guide</span>
                                </div>
                            </Button>
                        </Link>
                        <Link href="/changelog">
                            <Button variant="ghost" className="h-auto py-4 px-6 border bg-background hover:bg-muted">
                                <div className="flex flex-col items-center gap-2">
                                    <ArrowRight className="h-6 w-6" />
                                    <span className="font-semibold">Changelog</span>
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
