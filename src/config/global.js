import resize from './resize'
import util from './util'

const width = 360;
const height = 600;

//与时间有关的设置均为毫秒数，本文件底部会自动转化为帧数。
// 大多属性都设有默认值，都可以不用修改   一般只需要修改中文文字
// 所有的文字暂时都不支持换行，字数多的请自行分为多段话。

const config = (function () {
    return {
        // 整体宽高
        width: width,  //---不建议改动
        height: height, //---不建议改动
        //canvas
        canvases: ['fall', 'bg', 'firework', 'dialogue'],//---不建议改动
        // 飘落微粒产生间隔
        snowInterval: 60,
        heartInterval: 15,
        // 飘落微粒属性
        snow: {
            x: undefined,
            y: undefined,
            minSize: 5,
            maxSize: 10,
            size: undefined,
            speed: 0.5,
            opacity: 0.8
        },
        heart: {
            x: undefined,
            y: undefined,
            minSize: 15,
            maxSize: 20,
            size: undefined,
            speed: 1,
        },
        // 飘落的类型('snow', 'heart', 'mix')
        fallType: 'snow',

        // 阶段一
        dialogueOpt: {
            interval: 2000,  //两句话的间隔时间
            speed: 100,   //语速
            color1: '#ff00ff',
            font1: '16px Arial',
            color2: '#f97afb',
            color3: 'red',
            color4: '#ffff00',
            color5: '#00ff00',
            color6: '#00ffff',
            color7: '#fff',
        },
        // type对应上面的color与font  若没有对应的 则默认为color1或font1
        dialogue: [
            { type: 6, name: '男孩', txt: '狗🐶年到了诶，我们一起去放烟花吧！' },
            { type: 2, name: '女孩', txt: '天还这么亮，现在放烟花也不好看。' },
            { type: 2, name: '女孩', txt: '再说你那有烟花吗？' },
            { type: 6, name: '男孩', txt: '我当然有烟花啦。' },
            { type: 6, name: '男孩', txt: '你那有打火机吗？' },
            { type: 2, name: '女孩', txt: '没有呀～' },
            { type: 6, name: '男孩', txt: '那你是怎么点燃我的心的？' },
            { type: 2, name: '女孩', txt: '。。。' },
            { type: 2, name: '女孩', txt: '可是我的心还没有被你点燃呀。' },
            { type: 6, name: '男孩', txt: '别慌，我去买个打火机先。' },
            { type: 2, name: '女孩', txt: '打火机可点不燃我的心。' },
            { type: 6, name: '男孩', txt: '天快黑了，我要为你点燃整片天空。' },

        ],
        // 阶段二
        sunset: 8000,   // 天黑时间

        // 阶段三
        fireworkInterval: [60, 240],// 烟花产生间隔 //---不建议改动
        //烟花的属性
        fireworks: {
            x: undefined,
            y: height,
            xEnd: undefined,
            yEnd: undefined,
            size: 2,
            radius: 2,  //烟花半径
            velocity: 3,  //速率
            opacity: 0.8,
            count: 300,   //炸裂后粒子数
            wait: undefined,  //消失后 => 炸裂  等待时间
            color: undefined,  //烟花颜色
        },
        fireWords: '你的眼睛|真好看|里面有|日月冬夏|晴雨山川|但是|我的眼睛|更好看|因为|里面有你',  // '|' 为分隔符
        // hue:210 lightness 0
        skyColor: 'hsla({hue}, 60%, {lightness}%, 0.2)',
        fireOpt: {
            wordInterval: 3000, //每段话出现的间隔时间
        },

        //阶段四
        titleWords: '一不小心|就和你|一起许愿|永远幸福', // '|' 为分隔符
        titleOpt: {
            gap: 4,
            size: 60,  //最后字的大小
            pSize: 8,
            delay: 4000, //
            distance: 120, //行间距
            e: 5000 //速率
        },

        /*******均不建议改动********/
        //字的参数
        shape: {
            mini: 1,   //组成字的粒子数  mini越大 粒子数越少
            gap: 2,   //粒子的间隔数 必须能被width整除
        },
        word: {
            size: 70,
            y: 120
        },
    }
})();

//ms => 帧
config.dialogueOpt.interval = util.transTime(config.dialogueOpt.interval, 120);
config.dialogueOpt.speed = util.transTime(config.dialogueOpt.speed, 18);

config.sunset = util.transTime(config.sunset, 600);

config.fireOpt.wordInterval = util.transTime(config.fireOpt.wordInterval, 180);
config.fireOpt.denseTime = util.transTime(config.fireOpt.denseTime, 600);

config.titleOpt.delay = util.transTime(config.titleOpt.delay, 240);
config.titleOpt.e = util.transTime(config.titleOpt.e, 240);

resize(config.width, config.height, config.canvases);

export default config
