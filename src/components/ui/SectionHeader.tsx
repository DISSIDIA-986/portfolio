interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
        {title}
      </h2>
      <div className="w-24 h-1 bg-primary-500 mx-auto mb-8" />
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
