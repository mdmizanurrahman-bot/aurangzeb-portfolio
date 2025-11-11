// localStorage-based data storage - No Supabase needed!

// Initialize default data if not exists
const initializeStorage = () => {
  if (!localStorage.getItem('portfolio_initialized')) {
    // Initialize with sample data
    localStorage.setItem('projects', JSON.stringify([
      {
        id: 'sample-1',
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce platform with seamless shopping experience, featuring advanced product filtering, secure payment integration, and real-time inventory management.',
        image: '',
        category: 'Web Development',
        featured: true,
        tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/example',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'sample-2',
        title: 'Mobile Banking App',
        description: 'Intuitive mobile banking interface with enhanced security features, biometric authentication, and instant transaction capabilities.',
        image: '',
        category: 'Mobile App',
        featured: true,
        tags: ['React Native', 'Firebase', 'Security'],
        liveUrl: '',
        githubUrl: '',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'sample-3',
        title: 'Brand Identity Design',
        description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines for a luxury fashion brand.',
        image: '',
        category: 'Branding',
        featured: false,
        tags: ['Figma', 'Illustrator', 'Branding'],
        liveUrl: '',
        githubUrl: '',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'sample-4',
        title: 'Real Estate Dashboard',
        description: 'Comprehensive property management dashboard with analytics, tenant management, and financial reporting.',
        image: '',
        category: 'UI/UX Design',
        featured: true,
        tags: ['UI/UX', 'Dashboard', 'Analytics'],
        liveUrl: '',
        githubUrl: '',
        createdAt: new Date().toISOString(),
      },
    ]));
    localStorage.setItem('posts', JSON.stringify([
      {
        id: 'post-1',
        title: 'Getting Started with Web Development in 2025',
        excerpt: 'Learn the fundamentals of modern web development and the latest tools you need to succeed.',
        content: 'Web development is an exciting field that continues to evolve. In this comprehensive guide, we explore the essential technologies every aspiring web developer should master...',
        thumbnail: '',
        author: 'Aurangzeb Sunny',
        readTime: '5 min read',
        tags: ['Web Dev', 'Tutorial', 'Beginner'],
        createdAt: new Date().toISOString(),
      },
      {
        id: 'post-2',
        title: 'Design Principles for Better UX',
        excerpt: 'Discover key design principles that will elevate your user experience design skills.',
        content: 'User experience design is more than just making things look pretty. It\'s about creating intuitive, accessible, and delightful experiences...',
        thumbnail: '',
        author: 'Aurangzeb Sunny',
        readTime: '7 min read',
        tags: ['UX', 'Design', 'Best Practices'],
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: 'post-3',
        title: 'The Power of Modern CSS',
        excerpt: 'Explore advanced CSS techniques that can transform your web designs.',
        content: 'Modern CSS has evolved tremendously, offering powerful features like Grid, Flexbox, Custom Properties, and more...',
        thumbnail: '',
        author: 'Aurangzeb Sunny',
        readTime: '6 min read',
        tags: ['CSS', 'Frontend', 'Tutorial'],
        createdAt: new Date(Date.now() - 172800000).toISOString(),
      },
    ]));
    localStorage.setItem('videos', JSON.stringify([
      {
        id: 'video-sample-1',
        title: 'Building Modern Web Apps - Complete Tutorial',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        description: 'Learn how to build modern, responsive web applications using React, TypeScript, and Tailwind CSS. This comprehensive tutorial covers everything from setup to deployment.',
        createdAt: new Date().toISOString(),
      },
    ]));
    localStorage.setItem('certificates', JSON.stringify([
      {
        id: 'cert-1',
        title: 'Advanced React Development',
        issuer: 'Meta',
        date: '2024',
        image: '',
        credentialUrl: '',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'cert-2',
        title: 'UI/UX Design Specialization',
        issuer: 'Google',
        date: '2023',
        image: '',
        credentialUrl: '',
        createdAt: new Date().toISOString(),
      },
    ]));
    localStorage.setItem('jobs', JSON.stringify([
      {
        id: 'job-1',
        title: 'Senior UI/UX Designer & Full Stack Developer',
        company: 'Freelance',
        period: '2022 - Present',
        description: 'Leading design and development initiatives for various clients, creating user-centered solutions and modern web applications. Specializing in React, Node.js, and responsive design.',
        skills: ['Figma', 'React', 'Node.js', 'UI/UX', 'TypeScript'],
        achievements: ['Delivered 50+ projects', 'Client satisfaction: 98%'],
        current: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: 'job-2',
        title: 'Lead Frontend Developer',
        company: 'Tech Innovations Inc.',
        period: '2020 - 2022',
        description: 'Led frontend development team, architected scalable applications, and implemented best practices for code quality and performance.',
        skills: ['React', 'Redux', 'TypeScript', 'Testing'],
        achievements: ['Reduced load time by 40%', 'Mentored 5 junior developers'],
        current: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: 'job-3',
        title: 'UI/UX Designer',
        company: 'Creative Studio',
        period: '2018 - 2020',
        description: 'Designed user interfaces for web and mobile applications, conducted user research, and created interactive prototypes.',
        skills: ['Figma', 'Sketch', 'Prototyping', 'User Research'],
        achievements: ['Redesigned 3 major products', 'Improved user engagement by 60%'],
        current: false,
        createdAt: new Date().toISOString(),
      },
    ]));
    localStorage.setItem('reviews', JSON.stringify([
      {
        id: 'review-1',
        name: 'John Anderson',
        role: 'CEO',
        company: 'Startup Inc',
        review: 'Exceptional work! Aurangzeb delivered beyond our expectations. His attention to detail and creative solutions truly set him apart. Highly recommended for any design or development project.',
        rating: 5,
        avatar: '',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'review-2',
        name: 'Sarah Mitchell',
        role: 'Product Manager',
        company: 'Tech Solutions',
        review: 'Working with Aurangzeb was a fantastic experience. He understood our vision perfectly and brought it to life with elegant design and clean code. Communication was excellent throughout.',
        rating: 5,
        avatar: '',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'review-3',
        name: 'Michael Chen',
        role: 'Marketing Director',
        company: 'Digital Agency',
        review: 'Outstanding professionalism and technical expertise. Aurangzeb transformed our outdated website into a modern, high-performing platform that exceeded all our goals.',
        rating: 5,
        avatar: '',
        createdAt: new Date().toISOString(),
      },
    ]));
    localStorage.setItem('qas', JSON.stringify([
      {
        id: 'qa-1',
        question: 'What services do you offer?',
        answer: 'I offer comprehensive UI/UX design, web development (React, Next.js, Node.js), mobile app development, branding and identity design, digital marketing, SEO optimization, and e-commerce solutions.',
        category: 'Services',
        order: 1,
        createdAt: new Date().toISOString(),
      },
      {
        id: 'qa-2',
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on scope and complexity. A typical landing page takes 1-2 weeks, a full website 3-6 weeks, and larger applications 2-4 months. I provide detailed timelines during consultation.',
        category: 'Timeline',
        order: 2,
        createdAt: new Date().toISOString(),
      },
      {
        id: 'qa-3',
        question: 'What is your design process?',
        answer: 'My process includes: 1) Discovery & Research, 2) Wireframing & Prototyping, 3) Visual Design, 4) Development, 5) Testing & QA, 6) Launch & Support. I maintain close collaboration throughout each phase.',
        category: 'Process',
        order: 3,
        createdAt: new Date().toISOString(),
      },
      {
        id: 'qa-4',
        question: 'Do you provide ongoing support?',
        answer: 'Yes! I offer various maintenance and support packages including bug fixes, content updates, performance optimization, and feature enhancements. All projects include 30 days of free support.',
        category: 'Support',
        order: 4,
        createdAt: new Date().toISOString(),
      },
      {
        id: 'qa-5',
        question: 'What are your rates?',
        answer: 'My rates vary depending on project complexity and requirements. I offer both fixed-price projects and hourly rates. Contact me for a detailed quote tailored to your specific needs.',
        category: 'Pricing',
        order: 5,
        createdAt: new Date().toISOString(),
      },
    ]));
    localStorage.setItem('messages', JSON.stringify([]));
    localStorage.setItem('newsletter', JSON.stringify([]));
    localStorage.setItem('settings', JSON.stringify({
      profileImage: '',
      resumeUrl: '',
      linkedin: 'https://linkedin.com/in/aurangzebsunny',
      github: 'https://github.com/aurangzebsunny',
      instagram: 'https://instagram.com/aurangzebsunny',
      email: 'aurangzeb@example.com',
      phone: '+1234567890',
      whatsapp: '+1234567890',
    }));
    localStorage.setItem('portfolio_initialized', 'true');
  }
};

// Generic storage functions
const getItems = (key: string) => {
  initializeStorage();
  try {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : [];
  } catch (error) {
    console.error(`Error getting ${key}:`, error);
    return [];
  }
};

const setItems = (key: string, items: any[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(items));
    return true;
  } catch (error) {
    console.error(`Error setting ${key}:`, error);
    return false;
  }
};

const addItem = (key: string, item: any) => {
  const items = getItems(key);
  const newItem = {
    ...item,
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
  };
  items.push(newItem);
  setItems(key, items);
  return newItem;
};

const updateItem = (key: string, id: string, updates: any) => {
  const items = getItems(key);
  const index = items.findIndex((item: any) => item.id === id);
  if (index !== -1) {
    items[index] = {
      ...items[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    setItems(key, items);
    return true;
  }
  return false;
};

const deleteItem = (key: string, id: string) => {
  const items = getItems(key);
  const filtered = items.filter((item: any) => item.id !== id);
  setItems(key, filtered);
  return true;
};

// Export storage API
export const storage = {
  // Projects
  getProjects: () => getItems('projects'),
  addProject: (project: any) => addItem('projects', project),
  updateProject: (id: string, updates: any) => updateItem('projects', id, updates),
  deleteProject: (id: string) => deleteItem('projects', id),

  // Posts
  getPosts: () => getItems('posts'),
  addPost: (post: any) => addItem('posts', post),
  updatePost: (id: string, updates: any) => updateItem('posts', id, updates),
  deletePost: (id: string) => deleteItem('posts', id),

  // Videos
  getVideos: () => getItems('videos'),
  addVideo: (video: any) => addItem('videos', video),
  updateVideo: (id: string, updates: any) => updateItem('videos', id, updates),
  deleteVideo: (id: string) => deleteItem('videos', id),

  // Certificates
  getCertificates: () => getItems('certificates'),
  addCertificate: (cert: any) => addItem('certificates', cert),
  deleteCertificate: (id: string) => deleteItem('certificates', id),

  // Jobs
  getJobs: () => getItems('jobs'),
  addJob: (job: any) => addItem('jobs', job),
  updateJob: (id: string, updates: any) => updateItem('jobs', id, updates),
  deleteJob: (id: string) => deleteItem('jobs', id),

  // Reviews
  getReviews: () => getItems('reviews'),
  addReview: (review: any) => addItem('reviews', review),
  deleteReview: (id: string) => deleteItem('reviews', id),

  // Q&A
  getQAs: () => getItems('qas'),
  addQA: (qa: any) => addItem('qas', qa),
  updateQA: (id: string, updates: any) => updateItem('qas', id, updates),
  deleteQA: (id: string) => deleteItem('qas', id),

  // Messages
  getMessages: () => getItems('messages'),
  addMessage: (message: any) => addItem('messages', message),
  updateMessage: (id: string, updates: any) => updateItem('messages', id, updates),
  deleteMessage: (id: string) => deleteItem('messages', id),

  // Settings
  getSettings: () => {
    initializeStorage();
    try {
      const settings = localStorage.getItem('settings');
      return settings ? JSON.parse(settings) : {};
    } catch (error) {
      return {};
    }
  },
  updateSettings: (settings: any) => {
    try {
      localStorage.setItem('settings', JSON.stringify({
        ...settings,
        updatedAt: new Date().toISOString(),
      }));
      return true;
    } catch (error) {
      console.error('Error updating settings:', error);
      return false;
    }
  },

  // Analytics
  getAnalytics: () => {
    const projects = getItems('projects');
    const posts = getItems('posts');
    const messages = getItems('messages');
    const videos = getItems('videos');
    const certificates = getItems('certificates');
    const jobs = getItems('jobs');
    const reviews = getItems('reviews');
    
    const unreadMessages = messages.filter((m: any) => !m.read).length;

    return {
      totalProjects: projects.length,
      totalPosts: posts.length,
      totalMessages: messages.length,
      unreadMessages,
      totalVideos: videos.length,
      totalCertificates: certificates.length,
      totalJobs: jobs.length,
      totalReviews: reviews.length,
    };
  },

  // Aura Assistant - Save lead info
  auraSubmitInfo: (info: any) => {
    const message = {
      name: info.name,
      email: info.email,
      phone: info.phone || '',
      subject: 'Aura Assistant Lead',
      message: info.message || 'Lead captured from Aura Assistant',
      source: 'aura-assistant',
      read: false,
      createdAt: new Date().toISOString(),
    };
    return addItem('messages', message);
  },

  // Newsletter Subscriptions
  getNewsletterSubscriptions: () => getItems('newsletter'),
  addNewsletterSubscription: (email: string) => {
    const subscription = {
      email,
      subscribedAt: new Date().toISOString(),
    };
    return addItem('newsletter', subscription);
  },
  deleteNewsletterSubscription: (id: string) => deleteItem('newsletter', id),
};