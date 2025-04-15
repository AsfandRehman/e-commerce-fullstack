'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username: e.target.username.value,
      password: e.target.password.value,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="p-6 text-black max-w-md mx-auto">
      <h1 className="text-xl mb-4">Login</h1>
      <form onSubmit={handleLogin}>
        <input name="username" type="text" placeholder="Username" className="block w-full mb-2 p-2 border rounded" required />
        <input name="password" type="password" placeholder="Password" className="block w-full mb-4 p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
