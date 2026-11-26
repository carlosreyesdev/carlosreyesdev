import { getCollection, type CollectionEntry } from "astro:content"

export type Project = CollectionEntry<"projects">
export type ProjectStatus = Project["data"]["status"]

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  live: "Live",
  discontinued: "Discontinued",
  replaced: "Replaced",
}

export async function getProjects({ featured }: { featured?: boolean } = {}) {
  const projects = await getCollection("projects", ({ data }) =>
    featured ? data.featured : true,
  )
  return projects.sort((a, b) => a.data.order - b.data.order)
}

// The MDX template only ships a comment, so a body without anything else
// means the story has not been written yet
export function hasProjectStory(project: Project) {
  return !!project.body?.replace(/\{\/\*[\s\S]*?\*\/\}/g, "").trim()
}

export function getProjectHref(project: Project) {
  return `/projects/${project.id}`
}

const yearFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  timeZone: "UTC",
})

export function formatProjectPeriod({
  startDate,
  endDate,
  status,
}: Project["data"]) {
  if (!startDate) return null
  const start = yearFormatter.format(startDate)
  const end = endDate
    ? yearFormatter.format(endDate)
    : status === "live"
      ? "Present"
      : null
  return end && end !== start ? `${start} – ${end}` : start
}
