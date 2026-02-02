"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter, Book, Barcode } from "lucide-react";

export default function BookManagementPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-background border-b">
                <div className="container px-4 text-center">
                    <Badge className="mb-4">Core Feature</Badge>
                    <h1 className="text-4xl font-bold mb-6">Advanced Book Management</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        The heart of Read Your Lib. Organize, track, and manage your entire collection with professional precision.
                    </p>
                </div>
            </section>

            <section className="py-20 container px-4 mx-auto">
                {/* Mock UI Representation */}
                <div className="rounded-xl border shadow-2xl overflow-hidden bg-card max-w-5xl mx-auto">
                    <div className="bg-muted/50 border-b p-4 flex items-center gap-4">
                        <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 text-center text-sm font-medium text-muted-foreground">Read Your Lib Dashboard - Book Manager</div>
                    </div>

                    <div className="p-6">
                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <input
                                    className="w-full h-10 pl-9 pr-4 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="Search by Title, Author, or ISBN..."
                                    disabled
                                />
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm"><Filter className="h-4 w-4 mr-2" /> Filters</Button>
                                <Button size="sm"><Plus className="h-4 w-4 mr-2" /> Add New Book</Button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3].map((row) => (
                                <div key={row} className="flex items-center gap-4 p-4 border rounded-lg bg-background hover:bg-muted/30 transition-colors">
                                    <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                                        <Book className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm">The Great Gatsby</h3>
                                        <p className="text-xs text-muted-foreground">F. Scott Fitzgerald • Classics</p>
                                    </div>
                                    <div className="hidden md:block text-sm">
                                        <span className="text-muted-foreground">ISBN:</span> 978-0743273565
                                    </div>
                                    <Badge variant={row === 2 ? "destructive" : "secondary"}>
                                        {row === 2 ? "Checked Out" : "Available"}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/20">
                <div className="container px-4 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "ISBN Management", desc: "Auto-fetch book details using ISBN numbers." },
                        { title: "Categorization", desc: "Organize by Dewey Decimal or custom categories." },
                        { title: "Status Tracking", desc: "Real-time availability updates instantly." },
                        { title: "Reservation System", desc: "Allow members to reserve books online." }
                    ].map((item, i) => (
                        <div key={i} className="bg-background p-6 rounded-xl border">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
