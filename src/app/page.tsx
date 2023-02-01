'use client'

import { useState } from 'react'
import {
	Bars3Icon,
	HeartIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	UserIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Home() {
	const [open, setOpen] = useState(false)
	const handleMenu = () => setOpen(!open)
  const menu = "/public/assets/pcgamer.svg"
	return (
		<main className="static">
			<div className="flex h-screen items-center justify-center">
				<nav className="fixed top-4 flex w-full flex-col items-end p-4">
					<button onClick={() => handleMenu()}>
						<Bars3Icon
							className={`h-8 w-8  ${open ? 'text-gray-600' : 'text-gray-400'}`}
						/>
					</button>
					{open && (
						<ul className="mt-3 space-y-4 text-base font-medium">
							<li>Home</li>
							<li>Shop</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
					)}
				</nav>
				<div className="flex h-full flex-col justify-center">
					<div className="h-1/3 w-full">
						<h2 className="text-[64px] font-medium leading-[96px]">Pc Gamer</h2>
						<button className="border-2 border-white text-2xl font-medium leading-9 hover:border-b-black">
							Shop Now
						</button>
					</div>
					<div className="relative h-1/3 w-full">
						<Image src="/assets/pcgamer.svg" alt="image" fill={true} />
					</div>
				</div>
			</div>
			<div className="fixed bottom-0 flex w-full items-center justify-evenly border-t border-gray-200 p-4 drop-shadow-lg">
				<UserIcon className="h-8 w-8 text-gray-400" />
				<MagnifyingGlassIcon className="h-8 w-8 text-gray-400" />
				<HeartIcon className="h-8 w-8 text-gray-400" />
				<ShoppingCartIcon className="h-8 w-8 text-gray-400" />
			</div>
		</main>
	)
}
