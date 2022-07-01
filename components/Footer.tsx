import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className='mt-auto'>
			<section className='sticky bottom-0 h-full p-2 md:p-16 flex items-center justify-between text-gray-600 flex-wrap'>
				<Link href='/'>
					<p className='hover:text-white transition-all duration-150 cursor-pointer'>
						ColorJar
					</p>
				</Link>
				<p className='hover:text-white transition-all duration-150 cursor-pointer'>
					Made with ⌨️ and 🖱️
				</p>
				<p className='hover:text-white transition-all duration-150 cursor-pointer'>
					<a
						href='https://github.com/french-gizmo/colorjar'
						target='_blank'
						rel='noreferrer'
					>
						GitHub
					</a>
				</p>
			</section>
		</footer>
	);
}
