// src/components/ResumeUpload.tsx

import React, { useState } from "react";

const ResumeUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setUploadStatus("");
    } else {
      setUploadStatus("Please upload a PDF file.");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", selectedFile);

    try {
      // Simulating POST API request (replace URL with your backend route)
      const response = await fetch("/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("Resume uploaded successfully.");
      } else {
        setUploadStatus("Upload failed. Try again.");
      }
    } catch (error) {
      setUploadStatus("Error uploading resume.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Upload Resume</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="mb-4 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
      />

      {selectedFile && (
        <p className="text-sm text-gray-600 mb-2">Selected: {selectedFile.name}</p>
      )}

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Upload
      </button>

      {uploadStatus && (
        <p className="mt-4 text-sm text-gray-700">{uploadStatus}</p>
      )}
    </div>
  );
};

export default ResumeUpload;
