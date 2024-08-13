import { useState } from "react";

interface configType {
    method: string;
    body?: string;
    headers: {
        'Content-Type': string;
    }
}

interface UseSendRequestProps {
    url: string;
    config: configType;
}

const useSendRequest = ({ url, config }: UseSendRequestProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any>(null);

    const sendRequest = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                throw new Error('Failed to fetch response!');
            }

            const result = await response.json();
            setData(result);
        } catch (err: any) {
            setError(err.message || 'Something went wrong!');
        } finally {
            setLoading(false);
        }
    }

    return { loading, error, data, sendRequest };
}

export default useSendRequest;