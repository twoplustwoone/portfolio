import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Francisco Di Giandomenico",
  title: "Hey everyone, I'm Francisco",
  subTitle: emoji(
    "An avid gamer 🎮, software engineer 👨‍💻, writer 📝, and cat lover 🐈, with vast experience in developing web applications, focusing strongly on user experience, design, and making things people are happy to use."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1Y_BIULNFCv1uIMWFlRSWDpZOc2y8k-GaNEW8uFweVZ8/export?format=pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/twoplustwoone",
  linkedin: "https://www.linkedin.com/in/fdigiandomenico/",
  gmail: "frandigiand@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Client-focused developer who wants to make people happy and things that matter.",
  skills: [
    emoji(
      "👨‍🎨 Create and iterate on awesome user experiences for web and mobile applications"
    ),
    emoji(
      "🚀 API integration and development with clear contracts and responsibilities"
    ),
    emoji(
      "🔒 Developing and maintaining scalable, performant, and secure web applications"
    )
  ],

  softwareSkills: [
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universidad Austral",
      logo: require("./assets/images/australLogo.png"),
      subHeader: "Bachelor of Software Engineering",
      duration: "March 2013 - December 2020",
      desc: "Took electives in Game Design and Development, security, VR, AI, and ML"
    }
  ]
};

const techStack = {
  viewSkillBars: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Salesforce",
      companylogo: require("./assets/images/salesforceLogo.png"),
      date: "Feb 2024 - Dec 2024",
      desc: "Developed and optimized user-focused features for Einstein Studio, integrating cutting-edge AI solutions and enhancing performance for large-scale datasets.",
      descBullets: [
        "Designed and implemented core UI features for Einstein Studio using JavaScript, LWC, and Redux.",
        "Delivered the BYOLLM project on schedule, integrating providers like Azure OpenAI, OpenAI, and Vertex AI.",
        "Improved large dataset performance with advanced pagination techniques."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Capital One",
      companylogo: require("./assets/images/capitalOneLogo.png"),
      date: "Apr 2023 - Jan 2024",
      desc: "Redesigned core systems with Spring Boot and microservices, improving scalability, deployment efficiency, and data migration processes.",
      descBullets: [
        "Migrated legacy systems to Spring Boot with CI/CD pipelines for improved scalability.",
        "Developed backwards-compatible APIs for seamless data tokenization during database migrations.",
        "Reduced maintenance costs through modernization and refactoring of core systems."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Salesforce",
      companylogo: require("./assets/images/salesforceLogo.png"),
      date: "Nov 2022 - Mar 2023",
      desc: "Led platform migrations and workflow automations, enhancing compatibility and streamlining cross-platform integrations.",
      descBullets: [
        "Migrated API Console from LitElement to LWC, enhancing platform compatibility.",
        "Automated component exports, reducing manual effort and improving cross-team workflows.",
        "Coordinated cross-team dependencies as the engineering point of contact."
      ]
    },
    {
      role: "Software Engineer",
      company: "Salesforce",
      companylogo: require("./assets/images/salesforceLogo.png"),
      date: "Feb 2020 - Oct 2022",
      desc: "Maintained and enhanced developer tools, integrated GraphQL APIs, and standardized build processes for improved performance and reliability.",
      descBullets: [
        "Owned development of API Console, optimizing stability and usability for large datasets.",
        "Integrated GraphQL APIs for ACM, reducing query latency and improving data fetching.",
        "Standardized build processes, minimizing deployment errors across teams."
      ]
    },
    {
      role: "Junior Software Engineer",
      company: "Salesforce / MuleSoft",
      companylogo: require("./assets/images/muleSoftLogo.png"),
      date: "Feb 2018 - Jan 2020",
      desc: "Pioneered key integrations between MuleSoft and Salesforce, developing dashboards and optimizing backend systems.",
      descBullets: [
        "Led MuleSoft-Salesforce integration, developing API Community Manager (ACM) with React.js.",
        "Built advanced dashboards for API testing and monitoring with React.js and Redux.",
        "Migrated Node.js services to Spring Boot, improving performance and deployment reliability."
      ]
    },
    {
      role: "Software Engenieer Intern",
      company: "MuleSoft",
      companylogo: require("./assets/images/muleSoftLogo.png"),
      date: "May 2017 - Jan 2018",
      desc: "Built interactive dashboards and improved backend middleware, introducing advanced caching strategies for better performance.",
      descBullets: [
        "Created interactive dashboards for API Functional Monitoring with real-time data filtering.",
        "Optimized middleware and backend services with caching strategies for better performance."
      ]
    },
    {
      role: "Programmer Analyst",
      company: "Hospital Universitario Austral",
      companylogo: require("./assets/images/australLogo.png"),
      date: "Apr 2016 - Apr 2017",
      desc: "Streamlined hospital operations by developing digital forms and self-service kiosks for enhanced user experience.",
      descBullets: [
        "Developed electronic medical record forms using .NET and jQuery, improving workflows.",
        "Designed self-service kiosks for patient check-ins, reducing wait times."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Stuff I Made",
  subtitle: "Some of the projects I've worked on",
  projects: [
    {
      image: require("./assets/images/giftpoolLogo.png"),
      projectName: "giftpool",
      projectDesc: "A platform to create gifting groups and manage wishlists",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://giftpool.app/"
        }
      ]
    },
    {
      image: require("./assets/images/splittrLogo.png"),
      projectName: "splittr",
      projectDesc:
        "Simple web app for itemizing invoices with proportional tax",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://splittr.twoplustwoone.dev/"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and Certifications I've earned!",

  achievementsCards: [
    {
      title: "US Patent Granted",
      subtitle:
        "Wrote, submitted, and received a patent for structuring web apps through a specification file.",
      image: require("./assets/images/usptoLogo.png"),
      imageAlt: "USPTO Logo",
      footerLink: [
        {
          name: "Patent",
          url: "https://patents.google.com/patent/US10977011B2/en"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Obtained a score of 834 on the AWS Certified Cloud Practitioner certification exam.",
      image: require("./assets/images/awsCertifiedCloudPractitioner.png"),
      imageAlt: "AWS Certified Cloud Practitioner Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1unydJb7Xe3u1UNBm4NX_u5r8_DofpE5t/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "frandigiand@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
