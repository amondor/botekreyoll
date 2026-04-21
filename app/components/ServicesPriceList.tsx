import type { PriceCategory } from "../services/pricing-data";

function PriceRow({
  name,
  price,
  note,
}: {
  name: string;
  price: string;
  note?: string;
}) {
  return (
    <li className="list-none">
      <div className="flex items-end gap-2 md:gap-3">
        <div className="min-w-0 flex-1 pb-0.5">
          <span className="text-[0.9375rem] font-semibold leading-snug text-foreground md:text-base">
            {name}
          </span>
          {note ? (
            <p className="mt-0.5 text-[0.6875rem] leading-snug text-foreground/55 md:text-xs">
              {note}
            </p>
          ) : null}
        </div>
        <div
          className="mb-[0.4rem] min-h-px min-w-6 flex-1 border-b border-dotted border-foreground/30 md:min-w-8"
          aria-hidden
        />
        <span className="shrink-0 pb-0.5 text-right text-[0.9375rem] tabular-nums tracking-tight text-foreground md:text-base">
          {price}
        </span>
      </div>
    </li>
  );
}

function ItemList({ items }: { items: { name: string; price: string; note?: string }[] }) {
  return (
    <ul className="flex flex-col gap-6 md:gap-7">
      {items.map((item) => (
        <PriceRow key={`${item.name}-${item.price}`} {...item} />
      ))}
    </ul>
  );
}

function CategoryBlock({
  category,
  headingId,
}: {
  category: PriceCategory;
  headingId: string;
}) {
  const items = category.items ?? [];
  const subsections = category.subsections ?? [];
  const hasItems = items.length > 0;
  const hasSubsections = subsections.length > 0;

  return (
    <section aria-labelledby={headingId}>
      <h2
        id={headingId}
        className="pricing-category-title font-hero mb-5 font-semibold text-foreground md:mb-6"
      >
        {category.title}
      </h2>
      {hasItems ? <ItemList items={items} /> : null}
      {hasSubsections ? (
        <div
          className={
            hasItems
              ? "mt-10 border-t border-foreground/10 pt-10 md:mt-12 md:pt-12"
              : ""
          }
        >
          {subsections.map((sub, i) => (
            <div key={sub.title} className={i > 0 ? "mt-10 md:mt-12" : ""}>
              <h3 className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground/70 md:mb-6 md:text-xs">
                {sub.title}
              </h3>
              <ItemList items={sub.items} />
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export function ServicesPriceList({ columns }: { columns: PriceCategory[][] }) {
  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-14 md:gap-16">
          {column.map((category, catIndex) => (
            <CategoryBlock
              key={`${colIndex}-${catIndex}-${category.title}`}
              category={category}
              headingId={`tarifs-cat-${colIndex}-${catIndex}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
