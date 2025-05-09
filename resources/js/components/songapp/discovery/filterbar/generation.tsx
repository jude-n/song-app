export default function GenerationSelect() {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium">Generation</label>
            <select className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-2">
                <option>All Generations</option>
                <option>Original Songs</option>
                <option>1st Generation Covers</option>
                <option>2nd Generation Covers</option>
                <option>3rd+ Generation Covers</option>
            </select>
        </div>
    );
}
