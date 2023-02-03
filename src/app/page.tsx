'use client'

import BottomNavBar from 'components/BottomNavBar'
import NavBar from 'components/NavBar'
import Banner from 'components/Home/Banner'
import Image from 'next/image'
import AddBanner from 'components/Home/AddBanner'
import TopPickForYou from 'components/Home/TopPickForYou'

export default function Home() {
	return (
		<main className="static">
			<NavBar />
			<div className="p-5">
				<Banner />
				<AddBanner />
				<TopPickForYou />
			</div>
			<BottomNavBar />
		</main>
	)
}
