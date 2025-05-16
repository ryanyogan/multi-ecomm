import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function SearchInput({ disabled }: { disabled?: boolean }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="pl-8"
          placeholder="Seach products"
          disabled={disabled}
        />
      </div>
      {/* TODO: Add a button to clear the input */}
      {/* TODO: add library button */}
    </div>
  );
}
