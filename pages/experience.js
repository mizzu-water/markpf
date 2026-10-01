import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Experience from "../components/Experience";
import userData from "@constants/data";

export default function experience() {
  return (
    <ContainerBlock title={`Experience - ${userData.name}`}>
      <Experience />
    </ContainerBlock>
  );
}
