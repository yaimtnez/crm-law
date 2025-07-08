import { CircleAlert, X } from "lucide-react";

interface ErrorCredentialsProps {
    message: string | null;
    onClose: () => void;
}

export default function ErrorCredentials({ message, onClose }: ErrorCredentialsProps) {

    if (!message) return null;

    return (
        <div className="flex items-center gap-2 rounded-md bg-red-100 border border-red-300 px-3 py-2 mt-2">
            <CircleAlert className="h-4 w-4 text-red-500" />
            <span className="text-sm text-red-700 font-medium">{message}</span>
            <button onClick={onClose} className="ml-auto text-red-500 hover:text-red-700">
                <X className="h-3 w-3" />
            </button>
        </div>
    );
}