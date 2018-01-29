<template>
	<div>
		<div class="app-head">
			<div class="app-head-inner">
        <router-link :to='{path:"/"}'>
				  <img src="../assets/logo.png">
        </router-link>
				<div class="head-nav">
					<ul class="nav-list">
            <li>{{ username }}</li>
            <li v-if="username!==''" class="nav-pile">|</li>
            <li v-if="username!==''" @click='quitClick'>退出</li>
						<li v-if="username===''" @click='logClick'>登录</li>
						<li v-if="username===''" class="nav-pile">|</li>
						<li v-if="username===''" @click='regClick'>注册</li>
						<li class="nav-pile">|</li>
						<li @click='aboutClick'>关于</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="app-content">
			<keep-alive>     <!-- 页面缓存 keep-alive 把访问过的组件进行缓存-->
				<router-view><IndexPage></IndexPage></router-view>
			</keep-alive>
		</div>
		<div class="app-foot">
			<p>@ 2018 fishenal MIT</p>
		</div>
    <my-dialog :isShow='isShowAboutDialog' @on-close='closeDialog("isShowAboutDialog")'>
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素，本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素。</p>
    </my-dialog>
    <my-dialog :isShow='isShowLogDialog' @on-close='closeDialog("isShowLogDialog")'>
      <log-form @has-log='onSuccessLog'>log</log-form>
    </my-dialog>
    <my-dialog :isShow='isShowRegDialog' @on-close='closeDialog("isShowRegDialog")'>
      <reg-form>reg</reg-form>
    </my-dialog>
	</div>
</template>
<script>
  import Dialog from './dialog.vue'
  import LogForm from './logForm.vue'
  import RegForm from './regForm.vue'
	export default {
    components:{
      'my-dialog':Dialog,
      'log-form':LogForm,
      'reg-form':RegForm
    },
		data(){
			return {
        isShowAboutDialog:false,
        isShowLogDialog:false,
        isShowRegDialog:false,
        username:''
			}
		},
    methods:{
      aboutClick(){
        this.isShowAboutDialog=true;
      },
      logClick(){
        this.isShowLogDialog=true;
      },
      regClick(){
        this.isShowRegDialog=true;
      },
      closeDialog(attr){
        this[attr]=false;
      },
      onSuccessLog(data){
        this.closeDialog('isShowLogDialog');
        this.username=data[0].username;
        console.log(data[0].username);
      },
      quitClick(){}
    }
	}
</script>
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}	
</style>