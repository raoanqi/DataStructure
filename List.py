# Python中的List，其实就是数组
# List的常见方法

arr = []

# 向list尾部添加元素
arr.append(1)

# 从list尾部删除元素
arr.pop()

# 从list头部插入元素
arr.insert(0, 2)

# 从list头部删除元素:pop接收索引可以删除任意位置的元素
arr.pop(0)
'''
请注意：pop和del均可删除list中任意位置的值，
区别在于pop会将删除的值作为返回值返回，而del仅仅是单纯的删除操作，
在编程过程中，如果需要用到删除的值，就使用pop，如果仅仅只是需要将值从
list中删除，就使用del就可以
'''
