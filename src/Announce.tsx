const Announce = () => {
	return (
		<section className="my-4" id="announce">
			<h2 className="mb-3">開催案内</h2>
			<table className="table announce_table">
				<tbody>
					<tr>
						<th scope="row">
							<i className="bi bi-calendar-week" /> 日時
						</th>
						<td>2023年12月17日（日）</td>
					</tr>
					<tr>
						<th scope="row">
							<i className="bi bi-building" /> 場所
						</th>
						<td>東京工業大学大岡山キャンパス南3号館201第1会議室</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export default Announce;
