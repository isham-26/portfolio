"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Nav = () => {
    const pathname=usePathname();
  const listdata = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "skills",
      link: "/skills",
    },
    {
      name: "projects",
      link: "/projects",
    },
    {
      name: "resume",
      link: "/resume",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="flex gap-8">
      {listdata.map((data, index) => {
        return (
          <Link href={data.link} className={`${data.link===pathname && "text-accent border-b border-accent"} capitalize`} key={index}>
            {data.name}
          </Link>
        );
      })}
      </nav>
  );
};
