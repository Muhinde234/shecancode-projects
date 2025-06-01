import React, { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant = "default" | "primary" | "secondary" | "destructive" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      loading = false,
      fullWidth = false,
      icon,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    // Base classes
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    // Variant classes
    const variantClasses: Record<ButtonVariant, string> = {
      default: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-purple-600 text-white hover:bg-purple-700",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    };
    
    // Size classes
    const sizeClasses: Record<ButtonSize, string> = {
      sm: "py-1.5 px-3 text-sm",
      md: "py-2 px-4 text-base",
      lg: "py-3 px-6 text-lg",
    };
    
    // Full width class
    const fullWidthClass = fullWidth ? "w-full" : "";
    
    // Combine all classes
    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidthClass} ${className}`;
    
    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin mr-2" size={size === "sm" ? 16 : 20} />
            {children}
          </>
        ) : (
          <>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;