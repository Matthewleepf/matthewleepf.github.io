// ============================================
// 扉页 — edit this file first.
// The name, university, and papers in this repo are a fictional sample.
// ============================================

export const site = {
  title: "Pengfei Li",
  description: "Academic homepage. Research in Surgical AI,"+
              "Vision-Language Model / Agent, Post-Training.",
  /** Your GitHub Pages URL, with no trailing slash. Must not contain "yourname". */
  url: "https://matthewleepf.github.io",
  lang: "en",
  /** Google Analytics ID. Leave "" to disable. */
  analyticsId: "",
  /** Footer link back to the template. Set false to remove it. */
  showTemplateCredit: false,
};

export const author = {
  name: "Pengfei Li ",
  /** Square portrait. The file in this repo is a typographic mark, not a photograph. */
  avatar: "/images/profile.jpg",
  bio: "Master student, University of Basel",
  location: "Basel, Switzerland",
  email: "peng.li@stud.unibas.ch",
  /** Username, or owner/repo. The sample points at this template. */
  github: "MaxwelsDonc/feiye",
  x: "",
  googleScholar: "",
  /** Scholar user id, the part before the colon in a paper id. */
  googleScholarId: "",
  orcid: "",
};

export const navigation = {
  header: [
    { label: "About", href: "/#about" },
    { label: "News", href: "/#news" },
    { label: "Experience", href: "/#experience" },
    { label: "Publications", href: "/#publications" },
    { label: "Education", href: "/#education" },
    { label: "Writing", href: "/blog"},
  ],
};

export const homePage = {
  name: "Pengfei Li",
  nameCn: "",
  subtitle: "I build Surgical AI",
  /** Toggle sections on/off. Set false to hide a section entirely. */
  sections: {
    aboutMe: true,
    news: true,
    experience: true,
    publications: true,
    education: true,
    projects: false,
    honors: false,
    services: false,
    skills: false,
  },
};

export const googleScholar = {
  /** Leave false until you have run the crawler. The sample fetches nothing. */
  enabled: false,
  /**
   * After the crawler pushes citation JSON, set this to your jsDelivr URL:
   * https://cdn.jsdelivr.net/gh/USER/REPO@google-scholar-stats/gs_data.json
   */
  statsUrl: "",
};

// ============================================
// Validation — checked at build time
// ============================================

function validateConfig() {
  const errors: string[] = [];

  if (!site.title || site.title === "Your Name")
    errors.push('site.title is required. Set it in src/config.ts');
  if (!site.url || site.url.includes("yourname"))
    errors.push('site.url is required. Set your GitHub Pages URL in src/config.ts');

  if (!author.name || author.name === "Your Name")
    errors.push('author.name is required. Set it in src/config.ts');

  if (errors.length > 0) {
    console.error("\n❌ Config validation failed:\n");
    errors.forEach((e) => console.error(`  • ${e}`));
    console.error("\nFix src/config.ts and try again.\n");
    throw new Error("Config validation failed — see messages above.");
  }
}

validateConfig();
