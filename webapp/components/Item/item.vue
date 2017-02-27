<template>
		<div>
					<span>学号:{{nums}}</span>
					<span>姓名:{{names}}</span>
					<span>年龄:{{age}}</span>
					<span>性别:{{sex==0?"男":"女"}}</span>
		</div>
</template>
<script type="text/javascript">
		import {UiButton}  from 'keen-ui';
		export default {
			props:{
				nums:{
					type:String
				},
				names:{
					type:String
				},
				age:{
					type:String
				},
				sex:{
					type:String
				}
			}
		}
</script>