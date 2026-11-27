import type { ComponentProps } from "react"
import { cn, isExternalHref } from "../../lib/utils"
import { NewTabHint } from "../new-tab-hint"
import { Anchor } from "../ui/anchor"
import { Checkbox } from "../ui/checkbox"
import { Separator } from "../ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Typography, type TypographyProps } from "../ui/typography"
import ProjectContentImage from "./ProjectContentImage.astro"

type ElementProps = Omit<TypographyProps, "variant">

// Nested lists sit closer to their parent item than top-level lists
const nestedList = "[li_&]:my-2"

// Maps the HTML produced by MDX to the site's typography components.
// MDX does not pass the classes added by Markdown plugins (task lists,
// footnotes), so those elements are targeted by their attributes or content.
export const projectContentComponents = {
  h2: ({ className, ...props }: ElementProps) => (
    <Typography
      variant="h2"
      className={cn(
        "mt-12 mb-4 lg:text-4xl",
        props.id === "footnote-label" && "sr-only",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ElementProps) => (
    <Typography
      variant="h3"
      className={cn("mt-8 mb-3", className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ElementProps) => (
    <Typography
      variant="h4"
      className={cn("mt-6 mb-2", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: ElementProps) => (
    <Typography variant="p" className={cn("mb-6", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ElementProps) => (
    <Typography
      variant="blockquote"
      className={cn("mb-6 [&>p:last-child]:mb-0", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ElementProps) => (
    <Typography
      variant="ul"
      className={cn(
        nestedList,
        "[&:has(>li>[role=checkbox])]:ml-0 [&:has(>li>[role=checkbox])]:list-none",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: ElementProps) => (
    <Typography variant="ol" className={cn(nestedList, className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentProps<"li">) => (
    <li
      className={cn(
        "[&:has(>[role=checkbox])]:pl-7 [&:has(>[role=checkbox])]:-indent-7",
        className,
      )}
      {...props}
    />
  ),
  // Task list items are read-only, so the checkbox is only a visual cue and
  // screen readers get the state as text before the item instead
  input: ({ type, checked, ...props }: ComponentProps<"input">) =>
    type === "checkbox" ? (
      <>
        <Checkbox
          checked={checked}
          disabled
          aria-hidden="true"
          className="-mt-1 mr-2 inline-grid place-content-center rounded-none indent-0 align-middle disabled:cursor-default disabled:opacity-100"
        />
        <span className="sr-only">{checked ? "Done:" : "Pending:"}</span>
      </>
    ) : (
      <input type={type} checked={checked} {...props} />
    ),
  a: ({ children, ...props }: ComponentProps<"a">) => {
    const external = isExternalHref(props.href)
    return (
      <Anchor
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...props}
      >
        {children}
        {external && <NewTabHint className="ml-0.5 size-[0.9em]" />}
      </Anchor>
    )
  },
  hr: () => <Separator className="my-12" />,
  img: ProjectContentImage,
  code: ({ className, ...props }: ElementProps) => (
    <Typography variant="inlineCode" className={className} {...props} />
  ),
  // Keeps the syntax colors from Shiki but swaps its background for the
  // site's, and undoes the inline code styles on the nested <code>
  pre: ({ className, ...props }: ComponentProps<"pre">) => (
    <pre
      {...props}
      className={cn(
        className,
        "bg-muted! mb-6 overflow-x-auto p-6 text-sm leading-6",
        "[&_code]:bg-transparent [&_code]:p-0 [&_code]:text-sm [&_code]:font-normal",
      )}
    />
  ),
  table: ({ className, ...props }: ComponentProps<"table">) => (
    <div className="mb-6">
      <Table className={cn("text-base", className)} {...props} />
    </div>
  ),
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: ({ className, ...props }: ComponentProps<"th">) => (
    <TableHead
      className={cn(
        "text-muted-foreground font-mono text-xs uppercase",
        className,
      )}
      {...props}
    />
  ),
  td: TableCell,
  // Footnotes read as a quieter appendix at the end of the story
  section: ({ className, ...props }: ComponentProps<"section">) => (
    <section
      className={cn(
        "data-footnotes:text-muted-foreground data-footnotes:mt-12 data-footnotes:border-t data-footnotes:pt-6",
        "data-footnotes:[&_ol]:my-0 data-footnotes:[&_ol]:text-base data-footnotes:[&_p]:mb-0 data-footnotes:[&_p]:text-base",
        className,
      )}
      {...props}
    />
  ),
}
