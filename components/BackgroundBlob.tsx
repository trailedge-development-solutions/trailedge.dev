import { useState, useEffect } from 'react';

export default function BackgroundBlob({ top, smTop, left, smLeft, rotate }) {
  const symbols = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e'
  ];
  const [ id, setId ] = useState('');
  let tempId = '';

  useEffect(() => {
    for (let i = 0; i < 30; i++)
      tempId = tempId + symbols[Math.round(Math.random() * symbols.length)];
    setId(tempId);
  }, []);

  const SvgGrad = () => (
    <>
      <path
	fill={`url(#${id})`}
	fillOpacity=".3"
	d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
      />
      <defs>
	<linearGradient
	  id={id}
	  x1="1155.49"
	  x2="-78.208"
	  y1=".177"
	  y2="474.645"
	  gradientUnits="userSpaceOnUse"
	>
	  <stop stopColor="#818cf8" />
	  <stop offset={1} stopColor="#34D399" />
	</linearGradient>
      </defs>
    </>
  );

  return (
      <div className={'absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl' + ` ${top} ${smTop}`}>
	<svg
	  className={'relative -z-10 max-w-none -translate-x-1/2 h-[20rem] sm:h-[40rem]' + ` ${left} ${smLeft} ${rotate ? rotate : ''}`}
	  viewBox="0 0 1155 678"
	>
	  <SvgGrad/>
	</svg>
      </div>
  );
}
