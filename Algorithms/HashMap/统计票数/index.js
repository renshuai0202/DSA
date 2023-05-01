// 投票时，采用HashMap插入，时间复杂度O(1)
let hashMapVotes = {};
function hashMapVoteStart(name) {
  if(hashMapVotes[name]) {
    hashMapVotes[name]++;
  } else {
    hashMapVotes[name] = 1;
  }
}

hashMapVoteStart('张三');
hashMapVoteStart('李四');
hashMapVoteStart('张三');
hashMapVoteStart('张三');

// 查询结果时，采用HashMap查询，时间复杂度O(1)
console.log(hashMapVotes['张三']);
console.log(hashMapVotes['李四']);
