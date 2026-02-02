"use client";

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last Updated: October 24, 2025</p>
                </div>
            </section>

            <section className="py-16 container mx-auto px-4 max-w-4xl">
                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <p className="lead">
                        At Read Your Lib, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our library management software and services.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li><strong>Account Information:</strong> When you register for Read Your Lib, we collect your name, institution name, email address, and payment information.</li>
                            <li><strong>Usage Data:</strong> We may collect data on how the software is accessed and used.</li>
                            <li><strong>Library Data:</strong> Book records, member details, and transaction logs stored within your Read Your Lib instance are <strong>your property</strong>. In our Cloud version, this data is encrypted and stored securely. We do not sell or analyze your library's private data for advertising purposes.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>To provide, maintain, and improve our services.</li>
                            <li>To process transactions and send related information, such as confirmations and invoices.</li>
                            <li>To send technical notices, updates, security alerts, and support messages.</li>
                            <li>To comply with legal obligations.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
                        <p className="text-muted-foreground">
                            We implement industry-standard security measures to protect your data, including encryption in transit (TLS) and at rest. Access to your personal information is restricted to authorized Read Your Lib employees who need it to perform their jobs.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
                        <p className="text-muted-foreground">
                            We may use third-party service providers (e.g., payment processors like Stripe, cloud hosting like AWS) to help us operate our business. These parties have access to your personal information only to perform specific tasks on our behalf and are obligated to protect your data.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                        <p className="text-muted-foreground">
                            Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your data. To exercise these rights, please contact us at privacy@readyourlib.com.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us:
                            <br /><br />
                            <strong>Read Your Lib Privacy Team</strong><br />
                            18, 207 Regent Street, London, W1B 3HH, UK<br />
                            Email: privacy@readyourlib.com
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
