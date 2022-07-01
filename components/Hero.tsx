/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

function HeroHome() {
	const [videoModalOpen, setVideoModalOpen] = useState(false);
	const { data: session, status } = useSession();

	return (
		<section className='relative'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				{/* Hero content */}
				<div className='pt-32 pb-12 md:pt-40 md:pb-20'>
					{/* Section header */}
					<div className='text-center pb-12 md:pb-16'>
						<h1
							className='text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'
							data-aos='zoom-y-out'
						>
							Create awesome{' '}
							<span className='bg-clip-text text-transparent bg-gradient-to-r from-[#e96443] to-[#ca228e]'>
								color palettes
							</span>
						</h1>
						<div className='max-w-3xl mx-auto'>
							<p
								className='text-xl text-gray-600 mb-8'
								data-aos='zoom-y-out'
								data-aos-delay='150'
							>
								Our landing page template works on all devices, so you only have
								to set it up once, and get beautiful results forever.
							</p>

							<div>
								<Link href='/generate'>
									<button
										type='button'
										className='text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 transition-all duration-100 ease-linear font-semibold'
									>
										Start generating palettes
										<span role='emoji' className='text-lg ml-2'>
											🎉
										</span>
									</button>
								</Link>
							</div>
							{status === 'unauthenticated' ? (
								<div>
									<p className='text-white font-bold my-4'>or</p>
									<div
										className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'
										data-aos='zoom-y-out'
										data-aos-delay='300'
									>
										<div>
											<button
												type='button'
												onClick={() => signIn('google')}
												className='transition duration-100 ease-in-out text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2'
											>
												<svg
													className='w-4 h-4 mr-2 -ml-1'
													aria-hidden='true'
													focusable='false'
													data-prefix='fab'
													data-icon='google'
													role='img'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 488 512'
												>
													<path
														fill='currentColor'
														d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
													></path>
												</svg>
												Sign in with Google
											</button>
										</div>
										<div>
											<button
												type='button'
												onClick={() => signIn('github')}
												className='transition duration-100 ease-in-out text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/90 mr-2 mb-2'
											>
												<svg
													className='w-4 h-4 mr-2 -ml-1'
													aria-hidden='true'
													focusable='false'
													data-prefix='fab'
													data-icon='github'
													role='img'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 496 512'
												>
													<path
														fill='currentColor'
														d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
													></path>
												</svg>
												Sign in with GitHub
											</button>
										</div>
									</div>
								</div>
							) : null}
						</div>
					</div>
					<div className='text-center md:text-left justify-between pb-12 md:pb-16 flex md:flex-row flex-col my-36'>
						<div className='max-w-3xl mx-auto md:w-1/3'>
							<img src='/assets/generated.png' alt='generate palettes' />
						</div>
						<div className='max-w-3xl mx-auto md:w-2/5'>
							<h1
								className='text-2xl text-white md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4'
								data-aos='zoom-y-out'
							>
								<span className='bg-clip-text text-transparent bg-gradient-to-r from-[#e96443] to-[#ca228e]'>
									Generate
								</span>{' '}
								your own.
							</h1>

							<p
								className='text-xl text-gray-600 mb-8'
								data-aos='zoom-y-out'
								data-aos-delay='150'
							>
								Colorjar allows you to generate shades and tints of a color from
								a powerful and easy-to-use color picker.
							</p>

							<div>
								<Link href='/generate'>
									<button
										type='button'
										className='text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 transition-all duration-100 ease-linear font-semibold'
									>
										Start generating palettes
										<span role='emoji' className='text-lg ml-2'>
											🎉
										</span>
									</button>
								</Link>
								<Link href='/palettes/generated'>
									<button
										type='button'
										className='text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 transition-all duration-100 ease-linear font-semibold'
									>
										View generated palettes
										<span role='emoji' className='text-lg ml-2'>
											🎉
										</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='text-center md:text-left justify-between pb-12 md:pb-16 flex md:flex-row-reverse flex-col my-36'>
						<div className='max-w-3xl mx-auto md:w-1/3'>
							<img src='/assets/extracted.png' alt='extracted palettes' />
						</div>
						<div className='max-w-3xl mx-auto md:w-2/5'>
							<h1
								className='text-2xl text-white md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4'
								data-aos='zoom-y-out'
							>
								<span className='bg-clip-text text-transparent bg-gradient-to-r from-[#67C7DA] to-[#A7D3C9]'>
									Extract
								</span>{' '}
								colors from images.
							</h1>

							<p
								className='text-xl text-gray-600 mb-8'
								data-aos='zoom-y-out'
								data-aos-delay='150'
							>
								Another powerful feature is extracting of colors from images.
								Get beautiful color palettes extracted from your local images.
							</p>

							<div>
								<Link href='/extract'>
									<button
										type='button'
										className='text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 transition-all duration-100 ease-linear font-semibold'
									>
										Start extracting colors
										<span role='emoji' className='text-lg ml-2'>
											🎉
										</span>
									</button>
								</Link>
								<Link href='/palettes/extracted'>
									<button
										type='button'
										className='text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 transition-all duration-100 ease-linear font-semibold'
									>
										View extracted palettes
										<span role='emoji' className='text-lg ml-2'>
											🎉
										</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='text-center md:text-left justify-between pb-12 md:pb-16 flex md:flex-row flex-col my-36'>
						<div className='max-w-3xl mx-auto md:w-1/3'>
							<img src='/assets/custom.png' alt='custom palettes' />
						</div>
						<div className='max-w-3xl mx-auto md:w-2/5'>
							<h1
								className='text-2xl text-white md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4'
								data-aos='zoom-y-out'
							>
								<span className='bg-clip-text text-transparent bg-gradient-to-r from-[#613BCD] to-[#CDBBF2]'>
									Customize
								</span>{' '}
								your colors.
							</h1>

							<p
								className='text-xl text-gray-600 mb-8'
								data-aos='zoom-y-out'
								data-aos-delay='150'
							>
								Need a little bit more customization? Don&apos;t worry. Colorjar
								comes packed with a color picker that helps acieve this.
							</p>

							<div>
								<Link href='/custom'>
									<button
										type='button'
										className='text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 transition-all duration-100 ease-linear font-semibold'
									>
										Start customizing palettes
										<span role='emoji' className='text-lg ml-2'>
											🎉
										</span>
									</button>
								</Link>
								<Link href='/palettes/custom'>
									<button
										type='button'
										className='text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 transition-all duration-100 ease-linear font-semibold'
									>
										View custom palettes
										<span role='emoji' className='text-lg ml-2'>
											🎉
										</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroHome;
