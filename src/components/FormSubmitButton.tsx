"use client"
import {ComponentProps, ReactNode} from "react";
import {useFormStatus} from "react-dom";

type FormSubmitButtonProps = {
    children: ReactNode;
    className?: string;
} & ComponentProps<"button">

export default function FormSubmitButton({children, className, ...props}: FormSubmitButtonProps) {

    const {pending} = useFormStatus();
    return (
        <button {...props} className={`btn btn-primary ${className}`} type="submit" disabled={pending}>
            {pending && <span className="loading loading-spinner text-info"></span>
            }
            {children}</button>
    )
}