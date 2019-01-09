var my_bread_link = {};
for(var n=0; n<my_links.length; n++){
	my_bread_link[my_links[n]]=bread_link[my_links[n]];
}

var my_bread = {
	data: function(){
		return{
			n_l: my_bread_link,
			my_link: my_links
		}
	},
	template:`
		<div v-if="my_link" class="breadcrum">
			<span v-for="(link, name, index) in n_l">
				<a class="navigation" v-bind:href="link">{{name}}</a>
				<span v-if="index<my_link.length-1">》</span>
			</span>
		</div>
	`
}
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
				<span v-if="index<3">&nbsp;&nbsp;&nbsp;|</span>
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
		"breaddd": my_bread,
		"footerrr": my_footer
	}
})