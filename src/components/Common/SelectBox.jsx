import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export default function SelectBox({
  title,
  selectItems,
  className,
  onValueChange,
  value,
}) {
  return (
    <Select value={value} onValueChange={onValueChange} className="w-full">
      <SelectPrimitive.Trigger
        className={cn(
          "flex h-14 w-full items-center justify-between whitespace-nowrap shadow-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 px-6 py-4 bg-black/30 rounded-[20px] text-white text-base font-exo",
          `w-full ${className}`
        )}
      >
        <SelectValue
          placeholder={title}
          className={`text-neutral-400 text-base leading-relaxed`}
        />
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="size-5 text-yellow-400" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectContent className="bg-[#262626] border-0">
        <SelectGroup>
          {selectItems?.map((item, index) => (
            <SelectItem
              key={index}
              value={item}
              className="text-neutral-400 text-base leading-relaxed flex items-center gap-2 px-4 py-2 hover:bg-white focus:bg-white focus:outline-none"
            >
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
