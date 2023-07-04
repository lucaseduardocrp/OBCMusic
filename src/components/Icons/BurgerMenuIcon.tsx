type Props = {
  width: string,
  height: string,
}

export default function BurgerMenuIcon({width, height}: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 125 114" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="5" x2="120" y2="5" stroke="white" stroke-width="10" stroke-linecap="round"/>
    <line x1="5" y1="57" x2="120" y2="57" stroke="white" stroke-width="10" stroke-linecap="round"/>
    <line x1="5" y1="109" x2="120" y2="109" stroke="white" stroke-width="10" stroke-linecap="round"/>
    </svg>
  )
}