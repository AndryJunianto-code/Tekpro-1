import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function RichTextEditor({ content, setContent }) {
  return (
    <ReactQuill
      id="editor"
      style={{
        background: "white",
        color: "black",
      }}
      theme="snow"
      value={content}
      onChange={() => {
        setContent(document.getElementsByClassName("ql-editor")[0].innerHTML);
      }}
    />
  );
}
