# Eureka NM X(Twitter) BOT

## Overview
FF14の禁断の地エウレカにおける、特定のNMが出現する可能性がある天候の到来を通知するX（Twitter）BOT用のソースコードです。  
例（デモ）：  
https://twitter.com/CopycatCassie  
https://twitter.com/King_Arthro  
https://twitter.com/Iam_Skoll  

## Prerequisites
- npm >= 9.8.1
- node >= 18.17.1
- 出現天候を通知したいNM1体に対して、Twitter API v2が利用可能なXアカウントが1つずつ（3体なら3つ）必要です。

## Install
```
npm i
```

## Usage
- config/default.jsonとして、Twitter開発者ポータルから取得したアクセストークン類を以下の用に記述する。
```
{
	"bot1" : {
		"appKey" : "*************************",
		"appSecret" : "**************************************************",
		"accessToken" : "*******************-******************************",
		"accessSecret" : "*********************************************"
	},
	"bot2" : {
		"appKey" : "*************************",
		"appSecret" : "**************************************************",
		"accessToken" : "*******************-******************************",
		"accessSecret" : "*********************************************"
	},
	"bot3" : {
		"appKey" : "*************************",
		"appSecret" : "**************************************************",
		"accessToken" : "*******************-******************************",
		"accessSecret" : "*********************************************"
	}
}
```
注： bot1->キャシー用、bot2->カニ用、bot3->スコル用

-　以下でサービス起動（cronやtmuxを利用すると良いでしょう。）
```
node test.js live
```

## About debug
Twitterアカウントへのアクセスを伴わせずに、BOTの動作だけ確認したい場合は上記のコマンドから引数"live"を抜いて実行してください。  
現在時刻からある程度未来までの投稿予定内容がコンソールへ吐き出されます。  

```
node test.js
```

## Reference
- [eorzea-weather](https://github.com/eorzea-weather/node-eorzea-weather/)
現実の時刻からエオルゼア内での天気を求める方法についてかなり参考にさせて頂きました。

## FAQ
Q: TwitterアカウントのAPI利用申請やアクセストークンの作り方がよくわかりません。。  
A: Xの現状を見るに、BOTを長期運用する場合はそこへの対応力が今後必要になってくると思われますので、頑張ってお調べしながらトライすることをオススメします。。（質問やアドバイス要望などは出来るだけ受付けます。）  

Q: どうして3つもアカウントが必要なのでしょうか？  
A: 以下の理由です。  
- 無料アカウントだと 50投稿/24h のAPI投稿制限があり、1体ずつでないと瞬時的に制限を超える日が出てきてしまう。  
NM一体あたりの平均的な投稿数は、およそ 15投稿/24h を想定しているので、それを3倍すると。。という理屈です。  
- 3アカウントの中でも通知の需要に格差があるので、安易にまとめられない  

## Author
[twitter](https://twitter.com/ErubisoP)

## Licence
[MIT license](https://github.com/vtvtvtvtvtvtvtvtvtvt/NMbot/blob/main/LICENSE)  

FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.  
FINAL FANTASY XIV © 2010 - 2024 SQUARE ENIX CO., LTD. All Rights Reserved.
