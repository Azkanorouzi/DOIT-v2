export function getOrganizationAccess({ organization, id }) {
  const haveReadAccess = organization?.read.includes(id);
  const haveWriteAccess = organization?.write.includes(id);
  const haveAdminAccess = organization?.admin.includes(id);
  return { haveAdminAccess, haveReadAccess, haveWriteAccess };
}
