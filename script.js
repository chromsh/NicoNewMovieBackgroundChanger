$(function(){
	// 対象ノードを選択
	var target = document.querySelector('.timeline');

	// オブザーバインスタンスを作成
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			$(".log-user-video-upload").css("background-color", "pink");
		});
	});

	// オブザーバの設定
	var config = { childList: true, characterData: true, subtree: true }

	// 対象ノードとオブザーバの設定を渡す
	observer.observe(target, config);

});

