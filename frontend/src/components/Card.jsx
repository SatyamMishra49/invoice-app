import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box
} from '@mui/material';
import { Star, StarBorder, Delete } from '@mui/icons-material';

export default function Cards({ title, description, isImportant, onToggleImportant, onDelete }) {
  const [important, setImportant] = useState(isImportant);

  const handleImportantToggle = () => {
    setImportant(!important);
    onToggleImportant();
  };

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2, m: 1.5 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ ml: 'auto' }}>
          <IconButton onClick={handleImportantToggle} color={important ? 'warning' : 'default'}>
            {important ? <Star /> : <StarBorder />}
          </IconButton>
          <IconButton onClick={onDelete} color="error">
            <Delete />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
