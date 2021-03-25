import Image from 'next/image'

const HomeHero = () => {
    return (
        <section id='home-hero'>
            <Image
                src='/images/laptop.jpg'
                layout='fill'
                alt='Laptop'
                id='background-image'
            />
            <div id="text-content">
                <h1>James Keseling</h1>
                <h2>Front-End Web Developer</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ex mollitia ipsam nam dolores ipsum ea libero praesentium iure porro!</p>
            </div>
        </section>
    );
}

export default HomeHero;