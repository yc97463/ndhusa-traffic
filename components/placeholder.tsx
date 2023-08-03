import next from "next";

interface PlaceholderProps {
  content?: string;
}

export default function Placeholder({ content }: PlaceholderProps) {
  return (
    <div className="w-full h-96 my-2 rounded-lg bg-neutral-200">
      <div className="flex h-full">
        <div className="m-auto px-6">{content ? content : "尚未完工"}</div>
      </div>
    </div>
  );
}
