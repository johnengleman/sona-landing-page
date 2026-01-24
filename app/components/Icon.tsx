"use client";

import { Icon as IconifyIcon, loadIcon } from "@iconify/react";
import type React from "react";
import { useEffect } from "react";

export function Icon({
  icon,
  className,
  ...rest
}: {
  icon: string;
  className?: string;
} & Omit<React.ComponentProps<typeof IconifyIcon>, "icon" | "className">) {
  useEffect(() => {
    void loadIcon(icon).catch(() => {
      // Ignore icon load failures (e.g., offline). The component will just render empty.
    });
  }, [icon]);

  return <IconifyIcon icon={icon} className={className} {...rest} />;
}
