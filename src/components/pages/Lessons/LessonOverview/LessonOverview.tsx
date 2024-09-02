import React from 'react';
import { Typography, Card, CardContent, List, ListItemButton, ListItemText, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface SubLesson {
  title: string;
  path: string;
}

interface LessonOverviewProps {
  title: string;
  description: string;
  subLessons: SubLesson[];
  coursePath: string;
}

const LessonOverview: React.FC<LessonOverviewProps> = ({ title, description, subLessons, coursePath }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>{title}</Typography>
        <Typography variant="body1" paragraph>{description}</Typography>
        <Typography variant="h6" gutterBottom>Lesson contents</Typography>
        <List>
          {subLessons.map((subLesson, index) => (
            <ListItemButton key={index} onClick={() => navigate(subLesson.path)}>
              <ListItemText primary={subLesson.title} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="outlined" onClick={() => navigate(coursePath)}>Back to Course</Button>
          <Button variant="contained" onClick={() => navigate(subLessons[0].path)}>Start Lesson</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LessonOverview;