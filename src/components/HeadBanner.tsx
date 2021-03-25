import Link from 'next/link';

const HeadBanner = () => {
	return (
		<header>
			<div className='wide-container'>
				<Link href='/'>
					<a className='text-logo'>James Keseling</a>
				</Link>
			</div>
		</header>
	);
};

export default HeadBanner;
