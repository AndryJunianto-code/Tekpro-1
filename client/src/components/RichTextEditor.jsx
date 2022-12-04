import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useColorModeContext } from "../context/ColorModeContext";

export default function RichTextEditor({ content, setContent }) {
  const { colorMode } = useColorModeContext();
  return (
    <ReactQuill
      id="editor"
      className="quill"
      style={{
        background: colorMode === "light" ? "white" : "#1e1e1e",
        color: colorMode === "light" ? "black" : "white",
      }}
      theme="snow"
      value={content}
      onChange={() => {
        setContent(document.getElementsByClassName("ql-editor")[0].innerHTML);
      }}
    />
  );
}
