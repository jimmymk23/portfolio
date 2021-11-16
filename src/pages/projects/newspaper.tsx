import Head from 'next/head';
import Link from 'next/link';
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
					<h1 className='title'>Newspaper Site</h1>
					<h2 className='subtitle'>Overview:</h2>

					<h3>Overview:</h3>
					<ul>
						<li>
							Built with{' '}
							<span className='highlight'>Next.js</span>
						</li>
						<li>
							Deployed using{' '}
							<Link href='https://vercel.com'>
								<a>
									<span className='highlight'>
										Vercel.com
									</span>
								</a>
							</Link>
						</li>
						<li>Next.js</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default newspaper;
