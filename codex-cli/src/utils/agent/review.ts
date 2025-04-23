// enum
// Type Safety : Enums create a type-safe way to represent a fixed set of options. 
// You can only assign values that are defined in the enum to variables of that enum type.

// String-based Values : In your case, this is a string enum where each enum member is assigned a specific string value. 
// This makes the values more readable and meaningful when used in code or stored in data.
// 1. Intellisense Support : IDEs can provide autocomplete suggestions 
// for enum members, making it easier to work with the codebase.

export enum ReviewDecision {
  YES = "yes",
  NO_CONTINUE = "no-continue",
  NO_EXIT = "no-exit",
  /**
   * User has approved this command and wants to automatically approve any
   * future identical instances for the remainder of the session.
   */
  ALWAYS = "always",
  /**
   * User wants an explanation of what the command does before deciding.
   */
  EXPLAIN = "explain",
}
