import BrandSection from "./section/BrandSection";
import MainSection from "./section/MainSection";
import ProfileSection from "./section/ProfileSection";
import ProjectsSection from "./section/ProjectsSection";
import ServiceSection from "./section/ServiceSection";
import SkillsSection from "./section/SkillsSection";
import UserBrandSection from "./section/UserBrandSection";

const Home = () => {
  return (
    <>
      <MainSection />
      <ProfileSection />
      <BrandSection />
      <ServiceSection />
      <UserBrandSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
};

export default Home;
