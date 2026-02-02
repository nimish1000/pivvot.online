"use client";

export default function TermsOfServicePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-muted-foreground">Last Updated: October 24, 2025</p>
                </div>
            </section>

            <section className="py-16 container mx-auto px-4 max-w-4xl">
                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground">
                            By accessing or using the Read Your Lib software ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">2. Software License</h2>
                        <p className="text-muted-foreground">
                            Subject to your compliance with these Terms, Read Your Lib grants you a limited, non-exclusive, non-transferable, non-sublicensable license to use the Software for your internal library management purposes.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                            <li>You may not reverse engineer, decompile, or disassemble the Software.</li>
                            <li>You may not rent, lease, or lend the Software to third parties without prior written consent.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
                        <p className="text-muted-foreground">
                            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">4. Payment and Subscription</h2>
                        <p className="text-muted-foreground">
                            Certain features of the Service may require payment of fees. All fees are non-refundable except as required by law. We reserve the right to change our pricing upon reasonable notice to you.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">5. Termination</h2>
                        <p className="text-muted-foreground">
                            We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                        <p className="text-muted-foreground">
                            In no event shall Read Your Lib, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
                        <p className="text-muted-foreground">
                            These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
                        <p className="text-muted-foreground">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
