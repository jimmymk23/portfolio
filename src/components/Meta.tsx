interface MetaProps {
	title?: string;
	description?: string;
	url?: string;
	image?: string;
}

const Meta = ({ title, description, url, image }: MetaProps) => {
	return (
		<>
			{/* Primary Meta Tags */}
			<title>{title}</title>
			<meta name='title' content={title} />
			<meta name='description' content={description} />

			{/* Open Graph / Facebook */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content={url} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />

			{/* Twitter */}
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={url} />
			<meta property='twitter:title' content={title} />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:image' content={image} />
		</>
	);
};

export default Meta;
