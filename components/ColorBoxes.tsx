import React from 'react';
import { FiCopy } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function GeneratedBox({ value }: { value: string }) {
	return (
		<div
			className={`group h-[4.5rem] w-[4.5rem] cursor-pointer relative transition-all duration-200 ease-in-out`}
			style={{
				backgroundColor: `${value}`,
			}}
		>
			<FiCopy
				onClick={() => navigator.clipboard.writeText(value)}
				className='text-gray-200 text-sm h-8 w-12 mt-5 ml-3 hidden group-hover:block transition-all duration-150'
			/>
		</div>
	);
}

export function ExtractedBox({ value }: { value: string }) {
	return (
		<div
			className={`group h-[4.5rem] w-[4.5rem] cursor-pointer relative`}
			style={{
				backgroundColor: `${value}`,
			}}
		>
			<FiCopy
				onClick={() => navigator.clipboard.writeText(value)}
				className='text-gray-200 text-sm h-8 w-12 mt-5 ml-3 hidden group-hover:block transition-all duration-150'
			/>
		</div>
	);
}

export function CustomBox({ value }: { value: string }) {
	return (
		<div
			className={`group h-[4.5rem] w-[4.5rem] cursor-pointer relative`}
			style={{
				backgroundColor: `${value}`,
			}}
		>
			<FiCopy
				onClick={() => navigator.clipboard.writeText(value)}
				className='text-gray-200 text-sm h-8 w-12 mt-5 ml-3 hidden group-hover:block transition-all duration-150'
			/>
		</div>
	);
}
