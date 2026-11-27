import me from "@/assets/me.png"

export const PROFILE = Object.freeze({
  name: "Carlos Reyes",
  nickname: "carlosreyesdev",
  title: "Full Stack Software Engineer",
  bio: "Hi, I'm Carlos Reyes. I design and build web products end to end, and I use AI agents to move faster without lowering the bar on craft.",
  photo: me,
  country: "Venezuela",
  email: "contact@carlosreyes.me",
  phone: "+58 (412) 938-0768",
  handles: {
    github: "carlosreyesdev",
    linkedin: "carlosreyesdev",
    instagram: "carlosreyesdev",
    x: "carlosreyesdev_",
  },
  website: new URL("/", import.meta.env.SITE).href,
  languages: [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
  ],
})
