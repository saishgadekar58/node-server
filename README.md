# node-server


1)Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

////ans/////




-------method1---------
a)const twoSum = (nums,target) => {
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[j] == target - nums[i]){
                return [i,j]
            }
        }
    }
}
working

----------method1 end-----





--------method 2----------

b)const twoSum=(nums,target)=>{
  
    let map = new Map();
   
    for(var i = 0; i < nums.length; i++){
        let cmp = target - nums[i]
         map.set(nums[i],i)
        if(map.has(cmp)){
            p=map.get(cmp);
            
            if(i>0){
            let k= [p, i]
     
            return k
              
            }
         }
           
        }
    }

not working for nums=[3,3] or [3,4,2]

----------method2 end-----



///////q end//////






2)Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]


////ans////



-------method1---------
1)var intersect = function(nums1, nums2) {
  
        // let s1=new Set(nums1).size;
  
    
    let r=[];
    for(i=0;i<nums1.length;i++){
        if(nums2.indexOf(nums1[i]) > -1){
          r.push(nums1[i])
       
        }
    }
    return r
};

Input [1,2,2,1]
      [2]

Output [2,2]

Expected [2]
----------method1 end-----





--------method 2----------

var intersect = function(nums1, nums2) {

    const map1 = new Map();
    const map2 = new Map();
    
    nums1.forEach(n=>{
            map1.set(n,map1.get(n)+1||1)
                       -----------------  ?  why 1-indexed based?
        })
    
    nums2.forEach(n=>{
            map2.set(n,map2.get(n)+1||1)
		       ------------------ ?										
        })
    
    let res=[];
    
    for(let [key,value] of map1){
        while(map2.get(key)>0 && value--){
            map2.set(key,map2.get(key)-1);  ------- why decrease index ?
            res.push(key); 
        }
    }
    return res;
};


----------method2 end-----






////////q end////////


3)Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

Note that the letters wrap around.

For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"



////ans////



-------method1---------


var nextGreatestLetter = function(l, t) {
    if (l[0] > t || t >= l[l.length - 1])
    return l[0];
    let start = 0;let end = l.length-1;
   
   while(start <= end){
        let mid=  Math.floor((start+end)/2);
          if(l[mid]==t){
            return l[mid+1]
        }
        else if(l[mid]>t){
             end = mid-1
        }
        else{
           start=mid+1
        }
   }
   
    return false
};


not working for tet case:


Input ["c","f","j"]

	"d"

Output false

Expected "f"

----------method1 end-----


////////q end////////



4)Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

 

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).



////ans////


-------method1---------
(did not understand the soln)


const smallerNumbersThanCurrent = nums => {
    const sortedNums = Array.from(nums).sort((a, b) => a - b); ----- why array.from when nums is array ?

    const sortedHash = sortedNums.reduce((acc, num, i) => {
        if (num in acc) return acc;
        
        acc[num] = i
        return acc;
    }, {});
    
    return nums.map(num => sortedHash[num]);
};

----------method1 end-----


////////q end////////





