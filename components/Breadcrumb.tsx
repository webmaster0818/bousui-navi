import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "ホーム", href: "/" }, ...items];

  return (
    <nav aria-label="パンくずリスト" className="py-3 px-4 text-sm text-gray-500">
      <ol
        className="flex flex-wrap items-center gap-1"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {allItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-1"
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {item.href && index < allItems.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-[#2563EB] transition-colors no-underline"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-gray-700 font-medium" itemProp="name">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
