import { requireUser } from '../utils/hook';
import { signOut } from '../utils/auth';
import SignoutButton from '../components/SignoutButton';

export default async function Dashboard() {
    // const session = await requireUser();

    return (
        <>
            <div>
                Dashboard Page
                <form
                    action={async () => {
                        'use server';
                        await signOut();
                    }}
                >
                    <button type="submit">Signout</button>
                </form>
                <SignoutButton />
            </div>
        </>
    );
}
