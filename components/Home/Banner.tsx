import Image from 'next/image'

export default function Banner() {
	const menu = '/public/assets/pcgamer.svg'
	return (
		<div className="h-screen flex justify-center">
			<div className="flex h-full flex-col justify-center">
				<div className="w-full">
					<h2 className="text-[64px] font-medium leading-[96px]">Pc Gamer</h2>
					<button className="border-2 border-white text-2xl font-medium leading-9 hover:border-b-black">
						Shop Now
					</button>
				</div>
				<div className="relative h-1/3 w-full">
					<Image src="/assets/pcgamer.svg" alt="image" fill={true} />
				</div>
			</div>
		</div>
	)
}
