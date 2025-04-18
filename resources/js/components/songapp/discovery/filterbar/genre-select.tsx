import React from 'react';

export default function GenreSelect() {
    return (
        // <div className="flex flex-col gap-2">
        <div>
            <label htmlFor="genre-select" className="block mb-2 text-sm font-medium">
                Select Genre
            </label>
            <select
                id="genre-select"
                className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-2"
            >
                <option value="">All Genres</option>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="rnb">R&B</option>
                <option value="hip-hop">Hip-Hop</option>
                <option value="jazz">Jazz</option>
                <option value="classical">Classical</option>
                <option value="country">Country</option>
                <option value="electronic">Electronic</option>
            </select>
        </div>
    );
}
