import BottomNavBar from 'components/BottomNavBar'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import './globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<main className="static mb-16 lg:mb-0">
					<NavBar />
					{children}
					<Footer />
					<BottomNavBar />
				</main>
			</body>
		</html>
	)
}
