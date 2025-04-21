import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, IconButton, Button, Box } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

export default function Cards({ note, isImportant, onToggleImportant, onDelete, onEdit }) {
    const [important, setImportant] = useState(isImportant);

    const handleImportantToggle = () => {
        setImportant(!important);
        onToggleImportant();
    };

    return (
        <Card sx={{ boxShadow: 3, borderRadius: 2, m: 1.5 }}>
            <CardContent>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "'Yesteryear', cursive" }}
                >
                    {note} Notes
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {note} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
                    deleniti beatae minus fuga expedita, reiciendis iure, sit impedit optio itaque,
                    aspernatur cum incidunt. Eius distinctio, architecto suscipit corrupti esse
                    voluptatem.
                </Typography>
            </CardContent>
            <CardActions>
                <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
                    <IconButton
                        onClick={handleImportantToggle}
                        color={important ? 'warning' : 'default'}
                    >
                        {important ? <Star /> : <StarBorder />}
                    </IconButton>
                    <Button variant="outlined" color="primary" onClick={onEdit}>
                        Edit
                    </Button>
                    <Button variant="outlined" color="error" onClick={onDelete}>
                        Delete
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
}
