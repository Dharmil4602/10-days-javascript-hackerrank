function modifyArray(nums) {
    const func = nums.map((nums) => {
        if(nums % 2 == 0)
        {
            return 2*nums;
        }
        else
        {
            return 3*nums;
        }
    })
    return func
}