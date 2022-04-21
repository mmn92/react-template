import React from "react";

import "./styles.scss";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className="application-container">{children}</div>;
}
