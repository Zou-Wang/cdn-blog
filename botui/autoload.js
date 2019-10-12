(function($) {
	var botui = new BotUI('botui-app'); // 参数是容器的id

	botui.message.bot({ // 第一条信息
		delay: 200,
		content: 'Hi, there👋'
	}).then(function () {
		return botui.message.bot({ // 第二条信息
			delay: 1000, // 等待1秒
			content: '这里是Toretto'
		});

	}).then(function () {
		return botui.message.bot({ // 第三条信息
			delay: 1000, // 等待1秒
			content: '一个傲娇的Java程序员'
		});



	}).then(function () {
		return botui.action.button({ // 与用户交互
			delay: 1000,
			action: [
				{
					text: ' 然后呢？ 😃',
					value: 'sure'
				},
				{
					text: '少废话啦😣',
					value: 'skip'
				}
			]
		});


	}).then(function (res) {
		if(res.value == 'sure') {
			tutorial();
		}
		else if(res.value == 'skip') {
			end();
		}
	});

	var tutorial = function () {
		botui.message.add({
			delay: 1000,
			content: "😘"
		}).then(function () {
			return botui.message.add({
				delay: 1000,
				content: '呐，告诉窝你是谁趴'
			});
		}).then(function () {
			return botui.message.add({
				delay: 1200,
				content: '写上你的名字（填写后按回车键）'
			});
		}).then(function () {
			return botui.action.text({
				delay: 800,
				action: {
					value: 'Toretto',
					placeholder: '填写你的名字'
				}
			});
		}).then(function (res) {
			return botui.message.bot({
				delay: 500,
				content: res.value + ' 很高兴认识你呢'
			});


		}).then(function () {
			return botui.message.add({
				delay: 1200,
				content: '呐~窝也介绍一下自己吧'
			});
		}).then(function (res) {
			return botui.message.bot({
				delay: 1400,
				content: '目前在大连高新区做软件开发'
			});

		}).then(function (res) {
			return botui.message.bot({
				delay: 1400,
				content: '主要负责Java开发，当然也会兼顾前台的部分工作'
			});

		}).then(function (res) {
			return botui.message.bot({
				delay: 1400,
				content: '擅长Java，Spring，Spring MVC，Mybatis，SpringBoot，MySql，Vue 熟悉HTML/JS/jQuery'
			});

		}).then(function () {
			return botui.action.button({
				delay: 1000,
				action: [{
					text: '为什么叫Toretto呢🤔',
					value: 'erCi'
				}]
			});
		}).then(function (res) {
			return botui.message.bot({
				delay: 1400,
				content: '因为我真的是速度激情粉，更喜欢老大Toretto'
			});

		}).then(function () {
			return botui.action.button({
				delay: 1000,
				action: [{
					text: '为什么叫春原庄的雪呢🤔',
					value: 'erCi'
				}]
			});
		}).then(function (res) {
			return botui.message.bot({
				delay: 1400,
				content: 'emmm..春原庄的管理员，雪是我女朋友的名字'
			});

		}).then(function (res) {
			return botui.message.bot({
				delay: 2500,
				content: '呐~在窝博客玩耍吧(/▽＼=)'
			});

		});

	};

	var end = function () {
		botui.message.add({
			delay: 1200,
			content: '![](http://zouwang.vip/wp-content/uploads/2019/09/a1c4cd0452528b572af37952489372b6.md_.jpg)'

		});
	};

})(jQuery);
