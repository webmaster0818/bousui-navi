// 市区町村の住宅リフォーム補助（防水を対象工事に含むと自治体の公式資料で確認できたもののみ）
// 掲載基準：自治体の公式ページ・PDFの本文に「防水」が対象工事として書かれていること。
// 書かれていない自治体は掲載しない（「対象外」とは書かない）。確認日は checked（未指定は CHECKED_DATE＝2026-11-01）。

export type SubsidySource = { label: string; href: string };

export type CitySubsidy = {
  slug: string; // 個別ページがある自治体のみ /cost/subsidy/{slug}/
  pref: string;
  city: string;
  program: string; // 制度名（公式の表記）
  fiscalYear: string;
  waterproofScope: "balcony" | "roofWall"; // ベランダの防水を明記 / 屋根・外壁の防水を明記
  waterproofText: string; // 公式資料の記載（引用）
  waterproofWhere: string; // 引用元の資料名
  amount: string;
  conditions: string[];
  status: string;
  sources: SubsidySource[];
  hasPage: boolean;
  checked?: string; // 公式資料を確認した日（未指定は CHECKED_DATE）
};

export const CHECKED_DATE = "2026年11月1日";

export const citySubsidies: CitySubsidy[] = [
  {
    slug: "maebashi",
    pref: "群馬県",
    city: "前橋市",
    program: "前橋市住宅リフォーム補助金",
    fiscalYear: "令和8年度（2026年度）",
    waterproofScope: "balcony",
    waterproofText: "外装部の改修、塗装、防水、交換など（外装部とは屋根、壁、雨樋、ベランダ、テラスなど建物の外側）",
    waterproofWhere: "R8前橋市住宅リフォーム補助金申請手引き「「対象」となる主な工事」",
    amount: "対象工事費（税抜）の3分の1以内・上限10万円",
    conditions: [
      "築20年以上（建築年が平成18年以前）の自己居住用の住宅",
      "前橋市内の業者による、対象工事費が税抜20万円以上の工事",
      "交付決定前に着工した工事は対象外",
    ],
    status: "令和8年度の申込み受付（2026年5月11日〜6月10日）は終了。申込みのうち建築年の古い順に600件が対象",
    sources: [
      { label: "前橋市「【受付終了】令和8年度住宅リフォーム補助金」", href: "https://www.city.maebashi.gunma.jp/soshiki/toshikeikakubu/kenchikujutaku/oshirase/48348.html" },
      { label: "前橋市「R8前橋市住宅リフォーム補助金申請手引き」（PDF）", href: "https://www.city.maebashi.gunma.jp/material/files/group/63/R8tebiki.pdf" },
      { label: "前橋市「R8前橋市住宅リフォーム補助金交付要項」（PDF）", href: "https://www.city.maebashi.gunma.jp/material/files/group/63/R8jutakuyoukou.pdf" },
    ],
    hasPage: true,
  },
  {
    slug: "abiko",
    pref: "千葉県",
    city: "我孫子市",
    program: "我孫子市住宅リフォーム補助金",
    fiscalYear: "令和8年度（2026年度）",
    waterproofScope: "balcony",
    waterproofText: "外装工事：外壁塗装、屋根の修繕（カバー工法、部材交換）、軒裏・雨樋、ベランダ等の防水（仮設・養生、高圧洗浄、シーリング撤去・打ち換え等を含む。）",
    waterproofWhere: "住宅リフォーム補助金_申請の手引き｜R8「補助対象工事」",
    amount: "持家のリフォームは対象経費の5％・上限7万円（申請者が40歳未満で、市内持家以外からの転居・市外からの転入に伴うリフォームの場合は別の補助率・上限）",
    conditions: [
      "所有権の保存登記がされている自己居住用の住宅で、交付を受けた日から10年を超えて定住する方",
      "市の登録施工事業者による税込20万円以上の工事（市外からの転入者は登録施工事業者以外でも可）",
      "市からの交付決定を受けてから着手する工事",
      "マンションなど区分所有建物の共用部分の工事（専用部分にあるベランダを含む）は対象外",
    ],
    status: "令和8年度の受付は2027年2月10日まで（予算に達した場合は終了）",
    sources: [
      { label: "我孫子市「我孫子市住宅リフォーム補助金制度」", href: "https://www.city.abiko.chiba.jp/kurashi/sumai/josei/reform/index.html" },
      { label: "我孫子市「住宅リフォーム補助金_申請の手引き｜R8」（PDF）", href: "https://www.city.abiko.chiba.jp/kurashi/sumai/josei/reform/index.files/080327_R8_tebiki.pdf" },
    ],
    hasPage: true,
  },
  {
    slug: "mito",
    pref: "茨城県",
    city: "水戸市",
    program: "水戸市安心住宅リフォーム支援補助金",
    fiscalYear: "令和8年度（2026年度）",
    waterproofScope: "balcony",
    waterproofText: "既存ベランダの防水・修繕：○（対象）／屋根の防水：○（対象）",
    waterproofWhere: "補助対象リフォーム工事一覧（令和8年8月1日作成）",
    amount: "補助対象経費の10分の1（リフォームアドバイザー派遣の費用と合わせて上限10万円）",
    conditions: [
      "本店が市内にある建設業許可業者などの「特定の施工者」との請負契約による工事",
      "リフォーム工事費用が50万円以上（消費税額を除く）",
      "抽選で当選した後、交付申請をして交付決定を受けてから着工",
    ],
    status: "令和8年度は前期・後期の抽選制。後期の抽選受付（2026年8月17日〜9月10日）と交付申請期間（9月24日〜10月30日）は終了",
    sources: [
      { label: "水戸市「水戸市安心住宅リフォーム支援補助金（住宅政策課）」", href: "https://www.city.mito.lg.jp/page/3548.html" },
      { label: "水戸市「補助対象リフォーム工事一覧」（PDF）", href: "https://www.city.mito.lg.jp/uploaded/attachment/70752.pdf" },
    ],
    hasPage: true,
    checked: "2026年11月4日",
  },
  {
    slug: "kamisu",
    pref: "茨城県",
    city: "神栖市",
    program: "神栖市住まい安心リフォーム補助金",
    fiscalYear: "2026年6月更新の案内",
    waterproofScope: "roofWall",
    waterproofText: "外壁の張り替え、張り増し、塗装、防水、補修／屋根の葺き替え、塗装、防水、補修",
    waterproofWhere: "「受付終了：住まい安心リフォーム補助金」の補助対象工事",
    amount: "補助対象工事費の10％・上限10万円",
    conditions: [
      "市内の事業者が行う外壁または屋根等のリフォーム工事",
      "築10年が経過した、市内に所有し居住する個人住宅または併用住宅",
      "交付決定通知書が届いてから着工",
    ],
    status: "予算上限に達したため受付終了",
    sources: [
      { label: "神栖市「受付終了：住まい安心リフォーム補助金」", href: "https://www.city.kamisu.ibaraki.jp/living/1001425/1001426/1012727.html" },
    ],
    hasPage: false,
  },
  {
    slug: "ota-gunma",
    pref: "群馬県",
    city: "太田市",
    program: "太田市住宅リフォーム支援事業",
    fiscalYear: "令和8年度（2026年度）",
    waterproofScope: "balcony",
    waterproofText: "防水：ウレタン防水・FRP 防水・シート防水・シーリング打替改修／屋根：※住宅と同一構造体の下屋・霧除け・ベランダは対象",
    waterproofWhere: "令和8年度 太田市住宅リフォーム支援事業【申請ガイドブック】「補助対象と認められる工事の具体例」",
    amount: "補助対象額の30％・最大20万円（千円未満切捨。太田市デジタル金券 OTACO で交付）",
    conditions: [
      "申請日の前日において建築後10年以上経過し、住宅用火災警報器が設置されている（または設置する）建物",
      "リフォームを行う住宅に2年以上継続して居住している住宅所有者",
      "本補助金の登録業者が施工する、補助対象工事費10万円以上の工事",
      "着工前に申請し、交付決定後に着工",
      "住宅と同一構造体でないベランダ、アルミ製庇、後付けの下屋などは対象外",
    ],
    status: "予算に達したため、令和8年度の受付は終了（申請受付期間は2026年4月21日〜2027年1月29日の予定だった）",
    sources: [
      { label: "太田市「【終了しました】太田市住宅リフォーム支援事業補助金のご案内」", href: "https://www.city.ota.gunma.jp/page/1148.html" },
      { label: "太田市「令和8年度 太田市住宅リフォーム支援事業【申請ガイドブック】」（PDF）", href: "https://www.city.ota.gunma.jp/uploaded/attachment/38624.pdf" },
    ],
    hasPage: true,
    checked: "2026年11月4日",
  },
  {
    slug: "nishinomiya",
    pref: "兵庫県",
    city: "西宮市",
    program: "西宮市住宅リフォーム助成事業",
    fiscalYear: "令和8年度（2026年度）",
    waterproofScope: "roofWall",
    waterproofText: "１ 屋根や外壁の塗装・防水工事／６ ベランダ又はバルコニーの工事",
    waterproofWhere: "「対象となる工事の一例」（令和8年度 住宅リフォーム助成事業【2次募集】ページ掲載のPDF）",
    amount: "助成対象となる工事経費の10％・最高15万円",
    conditions: [
      "西宮市内に主たる事業所を有する施工業者（個人業者を含む）が施工する、工事経費40万円以上（税込）の工事",
      "助成申請者が所有し居住している市内の住宅（マンションは専有部分のみ）。引っ越し目的のリフォームは対象外",
      "応募者多数の場合は抽選。交付決定通知書を受け取ってから着手",
    ],
    status: "令和8年度の募集は終了（2次募集は2026年7月24日〜8月31日・9月3日抽選）。令和9年度の実施は未定",
    sources: [
      { label: "西宮市「令和8年度(2026年度)住宅リフォーム助成事業について【2次募集】※募集は終了しました」", href: "https://www.nishi.or.jp/kurashi/sumai/josei/R8-2Reform.html" },
      { label: "西宮市「対象となる工事の一例」（PDF）", href: "https://www.nishi.or.jp/kurashi/sumai/josei/R8-2Reform.files/R07kouji.pdf" },
      { label: "西宮市「Q&A 対象工事について」（PDF）", href: "https://www.nishi.or.jp/kurashi/sumai/josei/R8-2Reform.files/2026QA3.pdf" },
    ],
    hasPage: true,
    checked: "2026年11月4日",
  },
  {
    slug: "arida",
    pref: "和歌山県",
    city: "有田市",
    program: "有田市住宅リフォーム工事費補助事業",
    fiscalYear: "令和8年度（2026年度）",
    waterproofScope: "roofWall",
    waterproofText: "○ 瓦の修理、屋根の葺替、屋根塗装、防水、雨どい修理",
    waterproofWhere: "令和8年度 住宅リフォーム工事費補助事業 チラシ「補助対象工事等の一例」",
    amount: "補助対象工事費（消費税を除く）の20％・上限20万円",
    conditions: [
      "市内に事務所などがある法人、または市内に住所を有する個人事業者で、1年以上継続して営んでいる施工業者との契約",
      "補助対象工事費（消費税を除く）10万円以上の工事",
      "交付決定後に工事契約・着手し、2027年2月26日までに完了報告書を提出できる工事",
    ],
    status: "申請受付は2026年6月7日（受付番号のくじ引き）から。予算額（1,500万円）に達した時点で終了",
    sources: [
      { label: "有田市「住宅リフォーム工事費補助事業の募集」", href: "https://www.city.arida.lg.jp/kurashi/sumai/1001033.html" },
      { label: "有田市「令和8年度 住宅リフォーム工事費補助事業 チラシ」（PDF）", href: "https://www.city.arida.lg.jp/_res/projects/default_project/_page_/001/001/033/r8_leaflet.pdf" },
    ],
    hasPage: false,
    checked: "2026年11月4日",
  },
];

export function getCitySubsidy(slug: string): CitySubsidy {
  const c = citySubsidies.find((x) => x.slug === slug);
  if (!c) throw new Error(`unknown city subsidy: ${slug}`);
  return c;
}
