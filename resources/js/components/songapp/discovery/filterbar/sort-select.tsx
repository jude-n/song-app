import React from 'react';

export default function SortSelect() {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium">Sort By</label>
            <select className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-2">
                <option>Popularity</option>
                <option>Recently Added</option>
                <option>Release Date (Newest)</option>
                <option>Release Date (Oldest)</option>
                <option>Alphabetical (A-Z)</option>
            </select>
        </div>
    );
}
