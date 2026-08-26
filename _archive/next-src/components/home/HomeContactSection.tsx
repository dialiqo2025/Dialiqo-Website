import { HomeContactForm } from "@/components/home/HomeContactForm";
import { typo } from "@/lib/typography";

export function HomeContactSection() {
  return (
    <section
      className="contact-section py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
      aria-labelledby="contact-heading"
    >
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            id="contact-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
          >
            Ready To Get Started?
          </h2>
          <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
            With decades of experience and deep expertise in VoIP, mobile, and
            web development, Dialiqo builds future-proof, intuitive, and highly
            scalable solutions that empower businesses worldwide. From custom VoIP
            software development using FreeSWITCH, Asterisk, Kamailio, and
            OpenSIPS to mobile applications, web platforms, and enterprise
            communication systems, we deliver technology that drives real business
            outcomes. Our team also specializes in QA testing, automation, API
            testing, AI-powered chatbots, sentiment analysis, AI voicebot
            connectors, DevOps, and staff augmentation services, ensuring reliable
            performance and smooth scalability. Partner with Dialiqo to transform
            your business with next-gen, tech-empowered solutions designed for
            growth.
          </p>
        </div>

        <HomeContactForm />
      </div>
    </section>
  );
}
