(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e0e732c","chunk-2d0b382a"],{1929:function(e,t,a){"use strict";a("4b5f")},"294a":function(e,t,a){"use strict";a("1bc7");var r=a("b775");function i(e){return Object(r["a"])({url:"/admin/dict/type/"+e,method:"get"})}a.d(t,"a",(function(){return s}));var s={methods:{dict:function(e,t){i(e).then((function(e){var a=JSON.parse(JSON.stringify(e.data));a.forEach((function(e){t.push({value:parseInt(e.value),label:e.label})}))}))}}}},"2aae":function(e,t,a){"use strict";a("cc9a")},"4b5f":function(e,t,a){},"62a9":function(e,t,a){},a24f:function(e,t,a){"use strict";a("62a9")},b405:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-component-wrapper title-component-wrapper"})},i=[],s={props:{title:{type:String,default:"title"}}},o=s,l=(a("a24f"),a("0b56")),n=Object(l["a"])(o,r,i,!1,null,"238b1a96",null);t["default"]=n.exports},bbdb:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-wrapper user-add-page-wrapper"},[a("s-title",{attrs:{title:"add"==e.title?"新增廒间":"编辑廒间"}}),e._v(" "),a("div",{},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{staticClass:"form-item",attrs:{label:"粮库名称",prop:"grainId"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.grainId,callback:function(t){e.$set(e.form,"grainId",t)},expression:"form.grainId"}},e._l(e.grainNamelist,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{staticClass:"form-item",attrs:{label:"廒间名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"廒间名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{staticClass:"form-item",attrs:{label:"廒间编号",prop:"code"}},[a("el-input",{attrs:{placeholder:"廒间编号"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),a("el-form-item",{staticClass:"form-item",attrs:{label:"仓库类型",prop:"type"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.graintype,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{staticClass:"form-item",attrs:{label:"粮食品种",prop:"varieties"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.varieties,callback:function(t){e.$set(e.form,"varieties",t)},expression:"form.varieties"}},e._l(e.varietiesoption,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{staticClass:"form-item",attrs:{label:"保管员",prop:"storekeeper"}},[a("el-input",{attrs:{placeholder:"保管员"},model:{value:e.form.storekeeper,callback:function(t){e.$set(e.form,"storekeeper",t)},expression:"form.storekeeper"}})],1),e._v(" "),a("el-form-item",{staticClass:"form-item",attrs:{label:"备注"}},[a("el-input",{attrs:{placeholder:"备注"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),a("el-button",{staticClass:"common-add-btn",attrs:{type:"primary"},on:{click:function(t){return e.handleAdd()}}},[e._v("保存")])],1)],1)},i=[],s=(a("a450"),a("3616")),o=a("b405"),l=(a("61f7"),a("294a")),n={props:["parentToChild"],name:"grainroomAdd",components:{STitle:o["default"]},filters:{},mixins:[l["a"]],data:function(){return{listLoading:!1,title:"add",graintype:[],varietiesoption:[],defaultProps:{children:"children",label:"name"},isDisabled:{0:!1,1:!0},dialogDeptVisible:!1,grainNamelist:[],form:{code:"",createTime:"",grainId:null,grainName:"",id:0,name:"",remark:"",storekeeper:"",type:null,userId:null,userName:"",varieties:null},rules:{grainId:[{required:!0,message:"请选择所属粮库",trigger:"change"}],type:[{required:!0,message:"请选择仓库类型",trigger:"change"}],varieties:[{required:!0,message:"请选择粮食品种",trigger:"change"}],name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入编号",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],storekeeper:[{required:!0,message:"请输入保管员",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}]}}},mounted:function(){var e=this;this.dict("granary_type",this.graintype),this.dict("varieties",this.varietiesoption),this.$route.meta.title="新增廒间",console.log(this.parentToChild),s["o"]().then((function(t){console.log("粮库列表",t),e.grainNamelist=t.data})),this.parentToChild&&(this.title="update",this.$route.meta.title="编辑廒间",this.handleUpdate(this.parentToChild))},methods:{handleAdd:function(){var e=this,t=this;this.$refs.form.validate((function(a){a&&(e.listLoading=!0,"add"==e.title?(console.log(e.form),s["p"](e.form).then((function(a){e.listLoading=!1,"1"==a.data.code?(e.$notify({message:"创建失败,"+a.data.msg,type:"error",duration:"2000"}),t.$emit("msg",!1)):"0"==a.data.code&&(e.$notify({message:"创建成功",type:"success",duration:"2000"}),e.resetTemp(),e.$router.push({path:"/Grainroom/grainroom"}),t.$emit("msg",!0))}))):(e.form.password=void 0,s["p"](e.form).then((function(a){e.listLoading=!1,"1"==a.data.code?(e.$notify({message:"修改失败,"+a.data.msg,type:"error",duration:"2000"}),t.$emit("msg",!1)):"0"==a.data.code&&(e.$notify({message:"修改成功",type:"success",duration:"2000"}),e.$router.push({path:"/Grainroom/grainroom"}),t.$emit("msg",!0))}))))}))},resetTemp:function(){this.form={code:"",createTime:"",grainId:null,grainName:"",id:0,name:"",remark:"",storekeeper:"",type:null,userId:null,userName:"",varieties:null}},getNodeData:function(e){this.dialogDeptVisible=!1,this.form.deptId=e.id,this.form.deptName=e.name},handleUpdate:function(e){var t=this;s["s"](e).then((function(e){t.form=e.data}))}}},m=n,c=(a("1929"),a("2aae"),a("0b56")),d=Object(c["a"])(m,r,i,!1,null,"6df00797",null);t["default"]=d.exports},cc9a:function(e,t,a){}}]);