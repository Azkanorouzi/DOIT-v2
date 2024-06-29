export function setRadioQueryParam({ type, setSearchParams, oldValue }) {
  return (newValue: string) => {
    setSearchParams((searchParams) => {
      if (newValue === oldValue) {
        searchParams.delete(type);
        return searchParams;
      }
      searchParams.set(type, newValue.toLowerCase());
      return searchParams;
    });
  };
}
