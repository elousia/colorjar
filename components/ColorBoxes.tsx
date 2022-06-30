import React from 'react';

export function GeneratedBox({ value }: { value: string }) {
	return (
		<div
			className={`h-[4.5rem] w-[4.5rem] cursor-pointer`}
			style={{
				backgroundColor: `#${value}`,
			}}
		></div>
	);
}

export function ExtractedBox({ value }: { value: string }) {
	return (
		<div
			className={`h-[4.5rem] w-[4.5rem] cursor-pointer`}
			style={{
				backgroundColor: `${value}`,
			}}
		></div>
	);
}

export function CustomBox({ value }: { value: string }) {
	return (
		<div
			className={`h-[4.5rem] w-[4.5rem] cursor-pointer`}
			style={{
				backgroundColor: `${value}`,
			}}
		></div>
	);
}
