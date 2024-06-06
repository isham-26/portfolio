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
      name: "services",
      link: "/services",
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
          <Link href={data.link}>
            <div className={`${data.link===pathname && "text-accent border-b border-accent"}`} key={index}>{data.name}</div>
          </Link>
        );
      })}
      </nav>
  );
};
