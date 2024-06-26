import React from "react";
import Comments from "@/components/comments";
import FormComment from "@/components/formComment";

const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post one</h1>
      <p>Written by: jhon deo</p>
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tenetur
        inventore quo harum, non a ab. Quas sequi a sed omnis nesciunt, illo
        veniam nobis et fugit architecto sunt necessitatibus.
      </div>

      <Comments/>
      <FormComment/>
    </div>
  );
};

export default BlogDetailPage;
