import { sanityClient } from '@/pages/sanity/client'
import { ProductInterface } from 'util/interface/products'

export async function getBanner() {
	const query = '*[_type == "banner"]'
	const data = await sanityClient.fetch<ProductInterface[]>(query)
	return data[0]
}

export async function getBackgroundTitle() {
	const query = '*[_type == "background"]'
	const data = await sanityClient.fetch<ProductInterface[]>(query)
	return data[0]
}

export async function getAddBanner() {
	const query = '*[_type == "addbanner"]'
	const data = await sanityClient.fetch<ProductInterface[]>(query)
	return data
}

export async function getTopPicks() {
	const query = '*[_type == "toppicks"]'
	const data = await sanityClient.fetch<ProductInterface[]>(query)
	return data
}

export async function getNewItem() {
	const query = '*[_type == "newitem"]'
	const data = await sanityClient.fetch<ProductInterface[]>(query)
	return data[0]
}