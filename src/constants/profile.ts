import me from "@/assets/me.png"

export const PROFILE = Object.freeze({
  name: "Carlos Reyes",
  nickname: "carlosreyesdev",
  title: "Full Stack Software Engineer",
  bio: "Hi, I'm Carlos Reyes. I design and build web products end to end, and I use AI agents to move faster without lowering the bar on craft.",
  photo: me,
  gender: "Male",
  birthDate: "2000-06-17",
  country: "Venezuela",
  email: "contact@carlosreyes.me",
  phone: "+58 (412) 938-0768",
  handles: {
    github: "carlosreyesdev",
    linkedin: "carlosreyesdev",
    instagram: "carlosreyesdev",
    x: "carlosreyesdev_",
  },
  website: import.meta.env.SITE,
  languages: [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
  ],
})
