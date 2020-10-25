/*
* 队列
* 队列的底层实现也是数组
* 特点：先进先出
* */

const Queue = () => {
    let items = []

//    入队操作
    this.enQueue = value => items.push(value)

//    出队操作
    this.deQueue = () => {
        return items.shift()
    }

//    获取队头元素
    this.getHead = () => items[0]

//    计算队列的长度
    this.size=()=>items.length

//    清空整个队列
    this.clear=()=>items=[]

//    打印整个队列
    this.print=()=>{
        items.forEach(value=>console.log(value))
    }

}