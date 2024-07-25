type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

/**
 * Represents a union of types, each containing exactly one key-value pair from the given record type `T`.
 *
 * This type takes a record type `T` and constructs a union type where each type in the union represents a
 * single key-value pair from `T`. This facilitates operations or functions that might need to accept or
 * process individual properties from a record in a type-safe manner.
 *
 * @typeparam T - A record type where keys are strings and values can be of any type.
 *
 * @example
 * // Define a record type
 * type Car = {
 *   make: string;
 *   model: string;
 *   year: number;
 * };
 *
 * // Use KeyValueOf to derive a type that represents any single key-value pair from Car
 * function logCarProperty(prop: KeyValueOf<Car>): void {
 *   const key = Object.keys(prop)[0]; // Gets the key from the object
 *   console.log(`${key}: ${prop[key as keyof typeof prop]}`);
 * }
 *
 * // Example usage:
 * logCarProperty({ make: 'Toyota' });  // Logs: "make: Toyota"
 * logCarProperty({ year: 2021 });      // Logs: "year: 2021"
 *
 * @note
 * The resulting type is a union of object types, each with one property derived from the original
 * record. This setup allows for handling properties individually while maintaining type safety.
 */
type KeyValueOf<T extends Record<string, unknown>> = { [K in keyof T]: Pick<T, K> }[keyof T]

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`

type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}`
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never
