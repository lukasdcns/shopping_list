import { redirect } from "next/navigation";
import { getUser } from "../lib/users";

export default async function Page() {
    const user = await getUser();

    // if (!user) {
    //     redirect('/login');
    // }

    return (
        <main>
            <h1>{user.email}</h1>
        </main>
    );
}