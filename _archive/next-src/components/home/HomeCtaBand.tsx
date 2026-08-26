import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { typo } from "@/lib/typography";

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80";

export function HomeCtaBand() {
  return (
    <section
      className="cta-section relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <Image
        src={CTA_IMAGE}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-slate-950/80" aria-hidden="true" />
      <div className="container relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-slate-300">
          Drop us a line! We are here to answer your questions 24/7
        </p>
        <h2 id="cta-heading" className={`mt-4 ${typo.sectionTitle} text-white`}>
          Your Go-To VoIP Development Company
        </h2>
        <ServerLinkButton
          href="/contact"
          variant="glow"
          size="lg"
          className="mt-8"
          icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
        >
          GET IN TOUCH
        </ServerLinkButton>
      </div>
    </section>
  );
}
