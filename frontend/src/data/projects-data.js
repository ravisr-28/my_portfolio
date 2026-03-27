import { FaDesktop, FaRobot, FaMobileAlt } from "react-icons/fa";

export const projectsData = [
  {
    id: "letschat",
    title: "Let's Chat",
    subtitle: "Real-Time Chat Application",
    projectType: "website",
    description:
      "A full-stack real-time chat application that enables users to communicate instantly with features like authentication, private chats, and responsive UI.",
    images: ["/projects/letschat/lc_01.png"],
    githubUrl: "https://github.com/ravisr-28",
    liveUrl: "https://let-schat.vercel.app/",
    technologies: [
      "React",
      "Node.js",
      "ExpressJs",
      "MongoDB",
      "Socket.io",
      "Tailwind",
    ],
    featured: true,
    challenges: [
      "Implementing real-time messaging with low latency",
      "Managing user authentication and secure sessions",
      "Handling multiple users and socket connections efficiently",
    ],
    impact: [
      "Enabled seamless real-time communication between users",
      "Improved user engagement with instant messaging",
      "Built scalable chat architecture for multiple users",
    ],
    role: "Full Stack Developer",
    duration: "2-3 months",
    techStack: {
      frontend: "React + Tailwind CSS for responsive UI",
      backend: "Node.js + Express with MongoDB for storing user and chat data",
      realtime: "Socket.io for real-time messaging",
      extras: "JWT authentication, protected routes, and responsive design",
    },
  },
  {
    id: "delhi-route-optimizer",
    title: "Delhi Route Optimizer",
    subtitle: "Smart Route Planning System",
    projectType: "website",
    description:
      "A smart route optimization web app that helps users find the most efficient path between multiple locations in Delhi using map-based interaction and shortest-path algorithms.",
    images: ["/projects/delhi-route-optimizer/dro_01.png"],
    githubUrl: "https://github.com/ravisr-28",
    liveUrl: "https://delhi-route-optimizer.vercel.app/",
    technologies: [
      "React",
      "Node.js",
      "ExpressJs",
      "MongoDB",
      "OpenStreetMap",
      "OSRM",
    ],
    featured: true,
    challenges: [
      "Implementing route optimization for multiple stops",
      "Integrating map services with real-time user interaction",
      "Handling dynamic route recalculation efficiently",
    ],
    impact: [
      "Reduced travel planning time significantly",
      "Improved route efficiency for multiple destinations",
      "Enhanced user experience with interactive map features",
    ],
    role: "Full Stack Developer",
    duration: "2 months",
    techStack: {
      frontend: "React for interactive UI with map-based controls",
      backend: "Node.js + Express for handling route calculations and APIs",
      maps: "OpenStreetMap with OSRM for route optimization and distance calculation",
      extras:
        "Dynamic stop addition, drag-and-drop markers, and optimized path generation",
    },
  },
  {
    id: "playnex",
    title: "PlayNex",
    subtitle:
      "Online platform for booking and managing tournaments, matches, and teams",
    projectType: "website",
    description:
      "A web application that enables users to register for tournaments, find teams, and manage their schedules.",
    images: [
      "/projects/playnex/playnex-01.png",
      "/projects/playnex/playnex-02.png",
    ],
    githubUrl: "#",
    liveUrl: "https://playnex.in",
    technologies: ["ReactJs", "Express", "Tailwind", "MongoDB", "Node.js"],
    featured: true,
    challenges: [
      "Implementing a robust user authentication system",
      "Designing and implementing a responsive and user-friendly UI",
      "Integrating third-party APIs for team and tournament management",
    ],
    impact: [
      "Simplifying the process of booking tournaments and matches",
      "Enabling users to find and join teams for their favorite games",
      "Providing a centralized platform for managing tournament schedules and match results",
    ],
    role: "Full Stack Developer",
    duration: "6 months",
    techStack: {
      frontend: "React + Tailwind CSS",
      backend: "Node.js + Express with MongoDB for data persistence",
      devops: "CI/CD using GitHub Actions, deployed on Vercel",
      extras:
        "JWT authentication, role-based access control, and third-party API integration",
    },
  },
];

export const projectTabs = [
  {
    id: "all",
    label: "All Projects",
    icon: null,
    color: "bg-gray-900 dark:bg-gray-100 dark:text-gray-900",
  },
  { id: "website", label: "Web Apps", icon: FaDesktop, color: "bg-blue-600" },
  { id: "ai", label: "AI Projects", icon: FaRobot, color: "bg-purple-600" },
  { id: "app", label: "Mobile Apps", icon: FaMobileAlt, color: "bg-green-600" },
];
