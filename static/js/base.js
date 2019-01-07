var my_header = {
	data: function () {
		return{
			n_l: header_link
		}
	},
	template: `
	<div id="my_head">
		<div id="my_header">
			<img id="my_logo" src="../static/images/logo.png">
			<div id="guider">
				<div class="guide">
					<span 
					v-for ="(link, name, index) in n_l">
						<span>&nbsp;&nbsp;&nbsp;</span>
						<a class="navigation1"
						   v-bind:href="link" 
						   target="_blank">
							{{name}}
						</a>
						<span v-if="index<5">&nbsp;&nbsp;&nbsp;|</span>
						<span v-else>&nbsp;&nbsp;&nbsp;</span>
					</span>
				</div>
			</div>
		</div>
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
				<span v-if="index<2">&nbsp;&nbsp;&nbsp;|</span>
				<span v-else>&nbsp;&nbsp;&nbsp;</span>
			</span>
		</p>
		<p>©2018 - 2019 NotAdvanced Group. All Rights Reserved.</p>
		</div>
	`
}

console.log(my_links.length);
var my_bread_link = {};
for(var n=0; n<my_links.length; n++){
	my_bread_link[my_links[n]]=bread_link[my_links[n]];
	console.log(n);
}
var my_bread = {
	data: function(){
		return{
			n_l: my_bread_link,
			my_link: my_links
		}
	},
	template:`
		<div class="breadcrum">
			<span v-for="(link, name, index) in n_l">
				<a class="navigation" v-bind:href="link">{{name}}</a>
				<span v-if="index<my_link.length-1">》</span>
			</span>
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