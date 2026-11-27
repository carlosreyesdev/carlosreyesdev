import GithubLogo from "@/components/icons/GithubLogo.astro"
import InstagramLogo from "@/components/icons/InstagramLogo.astro"
import LinkedinLogo from "@/components/icons/LinkedinLogo.astro"
import XLogo from "@/components/icons/XLogo.astro"
import { PROFILE } from "@/constants/profile"
import { parsePhoneNumber } from "@/lib/utils"
import {
  Globe,
  Mail,
  MessageCircle,
  Rss,
  type AstroComponent,
} from "@lucide/astro"

// Main navigation links for the site
export const NAVIGATION_LINKS = [
  {
    label: "Projects",
    href: "/projects/",
  },
  {
    label: "Links",
    href: "/links/",
  },
  {
    label: "Contact Me",
    href: "/#contact",
    asCTA: true,
  },
]

type ProfileLinkKind = "social" | "website" | "blog" | "contact"

export interface ProfileLink {
  name: string
  link: string
  icon: AstroComponent | typeof XLogo
  kind: ProfileLinkKind
  handle?: string
  subtitle?: string
  external?: boolean
}

const formatHandle = (handle: string) => `@${handle}`

// Central source of truth for all profile links
export const PROFILE_LINKS: ProfileLink[] = [
  {
    name: "Website",
    link: PROFILE.website,
    icon: Globe,
    kind: "website",
    subtitle: new URL(PROFILE.website).hostname,
    external: false,
  },
  {
    name: "Blog",
    link: "https://www.esquinadelcodigo.com",
    icon: Rss,
    kind: "blog",
    subtitle: "esquinadelcodigo.com",
    external: true,
  },
  {
    name: "GitHub",
    link: `https://github.com/${PROFILE.handles.github}`,
    icon: GithubLogo,
    kind: "social",
    handle: formatHandle(PROFILE.handles.github),
    external: true,
  },
  {
    name: "LinkedIn",
    link: `https://www.linkedin.com/in/${PROFILE.handles.linkedin}`,
    icon: LinkedinLogo,
    kind: "social",
    handle: formatHandle(PROFILE.handles.linkedin),
    external: true,
  },
  {
    name: "Instagram",
    link: `https://www.instagram.com/${PROFILE.handles.instagram}`,
    icon: InstagramLogo,
    kind: "social",
    handle: formatHandle(PROFILE.handles.instagram),
    external: true,
  },
  {
    name: "X",
    link: `https://x.com/${PROFILE.handles.x}`,
    icon: XLogo,
    kind: "social",
    handle: formatHandle(PROFILE.handles.x),
    external: true,
  },
  {
    name: "Email",
    link: `mailto:${PROFILE.email}`,
    icon: Mail,
    kind: "contact",
    handle: PROFILE.email,
    external: false,
  },
  {
    name: "WhatsApp",
    link: `https://wa.me/${parsePhoneNumber(PROFILE.phone)}`,
    icon: MessageCircle,
    kind: "contact",
    handle: PROFILE.phone,
    external: true,
  },
]

// Used for social buttons
export const SOCIAL_LINKS = PROFILE_LINKS.filter(
  (link) => link.kind === "social",
)

// Used for JSON-LD "sameAs" property: other profiles of the same person, so
// the site itself (already the Person "url") and contact links are left out
export const SAME_AS_LINKS = PROFILE_LINKS.filter(
  (link) => link.kind === "social" || link.kind === "blog",
).map((link) => link.link)
