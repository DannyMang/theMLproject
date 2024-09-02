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
import { courseData, Course, Lesson } from './data/courses/courseData';

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

  const renderLessonRoutes = (lessons: Lesson[], coursePath: string): JSX.Element[] => {
    return lessons.flatMap((lesson: Lesson, index: number) => {
      const routes = [];

      if (lesson.subLessons) {
        routes.push(
          <Route
            key={lesson.path}
            path={lesson.path}
            element={
              <LessonOverview
                title={lesson.title}
                description=""
                subLessons={lesson.subLessons}
                coursePath={coursePath}
              />
            }
          />
        );
        routes.push(...renderLessonRoutes(lesson.subLessons, coursePath));
      } else {
        routes.push(
          <Route
            key={lesson.path}
            path={lesson.path}
            element={
              <LessonContent
                title={lesson.title}
                contentPath={lesson.contentPath || ''}
                assignment=""
                nextLessonPath={index < lessons.length - 1 ? lessons[index + 1].path : null}
                prevLessonPath={index > 0 ? lessons[index - 1].path : null}
                coursePath={coursePath}
              />
            }
          />
        );
      }

      return routes;
    });
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
           <Route path="/contribute" element= {
            isAuthenticated ? <Contribute /> : <Navigate to="/" replace />
            }
           />

          <Route path="/signup" element={<SignUp onAuthentication={handleAuthentication} />} />
          
          {courseData.map((course: Course) => (
            <React.Fragment key={course.path}>
              <Route
                path={course.path}
                element={
                  <LessonOverview
                    title={course.title}
                    description=""
                    subLessons={course.lessons}
                    coursePath={course.path}
                  />
                }
              />
              {renderLessonRoutes(course.lessons, course.path)}
            </React.Fragment>
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;