import React from 'react'

export default function Footer() {
	return (
		<footer className="bg-white p-4 dark:bg-black sm:p-6 ">
			<div className="md:flex md:justify-between">
				<div className="mb-6 md:mb-0">
					<span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
						Sparrow
					</span>
				</div>
				<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
					<div>
						<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
							Follow me
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							<li className="mb-4">
								<a
									href="https://github.com/themesberg/flowbite"
									className="hover:underline "
								>
									Github
								</a>
							</li>
							<li>
								<a
									href="https://discord.gg/4eeurUVvTy"
									className="hover:underline"
								>
									Portafolio
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
							Contacts
						</h2>
						<ul className="text-gray-600 dark:text-gray-400 mt-6">
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Email
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Linkedin
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
			<div className="sm:flex sm:items-center sm:justify-between">
				<span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
					© 2023{' '}
					<a href="https://flowbite.com/" className="hover:underline">
						CopyRight
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}
