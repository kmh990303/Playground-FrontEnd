import React from "react";

import { getWorks } from "@/lib/works";

interface workType {
    slug: string;
    title: string;
    image: string;
    description: string;
}

export const metadata = {
  title: 'All Works',
  description: 'Browse the wonderful works share by our vibrant community.',
}

const Works: React.FC = async () => {
    const works = await getWorks();
  
    return (
    <div>
      <h1>it's works page...</h1>
      <div>
        {works.map((work: workType) => (
            <div>
                {work.slug} - {work.title} - {work.image} - {work.description}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
