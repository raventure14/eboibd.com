"use client";

import { cn } from "@/lib/utils";

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassContainer({
  children,
  className,
  ...props
}: GlassContainerProps) {
  return (
    <div
      className={cn(
        "relative",
        "backdrop-blur-[8px]",
        "bg-gradient-to-br from-white/5 via-purple-50/10 to-pink-50/5",
        "border border-white/20",
        "rounded-2xl",
        "shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]",
        "overflow-hidden",
        "before:absolute before:inset-0 before:z-[-1]",
        "before:bg-gradient-to-br before:from-purple-100/10 before:via-white/5 before:to-pink-100/10",
        "after:absolute after:inset-0 after:z-[-2]",
        "after:bg-gradient-to-br after:from-purple-500/5 after:to-pink-500/5",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}