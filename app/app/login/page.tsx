import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from '../utils/auth';
import { ToastContainer } from 'react-toastify';

export default function Login() {
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center px-4">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>Get Started!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form
                            action={async (formData) => {
                                'use server';
                                await signIn('nodemailer', formData);
                            }}
                            className="flex flex-col gap-y-2"
                        >
                            <div className="flex flex-col gap-y-2">
                                <Label>Email</Label>
                                <Input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="username@mail.com"
                                />
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <ToastContainer />
        </>
    );
}
