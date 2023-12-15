const Registration = () => {
	return (
		<section className="my-4">
			<h2 className="mb-3">登録事項</h2>
			<div className="mb-3">
				<h3 className="mb-3">発表者の方</h3>
				<div className="card bg-transparent">
					<div className="card-body bg-transparent">
						<div className="mb-3">
							<h4 className="mb-3">参加登録</h4>
							<p>
								以下のGoogleフォームに「発表題目」「発表内容の要約（100字程度）」を登録してください．登録期日は
								<mark className="yellow">12月6日（水）</mark>です．
							</p>
							<a
								className="btn btn-outline-primary"
								href="https://forms.gle/4hkwpQnQ1jjBMFYb6"
								role="button"
								target="_blank"
								rel="noreferrer"
							>
								<i className="bi bi-pencil-square" /> 参加登録
							</a>
						</div>

						<div>
							<h4 className="mb-3">原稿投稿</h4>
							<p>
								A4ページ1枚分の原稿を作成し，以下のGoogleフォームから投稿してください．なお，フォーマットは，IEICE総合大会予稿に準じます．投稿期日は
								<mark className="yellow">12月12日（火）</mark>です．
							</p>
							<a
								className="btn btn-outline-primary"
								href="https://forms.gle/6jTXXhwLPQXiqa2y9"
								role="button"
								target="_blank"
								rel="noreferrer"
							>
								<i className="bi bi-upload" /> 原稿投稿
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-3">
				<h3 className="mb-3">聴講者の方</h3>
				<div className="card bg-transparent">
					<div className="card-body bg-transparent">
						<div>
							<h4 className="mb-3">参加登録</h4>
							<p>以下のGoogleフォームに必要事項を登録してください．</p>
							<a
								className="btn btn-outline-primary"
								href="https://forms.gle/4hkwpQnQ1jjBMFYb6"
								role="button"
								target="_blank"
								rel="noreferrer"
							>
								<i className="bi bi-pencil-square" /> 参加登録
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Registration;
