import React, { ReactNode, useContext, useState, createContext } from "react";
import { useParams } from "react-router-dom";

const ContainerContext = createContext(
  {} as {
    curContainerId: string;
    curContainerName: string;
    setCurContainerId: React.Dispatch<React.SetStateAction<string>>;
  },
);

export default function ContainerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [curContainerId, setCurContainerId] = useState("todo");

  // ===== Auto navigation
  const params = useParams();

  return (
    <ContainerContext.Provider
      value={{
        curContainerId,
        setCurContainerId,
        curContainerName: params?.container,
      }}
    >
      {" "}
      {children}
    </ContainerContext.Provider>
  );
}

export function useCurContainer() {
  const context = useContext(ContainerContext);
  if (!context) {
    throw new Error("The theme context is being use outside of its context");
  }
  return context;
}
