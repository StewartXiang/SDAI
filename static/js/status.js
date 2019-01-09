var nums=["400","401","403","404","405"]
var my_status={
	"400": "BAD REQUEST",
	"401": "UNAUTHORIZED",
	"403": "FORBIDDEN",
	"404": "PAGE NOT FOUND",
	"405": "NOT ALLOWED"
}
var vm=new Vue({
	el:"#my_nf",
	data: {
		nums:nums,
		my_status:my_status
		// num:nums[3],
		// discribe:my_status["404"]
	},
	created: function() {
		// body...
		a=nums[Math.round(Math.random()*(nums.length-1))];
		this.num=a;
		this.discribe=my_status[this.num];
	}
})