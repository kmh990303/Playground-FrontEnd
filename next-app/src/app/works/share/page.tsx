import { shareWork } from "@/lib/action";
import ImagePicker from "@/components/ImagePicker";
import FormSubmit from "@/components/Formsubmit";

import React from "react";

const ShareWorkPage: React.FC = () => {
  return (
    <div>
      <form action={shareWork}>
        <p>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" required />
        </p>
        <p>
          <label htmlFor="slug">slug</label>
          <input type="text" name="slug" id="slug" required />
        </p>
        <ImagePicker label="Your Image" name="image" />
        <p>
          <label htmlFor="descripton">description</label>
          <input type="text" name="description" id="description" required />
        </p>
        <button type="submit">Share work</button>
        <FormSubmit />
      </form>
    </div>
  );
};

export default ShareWorkPage;
