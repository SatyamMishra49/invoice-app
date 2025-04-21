import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    InputLabel,
    TextField,
    Typography,
} from '@mui/material';
import Appbar from '../components/Appbar';

export default function Addnotes() {
    return (
        <>
            <Appbar />
            <div className="grid grid-cols-1 jusify center">
                <Card sx={{ m: 2, boxShadow: 2 }}>
                    <CardContent>
                        <Typography
                            variant="h5"
                            sx={{ fontFamily: "'Yesteryear', cursive", mb: 1.5 }}
                        >
                            Create Notes
                        </Typography>
                        <Typography sx={{ mb: 2 }}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="TITLE"
                                variant="outlined"
                            />
                        </Typography>
                        <Typography>
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="DESCRIPTION"
                                multiline
                                rows={6}
                                defaultValue=""
                            />
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', gap: 1, p: 2 }}>
                        <Button variant="contained" color="success" sx={{ flex: 1, boxShadow: 2 }}>
                            CREATE
                        </Button>
                        <Button variant="contained" color="error" sx={{ flex: 1, boxShadow: 2 }}>
                            CANCEL
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
}
