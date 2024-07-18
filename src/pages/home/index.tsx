import BrandSection from "./section/BrandSection";
import MainSection from "./section/MainSection";
import ProfileSection from "./section/ProfileSection";
import ServiceSection from "./section/ServiceSection";
import UserBrandSection from "./section/UserBrandSection";

const Home = () => {
  return (
    <>
      <MainSection />
      <ProfileSection />
      <BrandSection />
      <ServiceSection />
      <UserBrandSection />
    </>
  );
};

export default Home;
