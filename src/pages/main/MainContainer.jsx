import React from "react";
import MainHero from "../../components/maincomponents/MainHero";
import MainHowItWorks from "../../components/maincomponents/MainHowItWorks";
import MainRecipeSection from "../../components/maincomponents/MainRecipeSection";

const MainContainer = () => {
  return (
    <>
      <MainHero />
      <MainHowItWorks />
      <MainRecipeSection />
    </>
  );
};

export default MainContainer;
