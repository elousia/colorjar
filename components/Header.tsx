import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

function Header() {
	const [top, setTop] = useState(true);

	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, [top]);

	return (
		<header
			className={`sticky z-50 top-0 w-full md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top && 'bg-white backdrop-blur-sm shadow-lg'
			}`}
		>
			<div className='max-w-7xl mx-auto px-5 sm:px-6'>
				<div className='flex items-center justify-between h-16 md:h-20'>
					{/* Site branding */}
					<Logo />
					{/* Site navigation */}
					<nav className='flex flex-grow'>
						<ul className='flex flex-grow justify-end flex-wrap items-center'>
							<li>
								<a
									href='https://github.com/'
									target='_blank'
									rel='noreferrer'
									className='font-medium hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out text-gray-600 mb-0'
								>
									GitHub
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
