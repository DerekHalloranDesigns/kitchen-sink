import React from "react";
import "../styles/components/Header.scss";

interface HeaderProps {
  styleGuideUrl?: string;
}

const Header: React.FC<HeaderProps> = ({
  styleGuideUrl = "./style-guide/index.html",
}) => {
  return (
    <header className="site-header" role="banner">
      <div className="site-header__bar">
        <a
          href={styleGuideUrl}
          className="site-header__link underline color_white has-pd-top-5 has-pd-bottom-5"
          style={{ display: "inline-block" }}
        >
          Style Guide Available!
        </a>
      </div>
    </header>
  );
};

export default Header;
