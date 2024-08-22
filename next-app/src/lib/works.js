import sql from 'better-sqlite3';
import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('works.db');

export async function getWorks() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM works').all();
}

export function getWork(slug) {
    return db.prepare('SELECT * FROM works WHERE slug = ?').get(slug);
}

export async function saveWork(work) {
    work.slug = slugify(work.title, { lower: true });
    work.description = xss(work.description);

    const extension = work.image.name.split('.').pop();
    const fileName = `${work.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await work.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        }
    });

    work.image = `/images/${fileName}`;

    db.prepare(`
        INSERT INTO works
            (title, slug, image, description)
        VALUES(
            @title,
            @slug,
            @image,
            @description
        )
    `).run(work);
}