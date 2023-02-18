import React from 'react'

export default function Sponsor() {
	const sponsors = [
		{
			title: 'Free delivery',
			description: 'For all oders over $50, consectetur adipim scing elit',
		},
    {
      title: '90 Days return',
      description: 'If goods have problems, consectetur adipim scing elit.'
    }, 
    {
      title: 'Secure Payment',
      description: '100% secure payment, consectetur adipim scing elit.'
    }
	]
	return (
		<div className="bg-[#FAF4F4] flex h-full flex-wrap justify-center gap-10 p-5 xl:h-[300px] items-center">
			{sponsors.map((sponsor) => (
				<div key={sponsor.title} className="w-[380px]">
					<h1 className="text-4xl font-medium">
						{sponsor.title}
					</h1>
					<h2 className="text-xl text-[#9F9F9F]">
						{sponsor.description}
					</h2>
				</div>
			))}
		</div>
	)
}
