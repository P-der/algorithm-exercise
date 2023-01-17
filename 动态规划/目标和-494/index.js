// https://leetcode.cn/problems/target-sum/
// 回溯算法
var findTargetSumWays = function(nums, target) {
    if(!nums.length) return 0;
    let result = 0;
    backtrack(nums, 0 ,target);
    return result;
    function backtrack(nums, i, rest) {
        if(i===nums.length){
            if(rest == 0) {
                result++
            }
            return
        }
        rest += nums[i]
        backtrack(nums, i+1, rest)
        rest -= nums[i]

        rest -= nums[i]
        backtrack(nums, i+1, rest)
        rest += nums[i]
    }
};

// 消除重叠子问题
var findTargetSumWays = function(nums, target) {
    if(!nums.length) return 0;
    let memo = {}
    return dp(nums, 0, target);
    function dp(nums, i, rest) {
        if(i===nums.length){
            if(rest == 0) {
                return 1
            }
            return 0
        }

        let key = `${i}&${rest}`;
        if(key in memo) return memo[key];

        let res = dp(nums, i+1, rest-nums[i]) + dp(nums, i+1, rest+nums[i])
        memo[key] = res
        return res
    }
};

// 动态规划

/*
 A 为 + 集合，B 为 - 集合
 sum(A) - sum(B) = target
 sum(A) = target + sum(B)
 sum(A) + sum(A) = target + sum(A) + sum(B)
 2* sum(A) = target + sums
*/

var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((pre,next)=> pre+next, 0)
    if(sum < Math.abs(target) || (sum+target)%2 ===1) {
        return 0;
    }
    return subsets(nums, (sum + target)/2)
    function subsets(nums, sum) {
        let n = nums.length;
        let dp = new Array(n+1).fill(0).map(()=> new Array(sum+1).fill(0))
        for(let i = 0; i<=n;i ++ ) {
            dp[i][0] = 1;
        }
        for(let i = 1; i <= n; i++) {
            for(let j = 0; j <= sum; j++) {
                if(j - nums[i-1]>= 0) {
                    dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]]
                }else {
                    dp[i][j] = dp[i-1][j]
                }
            }
        }
        return dp[n][sum]
    }
};
// 压缩状态
var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((pre,next)=> pre+next, 0)
    if(sum < Math.abs(target) || (sum+target)%2 ===1) {
        return 0;
    }
    return subsets(nums, (sum + target)/2)
    function subsets(nums, sum) {
        let n = nums.length;
        let dp = new Array(sum+1).fill(0)
            dp[0] = 1;
        for(let i = 1; i <= n; i++) {
            for(let j = sum; j >=0; j--) {
                if(j - nums[i-1]>= 0) {
                    dp[j] = dp[j] + dp[j-nums[i-1]]
                }
            }
        }
        return dp[sum]
    }
};
