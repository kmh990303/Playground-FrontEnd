'use server';

import { redirect } from "next/navigation";
import { saveWork } from "./works";

export async function shareWork(formData) {
    const imageFile = formData.get('image');

    if (!imageFile) {
        console.log('No image file provided');
        return;
    }
    
    const work = {
        title: formData.get('title'),
        slug: formData.get('slug'),
        image: formData.get('image'),
        description: formData.get('description'),
    };

    console.log(work);

    await saveWork(work);
    redirect('/works');
}