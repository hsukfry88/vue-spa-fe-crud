<template>
		<div>
				<div class="item">
						<label>学号:{{nums}}</label>
						<input type="text" name="" v-model="nums"/>
				</div>
				<div class="item">
						<label>姓名:{{names}}</label>
						<input type="text" name="" v-model="names"/>
				</div>
				<div class="item">
						<div>
							<label>性别:</label>
							<span>{{sex==0?"男":"女"}}</span>
						</div>
						<div>
							<label>男</label><input type="radio" name="sex" v-model="sex" value="0">
							<label>女</label><input type="radio" name="sex" v-model="sex" value="1">
						</div>
				</div>
				<div class="item">
						<div>
								<label>年龄:</label>
								<span>{{ age }}</span>	
						</div>
						<div>
							<select v-model="age">
							  <option>20岁以下</option>
							  <option>20-30岁</option>
							  <option>30-40岁</option>
							</select>
						</div>
				</div>
				<ui-button color="red" class="del" @click="add()">添加用户</ui-button>
		</div>      
</template>
<script>
import {UiButton}  from 'keen-ui';
	export default{
		data(){
			return{
				nums:'',
				names:'',
				sex:'',
				age:'',
			};
		},
		methods:{
			 add(){
			 		const student={
			 					nums:this.$data.nums,
					 			names:this.$data.names,
					 			age:this.$data.age,
					 			sex:this.$data.sex,
					}
			 		if(student.names!==''&&student.sex!==''&&student.age!==''){
					 	  this.$store.dispatch('addStudent',student);
					}else{
						alert('表单不能为空');
					}
			 }
		}
	}
</script>