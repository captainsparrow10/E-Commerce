import {
	AdjustmentsHorizontalIcon,
	Squares2X2Icon,
} from '@heroicons/react/24/outline'
export default function FilterBar() {
	return (
		<div className="my-12 flex h-24 items-center space-x-6 divide-x-2 bg-black p-5 text-white">
			<div className="flex items-center space-x-4">
				<AdjustmentsHorizontalIcon className="icon" />
				<Squares2X2Icon className="icon" />
			</div>
			<div className="flex items-center space-x-4 px-4">
				<h3 className="text-base font-normal">Showing 1 - 16 of 32 results</h3>
			</div>
		</div>
	)
}
