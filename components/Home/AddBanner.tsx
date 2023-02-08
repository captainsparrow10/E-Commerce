import { urlFor } from '@/pages/sanity/client'
import Image from 'next/image'
import React from 'react'
import { ProductInterface } from 'util/interface/products'
interface Props {
	information: ProductInterface[]
}
export default function AddBanner({ information }: Props) {
	return (
		<div className="flex h-[672px] flex-col items-center justify-between md:flex-row">
			{information.map((data) => (
				<div
					className="flex h-80 w-full flex-col items-center justify-evenly md:h-3/5 lg:h-4/5"
					key={data._id}
				>
					<div className="relative h-3/4 w-full">
						<Image
							src={urlFor(data && data.image).url()}
							alt="image"
							fill={true}
						/>
					</div>
					<div>
						<h3 className="text-4xl font-medium leading-[54px]">{data.name}</h3>
						<button className="border-2 border-white text-2xl font-medium leading-9 hover:border-b-black">
							View More
						</button>
					</div>
				</div>
			))}
		</div>
	)
}
