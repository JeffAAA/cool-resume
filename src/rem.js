/*以720宽度的设计稿设置rem,1rem=100px*/
module.exports = function () {
	function calculateFontSize() {
		var viewportWidth = 750;
		var doc           = document.documentElement;
		//获得设备宽度
		var clientWidth   = document.documentElement.clientWidth;
		clientWidth       = clientWidth > 650 ? 650 : clientWidth;
		var pixelRatio    = window.devicePixelRatio || 1;
//			var scale = pixelRatio > 1 ? 2 : 1;
		//  在小屏上还有bug，暂时恢复
		var scale = 1;

		var dpi = viewportWidth / clientWidth * scale * 160;

//			var viewportNode = getViewportNode(doc);
//			if(!viewportNode){
//				viewportNode = document.createElement('meta');
//				viewportNode.setAttribute('name', 'viewport');
//				document.head.appendChild(viewportNode);
//			}
		var contentList = [
//				'initial-scale=' + (1/scale),
//				'minimum-scale=' + (1/scale),
//				'maximum-scale=' + (1/scale),
			'width=device-width',
			'user-scalable=0',
			'initial-scale=1'
		];
//			contentList.push('target-densitydpi=' + dpi);
//			viewportNode.setAttribute('content', contentList.join(','));

		var fontSize       = 100 * clientWidth / 750;
		doc.style.fontSize = fontSize + 'px';
	};

	window.addEventListener('orientationchange', calculateFontSize, false);
	window.addEventListener('resize', calculateFontSize, false);
	calculateFontSize();
};

function getViewportNode(doc) {
	if (doc) {
		var metaList = doc.getElementsByTagName('meta') || [];
		for (var i = 0, len = metaList.length; i < len; i++) {
			var node = metaList[i];
			var name = node.getAttribute('name');
			if (/viewport/i.test(name)) {
				return node;
			}
		}
	}
	return null;
}


