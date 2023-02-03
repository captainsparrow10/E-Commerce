import Image from 'next/image'
import React from 'react'

export default function TopPickForYou() {
	return (
		<div className="flex h-full w-full flex-col items-center space-y-14 py-14">
			<div className="flex flex-col items-center space-y-3">
				<h2 className="text-4xl font-medium leading-[56px] underline underline-offset-2">
					Top Picks For You
				</h2>
				<p className="text-base font-medium text-[#9F9F9F]  ">
					Find a bright ideal to suit your taste with our great selection of
					suspension, floor and table lights.
				</p>
			</div>
			<div className="flex h-[372px] w-[287px] flex-col">
				<div className="relative h-2/3 w-full">
					<Image src="/assets/tablegamer2.svg" alt="imagen" fill={true} />
				</div>
				<div className="h-1/3 w-max">
					<h3 className="text-base font-normal">Item Name</h3>
					<p className="text-2xl font-medium leading-9">$ 15000</p>
				</div>
			</div>
			<button className="border-2 border-white text-2xl font-medium leading-9 hover:border-b-black">
				View More
			</button>
		</div>
	)
}
