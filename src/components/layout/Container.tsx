import type { LayoutProp } from '../../types';

const Container = ({ children }: LayoutProp) => {
  return (
    <div className='flex flex-col py-8xl px-xl lg:px-11xl gap-3xl lg:gap-7xl'>
      {children}
    </div>
  );
};

export default Container;
