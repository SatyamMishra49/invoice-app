import { Typography } from '@mui/material';
import AppbarLogo from '../assets/scrimba.svg';

export default function Appbar() {
    return (
        <div>
            <nav className="bg-white shadow-md">
                <div className="container mx-auto p-2">
                    <div className="flex items-center">
                        <div className="w-12 h-12">
                            <img
                                src={AppbarLogo}
                                alt="Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="text-5xl ml-1 font-bold">
                            <Typography sx={{ fontFamily: 'Yesteryear, cursive', fontSize: 20 }}>
                                Scrimbo
                            </Typography>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
