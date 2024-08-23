'use server';

import { redirect } from "next/navigation";
import { saveWork } from "./works";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

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

    if (
        isInvalidText(work.title) ||
        isInvalidText(work.slug) ||
        isInvalidText(work.description) ||
        !work.image ||
        work.image.size === 0
    ) {
        throw new Error('Invalid Input');
    }

    console.log(work);

    await saveWork(work);
    revalidatePath('/works');
    redirect('/works');
}
