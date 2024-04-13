'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function handleLoginFormSubmit(prevState: any, formData: FormData) {

    const destination = formData.get("email");

    if (!destination) {
      return {
          message: "Merci de renseigner une adresse email"
        };
    }

    const requestBody = JSON.stringify({
        destination: destination,
    });

    try {
        const response = await fetch("http://localhost:3000/auth/magic-login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Ajouter Content-Type pour indiquer le type de contenu
                "accept": "application/json",
            },
            body: requestBody,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

      return {
        data: data,
        message: "Un email vous à été envoyé pour vous connecter à votre compte"
        };
    } catch (error) {
      console.error("Fetch error:", error);
      return {
        message: "An error occurred while submitting the form"
      };
    }
}

export async function handleLogin(accessToken: string, userId: string) {
  cookies().set({
    name: "accessToken",
    value: accessToken,
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

    cookies().set({
    name: "userId",
    value: userId,
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
}

export async function handleLogout() {
  cookies().delete('accessToken')
  cookies().delete('userId')
}

export async function getSessionData() {
  const sessionToken = cookies().get('accessToken')?.value
  const sessionUserId = cookies().get('userId')?.value

  return sessionToken && sessionUserId ? { sessionToken: sessionToken, sessionUserId: sessionUserId } : null
}