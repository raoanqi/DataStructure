/*
* Map：底层使用字典对象实现，实际上map就是一个对象数据结构
* */

const Map = () => {

//    底层使用对象实现
    let items = {}

//    判断元素是否存在
    this.has = (key) => {
        return items.hasOwnProperty(key)
    }

//    添加元素
    this.add = (key, value) => {
        //    Map中不用检查元素是否存在，如果已经存在，后面的值会覆盖前面的值
        items[key] = value
    }

//    删除元素
    this.delete = (key) => {
        //    但是在删除之前，需要检查一下这个值是否存在，存在的才能执行删除操作
        if (this.has(key)) {
            delete items[key]
            return true
        } else {
            return false
        }
    }

//    获取指定key对应的value
    this.get = (key) => {
        //    同样需要检查一下是否存在，存在的话才能获取，不存在的话无法获取
        if (this.has(key)) {
            return items[key]
        } else {
            return false
        }
    }

//    清空map
    this.clear = () => {
        items = {}
    }

//    获取map中键值对的数量
    this.size = () => {
        return Object.keys(items).length
    }

//    获取map中的全部键
    this.keys = () => {
        return Object.keys(items)
    }

//    获取map中的全部值
    this.values = () => {
        return Object.values(items)
    }

//    获取map中的全部键值对
    this.entries = () => {
        return Object.entries(items)
    }
}