interface MenuIconProps {
  fill?: string;
  width?: number;
  height?: number;
}
export default function MenuIcon(props: MenuIconProps) {
  const { fill = '#c5c6cc', width = 24, height = 24 } = props;
  return (
    <svg width={width} height={height} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuIcon" fill={fill}>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
}