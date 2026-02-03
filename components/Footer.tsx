import Link from "next/link";
import { Zap, MapPin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border mt-20">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Zap className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold">Pivvot</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Innovative solutions platform focused on cutting-edge technology and modern business needs.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/product" className="hover:text-primary transition-colors">Overview</Link></li>
                            <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/modules" className="hover:text-primary transition-colors">Modules</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/book-management" className="hover:text-primary transition-colors">Book Management</Link></li>
                            <li><Link href="/download" className="hover:text-primary transition-colors">Download Center</Link></li>
                        </ul>
                    </div>

                    {/* Company & Social Proof */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link href="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
                            <li><Link href="/security" className="hover:text-primary transition-colors">Security</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Resources & Support */}
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/support" className="hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/installation-guide" className="hover:text-primary transition-colors">Installation Guide</Link></li>
                            <li><Link href="/system-requirements" className="hover:text-primary transition-colors">System Requirements</Link></li>
                            <li><Link href="/api-integrations" className="hover:text-primary transition-colors">API & Integrations</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-primary" />
                                <a href="mailto:support@pivvot.online" className="hover:text-primary transition-colors">support@pivvot.online</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                                <span>18, 207 Regent Street,<br />London, United Kingdom,<br />W1B 3HH</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border mt-12 pt-8 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Pivvot. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
