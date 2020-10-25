/*
* 栈：栈的底层实现就是一个数组
* 栈的特点：先进后出
* */

const Stack = () => {
    let items = []

//    向栈中添加元素
    this.append = value => items.push(value)

//    从栈中取出元素
    this.pop = () => items.pop()

//    获取栈顶元素
    this.peek = () => items[items.length - 1]

//    判断栈是不是为空
    this.isEmpty = () => items.length === 0

//    获取栈中元素的个数
    this.size = () => items.length

//    清空整个栈
    this.clear = () => items = []

//    打印整个栈
    this.print = () => items.forEach(value => console.log(value))

}