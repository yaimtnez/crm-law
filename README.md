
# CRM-LAW
This project was generated with [Vite] (https://v6.vite.dev/guide/) version 6.0 using [React] (https://react.dev/reference/react) version 19.1.0 + [TypeScript] (https://www.typescriptlang.org/docs/) version 5.8.3.


## Development server
Run `npm run dev` for a dev server. Navigate to ` http://localhost:5173/`. The application will automatically reload if you change any of the source files.

## Code scaffolding
Generate the manually to a new component. 

## Build
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
This project doesn't have a test runner configured yet. When needed, you can use Vitest or Jest. [Vitest](https://vitest.dev/) o [Jest](https://jestjs.io/).

## Running end-to-end tests
This project doesn't have a test runner configured yet. When needed, you can use Cypress or Playwright.[Cypress](https://www.cypress.io/) o [Playwright](https://playwright.dev/).


## Description of folder structure

### `Components/`
Contains the reusable UI components that make up the application's visual interface. Each component is in a separate file with descriptive PascalCase names, facilitating reuse and maintainability. They are small, reusable UI components, such as buttons, inputs, modals, lists, etc. They should be independent and stateless.

### `Contexts/`
React Contexts that manage global app states or shared, such as authentication (AuthContext), theme (ThemeContext), etc. These contexts allow you to centralize state logic and expose it in an organized manner to the components that need it.

### `Hooks/`
Contains custom hooks that encapsulate reusable, specific logic, such as authentication handling or data fetching. Hooks allow you to separate business logic from the UI and facilitate reuse across different components.

### `Models/`
This folder contains the TypeScript types and interfaces that define the data structures the application uses, such as the User and LoginCredentials models. This ensures strong and consistent typing throughout the project.

### `Layouts/`
Layouts are components that define the common visual and functional structure for groups of pages. For example: MainLayout: with header, sidebar, and footer, for private internal pages, AuthLayout: Simple layout for public pages such as Login or Registration. This helps avoid duplicating common structure and styles.

### `Pages/`
Full pages or views that are rendered according to the route. These are the "screens" the user sees and that the layout wraps around.

### `Services/`
Contains business logic and communication with APIs or backend simulations (mocks). Services abstract data operations, facilitating project maintainability and evolution. They do not contain a UI.

### `routes/`
This folder organizes the configuration and route definition for React Router. This is where the application's navigation is centralized, defining public and private routes and the navigation structure layouts and pages are assigned to routes, defining which page belongs within which layout.

### `Utils/`
Auxiliary functions or helpers that can be used in different parts of the project to avoid code duplication.

### `lib/` or `components/ui/`

This folder contains **base UI components** generated using [shadcn/ui](https://ui.shadcn.com/), such as `Button`, `Input`, `Badge`, and other atomic elements that make up your **Design System**.

These components are designed to be **reusable building blocks** across the entire application, following **Atomic Design** principles. They help maintain a consistent look and feel throughout the project.

✅ **Best practices:**
- Only modify these primitives when you need to change global styles or behavior.
- Always use clear, descriptive file names (`Button.tsx`, `Input.tsx`).
- Keep styling and functionality consistent.
- Document any custom variants or extensions (`buttonVariants.ts`, etc.).

**Example usage:**
```tsx
import { Button } from "@/components/ui/button"

<Button>Sign In</Button>

## Best practices applied

### Used clear and minimalist structure, easy to scale

### Naming Conventions
Hook components and files: always in Pascal Case → LoginForm.tsx, AuthProvider.tsx, useAuth.ts.
Functions and helpers (utils): in Camel Case → formatDate.ts.
Descriptive names: each file clearly indicates what it does and what it exports.
A LoginPage.tsx file contains the exact login page component.
An AuthProvider.tsx file defines the authentication context.
A useAuth.ts hook uses the auth context.
If a file exports more than one thing, it is given a name like authServices.ts or dateUtils.ts.

### Separation of Responsibilities
Each folder groups only its purpose:
components/ → Reusable UI blocks.
layouts/ → Page structures that wrap other views (DashboardLayout).
pages/ → Route inputs (LoginPage, DashboardPage).
contexts/ and hooks/ → Reusable global state and hook logic.
services/ → Business logic, data access (fake backend).
models/ → Type definitions: ensures consistent typing.
utils/ → Pure helpers with no React dependencies.

### Strict typing with TypeScript
All key data (User, AuthContextType, LoginCredentials) is typed.
Import types are used to keep the code clean and clear.
Functions return Promise<> when appropriate.

### Context + Hook pattern: AuthContext exposed with useAuth().
→ This centralizes the global auth state and makes it easy to use.
The AuthProvider wraps the entire app (in main.tsx or App.tsx).

### Reusable code
1 component = 1 file.
Reusable hooks (useAuth) and helpers (utils) avoid duplication of logic.
Layouts (MainLayout) maintain the visual structure DRY.

### Declarative and easy-to-read code
Use of custom hooks and expressive names.
UseXyz convention to make hooks recognizable.
Clear variables and props.

### The structure follows basic Clean Architecture principles:
Separation of business logic (services), presentation (pages, layouts, components), and global state (contexts).
Everything is easy to test.
Ready to add Vitest or Cypress for testing.

## Libraries and framework to used in this project:

### libraries:  
[shadcn](https://ui.shadcn.com/).

### frameworks: 
[tailwindcss](https://tailwindcss.com/).

 