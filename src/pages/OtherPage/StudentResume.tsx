import { useState } from "react";

export default function StudentResume() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Resume</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={handleUpload}
        className="block w-full border rounded-md p-2"
      />

      {resumeFile && (
        <div className="space-y-2">
          <p className="text-gray-700">Uploaded: {resumeFile.name}</p>
          <button className="text-red-600 underline text-sm">Delete</button>
        </div>
      )}
    </div>
  );
}
