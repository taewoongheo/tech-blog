import { Categories } from '../Types/Category';

export default function Tag({ tag }: { tag: Categories }): React.ReactNode {
  return (
    <div className="inline-block px-3 py-1 rounded bg-gray-50 mr-2 text-[0.7rem] sm:text-[0.8rem] md:text-[0.7rem] lg:text-[0.9rem]">
      {tag}
    </div>
  );
}
