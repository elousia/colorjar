import Link from 'next/link';
import React from 'react';

export default function Logo() {
	return (
		<div className='flex-shrink-0 mr-4 my-2'>
			{/* Logo */}
			<Link href='/' className='block' aria-label='Colorjar'>
				<div className='bg-gradient-to-r from-[#e96443] to-[#ca228e] rounded-sm mb-0 text-lg font-semibold leading-3 text-white border-none py-4 px-9 cursor-pointer'>
					Colorjar
				</div>
			</Link>
		</div>
	);
}
