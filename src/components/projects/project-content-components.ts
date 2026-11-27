import ProjectContentImage from "./ProjectContentImage.astro"
import MdxA from "./mdx/MdxA.astro"
import MdxBlockquote from "./mdx/MdxBlockquote.astro"
import MdxCode from "./mdx/MdxCode.astro"
import MdxH2 from "./mdx/MdxH2.astro"
import MdxH3 from "./mdx/MdxH3.astro"
import MdxH4 from "./mdx/MdxH4.astro"
import MdxHr from "./mdx/MdxHr.astro"
import MdxInput from "./mdx/MdxInput.astro"
import MdxLi from "./mdx/MdxLi.astro"
import MdxOl from "./mdx/MdxOl.astro"
import MdxP from "./mdx/MdxP.astro"
import MdxPre from "./mdx/MdxPre.astro"
import MdxSection from "./mdx/MdxSection.astro"
import MdxTable from "./mdx/MdxTable.astro"
import MdxTbody from "./mdx/MdxTbody.astro"
import MdxTd from "./mdx/MdxTd.astro"
import MdxTh from "./mdx/MdxTh.astro"
import MdxThead from "./mdx/MdxThead.astro"
import MdxTr from "./mdx/MdxTr.astro"
import MdxUl from "./mdx/MdxUl.astro"

// Maps the HTML produced by MDX to the site's Astro typography and layout
// components. MDX does not pass the classes added by Markdown plugins (task
// lists, footnotes), so those elements are targeted by attributes or content.
export const projectContentComponents = {
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  p: MdxP,
  blockquote: MdxBlockquote,
  ul: MdxUl,
  ol: MdxOl,
  li: MdxLi,
  input: MdxInput,
  a: MdxA,
  hr: MdxHr,
  img: ProjectContentImage,
  code: MdxCode,
  pre: MdxPre,
  table: MdxTable,
  thead: MdxThead,
  tbody: MdxTbody,
  tr: MdxTr,
  th: MdxTh,
  td: MdxTd,
  section: MdxSection,
}
