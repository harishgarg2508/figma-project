// app/login/action.ts

'use server';

import { redirect } from 'next/navigation';
import { createSession } from "../../lib/session";

export async function login() {
  try {
    // Correctly fetch the login API endpoint using the GET method
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/login`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check for a successful response status
    if (!response.ok) {
      throw new Error(`Authentication failed with status: ${response.status}`);
    }

    const data = await response.json();
    await createSession(data.user.id);

    // Redirect to the dashboard page after successful login
    redirect('/dashboard');
  } catch (error) {
    // Log the error for server-side debugging
    console.error('Authentication failed:', error);
    throw new Error('Authentication failed');
  }
}
