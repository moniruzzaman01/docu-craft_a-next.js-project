"use client";

import {
  getDocumentByAuthor,
  getDocumentByCategory,
  getDocumentByTag,
} from "@/utils/doc_utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar({ docs }) {
  const [rootLinks, setRootLinks] = useState([]);
  const [subLinks, setSubLinks] = useState({});
  const pathName = usePathname();

  useEffect(() => {
    // const path = pathName.split("/")[2];
    let data = docs;
    if (pathName.includes("/authors")) {
      data = getDocumentByAuthor(docs, pathName.split("/")[2]);
    } else if (pathName.includes("/categories")) {
      data = getDocumentByCategory(docs, pathName.split("/")[2]);
    } else if (pathName.includes("/tags")) {
      data = getDocumentByTag(docs, pathName.split("/")[2]);
    }

    const rootLinks = data.filter((doc) => !doc.parent);
    const subLinks = Object.groupBy(
      data.filter((doc) => doc.parent),
      ({ parent }) => parent
    );

    Object.keys(subLinks).forEach((item) => {
      const exist = rootLinks.find((root) => root.id == item);
      if (!exist) {
        const data = docs.find((doc) => doc.id == item);
        rootLinks.push(data);
      }
    });

    setRootLinks([...rootLinks]);
    setSubLinks({ ...subLinks });
  }, [pathName]);

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
