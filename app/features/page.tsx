"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    BookOpen, Users, RotateCcw, Banknote, BarChart,
    ScanLine, Building2, Bell
} from "lucide-react";

export default function FeaturesPage() {
    const features = [
        {
            icon: <BookOpen className="h-8 w-8 text-primary" />,
            title: "Book Management",
            desc: "Complete cataloging system with ISBN support, categories, author management, and custom tagging."
        },
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: "Member Management",
            desc: "Track student and staff profiles, membership validity, and borrowing history in one secure database."
        },
        {
            icon: <RotateCcw className="h-8 w-8 text-primary" />,
            title: "Issue & Return Tracking",
            desc: "Streamlined circulation process. Issue books in seconds and handle returns with automatic status updates."
        },
        {
            icon: <Banknote className="h-8 w-8 text-primary" />,
            title: "Fine Management",
            desc: "Automated fine calculation for overdue books. configure rates per day and manage payment records."
        },
        {
            icon: <BarChart className="h-8 w-8 text-primary" />,
            title: "Reports & Analytics",
            desc: "Generate detailed reports on circulation trends, popular books, and overdue assets to make informed decisions."
        },
        {
            icon: <ScanLine className="h-8 w-8 text-primary" />,
            title: "Barcode & RFID",
            desc: "Integrated support for barcode scanners and RFID systems for faster checkout and inventory audits."
        },
        {
            icon: <Building2 className="h-8 w-8 text-primary" />,
            title: "Multi-Branch Support",
            desc: "Manage multiple library branches from a central admin panel. Transfer books between locations easily."
        },
        {
            icon: <Bell className="h-8 w-8 text-primary" />,
            title: "Automated Notifications",
            desc: "Send email or SMS reminders to members for due dates, reservations, and overdue items."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-muted/20">
                <div className="container mx-auto px-4 text-center">
                    <Badge variant="outline" className="mb-4">Powerful Capabilities</Badge>
                    <h1 className="text-4xl font-bold mb-6">Features that Empower Librarians</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Every tool you need to run an efficient, modern library.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <Card key={i} className="hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                                <CardHeader>
                                    <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                                        {f.icon}
                                    </div>
                                    <CardTitle>{f.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{f.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
