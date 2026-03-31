import React from 'react';
import { usePage, Link } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';


type NavItemProps = {
    href: string;
    icon: LucideIcon;
    label: string;
    iconSize?: number;
    iconClass?: string;
};

/**
 * A navigation item that highlights when the current URL matches.
 */
export default function NavItem({ href, icon: Icon, label, iconSize = 16, iconClass = '' }: NavItemProps) {
    const { url } = usePage();
    const isActive = href === '/'
        ? url === '/'
        : url.startsWith(href);

    return (
        <Link
            href={href}
            className={`
                relative px-4 py-2 text-sm font-medium rounded-full
                flex items-center gap-2 transition-all duration-200
                ${isActive
                    ? 'text-white bg-[#282828] shadow-inner'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }
            `}
        >
            <Icon
                size={iconSize}
                className={`transition-transform ${isActive ? 'scale-110' : ''} ${iconClass}`}
            />
            <span>{label}</span>
            {isActive && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1DB954] rounded-full" />
            )}
        </Link>
    );
}
