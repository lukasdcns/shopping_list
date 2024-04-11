import { redirect } from "next/navigation";
import { getSessionData, handleLogout } from "../lib/actions";

export async function GET(request: Request) {
    const sessionData = await getSessionData();
    
    if (!sessionData) {
        return new Response('No user connected', { status: 400 });
    } else {
        handleLogout();
        redirect('/');
    }
}