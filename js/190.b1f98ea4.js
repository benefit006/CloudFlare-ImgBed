"use strict";(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[190],{4318:function(){},3496:function(e,t,a){a.d(t,{A:function(){return v}});var i=a(6768),n=a(4232);const o={id:"themeMask"},s=["cx","cy","r"],l=["r"],r=["opacity"];function c(e,t,a,c,d,h){return(0,i.uX)(),(0,i.CE)("div",{id:"themeToggle",onClick:t[0]||(t[0]=(...e)=>h.handleToggleClick&&h.handleToggleClick(...e))},[((0,i.uX)(),(0,i.CE)("svg",{class:(0,n.C4)(["theme_toggle_svg",{dark:d.isDark}]),width:"1.3em",height:"1.3em",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",stroke:"currentColor"},[(0,i.Lk)("mask",o,[t[1]||(t[1]=(0,i.Lk)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"},null,-1)),(0,i.Lk)("circle",{class:"theme_toggle_circle1",fill:"black",cx:d.isDark?"50%":"100%",cy:d.isDark?"23%":"0%",r:d.isDark?"9":"5"},null,8,s)]),(0,i.Lk)("circle",{class:"theme_toggle_circle2",cx:"12",cy:"12",r:d.isDark?"9":"5",mask:"url(#themeMask)"},null,8,l),(0,i.Lk)("g",{class:"theme_toggle_g",stroke:"currentColor",opacity:d.isDark?0:1},t[2]||(t[2]=[(0,i.Fv)('<line x1="12" y1="1" x2="12" y2="3" data-v-4c88bff4></line><line x1="12" y1="21" x2="12" y2="23" data-v-4c88bff4></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-4c88bff4></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-4c88bff4></line><line x1="1" y1="12" x2="3" y2="12" data-v-4c88bff4></line><line x1="21" y1="12" x2="23" y2="12" data-v-4c88bff4></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-4c88bff4></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-4c88bff4></line>',8)]),8,r)],2))])}var d={name:"ToggleDark",data(){return{isDark:this.$store.getters.useDarkMode}},methods:{handleToggleClick(){this.isDark=!this.isDark,this.$store.commit("setUseDarkMode",this.isDark),this.$store.commit("setCusDarkMode",!0)}}},h=a(1241);const u=(0,h.A)(d,[["render",c],["__scopeId","data-v-4c88bff4"]]);var m=u,g=a(9017);a(5331),a(6055),a(8830),a(3597);const p={class:"tabs"},f={class:"tabs-dropdown-link"};function b(e,t,a,o,s,l){const r=(0,i.g2)("font-awesome-icon"),c=g.c6,d=g.Iy,h=g.dW,u=m;return(0,i.uX)(),(0,i.CE)("div",p,[(0,i.Lk)("span",{class:"title",onClick:t[0]||(t[0]=(...e)=>l.refreshDashboard&&l.refreshDashboard(...e))},[(0,i.bF)(r,{icon:l.iconName,class:"fa-images"},null,8,["icon"]),(0,i.eW)(" "+(0,n.v_)(l.titleName),1)]),(0,i.bF)(h,{onCommand:l.handleTabClick,class:"tabs-dropdown",role:"navigation",onVisibleChange:l.handleDropdownVisible,"popper-class":"tabs-dropdown-popper"},{dropdown:(0,i.k6)((()=>[(0,i.bF)(d,null,{default:(0,i.k6)((()=>["dashboard"!==a.activeTab?((0,i.uX)(),(0,i.Wv)(c,{key:0,command:"dashboard"},{default:(0,i.k6)((()=>[(0,i.bF)(r,{icon:"images",style:{"margin-right":"5px"}}),t[1]||(t[1]=(0,i.eW)(" Gallery "))])),_:1})):(0,i.Q3)("",!0),"customerConfig"!==a.activeTab?((0,i.uX)(),(0,i.Wv)(c,{key:1,command:"customerConfig"},{default:(0,i.k6)((()=>[(0,i.bF)(r,{icon:"user-cog",style:{"margin-right":"5px"}}),t[2]||(t[2]=(0,i.eW)(" 用户管理 "))])),_:1})):(0,i.Q3)("",!0),"systemConfig"!==a.activeTab?((0,i.uX)(),(0,i.Wv)(c,{key:2,command:"systemConfig"},{default:(0,i.k6)((()=>[(0,i.bF)(r,{icon:"cogs",style:{"margin-right":"5px"}}),t[3]||(t[3]=(0,i.eW)(" 系统设置 "))])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(c,{command:""},{default:(0,i.k6)((()=>[(0,i.bF)(r,{icon:"upload",style:{"margin-right":"5px"}}),t[4]||(t[4]=(0,i.eW)(" 上传页面 "))])),_:1})])),_:1})])),default:(0,i.k6)((()=>[(0,i.Lk)("span",f,[(0,i.bF)(r,{icon:"bars",class:"tabs-arrow"})])])),_:1},8,["onCommand","onVisibleChange"]),(0,i.bF)(u)])}a(4114);var k={name:"DashboardTabs",props:{activeTab:{type:String,default:"dashboard"}},components:{AdminToggleDark:m},computed:{titleName(){return"dashboard"===this.activeTab?"Gallery":"customerConfig"===this.activeTab?"用户管理":"systemConfig"===this.activeTab?"系统设置":"上传页面"},iconName(){return"dashboard"===this.activeTab?"images":"customerConfig"===this.activeTab?"user-cog":"systemConfig"===this.activeTab?"cogs":"upload"}},methods:{refreshDashboard(){location.reload()},handleTabClick(e){this.$router.push(`/${e}`)},handleDropdownVisible(e){const t=document.querySelector(".tabs-dropdown-link");e?t.classList.add("rotate-up"):t.classList.remove("rotate-up")}}};const y=(0,h.A)(k,[["render",b],["__scopeId","data-v-0de0fc64"]]);var v=y},8190:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var i=a(9114),n=(a(5331),a(694),a(47)),o=(a(9648),a(7815)),s=(a(5534),a(5558)),l=(a(456),a(6023)),r=(a(8736),a(213),a(5970),a(7009)),c=(a(8450),a(8785),a(4880)),d=(a(7128),a(1450)),h=a(3496),u=a(6768),m=a(4232);const g={class:"container"},p={class:"header-content"},f={class:"header-action"},b={class:"main-container"},k={style:{margin:"8px"}},y=["src"],v={key:2,style:{width:"100px",height:"100px",display:"flex","justify-content":"center","align-items":"center"}},C={class:"pagination-container"};function w(e,t,a,w,x,T){const D=h.A,_=(0,u.g2)("font-awesome-icon"),L=d.R7,F=c.bZ,S=l.o8,W=r.Zq,z=l.Up,A=s.qi,E=o.aQ,$=n.S2,X=i.L;return(0,u.uX)(),(0,u.CE)("div",g,[(0,u.bF)(F,null,{default:(0,u.k6)((()=>[(0,u.Lk)("div",p,[(0,u.bF)(D,{activeTab:"customerConfig"}),(0,u.Lk)("div",f,[(0,u.bF)(L,{disabled:T.disableTooltip,content:"退出登录",placement:"bottom"},{default:(0,u.k6)((()=>[(0,u.bF)(_,{icon:"sign-out-alt",class:"header-icon",onClick:T.handleLogout},null,8,["onClick"])])),_:1},8,["disabled"])])])])),_:1}),(0,u.Lk)("div",b,[(0,u.bo)(((0,u.uX)(),(0,u.Wv)(z,{data:T.paginatedData,"default-sort":{prop:"count",order:"descending"},class:"main-table","table-layout":"fixed"},{default:(0,u.k6)((()=>[(0,u.bF)(S,{type:"expand"},{default:(0,u.k6)((e=>[(0,u.Lk)("div",k,[t[0]||(t[0]=(0,u.Lk)("h3",{style:{"text-align":"center"}},"上传文件列表",-1)),(0,u.bF)(z,{data:e.row.data,style:{width:"100%"},"default-sort":{prop:"metadata.TimeStamp",order:"descending"},"table-layout":"fixed","max-height":400},{default:(0,u.k6)((()=>[(0,u.bF)(S,{prop:"metadata.FileName",label:"文件名"}),(0,u.bF)(S,{prop:"name",label:"文件预览"},{default:(0,u.k6)((({row:e})=>[e.metadata?.FileType?.includes("image")?((0,u.uX)(),(0,u.Wv)(W,{key:0,src:"/file/"+e.name+"?from=admin",fit:"cover",lazy:"",style:{width:"100px",height:"100px"}},null,8,["src"])):e.metadata?.FileType?.includes("video")?((0,u.uX)(),(0,u.CE)("video",{key:1,src:"/file/"+e.name+"?from=admin",controls:"",style:{width:"100px",height:"100px"}},null,8,y)):((0,u.uX)(),(0,u.CE)("div",v,[(0,u.bF)(_,{icon:"file",style:{"font-size":"2em"}})]))])),_:1}),(0,u.bF)(S,{formatter:T.formatTimeStamp,label:"上传时间",prop:"metadata.TimeStamp",sortable:"","sort-method":T.sortByTimestamp},{default:(0,u.k6)((({row:e})=>[(0,u.eW)((0,m.v_)(T.formatTimeStamp(e.metadata.TimeStamp)),1)])),_:1},8,["formatter","sort-method"])])),_:2},1032,["data"])])])),_:1}),(0,u.bF)(S,{prop:"ip",label:"IP地址"}),(0,u.bF)(S,{prop:"count",label:"上传次数",sortable:""}),(0,u.bF)(S,{label:"允许上传"},{default:(0,u.k6)((({row:e})=>[(0,u.bF)(A,{modelValue:e.enable,"onUpdate:modelValue":t=>e.enable=t,"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"允许","inactive-text":"禁止",onChange:t=>T.handleSwitchEnable(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1})])),_:1},8,["data"])),[[X,x.loading]]),(0,u.Lk)("div",C,[(0,u.bF)(E,{background:"",layout:"prev, pager, next",total:x.dealedData.length,"current-page":x.currentPage,"page-size":x.pageSize,onCurrentChange:T.handlePageChange},null,8,["total","current-page","page-size","onCurrentChange"]),x.currentPage===Math.ceil(x.dealedData.length/x.pageSize)?((0,u.uX)(),(0,u.Wv)($,{key:0,type:"primary",onClick:T.loadMoreData,loading:x.loading,class:"load-more"},{default:(0,u.k6)((()=>t[1]||(t[1]=[(0,u.eW)("加载更多")]))),_:1},8,["onClick","loading"])):(0,u.Q3)("",!0)])])])}a(4114);var x=a(782),T={name:"CustomerConfig",data(){return{tableData:[],dealedData:[],blockipList:[],loading:!1,currentPage:1,pageSize:10}},components:{DashboardTabs:h.A},computed:{...(0,x.L8)(["credentials"]),disableTooltip(){return window.innerWidth<768},paginatedData(){const e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize;return this.dealedData.slice(e,t)}},methods:{async fetchWithAuth(e,t={}){this.credentials&&(t.headers={...t.headers,Authorization:`Basic ${this.credentials}`},t.credentials="include");const a=await fetch(e,t);if(401===a.status)throw this.$message.error("认证状态错误，请重新登录"),this.$router.push("/adminLogin"),new Error("Unauthorized");return a},handleLogout(){this.$store.commit("setCredentials",null),this.$router.push("/adminLogin")},formatTimeStamp(e){return new Date(e).toLocaleString()},sortByTimestamp(e,t){return new Date(e.metadata.TimeStamp)-new Date(t.metadata.TimeStamp)},async handleSwitchEnable(e){const t=e.ip,a=e.enable;a?(this.blockipList=this.blockipList.filter((e=>e!==t)),await this.fetchWithAuth("/api/manage/cusConfig/whiteip",{method:"POST",body:t})):(this.blockipList.push(t),await this.fetchWithAuth("/api/manage/cusConfig/blockip",{method:"POST",body:t}))},handlePageChange(e){this.currentPage=e,e===Math.ceil(this.dealedData.length/this.pageSize)&&this.loadMoreData()},loadMoreData(){this.loading=!0;const e=this.dealedData.length,t=20;this.fetchWithAuth(`/api/manage/cusConfig/list?start=${e}&count=${t}`,{method:"GET"}).then((e=>e.json())).then((e=>{this.dealedData=this.dealedData.concat(e.map((e=>{const t=!this.blockipList.includes(e.ip);return{ip:e.ip,count:e.count,data:e.data,enable:t}})))})).catch((()=>{this.$message.error("加载更多数据时出错，请检查网络连接")})).finally((()=>{this.loading=!1}))},handleSizeChange(e){this.pageSize=e,this.currentPage=1}},mounted(){this.loading=!0,this.fetchWithAuth("/api/manage/check",{method:"GET"}).then((e=>e.text())).then((e=>{if("true"==e)return this.showLogoutButton=!0,this.fetchWithAuth("/api/manage/cusConfig/list?count=20",{method:"GET"});if("Not using basic auth."==e)return this.fetchWithAuth("/api/manage/cusConfig/list?count=20",{method:"GET"});throw new Error("Unauthorized")})).then((e=>e.json())).then((async e=>{const t=await this.fetchWithAuth("/api/manage/cusConfig/blockipList",{method:"GET"});this.blockipList=(await t.text()).split(","),this.dealedData=e.map((e=>{const t=!this.blockipList.includes(e.ip);return{ip:e.ip,count:e.count,data:e.data,enable:t}}))})).catch((e=>{"Unauthorized"!==e.message&&this.$message.error("同步数据时出错，请检查网络连接")})).finally((()=>{this.loading=!1}))}},D=a(1241);const _=(0,D.A)(T,[["render",w],["__scopeId","data-v-34e7f298"]]);var L=_},8050:function(e,t,a){a(5331)},8736:function(e,t,a){a(5331)},3597:function(e,t,a){a(5331)},8830:function(e,t,a){a(5331)},6055:function(e,t,a){a(5331),a(9648),a(8050),a(9104),a(5970)},7128:function(e,t,a){a(5331),a(4318)},8450:function(e,t,a){a(5331)},694:function(e,t,a){a(5331)},5534:function(e,t,a){a(5331),a(8785),a(5970),a(9104)},9104:function(e,t,a){a(5331)},5970:function(e,t,a){a(5331)},456:function(e,t,a){a(5331)},8785:function(e,t,a){a(5331)},213:function(e,t,a){a(5331),a(9104)}}]);
//# sourceMappingURL=190.b1f98ea4.js.map