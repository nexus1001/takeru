<img src="ita.gif" name="sushi">

<script type="text/javascript">
img = new Array("ita.gif","ikura.gif","ebi.gif","maguro.gif","toro.gif","uni.gif"); //*1
count = -1; //*2
imgTimer();

function imgTimer() {
	//画像番号
	count++; //*3
	//画像の枚数確認
	if (count == img.length) count = 0; //*4
	//画像出力
	document.sushi.src = img[count]; //*5
	//次のタイマー呼びだし
	setTimeout("imgTimer()",1000); //*6
}
</script>