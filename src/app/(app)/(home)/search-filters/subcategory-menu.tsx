import { Category } from "@/payload-types";
import Link from "next/link";
import { CustomCategory } from "./types";

export function SubcategoryMenu({
  isOpen,
  category,
  position,
}: {
  category: CustomCategory;
  isOpen: boolean;
  position: {
    top: number;
    left: number;
  };
}) {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  const backgroundColor = category.color || "#F5F5F5";

  return (
    <div
      className="fixed z-50"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <div className="h-3 w-60" />
      <div
        style={{ backgroundColor }}
        className="w-60 text-black overflow-hidden rounded-md border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]"
      >
        <div>
          {category.subcategories.map((subcategory: Category) => (
            <Link
              className="w-full p-4 text-left hover:bg-black flex justify-between hover:text-white font-medium items-center underline"
              key={subcategory.slug}
              href={`/${category.slug}/${subcategory.slug}`}
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
