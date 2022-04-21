import React from "react";

import "./styles.scss";

type TitleProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Title({ children, variant = "primary" }: TitleProps) {
  return <h3 className={`layout-title -${variant}`}>{children}</h3>;
}
