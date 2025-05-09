export interface SavedItem {
    title: string;
    artist: string;
    original?: string;
    generation?: number;
    slug: string;
    itemType?: 'cover' | 'sample'; //maybe add something for if its the original
    savedAgo: string; // e.g. '3d ago', '1w ago'
}
