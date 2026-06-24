import { useState } from 'react';

const HamburgerButton = () => {
  const [active, setActive] = useState(false);

  const buttonClasses =
    'h-1 w-6 bg-neutral-950 rounded-full transition-all duration-200';

  return (
    <button
      className='lg:hidden flex flex-col gap-1'
      onClick={() => setActive((prev) => !prev)}
    >
      <span
        className={`${buttonClasses} ${active && 'rotate-45 translate-y-2'}`}
      ></span>
      <span className={`${buttonClasses} ${active && 'opacity-0'}`}></span>
      <span
        className={`${buttonClasses} ${active && '-rotate-45 -translate-y-2'}`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
