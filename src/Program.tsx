import { FC } from "react";

interface SectionProps {
	time: string;
	title: string;
	additionalInfo: string;
}

const Section: FC<SectionProps> = ({ time, title, additionalInfo }) => (
	<div className="row my-3 slot">
		<div className="col-sm-2 col-md-2">{time}</div>
		<div className="col-sm-10 col-md-5 bold">{title}</div>
		<div className="col-sm-12 col-md-5 text-right">{additionalInfo}</div>
	</div>
);

interface PresentationProps {
	time: string;
	title: string;
	speaker: string;
}

const Presentation: FC<PresentationProps> = ({ time, title, speaker }) => (
	<div className="row my-2 slot">
		<div className="col-sm-2 col-xl-2">{time}</div>
		<div className="col-sm-10 col-xl-7">
			<mark className="blue">{title}</mark>
		</div>
		<div className="col-sm-12 col-xl-3 text-right">{speaker}</div>
	</div>
);

const SECTIONS1: Readonly<SectionProps[]> = [
	{
		time: "13:30 ~ 13:45",
		title: "開式の辞",
		additionalInfo: "北口 善明",
	},
	{
		time: "13:45 ~ 14:00",
		title: "アイスブレイク （自己紹介等）",
		additionalInfo: "",
	},
	{
		time: "14:00 ~ 15:00",
		title: "セッション 1",
		additionalInfo: "座長: 北口 善明",
	},
];
const PRESENTATION1: Readonly<PresentationProps[]> = [
	{
		time: "14:00 ~ 14:30",
		title:
			"異種高密度ネットワークにおけるセル滞在時間に基づく垂直ハンドオーバ数の特性解析",
		speaker: "福原 健太（芝浦工大・学士4年）",
	},
	{
		time: "14:30 ~ 15:00",
		title: "受信者代弁型情報伝送プロトコルにおけるスレッド識別可能な多重化方式",
		speaker: "大坪 正樹（東工大・修士1年）",
	},
];
const SECTIONS2: Readonly<SectionProps[]> = [
	{
		time: "15:15 ~ 16:45",
		title: "セッション 2",
		additionalInfo: "座長: 山岡 克式",
	},
];
const PRESENTATION2: Readonly<PresentationProps[]> = [
	{
		time: "15:15 ~ 15:45",
		title: "DWTを用いた分割透かし画像に基づく電子透かしの基礎検討",
		speaker: "有田 喜晴（芝浦工大・学士4年）",
	},
	{
		time: "15:45 ~ 16:15",
		title:
			"マルチジョブ棄却率最適制御方式に対する待機キューを用いた応答時間短縮手法",
		speaker: "在間 哲平（東工大・修士1年）",
	},
	{
		time: "16:15 ~ 16:45",
		title: "可変ペイロードサイズVoIPトラヒックモデルに対する精度向上手法",
		speaker: "和氣 智慶（東工大・修士1年）",
	},
];
const SECTIONS3: Readonly<SectionProps[]> = [
	{
		time: "16:45 ~ 17:00",
		title: "閉会の辞",
		additionalInfo: "山岡 克式",
	},
	{
		time: "18:00 ~",
		title: "懇親会",
		additionalInfo: "",
	},
];

const Program: FC = () => {
	return (
		<section className="my-4">
			<h2 className="mb-3">プログラム</h2>
			<p>敬称略</p>
			{SECTIONS1.map((section, index) => (
				<>
					<Section {...section} />
					{index < SECTIONS1.length - 1 && <hr />}
				</>
			))}
			<div className="card my-3 bg-transparent">
				<div className="card-body bg-transparent">
					{PRESENTATION1.map((presentation) => (
						<Presentation {...presentation} />
					))}
				</div>
			</div>
			{SECTIONS2.map((section, index) => (
				<>
					<Section {...section} />
					{index < SECTIONS2.length - 1 && <hr />}
				</>
			))}
			<div className="card my-3 bg-transparent">
				<div className="card-body bg-transparent">
					{PRESENTATION2.map((presentation) => (
						<Presentation {...presentation} />
					))}
				</div>
			</div>
			{SECTIONS3.map((section, index) => (
				<>
					<Section {...section} />
					{index < SECTIONS3.length - 1 && <hr />}
				</>
			))}
		</section>
	);
};

export default Program;
