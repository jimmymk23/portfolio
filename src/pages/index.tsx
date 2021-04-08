// IMPORT LIBRARIES

// IMPORT COMPONENTS
import Head from 'next/head';
import HeadBanner from '../components/HeadBanner';
import HomeHero from '../components/HomeHero';
import AboutSection from '../components/AboutSection';

const index = () => {
	return (
		<>
			<Head>
				<title>James Keseling</title>
				<meta
					name='description'
					content="I'm a front-end web developer looking to make the web more
					friendly, functional, and accessible."
				/>
			</Head>
			<HeadBanner />
			<main>
				<HomeHero />
				<AboutSection />
			</main>
		</>
	);
};

export default index;
