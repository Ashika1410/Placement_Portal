import { useEffect, useState } from "react";
import Input from "../../components/form/input/InputField";
import TextAreaInput from "../../components/form/form-elements/TextAreaInput";
import Button from "../../components/ui/button/Button";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  postedDate: string;
  description: string;
  employmentType: string;
  salaryMin?: number;
  salaryMax?: number;
  applicationDeadline: string;
}

interface EditJobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: () => void;
}

export default function EditJobModal({
  job,
  isOpen,
  onClose,
  onUpdate,
}: EditJobModalProps) {
  const [formData, setFormData] = useState<Job | null>(job);

  useEffect(() => {
    setFormData(job);
  }, [job]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!formData) return;
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev!,
      [name]:
        name === "salaryMin" || name === "salaryMax"
          ? value === "" ? undefined : Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    try {
      const res = await fetch(`http://localhost:3000/jobs/${formData.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Job updated successfully.");
        onUpdate(); // refetch jobs
        onClose();  // close modal
      } else {
        alert("Failed to update job.");
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("An error occurred.");
    }
  };

  if (!isOpen || !formData) return null;

  return (
    <div className="inset-0 z-50 bg-opacity-30 flex justify-center items-center">
      <div className="bg-white w-full max-w-2xl p-6 rounded shadow-lg overflow-y-auto max-h-screen">
        <h2 className="text-xl font-bold mb-4">Edit Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full border px-4 py-2 rounded"
          />
          <Input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full border px-4 py-2 rounded"
          />
          <Input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border px-4 py-2 rounded"
          />
          <TextAreaInput
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border px-4 py-2 rounded"
          />
          <Input
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            placeholder="Employment Type"
            className="w-full border px-4 py-2 rounded"
          />
          <Input
            name="salaryMin"
            value={formData.salaryMin ?? ""}
            onChange={handleChange}
            placeholder="Min Salary"
            type="number"
            className="w-full border px-4 py-2 rounded"
          />
          <Input
            name="salaryMax"
            value={formData.salaryMax ?? ""}
            onChange={handleChange}
            placeholder="Max Salary"
            type="number"
            className="w-full border px-4 py-2 rounded"
          />
          <Input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline.slice(0, 10)}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update Job
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
