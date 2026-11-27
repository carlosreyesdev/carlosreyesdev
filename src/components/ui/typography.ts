import { cva, type VariantProps } from "class-variance-authority"

export const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "font-mono text-4xl font-bold text-pretty md:text-balance md:text-5xl lg:text-6xl",
      h2: "text-3xl font-bold text-pretty md:text-balance md:text-4xl lg:text-5xl",
      h3: "text-2xl font-bold text-pretty md:text-balance md:text-3xl",
      h4: "text-xl font-bold text-pretty md:text-balance md:text-2xl",
      lead: "max-w-prose text-lg leading-7 md:text-xl",
      p: "max-w-prose text-base leading-relaxed md:text-lg",
      blockquote: "mt-6 border-l-2 pl-6 text-base italic md:text-lg",
      ul: "my-6 ml-6 list-disc space-y-2 text-base md:text-lg",
      ol: "my-6 ml-6 list-decimal space-y-2 text-base md:text-lg",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[0.875em] font-medium",
      small: "text-sm font-medium leading-none",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

export type TypographyVariantProps = VariantProps<typeof typographyVariants>

export const typographyElementMap: Record<
  NonNullable<TypographyVariantProps["variant"]>,
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "blockquote"
  | "ul"
  | "ol"
  | "code"
  | "small"
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  lead: "p",
  p: "p",
  blockquote: "blockquote",
  inlineCode: "code",
  ul: "ul",
  ol: "ol",
  small: "small",
}
