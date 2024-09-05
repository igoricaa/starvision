import React from 'react';

function ArrowRight({ color = '#000' }: { color?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='17'
      fill='none'
      viewBox='0 0 28 17'
    >
      <path
        fill={color}
        d='M21.875 9.389H6.125A.873.873 0 015.25 8.5c0-.498.385-.889.875-.889h15.75c.49 0 .875.391.875.889a.873.873 0 01-.875.889z'
      ></path>
      <path
        fill={color}
        d='M17.5 15.611a.81.81 0 01-.613-.267.89.89 0 010-1.262l5.513-5.6-5.512-5.6a.89.89 0 010-1.262.857.857 0 011.242 0l6.125 6.222a.89.89 0 010 1.262l-6.125 6.223a.872.872 0 01-.613.266l-.017.018z'
      ></path>
    </svg>
  );
}

export default ArrowRight;
