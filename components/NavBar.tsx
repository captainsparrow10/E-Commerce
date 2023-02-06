'use client'
import {
	Bars3BottomLeftIcon,
	Bars3Icon,
	HeartIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	UserIcon,
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			{/* Laptop / Desktop */}
			<nav className="hidden h-full w-full items-center justify-between py-6 px-20 lg:flex">
				<h1 className="text-3xl font-bold uppercase">e-commerce</h1>
				<ul className="flex space-x-12 text-base font-medium">
					<li>Home</li>
					<li>Shop</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<div className="flex space-x-12 ">
					<UserIcon className="h-7 w-7 text-gray-400" />
					<MagnifyingGlassIcon className="h-7 w-7 text-gray-400" />
					<HeartIcon className="h-7 w-7 text-gray-400" />
					<ShoppingCartIcon className="h-7 w-7 text-gray-400" />
				</div>
			</nav>
			{/* Mobile / Tablet */}
			<div className="lg:hidden">
				<div className="fixed mt-4 flex w-full justify-end pr-4">
					<button
						onClick={() => {
							setIsOpen(true)
						}}
					>
						<Bars3Icon className="h-8 w-8 text-gray-500" />
					</button>
				</div>
				<main
					className={
						' fixed inset-0 z-10 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out ' +
						(isOpen
							? ' translate-x-0 opacity-100 transition-opacity duration-500  '
							: ' translate-x-full opacity-0 transition-all delay-500  ')
					}
				>
					<section
						className={
							' delay-400 absolute right-0 h-full  w-3/4 transform bg-white shadow-xl transition-all duration-500 ease-in-out  ' +
							(isOpen ? ' translate-x-0 ' : ' translate-x-full')
						}
					>
						<article className="relative flex h-full w-full flex-col space-y-5 p-5">
							<h1 className="text-3xl font-bold uppercase">e-commerce</h1>
							<div className="flex w-full justify-between">
								<h3 className="text-lg font-bold">Menu</h3>
								<button
									onClick={() => {
										setIsOpen(false)
									}}
									className="h-fit w-fit"
								>
									<Bars3BottomLeftIcon className="h-8 w-8 text-gray-500" />
								</button>
							</div>
							<ul className="space-y-5 text-base font-medium">
								<li>Home</li>
								<li>Shop</li>
								<li>About</li>
								<li>Contact</li>
							</ul>
						</article>
					</section>
					<section
						className=" h-full w-screen cursor-pointer "
						onClick={() => {
							setIsOpen(false)
						}}
					></section>
				</main>
			</div>
		</>
	)
}
