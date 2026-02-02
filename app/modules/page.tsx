"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Book, GraduationCap, Box, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ModulesPage() {
    const [activeTab, setActiveTab] = useState("admin");

    const modules = [
        {
            id: "admin",
            label: "Admin",
            icon: <Shield className="h-5 w-5" />,
            title: "Administrator Module",
            desc: "Complete control over the system configuration, user roles, and global settings.",
            features: ["User Role Management", "System Configuration", "Data Backup & Restore", "Audit Logs"]
        },
        {
            id: "librarian",
            label: "Librarian",
            icon: <Book className="h-5 w-5" />,
            title: "Librarian Module",
            desc: "The daily driver for library staff. Manage circulation, cataloging, and member interactions.",
            features: ["Issue / Return Desk", "Catalog Management", "Fine Collection", "Member Registration"]
        },
        {
            id: "student",
            label: "Student/Member",
            icon: <GraduationCap className="h-5 w-5" />,
            title: "Member Portal",
            desc: "Self-service portal for students and members to search books and manage their account.",
            features: ["Search OPAC", "Reserve Books", "View Borrowing History", "Pay Fines Online"]
        },
        {
            id: "inventory",
            label: "Inventory",
            icon: <Box className="h-5 w-5" />,
            title: "Inventory Module",
            desc: "Keep track of physical assets, stock verification, and purchase orders.",
            features: ["Stock Verification", "Purchase Orders", "Vendor Management", "Lost/Damaged Tracking"]
        },
        {
            id: "reporting",
            label: "Reporting",
            icon: <FileText className="h-5 w-5" />,
            title: "Reporting Module",
            desc: "Analytics engine to generate visual reports on library usage and inventory health.",
            features: ["Circulation Reports", "Fine Collection Reports", "Most Issued Books", "Member Activity Logs"]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary text-primary-foreground py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">System Modules</h1>
                    <p className="opacity-90 max-w-2xl mx-auto text-lg">
                        Read Your Lib is modular by design. Activate what you need, when you need it.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Tabs */}
                    <div className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 md:w-1/4 min-w-[250px]">
                        {modules.map((mod) => (
                            <Button
                                key={mod.id}
                                variant={activeTab === mod.id ? "default" : "ghost"}
                                onClick={() => setActiveTab(mod.id)}
                                className="justify-start gap-3 h-12 text-base"
                            >
                                {mod.icon} {mod.label}
                            </Button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {modules.map((mod) => (
                                mod.id === activeTab && (
                                    <motion.div
                                        key={mod.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Card>
                                            <CardHeader>
                                                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                                                    {mod.icon}
                                                </div>
                                                <CardTitle className="text-2xl">{mod.title}</CardTitle>
                                                <CardDescription className="text-lg">{mod.desc}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <h4 className="font-semibold mb-4">Key Capabilities:</h4>
                                                <ul className="grid sm:grid-cols-2 gap-4">
                                                    {mod.features.map((feat, i) => (
                                                        <li key={i} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                                                            <div className="h-2 w-2 rounded-full bg-primary" />
                                                            {feat}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
}
