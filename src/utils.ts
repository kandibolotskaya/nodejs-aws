type Space = string | number;
type Replacer = (number | string)[] | null;

export interface Prettier<T = any> {
  (value: T, space?: Space, replacer?: Replacer): void;
}

export const logWithPrettier = <T = any>(
  log: (...args: any[]) => void,
  prettier: Prettier<T>,
) => (value: T) => log(prettier(value));

export const prettyJSON: Prettier = <T = any>(
  value: T,
  space: Space = 2,
  replacer?: Replacer,
) => JSON.stringify(value, replacer, space);
