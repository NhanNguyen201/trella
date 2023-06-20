'use client'
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/Board";
export default function Header() {
  const [searchString, setSearchString] = useBoardStore(state => [state.searchString, state.setSearchString])
  return (
    <header className="w-full">
      <div className="flex flex-col md:flex-row  items-center justify-between space-x-5  p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] filter blur-3xl opacity-50 -z-50"></div>
        <Image 
          src="https://links.papareact.com/c2cdd5"
          alt="header image"
          width={300}
          height={100} 
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end ">
          <form className="flex  items-center justify-end  space-x-5 bg-white rounded-md p-2 shadow-md md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"/>
            <input 
              type="text" 
              placeholder="Search" 
              className="flex-1 outline-none p-2"
              value={searchString}
              onChange={e => setSearchString(e.target.value)}
            />
            <button hidden type="submit">Search</button>
          </form>
          <Avatar name='Nhân' round color="#0055D1" size="50"/> 
        </div>
      </div>
    </header>
  )
}
