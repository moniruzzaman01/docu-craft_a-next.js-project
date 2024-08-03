import Link from "next/link";

export default function SearchResult({ searchResult, closeSearchResult }) {
  return (
    <li className="">
      <Link
        className="transition-all hover:text-emerald-600"
        href={`/docs/${searchResult.id}`}
        onClick={closeSearchResult}
      >
        {searchResult.title}
      </Link>
    </li>
  );
}
