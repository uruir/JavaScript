// 点击数字，
var numberClick = function (shuzi) {
    var xianshi = document.getElementById('xianshi').value
    // 显示框为 0 时
    if (xianshi == '0') {
        if (shuzi == '0') { // 点击 0 无效
            return
        } else { // 否则显示点击的数字
            document.getElementById('xianshi').value = shuzi
        }
    } else { // 否则每点击一个数字自动添加到末尾
        document.getElementById('xianshi').value = xianshi + shuzi
    }
}
// 点击加减乘除
var operatorClick = function (value) {
    var xianshi = document.getElementById('xianshi').value
    // 如果显示框最后一个字符是空格则替换掉最后一个操作符，否则添加操作符和空格
    if (xianshi[xianshi.length - 1] == ' ') {
        xianshi = xianshi.substring(0, xianshi.length - 2) + value + ' ' 
    } else {
        xianshi = xianshi + ' ' + value + ' '
    }
    document.getElementById('xianshi').value = xianshi
}
// 点击“=”
var equalClick = function () {
    nums = document.getElementById('xianshi').value.split(' ')
    var result
    // 先乘除
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == '*' || nums[i] == '/') {
            // 如果最后输入的是 * 或 / 则尾数为 1，比如 1 + 2 * 转化为 1 + 2 * 1
            nums[i + 1] == '' && (nums[i + 1] = 1)
            // 如果数组长度大于 1 说明还有其它运算，否则余下的数就是最终结果
            nums[i] == '*' ? result = nums[i - 1] * nums[i + 1] : result = nums[i - 1] / nums[i + 1]
            i > 1 ? nums.splice(i - 1, 3, result) && i-- : nums.splice(0, 3, result)
        } 
    }
    for (var i = 0; i < nums.length; i++) {
        // 后加减
        if (nums[i] == '+' || nums[i] == '-') {
            nums[i] == '+' ? result = nums[i - 1] + nums[i + 1] : result = nums[i - 1] - nums[i + 1]
            nums.splice(0, 3, result)
            nums.length > 1 && i--
        }
    }
    document.getElementById('xianshi').value = nums[0]
}
// 点击“清零”
var cleanClick = function () {
    document.getElementById('xianshi').value = '0'
}