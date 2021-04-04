import SkillsList from './SkillsList';

const SkillSection = () => {
	return (
		<section id='skills'>
			<div className='container'>
				<h2>Skills</h2>
				<div className='flex-list-container'>
					<SkillsList
						title={'Languages'}
						items={['JavaScript', 'TypeScript', 'Python']}
					/>
					<SkillsList
						title={'Languages'}
						items={['JavaScript', 'TypeScript', 'Python']}
					/>
					<SkillsList
						title={'Languages'}
						items={['JavaScript', 'TypeScript', 'Python']}
					/>
				</div>
			</div>
		</section>
	);
};

export default SkillSection;
