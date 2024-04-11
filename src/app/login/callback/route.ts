import { handleLogin } from "@/app/lib/actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const accessToken = searchParams.get('access_token'); 
    const userId = searchParams.get('user_id'); 

    if (!accessToken) {
        return new Response('No access token found', { status: 400 });
    }

    if (!userId) {
        return new Response('No user found', { status: 400 });
    }

    handleLogin(accessToken, userId);
    redirect('/')
}