<template>
	<div>
		 <div v-for="item in allStudent">
		 <div class="item">
			 	<div class="info">
					<item :nums="item.nums" :names="item.names" :age="item.age" :sex="item.sex"></item>
				</div>
				<div class="btn-group">
					<ui-button color="red" class="del" @click.stop="removeItem(item)">删除</ui-button>
					<ui-button  class="del" uid="item.nums" @click.stop="openModal('modal1',item)">
							<span>编辑</span>
					</ui-button>
					
				</div>
			</div>
			<!-- <item :num="99" :names="name" :age="20" :sex="sex"></item> -->
		</div>
				<ui-modal ref="modal1" title="Basic Modal">
             				<div class="item">
												<label>姓名:{{cnames}}</label>
												<input class="username" type="text" name="" v-model="cnames"/>
										</div>
										<div class="item">
												<div>
													<label>性别:</label>
													<span>{{csex==0?"男":"女"}}</span>
												</div>
												<div>
													<label>男</label><input type="radio" name="sex" v-model="csex" value="0">
													<label>女</label><input type="radio" name="sex" v-model="csex" value="1">
												</div>
										</div>
										<div class="item">
												<div>
														<label>年龄:</label>
														<span>{{cage}}</span>	
												</div>
												<div>
													<select v-model="cage">
													  <option>20岁以下</option>
													  <option>20-30岁</option>
													  <option>30-40岁</option>
													</select>
												</div>
										</div>
										<ui-button color="red" class="del" @click="changeUser()">确认修改</ui-button>
        </ui-modal>
	</div>
</template>
<script type="text/javascript">
	import Item from '../components/Item/item.vue'
	import mapGetters from 'vuex';
	import {UiModal}  from 'keen-ui';
	export default{
		data(){
			return{
				nums:'',
				cnames:'',
				csex:'',
				cage:'',
			};
		},
		methods: {
        openModal(ref,item) {
        		this.nums=item.nums;
        		this.cnames=item.names;
        		this.csex=item.sex;
        		this.cage=item.age;
            this.$refs[ref].open();
        },
        closeModal(ref) {
            this.$refs[ref].close();
        },
        changeUser(){
        		const student={
        			nums:this.$data.nums,
        			names:this.$data.cnames,
        			sex:this.$data.csex,
        			age:this.$data.cage,
        		}
        		this.$store.dispatch('changeInfo',student);
        },
        removeItem(item){
        		this.$store.dispatch('removeInfo',item);
        }
   	},
		computed:{
			allStudent(){
				return this.$store.getters.allStudent;
			}
		},
		components:{Item},
	}
</script>