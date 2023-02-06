'use client'

import BottomNavBar from 'components/BottomNavBar'
import NavBar from 'components/NavBar'
import Banner from 'components/Home/Banner'
import Image from 'next/image'
import AddBanner from 'components/Home/AddBanner'
import TopPickForYou from 'components/Home/TopPickForYou'
import NewProduct from 'components/Home/NewProduct'
import Footer from 'components/Footer'
import { useState } from 'react'

export default function Home() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<main className="static mb-16">
			<NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className="p-5">
				<Banner />
				<AddBanner />
				<TopPickForYou />
				<NewProduct />
			</div>
			<Footer />
			<BottomNavBar />
		</main>
	)
}
