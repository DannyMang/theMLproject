import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { courseData } from '../../data/courses/courseData';

const AllPaths: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        All Paths
      </Typography>
      <Grid container spacing={3}>
        {courseData.map((course, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>{course.title}</Typography>
                <Typography variant="subtitle1" gutterBottom>{course.topics.length} Topics</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="contained" color="primary" onClick={() => navigate(course.path)}>
                    Start
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllPaths;