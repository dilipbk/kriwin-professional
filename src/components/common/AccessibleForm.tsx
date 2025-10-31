import React, { forwardRef, useId } from "react";
import { cn } from "../../utils";

interface FormFieldProps {
  children: React.ReactNode;
  error?: string;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  children,
  error,
  className = "",
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      {children}
      {error && (
        <p
          className="text-sm text-red-600 dark:text-red-400"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
};

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  required,
  className = "",
  ...props
}) => {
  return (
    <label
      className={cn(
        "block text-sm font-semibold text-gray-700 dark:text-gray-300",
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="text-red-500 ml-1" aria-label="required">
          *
        </span>
      )}
    </label>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, helperText, ...props }, ref) => {
    const id = useId();
    const helperTextId = helperText ? `${id}-helper` : undefined;
    const errorId = error ? `${id}-error` : undefined;

    return (
      <>
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl border-2 transition-colors duration-200",
            "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
            "placeholder-gray-500 dark:placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            error
              ? "border-red-500 dark:border-red-400"
              : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500",
            className
          )}
          aria-describedby={cn(helperTextId, errorId)}
          aria-invalid={error}
          {...props}
        />
        {helperText && (
          <p
            id={helperTextId}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}
      </>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", error, helperText, ...props }, ref) => {
    const id = useId();
    const helperTextId = helperText ? `${id}-helper` : undefined;
    const errorId = error ? `${id}-error` : undefined;

    return (
      <>
        <textarea
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl border-2 transition-colors duration-200",
            "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
            "placeholder-gray-500 dark:placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "resize-vertical min-h-[120px]",
            error
              ? "border-red-500 dark:border-red-400"
              : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500",
            className
          )}
          aria-describedby={cn(helperTextId, errorId)}
          aria-invalid={error}
          {...props}
        />
        {helperText && (
          <p
            id={helperTextId}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}
      </>
    );
  }
);

Textarea.displayName = "Textarea";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  helperText?: string;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className = "", error, helperText, placeholder, children, ...props },
    ref
  ) => {
    const id = useId();
    const helperTextId = helperText ? `${id}-helper` : undefined;
    const errorId = error ? `${id}-error` : undefined;

    return (
      <>
        <select
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl border-2 transition-colors duration-200",
            "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            error
              ? "border-red-500 dark:border-red-400"
              : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500",
            className
          )}
          aria-describedby={cn(helperTextId, errorId)}
          aria-invalid={error}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        {helperText && (
          <p
            id={helperTextId}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}
      </>
    );
  }
);

Select.displayName = "Select";
