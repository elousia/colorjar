import React, { useState } from 'react';
import Header from '../components/Header';
import { SketchPicker } from 'react-color';
import colors from 'nice-color-palettes';

export default function Generate() {
	const [initialColor, setColor] = useState('rgba(0,0,0,100)');

	const handleColorChange = (color: any) => {
		// always use only the HEX value of the color
		// react-color also allows you to use the rgba or hsla values too
		setColor(color.hex);
	};
	return (
		<div className=''>
			<Header />
			<div className='mx-auto my-14 max-w-8xl px-9 items-center flex flex-col justify-between'>
				<div className='mx-auto'>
					<SketchPicker color={initialColor} onChange={handleColorChange} />
					<button
						type='button'
						className='text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mt-6 mr-2 mb-2 transition-all duration-100 ease-in-out'
					>
						Generate Palette
					</button>
				</div>
				<section className='flex flex-col'>
					<div className='flex flex-col mt-10'>
						<span className='font-semibold text-gray-600'>Tints</span>
						<div className='flex items-center sm:justify-end mx-auto flex-wrap'>
							{/* {Array(12)
						.fill('')
						.map((_, i) => (
							<div key={i} className='h-7 w-7 bg-blue-500'></div>
						))} */}
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-500 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-600 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-700 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-800 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-900 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-200 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-300 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-300 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-400 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-500 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-600 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-700 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-800 cursor-pointer'></div>
						</div>
					</div>
					<div className='flex flex-col mt-10'>
						<span className='font-semibold text-gray-600'>Shades</span>
						<div className='flex items-center sm:justify-end mx-auto flex-wrap'>
							{/* {Array(12)
						.fill('')
						.map((_, i) => (
							<div key={i} className='h-7 w-7 bg-blue-500'></div>
						))} */}
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-500 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-600 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-700 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-800 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-900 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-200 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-blue-300 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-300 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-400 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-500 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-600 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-700 cursor-pointer'></div>
							<div className='h-[4.5rem] w-[4.5rem] bg-green-800 cursor-pointer'></div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
