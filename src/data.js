export const NAV_ITEMS = ['About', 'Education', 'Experience', 'Projects', 'Skills', 'Awards', 'Contact'];

export const EDUCATION = [
  { 
    degree: 'MSc Data Science & AI', 
    school: 'Universitas Sumatera Utara, Indonesia', 
    period: 'Upcoming', 
    tag: 'Graduate' 
  },
  { 
    degree: 'BSc Computer Science (Honours)', 
    school: 'Federal University Dutse, Jigawa State', 
    period: '2018 – 2024', 
    tag: 'Undergraduate',
    details: 'Key Courses: Java, C, Python, Networking, OS, Algorithms & Data Structures, Calculus, Probability & Statistics, Linear Algebra' 
  },
  { 
    degree: 'NYSC Certificate', 
    school: 'National Youth Service Corps', 
    period: '2024 – 2025', 
    tag: 'Service' 
  },
  { 
    degree: 'IJMB Certificate', 
    school: 'Kano University of Science & Technology Wudil', 
    period: '2017 – 2018', 
    tag: 'Pre-Degree' 
  },
];

export const EXPERIENCE = [
  { 
    role: 'Classroom Teacher', 
    org: 'Al-Millah Academy, Dutse', 
    period: 'Aug 2024 – Present', 
    type: 'Teaching',
    tasks: [
      'Teaching secondary school students', 
      'Supervising tests, examinations, and grading', 
      'Academic counselling and student supervision' 
    ] 
  },
  { 
    role: 'Classroom Teacher', 
    org: 'Ulu-Albab International Academy, Birnin Kudu', 
    period: 'Aug 2019 – Jun 2024', 
    type: 'Teaching',
    tasks: [
      'Teaching primary school students', 
      'Examination supervision and performance assessment', 
      'Public service and administrative support' 
    ] 
  },
  { 
    role: 'AI Research Intern', 
    org: 'National Centre for AI & Robotics (NCAIR), Abuja', 
    period: 'Dec 2021 – Jun 2022', 
    type: 'Internship',
    tasks: [
      'Hands-on deep convolutional neural network training', 
      'Medical image processing for disease detection', 
      'Research with TensorFlow framework' 
    ] 
  },
];

export const PROJECTS = [
  { 
    title: 'Malaria Application Detector', 
    desc: 'Deep learning model for detecting malaria from medical cell images using convolutional neural networks and TensorFlow.',
    tech: ['Python', 'TensorFlow', 'CNN', 'Medical AI'], 
    link: 'https://github.com/abu1man/malaria-updated', 
    date: 'Feb 2024' 
  },
  { 
    title: 'Expresso Churn Prediction', 
    desc: 'Machine learning model predicting when airtime customers will switch providers. Ranked 21st out of 56 teams in DSN hackathon.',
    tech: ['Python', 'Scikit-learn', 'Data Science', 'ML'], 
    link: 'https://zindi.africa/competitions/microsoft-x-dsn-free-ai-classes-in-every-city-hackathon-expresso-churn-prediction/leaderboard?page=2', 
    date: 'Jul 2024' 
  },
  { 
    title: 'Hausa Sentiments Analysis', 
    desc: 'Natural language processing project for sentiment analysis on Hausa language text data via Kaggle competitions.',
    tech: ['NLP', 'Python', 'Kaggle', 'Hausa'], 
    link: 'https://www.kaggle.com/work/competitions', 
    date: 'Mar 2022' 
  },
  { 
    title: 'CRAI Bootcamp Portfolio', 
    desc: 'Complete assignments and projects from the Comput-Research Acceleration Initiative data science bootcamp.',
    tech: ['Data Science', 'Python', 'ML', 'Research'], 
    link: 'https://github.com/abu1man/Ds.bootcamp', 
    date: 'Apr 2024' 
  },
];

export const SKILLS = {
  'Programming': ['Python', 'C++', 'Java', 'HTML/CSS'],
  'ML / AI': ['TensorFlow', 'Scikit-learn', 'Deep Learning', 'CNNs', 'NLP'],
  'Data Science': ['Pandas', 'NumPy', 'Matplotlib', 'Data Analysis'],
  'Tools': ['Tableau', 'Power BI', 'Excel', 'Google Colab', 'Jupyter', 'VS Code'],
  'Languages': ['English (Proficient)', 'Arabic (Proficient)', 'Hausa (Native)'],
};

export const AWARDS = [
  { title: 'Free AI Class in Every City Award', org: 'Data Science Nigeria', year: '2024' },
  { title: 'Nigerian Computer Society Scholarship', org: 'NCS', year: '2023' },
  { title: 'Chevron / NNPC Scholarship Award', org: 'Chevron / NNPC PLC', year: '2022' },
  { title: "Vice Chancellor's List Award", org: 'Federal University Dutse', year: '2020' },
  { title: 'Jigawa State Scholarship Award', org: 'Jigawa State Government', year: '2019' },
];

export const CERTIFICATES = [
  'CRAI Google Research Bootcamp', 'Data Science Certificate', 'Deep Learning Certificate',
  'Python Certificate', 'Coursera Data Science Bootcamp', 'IEEE Membership',
  'Digital Nigeria – Security', 'Digital Nigeria – Networking', 'HTML Certificate',
  'Arewa Data Science Academy', 'Microsoft × DSN Hackathon'
];

export const REFEREES = [
  { name: 'Prof. Ahmad Baita Garko', title: 'Dean, Faculty of Computing', org: 'Federal University Dutse', email: 'abgarko@fud.edu.ng' },
  { name: 'Prof. Abubakar M. Miyim', title: 'Professor, Communication Engineering', org: 'Federal University Dutse', email: 'abubakar.miyim@fud.edu.ng' },
  { name: 'Dr. Alhassan Umar', title: 'Director of ICT', org: 'Jigawa State Polytechnic', email: 'ahumar@jigpoly.edu.ng' },
];

export const CONTACT_INFO = [
  { icon: '✉️', label: 'Email', value: 'muhammad.a@jigpoly.edu.ng', href: 'mailto:muhammad.a@jigpoly.edu.ng' },
  { icon: '✉️', label: 'Alt Email', value: 'eng979710@gmail.com', href: 'mailto:eng979710@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+234 706 704 7161', href: 'tel:+2347067047161' },
  { icon: '💼', label: 'LinkedIn', value: 'muhammad-sani', href: 'https://www.linkedin.com/in/muhammad-sani-578b8b22a' },
  { icon: '💻', label: 'GitHub', value: 'abu1man', href: 'https://github.com/abu1man' },
  { icon: '📱', label: 'Alt Phone', value: '+234 912 201 9026', href: 'tel:+2349122019026' },
];
