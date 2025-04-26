import { ReactNode } from 'react';
import { requireUser } from '../utils/hook';
import Logo from '@/public/Logo.svg';
import Image from 'next/image';
import { DashboardLinks } from '../components/DashboardLinks';
import { GitMerge, LogOut, User } from '@deemlol/next-icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';

export default async function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    // const session = await requireUser();

    return (
        <>
            <div className="grid min-h-screen w-full md:gird-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-muted/40 md:block">
                    <div className="flex flex-col max-h-screen h-full gap-2">
                        <div className="h-14 flex items-center border-b px-4 lg:h-[60px] lg:px-6">
                            <Image
                                src={Logo}
                                alt="Logo"
                                className="h-16 w-30 color-red-600"
                            ></Image>
                        </div>
                        <div className="flex-1">
                            <nav className="grid items-start px-2 text-sm font-medium">
                                <DashboardLinks />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <header className="flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6">
                        <div className="flex items-center ml-auto">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        className="h-11 w-11 rounded-full"
                                        variant="outline"
                                    >
                                        <User color="blue" size={30}></User>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="shadow-sm">
                                    <DropdownMenuItem>
                                        <GitMerge></GitMerge>Invoice
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <LogOut />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
}
