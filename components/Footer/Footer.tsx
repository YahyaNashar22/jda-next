import React from "react";
import FooterContact from "./FooterContact";
import CopyRights from "./CopyRights";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="h-full w-full flex relative">
      <FooterContact />
      <CopyRights />
      <SocialLinks />
    </footer>
  );
};

export default Footer;
