import React from 'react';
import { GetStaticProps } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../prisma/prisma';

export default function Palettes({
	generatedPalettes,
}: {
	generatedPalettes: any;
}) {
	// console.log(JSON.parse(generatedPalettes));
	// console.log(generatedPalettes);
	console.log(JSON.parse(generatedPalettes[0].data.palette).shades);

	// Object.keys(generatedPalettes[0].data).map((key) => {
	// 	console.log(generatedPalettes[key]);
	// });

	return <div>Palettes</div>;
}

export const getStaticProps: GetStaticProps = async (context: any) => {
	const session = await getSession(context);

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
