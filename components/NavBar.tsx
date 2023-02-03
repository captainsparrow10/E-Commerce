import { Bars3Icon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export default function NavBar() {
	const [open, setOpen] = useState(false)
	const handleMenu = () => setOpen(!open)
	return (
		<nav className="fixed mt-4 flex w-full flex-col items-end p-4">
			<button onClick={() => handleMenu()}>
				<Bars3Icon
					className={`h-8 w-8  ${open ? 'text-gray-600' : 'text-gray-400'}`}
				/>
			</button>
			{open && (
				<ul className="mt-3 mr-8 space-y-4 text-base font-medium">
					<li>Home</li>
					<li>Shop</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			)}
		</nav>
	)
}
