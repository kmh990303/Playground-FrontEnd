import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

interface EditData {
    id: string;
    name: string;
    team: string;
}

const editData = async (editedData: EditData) => {
    const response = await fetch('http://localhost:5000/api/edit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedData)
    })

    if (!response.ok) {
        throw new Error('Failed to fetch');
    }

    const data = await response.json();

    return data;
}

const Edit: React.FC = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: editData,
        onSuccess: (data) => {
            console.log('Success: ', data);
            queryClient.invalidateQueries({
                queryKey: ['dummyData'],
                refetchType: 'none',
            });
        },
        onError: (error) => {
            console.error('Error: ', error);
        },
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const fd = new FormData(e.currentTarget);

        const data = Object.fromEntries(fd.entries());

        const editData: EditData = {
            id: String(data['id']),
            name: String(data['name']),
            team: String(data['team']),
        }

        mutation.mutate(editData);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input type="text" name="id" required className="border-2 border-blue-300 mb-8" />
            <input type="text" name="name" required className="border-2 border-blue-300 mb-8" />
            <input type="text" name="team" required className="border-2 border-blue-300 mb-8" />
            <button type="submit" disabled={mutation.isPending}>{mutation.isPending ? 'Loading...' : 'Submit'}</button>
            {mutation.isError && (
                <div>Error: {mutation.error.message}</div>
            )}
            {mutation.isSuccess && (
                <div>Success!</div>
            )}
        </form>
    )
}



    // const mutation = useMutation({
    //     mutationFn: editData,
    //     onMutate: async (data) => {
    //         await queryClient.cancelQueries({
    //             queryKey: ['dummyData']
    //         });

    //         const previousData = queryClient.getQueryData(['dummyData']);

    //         queryClient.setQueryData(['dummyData'], data.name);

    //         return { previousData };
    //     },
    //     onError: (error, data, context) => {
    //         queryClient.setQueryData(['dummyData'], context?.previousData);
    //     },
    //     onSettled: () => {
    //         queryClient.invalidateQueries({
    //             queryKey: ['dummyData']
    //         })
    //     }
    // }) 낙관적 업데이트

export default Edit;
