// 原始数据
var arr = [
  { id: 1, pId: 0 },
  { id: 2, pId: 1 },
  { id: 3, pId: 2 },
  { id: 10, pId: 4 },
  { id: 11, pId: 5 },
  { id: 7, pId: 3 },
  { id: 8, pId: 3 },
  { id: 9, pId: 4 },
  { id: 4, pId: 1 },
  { id: 5, pId: 0 },
  { id: 6, pId: 2 },
  { id: 12, pId: 6 },
];
// 创建排序函数
function sortArr(arr) {
  // 深拷贝一份数据
  var copy = JSON.parse(JSON.stringify(arr));
  // 创建一个存储数据的对象
  var obj = {};
  // 遍历数据，将数据所有数据添加到对象中，key为数据id，value为原数据对象
  copy.forEach((item, index) => {
    obj[item.id] = item;
  });
  // 创建一个最终返回的数组
  var res = [];
  // 遍历数据开始处理
  copy.forEach(item => {
    // 将root数据添加进res数组， 因为数据使引用类型，子元素数据都会带过来，下面的循环会处理子元素数据
    if (item.pId === 0) {
      res.push(item);
    }
    // 梳理子元素数据
    for (var key in obj) {
      // 当一层元素id 和 二层元素pId一致，那么，二层遍历的元素就是一层遍历元素的children
      if (item.id === obj[key].pId) {
        // 处理数据children
        if (item.children) {
          item.children.push(obj[key]);
        } else {
          item.children = [obj[key]];
        }
      }
    }
  });
  return res;
}
var newArr = sortArr(arr);
console.log(JSON.stringify(newArr, null, 2))