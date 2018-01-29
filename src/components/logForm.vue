<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
	import axios from 'axios'
	import '../api/axios.js'
	export default{
		data(){
			return{
				usernameModel:'',
				passwordModel:'',
				errorText:''
			}
		},
		computed:{
			userErrors(){
				let errorText,status;
				if(!/@/g.test(this.usernameModel)){
					status=false;
					errorText='不包含@';
				}else{
					status=true;
					errorText='';				
				}
				if(!this.userFlag){         //userFlag没有在页面中渲染，所有不用在data中声明，不声明是undefined，反undefined是true。如果没有userFlag，errorText就为空，并且给userFlag赋值为true
					errorText='';
					this.userFlag=true;
				}
				return {
					status,
					errorText
				}
			},
			passwordErrors(){
				let errorText,status;
				if(!/^\w{1,6}$/g.test(this.passwordModel)){
					status=false;
					errorText='密码不是1-6位';
				}else{
					status=true;
					errorText='';				
				}
				if(!this.passwordFlag){
					errorText='';
					this.userFlag=true;
				}
				return {
					status,
					errorText
				}			
			}
		},
		methods:{
			onLogin(){
				if(!this.userErrors.status||!this.passwordErrors.status){
					this.errorText='部分选项为通过';
				}else{
					// this.errorText='';
					// this.$http.post('/api/get_users').then((req,res)=>{
					// 	console.log(req.data);
					// });
					this.$http.get('/api/get_users').then((res)=>{
						this.$emit('has-log',res.data);
						console.log(res.data);
					},(error)=>{
						console.log(error);
					});
				}
			}
		}		
	}

</script>

<!-- 
<template>
  <form class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" name="username" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" name="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <button class="button" type="submit" @click="onLogin">登录</button>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </form>
</template>

<script>
	import axios from 'axios'
	import '../api/axios.js'
	export default{
		data(){
			return{
				usernameModel:'',
				passwordModel:'',
				errorText:''
			}
		},
		computed:{
			userErrors(){
				let errorText,status;
				if(!/@/g.test(this.usernameModel)){
					status=false;
					errorText='不包含@';
				}else{
					status=true;
					errorText='';				
				}
				if(!this.userFlag){         //userFlag没有在页面中渲染，所有不用在data中声明，不声明是undefined，反undefined是true。如果没有userFlag，errorText就为空，并且给userFlag赋值为true
					errorText='';
					this.userFlag=true;
				}
				return {
					status,
					errorText
				}
			},
			passwordErrors(){
				let errorText,status;
				if(!/^\w{1,6}$/g.test(this.passwordModel)){
					status=false;
					errorText='密码不是1-6位';
				}else{
					status=true;
					errorText='';				
				}
				if(!this.passwordFlag){
					errorText='';
					this.userFlag=true;
				}
				return {
					status,
					errorText
				}			
			}
		},
		methods:{
			onLogin(){
				if(!this.userErrors.status||!this.passwordErrors.status){
					this.errorText='部分选项为通过';
				}else{
					this.errorText='';
					// this.$http.post('/api/get_users').then((req,res)=>{
					// 	console.log(req.data);
					// });
					this.$http.get('/api/get_users').then((res)=>{
						this.$emit('has-log',res.data);
						console.log(res.data);
					},(error)=>{
						console.log(error);
					});
				}
			}
		}		
	}

</script> -->

