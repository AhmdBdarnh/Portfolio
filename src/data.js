// Replace the placeholders with your real details before publishing.
export const profile = {
  name: "Ahmad Badarne",
  initials: "AB",
  role: "Software Engineer",
  location: "Israel   · Open to opportunities",
  email: "ahmds3b@gmail.com",
  github: "https://github.com/AhmdBdarnh",
  linkedin: "https://www.linkedin.com/in/ahmd-bdarneh-53bb39300/",
  resume: "", // Add a PDF to public/resume.pdf and set this to "/resume.pdf"
  summary:
    "I build thoughtful digital experiences and reliable software—from intuitive frontends to scalable backend systems.",
  about:
    "I'm a software engineering graduate with an interest in solving complex problems, building full-stack applications, and turning ideas into polished products. I care about clean code, performance, and great user experiences.",
};

export const skills = [
  {
    group: "Frontend Development",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    group: "Backend Development",
    items: ["Node.js", "PHP", "REST APIs"],
  },
  {
    group: "Programming Languages",
    items: ["C", "C++", "Python", "JavaScript", "PHP"],
  },
  {
    group: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    group: "Tools & Cloud",
    items: ["Git", "GitHub", "AWS", "Docker", "Postman", "Zabbix"],
  },
];

export const projects = [
  {
    number: "01",
    category: "AI / IoT / FULL-STACK SYSTEM",
    name: "PlantMind AI",
    description:
      "An AI-powered autonomous greenhouse system that " +
      "monitors and controls environmental conditions in " +
      "real time. Integrates computer vision, intelligent " +
      "plant health analysis, and budget-aware optimization " +
      "to improve plant growth while minimizing resource " +
      "consumption. Features a web dashboard for remote " +
      "monitoring, control, and AI recommendation approval.",
    stack: [
      "Python",
      "Flask",
      "MongoDB",
      "OpenAI API",
      "AWS S3",
      "Raspberry Pi",
      "ESP32",
      "MQTT",
    ],
    demo: "",
    image: "/images/plantmind-logo.png",
    repo: "https://github.com/AhmdBdarnh/PlantMindAi",
  },
  {
    number: "02",
    category: "DATA ENGINEERING / BIG DATA",
    name: "Amazon eCommerce Data Lakehouse",
    description:
      "Built an end-to-end data engineering pipeline " +
      "for eCommerce analytics using Apache Spark, Kafka, " +
      "and Airflow. Implemented Bronze, Silver, and Gold " +
      "data layers with Apache Iceberg, automated ETL " +
      "workflows, data quality validation, and an " +
      "interactive business analytics dashboard.",
    stack: [
      "Python",
      "Apache Spark",
      "Apache Kafka",
      "Apache Airflow",
      "Apache Iceberg",
      "MinIO",
      "Docker",
      "SQL",
    ],
    demo: "",
    image: "/images/architecture.jpeg",
    repo: "https://github.com/AhmdBdarnh/Data-Engineering--Project-Final",
  },
  {
    number: "03",
    category: "FULL-STACK / AI / IMAGE PROCESSING",
    name: "Takalot — Smart Maintenance Platform",
    description:
      "Developed a full-stack maintenance platform " +
      "connecting homeowners with skilled technicians. " +
      "Integrated AI-powered image classification to " +
      "recommend repair categories from uploaded photos, " +
      "with service request management, technician matching, " +
      "real-time notifications, and a bidding system.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "JavaScript",
      "Python",
      "Flask",
      "TensorFlow",
      "Socket.IO",
    ],
    demo: "",
    repo: "https://github.com/AhmdBdarnh/Takalot-Project-LastVersion",
    imageProcessingRepo: "https://github.com/AhmdBdarnh/Takalot-Project-Image-Processing",
    image: "/images/takalot.png",
    imageAlt: "Takalot AI-powered maintenance platform",
  },
];
