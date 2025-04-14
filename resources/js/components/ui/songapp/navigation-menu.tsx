import React from 'react';
import { usePage, Link } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react'; // 👈 this is the type of any Lucide icon


type NavItemProps = {
    href: string;
    icon: LucideIcon;
    label: string;
    iconSize?: number;
    iconClass?: string;
};
/**
 * A navigation item that highlights when the current URL matches.
 *
 * @param {string} href - The route to link to.
 * @param {React.ElementType} icon - Lucide icon component (e.g. Home, Search).
 * @param {string} label - Text label to display.
 * @param {number} iconSize - Size of the icon (default: 16).
 * @param {string} iconClass - Additional Tailwind classes for the icon.
 */
export default function NavItem({ href, icon: Icon, label, iconSize = 16, iconClass = '' }:NavItemProps) {
    const { url } = usePage();
    const isActive = href === '/'
        ? url === '/' // exact match for home
        : url.startsWith(href); // startsWith for other pages like /search

    const baseClasses = 'px-3 py-2 text-sm font-medium rounded-full flex items-center';
    const activeClasses = 'text-white bg-[#282828]';
    const inactiveClasses = 'text-gray-400 hover:text-white';

    return (
        <Link
            href={href}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        >
            <Icon size={iconSize} className={`mr-2 ${iconClass}`} />
            {label}
        </Link>
    );
}
