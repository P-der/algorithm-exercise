// https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-03a72/bing-cha-j-323f3/

class UF {
    constructor(n) {
        this.count = n;
        // 父节点指针初始指向自己
        this.parent = [];
        for (let i = 0; i < n; i++)
            parent[i] = i;
    }
    /* 将 p 和 q 连接 */
    union(p, q) {
        let rootP = find(p);
        let rootQ = find(q);
        if (rootP == rootQ)
            return;
        // 将两棵树合并为一棵
        this.parent[rootP] = rootQ;
        // parent[rootQ] = rootP 也一样
        this.count--; // 两个分量合二为一
    };
    /* 判断 p 和 q 是否连通 */
    connected(p, q) {
        let rootP = find(p);
        let rootQ = find(q);
        return rootP == rootQ;
    };
    find(x) {
        if (this.parent[x] != x) {
            this.parent[x] = this.find(parent[x]); // 优化树结构，全部指向父级
        }
        return parent[x];
    }
    /* 返回图中有多少个连通分量 */
    count() {
        return this.count
    };
}
