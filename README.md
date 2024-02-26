# Folders and Structure

**_Global rules_**:

-   files with jsx should consist `tsx` extension, without jsx - `ts`

## Components

In this folder we are storing our react components.

#### _Rules_:

-   each file should start with uppercase
-   for global components we have `shared` folder inner components

## Helpers

In this folder we are storing our **global** helper functions.

#### _Rules_:

-   helper function it is a pure function

## Services

In this folder we are storing our **global** service functions.

#### _Rules_:

-   functions or classes that aggregate and encapsulate some logic

## Hooks

In this folder we are storing our **global** hooks functions.

#### _Rules_:

-   each file with hook should starts with `use`

## Redux

In this folder we are storing our **global** reducers functions and store.

#### _Rules_:

-   all our reducers should be stored in the reducers folder

-   all reducers should be created from the `createSlice`

## Types

In this folder we are storing our **global** types to typescript.

#### _Rules_:

-   only global or reused types must be stored

## Theme

In this folder we are storing our **global** theme.

#### _Rules_:

-   should consist only theme from `figma`

## Assets

In this folder we are storing our all assets like **images**, **video** or **styles**.

#### _Rules_:

-   for each type should be a folder, type - such as images or styles
