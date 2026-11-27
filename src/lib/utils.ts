import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isExternalHref(href: string | undefined): boolean {
  return /^https?:\/\//.test(href ?? "")
}

export function parsePhoneNumber(formattedPhone: string): string {
  const phone = formattedPhone.replace(/\D/g, "")
  return phone
}
