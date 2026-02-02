"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; // Need to check if Table component exists, if not I'll just use divs or create it.
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Monitor, HardDrive, Cpu, Network } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SystemRequirementsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">System Requirements</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Ensure optimum performance by meeting the recommended hardware and software specifications.
                    </p>
                </div>
            </section>

            <section className="py-16 container mx-auto px-4 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card>
                        <CardHeader className="bg-primary/5 pb-4">
                            <CardTitle className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <Monitor className="h-5 w-5" />
                                </span>
                                Hardware Specs
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Cpu className="h-4 w-4 text-muted-foreground" /> Processor</h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="p-3 bg-muted/20 rounded-lg border">
                                            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Minimum</span>
                                            <span className="font-medium">Intel Core i3 / AMD Ryzen 3</span>
                                            <span className="block text-xs text-muted-foreground mt-1">2.5 GHz or faster</span>
                                        </div>
                                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                                            <span className="block text-green-700 dark:text-green-400 text-xs uppercase tracking-wider mb-1">Recommended</span>
                                            <span className="font-medium">Intel Core i5 / AMD Ryzen 5</span>
                                            <span className="block text-xs text-muted-foreground mt-1">3.0 GHz+ (Quad Core)</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><HardDrive className="h-4 w-4 text-muted-foreground" /> RAM & Storage</h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="p-3 bg-muted/20 rounded-lg border">
                                            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Minimum</span>
                                            <span className="font-medium">4 GB RAM</span>
                                            <span className="block text-xs text-muted-foreground mt-1">2 GB Free Space</span>
                                        </div>
                                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                                            <span className="block text-green-700 dark:text-green-400 text-xs uppercase tracking-wider mb-1">Recommended</span>
                                            <span className="font-medium">8 GB+ RAM</span>
                                            <span className="block text-xs text-muted-foreground mt-1">SSD Storage</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="bg-primary/5 pb-4">
                            <CardTitle className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <Monitor className="h-5 w-5" />
                                </span>
                                Software & Network
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Operating System</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Windows 11 / 10 (version 1809+)</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Windows Server 2019 / 2022</li>
                                        <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> Windows 7 / 8.1 (Not Supported)</li>
                                    </ul>
                                </div>

                                <div className="pt-4 border-t">
                                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Network className="h-4 w-4 text-muted-foreground" /> Network</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Broadband Internet (for Cloud Sync)</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> LAN (for multi-PC access)</li>
                                        <li className="flex items-center gap-2"><Badge variant="outline">Port 80/443</Badge> Open for API access</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
