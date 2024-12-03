// 画像ギャラリー機能を動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスナーをアタッチして
// クリックされたときにメイン画像をサムネイル画像に対応するものに差し替えること
function activateGallery() {
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImage = document.querySelector("#gallery-photo img");
  // 更新される画像情報
	let galleryInfo = document.querySelector("#gallery-info");
	let title 			= galleryInfo.querySelector(".title");
	let description = galleryInfo.querySelector(".description");

	thumbnails.forEach(function(thumbnail) {
    // 大画像をプリロードする
		let newImageSrc = thumbnail.dataset.largeVersion;
		let largeVersion = new Image();
		largeVersion.src = newImageSrc;

		thumbnail.addEventListener("click", function() {
      // クリックされたサムネイル画像をメイン画像として設定する
			mainImage.setAttribute("src", newImageSrc);
			mainImage.setAttribute("alt", thumbnail.alt);
			
			// 現在の画像を変更する
			currentClass = "current"
			document.querySelector(".current").classList.remove(currentClass);
			thumbnail.parentNode.classList.add(currentClass);

      // 画像の情報を更新する
			title.innerHTML 			= thumbnail.dataset.title;
			description.innerHTML = thumbnail.dataset.description;
		});
	});
}