import Header from "./Header";
import Footer from "./Footer";
import Intro from "../Intro";
import StatsCard from "../Statscard";
import Portfolio from "../Portfolio"
import Skills from "../Skills";
import Testimonial from "../Testimonial";
export const Layout = () => {
  return (
    <>
      <Header />
      <Intro />
      <StatsCard />
      <Portfolio />
      <Skills />
      <Testimonial />
      <Footer />
    </>
  );
};
