import Image from 'next/image'

const HomeHero = () => {
    return (
		<section id='home-hero'>
			<Image
				src='/images/laptop.jpg'
				layout='fill'
				objectFit='cover'
				alt='Laptop'
				id='background-image'
			/>
			<div id='text-content'>
				<h1>James Keseling</h1>
				<h2>Front-End Web Developer</h2>
                <a href="https://github.com/jimmymk23" className='button' target='_blank'>My GitHub</a>
				{/* <p>
					I'm an enthusiastic web developer looking to make the web a
					more friendly place.
				</p> */}
				{/* <Image
					src='/images/headshot.jpg'
					width={150}
					height={150}
					className='headshot'
					objectFit='cover'
					priority
				/> */}
			</div>
		</section>
	);
}

export default HomeHero;