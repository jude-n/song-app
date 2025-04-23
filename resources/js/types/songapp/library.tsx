import type { ReactNode } from "react"

export type LibraryTab = {
    id: string
    label: string
    content: ReactNode
    filters?: LibraryFilter[]
}

export type LibraryFilter = {
    id: string
    label: string
    icon: ReactNode
    isDefault?: boolean
}

// Type definition
export type MediaType = "cover" | "sample"
