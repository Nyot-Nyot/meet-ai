"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomeView() {
	const router = useRouter();
	const { data: session } = authClient.useSession();

	if (!session) {
		return <p>Loading...</p>;
	}

	return (
		<div className="flex flex-col p-4 gap-y-4">
			<p className="text-lg">Welcome, {session.user.name}!</p>
			<Button
				onClick={() => {
					authClient.signOut({
						fetchOptions: {
							onSuccess: async () => {
								router.push("/");
							},
						},
					});
				}}
			>
				Log Out
			</Button>
		</div>
	);
}
