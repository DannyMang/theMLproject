import React from 'react';
import { Typography, Card, CardContent, List, ListItemButton, ListItemText, Button, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Topic, Subtopic } from '../../../../data/courses/courseData';

interface LessonOverviewProps {
  title: string;
  description: string;
  topics: Topic[];
  coursePath: string;
}

const LessonOverview: React.FC<LessonOverviewProps> = ({ title, description, topics, coursePath }) => {
  const navigate = useNavigate();

  const getFirstSubtopicPath = (topics: Topic[]): string => {
    return topics[0].subtopics[0].path;
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>{title}</Typography>
        <Typography variant="body1" paragraph>{description}</Typography>
        <Typography variant="h6" gutterBottom>Lesson contents</Typography>
        {topics.map((topic, topicIndex) => (
          <Card key={topicIndex} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>{topic.title}</Typography>
              <List>
                {topic.subtopics.map((subtopic, subtopicIndex) => (
                  <ListItemButton 
                    key={subtopicIndex} 
                    onClick={() => navigate(subtopic.path)}
                  >
                    <ListItemText primary={subtopic.title} />
                  </ListItemButton>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="outlined" onClick={() => navigate(coursePath)}>Back to Course</Button>
          <Button variant="contained" onClick={() => navigate(getFirstSubtopicPath(topics))}>Start Lesson</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LessonOverview;