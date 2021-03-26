import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
	imgPath: string;
	title: string;
	caption?: string;
	githubLink: string;
}

const ProjectCard = ({
	imgPath,
	title,
	caption,
	githubLink,
}: ProjectCardProps) => {
	return (
		<div className='project-card'>
			<Image
				src={imgPath}
				width={200}
				height={200}
				layout='responsive'
				alt={title}
			/>
			<div className='content'>
				<h4>{title}</h4>
				<p>{caption}</p>
				<div className='button-row'>
					<Link href='#'>See More</Link>
					<Link href='#'>GitHub</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
