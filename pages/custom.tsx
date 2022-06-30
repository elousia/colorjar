import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { saveAs } from 'file-saver';

import { MdFileDownload, MdSave } from 'react-icons/md';

import { createTintsAndShades } from '../utils/color-utils';

export default function CreateCustomPalette() {
	const [initialColor, setColor] = useState('#3799A0');
	const [colors, setColors] = useState<string[]>([]);
	const generated = createTintsAndShades(initialColor);

	const allColors = JSON.stringify(Object.assign({}, colors));

	const fileTemplate = `
    {
        "type": "custom",
        "colors": ${allColors}
    }
    `;

	const handleDownload = () => {
		const file = new File([fileTemplate], `${Date.now()}-colorjar.json`, {
			type: 'application/json;charset=utf-8',
		});
		saveAs(file);
	};

	const handleSave = async () => {
		await fetch('/api/palettes/custom', {
			method: 'POST',
			body: JSON.stringify({
				customData: fileTemplate,
			}),
		});
	};

	const handleAddColor = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setColors([e.currentTarget.value, ...colors]);
	};

	const handleColorChange = (color: any) => {
		// always use only the HEX value of the color
		// react-color also allows you to use the rgba or hsla values too
		setColor(color.hex);
	};

	return (
		<section className='mx-auto my-20 max-w-8xl px-9 items-center flex flex-col justify-between'>
			<div className='mx-auto'>
				<ChromePicker color={initialColor} onChange={handleColorChange} />

				<div className='flex items-baseline flex-wrap flex-col'>
					<div className='w-full md:w-11/12 pr-3 mt-3 mb-1'>
						<input
							className='appearance-none block w-full bg-white text-gray-700 border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='grid-last-name'
							type='text'
							placeholder='#fff'
							value={initialColor}
							onChange={handleColorChange}
						/>
					</div>
					<div className=''>
						<button
							type='button'
							disabled={colors.length === 10}
							value={initialColor}
							onClick={(e) => handleAddColor(e)}
							className={`w-full text-gray-200 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-500 mr-2 mb-2 transition-all duration-100 ease-linear font-semibold ${
								colors.length === 10 && 'cursor-not-allowed'
							}`}
						>
							Add
						</button>
					</div>
				</div>
			</div>
			<div className='flex flex-col max-w-5xl mx-auto'>
				<div className='flex flex-col mt-10'>
					<span className='font-semibold text-gray-600'>Colors</span>
					<div className='flex items-center justify-start flex-wrap'>
						{colors.map((color, i) => {
							return (
								<div
									key={color + i}
									className={`h-[4.5rem] w-[4.5rem] cursor-pointer`}
									style={{
										backgroundColor: `${color}`,
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
						onClick={() => handleSave()}
						className='w-full text-gray-200 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-500 mr-2 mb-2 transition-all duration-100 ease-linear font-semibold'
					>
						Save palette
						<MdSave className='text-xl font-bold ml-2' />
					</button>
				</div>
				<div className='mx-2'>
					<button
						type='button'
						onClick={() => handleDownload()}
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
