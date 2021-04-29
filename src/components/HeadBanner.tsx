import Link from 'next/link';
import styles from '../styles/HeadBanner.module.sass';

const HeadBanner = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<Link href='/'>
					<a className={styles.text_logo}>James Keseling</a>
				</Link>
			</div>
		</header>
	);
};

export default HeadBanner;
