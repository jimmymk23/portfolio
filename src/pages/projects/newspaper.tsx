import Head from 'next/head';
// import Image from 'next/image';
import HeadBanner from '../../components/HeadBanner';

const newspaper = () => {
	return (
		<>
			<Head>
				<title>James Keseling - Newspaper Project</title>
			</Head>
			<HeadBanner />
			<div className='project-hero'>
				<div className='container'>
					<h1>Newspaper Site</h1>
				</div>
			</div>
		</>
	);
};

export default newspaper;
