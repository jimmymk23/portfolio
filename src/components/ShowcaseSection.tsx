import ProjectCard from './ProjectCard'

const ShowcaseSection = () => {
	return (
		<section id='showcase'>
			<div className='container'>
				<h2>Showcase</h2>
				<div className='flex-card-container'>
					<ProjectCard
						imgPath='/images/daily-news-home.png'
						title='Newspaper Site'
						caption='A newspaper blog with user accounts.'
                        page='/projects/newspaper'
						githubLink='https://github.com/jimmymk23/daily-newspaper'
					/>
					{/* <ProjectCard
						imgPath='/images/newspaper-screenshot.png'
						title='Newspaper Site'
						caption=''
						githubLink='#'
					/>
					<ProjectCard
						imgPath='/images/newspaper-screenshot.png'
						title='Newspaper Site'
						caption=''
						githubLink='#'
					/> */}
				</div>
			</div>
		</section>
	);
};

export default ShowcaseSection;
