import ProjectCard from './ProjectCard'

const ShowcaseSection = () => {
	return (
		<section id='showcase'>
			<div className='container'>
				<h2>Showcase</h2>
                <div className="flex-card-container">
                    <ProjectCard
                        imgPath='/images/newspaper-screenshot.png'
                        title='Newspaper Site'
                        caption='A newspaper blog with user accounts.'
                        githubLink='#' />
                    <ProjectCard
                        imgPath='/images/newspaper-screenshot.png'
                        title='Newspaper Site'
                        caption=''
                        githubLink='#' />
                    <ProjectCard
                        imgPath='/images/newspaper-screenshot.png'
                        title='Newspaper Site'
                        caption=''
                        githubLink='#' />
                </div>
			</div>
		</section>
	);
};

export default ShowcaseSection;
