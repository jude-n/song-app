import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'
import SongSearch from '@/components/songapp/library/createplaylist/song-search';
import PopularCovers from '@/components/songapp/library/createplaylist/popular-covers';
import RecommendedSongs from '@/components/songapp/library/createplaylist/recommended-songs';
import PlaylistDetails from '@/components/songapp/library/createplaylist/playlist-details';

interface PlaylistModalProps {
    isOpen: boolean;
    onClose: () => void;
}
export default function PlaylistModal({ isOpen, onClose }: PlaylistModalProps) {
    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
            <Dialog.Panel className="relative bg-black p-8 rounded-xl max-w-6xl w-full h-[90vh] overflow-y-auto text-white">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <X size={24} />
                </button>
                <h1 className="text-3xl font-bold mb-6">Create New Playlist</h1>
                <div className="grid grid-cols-3 gap-8">
                    <PlaylistDetails />
                    <div className="col-span-2 space-y-8">
                        <SongSearch />
                        <RecommendedSongs />
                        <PopularCovers />
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    )
}
