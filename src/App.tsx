import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/pages/Header/Header';
import Dashboard from './components/pages/Roadmap/Roadmap';
import AllPaths from './components/pages/Pathways';
import MarketingPage from './components/landing-page/MarketingPage';
import SignUp from './components/SignUp/SignUp';
import LessonOverview from './components/pages/Lessons/LessonOverview/LessonOverview';
import LessonContent from './components/pages/Lessons/LessonContent/LessonContent';
import Contribute from './components/pages/Contribute/Contribute';  
import { courseData, Course, Topic, Subtopic } from './data/courses/courseData';

const App: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  const renderCourseRoutes = (course: Course): JSX.Element[] => {
    const routes: JSX.Element[] = [
      <Route
        key={course.path}
        path={course.path}
        element={
          <LessonOverview
            title={course.title}
            description={course.description|| ""}
            topics={course.topics}
            coursePath={course.path}
          />
        }
      />
    ];

    course.topics.forEach((topic: Topic) => {
      routes.push(
        <Route
          key={topic.path}
          path={topic.path}
          element={
            <LessonOverview
              title={topic.title}
              description=""
              topics={[topic]}
              coursePath={course.path}
            />
          }
        />
      );

      topic.subtopics.forEach((subtopic: Subtopic, index: number) => {
        routes.push(
          <Route
            key={subtopic.path}
            path={subtopic.path}
            element={
              <LessonContent
                title={subtopic.title}
                contentPath={`${process.env.PUBLIC_URL}/data/courses/lessonContent${subtopic.path}.md`}
                assignment=""
                nextLessonPath={index < topic.subtopics.length - 1 ? topic.subtopics[index + 1].path : null}
                prevLessonPath={index > 0 ? topic.subtopics[index - 1].path : null}
                coursePath={course.path}
              />
            }
          />
        );
      });
    });

    return routes;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {isAuthenticated && <Header toggleTheme={toggleTheme} />}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <MarketingPage />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/all-paths"
            element={
              isAuthenticated ? <AllPaths /> : <Navigate to="/" replace />
            }
          />
          <Route 
            path="/contribute" 
            element={
              isAuthenticated ? <Contribute /> : <Navigate to="/" replace />
            }
          />
          <Route path="/signup" element={<SignUp onAuthentication={handleAuthentication} />} />
          
          {courseData.map((course: Course) => (
            <React.Fragment key={course.path}>
              {renderCourseRoutes(course)}
            </React.Fragment>
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;