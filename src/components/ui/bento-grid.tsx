import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { NewTabHint } from "../new-tab-hint"
import { Anchor } from "./anchor"
import { Typography } from "./typography"

interface BentoGridProps extends ComponentProps<"ul"> {
  children: ReactNode
  className?: string
}

export interface BentoCardProps extends Omit<ComponentProps<"li">, "title"> {
  name: string
  /** Short label shown above the name, like a category */
  eyebrow?: string
  className: string
  background?: ReactNode
  icon?: ReactNode
  badge?: ReactNode
  description: string
  href: string
  target?: ComponentProps<"a">["target"]
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <ul
      role="list"
      className={cn(
        "grid w-full auto-rows-[25rem] grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

// Without hover (touch screens) the caption stays visible instead of being
// revealed on hover or focus
const BentoCard = ({
  name,
  eyebrow,
  className,
  background,
  icon,
  badge,
  description,
  href,
  cta,
  target,
  ...props
}: BentoCardProps) => (
  <li className={cn("col-span-3", className)} {...props}>
    <article
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden",
        "bg-background transform-gpu border [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div>{background}</div>
      {badge && <div className="absolute top-4 right-4 z-10">{badge}</div>}
      <div className="pointer-events-none z-10 translate-y-full transform-gpu space-y-2 px-8 py-7 transition-all duration-300 group-focus-within:translate-y-0 group-hover:translate-y-0 [@media(hover:none)]:translate-y-0">
        <div className="text-muted-foreground size-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-focus-within:scale-75 group-hover:scale-75 [@media(hover:none)]:scale-75">
          {icon}
        </div>
        <hgroup className="space-y-2">
          {eyebrow && (
            <p className="text-muted-foreground font-mono text-sm uppercase">
              {eyebrow}
            </p>
          )}
          <Typography variant="h3">{name}</Typography>
        </hgroup>
        <Typography variant="p" className="max-w-lg">
          {description}
        </Typography>
        <Anchor
          href={href}
          target={target}
          rel={target === "_blank" ? "noreferrer" : undefined}
          className="pointer-events-auto no-underline hover:underline md:text-lg"
        >
          {cta}
          <span className="sr-only">: {name}</span>
          {target === "_blank" && <NewTabHint icon={false} />}
          <ArrowRight aria-hidden className="ml-1 inline-block size-5" />
        </Anchor>
      </div>
    </article>
  </li>
)

export { BentoCard, BentoGrid }
