export const resumeData = {
  personal: {
    name: "Ashutosh Bhardwaj",
    title: "AI & Robotics Engineer",
    tagline: "Building autonomous systems and intelligent solutions at the intersection of AI, Computer Vision, and Robotics",
    email: "ashutosh10503@gmail.com",
    phone: "+91 9149051767",
    linkedin: "https://www.linkedin.com/in/ashutosh-bhardwaj-/", // Fixed incomplete link
    github: "AshuGITHUBtosh",
    resumeUrl: "/resume.pdf",
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
        "Worked in my collages Martian rover team named Team Vyadh as an Autonomous member and participated in International competition",
        "Worked with ROS and sensors like LIDAR, IMU, depth Camera to implement SLAM and Nav2 stack for autonomous navigation in unstructured terrains",
        "Mentored 10+ recruits, reducing onboarding time by 40% through structured ROS training and module-based assignments"
      ],
      // FIXED: Separated images into individual objects
      images: [
        { src: "/experience/rover.jpeg", alt: "Autonomous rover" },
        { src: "/experience/turtlebot.jpg", alt: "SLAM map in RViz" },
        { src: "/experience/me_and_rover.jpeg", alt: "Nav2 path planning" },
        { src: "/experience/team_photo.JPG", alt: "Team testing rover" }
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
      images: [
        { src: "/experience/oritso.jpeg", alt: "Cheque Processing Pipeline" }
      ],
      icon: "👁️"
    }
  ],
  projects: [
    {
      title: "Autonomous Aruco-Based Navigation",
      description: "Achieved 94% detection accuracy for ArUco tags in varying lighting conditions using Python and OpenCV. Deployed model in ROS2-Gazebo to enable tag-based navigation, reducing waypoint navigation error by 35%.",
      techStack: ["Python", "OpenCV", "ROS2", "Gazebo", "Computer Vision", "Robotics"],
      github: "https://github.com/AshuGITHUBtosh/Aruco_PID_Navigation",
      video: "/projects/aruco-navigation.mp4",
      category: "Robotics & Computer Vision"
    },
    {
      title: "WhatsApp Chat Analyzer for Group Insights",
      description: "Parsed and analyzed 50,000+ chat messages, generating visual insights into activity trends by user and time. Automated visualization with Matplotlib/Seaborn, reducing manual analysis time by 30%.",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
      github: "https://github.com/AshuGITHUBtosh",
      video: "/projects/data_analysis.mp4",
      demo: null,
      image: null,
      category: "Data Science"
    },
    {
      title: "Virtual Assistant",
      description: "Created a voice-activated virtual assistant using Python that can talk and show expression according to the conversation and also performs tasks like web searches, opening applications and a face recognition feature. Integrated speech recognition and text-to-speech for seamless interaction.",
      techStack: ["Python", "LLM", "Computer Vision"],
      github: "https://github.com/AshuGITHUBtosh/Virtual-AI-Assistant",
      video: "/projects/virtual assistant.mp4",
      demo: null,
      image: null,
      category: "AI & Automation"
    }
  ],
  achievements: [
    {
      title: "International Rover Challenge 2025",
      description: "Ranked 13th internationally among 70+ teams",
      year: "2025",
      icon: "🏆",
      // FIXED: Point to IMAGE (.png/.jpg), NOT .pdf
      certificate: "/certificates/irc-2025.png",
      thumbnail: "/certificates/irc-2025.png"
    },
    {
      title: "International Rover Challenge 2024",
      description: "Ranked 19th internationally",
      year: "2024",
      icon: "🏆",
      // FIXED: Point to IMAGE (.png/.jpg), NOT .pdf
      certificate: "/certificates/irc-2024.png",
      thumbnail: "/certificates/irc-2024.png"
    },
    {
      title: "NXP AIM",
      description: "Reached Regional Finals among 100+ competing teams",
      year: "2024",
      icon: "🏆",
      // FIXED: Point to IMAGE (.png/.jpg), NOT .pdf
      certificate: "/certificates/nxp-aim-2024.png",
      thumbnail: "/certificates/nxp-aim-2024.png"
    }
  ]
};