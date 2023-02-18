import { urlFor } from '@/pages/sanity/client'
import BannerPage from 'components/BannerPage'
import FilterBar from 'components/FilterBar'
import Image from 'next/image'
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { getTopPicks } from 'util/func/products'
import { ProductInterface } from 'util/interface/products'
import Sponsor from 'components/Sponsor'
export default async function Page() {
	const information: ProductInterface[] = await getTopPicks()
	const numbers = [1, 2, 3, 4, 5]
	return (
		<>
			<BannerPage />
			<FilterBar />
			<div className="mt-4 flex h-full flex-wrap justify-center gap-10">
				{information.map((data) => (
					<div className="flex h-[372px] w-[287px] flex-col" key={data._id}>
						<div className="relative h-2/3 w-full">
							<Image
								src={urlFor(data && data.image).url()}
								alt="imagen"
								fill={true}
							/>
						</div>
						<div className="h-1/3 w-max">
							<h3 className="text-base font-normal">{data.name}</h3>
							<p className="text-2xl font-medium leading-9">$ {data.price}</p>
						</div>
					</div>
				))}
			</div>

			<nav className="my-4 flex w-full items-center justify-center">
				<ul className="inline-flex items-center">
					<li className='className="ml-0 " block rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
						<ChevronLeftIcon className="h-5 w-5" />
					</li>
					{numbers.map((number) => (
						<li
							className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
							key={number}
						>
							{number}
						</li>
					))}

					<li className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
						<ChevronRightIcon className="h-5 w-5" />
					</li>
				</ul>
			</nav>
			<Sponsor />
		</>
	)
}
