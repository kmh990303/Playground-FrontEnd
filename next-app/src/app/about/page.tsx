import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <>
      <div>it's About Page;;;</div>
      <Link href="/" className="block mx-auto text-center">
        Go Home
      </Link>
    </>
  );
};

export default About;
