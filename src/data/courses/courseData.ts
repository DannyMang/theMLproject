export interface Subtopic {
  title: string;
  path: string;
}

export interface Topic {
  title: string;
  path: string;
  subtopics: Subtopic[];
}

export interface Course {
  title: string;
  path: string;
  description?: string;
  topics: Topic[];
}

export const courseData: Course[] = [
  {
    title: "Fundamentals",
    path: "/fundamentals",
    description: "Learn the basics of machine learning, including setting up your environment, Python, linear algebra, and calculus.",
    topics: [
      {
        title: "Gentle Introduction to Machine Learning",
        path: "/fundamentals/intro-to-ml",
        subtopics: [
          { title: "What is ML?", path: "/fundamentals/intro-to-ml/what-is-ml"},
          { title: "Supervised vs Unsupervised Learning", path: "/fundamentals/intro-to-ml/supervised-unsupervised" },
          { title: "Why should you learn ML?", path: "/fundamentals/intro-to-ml/why-learn-ml" },
          { title: "Motivation for the course", path: "/fundamentals/intro-to-ml/motivation" },
          { title: "Join theMLProject community", path: "/fundamentals/intro-to-ml/join-community" }
        ]
      },
      {
        title: "Setting Up",
        path: "/fundamentals/setting-up",
        subtopics: [
          { title: "Introduction to Jupyter Notebooks", path: "/fundamentals/setting-up/jupyter-notebooks" },
          { title: "Installations", path: "/fundamentals/setting-up/installations" },
          { title: "Setting up Git", path: "/fundamentals/setting-up/git-setup" }
        ]
      },
      {
        title: "Git Basics",
        path: "/fundamentals/git-basics",
        subtopics: [
          { title: "Introduction to GitHub", path: "/fundamentals/git-basics/intro-to-github" }
        ]
      },
      {
        title: "Python",
        path: "/fundamentals/python",
        subtopics: [
          { title: "Gentle Introduction to Python", path: "/fundamentals/python/intro" },
          { title: "Python Syntax", path: "/fundamentals/python/syntax" },
          { title: "Loops and Functions", path: "/fundamentals/python/loops-functions" }
        ]
      },
      {
        title: "Linear Algebra",
        path: "/fundamentals/linear-algebra",
        subtopics: [
          { title: "Representations in Linear Algebra", path: "/fundamentals/linear-algebra/representations" },
          { title: "Vectors: Adding and Subtracting", path: "/fundamentals/linear-algebra/vectors" },
          { title: "Dot Product and Matrix Multiplication", path: "/fundamentals/linear-algebra/dot-product-matrix" }
        ]
      },
      {
        title: "Calculus Needed for ML",
        path: "/fundamentals/calculus",
        subtopics: [
          { title: "Notation", path: "/fundamentals/calculus/notation" },
          { title: "The Derivative", path: "/fundamentals/calculus/derivative" }
        ]
      }
    ]
  },
  {
    title: "Prerequisites",
    path: "/prerequisites",
    description: "Learn the basics of Python, mathematics, and other prerequisites needed for machine learning.",
    topics: [
      {
        title: "Python",
        path: "/prerequisites/python",
        subtopics: [
          { title: "Python Syntax", path: "/prerequisites/python/syntax" },
          { title: "Python Libraries", path: "/prerequisites/python/libraries" }
        ]
      },
      {
        title: "Math",
        path: "/prerequisites/math",
        subtopics: [
          { title: "Basic Mathematics", path: "/prerequisites/math/basics" }
        ]
      },
      {
        title: "Miscellaneous",
        path: "/prerequisites/misc",
        subtopics: [
          { title: "Other Prerequisites", path: "/prerequisites/misc/other" }
        ]
      }
    ]
  },
  {
    title: "Machine Learning",
    path: "/machine-learning",
    topics: [
      {
        title: "Supervised vs Unsupervised Learning",
        path: "/machine-learning/supervised-unsupervised",
        subtopics: [
          { title: "Supervised Learning", path: "/machine-learning/supervised-unsupervised/supervised" },
          { title: "Unsupervised Learning", path: "/machine-learning/supervised-unsupervised/unsupervised" }
        ]
      },
      {
        title: "Core Concepts",
        path: "/machine-learning/core-concepts",
        subtopics: [
          { title: "Cost Function", path: "/machine-learning/core-concepts/cost-function" },
          { title: "Gradient Descent", path: "/machine-learning/core-concepts/gradient-descent" },
          { title: "Multivariate Regression", path: "/machine-learning/core-concepts/multivariate-regression" }
        ]
      },
      {
        title: "Feature Engineering",
        path: "/machine-learning/feature-engineering",
        subtopics: [
          { title: "Feature Scaling / Normalization", path: "/machine-learning/feature-engineering/scaling" },
          { title: "Feature Selection", path: "/machine-learning/feature-engineering/selection" }
        ]
      },
      {
        title: "Tools and Frameworks",
        path: "/machine-learning/tools",
        subtopics: [
          { title: "Tensorflow Intro", path: "/machine-learning/tools/tensorflow" },
          { title: "Pytorch Intro", path: "/machine-learning/tools/pytorch" }
        ]
      },
      {
        title: "Advanced Topics",
        path: "/machine-learning/advanced",
        subtopics: [
          { title: "Logistic Regression", path: "/machine-learning/advanced/logistic-regression" },
          { title: "Overfitting vs Underfitting", path: "/machine-learning/advanced/overfitting-underfitting" }
        ]
      }
    ]
  },
  {
    title: "Deep Learning",
    path: "/deep-learning",
    topics: [
      {
        title: "Introduction to Neural Networks",
        path: "/deep-learning/intro",
        subtopics: [
          { title: "What is Deep Learning?", path: "/deep-learning/intro/what-is-deep-learning" },
          { title: "Neural Network Basics", path: "/deep-learning/intro/nn-basics" }
        ]
      },
      {
        title: "Building Neural Networks",
        path: "/deep-learning/building-nn",
        subtopics: [
          { title: "The Neural Network Architecture", path: "/deep-learning/building-nn/architecture" },
          { title: "Training Neural Networks", path: "/deep-learning/building-nn/training" },
          { title: "Implementing a NN in Tensorflow", path: "/deep-learning/building-nn/tensorflow-implementation" }
        ]
      },
      {
        title: "Advanced Neural Network Concepts",
        path: "/deep-learning/advanced-concepts",
        subtopics: [
          { title: "Gradient Descent in Deep Learning", path: "/deep-learning/advanced-concepts/gradient-descent" },
          { title: "Convolutional Neural Networks (CNN)", path: "/deep-learning/advanced-concepts/cnn" },
          { title: "Sequence Models / RNN", path: "/deep-learning/advanced-concepts/sequence-models" }
        ]
      },
      {
        title: "Deep Reinforcement Learning",
        path: "/deep-learning/deep-rl",
        subtopics: [
          { title: "Introduction to Deep RL", path: "/deep-learning/deep-rl/intro" },
          { title: "Deep RL Algorithms", path: "/deep-learning/deep-rl/algorithms" }
        ]
      }
    ]
  }
];