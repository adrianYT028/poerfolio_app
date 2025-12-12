export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  planetColor: string;
  planetSize: number;
  orbitRadius: number;
  orbitSpeed: number;
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Serverless Document Chat App",
    description: "Developed a serverless PDF chat application that processed 100+ documents and enabled real-time natural language Q&A with >90% query accuracy. Designed and deployed AWS Lambda + Bedrock architecture, cutting infrastructure costs by 25% compared to traditional hosting.",
    technologies: ["AWS Bedrock", "LangChain", "Pinecone", "DynamoDB", "Lambda", "Cognito"],
    planetColor: "#ff6b35",
    planetSize: 1.3,
    orbitRadius: 5,
    orbitSpeed: 0.5,
    demo: "https://chatdoc.pushpsood.com",
    github: "https://github.com/adrianYT028/severless-pdf-chat-app"
  },
  {
    id: 2,
    name: "AI Farmer Helper",
    description: "Comprehensive AI-powered farming application with ML crop recommendations using RandomForest algorithm trained on 22,000+ agricultural samples. Features voice-controlled assistant, real-time weather analysis, soil health monitoring, and multilingual support (English, Hindi, Khmer). Includes mandi locator, government schemes access, and educational resources for farmers.",
    technologies: ["React", "Vite", "Tailwind CSS", "Supabase", "ML", "RandomForest", "OpenWeatherMap", "Perplexity AI"],
    planetColor: "#4ade80",
    planetSize: 1.3,
    orbitRadius: 7,
    orbitSpeed: 0.3,
    github: "https://github.com/adrianYT028/AI_FARMER-HELPER"
  },
  {
    id: 3,
    name: "Lost & Found – Smart Matching Platform",
    description: "Developed a lost & found web app with AI image matching and Azure Blob Storage, managing 200+ reports and 1GB+ of media without data loss. Secured user data via JWT role-based authentication, ensuring 100% safe access control for admins and users during beta testing.",
    technologies: ["Node.js", "SQL", "SuperBase", "Heroku", "AWS S3", "OpenAI"],
    planetColor: "#3b82f6",
    planetSize: 1.2,
    orbitRadius: 9,
    orbitSpeed: 0.35,
    demo: "https://lost--found-06fee3febd94.herokuapp.com",
    github: "https://github.com/adrianYT028/lost-and-found"
  },
  {
    id: 4,
    name: "K-Nearest Neighbour Visualization",
    description: "Interactive p5.js visualization demonstrating the K-Nearest Neighbour (KNN) machine learning algorithm. Features real-time mouse-based classification, multi-class support, animated gradient background, and editable parameters. Educational tool for understanding KNN decision boundaries with visual feedback showing nearest neighbors and class predictions.",
    technologies: ["JavaScript", "p5.js", "Machine Learning", "Data Visualization"],
    planetColor: "#8b5cf6",
    planetSize: 0.9,
    orbitRadius: 11,
    orbitSpeed: 0.4,
    github: "https://github.com/adrianYT028/k-nearest-neighbour"
  },
  {
    id: 5,
    name: "SrajanVastu - Architecture Portal (Freelancing)",
    description: "Freelancing project: Mobile-responsive web platform for architecture and interior design services. Built with modern JavaScript and CSS, featuring Apache-compatible deployment configuration. Showcases architectural projects and design portfolios with emphasis on mobile optimization and user experience.",
    technologies: ["JavaScript", "CSS", "HTML", "Apache", "Freelancing"],
    planetColor: "#ec4899",
    planetSize: 1.0,
    orbitRadius: 13,
    orbitSpeed: 0.25,
    demo: "https://srajanvastu.com/"
  },
  {
    id: 6,
    name: "BBS Web Server",
    description: "Engineered a C++ HTTP/1.1 server using Winsock2 and non-blocking I/O, managing 50+ concurrent connections with reliable payload delivery. Built a robust TCP listener with automated request parsing that passed 200 unit tests for accurate status codes, headers, and static content serving.",
    technologies: ["C++", "Winsock2", "TCP/IP", "HTTP/1.1", "Visual Studio"],
    planetColor: "#16a34a",
    planetSize: 1.1,
    orbitRadius: 15,
    orbitSpeed: 0.3,
    github: "https://github.com/adrianYT028/web_server"
  },
  {
    id: 7,
    name: "Research Publication (IEEE)",
    description: "Co-authored 'Evaluating the Adversarial Stability of Classical Fake News Classifiers Using Transformer Embeddings', accepted at the 2025 ICAFT International Conference (Paper ID: ICAFT2026-394). Research focuses on testing classical ML models against adversarial attacks using modern transformer-based embeddings.",
    technologies: ["Machine Learning", "NLP", "Transformers", "Research", "IEEE"],
    planetColor: "#06b6d4",
    planetSize: 1.0,
    orbitRadius: 17,
    orbitSpeed: 0.28,
    github: "https://github.com/adrianYT028"
  }
];
