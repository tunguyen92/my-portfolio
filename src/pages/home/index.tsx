import BrandSection from "./section/BrandSection";
import MainSection from "./section/MainSection";
import ProfileSection from "./section/ProfileSection";
import ProjectsSection from "./section/ProjectsSection";
import ServiceSection from "./section/ServiceSection";
import SkillsSection from "./section/SkillsSection";
import TestimonialsSection from "./section/TestimonialsSection";
import UserBrandSection from "./section/UserBrandSection";

import "./styles.scss";

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
      <TestimonialsSection />
    </>
  );
};

export default Home;
