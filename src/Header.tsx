const Header = () => {
	return (
		<section className="my-4">
			<h1 className="display-4 d-none d-lg-inline-block">
				.net Winter Workshop 2023
			</h1>
			<h1 className="display-5 d-none d-md-inline-block d-lg-none">
				.net Winter Workshop 2023
			</h1>
			<h1 className="display-6 d-inline-block d-md-none">
				.net Winter WS 2023
			</h1>

			<p className="lead">
				Welcome to Yamaoka Lab., Tokyo Institute of Technology!
			</p>

			<hr />

			<p>
				山岡研究室では，本年も .net Winter Workshop を開催いたします．
				<br />
				当研究室では，学生の研究促進，研究スキル向上などを目的に，情報通信ネットワークを対象とした，ネットワーク制御技術および通信用マルチメディア処理技術に関する研究報告を，学会形式に則って行います．
				<br />
				つきましては，以下の要領にて論文を募集いたしますので，確認の上お申込みください．
			</p>
			<p className="text-muted small" id="tech-chan-copyright">
				背景画像：
				<a className="text-muted bold" href="https://mascot.koudaisai.jp/">
					テックちゃん（工大祭公式マスコットキャラクター）
				</a>
			</p>
			<div className="alert alert-info info">
				<i className="bi bi-info-circle" /> プログラムを公開しました (更新日:
				12/11)
			</div>
		</section>
	);
};

export default Header;
