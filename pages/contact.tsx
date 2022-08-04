import { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Navbar } from '../components/Navbar';

const Contact: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Mila Services Compagnie | Contact</title>
				<link rel="icon" href="/assets/logo-icon.svg" />
			</Head>

			<Navbar />

			<Form />

			<Footer />
		</div>
	);
};

export default Contact;
