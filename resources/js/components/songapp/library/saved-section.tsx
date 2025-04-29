import React from 'react';
import { ChevronRight } from 'lucide-react';
import MediaCard from '@/components/songapp/library/media-card';

type SavedSectionProps = {
    title: string;
    subtitle?: string;
    imageSrc?: string;
    badgeText: string;
    badgeColor: string;
    iconColor: string;
    savedTime?: string;
    itemType: "cover" | "sample"; // Type for the item type, can be either "cover" or "sample"
    //data that would be passed to the MediaCard component which could include image
}
export default function SavedSection({ title, subtitle, imageSrc, badgeText, badgeColor, iconColor, savedTime, itemType }: SavedSectionProps) {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                    See All <ChevronRight size={16} />
                </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <MediaCard
                        key={i}
                        title={`${subtitle} ${i}`}
                        subtitle="Original • Cover"
                        imageSrc={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=160&width=160`}
                        badgeText={badgeText}
                        badgeColor={badgeColor}
                        iconColor={iconColor}
                        savedTime="3d ago"
                    />
                ))}
            </div>
        </div>
    )
}
