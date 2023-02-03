import Image from 'next/image'
import React from 'react'

export default function NewProduct() {
	return (
		<div className="flex h-[639px] w-full flex-col items-center">
			<div className="relative h-2/3 w-full">
				<Image src="/assets/tablegamer1.svg" alt="images" fill={true} />
			</div>
			<div className="flex flex-col items-center">
				<h3 className="text-2xl font-medium leading-9">New Items</h3>
				<h2 className="text-5xl font-bold leading-[72px]">Table gamer</h2>
				<button className="mt-8 border border-black py-4 px-16">
					Order Now
				</button>
			</div>
		</div>
	)
}
