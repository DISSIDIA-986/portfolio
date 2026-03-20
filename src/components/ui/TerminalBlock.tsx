interface TerminalBlockProps {
  title?: string;
  children: React.ReactNode;
}

export default function TerminalBlock({
  title = "terminal",
  children,
}: TerminalBlockProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-900 dark:bg-gray-800 border border-gray-700">
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-700 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-gray-400 text-sm font-mono">{title}</span>
      </div>
      <div className="p-4 font-mono text-xs sm:text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
