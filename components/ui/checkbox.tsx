"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    description?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, ...props }, ref) => {
    return (
        <label className="flex items-start gap-3 cursor-pointer group">
            <div className="pt-1">
                <input 
                    type="checkbox" 
                    className={cn(
                        "appearance-none bg-transparent m-0 color-current w-5 h-5 border border-outline-variant rounded grid place-content-center transition-all duration-200",
                        "before:content-[''] before:w-2.5 before:h-2.5 before:scale-0 before:transition-transform before:duration-120 before:ease-in-out before:shadow-[inset_1em_1em_white]",
                        "before:origin-bottom-left before:[clip-path:polygon(14%_44%,0_65%,50%_100%,100%_16%,80%_0%,43%_62%)]",
                        "checked:bg-primary-container checked:border-primary-container checked:before:scale-100",
                        "focus:outline focus:outline-2 focus:outline-tertiary-fixed-dim focus:outline-offset-2",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
            {(label || description) && (
                <div className="flex flex-col">
                    {label && (
                        <span className="font-body-md text-on-surface font-medium block mb-1 group-hover:text-primary transition-colors">
                            {label}
                        </span>
                    )}
                    {description && (
                        <span className="font-label-sm text-text-secondary block">
                            {description}
                        </span>
                    )}
                </div>
            )}
        </label>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
