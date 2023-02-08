import { urlFor } from '@/pages/sanity/client'
import Image from 'next/image'
import React from 'react'
import { ProductInterface } from 'util/interface/products'
interface Props {
	information: ProductInterface
}
export default function NewProduct({ information }: Props) {
	const src = urlFor( information && information.image).url()
	return (
		<div className="flex h-[639px] w-full flex-col items-center space-y-5 mb-12 lg:flex-row lg:justify-center">
			<div className="relative h-2/3 w-full  lg:w-[30%]">
				<Image src={src} alt="images" fill={true} />
			</div>
			<div className="flex flex-col items-center">
				<h3 className="text-2xl font-medium leading-9">New Arrivals</h3>
				<h2 className="text-5xl font-bold leading-[72px]">{information.name}</h2>
				<button className="mt-8 border border-black py-4 px-16">
					Order Now
				</button>
			</div>
		</div>
	)
}
