const EmergencyInfo: React.FC = () => {
  return (
    <section className="w-full bg-primary-50 border-b border-primary-200 py-6 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold text-primary-900 mb-2">
        Phone Directory
      </h2>

      <p className="text-lg text-text-primary mb-1">
        <strong>General Information:</strong>{" "}
        <a href="tel:+1234567890" className="text-primary-700 hover:underline">
          (123) 456-7890
        </a>
      </p>

      <p className="text-lg text-red-700">
        <strong>Emergency:</strong>{" "}
        <a href="tel:+1987654321" className="text-red-700 hover:underline">
          (987) 654-3210
        </a>
      </p>
    </section>
  );
};

export default EmergencyInfo;
