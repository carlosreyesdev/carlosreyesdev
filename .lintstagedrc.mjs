export default {
  "*": "prettier --ignore-unknown --list-different --write",
  // Type checks the whole project, so it ignores the staged file names
  "*.{astro,ts,tsx,mdx}": () => "astro check",
}
