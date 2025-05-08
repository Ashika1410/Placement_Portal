export default function StudentCertifications() {
    const certifications = [
      {
        name: "AWS Certified Cloud Practitioner",
        authority: "Amazon Web Services",
        issueDate: "March 2025",
        verified: true,
      },
    ];
  
    return (
      <div className="p-6 space-y-6">
        <h2 className="text-xl font-semibold">Certifications</h2>
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="border p-4 rounded-xl bg-white shadow-sm space-y-2"
          >
            <h3 className="font-semibold">{cert.name}</h3>
            <p className="text-sm text-gray-600">Issued by: {cert.authority}</p>
            <p className="text-sm">Date: {cert.issueDate}</p>
            <p
              className={`text-sm font-semibold ${
                cert.verified ? "text-green-600" : "text-red-600"
              }`}
            >
              {cert.verified ? "Verified" : "Not Verified"}
            </p>
          </div>
        ))}
      </div>
    );
  }
  