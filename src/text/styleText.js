export default  `
/* Inspired by http://strml.net  , https://jirengu-inc.github.io/animating-resume/dist/ 
* 大家好,我是jeff，今天我来给大家直播编程
* 这张页面好无聊啊！我们先加一些样式效果吧！
* 首先,先来添加一下全局的动画效果！
*/

*{
    -webkit-transition: all 1.3s;
    transition: all 1.3s;
  }
  /* 我擦 好像没用...*/
  /* 再试一次看看 这次变下背景颜色*/
  
  html {
    background: rgb(0,43,54);
  }
  .token.comment{ 
      color: white 
  }
  
  
  /* 
  *  可以了
  *  你的眼睛是不是要瞎了?那字体也变一下呗? 
  *  
  */
  
  .style__work__area{
    color: rgb(222,222,222); 
    overflow: scroll;
    background: rgb(48, 48, 48);
    border: 1px solid #ccc;
    margin: 5% auto;
    width: 96%;
    height: 90%;
    padding: 10px 10px 20px;
    font-family: monospace;
    box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
    white-space: pre-wrap;
    outline: 0;
  }
  
 /* 
  * 接下来我们玩一下「代码高亮」,弄个css编辑器吧 ！
  */
  
  
  .token.comment{ color: #857F6B; font-style: italic; }
  .token.selector{ color: #E69F0F; }
  .selector .key { color: #64D5EA; }
  .token.property{ color: #64D5EA; }
  .token.punctuation{ color: #64D5EA; }
  .token.function{ color: #BE84F2; }
  
  /*
  
  * 感觉可以
  * 嗯,我们准备找点地方写一点其他的东西！
  * 3，
  * 2，
  * 1
  */
  
  .style__work__area {
    height: 20%;
    margin: 5% auto 0;
    transform-origin: top;
    transform: perspective(500px) rotateX(-10deg);
  }
  
  /*
  * 接下来我们写一份简历好不好？
  * 首先我们先准备一个打字框！
  */
  
  .resume__work__area{
    margin: 5% auto;
    color: rgb(222,222,222); 
    overflow: auto;
    padding: 10px 10px 20px;
    border: 1px solid #ccc;
    width: 96%;
    height:60%;
    background: rgb(48, 48, 48); 
    transform-origin: bottom;
    transform: perspective(500px) rotateX(5deg);
  }
  
  /*
  * 好,我们立马开写！！
  */
  `