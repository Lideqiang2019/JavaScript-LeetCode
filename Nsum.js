/**
 * P320,对twoSum问题的扩展
 */
// 1. 找到一组
// 排序版本
function TwoSum(nums, target){
    // 对nums排序
    nums.sort();
    // 二分查找
    let lo = 0, hi = nums.length - 1;
    while(lo<hi){
        let sum = nums[lo] + nums[hi];
        if(target>sum){
            lo++;
        }else if(target<sum){
            hi--;
        }else{
            return [lo,hi];
        }
    }
    return [-1,-1];
}

let nums = [1,2,3,1,2,3,0]
console.log(TwoSum(nums,4))
// 2. 找到多组并不重复
function TwoSumNoDuplicate(nums, target){
    // 对nums排序
    nums.sort();
    let res = [];
    // 二分查找
    let lo = 0, hi = nums.length - 1;
    while(lo<hi){
        let sum = nums[lo] + nums[hi];
        let left = lo, right = hi;
        if(target>sum){
            // lo++;
            // 跳过重复的数字
            while(lo<hi && nums[lo]===nums[left]){
                lo++;
            }
        }else if(target<sum){
            while(lo<hi && nums[hi]===nums[right]){
                hi--;
            }
        }else{
            res.push([nums[left], nums[right]]);
            // 去掉重复的
            while(lo<hi && nums[lo]===nums[left]){
                lo++;
            }

            while(lo<hi && nums[hi]===nums[right]){
                hi--;
            }
            // return [lo,hi];
        }
    }
    return res;
}

console.log(TwoSumNoDuplicate(nums,4));

function threeSum(nums, target){
    nums.sort();
    let res = [];
    let n = nums.length;
    for(let i=0;i<n;i++){
        let tuples = TwoSumTarget(nums,i+1,target-nums[i])
        for(const tuple of tuples){
            tuple.push(nums[i]);
            res.push(tuple);
        }
        // 去掉第一个数字的重复
        while(i<n-1 && nums[i] === nums[i-1]){
            i++;
        }
    }
    return res;

    function TwoSumTarget(nums, start, target){
        // 对nums排序
        nums.sort();
        let res = [];
        // 二分查找
        let lo = start, hi = nums.length - 1;
        while(lo<hi){
            let sum = nums[lo] + nums[hi];
            let left = lo, right = hi;
            if(target>sum){
                // lo++;
                // 跳过重复的数字
                while(lo<hi && nums[lo]===nums[left]){
                    lo++;
                }
            }else if(target<sum){
                while(lo<hi && nums[hi]===nums[right]){
                    hi--;
                }
            }else{
                res.push([nums[left], nums[right]]);
                // 去掉重复的
                while(lo<hi && nums[lo]===nums[left]){
                    lo++;
                }
    
                while(lo<hi && nums[hi]===nums[right]){
                    hi--;
                }
                // return [lo,hi];
            }
        }
        return res;
    }
}

console.log(threeSum(nums,4))


function nSum(nums, n, start, target){
    // 对于n=2，是一个basecase，其他的就递归调用即可，但应该注意，排序应该提前排序好。
    let res = [];
    let len = nums.length
    if(n<2 || n>len){
        return res;
    }
    if(n===2){
        // twosum
        let lo = start, hi = len - 1;
        while(lo<hi){
            let sum = nums[lo] + nums[hi];
            let left = lo, right = hi;
            if(target>sum){
                // lo++;
                // 跳过重复的数字
                while(lo<hi && nums[lo]===nums[left]){
                    lo++;
                }
            }else if(target<sum){
                while(lo<hi && nums[hi]===nums[right]){
                    hi--;
                }
            }else{
                res.push([nums[left], nums[right]]);
                // 去掉重复的
                while(lo<hi && nums[lo]===nums[left]){
                    lo++;
                }
    
                while(lo<hi && nums[hi]===nums[right]){
                    hi--;
                }
                // return [lo,hi];
            }
        }
    }else{
        for(let i=0;i<len;i++){
            let tuples = nSum(nums,n-1,i+1,target-nums[i]);
            for(const tuple of tuples){
                tuple.push(nums[i]);
                res.push(tuple);
            }
            while(i<len-1 && nums[i]===nums[i-1]){
                i++;
            }
        }
    }
    return res;
}

console.log(nSum(nums.sort(),4,0,5))
