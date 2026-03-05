"use client";

import { PageTransition, SectionTransition } from "@/components/ui/PageTransition";
import { H1, H2, Body } from "@/components/ui/Typography";

export default function TermsOfServicePage() {
    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionTransition>
                        <H1 className="mb-4">Terms of Service</H1>
                        <Body className="text-white/60 mb-12">
                            Last updated: March 2026
                        </Body>

                        <div className="space-y-12">
                            <section>
                                <Body className="text-white/80">
                                    Welcome to the Skyradix website. By accessing or using this website, you agree to the following terms and conditions.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">Use of the Website</H2>
                                <Body className="text-white/80 mb-4">
                                    This website is provided for general information about Skyradix, our services, and our work. By using this website, you agree to use it only for lawful purposes and in a way that does not harm, disrupt, or interfere with the website or its content.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">Intellectual Property</H2>
                                <Body className="text-white/80 mb-4">
                                    All content on this website, including text, graphics, designs, logos, and project materials, is the property of Skyradix unless otherwise stated.
                                </Body>
                                <Body className="text-white/80">
                                    You may not copy, reproduce, distribute, or use any content from this website without prior written permission from Skyradix.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">Information Accuracy</H2>
                                <Body className="text-white/80 mb-4">
                                    We aim to keep the information on this website accurate and up to date. However, we do not guarantee that all information is always complete, current, or free of errors.
                                </Body>
                                <Body className="text-white/80">
                                    The content on this website is provided for general informational purposes only.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">External Links</H2>
                                <Body className="text-white/80">
                                    This website may contain links to external websites or third-party services. These links are provided for convenience only. Skyradix is not responsible for the content, policies, or practices of external websites.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">Limitation of Liability</H2>
                                <Body className="text-white/80">
                                    Skyradix will not be held responsible for any direct or indirect damages resulting from the use of this website or reliance on the information provided on it.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">Changes to These Terms</H2>
                                <Body className="text-white/80">
                                    We may update these Terms of Service from time to time. Updates will be posted on this page with the revised date.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">Contact</H2>
                                <Body className="text-white/80 mb-2">
                                    If you have any questions about these Terms of Service, please contact us:
                                </Body>
                                <Body className="text-white">
                                    Email: <a href="mailto:skyradixsolutions@gmail.com" className="text-accent-cyan hover:underline">skyradixsolutions@gmail.com</a>
                                </Body>
                            </section>
                        </div>
                    </SectionTransition>
                </div>
            </div>
        </PageTransition>
    );
}
