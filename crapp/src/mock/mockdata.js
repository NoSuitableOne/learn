import Mock from 'mockjs';

Mock.setup({
    timeout: '40-1200'
});

Mock.mock('http://server/test', {
  "server": {
    "name": "server_name"
  }
});

const data = [];
for (let i = 0; i < 8; i++) {
  data.push({
    num: i + 1,
    description: `it is key${i}`,
    part: i % 2,
    flag1: true,
    flag2: i > 3,
    flag3: !!(i % 2),
    key: i
  });
}
data.map((ele, index) => {
  if (index > 1 && index < 5) {
    ele.description = 'same';
  } else if (index >= 6) {
    ele.description = 'same2';
  } else {
    ele.description = `diff ${index + 1}`;
  }
});
Mock.mock('http://server/entry/table', {
  table: data
});


Mock.mock('http://server/entry/sel1', {
  sel: ['f1-both', 'f1-yes', 'f1-no']
});
Mock.mock('http://server/entry/sel2', {
  sel: [
    'f2-yes', 'f2-no', 'f2-both', 'f2-clear'
  ]
});
Mock.mock('http://server/entry/sel3', {
  sel: ['f3-yes', 'f3-no', 'f3-both', 'f3-clear']
});
