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
  mysql,
  git,
  photoshop,
  c,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  nextjs,
  FoodieExpress,
  CinemaFlixGemini,
  StreamMaster,
  PyGameSuite,
  SecureVault,
  DjangoMart,
  redux,
  Firebase,
  Jest,
  Bootstrap

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
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Trainer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NEXT JS",
    icon: nextjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
  {
    name: "Jest",
    icon: Jest,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "WordPress",
    icon: wordpress,
  }

];

const experiences = [
  {
    title: "Frontend Trainer",
    company_name: "Credible Academy",
    icon: meta,
    iconBg: "#383E56",
    date: "June 2023 - - September 2023",
    points: [
      "Led the creation and launch of a new curriculum for HTML, CSS, JavaScript, and React, increasing student project completions by 30%.",
      "Created an interactive learning space with hands-on projects and coding challenges, improving student engagement and knowledge retention.",
      "Organized workshops and webinars that attracted over 200 participants, greatly enhancing the institute's visibility and reputation.",
    ],
  },
  {
    title: "IT Trainer",
    company_name: "Institute Of Skills and Rural Development",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2021 - September 2022",
    points: [
      "Created and delivered training modules for MS Office, Photoshop, CorelDraw, HTML, CSS, Networking, and Security, boosting student performance by 25%.",
      "Used new teaching methods like real-world case studies and practical labs, improving student understanding and application of concepts.",
      "Mentored over 100 students, helping them with their studies and projects, leading to more successful project completions and higher exam scores.",
    ],
  },
  {
    title: "Business Development Executive",
    company_name: "Wealth Clinic",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2023 - May 2023",
    points: [
      "Developed client interaction strategies that increased client acquisition and retention by 20%.",
      "Performed market analysis and competitive research to find new business opportunities, resulting in targeted marketing campaigns.",
      "Worked with different teams to improve client communication processes, boosting client satisfaction and business efficiency.",
    ],
  },
  {
    title: "Freelencer",
    company_name: "Self Employed",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Ongoing",
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
    name: "StreamMaster",
    description:
      "A YouTube clone with advanced features, including efficient state management, responsive design, and deployment on Google Firebase.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "React-Redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: StreamMaster, // Assuming you have the image saved and imported as streamMasterImage
    source_code_link: "https://my-65a3e.web.app/",
  },
  {
    name: "CinemaFlixGemini",
    description:
      "A Netflix clone with AI features, offering personalized movie recommendations, secure user authentication, and a modern responsive UI.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: CinemaFlixGemini, // Assuming you have the image saved and imported as cinemaFlixGeminiImage
    source_code_link: "https://netflixgpt-17f5b.web.app/",
  },
  {
    name: "FoodieExpress",
    description:
      "A Swiggy clone with its features, offering a seamless and optimized food delivery experience with advanced functionalities and a responsive design.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Parcel",
        color: "green-text-gradient",
      },
      {
        name: "Jest",
        color: "pink-text-gradient",
      },
    ],
    image: FoodieExpress,
    source_code_link: "https://foodieexpress-abfbe.web.app/",
  },
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
    name: "DjangoMart",
    description:
      "A comprehensive eCommerce platform developed using Django, offering robust inventory management, secure transactions, and user-friendly interface.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "SQLite3",
        color: "pink-text-gradient",
      },
    ],
    image: DjangoMart,
    source_code_link: "https://github.com/cyberlyadnan/Ecommerce-With-Blog-In-Django",
  },
  {
    name: "PyGame Suite",
    description:
      "A suite of games developed using Python and Tkinter, providing an engaging and interactive gaming experience with easy-to-use interfaces.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
    ],
    image: PyGameSuite,
    source_code_link: "https://github.com/cyberlyadnan/Snake-Game",
  },
  {
    name: "SecureVault",
    description:
      "A secure password manager developed with Python and Tkinter, ensuring safe storage and management of passwords with a user-friendly interface.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
    ],
    image: SecureVault,
    source_code_link: "https://github.com/cyberlyadnan/Password-Manager",
  },
  // {
  //   name: "Learning Management System",
  //   description:
  //     "A comprehensive platform designed to streamline training, enhance knowledge retention, and track progress effectively. With intuitive features for course creation, assessment, and analytics, it's the ideal solution for modern learning needs.",
  //   tags: [
  //     {
  //       name: "wordpress",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "http://usaglobaleducation.com/",
  // },
  // {
  //   name: "Blog Web Application",
  //   description:
  //     "Experience our Blog Web Application - a powerful tool to create, publish, and manage captivating content effortlessly, driving engagement and fostering community online.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "wordpress",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://mcommercehub.com/",
  // }

];

export { services, technologies, experiences, testimonials, projects };
