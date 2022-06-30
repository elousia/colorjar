import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { VscCopy } from 'react-icons/vsc';

import { createTintsAndShades } from '../utils/color-utils';

export default function Generate() {
	const [initialColor, setColor] = useState('#3799A0');
	const generated = createTintsAndShades(initialColor);

	const handleColorChangeComplete = (color: any) => {
		// always use only the HEX value of the color
		// react-color also allows you to use the rgba or hsla values too
		setColor(color.hex);
	};
	return (
		<div className='mx-auto my-32 max-w-8xl px-9 items-center flex flex-col justify-between'>
			<div className='mx-auto'>
				<ChromePicker
					color={initialColor}
					onChange={handleColorChangeComplete}
				/>
			</div>
			<section className='flex flex-col max-w-5xl mx-auto'>
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
			</section>
		</div>
	);
}
