import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";
import userData from "@constants/data";

export default function projects() {
  return (
    <ContainerBlock title={`Projects - ${userData.name}`}>
      <Projects />
    </ContainerBlock>
  );
}
