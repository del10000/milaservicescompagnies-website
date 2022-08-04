import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { ThreeColumn } from '../components/ThreeColumn';
import { Card } from '../components/Card';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Mila Services Compagnie | Accueil</title>
				<link rel="icon" href="/assets/logo-icon.svg" />
			</Head>

			<Header />

			<ThreeColumn />

			<Card />

			<Testimonials />

			<Contact />

			<Footer />
		</div>
	);
};

export default Home;
