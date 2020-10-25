/*
* 二叉树
* 二叉树的特点：有且仅有一个根节点root，每一个节点最多有两个子节点：左子节点、右子节点，每一个节点都是一个字典对象
* */

const Tree = () => {

//    每一个节点，都是一个字典对象，包含节点本身的值，左子节点的指针、右子节点的指针

    //节点的构造函数
    let Node = (key) => {
        this.value = key
        this.left = null
        this.right = null
    }

//    每棵树有且仅有一个根节点，root,在树创建的时候，这个root是空
    let root = null

//    向树中插入节点
    this.insert = (key) => {
        let newNode = new Node(key)
        if (root === null) {
            return root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
    let insertNode = (node, newNode) => {
        if (newNode.key < node.key) {
            if (node.left === null) {
                return node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                return node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

//    获取树的根节点
    this.getRoot = () => {
        return root
    }

//    在树中搜索一个值是否存在
    this.search = (key) => {
        //    从跟节点开始搜索
        searchNode(root, key)
    }

    let searchNode = (node, key) => {
        if (node === null) {
            return -1
        } else if (key < node.left) {
            searchNode(node.left, key)
        } else if (key > node.key) {
            searchNode(node.right, key)
        } else {
            return true
        }
    }

//    二叉树的中序遍历
    this.inOrder = (callback) => {
        inOrderTraverse(root, callback)
    }
    let inOrderTraverse = (node, callback) => {
        if (node !== null) {
            inOrderTraverse(node.left, callback)
            callback(node)
            inOrderTraverse(node.right, callback)
        }
    }

//    二叉树的前序遍历
    this.preOrder = (callback) => {
        preOrderTraverse(root, callback)
    }

    let preOrderTraverse = (node, callback) => {
        if (node !== null) {
            callback(node)
            preOrderTraverse(node.left)
            preOrderTraverse(node.right)
        }
    }

//    二叉树的后续遍历
    this.postOrder = (callback) => {
        postOrderTraverse(root, callback)
    }

    let postOrderTraverse = (node, callback) => {
        if (node !== null) {
            postOrderTraverse(node.left, callback)
            postOrderTraverse(node.right, callback)
            callback(node)
        }
    }

//    搜索二叉树中的最小值
    this.getMin = () => {
        getMinSearch(root)
    }

    let getMinSearch = (node) => {
        if (node !== null) {
            while (node.left !== null) {
                node = node.left
            }
            return node.key
        }
    }

//    搜索二叉树的最大值
    this.getMax = () => {
        getMaxSearch(root)
    }

    let getMaxSearch = (node) => {
        if (node !== null) {
            while (node.right !== null) {
                node = node.right
            }
            return node.key
        }
    }

}