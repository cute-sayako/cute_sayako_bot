const { Composer } = require('micro-bot')

function randomIntLessThan(n) {
    return Math.floor(Math.random() * n)
}

function getRandomElement(arr) {
    return arr[randomIntLessThan(arr.length)]
}

function generateRandomSentence() {
    return fillTemplate(getRandomElement(sentences))
}

function fillTemplate(template) {
    return template.replace(/[A-Z]{2}/g, match => getRandomElement(words[match]))
}

function generatePoem(n) {
    return Array(n || 9).fill('').map(v => generateRandomSentence()).join('\n')
}

var sentences = ['MM在DD', 'XX的MM在DD', 'MM是XX的', 'TTXX的MM', '从MM到MM', '从XX的MM到XX的MM', 'MMDJMM', 'XX的MMDJXX的MM', '让MM变得XX吧', 'TTXX的MM', '在MM的MM', 'TTXX的MM和XX的MMXX的MM和MM', 'TTDD着XX的MM和XX的MM', '为了MMMM在DD着', 'MM不再XX地DD', 'TTMM在DD', 'TTMM在DD', 'TTTTTT', 'TTMMMM和MM', 'TTMM', 'TT我的MM', 'TT我的XX的MM', '我要DJ你', '你DJ我吧', 'DD吧', 'MMDD吧', 'DD吧XX的MM', 'MM是XX的', 'DD吧MM', '因为MM是XX的', '如果MM已经DD了你就DD吧', '如果MM是XX的你就DD吧', '我是MM我是MM', '我是XX的MM我是XX的MM', '你是MM你是XX的MM', '当MMDD时我要DD', 'MMMMMM', 'MM把MMDJ了', '我是MM不是MM', 'MM把我DJ吧', '你把我DJ吧', 'MM曾经是XX的', 'TTMM是多么XX', '看MM是多么XX', '我DD直到MM已经DD', '在那MM旁我DD着', '你是我的MM我是你的MM', '你是我的XX的MM', '你就像XX的MM', '想从前MM是多么XX', 'MMXX地DJ着MM', 'XX的MM像MM', 'MM请DD吧', 'MM是XX的但他已经DD了', 'TT她是我的XX的MM', '在MM中MM在DD', '在MM里XX的MM在DD', '在MM旁MM在DD', '我看到XX的MM在DD着', '我看到XX的MM在DDMM在DJ着MM', '我面对着XX的MM和XX的MM', '在这XX的MM中没有MM只有MM', 'MMMM和MM在一起DD着', '我想DD我想XX地DD', 'TTMM是如此的XX', 'TT我多想XX地DD', '我们都是XX的MM我们要DD', 'MM在DJMM', 'MM在DJ着MM', 'MM在DJ着XX的MM', 'MM我要DJ你', 'XX的MM我想DJ你', '在那XX的MMMM在DJ着MM', 'MM般的MM在DD', '让MMDD吧', 'MM不再DD了', '对着XX的MM我DD着', 'XX的MM从MM飞来', 'XX的MM向MM飞去', 'MMXX得DD', 'MMXX得象MM', '我XX得DD', '你XX得象MM', 'MM被DD得DD', 'MM被DD得像MM', '到处都是MM到处都是MM', '到处都是XX的MM和XX的MM', '是的这就是XX的MM', '只要MM仍然是XX的MM就会DD下去', '只要MM仍然在DDMM就还是XX的', 'TT我的MM我的MM我的MM', 'TT一切都在DD着', '一切都是XX的', '一切都是XX的只有MM是XX的', '一切都在DD着只有MM在DD', 'MM被DJ了', '在MM的周围只有XX的MM', '不我不想DD', '并不是MM在DD而是MMDD了', 'MM不是XX的而是XX的', '我在DJMM', 'XX的MM开始DD了', 'TT这XX的MM这XX的MM啊', 'TT这XX的MM啊', 'MMDD了MMDD了', 'XX的MMDD了', 'XX的MM已经DD了', '我DD了', 'XXXXXX', 'XX的XX的和XX的', 'XX的MMXX的MM和XX的MM', 'XX在MM上出现', 'XX在MM上DD', 'MM是XX的是XX的是XX的', 'TTXX的XX的XX的MM', 'XX的XX的和XX的MM在DD', 'TTXX的XX的XX的XX的MM', 'MM和MM和MM和MM还有MM都在DD', 'XX的MM和XX的MM和XX的MM还有XX的MM都在DD', 'MM是XX的XX的XX的XX的而且还是XX的', '从MM到MM从MM到MM从MM到MM从MM到MM', '我要DD我要DD我要DD我要DD我还要DD呢', 'DD吧DD吧DD吧DD吧XX的MM', 'MM和MM和MM和MM还有MM在一起DD着', 'XX的MMXX的MMXX的MM还有XX的MM在同时DD着', 'TT我的MM我的MM我的MM我的MM和我的MM', 'TTMM在DDMM在DDMM在DDXX的MM在DD', 'TTXX的MMXX的MMXX的MM和XX的MM', '我想DD我想DD我想DD我想DD我还想DD', '到处是MM到处是MM到处是MM到处是XX的MM', 'TT我是MM我是MM我是MM我是MM我还是XX的MM', '我在DJMM在DJMM在DJMM在DJMM还在DJMM', '一切都在DD一切都在DD一切都在DD啊', '因为MM是XX的', '所以MM是XX的', '因为MM在DD', '所以MM在DD']

var words = []
words.DD = ['纤维消解', '消散', '余终构造', '堪氏扩张', '正规化', '层化', '叠化', '导出', '证明', '投射', '内射', '同构于', '单纯局部化', '求解', '计算', '推出', '拉回', '乘积', '余积', '双积', '幺积', '张量积', '自由化', '遗忘化', '伴随', '有限生成', '有限展示', '局部表示', '表示', '内积', '楔积', '坍积', '考虑', '范畴化']
words.DJ = ['纤维消解', '消散', '余终构造', '堪氏扩张', '正规化', '层化', '叠化', '导出', '证明', '投射', '内射', '同构于', '单纯局部化', '求解', '计算', '推出', '拉回', '乘积', '余积', '双积', '幺积', '张量积', '自由化', '遗忘化', '伴随', '有限生成', '有限展示', '局部表示', '表示', '内积', '楔积', '坍积', '考虑', '范畴化']
words.TT = ['啊！', '噢！', '嘘！', '唉！', '呀！', '喔！', '哈！', '咦！', '啊呀！', '唉呀呀！', '哦！', '欧！', '哈哈哈哈！', '哦！', '天啊！']
words.XX = ['拓扑', '伴随', '光滑', '可微', '可积', '有解', '切', '法', '拟同构', '殆凝聚', '算法', '泛', '构造', '直觉', '公式化', '自由', '遗忘', '典范', '自然', '公理', '单纯', '局部', '全局', '足点', '几何', '代数']
words.MM = ['边配对', '测地多边形', '常值层', '重数一', '除子类群', '单值变换', '戴德金函数', '阿贝尔-雅可比映射', '等变', '典范从', '叠', '迪利克雷领域', '埃舍尔-志村同构', '爱森斯坦级数', '欧拉示性数', '反对合', '分圆特征标', '傅里叶系数', '弗里克对合', '复乘', '福熙群', '余有限', '无挠', '第一类', '复环面', '赋值', '解析几何-代数几何原理', '伽罗瓦表示', '高斯-伯奈公式', '格', '模', '海舍不变量', '海克特征形式', '霍奇结构', '赫尔维茨函数', '雅可比三重积', '级', '尖点', '正则', '尖点形式', '交比', '基本区域', '阶', '结点', '结构常数', '截面', '解析化', '级结构', '茎', '旧形式', '极限圆', '局部常值层', '局部系统', '局部有限', '绝对值', '开折', '可公度', '可积系统', '亏格', '兰博级数', '林德洛夫假设', '菱形算子', '离散子群', '模不变量', '亚纯', '半整权', '殆全纯', '抛物上同调', '皮特森内积', '弗拉芒-林德洛夫原理', '皮卡德小定理', '平展上同调', '泊松求和公式', '齐次坐标', '奇迹子群', '全纯微分', '全实域', '拉马努金同余', '黎曼假设', '赛尔对偶定理', '上同调对应', '商拓扑', '双曲度量', '双有理变换', '四元数代数', '算术子群', '超奇异椭圆曲线', '维尔斯特拉斯方程']

console.log(generatePoem(100))

const bot = new Composer

bot.command('poem', (ctx) => {
    let poem = generatePoem(1)[0]
    console.log(poem)
    ctx.reply(poem)
})

module.exports = bot

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))