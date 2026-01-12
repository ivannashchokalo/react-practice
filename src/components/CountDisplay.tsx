interface CountDisplayProps {
  clicks: number
}

export default function CountDisplay({clicks}: CountDisplayProps) {
  return <p>The current counter value is {clicks}</p>;
}