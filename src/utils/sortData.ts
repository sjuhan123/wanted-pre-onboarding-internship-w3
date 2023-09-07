type SortableData<D> = D[];

export const sortData = <D>(
  data: SortableData<D>,
  value: string,
  range: number,
  compareKey: keyof D,
) => {
  if (!data) return [];

  const filteredData = data.filter((item) =>
    (item[compareKey] as string).toString().startsWith(value),
  );
  return filteredData.sort((a, b) => (a[compareKey] > b[compareKey] ? 1 : -1)).slice(0, range);
};
