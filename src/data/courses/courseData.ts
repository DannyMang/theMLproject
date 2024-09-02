export interface Lesson {
  title: string;
  path: string;
  contentPath?: string;
  subLessons?: Lesson[];
}

export interface Course {
  title: string;
  path: string;
  lessons: Lesson[];
}
export const courseData: Course[] = [
    {
      title: "Fundamentals",
      path: "/fundamentals",
      lessons: [
        { title: "What is ML?", path: "/fundamentals/what-is-ml", contentPath: "/lessonContent/fundamentals/what-is-ml.md"},
        { title: "Difference between ML/AI", path: "/fundamentals/ml-vs-ai", contentPath: "/lessonContent/fundamentals/difference-ml-ai.md" },
        { title: "Supervised vs Unsupervised / Reinforcement Learning", path: "/fundamentals/learning-types" },
        { title: "Why should you learn ML? Examples", path: "/fundamentals/why-learn-ml" }
      ]
    },
    {
      title: "Prerequisites",
      path: "/prerequisites",
      lessons: [
        { 
          title: "Python", 
          path: "/prerequisites/python",
          subLessons: [
            { title: "Python Syntax", path: "/prerequisites/python/syntax" },
            { title: "Python Libraries", path: "/prerequisites/python/libraries" }
          ]
        },
        { title: "  Math", path: "/prerequisites/math" },
        { title: "Miscellaneous", path: "/prerequisites/misc" }
      ]
    },
    {
      title: "Machine Learning",
      path: "/machine-learning",
      lessons: [
        { title: "Supervised Learning VS Unsupervised learning", path: "/machine-learning/supervised-unsupervised" },
        { title: "Cost Function", path: "/machine-learning/cost-function" },
        { title: "Gradient Descent", path: "/machine-learning/gradient-descent" },
        { title: "Multivariate Regression", path: "/machine-learning/multivariate-regression" },
        { title: "Feature Scaling / Normalization", path: "/machine-learning/feature-scaling" },
        { title: "Feature Engineering", path: "/machine-learning/feature-engineering" },
        { title: "Tensorflow / Pytorch Intro", path: "/machine-learning/tensorflow-pytorch" },
        { title: "Logistic Regression", path: "/machine-learning/logistic-regression" },
        { title: "Overfitting vs Underfitting", path: "/machine-learning/overfitting-underfitting" }
      ]
    },
    {
      title: "Deep Learning",
      path: "/deep-learning",
      lessons: [
        { title: "Intro to Neural Network and Deep Learning", path: "/deep-learning/intro" },
        { title: "The Neural Network", path: "/deep-learning/neural-network" },
        { title: "Training the NN", path: "/deep-learning/training" },
        { title: "Implementing a NN in Tensorflow", path: "/deep-learning/tensorflow-implementation" },
        { title: "Gradient Descent", path: "/deep-learning/gradient-descent" },
        { title: "CNN", path: "/deep-learning/cnn" },
        { title: "Sequence Models / RNN", path: "/deep-learning/sequence-models" },
        { title: "Deep RL", path: "/deep-learning/deep-rl" }
      ]
    }
  ];