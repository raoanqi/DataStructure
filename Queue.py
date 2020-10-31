# 数据结构：队列
# 实现语言：Python
# Python有标准的队列库queue
class Queue(object):
    def __init__(self):
        self.items = []

    # 向队列尾部添加元素（入队运算）
    def en_queue(self, value):
        self.items.append(value)

    # 从队列头部删除元素（出队运算）
    def de_queue(self):
        # 如果队列不为空，就执行删除操作，否则返回-1代表执行删除失败
        if len(self.items) > 0:
            self.items.pop(0)
        else:
            return -1

    # 获取队头元素
    def head(self):
        return self.items[0]

    # 计算队列的长度
    def size(self):
        return len(self.items)

    # 清空整个队列
    def clear(self):
        self.items = []
