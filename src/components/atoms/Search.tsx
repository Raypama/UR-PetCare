interface SearchProps {
  placeholder : string,
  type: string;
  
}
function Search({placeholder,type}:SearchProps) {
  return (
    <div className="w-48 border-b-2 border-b-stone-400">
      <form >
        <div className="relative ">
          <input type={type} id="default-search" className="block w-full border-b-black   text-base   bg-transparent font-medium" placeholder={placeholder} required />
          
        </div>
      </form>
    </div>
  )
}

export default Search
