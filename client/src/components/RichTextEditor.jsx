import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useColorModeContext } from "../context/ColorModeContext";

export default function RichTextEditor({ content, setContent }) {
  const { colorMode } = useColorModeContext();
  const modules = [
    ["bold", "italic", "underline", "strike"],
    ["link"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    ["align", { align: "center" }, { align: "right" }, { align: "justify" }],
  ];
  return (
    <ReactQuill
      id="editor"
      className="quill"
      style={{
        borderRadius: "5px",
        background: colorMode === "light" ? "#faf7f7" : "#1e1e1e",
        color: colorMode === "light" ? "black" : "white",
        fontSize: "2rem",
      }}
      theme="snow"
      value={content}
      onChange={() => {
        setContent(document.getElementsByClassName("ql-editor")[0].innerHTML);
      }}
    />
  );
}
