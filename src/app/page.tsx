import BottomNavBar from 'components/BottomNavBar'
import NavBar from 'components/NavBar'
import Banner from 'components/Home/Banner'
import AddBanner from 'components/Home/AddBanner'
import TopPickForYou from 'components/Home/TopPickForYou'
import NewProduct from 'components/Home/NewProduct'
import Footer from 'components/Footer'
import { sanityClient } from '@/pages/sanity/client'
import { ProductInterface } from 'util/interface/products'

export default async function Home() {

	return (
		<main className="static mb-16">
			<NavBar />
			<div className="p-5">
				<Banner information={await getData()} />
				<AddBanner />
				<TopPickForYou />
				<NewProduct />
			</div>
			<Footer />
			<BottomNavBar />
		</main>
	)
}

async function getData() {
	const query = '*[_type == "banner"]'
	const banner = await sanityClient.fetch<ProductInterface[]>(query)
	return banner[0]
}
