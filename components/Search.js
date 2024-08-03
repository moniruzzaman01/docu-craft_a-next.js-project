"use client";

import Image from "next/image";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import SearchResult from "./SearchResult";

export default function Search({ docs }) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    doSearch(text);
  };
  const doSearch = useDebounce((term) => {
    const found = docs.filter((doc) => {
      return doc.title.toLowerCase().includes(term.toLowerCase());
    });
    setSearchResults(found);
  }, 500);

  const closeSearchResult = () => {
    setSearchText("");
  };

  return (
    <div className="relative hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
      >
        <Image
          src="/search.svg"
          className="h-5 w-5"
          height={20}
          width={20}
          alt="search icon"
        />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 focus:border-none focus:outline-none"
          value={searchText}
          onChange={(e) => handleChange(e)}
        />
        <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">Ctrl </kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
      {searchText && (
        <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
          <p className="!text-lg">
            Showing results for
            <span className="font-semibold"> "{searchText}":</span>
          </p>
          <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
            {searchResults.map((searchResult) => (
              <SearchResult
                key={searchResult.id}
                searchResult={searchResult}
                closeSearchResult={closeSearchResult}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
