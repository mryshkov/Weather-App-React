
interface Props {
	hour: string;
}

export default function Hour( { hour }: Props ) {
	return (
		<div>Hello { hour }:3</div>
	)
}