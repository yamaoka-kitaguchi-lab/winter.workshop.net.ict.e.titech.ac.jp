const Proceedings = () => {
	return (
		<section className="my-4">
			<h2 className="mb-3">予稿集</h2>
			<p>以下のリンクより予稿集をダウンロードできます．</p>
			<a
				type="button"
				className="btn btn-outline-primary"
				href="https://drive.google.com/file/d/1PYbBqZxkw3TWXGqquvr_1DOqXNwdvyIa/view?usp=drive_link"
				role="button"
				target="_blank"
				rel="noreferrer"
			>
				<i className="bi bi-file-earmark-pdf" /> Download
			</a>
		</section>
	);
};

export default Proceedings;
