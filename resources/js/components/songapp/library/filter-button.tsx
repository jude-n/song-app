import type { ReactNode } from "react"

interface FilterButtonProps {
    icon: ReactNode
    label: string
    active?: boolean
    onClick?: () => void
}

export default function FilterButton({ icon, label, active = false, onClick }: FilterButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`font-bold py-2 px-6 rounded-full flex items-center transition-colors ${
                active
                    ? "bg-[#1DB954] text-black hover:bg-[#1ED760]"
                    : "bg-transparent text-white border border-white hover:bg-white hover:bg-opacity-10"
            }`}
        >
            <span className="mr-2">{icon}</span>
            {label}
        </button>
    )
}
