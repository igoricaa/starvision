function BurgerIcon({ color = '#fff' }: { color?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='19'
      fill='none'
      viewBox='0 0 30 19'
    >
      <path
        stroke={color}
        strokeLinecap='round'
        strokeWidth='3'
        d='M2 1.77h26M13 10.258h15M2 17.258h26'
      ></path>
    </svg>
  );
}

export default BurgerIcon;
