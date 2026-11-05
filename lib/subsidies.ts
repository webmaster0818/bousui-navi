// 市区町村の住宅リフォーム補助（防水を対象工事に含むと自治体の公式資料で確認できたもののみ）
// 掲載基準：自治体の公式ページ・PDFの本文に「防水」が対象工事として書かれていること。
// 書かれていない自治体は掲載しない（「対象外」とは書かない）。確認日は checked（未指定は CHECKED_DATE＝2026-11-01）。
// 例外：waterproofScope "balconyRepair" は「防水」の語は無いが、ベランダの改修・雨漏りの改修を対象と公式資料に明記している自治体（防水の補助金とは書かない）。

export type SubsidySource = { label: string; href: string };

export type CitySubsidy = {
  slug: string; // 個別ページがある自治体のみ /cost/subsidy/{slug}/
  pref: string;
  city: string;
  program: string; // 制度名（公式の表記）
  fiscalYear: string;
  waterproofScope: "balcony" | "roofWall" | "balconyRepair"; // ベランダの防水を明記 / 屋根・外壁の防水を明記 / ベランダ改修・雨漏りの改修を明記（「防水」の記載なし）
  waterproofText: string; // 公式資料の記載（引用）
  waterproofWhere: string; // 引用元の資料名
  extraQuotes?: { text: string; where: string }[]; // 追加の引用（原文のまま）
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
  {
    slug: "kawaguchi",
    pref: "埼玉県",
    city: "川口市",
    program: "川口市住宅リフォーム補助金",
    fiscalYear: "令和8年度（2026年度）",
    waterproofScope: "roofWall",
    waterproofText: "5 屋根の改修（塗装、葺き替え、防水工事）○／17 バルコニー・ベランダの修繕 ○",
    waterproofWhere: "川口市「対象工事一覧」（令和8年度）",
    amount: "工事費用の5％・最大10万円（千円未満切り捨て）",
    conditions: [
      "川口市内に本社がある業者、または川口市在住の個人事業主が行う税込20万円以上の工事",
      "令和8年4月1日以降交付申請までに契約を締結し、交付決定後に着手する工事",
      "申請は契約締結後かつ施工前に窓口で（郵送不可）",
    ],
    status: "令和8年度の補助金は終了（後期の受付期間は2026年8月6日〜2027年1月29日・先着順・予算額に達し次第終了だった）。令和9年度の実施は未定",
    sources: [
      { label: "川口市「令和8年度(2026年度)川口市住宅リフォーム補助金は終了しました。」", href: "https://www.city.kawaguchi.lg.jp/soshiki/01130/040/2_2/48993.html" },
      { label: "川口市「対象工事一覧」（PDF）", href: "https://www.city.kawaguchi.lg.jp/material/files/group/117/R8taisyoukouziitirann.pdf" },
      { label: "川口市「住宅リフォーム補助金 パンフレット」（PDF）", href: "https://www.city.kawaguchi.lg.jp/material/files/group/117/R8pannhu-kouki.pdf" },
    ],
    hasPage: true,
    checked: "2026年11月5日",
  },
  {
    slug: "morioka",
    pref: "岩手県",
    city: "盛岡市",
    program: "リフォーム支援事業2026（MORIO Payプレミアム商品券発行事業）",
    fiscalYear: "2026年",
    waterproofScope: "roofWall",
    waterproofText: "屋根防水シートの新設や補修 ○／防水塗料等による防水工事 ○／バルコニーの新設や補修 ○",
    waterproofWhere: "盛岡市「対象工事判定一覧表」",
    amount: "6万円分のMORIO Payプレミアム商品券2026（アプリ型電子商品券。現金の補助ではない）",
    conditions: [
      "市内に事業所（本社や支社、支店等）を有する建設関連事業者と契約し、実施する工事",
      "対象工事の合計金額が税込み33万円以上",
      "令和8年4月13日以降かつ申請日以降に着工し、11月30日までに完了する工事",
    ],
    status: "申請受付は終了（受付累計830件）。800名を超えた分は受付日ごとの抽選で繰上者を決定",
    sources: [
      { label: "盛岡市「※申請受付終了※【物価高騰対応関連】リフォーム支援事業2026（MORIO Payプレミアム商品券発行事業）について」", href: "https://www.city.morioka.iwate.jp/shigoto/sangyo/shogyo/1057585/1055584.html" },
      { label: "盛岡市「対象工事判定一覧表」（PDF）", href: "https://www.city.morioka.iwate.jp/_res/projects/default_project/_page_/001/055/584/r8-02-reform-taishouichiran02.pdf" },
    ],
    hasPage: true,
    checked: "2026年11月5日",
  },
  {
    slug: "matsuyama",
    pref: "愛媛県",
    city: "松山市",
    program: "わが家のリフォーム応援事業",
    fiscalYear: "令和8年度（2026年度）",
    waterproofScope: "balcony",
    waterproofText: "外装工事　その他　ベランダ・バルコニー等の防水、既存の外装の修繕等",
    waterproofWhere: "松山市わが家のリフォーム応援事業【令和8年度(2026年度) 申請の手引】「リフォーム工事（補助対象工事）」",
    amount: "補助対象工事の10％・上限20万円＋加算（空き家バンク加算・省エネ化加算は各30万円）",
    conditions: [
      "市内に住所を有する個人事業者、または市内に営業所等を有する法人で、リフォーム事業を営む者との契約",
      "合計で50万円（税抜）以上のリフォーム工事を、補助金交付決定後に契約・着工",
      "昭和56年6月1日以降に着工され築10年以上経過した住宅（同日以前の着工は耐震性の証明が必要）",
      "ウッドデッキ・サンルーム・バルコニー等の新設及び取替工事は対象外",
    ],
    status: "令和8年度は事前申請・抽選制。第2期の本申請は2026年9月30日、補欠番号の方の本申請は10月23日で受付期間が終了",
    sources: [
      { label: "松山市「令和8年度(2026年度)　わが家のリフォーム応援事業」", href: "https://www.city.matsuyama.ehime.jp/bosyu/wagaya.html" },
      { label: "松山市「松山市わが家のリフォーム応援事業【令和8年度(2026年度) 申請の手引】」（PDF）", href: "https://www.city.matsuyama.ehime.jp/bosyu/wagaya.files/R8-02.pdf" },
    ],
    hasPage: true,
    checked: "2026年11月5日",
  },
  {
    slug: "nagasaki",
    pref: "長崎県",
    city: "長崎市",
    program: "長崎市快適住まいづくり支援費補助金",
    fiscalYear: "令和8年度（2026年度）",
    waterproofScope: "roofWall",
    waterproofText: "陸屋根等の防水シート張替工事等は（中略）雨水の侵入防止による建物の耐久性向上があるため対象とする。",
    waterproofWhere: "長崎市「要件を満たす工事の補助対象について」（屋根の葺替え又は外壁の張替工事）",
    amount: "補助対象経費の20％・上限10万円（耐震性能を有する一戸建ての空き家を改修する場合は上限20万円）",
    conditions: [
      "市内に本社がある法人（支社・営業所のみは不可）または市内に住所がある個人に発注する、税抜20万円以上の未着手の工事",
      "事前抽選に当選した後に申請し、交付決定を受けてから着手",
      "過去10年度の間に本補助金または市の類似の補助金の交付を受けた住宅は対象外",
    ],
    status: "令和8年度の予算額に達したため受付終了。抽選に当選した方の申請は2027年1月29日まで受付",
    sources: [
      { label: "長崎市「【受付終了】長崎市快適住まいづくり支援費補助金」", href: "https://www.city.nagasaki.lg.jp/page/1816.html" },
      { label: "長崎市「要件を満たす工事の補助対象について」（PDF）", href: "https://www.city.nagasaki.lg.jp/uploaded/attachment/59581.pdf" },
    ],
    hasPage: true,
    checked: "2026年11月5日",
  },
  {
    slug: "okayama",
    pref: "岡山県",
    city: "岡山市",
    program: "空家等適正管理支援事業（リフォーム）",
    fiscalYear: "令和8年度（2026年度）",
    waterproofScope: "roofWall",
    waterproofText: "リフォーム対象工事　対象になるもの　・屋根の葺き替え、塗装、防水",
    waterproofWhere: "岡山市 空家等適正管理支援事業（リフォーム）パンフレット（令和8年度）",
    amount: "工事に要する金額の3分の1・上限60万円（子育て世帯の上限70万円は令和8年度分終了）",
    conditions: [
      "対象は空家等、または空き家情報バンクに登録する市内の一戸建て住宅（自宅の改修は対象外）",
      "「耐震改修等」「バリアフリー改修」「省エネルギー改修」のいずれかを含む、経費の合計額60万円以上のリフォーム工事",
      "市内の施工業者による居住用部分の工事で、改修後に活用すること（賃貸・売却・自己や親族の居住）",
      "申請前に事前相談が必要",
    ],
    status: "申請受付は2026年5月1日〜12月18日（昭和56年5月31日以前に建築着工した建物は11月30日まで）。予算に達し次第終了",
    sources: [
      { label: "岡山市「空家等適正管理支援事業（リフォーム）」", href: "https://www.city.okayama.jp/kurashi/0000006210.html" },
      { label: "岡山市「空家等適正管理支援事業（リフォーム）パンフレット」（PDF）", href: "https://www.city.okayama.jp/kurashi/cmsfiles/contents/0000006/6210/R8.pannfu.pdf" },
    ],
    hasPage: true,
    checked: "2026年11月5日",
  },
  {
    slug: "yokosuka",
    pref: "神奈川県",
    city: "横須賀市",
    program: "令和8年度高齢者住宅リフォーム補助金",
    fiscalYear: "令和8年度（2026年度）",
    waterproofScope: "roofWall",
    waterproofText: "屋根のふき替え工事、塗装工事または防水工事（景観に関する手続きが必要です）",
    waterproofWhere: "横須賀市「高齢者住宅リフォーム補助金について」6.補助金の対象となる工事・ならない工事の例",
    amount: "税抜き20万円以上の対象工事に対して一律10万円",
    conditions: [
      "申請者（住宅所有者）が対象住宅に自ら居住し、申請日時点で65歳以上の方と同居していること",
      "横須賀市に本店（本拠地）のある事業者に依頼すること",
      "市の交付決定を受ける前に着手した工事は対象外。令和4年度〜令和7年度に同補助金を受けた住宅は対象外",
    ],
    status: "令和8年度の受付（2026年4月1日〜5月29日）と抽選会（6月15日）は終了",
    sources: [
      { label: "横須賀市「高齢者住宅リフォーム補助金について」", href: "https://www.city.yokosuka.kanagawa.jp/4821/sumai/koureisya_reform.html" },
    ],
    hasPage: true,
    checked: "2026年11月5日",
  },
  {
    slug: "koshigaya",
    pref: "埼玉県",
    city: "越谷市",
    program: "越谷市住宅・店舗改修促進補助金",
    fiscalYear: "令和8年度（2026年度）第2期",
    waterproofScope: "balconyRepair",
    waterproofText: "Ｑ　２階のベランダを改修したいが対象となるか。　Ａ　対象となります。",
    waterproofWhere: "越谷市「住宅・店舗改修促進補助金」よくあるお問い合わせ（Q&A）「対象工事の種類について」",
    extraQuotes: [
      {
        text: "屋根の改修・設置工事　塗装、葺き替え、雨漏りの改修、雨水貯留施設設置等の工事",
        where: "越谷市「令和８年度 越谷市住宅・店舗改修促進補助金（第２期）のご案内」【募集要項】補助対象工事の一覧",
      },
    ],
    amount: "補助対象経費の20％・上限10万円（交付額1,000円未満切り捨て）",
    conditions: [
      "市内に本社又は本店がある施工業者を利用して実施する20万円以上（税抜き）の改修工事（市内に支社・支店・営業所があるだけでは対象外）",
      "補助金交付決定後に着工し、2027年2月末日までに完了する工事",
      "市内に所有し自ら居住している個人住宅（共同住宅の場合は専有部分に限る）。これまでに本補助金を利用したことがない方",
      "ウッドデッキやテラスの改修・設置工事は対象外",
    ],
    status: "令和8年度第2期の申請受付は2026年11月2日〜11月16日（土日祝を除く・郵送は期間内消印有効）。予算額を超えた場合は抽選。交付決定は12月上旬予定",
    sources: [
      { label: "越谷市「令和8年度　越谷市住宅・店舗改修促進補助金（第2期）について」", href: "https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/sumai/sien/kaisyusokusin2026-2.html" },
      { label: "越谷市「住宅・店舗改修促進補助金　募集要項」（第2期・PDF）", href: "https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/sumai/sien/R8.2.juutakutempo.pamphlet.pdf" },
      { label: "越谷市「住宅・店舗改修促進補助金」よくあるお問い合わせ（Q&A）（PDF）", href: "https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/sumai/sien/yokuaruQA_20260318.pdf" },
    ],
    hasPage: true,
    checked: "2026年11月5日",
  },
];

export function getCitySubsidy(slug: string): CitySubsidy {
  const c = citySubsidies.find((x) => x.slug === slug);
  if (!c) throw new Error(`unknown city subsidy: ${slug}`);
  return c;
}
