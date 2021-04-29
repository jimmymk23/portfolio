import Image from 'next/image'
import styles from '../styles/HomeHero.module.sass';

const HomeHero = () => {
    return (
		<section className={styles.section}>
			<Image
				src='/images/laptop.jpg'
				layout='fill'
				objectFit='cover'
				alt='Laptop'
				className={styles.background_image}
				quality={40}
			/>
			<div className={styles.text_content}>
				<h1>James Keseling</h1>
				<h2>Front-End Web Developer</h2>
				<a
					href='https://github.com/jimmymk23'
					className={`button ${styles.button}`}
					target='_blank'
				>
					My GitHub
				</a>
			</div>
		</section>
	);
}

export default HomeHero;