"use client";

import { CheckCircle2, Lock, ShieldCheck, Database } from "lucide-react";

export default function SecurityPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-slate-950 text-white">
                <div className="container px-4 mx-auto text-center">
                    <ShieldCheck className="h-16 w-16 mx-auto text-green-400 mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Security First. Always.</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        We protect your library's data with enterprise-grade security layers.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 max-w-5xl">
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Lock className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
                                <p className="text-muted-foreground">
                                    All data is encrypted in transit using TLS 1.3 and at rest using AES-256 standards. Your sensitive member information is never exposed.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Database className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Automated Backups</h3>
                                <p className="text-muted-foreground">
                                    Our cloud systems perform hourly incremental backups and daily full backups, replicated across multiple geographic regions for redundancy.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">GDPR & Privacy Compliance</h3>
                                <p className="text-muted-foreground">
                                    Read Your Lib is fully compliant with GDPR and CCPA regulations. We provide tools for you to manage consent and data deletion requests easily.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-6">Security Checklist</h3>
                        <ul className="space-y-4">
                            {[
                                "SOC 2 Type II Certified Data Centers",
                                "Regular Third-Party Penetration Testing",
                                "Role-Based Access Control (RBAC)",
                                "2-Factor Authentication (2FA) Support",
                                "Audit Logs for all Sensitive Actions",
                                "99.99% Uptime SLA"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
