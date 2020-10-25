/*
* 链表数据结构
* 特点：存储空间非连续
* */

const LinkedList = () => {
//    链表的底层实现是对象,链表的每一个节点都是一个对象
    let Node = (value) => {
        this.value = value
        this.next = null
    }

    /*
    * 链表中需要维护的数据：
    * （1）链表的头结点（就是链表的第一个节点，记为head）
    * （2）链表的长度（记为length）
    * */
    let head = null
    let length = 0

//    向链表中尾部添加节点
    this.append = (value) => {
        //    首先初始化一个节点
        let node = new Node(value)
        //    定义变量，记录当前的节点
        let current = null
        //    检查头结点，如果头结点不存在，直接将要添加的节点设置为head，否则就开始遍历
        if (head === null) {
            head = node
        } else {
            current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }

//    向链表中间添加节点
    this.insertNode = (position, value) => {
        if (position >= 0 && position <= length) {
            //    符合要求，执行插入节点的操作
            let node = new Node(value)
            let previous
            let current = head
            let index = 0
            //    如果index就是0，代表要插入在头节点的位置
            if (position === 0) {
                if (head === null) {
                    head = node
                } else {
                    node.next = head
                    head = node
                }
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            length++
        } else {
            return -1
        }
    }

//    根据位置参数来删除节点
    this.deleteByPosition = (position) => {
        if (length > 0 && position >= 0 && position < length) {
            let previous
            let current = head
            let index = 0
            if (position === 0) {
                // 头节点代表最前面的节点，如果删除的就是头节点，那么直接修改一下头结点即可
                head = head.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
        } else {
            return -1
        }
    }

//    获取某个节点的索引
    this.getPosition = (value) => {
        let index = 0
        let current = head
        while (current) {
            if (current.value === value) {
                return index
            } else {
                current = current.next
                index++
            }
        }
        return -1
    }

//    根据值来删除节点
    this.deleteByValue = (value) => {
        let position = this.getPosition(value)
        return this.deleteByPosition(position)
    }

//    判断链表是否为空
    this.isEmpty = () => {
        return length === 0
    }

//    获取链表的头结点
    this.getHead = () => head
}