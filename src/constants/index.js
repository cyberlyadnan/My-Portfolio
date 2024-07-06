import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
  wordpress,
  tailwind,
  nodejs,
  mysql,
  git,
  photoshop,
  c,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "ForntEnd Engineer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "NEXT JS",
    icon: nextjs,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "C",
    icon: c,
  },
];

const experiences = [
  {
    title: "IT Trainer",
    company_name: "Institute Of Skills and Rural Development",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Sept 2022",
    points: [
      "Maintained positive, productive learning environments through exceptional classroom management.",
      "Successfully improved network performance by updating computers with the latest software and applications",
      "Handle the work of cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "AK Computers",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2021 - Oct 2022",
    points: [
      "Prepared orders to deliver excellent presentation and quality standards.",
      "Developed excellent working knowledge of industry trends and improvements in processes.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Business Development Executive",
    company_name: "Wealth Clinic",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2023 - May 2023",
    points: [
      "Prepared range of written communications, documents and reports.",
      "Managed complaints with calm, clear communication and problem-solving.",
      "Developed and implemented strategic plans to expand the company's client base and drive revenue growth.",
      "Monitored industry trends and competitor activities to identify areas for potential growth and differentiation.",
    ],
  },
  {
    title: "Full Stack IT Trainer",
    company_name: "Credible Academy",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed and delivered comprehensive training modules covering both front-end and back-end technologies.",
      "Instructed on a wide range of topics including HTML, CSS, JavaScript and database management systems.",
      "Created engaging learning materials and hands-on exercises to facilitate effective understanding and retention.",
      "Received positive feedback from students, indicating increased confidence and readiness for real-world IT challenges.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Its user-friendly interface and comprehensive features have streamlined course creation and management, resulting in improved learning outcomes and higher employee satisfaction.",
    name: "Mohammad Umar",
    designation: "CFO",
    company: "US Global Finance",
    image: "https://mcommercehub.com/wp-content/uploads/2024/01/9cf7aae0-ellipse-601.png",
  },
  {
    testimonial:
      "This LMS platform is a game-changer for us. Its intuitive design and robust functionality make training administration effortless, freeing us to focus on delivering quality content.",
    name: "Brewin Lewis",
    designation: "COO",
    company: "US Global Finance",
    image: "https://mcommercehub.com/wp-content/uploads/2024/01/76fdb2c8-ellipse-599.png",
  },
  {
    testimonial:
      "This eCommerce platform has skyrocketed our online sales with its intuitive interface and powerful features, streamlining operations and proving indispensable to our business.",
    name: "Mohsin Ahmed",
    designation: "CTO",
    company: "Credible Academy",
    image: "https://mcommercehub.com/wp-content/uploads/2024/01/8a038359-ellipse-602.png",
  },
];

const projects = [
  {
    name: "Wood Management Software",
    description:
      "Streamline forestry operations with efficient resource management, inventory tracking, and sustainable practices for optimized productivity and environmental stewardship.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "sqlite3",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/cyberlyadnan",
  },
  {
    name: "Learning Management System",
    description:
      "A comprehensive platform designed to streamline training, enhance knowledge retention, and track progress effectively. With intuitive features for course creation, assessment, and analytics, it's the ideal solution for modern learning needs.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "http://usaglobaleducation.com/",
  },
  {
    name: "Blog Web Application",
    description:
      "Experience our Blog Web Application - a powerful tool to create, publish, and manage captivating content effortlessly, driving engagement and fostering community online.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://mcommercehub.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
