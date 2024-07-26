export async function promiseAllFromArrayId(ids: string[], queryMaker) {
  const promises = [];
  ids.map((id) => {
    queryMaker(id);
  });

  return await Promise.all(promises);
}
