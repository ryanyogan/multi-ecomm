"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ListFilterIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { CategoriesSidebar } from "./categories-sidebar";

export function SearchInput({ disabled }: { disabled?: boolean }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="pl-8"
          placeholder="Seach products"
          disabled={disabled}
        />
      </div>
      <Button
        onClick={() => setIsSidebarOpen(true)}
        variant="elevated"
        className="size-12 shrink-0 flex lg:hidden"
      >
        <ListFilterIcon />
      </Button>
    </div>
  );
}
