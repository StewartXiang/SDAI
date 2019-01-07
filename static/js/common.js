var header_link = {
	"首页": "../index.html",
	"预防": "../bookshelf/shelf.html",
	"病理": "../science/pathology.html",
	"历史": "../science/history.html",
	"消除歧视": "../elimination/elimination.html",
	"小问答": "../quiz/quiz1.html",
};
var footer_link = {
	"关于我们": "../extensions/contact.html",
	"友情链接": "../extensions/others.html",
	"感谢": "../extensions/thanks.html"
}
var bread_link = {
	"首页": "../index.html",
	"预防": "../bookshelf/shelf.html",
	"病理": "../science/pathology.html",
	"历史": "../science/history.html",
	"消除歧视": "../elimination/elimination.html",
	"小问答": "../quiz/quiz1.html",
}
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
		"breaddd": my_bread
	}
})