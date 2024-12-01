import { generationList, typeList, sortList } from "../../utils/optionList";
import { useSearchForm } from "./SearchForm.hook";

export const SearchForm = () => {
    const { fieldKeyword, fieldGeneration, fieldSort, fieldType } = useSearchForm()
    return (
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            <div>
                <label
                    htmlFor="generation"
                    className="block mb-2 text-md font-medium text-white">
                    Generation
                </label>
                <select
                    {...fieldGeneration}
                    id="generation"
                    className="capitalize bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5">
                    {generationList.map((item, index) => {
                        return <option className="capitalize" key={`generation-key-${index}`} value={index}>
                            {item.name}
                            </option>
                    })}
                </select>
            </div>
            <div>
                <label
                    htmlFor="generation"
                    className="block mb-2 text-md font-medium text-white">
                    Type
                </label>
                <select
                  {...fieldType}
                    id="type"
                    className="capitalize bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5">
                    {typeList.map((item, index) => {
                        return <option className="capitalize" key={`type-key-${index}`} value={index}>{item}</option>
                    })}
                </select>
            </div>
            <div>
                <label
                    htmlFor="generation"
                    className="block mb-2 text-md font-medium text-white">
                    Sort By
                </label>
                <select
                  {...fieldSort}
                    id="sort"
                    className=" capitalize bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5">
                    {sortList.map((item, index) => {
                        return <option className="capitalize" key={`sort-key-${index}`} value={index}>{item}</option>
                    })}
                </select>
            </div>
            <div>
                <label
                    htmlFor="generation"
                    className="block mb-2 text-md font-medium text-white">
                    Search
                </label>
                <input
                    {...fieldKeyword}
                    id="search"
                    className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5" />
            </div>
        </form>
    )
}