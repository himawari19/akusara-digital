import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold rounded-xl border-2 border-transparent transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        red: "bg-brand text-white shadow-[0_10px_26px_-10px_rgba(163,22,33,0.55)] hover:bg-brand-deep hover:-translate-y-0.5",
        outline:
          "border-ink bg-transparent text-ink hover:bg-ink hover:text-ivory hover:-translate-y-0.5",
        ivory:
          "bg-ivory text-brand-deep shadow-[0_10px_26px_-10px_rgba(0,0,0,0.35)] hover:bg-white hover:-translate-y-0.5",
        ghost: "hover:bg-ivory-deep text-ink",
        link: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-[15px]",
        sm: "h-9 px-4 text-sm",
        lg: "h-[52px] px-8 text-base rounded-[14px]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "red", size: "default" },
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
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
