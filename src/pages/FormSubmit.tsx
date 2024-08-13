import React from "react";
import { Form, redirect, ActionFunction, json, useSubmit, useNavigation } from "react-router-dom";


const FormSubmit: React.FC = () => {
    const submit = useSubmit();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    const deleteHandler = () => {
        submit(null, { method: 'DELETE' })
    }

    return (
        <div>
            <Form method="POST" className="flex flex-col text-center">
                <input type="text" name="name" required />
                <input type="text" name="id" required />
                <input type="password" name="password" required />
                <input type="text" name="address" required />
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
            <button onClick={deleteHandler} disabled={isSubmitting}>{isSubmitting ? 'submitting...' : 'Submit'}</button>
        </div>
    )
}

export const action: ActionFunction = async ({ request }) => {
    const method = request.method;
    const data = await request.formData();

    if (method === 'POST') {
        const eventData = {
            name: data.get('name'),
            id: data.get('id'),
            password: data.get('password'),
            address: data.get('address'),
        }

        try {
            const response = await fetch('https://localhost:5000/api', {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(eventData),
            })

            if (response.status === 422) {
                return json({ error: 'Validation error' }, { status: 422 });
            }

            if (!response.ok) {
                throw new Error('fail to fetch response');
            }

            return redirect('/');
        } catch (error) {
            console.error('Error submitting form:', error);
            return json({ error: 'An unexpected error occurred. please try again later' }, { status: 500 });
        }
    } else if (method === 'DELETE') {
        try {
            const response = await fetch('https://localhost:5000/api', {
                method,
            })

            if (!response.ok) {
                throw new Error('fail to delete');
            }

            return redirect('/');
        } catch (error) {
            console.error('Error deleting', error);
            return json({ error: 'An unexpected error occurred.' }, { status: 500 });
        }
    }
}

export default FormSubmit;