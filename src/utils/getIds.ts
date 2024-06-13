interface HasId {
  id?: string;
}
export function getIds<T extends HasId>(taskArr: T[]) {
  return taskArr.map((task) => task.id);
}
