interface SkillsListProps {
	title: string;
	description?: string;
	items: Array<string>;
}

const SkillsList = ({ title, description, items }: SkillsListProps) => {
	return (
		<div className='skills-list'>
			<h3>{title}</h3>
			<p>{description}</p>
			<ul>
				{items.map((item) => {
					return <li key={`${title}-${item}`}>{item}</li>;
				})}
			</ul>
		</div>
	);
};

export default SkillsList;
