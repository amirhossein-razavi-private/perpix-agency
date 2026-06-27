import { Icon } from "@/components/icon";

export function StarRating({ count = 5, className = "" }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" className="text-amber-400 text-sm" />
      ))}
    </div>
  );
}

export default StarRating;
