import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Murat Akyuz",
  initials: "BJ",
  location: "Seattle, Washington U.S",
  locationLink: "https://www.google.com/maps/place/Seattle",
  about:
    "Digital Marketer and Founder focused on helping entrepreneurs",
  summary:
    "I am Murat. Currently a marketer focused on growing brands online. With a BA from University of Washington. Also working on a couple of side projects like my podcast, and opening up a cafe :) ",
  avatarUrl: "https://media.licdn.com/dms/image/D4D03AQFGMcX8WUgrww/profile-displayphoto-shrink_800_800/0/1686782629275?e=1711584000&v=beta&t=1fHoZlrLFWjgw3ocEfFq4Xs1KXayrJf3PtycpmZ-v0A",
  personalWebsiteUrl: "https://jetson.app",
  contact: {
    email: "hi@muratakyuz.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.dev/m4dc0der/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muratakyuz/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Washington",
      degree: "Bachelor's Degree in Business Administration (BBA) & Entrepreneurship",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Jetson",
      link: "https://jetson.app",
      badges: ["Full-Time"],
      title: "Digital Marketing Specialist",
      logo: AmbitLogo,
      start: "2023",
      end: "Current",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Royal",
      link: "https://royalkebabsandgyros.com",
      badges: ["Co-Founder"],
      title: "Small Business Owner",
      logo: AmbitLogo,
      start: "2021",
      end: "Current",
      description:
        "Co-Founder of a delicious Mediterranean family restaurant based in San Jose, CA",
    },
    {
      company: "YouTube, TikTok, Snapchat",
      link: "https://youtube.com/",
      badges: [],
      title: "Content Creator",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2022",
      description:
        "Started with OG Minecraft videos when I was 11 to educating on financial literacy when I got to college Canva, Photoshop, and DaVinci Resolve, Adobe Premier Pro 134,000,000+ views, 6 figure in revenue",
    },
  ],
  skills: [
    "Entrepreneurship",
    "Content Writing",
    "Strategy",
    "Finance",
    "Adobe",
    "DaVinci Pro",
    "Sometimes Funny",
  ],
  projects: [
    {
      title: "SmileWithMuro",
      techStack: [
        "Side Project",
        "Philanthropy",
        "Facebook",
        "Instagram",
      ],
      description: "A philanthropic brand to help fight homelessness in Seattle. Raised over 5 figures by brainstorming -> publishing content documenting the city.",
      logo: ConsultlyLogo,
      link: {
        label: "facebook.com",
        href: "https://facebook.com/",
      },
    },
    {
      title: "Dorm Room Disruptors",
      techStack: ["Passion Project", "Podcast", "Young Founders", "Entre"],
      description:
        "The stories of innovation that started between class and study break. Shining a light on the challenges, breakthroughs, and hustle that transformed a student's dreams into emerging businesses. If you're inspired by ambition and innovation, this is your listen.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://dormroomdisruptors.com/",
      },
    },
    {
      title: "Stealth Campign",
      techStack: ["Marketing Campaign", "User Acquisition", "Viral"],
      description:
        "A viral campign to acquire users for an entrepreneurial app",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://test.com/",
      },
    },
  ],
} as const;
