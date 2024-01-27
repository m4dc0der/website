import {
  LinkedInIcon,
  GitHubIcon,
  JetsonLogo, // Assuming you have or will add a Jetson logo
  YouTubeIcon, // Assuming you have or will add a YouTube icon
  UniversityOfWashingtonLogo, // Assuming you have or will add a University of Washington logo
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Murat Akyuz",
  initials: "MA",
  location: "Seattle, Washington, United States",
  locationLink: "https://www.google.com/maps/place/Seattle,+Washington,+United+States",
  about:
    "Digital Marketing Specialist with a passion for growing brands on TikTok and other platforms. BBA from the University of Washington with a focus on entrepreneurship and information systems.",
  summary:
    "Experienced in digital marketing, content creation, and entrepreneurship. Passionate about leveraging social media and personal branding to further dreams and achieve business goals.",
  avatarUrl: "https://media.licdn.com/dms/image/D4D03AQFGMcX8WUgrww/profile-displayphoto-shrink_800_800/0/1686782629275?e=1711584000&v=beta&t=1fHoZlrLFWjgw3ocEfFq4Xs1KXayrJf3PtycpmZ-v0A",
  personalWebsiteUrl: "https://www.linkedin.com/in/muratakyuz", // Assuming LinkedIn as personal website
  contact: {
    email: "Not Provided", // Email is not provided in the data
    tel: "Not Provided", // Phone number is not provided in the data
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muratakyuz",
        icon: LinkedInIcon,
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/user/YourYouTubeChannel", // Placeholder, replace with actual URL
        icon: YouTubeIcon,
      },
      // Add other social networks if available
    ],
  },
  education: [
    {
      school: "University of Washington - Michael G. Foster School of Business",
      degree: "Bachelor of Business Administration - BBA, Entrepreneurship/Entrepreneurial Studies/Information Systems",
      start: "2021",
      end: "2023",
      logo: UniversityOfWashingtonLogo, // Assuming you have a logo for the University of Washington
    },
    // Add other educational entries if available
  ],
  work: [
    {
      company: "Jetson",
      link: "https://www.linkedin.com/company/jetsonapp/", // Assuming LinkedIn company page as the website
      title: "Digital Marketing Specialist",
      start: "Oct 2022",
      end: "Present",
      description:
        "Managing TikTok and other social media channels, developing digital marketing plans, and utilizing data analytics for campaign performance.",
      logo: JetsonLogo, // Assuming you have or will add a Jetson logo
    },
    // Add other work experiences if available
  ],
  skills: [
    "Digital Marketing",
    "Content Creation",
    "SEO",
    "Social Media Strategy",
    "Paid Social Media Campaigns",
    // Add more skills as needed
  ],
  // You can add projects, publications, awards, and other sections as needed
} as const;
