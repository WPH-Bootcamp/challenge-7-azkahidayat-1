import CompanyLogo from '../../assets/images/logo-symbol.svg';
import { useMobileMenu } from '../../contexts/mobile-menu/useMobileMenu';

const Logo = () => {
  const { closeMenu } = useMobileMenu();
  return (
    <div onClick={closeMenu}>
      <a href='#' className='flex gap-md items-center cursor-pointer'>
        <div>
          <img src={CompanyLogo} alt='Company Logo' loading='lazy' />
        </div>
        <span className='font-semibold text-2xl lg:text-3xl'>Your Logo</span>
      </a>
    </div>
  );
};

export default Logo;
