import React from 'react';
import { GetStaticProps } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../prisma/prisma';
import { CustomBox } from '../../components/ColorBoxes';
import { MdSave, MdFileDownload } from 'react-icons/md';
import saveAs from 'file-saver';

export default function Palettes({ extracted }: { extracted: any }) {
	console.log(extracted);
	return (
		<main className='py-3 px-8'>
			<section>
				{extracted.map((palette: any) => {
					const colors = palette.colors.map((shade: any) => {
						// console.log(colors);

						return <CustomBox key={shade} value={shade} />;
					});
					const fileTemplate = `
						const palette = {
							type: "${palette.type}",
							average: "${palette.average}",
							colors: ${JSON.stringify(palette.colors)},
							createdAt: "${new Date(palette.createdAt).toLocaleString()}"
						}
					`;

					const handleDownload = () => {
						const file = new File(
							[fileTemplate],
							`${Date.now()}-colorjar-generated.js`,
							{
								type: 'application/javascript;charset=utf-8',
							}
						);
						saveAs(file);
					};

					return (
						<section key={palette.id} className='max-w-2xl mx-auto'>
							<div className='flex flex-col mt-10'>
								{/* <span className='font-semibold text-gray-600'>Colors</span> */}
								<div className='flex items-center justify-start flex-wrap'>
									{colors}
								</div>
								<div className='flex items-center my-8'>
									<span
										onClick={() => handleDownload()}
										className='font-semibold text-gray-600 hover:text-gray-200 duration-100 transition-all cursor-pointer'
									>
										Download
									</span>
									<span className='font-semibold text-gray-600 hover:text-gray-200 duration-100 transition-all ml-3 cursor-pointer'>
										Add to favorites
									</span>
								</div>
							</div>
						</section>
					);
				})}
			</section>
		</main>
	);
}

export const getStaticProps: GetStaticProps = async (context: any) => {
	const extracted = await prisma.extracted.findMany();

	extracted.forEach((palette) => {
		(palette.createdAt = JSON.parse(JSON.stringify(palette.createdAt))),
			(palette.updatedAt = JSON.parse(JSON.stringify(palette.updatedAt)));
	});

	return {
		props: {
			extracted,
		},
	};
};
