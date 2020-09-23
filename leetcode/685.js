/**
 * @param {number[][]} edges
 * @return {number[]}
 */

class UnionFind {
  int[] ancestor;

  public UnionFind(int n) {
      ancestor = new int[n];
      for (int i = 0; i < n; ++i) {
          ancestor[i] = i;
      }
  }

  public void union(int index1, int index2) {
      ancestor[find(index1)] = find(index2);
  }

  public int find(int index) {
      if (ancestor[index] != index) {
          ancestor[index] = find(ancestor[index]);
      }
      return ancestor[index];
  }
}


var findRedundantDirectedConnection = function(edges) {

  function find(i){
      return unionArr[i] == -1 ? i : unionArr[i] = find(unionArr[i]);
  }
  function union(x, y){
      let i = find(x),
          j = find(y);
      if(i == j) return true;
      else unionArr[j] = i;
      return false;
  }

  let res, ans1, ans2,
      unionArr = new Array(edges.length + 1).fill(-1),
      parent = new Array(edges.length + 1).fill(-1);
  for(let i = 0; i < edges.length; i++){
      if(parent[edges[i][1]] != -1){
          ans1 = [parent[edges[i][1]], edges[i][1]];
          ans2 = i;
      }
      parent[edges[i][1]] = edges[i][0];
  }
  if(ans2 != undefined){
      res = edges[ans2];
      for(let i = 0; i < edges.length; i++){
          if(i != ans2){
              if(union(edges[i][0], edges[i][1])){
                  res = ans1;
              }
          }
      }
  }else{
      for(let i = 0; i < edges.length; i++){
          if(union(edges[i][0], edges[i][1])){
              res = edges[i];
          }
      }
  }
  return res;
};


const a =
// [[3,1],[1,4],[3,5],[1,2],[1,5]]
// [[5,2],[5,1],[3,1],[3,4],[3,5]]
// [[2,1],[3,1],[4,2],[1,4]]
// [[1,2],[1,3],[2,3]]
[[4,2],[1,5],[5,2],[5,3],[2,4]]
// [[5,2],[5,1],[3,1],[3,4],[3,5]]
// [[1,2],[2,3],[3,4],[4,1],[1,5]]

console.log(findRedundantDirectedConnection(a))

