"use client";
import { cva, VariantProps } from "class-variance-authority";

const dividerVariants = cva("w-full h-[1px]", {
  variants: {
    intent: {
      regular: "bg-textPrimaryColor bg-opacity-30",
      dropDown: "bg-textPrimaryColor bg-opacity-30",
      white: "bg-white", // Added white color variant
    },
  },
  defaultVariants: {
    intent: "regular",
  },
});

export interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string; // Marked className as optional
}

export default function Divider({ intent = "white", className }: DividerProps) {
  return (
    <div className={dividerVariants({ intent, className })}></div>
  );
}
