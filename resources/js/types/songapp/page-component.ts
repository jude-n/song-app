// types/PageComponent.ts (or inline if you prefer)

import type { ReactNode, FC } from 'react';
// 🔹 Define a custom type for components that may include a `layout` function
// React Function component. Means  it is a function, accepts props and returns a react node
export type PageComponent = FC & {
    layout?: (page: ReactNode) => ReactNode;
};
