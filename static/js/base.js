
var my_footer = {
	data: function(){
		return{
			n_l: footer_link
		}
	},
	template:`
		<div id="my_foot">
		<p>
			<span v-for="(link, name, index) in n_l">
				<span>&nbsp;&nbsp;&nbsp;</span>
				<a v-bind:href="link">
					{{name}}
				</a>
				<span v-if="index<2">&nbsp;&nbsp;&nbsp;|</span>
				<span v-else>&nbsp;&nbsp;&nbsp;</span>
			</span>
		</p>
		<p>©2018 - 2019 NotAdvanced Group. All Rights Reserved.</p>
		</div>
	`
}


var i = new Vue({
	el:"#its_body",
	components: {
		"headerrr": my_header,
		"footerrr": my_footer
	}
})