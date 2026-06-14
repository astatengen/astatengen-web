import Link from "next/link";

type BreadcrumbItem = {
  href: string;
  label: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href}>
              {isLast ? <span aria-current="page">{item.label}</span> : <Link href={item.href}>{item.label}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
