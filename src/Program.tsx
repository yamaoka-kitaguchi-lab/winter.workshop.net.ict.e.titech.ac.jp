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

const FIRST_HALF_SECTIONS: Readonly<SectionProps[]> = [
	{
		time: "14:00 ~ 14:20",
		title: "自己紹介・全体連絡",
		additionalInfo: "",
	},
	{
		time: "14:20 ~ 14:40",
		title: "開式の辞",
		additionalInfo: "北口 善明",
	},
	{
		time: "14:40 ~ 15:00",
		title: "セッション",
		additionalInfo: "座長: 脇本 和茂",
	},
];
const PRESENTATIONS: Readonly<PresentationProps[]> = [
	{
		time: "14:40 ~ 15:00",
		title: "2D-XOR FECを適用したUDTにおける冗長度動的変更手法の検討",
		speaker: "在間 哲平（東工大・修士1年）",
	},
	{
		time: "15:00 ~ 15:20",
		title: "位置識別子を利用した受信者代弁型情報伝送プロトコル",
		speaker: "大坪 正樹（東工大・修士1年）",
	},
	{
		time: "15:20 ~ 15:40",
		title: "可変ペイロードサイズに対する有限状態数VoIPトラヒックモデル",
		speaker: "和氣 智慶（東工大・修士1年）",
	},
];
const SECOND_HALF_SECTIONS: Readonly<SectionProps[]> = [
	{
		time: "15:40 ~ 16:00",
		title: "閉会の辞",
		additionalInfo: "山岡 克式",
	},
	{
		time: "16:00 ~ 18:00",
		title: "休憩・買い出し等",
		additionalInfo: "",
	},
	{
		time: "18:00 ~",
		title: "新入生歓迎会",
		additionalInfo: "",
	},
];

const Program: FC = () => {
	return (
		<section className="my-4">
			<h2 className="mb-3">プログラム</h2>
			<p>敬称略</p>
			{FIRST_HALF_SECTIONS.map((section, index) => (
				<>
					<Section {...section} />
					{index < FIRST_HALF_SECTIONS.length - 1 && <hr />}
				</>
			))}
			<div className="card my-3 bg-transparent">
				<div className="card-body bg-transparent">
					{PRESENTATIONS.map((presentation) => (
						<Presentation {...presentation} />
					))}
				</div>
			</div>
			{SECOND_HALF_SECTIONS.map((section, index) => (
				<>
					<Section {...section} />
					{index < SECOND_HALF_SECTIONS.length - 1 && <hr />}
				</>
			))}
		</section>
	);
};

export default Program;
