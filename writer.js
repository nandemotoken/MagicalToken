//--------------ここからメイン処理---------------
//------writerはボタンが押されたときに動くようにするので、ボタンと関連させる関数を作ってメイン処理を入れる--------

function myButtonClicked() {

	//metamaskの準備
	web3js = new Web3(web3.currentProvider);
	//スマートコントラクト読み込み
	mycontract = new web3js.eth.Contract(ABI, Address);

	//1.00-beta.36と表示されるのが正しい
	console.log("writer.js_is_checking_web3.js_version..." + Web3.version);

	//id100の数値入力欄から値を読み取って、F12キーで出てくるところに表示(デバッグ用)
	console.log(document.getElementById('id100').value);


	web3js.eth.getAccounts().then((resolve) => {
		//上記はコントラクトへトランザクションを送るための定型文(Metamaskが重いのでthenでの処理待ちが必須)
		mycontract.methods.setnumber(document.getElementById('id100').value).send({ from: resolve[0] });
		console.log("resolve[0]_is_your_Address:" + resolve[0]);
	});
}