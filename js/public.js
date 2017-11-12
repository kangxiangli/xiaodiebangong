// 创建并显示新窗口
function openWebviews(page,extras){
//	var w = plus.webview.open( page,page,{},"pop-in");
//var nwaiting = plus.nativeUI.showWaiting();
	var w = plus.webview.create(page,page,{},extras);
	w.addEventListener('loading',function(){
//		nwaiting.close();
	
		plus.webview.show(w,'pop-in',300)
		
	})
	return w;
}

//创建主窗口
function openNewWin(html, extras, hardwareAccelerate) {
//	var parentWebview = Webview.currentWebview();

	//如果已经创建结束函数
	
	var wn = null,
	// 创建新Webview窗口
	wn = plus.webview.create(html, html, {
		background: "transparent",
	
	}, extras);
	plus.webview.show(wn, "slide-in-right", 300);
}

//关闭自身窗口
function closeWin() {
	var ws = plus.webview.currentWebview();
	plus.webview.close(ws, 'auto');
}
//关闭自身窗口
function closeWinTo(view) {

	plus.webview.close(view, 'auto');
}

