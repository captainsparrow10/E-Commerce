import BottomNavBar from 'components/BottomNavBar'
import NavBar from 'components/NavBar'
import Banner from 'components/Home/Banner'
import AddBanner from 'components/Home/AddBanner'
import TopPickForYou from 'components/Home/TopPickForYou'
import NewProduct from 'components/Home/NewProduct'
import Footer from 'components/Footer'
import { sanityClient } from '@/pages/sanity/client'
import { ProductInterface } from 'util/interface/products'
import { getAddBanner, getBanner, getNewItem, getTopPicks } from 'util/func/products'

export default async function Home() {

	return (
		<main className="static mb-16 lg:mb-0">
			<NavBar />
			<div className="p-5">
				<Banner information={await getBanner()} />
				<AddBanner information={await getAddBanner()}/>
				<TopPickForYou information = {await getTopPicks()}/>
				<NewProduct information = {await getNewItem()} />
			</div>
			<Footer />
			<BottomNavBar />
		</main>
	)
}

