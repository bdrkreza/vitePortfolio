import { useQuery } from "@apollo/client";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GET_FILTER_PROJECT } from "../../../services";
import DropdownBox from "./dropdownBox";

export default function Search() {
  const [filter, setFilter] = useState(false);
  const [wordEntered, setWordEntered] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_FILTER_PROJECT, {
    variables: {
      filter: filter,
      skip: 1,
      take: 4,
    },
  });

  function displayItem(e: any) {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    setFilter(searchWord);
  }

  const clearInput = () => {
    setFilter(false);
    setWordEntered("");
  };
  return (
    <div>
      <div className="search-box">
        <button className="btn-search">
          {filter ? <Close onClick={clearInput} /> : <FaSearch />}
        </button>
        <input
          onChange={displayItem}
          value={wordEntered}
          type="text"
          className="input-search"
          placeholder="Type to Search..."
        />

        {filter && (
          <DropdownBox data={data?.filterProject} clearInput={clearInput} />
        )}
      </div>
    </div>
  );
}
