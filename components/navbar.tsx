"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

const font = Poppins({
	weight: "200",
	subsets: ["latin-ext"],
});

const Navbar = () => {
	return (
		<div className="fixed  w-full z-50 flex  justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
			<div className="flex items-center">
				<Menu className=" block md:hidden" />

				<Link href="/">
					<h1
						className={cn(
							"hidden md:block md:text-3xl font-bold text-primary text-xl",
							font.className
						)}
					>
						Companion.AI
					</h1>
				</Link>
			</div>

			<div
				className="flex items-center
                gap-x-3"
			>
				<Button variant="premium" size="sm">
					Upgrade
					<Sparkles />
				</Button>
				<ModeToggle />
				<UserButton afterSignOutUrl="/" />
			</div>
		</div>
	);
};
export default Navbar;
