import * as b from "bobril";

export function useLocalStorage(key: string, defaultValue: () => string) {
  const value = localStorage.getItem(key);
  const [_, forceUpdate] = b.useReducer((x) => x + 1, 0);
  return [
    value || defaultValue(),
    (v: string) => {
      localStorage.setItem(key, v);
      forceUpdate({});
    },
  ] as const;
}

export function useDateInLocalStorage(key: string, defaultValue: () => Date) {
  const [sValue, setSValue] = useLocalStorage(key, () =>
    defaultValue().getTime().toString()
  );
  return [
    new Date(+sValue),
    (d: Date) => setSValue(d.getTime().toString()),
  ] as const;
}
