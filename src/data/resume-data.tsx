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

export const RESUME_DATA: ResumeData = {
  name: "Murat Akyuz",
  initials: "MA",
  location: "Seattle, Washington, United States",
  locationLink: "https://www.google.com/maps/place/Seattle,+Washington,+United+States",
  about: "Digital Marketing Specialist with a passion for growing brands on TikTok and other platforms. BBA from the University of Washington with a focus on entrepreneurship and information systems.",
  summary: "Experienced in digital marketing, content creation, and entrepreneurship. Passionate about leveraging social media and personal branding to further dreams and achieve business goals.",
  avatarUrl: "https://media.licdn.com/dms/image/D4D03AQFGMcX8WUgrww/profile-displayphoto-shrink_800_800/0/1686782629275?e=1711584000&v=beta&t=1fHoZlrLFWjgw3ocEfFq4Xs1KXayrJf3PtycpmZ-v0A",
  personalWebsiteUrl: "https://www.linkedin.com/in/muratakyuz",
  contact: {
    email: "Not Provided",
    tel: "Not Provided",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muratakyuz",
        icon: LinkedInIcon,
      },
      // Add other social icons and details here
    ],
  },
  education: [
    // Add Murat Akyuz's education details here
  ],
  work: [
    {
      company: "Jetson",
      link: "https://www.linkedin.com/company/jetsonapp/",
      title: "Digital Marketing Specialist",
      logo: JetsonLogo, // Assuming JetsonLogo is correctly imported
      start: "Oct 2022",
      end: "Present",
      description: "Managing TikTok and other social media channels, developing digital marketing plans, and utilizing data analytics for campaign performance.",
      // No 'badges' property if it's not applicable
    },
    // Add other work experiences here
  ],
  skills: [
    "Digital Marketing",
    "Content Creation",
    "SEO",
    "Social Media Strategy",
    "Paid Social Media Campaigns",
    // Add more skills as needed
  ],
  // Add projects, publications, awards, and other sections as needed
};
