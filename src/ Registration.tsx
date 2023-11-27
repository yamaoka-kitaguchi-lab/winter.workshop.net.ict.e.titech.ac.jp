const Registration = () => {
	return (
		<section className="my-4">
			<h2 className="mb-3">登録事項</h2>
			<div className="mb-3">
				<h3 className="mb-3">参加登録</h3>
				<p>
					以下のGoogleフォームに「発表題目」「発表内容の要約（100字程度）」を登録してください。登録期日は
					<mark className="yellow">12月11日（月）</mark>です。
				</p>
				<a
					className="btn btn-primary"
					href="https://forms.gle/4hkwpQnQ1jjBMFYb6"
					role="button"
					target="_blank"
					rel="noreferrer"
				>
					参加登録
				</a>
			</div>

			<div>
				<h3 className="mb-3">原稿投稿</h3>
				<p>
					A4ページ1枚分の原稿を作成し、以下のGoogleフォームから投稿してください．なお，フォーマットは，IEICE総合大会予稿に準じます．投稿期日は
					<mark className="yellow">12月14日（木）</mark>です．
				</p>
				<a
					className="btn btn-primary"
					href="https://forms.gle/6jTXXhwLPQXiqa2y9"
					role="button"
					target="_blank"
					rel="noreferrer"
				>
					原稿投稿
				</a>
			</div>
		</section>
	);
};

export default Registration;
