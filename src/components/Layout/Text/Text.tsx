import React from "react";

import "./styles.scss";

type TextProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Text({ children, variant = "primary" }: TextProps) {
  return <p className={`layout-text -${variant}`}>{children}</p>;
}
