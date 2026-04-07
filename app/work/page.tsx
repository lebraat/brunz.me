import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { workEntries } from "@/lib/work";
import { playEntries } from "@/lib/play";

export default function Work() {
  const combined = [
    ...workEntries.map((e) => ({ ...e, type: "work" as const })),
    ...playEntries.map((e) => ({ ...e, type: "play" as const })),
  ]
    // dedupe by slug if same entry exists in both content folders
    .filter(
      (entry, idx, arr) => arr.findIndex((e) => e.slug === entry.slug) === idx,
    )
    .sort((a, b) => {
      const yearA = Math.max(...(a.date.match(/\d{4}/g) || ["0"]).map(Number));
      const yearB = Math.max(...(b.date.match(/\d{4}/g) || ["0"]).map(Number));
      return yearB - yearA;
    });

  return (
    <PageLayout activeNav="work">
      <ul className="space-y-5">
        {combined.map((item) => {
          const tags =
            item.tags && item.tags.length > 0 ? item.tags : [item.type];
          return (
            <li key={`${item.type}-${item.slug}`}>
              <Link href={`/${item.type}/${item.slug}`} className="group block">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-[13px] font-semibold group-hover:underline">
                    {item.title}
                  </span>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-wide text-neutral-400 border border-neutral-200 rounded px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[13px] text-neutral-400">
                  {item.date} · {item.discipline}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </PageLayout>
  );
}
