import { useNavigate } from 'react-router-dom';
import grayLogo from '../../assets/gray_logo.svg';
import HeroSection from '../../components/heroSection/HeroSection';
import LoginSection from '../../components/loginSection/LoginSection';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <div className="flex flex-1 items-center justify-center border-r-2">
        <HeroSection />
        <div className="absolute bottom-4 left-4">
          {' '}
          <img
            src={grayLogo}
            className="h-[79.75px] w-[71px] md:h-[159.5px] md:w-[142px] lg:h-[319px] lg:w-[284px]"
            alt="Logo"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <LoginSection />
        <span className="text-[#081735]" onClick={() => navigate('/dashboard')}>
          {' '}
          By signing up you agree to the <strong>Privacy Policy</strong>.
        </span>
      </div>
    </div>
  );
}
