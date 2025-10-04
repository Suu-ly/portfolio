import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: { orientation?: "horizontal" | "vertical" } & React.ComponentProps<"div">) {
  return (
    <div
      role="separator"
      className={cn(
        "shrink-0 bg-zinc-200 dark:bg-zinc-700",
        orientation === "horizontal" && "h-px w-full",
        orientation === "vertical" && "h-full w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
