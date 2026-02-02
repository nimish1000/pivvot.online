"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-muted/20">
                <div className="container px-4 mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about Read Your Lib.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-semibold">Is Read Your Lib really free to try?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                Yes! We offer a full-featured 30-day trial for our Premium Cloud plan. Our open-source basic version is free forever for personal use.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-semibold">What is the difference between Cloud and On-Premise?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                <strong>Cloud (SaaS):</strong> We host the data securely. You can access it from anywhere via a browser or our app. Best for multi-branch libraries or those without IT teams.<br /><br />
                                <strong>On-Premise:</strong> You install the software on your own local server. You have full control over data but are responsible for backups and hardware maintenance.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-semibold">Can I migrate data from my old system?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                Absolutely. Read Your Lib supports extensive CSV/Excel import tools. We also offer white-glove migration services for Enterprise plans.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg font-semibold">Do you support RFID and Barcode scanners?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                Yes, we are compatible with most standard USB barcode scanners and UHF RFID readers. No special drivers are usually required.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-lg font-semibold">Is my library data secure?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                Security is our top priority. We use AES-256 encryption for database storage and TLS 1.3 for all data transmission. We conduct regular security audits to ensure compliance.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="mt-16 text-center border-t pt-10">
                        <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                        <Link href="/support">
                            <Button>Contact Support</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
