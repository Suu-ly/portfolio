import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: { orientation?: "horizontal" | "vertical" } & React.ComponentProps<"div">) {
  return (
    <div
      role="presentation"
      className={cn(
        "bg-zinc-200 dark:bg-zinc-700 shrink-0",
        orientation === "horizontal" && "h-px w-full",
        orientation === "vertical" && "w-px h-full",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
