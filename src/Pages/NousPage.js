import React from "react";
import Navigation from "../components/Navigation";
import bg from "../assests/bg/banner.1.jpeg";
import Banner from "../components/Banner";
import img1 from "../assests/bg/footer.1.jpeg";
import FooterOne from "../components/FooterOne";
import About from "../components/About";
import Quality from "../components/Quality";
import Histries from "../components/Histries";
import Maps from "../components/Maps";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const NousPage = () => {
  window.scroll(0, 0);
  const { t } = useTranslation();
  return (
    <>
      <section id="nous">
        <Helmet>
          <title>Nous | MK Green Energy</title>
          <meta name="description" content="Nous MK Green Energy" />
        </Helmet>
        <Navigation />
        <Banner bg={bg} isCenter={false} text={t("nous.Banner.title")} />
        <Histries />
        {/* <Borne/> */}
        <Quality isDisplay={true} />
        <About isDisplay={true} />
        <FooterOne
          invert={true}
          img={img1}
          bgColor={"rgb(255 255 255 / 66%)"}
        />
        <Maps />
      </section>
    </>
  );
};

export default NousPage;
