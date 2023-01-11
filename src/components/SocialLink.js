import React from "react";

function SocialLink({ socialLink }) {
  return (
    <a
      className="footer-links"
      href={socialLink.url}
      target="_blank"
      rel="noopener noreferrer"
      title={socialLink.title}
    >
      {socialLink.icon}
    </a>
  );
}

export default SocialLink;
