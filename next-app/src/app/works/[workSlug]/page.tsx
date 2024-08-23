import { notFound } from "next/navigation";
import React from "react";

import { getWork } from "@/lib/works";

interface paramType {
  workSlug: string;
}

export async function generateMetadata({ params }: { params: paramType }) {
  const work = await getWork(params.workSlug);

  if (!work) {
    notFound();
  }

  return {
    title: work.title,
    description: work.description,
  };
}

const WorkDetail: React.FC<{ params: paramType }> = ({ params }) => {
  const work = getWork(params.workSlug);

  if (!work) {
    notFound();
  }

  work.description = work.description.replace(/\n/g, "<br/>");

  return (
    <>
      <h1>{params.workSlug} detail page</h1>
      <p>{work.title}</p>
      <p dangerouslySetInnerHTML={{ __html: work.description }}></p>
    </>
  );
};

export default WorkDetail;
