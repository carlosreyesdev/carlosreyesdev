import type { ComponentProps } from "react"
import { Anchor } from "../ui/anchor"
import { Separator } from "../ui/separator"
import { Typography, type TypographyProps } from "../ui/typography"

type ElementProps = Omit<TypographyProps, "variant">

// Maps the HTML produced by MDX to the site's typography components.
// Headings are shifted one size down because the page already owns the h1.
export const projectContentComponents = {
  h2: (props: ElementProps) => (
    <Typography variant="h3" as="h2" className="mt-12 mb-4" {...props} />
  ),
  h3: (props: ElementProps) => (
    <Typography variant="h4" as="h3" className="mt-8 mb-3" {...props} />
  ),
  p: (props: ElementProps) => (
    <Typography variant="p" className="mb-6" {...props} />
  ),
  blockquote: (props: ElementProps) => (
    <Typography variant="blockquote" className="mb-6" {...props} />
  ),
  ul: (props: ElementProps) => <Typography variant="ul" {...props} />,
  ol: (props: ElementProps) => <Typography variant="ol" {...props} />,
  a: (props: ComponentProps<"a">) => {
    const external = props.href?.startsWith("http")
    return (
      <Anchor
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...props}
      />
    )
  },
  hr: () => <Separator className="my-12" />,
}
