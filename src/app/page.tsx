"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  const {data: session} = authClient.useSession();

	const onSubmit = () => {
		authClient.signUp.email(
			{
				name,
				email,
				password,
			},
			{
				onError: () => {
					window.alert("Something went wrong, please try again.");
				},
				onSuccess: () => {
					window.alert("Success");
				},
			}
		);
	};

  const onLogin = () => {
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: () => {
          window.alert("Something went wrong, please try again.");
        },
        onSuccess: () => {
          window.alert("Logged in successfully");
        },
      }
    )
  }

  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p className="text-lg">Welcome, {session.user.name}!</p>
        <Button onClick={() => {authClient.signOut()}}>Log Out</Button>
      </div>
    )
  }

	return (
		<>
			<div className="flex flex-col p-4 gap-y-4">
				<Input
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button onClick={onSubmit}>Create User</Button>
			</div>

      <div className="flex flex-col p-4 gap-y-4">
				<Input
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button onClick={onLogin}>Log in</Button>
			</div>
		</>
	);
}
