'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function BannerPage() {
  const router =  usePathname()?.slice(1)
	return (
		<div className="flex  h-80 w-full items-center justify-center bg-background">
			<div className="flex flex-col items-center">
				<h1 className="text-5xl font-medium leading-[72px]">{router}</h1>
				<h3 className="space-x-3 text-base">
					<span className="font-semibold"><Link href="/">Home</Link></span>
					<span className="font-semibold">&gt;</span>
					<span className="font-light">{router}</span>
				</h3>
			</div>
		</div>
	)
}