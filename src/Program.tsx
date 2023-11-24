const Program = () => {
	return (
		<section className="my-4">
			<h2 className="mb-3">プログラム</h2>
			<p>敬称略</p>
			<div className="row my-3 slot">
				<div className="col-sm-2 col-md-2">14:00 ~ 14:20</div>
				<div className="col-sm-10 col-md-5 bold">自己紹介・全体連絡</div>
				<div className="col-sm-12 col-md-5 text-right" />
			</div>
			<hr />
			<div className="row my-3 slot">
				<div className="col-sm-2 col-md-2">14:20 ~ 14:40</div>
				<div className="col-sm-10 col-md-5 bold">開式の辞</div>
				<div className="col-sm-12 col-md-5 text-right">北口 善明</div>
			</div>
			<hr />
			<div className="row my-3 slot">
				<div className="col-sm-2 col-md-2">14:40 ~ 14:40</div>
				<div className="col-sm-10 col-md-5 bold">セッション</div>
				<div className="col-sm-12 col-md-5 text-right">座長: 脇本 和茂</div>
			</div>
			<div className="card my-3 bg-transparent">
				<div className="card-body bg-transparent">
					<div className="row my-2 slot">
						<div className="col-sm-2 col-xl-2">14:40 ~ 15:00</div>
						<div className="col-sm-10 col-xl-7">
							<mark className="blue">
								2D-XOR FECを適用したUDTにおける冗長度動的変更手法の検討
							</mark>
						</div>
						<div className="col-sm-12 col-xl-3 text-right">
							在間 哲平（修士1年）
						</div>
					</div>
					<div className="row my-2 slot">
						<div className="col-sm-2 col-xl-2">15:00 ~ 15:20</div>
						<div className="col-sm-10 col-xl-7">
							<mark className="blue">
								位置識別子を利用した受信者代弁型情報伝送プロトコル
							</mark>
						</div>
						<div className="col-sm-12 col-xl-3 text-right">
							大坪 正樹（修士1年）
						</div>
					</div>
					<div className="row my-2 slot">
						<div className="col-sm-2 col-xl-2">15:20 ~ 15:40</div>
						<div className="col-sm-10 col-xl-7">
							<mark className="blue">
								可変ペイロードサイズに対する有限状態数VoIPトラヒックモデル
							</mark>
						</div>
						<div className="col-sm-12 col-xl-3 text-right">
							和氣 智慶（修士1年）
						</div>
					</div>
				</div>
			</div>
			<div className="row my-3 slot">
				<div className="col-sm-2 col-md-2">15:40 ~ 16:00</div>
				<div className="col-sm-10 col-md-5 bold">閉会の辞</div>
				<div className="col-sm-12 col-md-5 text-right">山岡 克式</div>
			</div>
			<hr />
			<div className="row my-3 slot">
				<div className="col-sm-2 col-md-2">16:00 ~ 18:00</div>
				<div className="col-sm-10 col-md-5 bold">休憩・買い出し等</div>
				<div className="col-sm-12 col-md-5 text-right" />
			</div>
			<hr />
			<div className="row my-3 slot">
				<div className="col-sm-2 col-md-2">18:00 ~ </div>
				<div className="col-sm-10 col-md-5 bold">新入生歓迎会</div>
				<div className="col-sm-12 col-md-5 text-right" />
			</div>
		</section>
	);
};

export default Program;
