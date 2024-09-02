import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Button, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface LessonContentProps {
  title: string;
  contentPath: string;
  assignment: string;
  nextLessonPath: string | null;
  prevLessonPath: string | null;
  coursePath: string;
}

const LessonContent: React.FC<LessonContentProps> = ({ 
  title, 
  contentPath, 
  assignment, 
  nextLessonPath, 
  prevLessonPath, 
  coursePath 
}) => {
  const navigate = useNavigate();
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(contentPath);
        const text = await response.text();
        setContent(text);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching lesson content:', error);
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [contentPath]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>{title}</Typography>
        <Box sx={{ my: 4 }}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </Box>
        {assignment && (
          <Box sx={{ my: 4, p: 2, bgcolor: 'grey.100' }}>
            <Typography variant="h6" gutterBottom>Assignment</Typography>
            <ReactMarkdown>{assignment}</ReactMarkdown>
          </Box>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button 
            variant="outlined" 
            onClick={() => prevLessonPath ? navigate(prevLessonPath) : navigate(coursePath)}
          >
            {prevLessonPath ? 'Previous' : 'Back to Course'}
          </Button>
          {nextLessonPath && (
            <Button variant="contained" onClick={() => navigate(nextLessonPath)}>
              Next Lesson
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default LessonContent;