import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useColorModeContext } from "../context/ColorModeContext";

export default function RichTextEditor({ content, setContent }) {
  const { colorMode } = useColorModeContext();
  return (
    <ReactQuill
      id="editor"
      style={{
        background: colorMode === "light" ? "#faf7f7" : "#90caf9",
        borderRadius: "5px",
      }}
      theme="snow"
      value={content}
      onChange={() => {
        setContent(document.getElementsByClassName("ql-editor")[0].innerHTML);
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "link",
        "code-block",
      ]}
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }]["link"],
          ["code-block"],
        ],
      }}
    />
  );
}
