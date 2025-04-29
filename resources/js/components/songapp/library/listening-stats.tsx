import React from "react"
export default function ListeningStats() {
    const genres = [
        { name: "Rock", percentage: 35 },
        { name: "Hip Hop", percentage: 25 },
        { name: "Electronic", percentage: 20 },
        { name: "Pop", percentage: 15 },
        { name: "Jazz", percentage: 5 },
    ]

    return (
        <div className="bg-[#181818] rounded-lg p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Listening Stats</h2>
                <select className="bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-1 text-sm">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>All Time</option>
                </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Top Genres */}
                <div>
                    <h3 className="text-lg font-medium mb-3">Top Genres</h3>
                    <div className="space-y-2">
                        {genres.map((genre, i) => (
                            <div key={i} className="flex items-center">
                                <span className="w-24 text-sm">{genre.name}</span>
                                <div className="h-2 bg-[#3E3E3E] rounded-full flex-grow mx-2">
                                    <div
                                        className="h-2 bg-[#1DB954] rounded-full"
                                        style={{ width: `${genre.percentage}%` }}
                                    ></div>
                                </div>
                                <span className="w-10 text-right text-sm text-gray-400">{genre.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Covers vs. Samples Pie Chart */}
                <div>
                    <h3 className="text-lg font-medium mb-3">Covers vs. Samples</h3>
                    <div className="flex items-center justify-center h-40 relative">
                        <div className="w-40 h-40 relative">
                            {/* Covers */}
                            <div
                                className="absolute inset-0 bg-[#1DB954] rounded-full"
                                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                            ></div>
                            {/* Samples */}
                            <div
                                className="absolute inset-0 bg-[#AF2896] rounded-full"
                                style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%)" }}
                            ></div>
                            {/* Center circle */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-[#181818] w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                    <span className="text-xs text-gray-400">Total</span>
                                    <span className="text-xl font-bold">127</span>
                                </div>
                            </div>
                            {/* Labels */}
                            <div className="absolute top-4 right-0 text-sm font-medium">
                                <span className="text-[#AF2896]">Samples</span>
                                <span className="text-gray-400 ml-2">35%</span>
                            </div>
                            <div className="absolute bottom-4 left-0 text-sm font-medium">
                                <span className="text-[#1DB954]">Covers</span>
                                <span className="text-gray-400 ml-2">65%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
