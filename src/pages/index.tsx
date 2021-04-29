// IMPORT LIBRARIES

// IMPORT COMPONENTS
import Head from 'next/head';
import Meta from '../components/Meta';
import HeadBanner from '../components/HeadBanner';
import HomeHero from '../components/HomeHero';
import About from '../sections/About';

const index = () => {
	return (
		<>
			<Head>
				<Meta
					title='James Keseling | Front-End Web Dev Portfolio'
					description="I'm looking to make websites more friendly, functional, and accessible with modern web standards and technologies."
					url='https://jameskeseling.com/'
					image='/images/preview.jpg'
				/>
			</Head>
			<HeadBanner />
			<main>
				<HomeHero />
				<About />
			</main>
		</>
	);
};

export default index;
