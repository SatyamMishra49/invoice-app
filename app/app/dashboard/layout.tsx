import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div>
                Hello from layout!
                {children}
            </div>
        </>
    );
}
