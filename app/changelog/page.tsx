"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitCommit, Tag, Sparkles, Wrench } from "lucide-react";

export default function ChangelogPage() {
    const changes = [
        {
            version: "v2.5.0",
            date: "October 24, 2025",
            type: "Major Release",
            features: [
                "New: Cloud Sync 2.0 with real-time database mirroring",
                "New: Mobile App API support",
                "Improvement: Faster search indexing algorithm (3x speedup)",
                "Fix: Resolved issue with barcode scanner latency on Windows 11"
            ]
        },
        {
            version: "v2.4.2",
            date: "September 10, 2025",
            type: "Patch",
            features: [
                "Fix: Fine calculation error for leap years",
                "Fix: PDF Report export crash on large datasets",
                "Improvement: UI accessibility enhancements for darker screens"
            ]
        },
        {
            version: "v2.4.0",
            date: "August 01, 2025",
            type: "Minor Release",
            features: [
                "New: Automated Email Notifications module",
                "New: Custom ID Card designer",
                "Improvement: Updated Student Portal dashboard"
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Changelog</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        See what's new, fixed, and improved in Read Your Lib.
                    </p>
                </div>
            </section>

            <section className="py-16 container mx-auto px-4 max-w-4xl">
                <div className="space-y-12">
                    {changes.map((change, i) => (
                        <div key={i} className="relative pl-8 md:pl-12 border-l border-border">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <Tag className="h-5 w-5 text-muted-foreground" />
                                    <h2 className="text-2xl font-bold">{change.version}</h2>
                                    <Badge variant={change.type === "Major Release" ? "default" : "secondary"}>
                                        {change.type}
                                    </Badge>
                                </div>
                                <span className="text-muted-foreground text-sm">{change.date}</span>
                            </div>

                            <Card>
                                <CardContent className="pt-6">
                                    <ul className="space-y-4">
                                        {change.features.map((feat, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                {feat.startsWith("New:") ? (
                                                    <Sparkles className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                                                ) : feat.startsWith("Fix:") ? (
                                                    <Wrench className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                                                ) : (
                                                    <GitCommit className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                                                )}
                                                <span className={feat.startsWith("Fix:") ? "text-muted-foreground" : ""}>
                                                    {feat}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
