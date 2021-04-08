import Image from 'next/image';
import Link from 'next/link';
import { Url } from 'node:url';

interface ProjectCardProps {
	imgPath: string;
	title: string;
	caption?: string;
	page: string;
	githubLink: string;
}

const ProjectCard = ({
	imgPath,
	title,
	caption,
	page,
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
			<h3>{title}</h3>
			<p>{caption}</p>
			<div className='button-row'>
				<Link href={page}>See More</Link>
				<Link href={githubLink}>
					<a target='_blank'>GitHub</a>
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
