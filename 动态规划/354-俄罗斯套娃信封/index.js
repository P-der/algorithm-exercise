var maxEnvelopes = function(envelopes) {
    envelopes.sort((envelope1, envelope2)=>{
        if(envelope1[0] !== envelope2[0]) {
            return envelope1[0] -envelope2[0];
        }else {
            return envelope2[1] -envelope1[1];
        }
    })
    // leetcode 中用js可能超时，可以使用二分搜索LIS算法
    return lengthOfLIS(envelopes.map(e => e[1]))
};