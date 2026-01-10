export const resumeData = {
  personal: {
    name: "Ashutosh Bhardwaj",
    title: "AI & Robotics Engineer",
    tagline: "Building autonomous systems and intelligent solutions at the intersection of AI, Computer Vision, and Robotics",
    email: "ashutosh10503@gmail.com",
    phone: "+91 9149051767",
    linkedin: "ashut",
    github: "AshuGITHUBtosh",
    location: "Vellore, Tamil Nadu, India"
  },
  education: {
    institution: "Vellore Institute of Technology",
    degree: "B.Tech in Computer Science & Engineering (Data Science)",
    graduationDate: "May 2026",
    cgpa: "7.6",
    location: "Vellore, Tamil Nadu"
  },
  skills: {
    programming: [
      { name: "Python", level: 95 },
      { name: "Java", level: 85 },
      { name: "C++", level: 80 },
      { name: "SQL", level: 90 }
    ],
    aiDataScience: [
      { name: "TensorFlow", level: 90 },
      { name: "CNNs", level: 88 },
      { name: "YOLOv8", level: 85 },
      { name: "OCR", level: 90 },
      { name: "OpenCV", level: 92 },
      { name: "Object Detection", level: 88 },
      { name: "Statistical Modeling", level: 85 },
      { name: "NLP", level: 80 },
      { name: "Text Preprocessing", level: 88 }
    ],
    dataTools: [
      { name: "Pandas", level: 95 },
      { name: "Matplotlib", level: 90 },
      { name: "Seaborn", level: 88 },
      { name: "Regex", level: 85 }
    ],
    robotics: [
      { name: "ROS Noetic", level: 90 },
      { name: "ROS2 Humble", level: 88 },
      { name: "SLAM", level: 85 },
      { name: "Nav2 Stack", level: 87 },
      { name: "Arduino", level: 80 }
    ],
    tools: [
      { name: "Git", level: 95 },
      { name: "GitHub", level: 95 },
      { name: "Image Pre-processing", level: 90 }
    ]
  },
  experience: [
    {
      title: "Senior Autonomous Member",
      company: "Team Vyadh",
      period: "May 2023 - Present",
      location: "Vellore, Tamil Nadu",
      achievements: [
        "Engineered autonomous navigation using ROS, SLAM Toolbox, and Nav2, improving path efficiency by 30% and reducing collision risk by 25%",
        "Integrated Intel RealSense D455 to generate point cloud-based 3D maps, enabling localization accuracy within 5 cm",
        "Mentored 10+ recruits, reducing onboarding time by 40% through structured ROS training and module-based assignments"
      ],
      icon: "🤖"
    },
    {
      title: "Computer Vision Intern",
      company: "Oritso",
      period: "May 2025 - June 2025",
      location: "Remote",
      achievements: [
        "Developed CNN pipeline for handwritten cheque processing, achieving 92% accuracy on field extraction (date, amount, account number)",
        "Applied OCR + deep learning models (TensorFlow/Keras) to automate manual workflows, reducing cheque processing time from 10 mins to 3 mins (70% faster)",
        "Improved model robustness under noisy input by 25%, increasing real-world deployment reliability"
      ],
      icon: "👁️"
    }
  ],
  projects: [
    {
      title: "Autonomous Aruco-Based Navigation",
      description: "Achieved 94% detection accuracy for ArUco tags in varying lighting conditions using Python and OpenCV. Deployed model in ROS2-Gazebo to enable tag-based navigation, reducing waypoint navigation error by 35%.",
      techStack: ["Python", "OpenCV", "ROS2", "Gazebo", "Computer Vision"],
      github: "https://github.com/AshuGITHUBtosh",
      demo: null,
      image: null,
      category: "Robotics & Computer Vision"
    },
    {
      title: "WhatsApp Chat Analyzer for Group Insights",
      description: "Parsed and analyzed 50,000+ chat messages, generating visual insights into activity trends by user and time. Automated visualization with Matplotlib/Seaborn, reducing manual analysis time by 30%.",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
      github: "https://github.com/AshuGITHUBtosh",
      demo: null,
      image: null,
      category: "Data Science"
    },
    {
      title: "TrendSage Lite - Global Sentiment Event Tracker",
      description: "Applied custom NLP pipelines to analyze 60+ global news headlines, uncovering regional sentiment trends across 30+ countries. Designed an interactive Streamlit dashboard with user filters to visualize trends, boosting accessibility for non-technical users by 40%. Engineered a custom NER system with GeoJSON-based geolocation tagging to auto-extract 200+ country-level entities, cutting manual work by 85%.",
      techStack: ["Python", "NLP", "Streamlit", "NER", "GeoJSON", "Sentiment Analysis"],
      github: "https://github.com/AshuGITHUBtosh",
      demo: null,
      image: null,
      category: "NLP & Data Visualization"
    }
  ],
  achievements: [
    {
      title: "International Rover Challenge 2025",
      description: "Ranked 13th internationally among 70+ teams",
      icon: "🏆",
      year: "2025"
    },
    {
      title: "International Rover Challenge 2024",
      description: "Ranked 19th internationally",
      icon: "🏆",
      year: "2024"
    },
    {
      title: "NXP AIM",
      description: "Reached Regional Finals among 100+ competing teams",
      icon: "🏆",
      year: "2024"
    }
  ]
};

