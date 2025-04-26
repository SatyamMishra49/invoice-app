'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    ArrowLeft,
    Email,
    Hexagon,
    Info,
    Mail,
    Navigation,
    Send,
    Unlock,
} from '@deemlol/next-icons';
import Link from 'next/link';

export default function VerifyPage() {
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center">
                <Card className="w-[350px]">
                    <CardHeader className="text-center">
                        <div className="mx-auto flex w-18 h-18 rounded-full items-center justify-center">
                            {/* <Unlock size={48}></Unlock> */}
                            <Hexagon size={48} color="purple"></Hexagon>
                        </div>
                        <CardTitle className="flex items-center justify-center text-2xl">
                            Check your Mailbox!
                        </CardTitle>
                        <CardDescription>
                            We have sent an e-mail to your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="mx-auto w-full p-1.5 flex grid-col items-center justify-center bg-yellow-50 rounded gap-1.5">
                            <Info color="#ea8e19"></Info>
                            <p>Be sure to check your Spam!</p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link
                            href="/"
                            className={buttonVariants({
                                variant: 'outline',
                                className: 'w-full',
                            })}
                        >
                            <ArrowLeft></ArrowLeft>
                            <p>Back to Home</p>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
