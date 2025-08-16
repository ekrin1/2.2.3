import './Circle.css';

interface Props {
  color: string
  active?: boolean
}

export function Circle({ color, active }: Props) {
  return <div className="circle circle-green" />;
}
