import React from 'react';
import { Container, Typography, Card, CardContent, Avatar, Grid, Button, LinearProgress, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { courseData } from '../../../data/courses/courseData';

const Roadmap: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Dashboard
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ width: 60, height: 60, mr: 2 }} alt="User Avatar" src="/path-to-avatar.jpg" />
          <Box>
            <Typography variant="h6">daniel ung</Typography>
            <Typography variant="body1" color="textSecondary">I wanna be the goat</Typography>
          </Box>
        </CardContent>
      </Card>
      <Typography variant="h5" gutterBottom>Skills Progress</Typography>
      <Typography variant="subtitle1" gutterBottom>The following courses should be taken in order</Typography>
      {courseData.map((course, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Grid container alignItems="center">
              <Grid item xs={8}>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.topics.length} Topics
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: 'right' }}>
                <Button variant="outlined" onClick={() => navigate(course.path)}>
                  Start
                </Button>
              </Grid>
            </Grid>
            <LinearProgress variant="determinate" value={0} sx={{ mt: 2 }} />
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Roadmap;