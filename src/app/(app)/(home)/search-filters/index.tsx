"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Categories } from "./categories";
import { SearchInput } from "./search-input";

export function SearchFilters() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
      }}
      className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"
    >
      <SearchInput />

      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
    </div>
  );
}

export function SearchFiltersSkeleton() {
  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
      }}
      className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"
    >
      <SearchInput disabled />

      <div className="hidden lg:block">
        <div className="h-11"></div>
      </div>
    </div>
  );
}
