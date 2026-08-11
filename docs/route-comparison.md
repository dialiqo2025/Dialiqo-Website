# Dialiqo Route Comparison

Current Next.js project routes vs live WordPress site ([dialiqo.com](https://dialiqo.com/)).

**Generated:** 2026-08-07  
**Live source:** `https://dialiqo.com/wp-json/wp/v2/pages` (pages only; blog posts not included)  
**Current source:** `src/app/**/page.tsx` + `src/data/dialiqoData.ts` slugs

## Counts

| Source | Approx. count |
|--------|----------------|
| Current project concrete URLs | 80+ (static + all slugs; some redirect) |
| Live WP pages | 60 |
| Match / Related pairs | ~30 |
| Current only | Many tech / service / industry / case-study extras |
| Live only | Products, VoIP solution inners, hire pages, some QA/AI, migration, IT Expo |

## Legend

| Status | Meaning |
|--------|---------|
| Match | Same or near-same path |
| Related | Same topic; slug/path differs (often redirected in `liveRedirects.ts`) |
| Current only | Exists in Next; not in live WP pages list |
| Live only | Exists on dialiqo.com; no dedicated Next page yet |

> Legal pages (`privacy-policy`, etc.) may exist on live outside this WP pages dump.

---

## Master comparison table

| Current project route | Live website route | Status |
|---|---|---|
| `/` | `/` | Match |
| `/about` | `/about-us/` | Related |
| `/contact` | `/contact/` | Match |
| `/thank-you` | `/thank-you/` | Match |
| `/services` | `/services/` | Match |
| `/resources` | `/blog/` | Related |
| `/solutions` | `/voip-solution/` | Related |
| `/solutions` | `/products/` | Related |
| `/industries` | — | Current only |
| `/technologies` | — | Current only |
| `/privacy-policy` | — | Current only* |
| `/terms-conditions` | — | Current only* |
| `/cookie-policy` | — | Current only* |
| `/search` | — | Current only |
| `/careers` | — | Current only (redirects → `/about`) |
| `/case-studies` | — | Current only (redirects → `/resources`) |
| `/case-studies/[slug]` | — | Current only (redirects) |
| `/coming-soon` | — | Current only (redirects → `/`) |
| `/maintenance` | — | Current only (redirects → `/`) |
| `/services/voip-development` | `/services/voip/` | Related |
| `/services/ai-development` | `/services/ai-ml-development-services/` | Related |
| `/services/ai-chatbot-development` | `/services/ai-ml-development-services/chatbot-services/` | Related |
| `/services/ai-agent-development` | — | Current only |
| `/services/voice-ai-solutions` | `/services/ai-voicebot-connector/` | Related |
| `/services/web-development` | `/services/mobile-web/web-development/` | Related |
| `/services/mobile-app-development` | `/services/mobile-web/mobile-development/` | Related |
| `/services/flutter-development` | — | Current only |
| `/services/android-development` | — | Current only |
| `/services/ios-development` | — | Current only |
| `/services/react-development` | — | Current only |
| `/services/nextjs-development` | — | Current only |
| `/services/laravel-development` | — | Current only |
| `/services/nodejs-development` | — | Current only |
| `/services/devops` | `/services/devops-consulting-services/` | Related |
| `/services/cloud-engineering` | — | Current only |
| `/services/qa-testing` | `/services/qa-testing-services/` | Related |
| `/services/ui-ux-design` | — | Current only |
| `/services/staff-augmentation` | `/services/staff-augmentation/` | Match |
| `/services/software-consulting` | `/voip-consulting/` | Related |
| — | `/services/mobile-web/` | Live only |
| — | `/services/ai-ml-development-services/sentiment-analysis/` | Live only |
| — | `/services/ai-ml-development-services/face-recognition-solution/` | Live only |
| — | `/services/qa-testing-services/api-testing-services/` | Live only |
| — | `/services/qa-testing-services/qa-automation/` | Live only |
| — | `/services/qa-testing-services/voip-testing-services/` | Live only |
| `/technologies/freeswitch` | `/services/voip/freeswitch-development/` | Related |
| `/technologies/asterisk` | `/services/voip/asterisk/` | Related |
| `/technologies/kamailio` | `/services/voip/kamailio-development-services/` | Related |
| `/technologies/opensips` | `/services/voip/opensips/` | Related |
| `/technologies/react` | — | Current only |
| `/technologies/nextjs` | — | Current only |
| `/technologies/flutter` | — | Current only |
| `/technologies/laravel` | — | Current only |
| `/technologies/nodejs` | — | Current only |
| `/technologies/php` | — | Current only |
| `/technologies/python` | — | Current only |
| `/technologies/java` | — | Current only |
| `/technologies/dotnet` | — | Current only |
| `/technologies/docker` | — | Current only |
| `/technologies/kubernetes` | — | Current only |
| `/technologies/aws` | — | Current only |
| `/technologies/azure` | — | Current only |
| `/technologies/google-cloud` | — | Current only |
| `/technologies/openai` | — | Current only |
| `/technologies/claude` | — | Current only |
| `/technologies/gemini` | — | Current only |
| `/industries/healthcare` | `/voip-solutions-for-healthcare/` | Related |
| `/industries/finance` | `/voip-solutions-for-fintech/` | Related |
| `/industries/insurance` | `/voip-solutions-for-insurance/` | Related |
| `/industries/retail` | `/voip-solutions-for-ecommerce/` | Related |
| `/industries/education` | `/voip-solutions-for-education/` | Related |
| `/industries/telecommunications` | `/voip-solutions-for-telecom/` | Related |
| `/industries/logistics` | `/voip-solutions-for-logistics/` | Related |
| `/industries/real-estate` | `/voip-solutions-for-real-estate/` | Related |
| `/industries/hospitality` | `/voip-solutions-for-hotels/` | Related |
| `/industries/travel` | `/voip-solutions-for-travel-agencies/` | Related |
| `/industries/manufacturing` | — | Current only |
| `/industries/government` | — | Current only |
| `/industries/energy` | — | Current only |
| `/industries/construction` | — | Current only |
| `/industries/automotive` | — | Current only |
| — | `/voip-solutions-for-call-centers/` | Live only |
| — | `/voip-solutions-for-enterprises/` | Live only |
| — | `/voip-solutions-for-saas-companies/` | Live only |
| — | `/voip-solutions-for-recruitment/` | Live only |
| — | `/voip-solution/session-border-controller/` | Live only |
| — | `/voip-solution/webrtc-solutions/` | Live only |
| — | `/voip-solution/unified-communications-solutions/` | Live only |
| — | `/voip-solution/interactive-voice-response-solutions/` | Live only |
| — | `/voip-solution/class-4-softswitch-solution/` | Live only |
| — | `/voip-solution/class-5-softswitch-solutions/` | Live only |
| — | `/voip-solution/mobile-virtual-network-operator-solution/` | Live only |
| — | `/voip-solution/mvno-billing-solution/` | Live only |
| — | `/products/voip-billing-solution/` | Live only |
| — | `/products/contact-center-solutions/` | Live only |
| — | `/hire-voip-developers/` | Live only |
| — | `/hire-freeswitch-developers/` | Live only |
| — | `/hire-asterisk-developers/` | Live only |
| — | `/hire-kamailio-developers/` | Live only |
| — | `/hire-open-sips-developers/` | Live only |
| — | `/hire-webrtc-developers/` | Live only |
| — | `/voip-migration/` | Live only |
| — | `/itexpo-2025/` | Live only |
| `/resources/architecting-sub-300ms-voice-ai` | — | Current only |
| `/resources/kamailio-vs-opensips-enterprise-sbc` | — | Current only |
| `/resources/securing-enterprise-llm-rag-pipelines` | — | Current only |
| `/resources/carrier-grade-sip-ddos-mitigation-ebpf` | — | Current only |
| `/resources/webrtc-opus-codec-tuning-low-bandwidth` | — | Current only |
| `/resources/building-multi-tenant-telecom-saas-kubernetes` | — | Current only |
| `/case-studies/global-telecom-carrier-voip` | — | Current only |
| `/case-studies/healthcare-ai-patient-triage` | — | Current only |
| `/case-studies/fintech-sip-fraud-prevention` | — | Current only |
| `/case-studies/retail-supply-chain-ai` | — | Current only |

\*May exist on live outside the WP pages API response.

---

## All current project routes (inventory)

### Static
- `/`
- `/about`
- `/contact`
- `/thank-you`
- `/services`
- `/industries`
- `/solutions`
- `/resources`
- `/technologies`
- `/privacy-policy`
- `/terms-conditions`
- `/cookie-policy`
- `/search`
- `/careers` (redirect)
- `/case-studies` (redirect)
- `/coming-soon` (redirect)
- `/maintenance` (redirect)

### Services (`/services/[slug]`)
- `/services/voip-development`
- `/services/ai-development`
- `/services/ai-chatbot-development`
- `/services/ai-agent-development`
- `/services/voice-ai-solutions`
- `/services/web-development`
- `/services/mobile-app-development`
- `/services/flutter-development`
- `/services/android-development`
- `/services/ios-development`
- `/services/react-development`
- `/services/nextjs-development`
- `/services/laravel-development`
- `/services/nodejs-development`
- `/services/devops`
- `/services/cloud-engineering`
- `/services/qa-testing`
- `/services/ui-ux-design`
- `/services/staff-augmentation`
- `/services/software-consulting`

### Industries (`/industries/[slug]`)
- `/industries/healthcare`
- `/industries/finance`
- `/industries/insurance`
- `/industries/retail`
- `/industries/education`
- `/industries/telecommunications`
- `/industries/manufacturing`
- `/industries/logistics`
- `/industries/government`
- `/industries/travel`
- `/industries/real-estate`
- `/industries/hospitality`
- `/industries/energy`
- `/industries/construction`
- `/industries/automotive`

### Technologies (`/technologies/[slug]`)
- `/technologies/react`
- `/technologies/nextjs`
- `/technologies/flutter`
- `/technologies/laravel`
- `/technologies/nodejs`
- `/technologies/php`
- `/technologies/python`
- `/technologies/java`
- `/technologies/dotnet`
- `/technologies/docker`
- `/technologies/kubernetes`
- `/technologies/aws`
- `/technologies/azure`
- `/technologies/google-cloud`
- `/technologies/openai`
- `/technologies/claude`
- `/technologies/gemini`
- `/technologies/freeswitch`
- `/technologies/kamailio`
- `/technologies/opensips`
- `/technologies/asterisk`

### Resources (`/resources/[slug]`)
- `/resources/architecting-sub-300ms-voice-ai`
- `/resources/kamailio-vs-opensips-enterprise-sbc`
- `/resources/securing-enterprise-llm-rag-pipelines`
- `/resources/carrier-grade-sip-ddos-mitigation-ebpf`
- `/resources/webrtc-opus-codec-tuning-low-bandwidth`
- `/resources/building-multi-tenant-telecom-saas-kubernetes`

### Case studies (`/case-studies/[slug]`) — redirect away
- `/case-studies/global-telecom-carrier-voip`
- `/case-studies/healthcare-ai-patient-triage`
- `/case-studies/fintech-sip-fraud-prevention`
- `/case-studies/retail-supply-chain-ai`

---

## All live website routes (WP pages)

### Core
- `/`
- `/about-us/`
- `/contact/`
- `/thank-you/`
- `/blog/`
- `/services/`
- `/products/`
- `/voip-solution/`
- `/itexpo-2025/`

### Services hubs
- `/services/voip/`
- `/services/ai-ml-development-services/`
- `/services/devops-consulting-services/`
- `/services/qa-testing-services/`
- `/services/mobile-web/`
- `/services/staff-augmentation/`

### VoIP services
- `/services/voip/freeswitch-development/`
- `/services/voip/asterisk/`
- `/services/voip/kamailio-development-services/`
- `/services/voip/opensips/`

### AI / QA / Mobile-Web
- `/services/ai-ml-development-services/chatbot-services/`
- `/services/ai-ml-development-services/sentiment-analysis/`
- `/services/ai-ml-development-services/face-recognition-solution/`
- `/services/ai-voicebot-connector/`
- `/services/qa-testing-services/api-testing-services/`
- `/services/qa-testing-services/qa-automation/`
- `/services/qa-testing-services/voip-testing-services/`
- `/services/mobile-web/web-development/`
- `/services/mobile-web/mobile-development/`

### Hire
- `/hire-voip-developers/`
- `/hire-freeswitch-developers/`
- `/hire-asterisk-developers/`
- `/hire-kamailio-developers/`
- `/hire-open-sips-developers/`
- `/hire-webrtc-developers/`

### Consulting / migration
- `/voip-consulting/`
- `/voip-migration/`

### Products / VoIP solutions
- `/products/voip-billing-solution/`
- `/products/contact-center-solutions/`
- `/voip-solution/session-border-controller/`
- `/voip-solution/webrtc-solutions/`
- `/voip-solution/unified-communications-solutions/`
- `/voip-solution/interactive-voice-response-solutions/`
- `/voip-solution/class-4-softswitch-solution/`
- `/voip-solution/class-5-softswitch-solutions/`
- `/voip-solution/mobile-virtual-network-operator-solution/`
- `/voip-solution/mvno-billing-solution/`

### Industry landings
- `/voip-solutions-for-healthcare/`
- `/voip-solutions-for-fintech/`
- `/voip-solutions-for-insurance/`
- `/voip-solutions-for-ecommerce/`
- `/voip-solutions-for-education/`
- `/voip-solutions-for-telecom/`
- `/voip-solutions-for-logistics/`
- `/voip-solutions-for-real-estate/`
- `/voip-solutions-for-hotels/`
- `/voip-solutions-for-travel-agencies/`
- `/voip-solutions-for-call-centers/`
- `/voip-solutions-for-enterprises/`
- `/voip-solutions-for-saas-companies/`
- `/voip-solutions-for-recruitment/`

---

## Related files

- Redirects: `src/lib/liveRedirects.ts`
- Next config: `next.config.ts`
- Sitemap: `src/app/sitemap.ts`
- CSV export: `docs/route-comparison.csv`
