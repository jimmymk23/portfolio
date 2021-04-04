// IMPORT LIBRARIES

// IMPORT COMPONENTS
import Head from 'next/head';
import HeadBanner from '../components/HeadBanner';
import HomeHero from '../components/HomeHero';
import ShowcaseSection from '../components/ShowcaseSection';
import SkillSection from '../components/SkillSection'

const index = () => {
	return (
		<>
            <Head>
                <title>James Keseling</title>
            </Head>
			<HeadBanner />
			<main>
				<HomeHero />
				<ShowcaseSection />
                <SkillSection />
			</main>
		</>
	);
};

export default index;
