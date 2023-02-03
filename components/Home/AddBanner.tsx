import Image from 'next/image'
import React from 'react'

export default function AddBanner() {
	return (
		<div className="flex h-[672px] flex-col items-center justify-between">
			<div className="flex h-[45%] w-full flex-col items-center justify-evenly">
				<div className="relative h-3/4 w-full">
					<Image src="/assets/tablegamer1.svg" alt="image" fill={true} />
				</div>
				<div>
					<h3 className="text-4xl font-medium leading-[54px]">Gamer Table</h3>
					<button className="border-2 border-white text-2xl font-medium leading-9 hover:border-b-black">
						View More
					</button>
				</div>
			</div>
			<div className="flex h-[45%] w-full flex-col items-center">
				<div className="relative h-3/4 w-full">
					<Image src="/assets/tablegamer2.svg" alt="image" fill={true} />
				</div>
				<div>
					<h3 className="text-4xl font-medium leading-[54px]">Gamer Table</h3>
					<button className="border-2 border-white text-2xl font-medium leading-9 hover:border-b-black">
						View More
					</button>
				</div>
			</div>
		</div>
	)
}
