import { Music, Disc3, Scissors, Clock, FolderHeart, Star } from "lucide-react"
import SavedItemsView from '@/components/songapp/library/saved-items-view';
import PlaylistsView from '@/components/songapp/library/playlists-view';
import HistoryView from '@/components/songapp/library/history-view';
import { LibraryTab } from '@/types/songapp/library';

// Define all tabs with their content and filters
export const libraryTabs: LibraryTab[] = [
    {
        id: "saved",
        label: "Saved Items",
        content: <SavedItemsView />,
        filters: [
            { id: "all", label: "All", icon: <Music size={16} />, isDefault: true },
            { id: "covers", label: "Covers", icon: <Disc3 size={16} /> },
            { id: "samples", label: "Samples", icon: <Scissors size={16} /> },
        ],
    },
    {
        id: "playlists",
        label: "Playlists",
        content: <PlaylistsView />,
    },
    {
        id: "history",
        label: "History",
        content: <HistoryView />,
        filters: [
            { id: "recent", label: "Recent", icon: <Clock size={16} />, isDefault: true },
            { id: "most-played", label: "Most Played", icon: <FolderHeart size={16} /> },
            { id: "top-rated", label: "Top Rated", icon: <Star size={16} /> },
        ],
    },
]

// You could add more tab configurations in the future
export const getDefaultTabId = () => libraryTabs[0].id
