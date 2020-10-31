# 数据结构：栈
# 实现语言：Python
class Stack(object):
    def __init__(self):
        self.items = []

    # 向栈中添加元素
    def push(self, value):
        self.items.append(value)

    # 从栈中删除元素
    def pop(self):
        # 如果其中有数据，就执行pop，否则直接return一个-1表示执行失败
        if self.items:
            self.items.pop()
        else:
            return -1

    # 获取栈顶元素
    def peek(self):
        return self.items[-1]

    # 判断栈是不是为空
    def is_empty(self):
        return len(self.items) == 0

    # 清空整个栈
    def clear(self):
        self.items = []

    # 获取栈中元素的个数
    def size(self):
        return len(self.items)
