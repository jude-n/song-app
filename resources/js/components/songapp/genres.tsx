import React from 'react';

export default function Genres() {
    return (
        <section className="px-8 py-6">
            <h3 className="text-2xl font-bold mb-4">Browse by Genre</h3>
            <div className="grid grid-cols-4 gap-4">
                {["Hip Hop", "Rock", "Pop", "Electronic", "R&B", "Jazz", "Country", "Folk"].map((genre, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-br from-[#2E77D0] to-[#AF2896] rounded-lg aspect-square flex items-center justify-center p-6 cursor-pointer hover:scale-[1.02] transition-transform"
                    >
                        <h4 className="text-xl font-bold text-center">{genre}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}
