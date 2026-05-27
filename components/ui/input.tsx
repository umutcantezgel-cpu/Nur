import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                {icon}
            </span>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full bg-surface-container-lowest border border-pink-highlight rounded-full px-6 py-4 font-body-md text-body-md text-on-surface focus:outline-none transition-shadow duration-200 input-glow placeholder:text-outline/70",
            icon && "pl-12",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
