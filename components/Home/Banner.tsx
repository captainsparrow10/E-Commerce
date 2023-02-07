'use client'
import { urlFor } from '@/pages/sanity/client'
import Image from 'next/image'
import { ProductInterface } from 'util/interface/products'
interface Props {
	information: ProductInterface
}
export default function Banner({ information }: Props) {

	const src = urlFor( information && information.image).url()
	return (
		<div className="flex h-screen justify-center w-full">
			<div className="flex h-full flex-col justify-center sm:flex-row sm:items-center w-full">
				<div className="w-full sm:w-2/5 md:w-2/4 flex flex-col md:items-end">
					<h2 className="text-[64px] font-medium leading-[96px] whitespace-nowrap">{information.name}</h2>
					<button className="border-2 border-white text-2xl font-medium leading-9 hover:border-b-black w-fit">
						Shop Now
					</button>
				</div>
				<div className="relative h-1/3 w-full sm:h-2/3 sm:w-3/5 md:w-2/4">
					<Image  src={src} alt="image" fill={true} />
				</div>
			</div>
		</div>
	)
}
