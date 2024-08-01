import Link from "next/link";

export default function Sidebar({ docs }) {
  const rootLinks = docs.filter((doc) => !doc.parent);
  const subLinks = Object.groupBy(
    docs.filter((doc) => doc.parent),
    ({ parent }) => parent
  );

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {rootLinks.map(({ id: rootid, title }) => (
          <li key={rootid} className="relative">
            <Link
              href={`/docs/${rootid}`}
              className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              <span className="truncate">{title}</span>
            </Link>
            {subLinks[rootid] && (
              <ul role="list">
                {subLinks[rootid].map(({ id: subid, title }) => (
                  <li key={subid}>
                    <Link
                      href={`/docs/${rootid}/${subid}`}
                      className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    >
                      <span className="truncate">{title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
