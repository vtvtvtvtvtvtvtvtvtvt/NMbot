const { TwitterApi } =require('twitter-api-v2');
const moment = require('moment-timezone');
const conf = require('config');

const agents=[
	{
		itemName: 'キャシーイヤリング',
		bot: new TwitterApi(conf.bot1)
	},
	{
		itemName: 'ブリッツリング',
		bot: new TwitterApi(conf.bot2)
	},
	{
		itemName: 'スコルの牙',
		bot: new TwitterApi(conf.bot3)
	}
];

async function postTweet(agent, str) {
	try {
		ret= await agent.bot.v2.tweet(str);
        console.log("success!: "+ret.data.text);
	} catch (e) {
        console.error(e)
    }
}

for( var i=0; i<agents.length; i++ ) {
    postTweet(agents[i], "【テスト】アカウント引き継ぎに伴うテスト投稿です。"+agents[i].itemName);
}
