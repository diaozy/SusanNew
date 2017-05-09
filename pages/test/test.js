var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    /**
     * 初始化emoji设置
     */
    WxParse.emojisInit('[]', "/wxParse/emojis/", {
      "00": "00.gif",
      "01": "01.gif",
      "02": "02.gif",
      "03": "03.gif",
      "04": "04.gif",
      "05": "05.gif",
      "06": "06.gif",
      "07": "07.gif",
      "08": "08.gif",
      "09": "09.gif",
      "09": "09.gif",
      "10": "10.gif",
      "11": "11.gif",
      "12": "12.gif",
      "13": "13.gif",
      "14": "14.gif",
      "15": "15.gif",
      "16": "16.gif",
      "17": "17.gif",
      "18": "18.gif",
      "19": "19.gif",
    });
    /**
     * html解析示例
     */
    var article = `<section style="padding: 10px; border: rgb(39, 170, 234); margin-top: 5px; background-image: none;" donone="shifuMouseDownOther(&#39;shifu_o_005&#39;)" label="Copyright © 2014 playhudong All Rights Reserved." class="active">
    <section class="border" style="width: 0px; height: 0px; margin-top: -15px; margin-right: auto; margin-left: 55px; border-right: 0px solid transparent; border-bottom: 27px solid rgb(39, 170, 234); border-left: 18px solid transparent; float: none;">
        &nbsp;
    </section>
    <section class="color" style="border-radius: 3px; height: 40px; text-align: center; color: rgb(255, 255, 255); line-height: 40px; margin-top: -1px; visibility: visible; min-height: 40px; background-color: rgb(39, 170, 234);">
        <span style="color: rgb(0, 0, 0); font-size: 14px;">↑点击<span style="color: rgb(39, 170, 234);">“<span style="font-size: 14px; color: rgb(255, 255, 255);">Susan英语学堂</span>”</span>免费订阅</span>
    </section>
</section>
<p>
    <br/>
</p>
<p>
    <img style="line-height: inherit;" src="https://mmbiz.qlogo.cn/mmbiz_jpg/Yf5NpblQ4YjALesdzibeNQQlUMIzhAGrZUZnCDCxVzFpZqH2Lv1CqZXp7yxc8l67KjbIJC5XzZUg5Oj7EMicaSvg/0?wx_fmt=jpeg"/><br/>
</p>
<p style="white-space: normal;">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 7px">
    <strong>WHAT</strong><strong><span style="font-family: 宋体">：</span></strong><strong>　　</strong>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 7px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 7px">
    1.What’s your name? &nbsp; &nbsp;<span style="font-family: 宋体;">你叫什么名字？</span><br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 7px">
    &nbsp; My name is Mary. (I am Mary.) &nbsp; &nbsp;<span style="font-family: 宋体;">我叫</span>Mary.　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    2.What’s your telephone number? &nbsp;&nbsp;<span style="font-family: 宋体;">你的电话？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; My telephone number is 68241541. &nbsp; &nbsp;<span style="font-family: 宋体;">我的电话是</span>...　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    3.What class are you in ? &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="font-family: 宋体;">你在哪班？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; I’m in Class 1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体;">我在一班。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    4. What are you good at?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">你哪方面擅长？</span>&nbsp;&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; I am good at English.&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">我擅长英语。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    5.What is he good at?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">他哪方面擅长？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; He is good at Chinese.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">他擅长语文。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    6. What toys do you have ?&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">你有什么玩具？</span>&nbsp;&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; I have a toy train.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">我有一辆玩具火车。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    7. What classes do you have on Monday?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">周一你有什么课？</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp;I have Chinese<span style="font-family: 宋体;">、</span>Math and English.&nbsp;<span style="font-family: 宋体;">我有语文、数学和英语。</span>　　<br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    8. What did you do yesterday?&nbsp;<span style="font-family: 宋体">昨天你干什么了？</span>&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp;I played the piano yesterday.&nbsp;<span style="font-family: 宋体">昨天我弹钢琴了。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    9. What’s your hobby?&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">你的业余爱好是什么？</span>&nbsp;&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp;My hobby is collecting stamps.&nbsp;<span style="font-family: 宋体">集邮。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    10. What’s your favorite colour / sport / food/ animal / toy/ class…?&nbsp;<span style="font-family: 宋体;">你最喜欢的颜色</span>/<span style="font-family: 宋体;">运动</span>/<span style="font-family: 宋体;">食物</span>/<span style="font-family: 宋体;">动物</span>/<span style="font-family: 宋体;">玩具</span>/<span style="font-family: 宋体;">课程是什么？</span>　　
</p>
<p style="font-family: Simsun; font-size: 14px; white-space: normal; line-height: 21px;">
    <span style="text-indent: 21px;">&nbsp; &nbsp; My favorite colour is red.</span><span style="text-indent: 21px; font-family: 宋体;">我最喜欢的颜色是红色。</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 21px">
    　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    11.What animal do you like best ?&nbsp;<span style="font-family: 宋体">你最喜欢什么动物？</span>&nbsp;&nbsp;&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp;I like dogs best.&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">我最喜欢狗。</span>　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    12.What season does he like best?&nbsp;&nbsp;<span style="font-family: 宋体">他喜欢什么季节？</span>&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp;He likes spring best.&nbsp;&nbsp;<span style="font-family: 宋体">他最喜欢春天。</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    13. What kind of TV shows do you like best?&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">你最喜欢的电视节目是什么？</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 14px">
    &nbsp; I like Children’s shows best.&nbsp;<span style="font-family: 宋体">我最喜欢儿童节目</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 14px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    14. What time is it on?&nbsp;&nbsp;<span style="font-family: 宋体">什么时候上演？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; It’s on at 9:00.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9<span style="font-family: 宋体">点。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    15. What channel is it on?&nbsp;&nbsp;<span style="font-family: 宋体">几频道？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; It’s on Channel 3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3<span style="font-family: 宋体">频道。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    16. What do you think of it?&nbsp;<span style="font-family: 宋体">你认为它怎么样？<br/></span>&nbsp; &nbsp; It’s interesting.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">很有趣。</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    17. What’s the matter?&nbsp;&nbsp;<span style="font-family: 宋体">你怎么了？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; My finger hurts. &nbsp;<span style="font-family: 宋体;">我手指受伤了</span>&nbsp;&nbsp;I feel bad.&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体;">我感到很糟糕。</span>　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    18. What’s wrong?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">你怎么了？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; I have a stomachache.&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">我胃疼。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    19. What should I do ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">我该怎么做？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; You should wash your hands.&nbsp;<span style="font-family: 宋体">你应该洗手。</span>&nbsp; 　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 28px">
    　　<img style="width: 100%; height: auto;" src="https://mmbiz.qlogo.cn/mmbiz_jpg/Yf5NpblQ4YjALesdzibeNQQlUMIzhAGrZlpSBOHe6teY5457yyicO65K8BCl17HfBleBnkvnJGTiaeb1Xlgp1geng/0?wx_fmt=jpeg"/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 28px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    20. What do you often do on Monday ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">周一你经常做什么？</span>&nbsp;　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; I often clean my room.&nbsp;<span style="font-family: 宋体">我经常整理房间。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    21. What does she often do at weekends?&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">她周末经常做什么？</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; She often feeds the fish.&nbsp;<span style="font-family: 宋体">她经常喂鱼。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    22. What chores do you have to do at home?&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">你在家要做什么家务？</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 14px">
    &nbsp; I have to do the dishes.&nbsp;<span style="font-family: 宋体">我得刷碗。</span>　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 14px">
    　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    23. What are you doing?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">你正在做什么？</span>&nbsp;&nbsp;&nbsp;&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; I am watching TV.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">我正在看电视。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    24. What is he doing ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">他正在做什么？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; He is playing football.&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">他正在踢足球。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    25. What are you going to do after school ?<span style="font-family: 宋体">放学后你打算做什么？</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 14px">
    &nbsp; I’m going to kick a shuttlecock.<span style="font-family: 宋体">我打算踢毽子。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 14px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    26. What do you want for your birthday?&nbsp;&nbsp;<span style="font-family: 宋体">生日你想要什么？</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; I want a birthday cake.<span style="font-family: 宋体">我想要生日蛋糕。</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    27.What do you want to do<span style="font-family: 宋体;">？你们想干什么？</span>&nbsp;
</p>
<p style="margin-left: 14px; font-family: Simsun; font-size: 14px; white-space: normal; line-height: 21px;">
    &nbsp;We want to go to the movies.<span style="font-family: 宋体">我们想去看电影。</span>　　
</p>
<p style="margin-left: 14px; font-family: Simsun; font-size: 14px; white-space: normal; line-height: 21px;">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    28. What does she want to do ?<span style="font-family: 宋体">她想干什么？</span>&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; She wants to make a model plane.&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">她想做飞机模型。</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    29.What do you want to be in the future?&nbsp;<span style="font-family: 宋体">将来你想做什么？</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp;I want to be an engineer.&nbsp;<span style="font-family: 宋体">我想当一名工程师。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    30. What is she like?&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">她是什么样子的。（内在）</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; She is hardworking.&nbsp;&nbsp;<span style="font-family: 宋体">她是很刻苦学习的。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    31. What does he look like?&nbsp;<span style="font-family: 宋体">他看起来是什么样子的？（外在）</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; He&nbsp;is tall.&nbsp;<span style="font-family: 宋体">他个子高.His&nbsp;</span>hair is black.&nbsp;<span style="font-family: 宋体">他的头发是黑色的。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; He wears a pair of glasses.<span style="font-family: 宋体">他带着一副眼镜。</span>　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    32.What do you need to make stir-fried tomato and eggs<span style="font-family: 宋体;">？</span>&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <span style="font-family: 宋体;">&nbsp; &nbsp;你需要什么原料做西红柿炒鸡蛋</span>?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;　　<br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp;I need oil<span style="font-family: 宋体;">、</span>sugar<span style="font-family: 宋体;">、</span>salt<span style="font-family: 宋体;">、</span>tomatoes and eggs.
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <span style="font-family: 宋体;">&nbsp; &nbsp;我需要油、糖、盐、西红柿和鸡蛋。</span>　
</p>
<p style="margin-left: 24px; font-family: Simsun; font-size: 14px; white-space: normal; line-height: 21px;">
    　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    33. What’s your father’s job?&nbsp;<span style="font-family: 宋体">你父亲是做什么的？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; He is a doctor.&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">他是一名医生。</span>　　<span style="text-indent: 14px;">　</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px;text-indent: 14px">
    　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    34. What is Beijing　famous for?&nbsp;<span style="font-family: 宋体">北京什么著名？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp;It’s famous for the Forbidden City.<span style="font-family: 宋体">故宫有名。</span>　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    35. What shape is it?&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体;">它是什么形状的？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; It’s circle.&nbsp;<span style="font-family: 宋体">它是圆形的。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    36. What colour is it?&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">他是什么严颜色的？</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; It’s red.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">是红色的。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    37. What’s the weather like today?<span style="font-family: 宋体">天气怎么样？</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; It’s fine.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">天气很好。</span>　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    38. What season is it?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体;">这是什么季节？</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; It’s spring<span style="font-family: 宋体;">。</span>&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体;">是春天。</span>　　
</p>
<p style="margin-left: 35px; font-family: Simsun; font-size: 14px; white-space: normal; line-height: 21px;">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    39. What day is today?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">今天星期几？</span>&nbsp;&nbsp;&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; It’s Wednesday.&nbsp;&nbsp;&nbsp;<span style="font-family: 宋体">今天星期三。</span>　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    40. What time is it? &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="font-family: 宋体">几点了</span>?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; It’s 12.00&nbsp;&nbsp;&nbsp;&nbsp;12<span style="font-family: 宋体">点了。</span>　　
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    <br/>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; It’s time for lunch. &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="font-family: 宋体">该吃午饭了。</span>
</p>
<p style=";font-family: Simsun;font-size: 14px;white-space: normal;line-height: 21px">
    &nbsp; &nbsp; I get up at 6:00. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-family: 宋体">我六点钟起床</span>　
</p>
<p style="white-space: normal;">
    <br/>
</p>
<p>
    <img src="https://mmbiz.qlogo.cn/mmbiz_jpg/Yf5NpblQ4YjALesdzibeNQQlUMIzhAGrZGMMy0qLxYAsmENOChBOib2Rr0UVY71r9frWiakezPMfQKIYJDQGobY4A/0?wx_fmt=jpeg"/>
</p>
<section class="RankEditor active" style="margin-top:20px;">
    <section>
        <section style="display: inline-block; min-width: 1em; height: 40px; background-color: rgb(50, 179, 232); line-height: 40px; vertical-align: middle; padding-right: 10px; padding-left: 10px; color: rgb(255, 255, 255);">
            <section style="min-width: 1em; height: 40px; font-size: 20px; line-height: 40px; color: rgb(255, 255, 255);">
                <span style="font-size: 15px;">可能你还想看</span>
            </section>
        </section><span style="display: inline-block; width: 0px; height: 0px; border-width: 20px; border-style: solid; border-color: transparent transparent transparent rgb(50, 179, 232); border-image: initial; vertical-align: middle;"></span>
    </section>
    <section style="margin-left: 30px; border-top: 2px dashed rgb(50, 179, 232); border-right: 2px dashed rgb(50, 179, 232); border-bottom: 2px dashed rgb(50, 179, 232); border-image: initial; border-left: none; padding-top: 20px; padding-bottom: 20px; margin-top: -21px;">
        <section class="add" style="margin-left:-20px;">
            <p class="active brush" style="color:rgb(6,6,6);">
                <span style="font-size:20px;margin-right:10px;">⊙</span><span style="margin-right: 10px; font-size: 14px;">公众号内输入- <strong>语法名词</strong> ，语法名词可数不可数深度讲解</span>
            </p>
            <p class="active brush" style="color:rgb(6,6,6);">
                <span style="font-size:20px;margin-right:10px;">⊙</span><span style="font-size:14px;"><span style="color: rgb(6, 6, 6); font-size: 14px; white-space: pre-wrap;">公众号内输入-<strong> 语法代词</strong> ，代词用法深度归纳总结</span></span>
            </p>
            <p class="active brush" style="color:rgb(6,6,6);">
                <span style="font-size:20px;margin-right:10px;">⊙</span><span style="font-size:14px;">还有更多等待你的发现...</span>
            </p>
        </section>
    </section>
</section>
<section data-role="outer" label="Powered by wxb-style.com" style="font-family: 微软雅黑;" class="active">
    <section class="_wxb-style" style=" border: 0px none;  box-sizing: border-box; ">
        <section class="_wxb-style" data-tools="135编辑器" data-id="87925" style="   box-sizing: border-box; ">
            <section class="layout" style="font-size: 14px; margin: 5px auto; white-space: normal; box-sizing: border-box;">
                <section style="margin-right: 1.2em; margin-left: 1.2em; box-sizing: border-box;">
                    <section style="display: inline-block; float: left; box-sizing: border-box;">
                        <section style="width: 0.6em; height: 1.4em; display: inline-block; border: 2px solid rgb(254, 254, 254); color: rgb(255, 255, 255); box-sizing: border-box; background-color: rgb(0, 172, 255);">
                            <br/>
                        </section>
                        <section style="width: 0.6em; height: 1.4em; display: inline-block; margin-left: 0.2em; border: 2px solid rgb(254, 254, 254); color: rgb(255, 255, 255); box-sizing: border-box; background-color: rgb(0, 172, 255);"></section>
                    </section>
                    <section style="text-align: right; box-sizing: border-box;">
                        <section style="width: 0.6em; height: 1.4em; display: inline-block; border: 2px solid rgb(254, 254, 254); color: rgb(255, 255, 255); box-sizing: border-box; background-color: rgb(0, 172, 255);"></section>
                        <section style="width: 0.6em; height: 1.4em; display: inline-block; margin-left: 0.2em; border: 2px solid rgb(254, 254, 254); color: rgb(255, 255, 255); box-sizing: border-box; background-color: rgb(0, 172, 255);"></section>
                    </section>
                </section>
                <section style="padding: 15px; margin-top: -0.9em; color: rgb(255, 255, 255); box-sizing: border-box; background-color: rgb(0, 172, 255);">
                    <section class="135brush" style="border: 2px solid rgb(254, 254, 254); padding: 20px 15px; box-sizing: border-box;">
                        <p style="white-space: normal;">
                            <span style="color: rgb(255, 255, 255); font-family: 微软雅黑; font-size: 14px;">如果你喜欢我们的文章，请点击右上角<span style="color: rgb(255, 255, 255); font-family: 微软雅黑; font-size: 18px;"> … </span>转发，帮助更多学习英语的人们</span>
                        </p>
                    </section>
                </section>
            </section>
        </section>
    </section>
</section>
<section data-role="outer" label="Powered by wxb-style.com" style="font-family: 微软雅黑;" class="active">
    <section class="_wxb-style" data-tools="135编辑器" data-id="86606" style="   box-sizing: border-box; ">
        <section style=" margin-top: 0.5em; margin-bottom: 0.5em; padding: 0.5em; text-align: center; width: 100%;  box-sizing: border-box; " data-width="100%">
            <section style="padding: 10px; box-shadow: rgba(159, 160, 160, 0.498039) 0px 0px 10px; display: inline-block; vertical-align: top; box-sizing: border-box;">
                <section style="padding: 7px; box-shadow: rgba(0, 0, 0, 0.290196) 0px 0px 10px inset; box-sizing: border-box;">
                    <p style="white-space: normal;">
                        <br/>
                    </p>
                    <p style="white-space: normal;">
                        <strong><span style="font-size: 18px;">Susan英语学堂</span></strong>
                    </p>
                    <p style="white-space: normal;">
                        <span style="font-size: 14px;">长按二维码关注，为英语学习助力</span>
                    </p>
                    <p style="white-space: normal;">
                        <span style="font-size: 14px;">输入【英语学习】获取最新学习资料</span>
                    </p>
                    <section class="_wxb-style" style="   border: 0px none; box-sizing: border-box; ">
                        <section style="   box-sizing: border-box; ">
                            <p>
                                <img style="width:100%" src="https://mmbiz.qlogo.cn/mmbiz_jpg/0V2opWlMyhzAdHh8ZrcFetNVcicJH9ecw8YnicelSpfKIHibVM6mgGX0EHzxqWsIScBeic8fBVESJ3TeY8ryf9YXEA/0?wx_fmt=jpeg"/>
                            </p>
                        </section>
                    </section>
                    <section style="clear: both; box-sizing: border-box;"></section>
                </section>
            </section>
        </section>
    </section>
    <p style="white-space: normal;">
        <span style="font-size: 12px; color: rgb(127, 127, 127);">部分内容整理自网络，如有侵权请联系删除</span>
    </p>
</section>
<p>
    <br/>
</p>
<section class="active" style="padding: 10px; border: currentcolor; margin-top: 5px; background-image: none;" donone="shifuMouseDownOther(&#39;shifu_o_016&#39;)" label="Copyright © 2014 playhudong All Rights Reserved.">
    <section style="background: rgb(238, 239, 239); border-radius: 4px; height: 40px; text-align: center; line-height: 40px; margin-top: -1px; visibility: visible; min-height: 40px; box-shadow: 0px 3px 5px rgb(190,190,190);">
        <span style="color: rgb(110, 109, 109); font-size: 14px;"><span style="font-size: 24px; margin-left: 10px; float: left;">↙</span> 点击下方“阅读原文”查看更多</span>
    </section>
</section>`;
		
    
    WxParse.wxParse('article', 'html', article, that, 5);


    /**
     * 多数据解析示例
     */
    var replyHtml0 = `<div style="margin-top:10px;height:50px;">
		<p class="reply">
			wxParse回复0:不错，喜欢[03][04]
		</p>	
	</div>`;
    var replyHtml1 = `<div style="margin-top:10px;height:50px;">
		<p class="reply">
			wxParse回复1:不错，喜欢[03][04]
		</p>	
	</div>`;
    var replyHtml2 = `<div style="margin-top:10px;height:50px;">
		<p class="reply">
			wxParse回复2:不错，喜欢[05][07]
		</p>	
	</div>`;
    var replyHtml3 = `<div style="margin-top:10px;height:50px;">
		<p class="reply">
			wxParse回复3:不错，喜欢[06][08]
		</p>	
	</div>`;
    var replyHtml4 = `<div style="margin-top:10px; height:50px;">
		<p class="reply">
			wxParse回复4:不错，喜欢[09][08]
		</p>	
	</div>`;
    var replyHtml5 = `<div style="margin-top:10px;height:50px;">
		<p class="reply">
			wxParse回复5:不错，喜欢[07][08]
		</p>	
	</div>`;
    var replyArr = [];
    replyArr.push(replyHtml0);
    replyArr.push(replyHtml1);
    replyArr.push(replyHtml2);
    replyArr.push(replyHtml3);
    replyArr.push(replyHtml4);
    replyArr.push(replyHtml5);


    for (let i = 0; i < replyArr.length; i++) {
      WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
      if (i === replyArr.length - 1) {
        WxParse.wxParseTemArray("replyTemArray",'reply', replyArr.length, that)
      }
    }
  }


})
