import Image from "next/image";
import { ArrowRight, Building2, Users } from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { typo } from "@/lib/typography";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80";

export function HomeAbout() {
  return (
    <section
      className="about-section py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
      aria-labelledby="about-heading"
    >
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p
            className={`inline-flex items-center gap-2 ${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}
          >
            <Building2 className="w-4 h-4" aria-hidden="true" /> FREESWITCH,
            ASTERISK &amp; OPENSIPS SOLUTIONS
          </p>
          <h2
            id="about-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
          >
            Leading VoIP Development Company
          </h2>
          <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
            Dialiqo is a leading VoIP development company delivering custom VoIP
            software solutions using FreeSWITCH, Asterisk, Kamailio, and OpenSIPS
            for businesses worldwide. We specialize in scalable VoIP systems,
            carrier-grade solutions, and enterprise communication platforms,
            along with mobile and web development for seamless integration across
            devices. Our expertise includes QA services, VoIP testing, QA
            automation, and API testing to ensure high-performance and reliable
            systems. We also provide advanced AI and ML solutions, including
            sentiment analysis, AI chatbots, and AI voicebot connectors, to
            enhance customer engagement. Additionally, our DevOps services and
            staff augmentation help businesses scale efficiently with expert
            resources and smooth deployment processes.
          </p>
          <ServerLinkButton
            href="/contact"
            variant="primary"
            size="md"
            className="mt-8"
            icon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
          >
            GET IN TOUCH
          </ServerLinkButton>
        </div>

        <figure className="relative m-0">
          <div
            className="absolute -inset-4 bg-blue-500/10 rounded-4xl blur-2xl"
            aria-hidden="true"
          />
          <Image
            src={ABOUT_IMAGE}
            alt="Dialiqo engineering team collaborating on VoIP platforms"
            width={1200}
            height={900}
            className="relative rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl w-full object-cover aspect-4/3"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <figcaption className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs rounded-2xl bg-slate-950/90 backdrop-blur border border-white/10 p-4 text-white">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center"
                aria-hidden="true"
              >
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold">Enterprise Partner</p>
                <p className="text-xs text-slate-400">Voice · SIP · Cloud · AI</p>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
