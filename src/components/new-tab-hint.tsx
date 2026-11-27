import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface NewTabHintProps {
  /** Set to false where the link has no room for the arrow, like icon buttons */
  icon?: boolean
  className?: string
}

// Tells every user that a link opens in a new tab: an arrow for sighted
// users and a hidden note for screen readers
export function NewTabHint({ icon = true, className }: NewTabHintProps) {
  return (
    <>
      {icon && (
        <ArrowUpRight
          aria-hidden="true"
          className={cn("inline-block size-4", className)}
        />
      )}
      <span className="sr-only">(opens in a new tab)</span>
    </>
  )
}
