# Dialiqo — Content Review (Flagged Items)

**Date**: 2026-08-11

These content items appear in the codebase and should be reviewed for accuracy before production launch. No content was modified — this is a review-only document.

---

## Items to Verify

| Location | Content | Concern |
|----------|---------|---------|
| Footer | "500 Howard Street, Suite 800, San Francisco, CA 94105" | Verify this is the actual business address |
| Footer | "+1 (415) 890-3400" | Verify this is the actual phone number |
| Footer | "sf@dialiqo.com" | Verify this email exists and is monitored |
| Footer | "99.999% SLA" | Verify this SLA is contractually offered |
| JSON-LD (seo.ts) | `telephone: "+1-415-890-3400"` | Must match real number |
| JSON-LD (seo.ts) | `email: "contact@dialiqo.com"` | Verify this email is active |
| JSON-LD (seo.ts) | `github.com/dialiqo`, `linkedin.com/company/dialiqo` | Verify these profiles exist |
| Homepage hero | "sub-300ms Voice AI" | Verify this latency claim is accurate |
| Homepage stats | "99.999% Platform Uptime" | Verify this is documented/measurable |
| Homepage stats | "48-hour senior engineer onboarding" | Verify this is a real offering |
| Trust Badges | SOC 2, HIPAA, PCI-DSS, ISO 27001 | Verify certifications are current |
| Testimonials | All client testimonials in `dialiqoData.ts` | Verify consent obtained from quoted individuals |
| Case studies | Client names and results | Verify permission to use and accuracy of metrics |
| Job listings | Positions in `JOB_OPENINGS` | Verify these are currently active |
| Leadership | Team members in `LEADERSHIP` | Verify current employees |

---

## Recommendations

1. **Remove or update** any claims that are no longer accurate
2. **Obtain written permission** for all client testimonials and case studies
3. **Verify certifications** are current and correctly represented
4. **Test all contact information** (phone, email) is reachable
5. **Confirm social profiles** exist and are branded
