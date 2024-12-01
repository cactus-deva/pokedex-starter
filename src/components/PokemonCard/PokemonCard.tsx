import { Type } from "../../interface/pokemonDetails";
import { Link } from "react-router-dom";

interface PokemonCardProps {
    image: string
    name: string 
    id: number
    types: Type[]
}
const PokemonCard = ({ image, name, id, types }: PokemonCardProps) => {
    
    return (
        <div className="rounded-[10px] overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 p-[10px] bg-[#253643] max-w-[275px] w-full m-[auto]">
            <div className="bg-[url('/src/assets/pokeball_logo.png')] bg-center aspect-square w-full bg-auto rounded-[20px]">
                <Link to={`/detail/${name}`}>
                    <img className="rounded-t-lg h-[218px] p-[40px] w-full"
                        src={image}
                        alt="" />
                </Link>
            </div>
            <div className="py-5">
                <div className="flex justify-between">
                    <h5 className=" capitalize mb-2 text-xl font-bold tracking-tigh text-white">
                        {name}
                    </h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tigh text-white">
                        #{id}
                    </h5>
                </div>
                <div className="flex gap-2 justify-end mt-[16px]">
                    {types.map((item) => {
                        return <span className={`badge-type-${item.type.name} px-[14px] py-1 rounded-[16px] capitalize`}>{item.type.name}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default PokemonCard