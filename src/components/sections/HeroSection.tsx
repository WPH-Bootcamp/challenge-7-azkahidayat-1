import LightHeroImage from '../../assets/images/light-mode/light-hero-image.webp';

const HeroSection = () => {
  return (
    <section>
      <div>
        <img src={LightHeroImage} alt='Hero image' />
      </div>
    </section>
  );
};

export default HeroSection;
