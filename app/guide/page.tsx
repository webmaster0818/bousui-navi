import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  alternates: { canonical: "/guide/" },
  title: "ベランダ防水の解説記事一覧｜業者選び・保証・保険・マンション",
  description:
    "ベランダ・屋上の防水について、依頼先の選び方、訪問販売・点検商法の注意点、保証と瑕疵担保責任、火災保険、マンションの費用負担、シーリングや屋上防水、メンテナンスの時期を、公的機関の資料にもとづいて解説した記事の一覧です。",
};

export default function GuideIndexPage() {
  const categories = Array.from(new Set(guides.map((g) => g.category)));
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "防水の解説記事" }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">ベランダ防水の解説記事一覧</h1>
      <p className="text-sm text-gray-700 leading-relaxed mb-8">
        業者選び・保証・保険・マンションの費用負担など、防水工事を依頼する前に確認しておく事項を解説しています。各記事では、国土交通省・国民生活センター・消費者庁などの公的機関の資料と法令を出典として明記し、確認日を記載しています。
      </p>
      {categories.map((cat) => (
        <section key={cat} className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">{cat}</h2>
          <div className="grid grid-cols-1 gap-3">
            {guides
              .filter((g) => g.category === cat)
              .map((g) => (
                <Link
                  key={g.slug}
                  href={`/guide/${g.slug}/`}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#2563EB] transition-colors no-underline"
                >
                  <div className="font-bold text-gray-900 text-sm mb-1">{g.h1}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{g.description}</div>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
