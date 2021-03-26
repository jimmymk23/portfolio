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
			<div id='text-content'>
				<h1>James Keseling</h1>
				<h2>Front-End Web Developer</h2>
				<p>
					I'm an enthusiastic web developer looking to make the web a
					more friendly place.
				</p>
			</div>
		</section>
	);
}

export default HomeHero;