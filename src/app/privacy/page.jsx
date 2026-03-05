"use client";

import { PageTransition, SectionTransition } from "@/components/ui/PageTransition";
import { H1, H2, Body } from "@/components/ui/Typography";

export default function PrivacyPolicyPage() {
    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionTransition>
                        <H1 className="mb-4">Privacy Policy</H1>
                        <Body className="text-white/60 mb-12">
                            Last updated: March 2026
                        </Body>

                        <div className="space-y-12">
                            <section>
                                <Body className="text-white/80">
                                    At Skyradix, we respect your privacy. This website is designed mainly to provide information about our services and work.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">Information We Collect</H2>
                                <Body className="text-white/80 mb-4">
                                    We do not collect, store, or track personal information from visitors while browsing this website.
                                </Body>
                                <Body className="text-white/80">
                                    This website does not use cookies, analytics trackers, or advertising tracking technologies.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">Contact Information</H2>
                                <Body className="text-white/80 mb-4">
                                    If you choose to contact us through email, messaging platforms, or a contact form, you may voluntarily provide information such as your name, email address, or message content. This information will only be used to respond to your inquiry.
                                </Body>
                                <Body className="text-white/80">
                                    We do not sell, share, or distribute your personal information to third parties.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">External Links</H2>
                                <Body className="text-white/80">
                                    Our website may contain links to external websites or services. Once you leave our website, we are not responsible for the privacy practices of those websites.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">Updates to This Policy</H2>
                                <Body className="text-white/80">
                                    This Privacy Policy may be updated occasionally to reflect changes to the website or legal requirements. Any updates will be posted on this page.
                                </Body>
                            </section>

                            <section>
                                <H2 className="text-2xl mb-4">Contact</H2>
                                <Body className="text-white/80 mb-2">
                                    If you have any questions about this Privacy Policy, you can contact us at:
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
