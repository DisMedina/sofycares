interface AwardCardProps {
  img: string;
  title: string;
  description: string;
}

export default function AwardCard({ img, title, description }: AwardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-72">
      <img src={img} alt={title} className="w-16 h-16 mb-4" />

      <h3 className="text-xl font-semibold text-text-primary mb-2 text-center">
        {title}
      </h3>

      <p className="text-text-secondary text-center">{description}</p>
    </div>
  );
}
