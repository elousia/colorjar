import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import HeroHome from '../components/Hero';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<main>
			<HeroHome />
		</main>
	);
};

export default Home;
