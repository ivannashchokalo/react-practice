import { useId } from "react"

interface OrderFormProps{
    onSubmit: (value: string) => void;
}

export default function FormOrder({onSubmit}: OrderFormProps) {
    const fieldId = useId();

    function handleSubmit(formData: FormData) {
        const userName = formData.get('username') as string;        
        onSubmit(userName);
    }

    return (
        <>
            <form action={handleSubmit}>
                <label htmlFor={`${fieldId}-username`}></label>
                <input type="text" name="username" id={`${fieldId}-username`} defaultValue='Ivan'/>
                <button type="submit"></button>
            </form>
        </>
    )
}