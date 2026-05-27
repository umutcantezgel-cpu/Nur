import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-label-md text-label-md uppercase tracking-wider transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary-container disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary-container text-white hover:bg-primary shadow-[0_4px_15px_rgba(214,163,169,0.3)]",
        secondary:
          "border border-primary-container text-primary hover:bg-primary-container hover:text-white",
        ghost: "hover:bg-surface-variant hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-4",
        sm: "h-10 px-6 py-2 text-[10px]",
        lg: "h-14 px-10 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Wir nutzen framer-motion nur für standard Buttons (non-asChild), ansonsten class-based
    if (asChild) {
        return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    }

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
