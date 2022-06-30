/* eslint-disable @next/next/no-img-element */
// I did no check on this TypeScript file because most of the packages do not have exported types
// And I am having a hard time figuring them out. Would immediately remove this if I do so.

// @ts-nocheck

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { prominent, average } from 'color.js';
import { saveAs } from 'file-saver';

import { VscCopy } from 'react-icons/vsc';
import { HiOutlineBookmark } from 'react-icons/hi';
import { MdFileDownload, MdSave } from 'react-icons/md';
import { ExtractedBox } from '../components/ColorBoxes';

export default function Extract() {
	const router = useRouter();

	const fileRef = useRef();
	const [image, setImage] = useState<null | string | ArrayBuffer>();
	const [colors, setColors] = useState<string[]>();
	const [averageColor, setAverageColor] = useState<null | boolean>(null);

	const changeHandle = () => {
		const file: File = fileRef?.current?.files[0];
		if (file) {
			const reader = new FileReader();
			reader.addEventListener('load', function () {
				setImage(this.result);
				prominent(this.result, {
					format: 'hex',
					amount: 6,
				}).then((colors) => setColors(colors));
				average(this.result).then((color) =>
					setAverageColor(`rgba(${color.join(',')}, .6)`)
				);
			});
			reader.readAsDataURL(file);
		} else {
			setImage(null);
			setAverageColor(false);
			setColors([]);
		}
	};

	const fileTemplate = `
    const palette = {
		type: "extracted",
        average: "${averageColor}",
        extracted: ${JSON.stringify(colors)}
    }
    `;

	const handleSave = async () => {
		try {
			await fetch('/api/palettes/extracted', {
				method: 'POST',
				body: JSON.stringify({
					type: 'extracted',
					average: averageColor,
					extracted: colors,
				}),
			}).then((res) => {
				if (res.ok) {
					router.push('/palettes/extracted');
					alert('Added successfully');
				} else {
					alert('Error adding');
				}
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleDownload = () => {
		const file = new File(
			[fileTemplate],
			`${Date.now()}-colorjar-extracted.js`,
			{
				type: 'application/javascript;charset=utf-8',
			}
		);
		saveAs(file);
	};

	return (
		<section className='mx-auto my-20 max-w-8xl px-9 items-center flex flex-col justify-between'>
			<div className='mx-auto'>
				<input
					type='file'
					accept='image/*'
					onChange={changeHandle}
					ref={fileRef}
				/>
				{image && (
					<img
						src={image as string}
						style={{
							width: 700,
							height: 500,
							maxWidth: '100%',
							objectFit: 'contain',
							marginTop: '.5rem',
						}}
						alt='Extracted'
					/>
				)}
			</div>
			<div className='flex flex-col max-w-5xl mx-auto'>
				<div className='flex flex-col mt-10'>
					<span className='font-semibold text-gray-600'>
						{image ? 'Extracted Colors' : 'Please choose an image'}
					</span>
					<div className='flex items-center justify-start flex-wrap'>
						{colors?.map((shade, i) => {
							return <ExtractedBox key={shade + i} value={shade} />;
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
