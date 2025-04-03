import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import type { PageComponent } from '@/types/songapp/page-component';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp<{
    Component: PageComponent;
}>({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // This is the layout component that is being used to wrap the page component
        const layout = Page.layout || ((page: React.ReactNode) => page);

        root.render(layout(<App {...props} />)); // passed in from inertia to dynamically render pages based on laravel routes
        // ...props is spread syntax to pass all props to the App component
        // el is the root element to render the app into in the app.blade.php file it is either div with id app or @inertia directive which becomes div with id app
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();


 //plan:
// 1. add home page to pages folder
// 2. add a route to the home page in the web.php file
// 3. add header and footer to layout app folder
//   - maybe can make components for header and footer
// 4. add header and footer to the app layout
