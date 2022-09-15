(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59700328"],{"62a9":function(e,t,r){},7381:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-wrapper role-add-page-wrapper"},[r("s-title",{attrs:{title:"add"==e.title?"新增角色":"编辑角色"}}),e._v(" "),r("div",{staticClass:"role-add-container form-container"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{staticClass:"form-item",attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{attrs:{placeholder:"角色名称"},model:{value:e.form.roleName,callback:function(t){e.$set(e.form,"roleName",t)},expression:"form.roleName"}})],1),e._v(" "),r("el-form-item",{staticClass:"form-item",attrs:{label:"角色标识",prop:"roleCode"}},[r("el-input",{attrs:{placeholder:"角色标识"},model:{value:e.form.roleCode,callback:function(t){e.$set(e.form,"roleCode",t)},expression:"form.roleCode"}})],1),e._v(" "),r("el-form-item",{staticClass:"form-item-full",attrs:{label:"描述"}},[r("el-input",{attrs:{placeholder:"描述"},model:{value:e.form.roleDesc,callback:function(t){e.$set(e.form,"roleDesc",t)},expression:"form.roleDesc"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所属部门",prop:"deptName"}},[r("el-input",{attrs:{placeholder:"选择部门"},on:{focus:function(t){return e.handleDept()}},model:{value:e.form.deptName,callback:function(t){e.$set(e.form,"deptName",t)},expression:"form.deptName"}})],1),e._v(" "),r("el-button",{staticClass:"common-add-btn",attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("保存")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"选择部门",visible:e.dialogDeptVisible},on:{"update:visible":function(t){e.dialogDeptVisible=t}}},[r("el-tree",{ref:"deptTree",staticClass:"filter-tree",attrs:{data:e.treeDeptData,props:e.defaultProps,"default-checked-keys":e.checkedKeys,"check-strictly":"","node-key":"id","highlight-current":"","filter-node-method":e.filterNode,"default-expand-all":""},on:{"node-click":e.getNodeData}})],1)],1)},l=[],o=(r("a450"),r("8d55")),n=r("b405"),i={name:"roleAdd",components:{STitle:n["default"]},data:function(){return{title:"add",treeDeptData:[],checkedKeys:[],defaultProps:{children:"children",label:"name"},dialogDeptVisible:!1,form:{roleName:null,roleCode:null,roleDesc:null,deptName:null,roleDeptId:null},rules:{roleName:[{required:!0,message:"角色名称",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],roleCode:[{required:!0,message:"角色标识",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],deptName:[{required:!0,message:"请选择所属部门",trigger:"change"}]}}},created:function(){this.$route.meta.title="新增角色";var e=this.$route.query;e.id&&(this.title="update",this.$route.meta.title="编辑角色",this.handleUpdate(e.id))},methods:{handleAdd:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;"add"===e.title?o["a"](e.form).then((function(t){0==t.data.code?(e.$notify({title:"成功",message:"新增成功",type:"success",duration:2e3}),e.form={roleName:null,roleCode:null,roleDesc:null,deptName:null,roleDeptId:null},e.$router.push({path:"/admin/role"})):2==t.data.code?e.$notify({title:"失败",message:t.data.msg,type:"error",duration:2e3}):e.$notify({title:"失败",message:"新增失败",type:"error",duration:2e3})})):o["h"](e.form).then((function(t){0==t.data.code?(e.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3}),e.form={roleName:null,roleCode:null,roleDesc:null,deptName:null,roleDeptId:null},e.$router.push({path:"/admin/role"})):2==t.data.code?e.$notify({title:"失败",message:t.data.msg,type:"error",duration:2e3}):e.$notify({title:"失败",message:"修改失败",type:"error",duration:2e3})}))}))},handleUpdate:function(e){var t=this;o["f"](e).then((function(e){t.form=e.data,t.form.deptName=t.$route.query.deptName,t.form.roleDeptId=t.$route.query.roleDeptId}))},handleDept:function(){var e=this;o["d"]().then((function(t){e.treeDeptData=t.data,e.dialogDeptVisible=!0}))},getNodeData:function(e){this.dialogDeptVisible=!1,this.form.roleDeptId=e.id,this.form.deptName=e.name},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)}}},d=i,u=r("0b56"),s=Object(u["a"])(d,a,l,!1,null,"833ee852",null);t["default"]=s.exports},"8d55":function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"f",(function(){return o})),r.d(t,"a",(function(){return n})),r.d(t,"h",(function(){return i})),r.d(t,"b",(function(){return d})),r.d(t,"g",(function(){return u})),r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return c}));var a=r("b775");function l(){return Object(a["a"])({url:"/admin/role/roleList/",method:"get"})}function o(e){return Object(a["a"])({url:"/admin/role/"+e,method:"get"})}function n(e){return Object(a["a"])({url:"/admin/role/",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/admin/role/",method:"put",data:e})}function d(e){return Object(a["a"])({url:"/admin/role/"+e,method:"delete"})}function u(e,t){return Object(a["a"])({url:"/admin/role/roleMenuUpd",method:"put",params:{roleId:e,menuIds:t}})}function s(e){return Object(a["a"])({url:"/admin/menu/roleTree/"+e,method:"get"})}function c(e){return Object(a["a"])({url:"/admin/dept/tree",method:"get",params:e})}},a24f:function(e,t,r){"use strict";r("62a9")},b405:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-component-wrapper title-component-wrapper"})},l=[],o={props:{title:{type:String,default:"title"}}},n=o,i=(r("a24f"),r("0b56")),d=Object(i["a"])(n,a,l,!1,null,"238b1a96",null);t["default"]=d.exports}}]);