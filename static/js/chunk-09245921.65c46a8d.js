(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09245921"],{"3a12":function(e,t,a){},"62a9":function(e,t,a){},"8d55":function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"f",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"h",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"g",(function(){return d})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return m}));var r=a("b775");function n(){return Object(r["a"])({url:"/admin/role/roleList/",method:"get"})}function o(e){return Object(r["a"])({url:"/admin/role/"+e,method:"get"})}function l(e){return Object(r["a"])({url:"/admin/role/",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/admin/role/",method:"put",data:e})}function s(e){return Object(r["a"])({url:"/admin/role/"+e,method:"delete"})}function d(e,t){return Object(r["a"])({url:"/admin/role/roleMenuUpd",method:"put",params:{roleId:e,menuIds:t}})}function u(e){return Object(r["a"])({url:"/admin/menu/roleTree/"+e,method:"get"})}function m(e){return Object(r["a"])({url:"/admin/dept/tree",method:"get",params:e})}},"9fe3":function(e,t,a){"use strict";a("3a12")},a24f:function(e,t,a){"use strict";a("62a9")},b363:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-wrapper user-add-page-wrapper"},[a("s-title",{attrs:{title:"add"==e.title?"新增用户":"编辑用户"}}),e._v(" "),a("div",{staticClass:"user-add-container form-container"},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{staticClass:"form-item",attrs:{label:"用户账号",prop:"username"}},[a("el-input",{attrs:{placeholder:"请输用户账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),a("el-form-item",{staticClass:"form-item",attrs:{label:"用户名",prop:"nickname"}},[a("el-input",{attrs:{placeholder:"请输用户名"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),e._v(" "),"add"==e.title?a("el-form-item",{staticClass:"form-item",attrs:{label:"密码",placeholder:"请输入密码",prop:"newpassword1"}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.newpassword1,callback:function(t){e.$set(e.form,"newpassword1",t)},expression:"form.newpassword1"}})],1):e._e(),e._v(" "),"add"!==e.title?a("el-form-item",{staticClass:"form-item",attrs:{label:"状态",prop:"delFlag"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.delFlag,callback:function(t){e.$set(e.form,"delFlag",t)},expression:"form.delFlag"}},e._l(e.statusOptions,(function(t){return a("el-option",{key:t,attrs:{label:e._f("statusFilter")(t),value:t}})})),1)],1):e._e(),e._v(" "),a("el-form-item",{staticClass:"form-item",attrs:{label:"所属部门",prop:"deptName"}},[a("el-input",{attrs:{placeholder:"选择部门",readonly:""},on:{focus:function(t){return e.handleDept()}},model:{value:e.form.deptName,callback:function(t){e.$set(e.form,"deptName",t)},expression:"form.deptName"}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.deptId,expression:"form.deptId"}],attrs:{type:"hidden"},domProps:{value:e.form.deptId},on:{input:function(t){t.target.composing||e.$set(e.form,"deptId",t.target.value)}}})],1),e._v(" "),a("el-form-item",{staticClass:"form-item-full",attrs:{label:"角色",prop:"role"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",multiple:""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},e._l(e.rolesOptions,(function(t){return a("el-option",{key:t.roleId,attrs:{label:t.roleName,value:t.roleId,disabled:e.isDisabled[t.delFlag]}})})),1)],1),e._v(" "),a("el-form-item",{staticClass:"form-item",attrs:{label:"手机号",prop:"phone"}},[a("el-input",{attrs:{placeholder:"验证码登录使用"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),a("el-form-item",{staticClass:"form-item",attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),e._v(" "),a("el-button",{staticClass:"common-add-btn",attrs:{type:"primary"},on:{click:function(t){return e.handleAdd()}}},[e._v("保存")])],1),e._v(" "),a("el-dialog",{attrs:{title:"用户部门",visible:e.dialogDeptVisible},on:{"update:visible":function(t){e.dialogDeptVisible=t}}},[a("el-tree",{ref:"deptTree",staticClass:"filter-tree",attrs:{data:e.treeDeptData,"default-checked-keys":e.checkedKeys,"check-strictly":"","node-key":"id","highlight-current":"",props:e.defaultProps,"default-expand-all":""},on:{"node-click":e.getNodeData}})],1)],1)},n=[],o=(a("a450"),a("e17e")),l=a("8d55"),i=a("b405"),s=a("61f7"),d=function(e,t,a){Object(s["d"])(e,t,a)},u=function(e,t,a){Object(s["e"])(e,t,a)},m={name:"UserAdd",components:{STitle:i["default"]},filters:{statusFilter:function(e){var t={0:"有效",1:"无效",9:"锁定"};return t[e]}},data:function(){return{listLoading:!1,title:"add",statusOptions:["0","1"],role:[],rolesOptions:[],treeDeptData:[],checkedKeys:[],defaultProps:{children:"children",label:"name"},isDisabled:{0:!1,1:!0},dialogDeptVisible:!1,form:{username:null,newpassword1:null,nickname:null,delFlag:null,deptId:null,phone:null,email:null,role:[]},rules:{username:[{required:!0,message:"请输入账户",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],newpassword1:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],nickname:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],deptId:[{required:!0,message:"请选择部门",trigger:"blur"}],role:[{required:!0,message:"请选择角色",trigger:"change"}],phone:[{required:!0,message:"请输入正确的11位手机号码",trigger:"blur",validator:u},{min:11,max:11,message:"长度在11 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入正确的邮箱格式",trigger:"blur",validator:d}]}}},mounted:function(){this.$route.meta.title="新增用户";var e=this.$route.query;this.getRoles(),e.id&&(this.title="update",this.$route.meta.title="编辑用户",this.handleUpdate(e.id))},methods:{handleAdd:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.listLoading=!0,"add"==e.title?o["a"](e.form).then((function(t){e.listLoading=!1,"1"==t.data.code?e.$notify({message:"创建失败,"+t.data.msg,type:"error",duration:"2000"}):"0"==t.data.code&&(e.$notify({message:"创建成功",type:"success",duration:"2000"}),e.resetTemp(),e.$router.push({path:"/admin/user"}))})):(e.form.password=void 0,o["e"](e.form).then((function(t){e.listLoading=!1,"1"==t.data.code?e.$notify({message:"修改失败,"+t.data.msg,type:"error",duration:"2000"}):"0"==t.data.code&&(e.$notify({message:"修改成功",type:"success",duration:"2000"}),e.$router.push({path:"/admin/user"}))}))))}))},resetTemp:function(){this.form={id:void 0,username:"",password:"",nickname:"",role:[],delFlag:"",deptId:"",phone:""},this.role=[]},getRoles:function(){var e=this;Object(l["c"])().then((function(t){e.rolesOptions=t.data}))},getNodeData:function(e){this.dialogDeptVisible=!1,this.form.deptId=e.id,this.form.deptName=e.name},handleDept:function(){var e=this;Object(l["d"])().then((function(t){e.treeDeptData=t.data,e.dialogDeptVisible=!0}))},handleUpdate:function(e){var t=this;o["d"](e).then((function(e){t.form.role=[];var a=new Object({avatar:e.data.avatar,createTime:e.data.createTime,delFlag:e.data.delFlag,deptId:e.data.deptId,deptName:e.data.deptName,email:e.data.email,nickname:e.data.nickname,password:e.data.password,phone:e.data.phone,salt:e.data.salt,updateTime:e.data.updateTime,userId:e.data.userId,username:e.data.username,role:e.data.roleList});t.form=a;for(var r=0;r<e.data.roleList.length;r++)t.form.role[r]=e.data.roleList[r].roleId}))}}},c=m,p=(a("9fe3"),a("0b56")),f=Object(p["a"])(c,r,n,!1,null,"5d3df025",null);t["default"]=f.exports},b405:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-component-wrapper title-component-wrapper"})},n=[],o={props:{title:{type:String,default:"title"}}},l=o,i=(a("a24f"),a("0b56")),s=Object(i["a"])(l,r,n,!1,null,"238b1a96",null);t["default"]=s.exports},e17e:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return s}));var r=a("b775");function n(e){return Object(r["a"])({url:"/admin/user/userPage",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/admin/user/",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/admin/user/"+e,method:"get"})}function i(e){return Object(r["a"])({url:"/admin/user/"+e,method:"delete"})}function s(e){return Object(r["a"])({url:"/admin/user",method:"put",data:e})}}}]);