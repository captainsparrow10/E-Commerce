import SanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = SanityClient({
	projectId: 'kdvgb6bb',
	dataset: 'production',
	apiVersion: '2023-06-02',
	useCdn: true,
	token: process.env.TOKEN_SANITY,
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)
