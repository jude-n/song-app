import React from 'react';

export default function TransformationSlider() {
    return (
        <div>
            <label htmlFor="transformation-slider" className="block mb-2 text-sm font-medium">
                Transformation Level
            </label>
            <div className="w-full h-2 bg-[#3E3E3E] rounded-full mt-4 relative">
                <div className="h-2 bg-[#1DB954] rounded-full w-3/4"></div>
                <div
                    className="absolute h-4 w-4 bg-white rounded-full top-1/2 transform -translate-y-1/2"
                    style={{ left: "75%" }}
                ></div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-400">
                <span>Similar</span>
                <span>Reimagined</span>
            </div>
        </div>
    );
}
