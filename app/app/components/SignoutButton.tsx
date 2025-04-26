'use client';

import { toast } from 'react-toastify';

export default function SignoutButton() {
    const handleOnClick = async () => {
        toast.info('Loading ...');
    };

    return (
        <>
            <button type="button" onClick={handleOnClick}>
                Test
            </button>
        </>
    );
}
