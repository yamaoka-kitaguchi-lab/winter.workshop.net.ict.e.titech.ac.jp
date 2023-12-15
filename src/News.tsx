import { FC } from "react";

interface ContentProps {
	day: string;
	content: string;
}

const content: Readonly<ContentProps[]> = [
	{
		day: "2023年12月15日（金）",
		content: "予稿集を公開しました",
	},
	{
		day: "2023年12月15日（金）",
		content: "懇親会開始時間を変更しました",
	},
	{
		day: "2023年12月11日（月）",
		content: "プログラムを公開しました",
	},
	{
		day: "2023年11月27日（月）",
		content: "Webページを公開しました",
	},
];

const News: FC = () => {
	return (
		<section className="my-4">
			<h2 className="mb-3">更新情報</h2>
			<table className="table announce_table">
				<thead>
					<tr>
						<th scope="col">
							<i className="bi bi-calendar-week" /> 日付
						</th>
						<th scope="col">
							<i className="bi bi-pencil-square" /> 内容
						</th>
					</tr>
				</thead>
				<tbody>
					{content.map((item) => (
						<tr>
							<th scope="row">{item.day}</th>
							<td>{item.content}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default News;
