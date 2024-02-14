"use client";

import { forwardRef } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "../input";
import { FormErrors } from "./form-errors";
import { cn } from "@/lib/utils";

interface FormInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  defaultValue?: string;
  className?: string;
  onBlur?: () => void;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      type,
      placeholder,
      required,
      disabled,
      errors,
      className,
      defaultValue = "",
      onBlur,
    },
    ref,
  ) => {
    const { pending } = useFormStatus();

    return (
      <div className="space-y-2">
        <div>
          {label ? (
            <div className="space-y-2 mb-2">
              <Label
                htmlFor={id}
                className="text-sm font-semibold text-neutral-700"
              >
                {label}
              </Label>
              <Input
                onBlur={onBlur}
                defaultValue={defaultValue}
                ref={ref}
                required={required}
                name={id}
                id={id}
                placeholder={placeholder}
                type={type}
                disabled={pending || disabled}
                className={cn("text-sm, px-2, py-1", className)}
                aria-describedby={`${id}-error`}
              />
            </div>
          ) : null}
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
