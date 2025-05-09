import React from 'react';

export default function EraSelect() {
    return (
        <div>
            <label htmlFor="era-select" className="block mb-2 text-sm font-medium">
                Select Era
            </label>
            <select
                id="era-select"
                className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-2"
            >
                <option value="">All Eras</option>
                <option value="2020s">2020s</option>
                <option value="2010s">2010s</option>
                <option value="2000s">2000s</option>
                <option value="1990s">1990s</option>
                <option value="1980s">1980s</option>
                <option value="1970s">1970s</option>
                <option value="1960s">1960s</option>
                <option value="pre60s">Pre-1960s</option>
            </select>
        </div>
    );
}
