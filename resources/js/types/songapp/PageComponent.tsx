// types/PageComponent.ts (or inline if you prefer)

import type { ReactNode, FC } from 'react';

export type PageComponent = FC & {
    layout?: (page: ReactNode) => ReactNode;
};
