import React from 'react';
import { Plus } from 'lucide-react';

const recommended = [
    { title: 'Sound of Silence', artist: 'Disturbed', original: 'Simon & Garfunkel', generation: 1, duration: '4:08' },
    { title: 'Hurt', artist: 'Johnny Cash', original: 'Nine Inch Nails', generation: 1, duration: '3:38' },
    /* ...more items */
];

export default function RecommendedSongs() {
    return (
        <div className="bg-[#181818] rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3">Recommended Songs</h3>
            <div className="bg-[#242424] rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className="border-b border-[#3E3E3E]">
                    <tr>
                        <th>#</th><th>Title</th><th>Artist</th><th>Generation</th><th>Duration</th><th>Add</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recommended.map((item, i) => (
                        <tr key={i} className="hover:bg-[#3E3E3E] border-b border-[#3E3E3E] last:border-b-0 group">
                            <td>{i + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.artist}</td>
                            <td>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                      item.generation === 1 ? 'bg-[#1DB954] text-black' : 'bg-[#E8115B] text-white'
                  }`}>
                    {item.generation}st Gen
                  </span>
                            </td>
                            <td>{item.duration}</td>
                            <td>
                                <button className="hover:text-[#1DB954]"><Plus size={18} /></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
