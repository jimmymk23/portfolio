const About = () => {
	return (
		<section id='about'>
			<div className='container'>
				<h2>What I Do</h2>
				<p>
					I'm a front-end web developer looking to make the web more
					friendly, functional, and accessible.
				</p>
			</div>
			<div className='wide-container'>
				<div className='card-container'>
					<div className='card'>
						<h3 className='subtitle'>Programming with:</h3>
						<ul>
							<li>JavaScript & TypeScript</li>
							<li>Node & NPM</li>
							<li>Python</li>
						</ul>
					</div>
					<div className='card'>
						<h3 className='subtitle'>Frameworks:</h3>
						<ul>
							<li>React.js</li>
							<li>Next.js</li>
						</ul>
					</div>
					<div className='card'>
						<h3 className='subtitle'>Collaboration using:</h3>
						<ul>
							<li>Git</li>
							<li>GitHub</li>
							<li>CodePen</li>
						</ul>
					</div>
					<div className='card'>
						<h3 className='subtitle'>Deploying & Hosting on:</h3>
						<ul>
							<li>Vercel</li>
							<li>Netlify</li>
							<li>Heroku</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
