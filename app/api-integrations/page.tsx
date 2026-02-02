"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code2, Database, Key, Server, Webhook, Lock } from "lucide-react";

export default function ApiIntegrationsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 text-slate-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <Badge variant="outline" className="border-slate-600 text-slate-400 mb-4 px-3 py-1">Developer Zone</Badge>
                    <h1 className="text-4xl font-bold mb-6">API & Integrations</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Extend Read Your Lib's capabilities. Connect with ERPs, Student Information Systems, and custom applications via our REST API.
                    </p>
                    <div className="mt-8">
                        <Button variant="secondary" size="lg">Read API Documentation</Button>
                    </div>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <Code2 className="h-8 w-8 text-primary mb-2" />
                            <CardTitle>RESTful API</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                Standard JSON REST API endpoints for accessing books, members, and circulation data securely.
                            </p>
                            <div className="mt-4 p-3 bg-muted rounded font-mono text-xs overflow-x-auto">
                                GET /api/v1/books/{'{isbn}'}<br />
                                POST /api/v1/members/issue
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <Database className="h-8 w-8 text-primary mb-2" />
                            <CardTitle>ERP Sync</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                Pre-built connectors for major School ERPs (Canvas, PowerSchool, Blackboard) to sync student data automatically.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <Server className="h-8 w-8 text-primary mb-2" />
                            <CardTitle>Hardware SDK</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                Drivers and SDKs for integrating barcode scanners, RFID readers, and receipt printers directly with the web app.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-20 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Security First</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex gap-4 p-6 border rounded-xl">
                            <Key className="h-8 w-8 text-primary shrink-0" />
                            <div>
                                <h3 className="font-bold mb-2">API Keys & OAuth 2.0</h3>
                                <p className="text-sm text-muted-foreground">Authenticate securely using industry-standard protocols. Rotate keys with zero downtime.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 border rounded-xl">
                            <Lock className="h-8 w-8 text-primary shrink-0" />
                            <div>
                                <h3 className="font-bold mb-2">End-to-End Encryption</h3>
                                <p className="text-sm text-muted-foreground">All data in transit is encrypted via TLS 1.3. Webhooks are signed for verification.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
