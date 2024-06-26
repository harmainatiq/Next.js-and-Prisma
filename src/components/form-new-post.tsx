"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormData } from "@/type/blogs";
// import ReactTextareaAutosize from 'react-textarea-autosize';

function FormNewPost() {
  const [formData, setformData] = useState<FormData>({
    title: "",
    content: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target
    setformData({
        ...formData,
        [name] : value,
    });
  };

const handleSubmit =(e: FormEvent<HTMLFormElement>) => {
e.preventDefault(),
console.log (formData)
}

  const classInput =
    "w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black pl-2";
  return (
    <form className="mx-auto max-w-md p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className={classInput}
          placeholder="Enter the title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        ></input>
      </div>
      <div className="mb-4">
        {/* <ReactTextareaAutosize/> */}
        <input
          type="text"
          className={classInput}
          placeholder="Enter the Content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        ></input>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled::bg-gray-400"
      >
        Submit
      </button>
    </form>
  );
}

export default FormNewPost;
