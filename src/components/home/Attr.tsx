import React from "react";

const Attr: React.FC<{ skill: any; children: React.ReactNode }> = ({
  skill,
  children,
}) => (
  <a
    href={skill.link}
    target="_blank"
    rel="noreferrer"
    style={{
      marginLeft: "52px",
      marginBottom: "40px",
      maxWidth: "40px",
    }}
  >
    {children}
  </a>
);

export default Attr;
