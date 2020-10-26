/*
* 双向链表
* */

const DoublyLinkedList = () => {
//    节点的构造函数
    let Node = (value) => {
        this.value = value
        this.prev = null
        this.next = null
    }

//    双向链表有头结点、尾节点
    let head = null
    let tail = null
    let length = 0

//    向链表尾部添加节点
    this.append = (value) => {
        //    首先初始化节点
        let node = new Node(value)
        //    对特殊节点进行处理
        if (head === null) {
            head = node
            tail = node
        } else {
            tail.next = node
            node.prev = tail
            tail = node
        }
        length++
    }

//    向链表中间添加节点
    this.insert = (position, value) => {
        //    首先对位置进行检查
        if (position >= 0 && position <= length) {
            let node = new Node(value)
            let previous
            let current = head
            let index = 0

            //  假设位置是0
            if (position === 0) {
                //    检查一下链表是不是为空
                if (head === null) {
                    head = node
                    tail = node
                } else {
                    node.next = head
                    head.prev = node
                    head = node
                }
            } else if (position === length) {
                tail.next = node
                node.prev = tail
                tail = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
                current.prev = node
                node.prev = previous
            }
            length++
        } else {
            return -1
        }
    }

//    根据位置删除元素
    this.deleteByPosition = (position) => {
        //     检查一下位置是否处于合法范围
        if (length > 0 && position >= 0 && position < length) {
            let previous
            let current = head
            let index = 0
            if (position === 0) {
                if (length === 1) {
                    head = null
                    tail = null
                } else {
                    head = head.next
                }
            } else if (position === length - 1) {
                tail = tail.prev
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            length--
        } else {
            return -1
        }
    }

//    获取元素的索引
    this.getIndex = (value) => {
        let current = head
        let index = 0
        while (current) {
            if (current.value === value) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

//    根据元素的值删除元素
    this.deleteByValue = (value) => {
        let position = this.getIndex(value)
        return this.deleteByPosition(position)
    }

//    判断链表是不是为空
    this.isEmpty = () => length === 0

//    计算链表的长度
    this.size = () => length
}