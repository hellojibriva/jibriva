import type { ServiceCategory } from "@/types/content";

interface ServiceCategoryCardProps {
  category: ServiceCategory;
}

export function ServiceCategoryCard({ category }: ServiceCategoryCardProps) {
  return (
    <div className="grid grid-cols-[minmax(240px,1fr)_2fr] gap-10 border-t border-border py-14 max-md:grid-cols-1 max-md:gap-6">
      <div>
        <h2 className="text-[22px] font-bold text-navy">{category.name}</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-text-muted">{category.desc}</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-8 gap-y-6">
        {category.items.map((item) => (
          <div key={item.name}>
            <p className="text-[15px] font-bold text-navy">{item.name}</p>
            <p className="mt-1 text-[13.5px] leading-relaxed text-text-muted">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
