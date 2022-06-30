import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { saveAs } from 'file-saver';

import { VscCopy } from 'react-icons/vsc';
import { HiOutlineBookmark } from 'react-icons/hi';
import { MdFileDownload } from 'react-icons/md';

import { createTintsAndShades } from '../utils/color-utils';

export default function Generate() {
	const [initialColor, setColor] = useState('#3799A0');
	const generated = createTintsAndShades(initialColor);
	// console.log(JSON.stringify(Object.assign({}, generated?.calculatedShades)));

	// generated?.calculatedTints?.map((it, i) => {
	// 	it = '#' + it;
	// 	console.log(it);
	// });

	const allTints = JSON.stringify(
		Object.assign({}, generated?.calculatedTints)
	);
	const allShades = JSON.stringify(
		Object.assign({}, generated?.calculatedShades)
	);

	const fileTemplate = `
    {
        "origin": "${initialColor}",
        "shades": ${allShades},
        "tints": ${allTints}
    }
    `;

	const handleSave = () => {
		const file = new File([fileTemplate], `${Date.now()}-colorjar.json`, {
			type: 'application/json;charset=utf-8',
		});
		saveAs(file);
	};

	const handleColorChangeComplete = (color: any) => {
		// always use only the HEX value of the color
		// react-color also allows you to use the rgba or hsla values too
		setColor(color.hex);
	};
	return (
		<section className='mx-auto my-20 max-w-8xl px-9 items-center flex flex-col justify-between'>
			<div className='mx-auto'>
				<ChromePicker
					color={initialColor}
					onChange={handleColorChangeComplete}
				/>
			</div>
			<div className='flex flex-col max-w-5xl mx-auto'>
				<div className='flex flex-col mt-10'>
					<span className='font-semibold text-gray-600'>Shades</span>
					<div className='flex items-center justify-start flex-wrap'>
						{generated?.calculatedShades?.map((shade, i) => {
							return (
								<div
									key={shade + i}
									className={`h-[4.5rem] w-[4.5rem] cursor-pointer`}
									style={{
										backgroundColor: `#${shade}`,
									}}
								></div>
							);
						})}
					</div>
				</div>
				<div className='flex flex-col mt-10'>
					<span className='font-semibold text-gray-600'>Tints</span>
					<div className='flex items-center justify-start flex-wrap'>
						{generated?.calculatedTints?.map((tint, i) => {
							return (
								<div
									key={tint + i}
									className={`h-[4.5rem] w-[4.5rem] cursor-pointer`}
									style={{
										backgroundColor: `#${tint}`,
									}}
								></div>
							);
						})}
					</div>
				</div>
			</div>
			<div className='flex items-center justify-between mx-auto flex-wrap my-16'>
				<div className='mx-2'>
					<button
						type='button'
						className='w-full text-gray-200 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-500 mr-2 mb-2 transition-all duration-100 ease-linear font-semibold'
					>
						Add to collection
						<HiOutlineBookmark className='text-xl font-bold ml-2' />
					</button>
				</div>
				<div className='mx-2'>
					<button
						type='button'
						onClick={() => handleSave()}
						className='w-full text-gray-200 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-500 mr-2 mb-2 transition-all duration-100 ease-linear font-semibold'
					>
						Download palette
						<MdFileDownload className='text-xl font-bold ml-2' />
					</button>
				</div>
			</div>
		</section>
	);
}