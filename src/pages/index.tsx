import HeadBanner from '../components/HeadBanner'
import HomeHero from '../components/HomeHero'
import ShowcaseSection from '../components/ShowcaseSection'

const index = () => {
    return (
        <>
            <HeadBanner />
            <main>
                <HomeHero />
                <ShowcaseSection />
            </main>
        </>
    );
}

export default index;