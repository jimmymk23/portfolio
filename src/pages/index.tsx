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
				{/* Primary Meta Tags */}
				<title>James Keseling | Front-End Web Dev Portfolio</title>
				<meta
					name='title'
					content='James Keseling | Front-End Web Dev Portfolio'
				/>
				<meta
					name='description'
					content="I'm looking to make websites more friendly, functional, and accessible with modern web standards and technologies."
				/>

				{/* Open Graph / Facebook */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://jameskeseling.com/' />
				<meta
					property='og:title'
					content='James Keseling | Front-End Web Dev Portfolio'
				/>
				<meta
					property='og:description'
					content="I'm looking to make websites more friendly, functional, and accessible with modern web standards and technologies."
				/>
				<meta property='og:image' content='/images/preview.jpg' />

				{/* Twitter */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://jameskeseling.com/'
				/>
				<meta
					property='twitter:title'
					content='James Keseling | Front-End Web Dev Portfolio'
				/>
				<meta
					property='twitter:description'
					content="I'm looking to make websites more friendly, functional, and accessible with modern web standards and technologies."
				/>
				<meta property='twitter:image' content='/images/preview.jpg' />
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
