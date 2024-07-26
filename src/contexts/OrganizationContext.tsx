import useCurrentUser from "@/hooks/useCurrentUser";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useGetUserOrganizations } from "@/redux-cake/taskSlice/organizationsSlice";
import { Organization } from "@/utils/definitions";
import React, {
  ReactNode,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from "react";
import { useParams } from "react-router-dom";

const OrganizationContext = createContext(
  {} as {
    curOrganizationId: string;
    curOrganization: string;
    setCurOrganizationId: React.Dispatch<React.SetStateAction<string>>;
    curOrganizationData: Organization[];
    organizations: Organization[];
    isLoadingOrganization: boolean;
  },
);

export default function OrganizationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { id } = useCurrentUser();
  const { data, isLoading: isLoadingOrganization } = useGetUserOrganizations({
    userId: id,
  });
  const [curOrganizationId, setCurOrganizationId] = useLocalStorage(
    "curOrganizationId",
    "",
  );

  const params = useParams();
  // This usememo is necessary for actually returning the memo that we want
  const curOrganizationData = useMemo(() => {
    const cur = data?.filter((org) => org.id === curOrganizationId) ?? [];
    if (
      cur[0]?.name?.toLowerCase() !== params?.organization?.toLowerCase() &&
      cur.length
    ) {
      console.log(data, "data");
      console.log(params?.organization, "organiztion name");
      return [
        data?.filter(
          (org) =>
            org?.name?.toLowerCase() === params?.organization?.toLowerCase(),
        )[0],
      ];
    }
    return cur;
  }, [curOrganizationId, data, params]);

  // ===== Auto navigation
  console.log(params, "params");

  useEffect(() => {}, [params?.organization, curOrganizationData]);

  return (
    <OrganizationContext.Provider
      value={{
        organizations: data,
        isLoadingOrganization,
        curOrganizationData,
        curOrganizationId: curOrganizationId?.length ? curOrganizationId : null,
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
