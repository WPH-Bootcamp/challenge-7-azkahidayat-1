import type { LayoutProp } from '../../types';
import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }: LayoutProp) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main>
        <div className='wrapper'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
