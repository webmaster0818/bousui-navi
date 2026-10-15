import reviewsData from "@/data/reviews.json";

/**
 * 一次確認できた口コミ評価（reviews.json の ratingBlock：Googleマップ・取得日つき）。
 * companies.json の score・reviewCount は出典がないため表示に使わない。
 * ratingBlock が無い社は null を返す（既定値・推測値で埋めない）。
 */
export type VerifiedRating = {
  rating: number;
  reviewCount: number;
  fetchedAt: string;
  mapsUri?: string;
  sourceLabel: string;
};

type ReviewWithRating = { slug: string; ratingBlock?: VerifiedRating | null };

const bySlug = new Map(
  (reviewsData as unknown as ReviewWithRating[]).map((r) => [r.slug, r.ratingBlock ?? null])
);

export function getVerifiedRating(slug: string): VerifiedRating | null {
  const rb = bySlug.get(slug);
  if (!rb || typeof rb.rating !== "number" || typeof rb.reviewCount !== "number" || !rb.fetchedAt) return null;
  return rb;
}
