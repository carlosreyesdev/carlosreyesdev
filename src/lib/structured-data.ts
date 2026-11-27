import { SAME_AS_LINKS } from "@/constants/links"
import { PROFILE } from "@/constants/profile"
import type { BreadcrumbList, Person, WithContext } from "schema-dts"

export function getPersonSchema(site: URL | undefined): Person {
  return {
    "@type": "Person",
    "@id": new URL("/#person", site).href,
    name: PROFILE.name,
    alternateName: PROFILE.nickname,
    jobTitle: PROFILE.title,
    image: new URL(PROFILE.photo.src, site).href,
    nationality: { "@type": "Country", name: PROFILE.country },
    email: PROFILE.email,
    telephone: PROFILE.phone,
    url: PROFILE.website,
    sameAs: SAME_AS_LINKS,
    knowsLanguage: PROFILE.languages.map((language) => language.code),
  }
}

export interface BreadcrumbEntry {
  name: string
  path: string
}

export function getBreadcrumbSchema(
  entries: BreadcrumbEntry[],
  site: URL | undefined,
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: new URL(path, site).href,
    })),
  }
}
