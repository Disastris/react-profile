import React from "react";
// creates a file using the resume uploded to the assets folder
export default function DownloadFile() {
  const createFile = () => {
    const fileUrl = "src/assets/Resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Resume.pdf";
    link.click();
  };
  return (
    <div>
      Download my:{" "}
      <button className="resume-link" onClick={createFile}>
        Resume
      </button>
    </div>
  );
}
