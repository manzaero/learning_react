import React from "react";

interface ErrorMessageProps {
    error: string
}

export function Error({ error }: ErrorMessageProps){
    return (
        <p className='text-center mx-auto max-w-2xl pt-5 text-red-900'>{error}</p>
    )
}