/*
* 集合
* 集合就是一种特殊的字典对象，集合的key与valaue是相同的值，并且集合中的元素都是唯一的，不存在重复的元素
* 集合的底层是对象（也称为字典）
* */

const Set = () => {
//    底层使用字典实现
    let items = {}

//    因为集合需要确保内部没有重复元素，因此需要定义一个方法检查集合中是否已经存在该元素
    this.has = (value) => {
        return value in items
    }

//    添加元素
    this.add = (value) => {
        //    先检查是不是已经有了
        if (!this.has(value)) {
            items[value] = value
            return true
        } else {
            return false
        }
    }

//    删除元素
    this.delete = (value) => {
        //    先检查集合中是不是有这个元素，集合中有才能执行删除操作
        if (this.has(value)) {
            delete items[value]
            return true
        } else {
            return false
        }
    }

//    清空集合
    this.clear = () => {
        items = {}
        return true
    }

//    计算集合的大小
    this.size = () => {
        return Object.keys(items).length
    }

//    取出集合中全部的值
    this.values = () => {
        return Object.values(items)
    }

//    计算并集
    this.union = (otherSet) => {
        let unionSet = new Set()
        // 获取当前集合的全部值
        let values = this.values()
        values.forEach(val => {
            unionSet.add(val)
        })
        values = otherSet.values()
        values.forEach(val => {
            unionSet.add(val)
        })
        return unionSet
    }

//    计算交集
    this.inter = (otherSet) => {
        let interSet = new Set()
        let values = this.values()
        values.forEach(val => {
            if (otherSet.has(val)) {
                interSet.add(val)
            }
        })
        return interSet
    }

//    计算差集,计算当前集合中有，但是otherSet中没有的元素
    this.sub = (otherSet) => {
        let subSet = new Set()
        let values = this.values()
        values.forEach(val => {
            if (!otherSet.has(val)) {
                subSet.add(val)
            }
        })
        return subSet
    }

//    判断是不是子集:判断当前集合是不是otherSet的子集
    this.son = (otherSet) => {
        let values = this.values()
        values.forEach(val => {
            if (!otherSet.has(val)) {
                return false
            }
        })
        return true
    }
}