
interface Props {
	day: string;
	className?: string;
}

export default function Day({ day }: Props) {
	return (
		<div>Hello { day }:3</div>
	)
}