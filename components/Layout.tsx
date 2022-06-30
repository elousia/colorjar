import React from 'react';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='bg-[#000000] min-h-screen'>
			<Header />
			{children}
		</main>
	);
}
