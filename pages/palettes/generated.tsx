import React from 'react';
import { GetStaticProps } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../prisma/prisma';
import { GeneratedBox } from '../../components/ColorBoxes';
import { MdSave, MdFileDownload } from 'react-icons/md';
import saveAs from 'file-saver';

export default function Palettes({
	generatedPalettes,
}: {
	generatedPalettes: any;
}) {
	return (
		<main className='py-3 px-8'>
			<section>
				{generatedPalettes.map((palette: any) => {
					console.log(palette);
					const shades = palette.shades.map((shade: any) => {
						return <GeneratedBox key={shade} value={shade} />;
					});
					const tints = palette.tints.map((tint: any) => {
						return <GeneratedBox key={tint} value={tint} />;
					});
					console.log(palette.tints);
					console.log(palette.shades);

					const fileTemplate = `
						const palette = {
							type: "${palette.type}",
							origin: "${palette.origin}",
							shades: ${JSON.stringify(palette.shades)},
							tints: ${JSON.stringify(palette.tints)},
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
						<section key={palette.id} className='max-w-4xl mx-auto my-16'>
							<div className='flex flex-col mt-10'>
								<span className='font-semibold text-gray-600'>Shades</span>
								<div className='flex items-center justify-start flex-wrap'>
									{shades}
								</div>
							</div>
							<div className='flex flex-col mt-1'>
								<span className='font-semibold text-gray-600'>Tints</span>
								<div className='flex items-center justify-start flex-wrap'>
									{tints}
								</div>
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
						</section>
					);
				})}
			</section>
		</main>
	);
}

export const getStaticProps: GetStaticProps = async (context: any) => {
	const generatedPalettes = await prisma.generated.findMany();

	generatedPalettes.forEach((palette) => {
		(palette.createdAt = JSON.parse(JSON.stringify(palette.createdAt))),
			(palette.updatedAt = JSON.parse(JSON.stringify(palette.updatedAt)));
	});

	return {
		props: {
			generatedPalettes,
		},
	};
};
