"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

export default function TestimonialsPage() {
    const reviews = [
        {
            name: "Emily Clark",
            role: "School Librarian",
            rating: 5,
            text: "Read Your Lib transformed how we manage our school library. The student portal is a game changer - kids actually want to search for books now!"
        },
        {
            name: "James Wilson",
            role: "IT Administrator",
            rating: 5,
            text: "Installation was incredibly smooth. We went with the On-Premise version for security reasons, and it runs perfectly on our internal server."
        },
        {
            name: "Sarah Patel",
            role: "University Dean",
            rating: 5,
            text: "The reporting features give us exactly the data we need for accreditation. Highly recommended for higher education institutions."
        },
        {
            name: "Michael Chang",
            role: "Public Library Director",
            rating: 4,
            text: "Great value for money. The support team is very responsive to our feature requests. The new cloud sync is flawless."
        },
        {
            name: "Lisa Johnson",
            role: "Volunteer Librarian",
            rating: 5,
            text: "I'm not very technical, but I learned Read Your Lib in one afternoon. It's so user-friendly and intuitive."
        },
        {
            name: "Robert Fox",
            role: "College Principal",
            rating: 5,
            text: "Efficient, modern, and affordable. It checked all our boxes for a library management system update."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-background">
                <div className="container px-4 mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold mb-6">Trusted by Librarians Worldwide</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our community has to say about Read Your Lib.
                    </p>
                </div>

                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, i) => (
                            <Card key={i} className="bg-card hover:shadow-lg transition-shadow border-muted">
                                <CardHeader>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="italic text-muted-foreground mb-6 min-h-[80px]">"{review.text}"</p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <User className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-bold">{review.name}</div>
                                            <div className="text-xs text-muted-foreground">{review.role}</div>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
