import {
	HeartIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	UserIcon,
} from '@heroicons/react/24/outline'

export default function BottomNavBar() {
	return (
		<div className="fixed bottom-0 flex w-full items-center justify-evenly border-t border-gray-200 p-4 drop-shadow-lg  bg-white lg:hidden">
			<UserIcon className="h-8 w-8 text-gray-400" />
			<MagnifyingGlassIcon className="h-8 w-8 text-gray-400" />
			<HeartIcon className="h-8 w-8 text-gray-400" />
			<ShoppingCartIcon className="h-8 w-8 text-gray-400" />
		</div>
	)
}
