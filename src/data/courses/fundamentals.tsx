export const mlCourse = {
    title: "Machine Learning Fundamentals",
    description: "Learn the basics of machine learning, including supervised and unsupervised learning, regression, and classification.",
    path: "/courses/ml",
    lessons: [
      {
        title: "Introduction to Machine Learning",
        path: "/courses/ml/intro",
        subLessons: [
          {
            title: "What is Machine Learning?",
            path: "/courses/ml/intro/what-is-ml",
            content: "Machine Learning is a subset of artificial intelligence...",
            assignment: "Research and list 5 real-world applications of machine learning."
          },
          {
            title: "Supervised vs Unsupervised Learning",
            path: "/courses/ml/intro/supervised-unsupervised",
            content: "In supervised learning, the algorithm learns from labeled data...",
            assignment: "Classify the following scenarios as supervised or unsupervised learning tasks."
          },
          // Add more sub-lessons here
        ]
      },
      {
        title: "Linear Regression",
        path: "/courses/ml/linear-regression",
        subLessons: [
          {
            title: "Introduction to Linear Regression",
            path: "/courses/ml/linear-regression/intro",
            content: "Linear regression is a fundamental algorithm in machine learning...",
            assignment: "Implement a simple linear regression model using Python and numpy."
          },
          // Add more sub-lessons here
        ]
      },
      // Add more lessons here
    ]
  };