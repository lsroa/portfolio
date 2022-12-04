type CardProps = {
	title: string
	body: string
}

export const Card = ({title, body}: CardProps) => {
	return (
		<div className="border border-slate-100 p-4 rounded-xl">
				<a href="https://nextjs.org/docs">
					<h2>{title}</h2>
					<p>{body}</p>
				</a>
		</div>
	)
}
