"use client"
import { LibraryTab } from '@/types/songapp/library';

interface LibraryTabsProps {
    tabs: LibraryTab[]
    activeTabId: string
    setActiveTabId: (id: string) => void
}

export default function LibraryTabs({ tabs, activeTabId, setActiveTabId }: LibraryTabsProps) {
    return (
        <div className="border-b border-[#282828] mb-6 overflow-x-auto">
            <div className="flex space-x-6 min-w-max">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTabId(tab.id)}
                        className={`px-4 py-2 font-medium ${
                            activeTabId === tab.id ? "text-white border-b-2 border-[#1DB954]" : "text-gray-400 hover:text-white"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
