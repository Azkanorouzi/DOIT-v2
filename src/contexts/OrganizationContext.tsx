import React, { ReactNode, useContext, useState, createContext } from "react";
import { useParams } from "react-router-dom";

const OrganizationContext = createContext(
  {} as {
    curOrganizationId: string;
    curOrganization: string;
    setCurOrganizationId: React.Dispatch<React.SetStateAction<string>>;
  },
);

export default function OrganizationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [curOrganizationId, setCurOrganizationId] = useState("");
  // ===== Auto navigation
  const params = useParams();

  return (
    <OrganizationContext.Provider
      value={{
        curOrganizationId,
        curOrganization: params?.organization,
        setCurOrganizationId,
      }}
    >
      {" "}
      {children}
    </OrganizationContext.Provider>
  );
}

export function useCurOrganization() {
  const context = useContext(OrganizationContext);
  if (!context) {
    throw new Error("The theme context is being use outside of its context");
  }
  return context;
}
