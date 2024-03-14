import{c as h,i as d,u as K,b as t,d as w,e as W,f as $,U as I,g as k,h as O,j as C,k as M,l as o,m as l,L as p,F as v,n as y,s as E,r as q,o as F,S as G,p as Z,q as D,t as R}from"./q-BtLFO70r.js";import{createClient as Q}from"@supabase/supabase-js";import J from"fs";import X from"path";import ee from"os";import te from"crypto";var Pt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var x={exports:{}};const ne="dotenv",le="16.4.5",re="Loads environment variables from .env file",ae="lib/main.js",oe="lib/main.d.ts",ie={".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},ue={"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec","test:coverage":"tap --coverage-report=lcov",prerelease:"npm test",release:"standard-version"},ce={type:"git",url:"git://github.com/motdotla/dotenv.git"},de="https://dotenvx.com",ge=["dotenv","env",".env","environment","variables","config","settings"],me="README.md",pe="BSD-2-Clause",fe={"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3",decache:"^4.6.1",sinon:"^14.0.1",standard:"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0",tap:"^16.3.0",tar:"^6.1.11",typescript:"^4.8.4"},he={node:">=12"},ve={fs:!1},xe={name:ne,version:le,description:re,main:ae,types:oe,exports:ie,scripts:ue,repository:ce,funding:de,keywords:ge,readmeFilename:me,license:pe,devDependencies:fe,engines:he,browser:ve},A=J,j=X,be=ee,ye=te,we=xe,T=we.version,_e=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function ke(e){const s={};let n=e.toString();n=n.replace(/\r\n?/mg,`
`);let r;for(;(r=_e.exec(n))!=null;){const u=r[1];let a=r[2]||"";a=a.trim();const i=a[0];a=a.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),i==='"'&&(a=a.replace(/\\n/g,`
`),a=a.replace(/\\r/g,"\r")),s[u]=a}return s}function Ee(e){const s=Y(e),n=g.configDotenv({path:s});if(!n.parsed){const i=new Error(`MISSING_DATA: Cannot parse ${s} for an unknown reason`);throw i.code="MISSING_DATA",i}const r=P(e).split(","),u=r.length;let a;for(let i=0;i<u;i++)try{const c=r[i].trim(),m=Oe(n,c);a=g.decrypt(m.ciphertext,m.key);break}catch(c){if(i+1>=u)throw c}return g.parse(a)}function Se(e){console.log(`[dotenv@${T}][INFO] ${e}`)}function Ae(e){console.log(`[dotenv@${T}][WARN] ${e}`)}function S(e){console.log(`[dotenv@${T}][DEBUG] ${e}`)}function P(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function Oe(e,s){let n;try{n=new URL(s)}catch(c){if(c.code==="ERR_INVALID_URL"){const m=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw m.code="INVALID_DOTENV_KEY",m}throw c}const r=n.password;if(!r){const c=new Error("INVALID_DOTENV_KEY: Missing key part");throw c.code="INVALID_DOTENV_KEY",c}const u=n.searchParams.get("environment");if(!u){const c=new Error("INVALID_DOTENV_KEY: Missing environment part");throw c.code="INVALID_DOTENV_KEY",c}const a=`DOTENV_VAULT_${u.toUpperCase()}`,i=e.parsed[a];if(!i){const c=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${a} in your .env.vault file.`);throw c.code="NOT_FOUND_DOTENV_ENVIRONMENT",c}return{ciphertext:i,key:r}}function Y(e){let s=null;if(e&&e.path&&e.path.length>0)if(Array.isArray(e.path))for(const n of e.path)A.existsSync(n)&&(s=n.endsWith(".vault")?n:`${n}.vault`);else s=e.path.endsWith(".vault")?e.path:`${e.path}.vault`;else s=j.resolve(process.cwd(),".env.vault");return A.existsSync(s)?s:null}function N(e){return e[0]==="~"?j.join(be.homedir(),e.slice(1)):e}function De(e){Se("Loading env from encrypted .env.vault");const s=g._parseVault(e);let n=process.env;return e&&e.processEnv!=null&&(n=e.processEnv),g.populate(n,s,e),{parsed:s}}function je(e){const s=j.resolve(process.cwd(),".env");let n="utf8";const r=!!(e&&e.debug);e&&e.encoding?n=e.encoding:r&&S("No encoding is specified. UTF-8 is used by default");let u=[s];if(e&&e.path)if(!Array.isArray(e.path))u=[N(e.path)];else{u=[];for(const m of e.path)u.push(N(m))}let a;const i={};for(const m of u)try{const f=g.parse(A.readFileSync(m,{encoding:n}));g.populate(i,f,e)}catch(f){r&&S(`Failed to load ${m} ${f.message}`),a=f}let c=process.env;return e&&e.processEnv!=null&&(c=e.processEnv),g.populate(c,i,e),a?{parsed:i,error:a}:{parsed:i}}function Te(e){if(P(e).length===0)return g.configDotenv(e);const s=Y(e);return s?g._configVault(e):(Ae(`You set DOTENV_KEY but you are missing a .env.vault file at ${s}. Did you forget to build it?`),g.configDotenv(e))}function Ne(e,s){const n=Buffer.from(s.slice(-64),"hex");let r=Buffer.from(e,"base64");const u=r.subarray(0,12),a=r.subarray(-16);r=r.subarray(12,-16);try{const i=ye.createDecipheriv("aes-256-gcm",n,u);return i.setAuthTag(a),`${i.update(r)}${i.final()}`}catch(i){const c=i instanceof RangeError,m=i.message==="Invalid key length",f=i.message==="Unsupported state or unable to authenticate data";if(c||m){const b=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw b.code="INVALID_DOTENV_KEY",b}else if(f){const b=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw b.code="DECRYPTION_FAILED",b}else throw i}}function Le(e,s,n={}){const r=!!(n&&n.debug),u=!!(n&&n.override);if(typeof s!="object"){const a=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw a.code="OBJECT_REQUIRED",a}for(const a of Object.keys(s))Object.prototype.hasOwnProperty.call(e,a)?(u===!0&&(e[a]=s[a]),r&&S(u===!0?`"${a}" is already defined and WAS overwritten`:`"${a}" is already defined and was NOT overwritten`)):e[a]=s[a]}const g={configDotenv:je,_configVault:De,_parseVault:Ee,config:Te,decrypt:Ne,parse:ke,populate:Le};x.exports.configDotenv=g.configDotenv;x.exports._configVault=g._configVault;x.exports._parseVault=g._parseVault;x.exports.config=g.config;x.exports.decrypt=g.decrypt;x.exports.parse=g.parse;x.exports.populate=g.populate;x.exports=g;var Ve=x.exports;const $e=se(Ve),Ie=".mona{font-weight:200;font-stretch:120%}",Ce=e=>(K(d(Ie,"s_blbzZomTmuM")),t("button",null,{class:w(s=>"bg-sky-500 py-2 px-4 rounded-sm text-white hover:bg-sky-400 mona "+s.classText,[e],'"bg-sky-500 py-2 px-4 rounded-sm text-white hover:bg-sky-400 mona "+p0.classText')},w(s=>s.title||"Click Me",[e],'p0.title||"Click Me"'),3,"iB_0")),_=h(d(Ce,"s_45HAhqAmpAs")),Me=async()=>{const[e]=y();await E.auth.signOut(),e("/")},qe=()=>{W();const e=$(I),s=k(!1),n=O(),r=d(Me,"s_4lI93x0px88",[n]);return C(M("s_hx5x9HutuTI",[s,e])),t("nav",null,{class:"bg-white py-4 px-7 sticky"},t("div",null,{class:"flex justify-between items-center"},[o(_,{title:"LOGO",[l]:{title:l}},3,"uO_0"),t("div",null,{class:"flex items-center text-sm"},[t("ul",null,{class:"flex space-x-10"},[t("li",null,null,o(p,{children:"About",href:"/about",[l]:{href:l}},3,"uO_1"),1,null),t("li",null,null,o(p,{children:"Shop",href:"/shop",[l]:{href:l}},3,"uO_2"),1,null),t("li",null,null,o(p,{children:"Services",href:"/services",[l]:{href:l}},3,"uO_3"),1,null)],1,null),t("div",null,{class:"border-r border-gray-300 h-10 ml-10"},null,3,null),s.value&&o(v,{children:[t("button",null,{class:"ml-10",onClick$:r},"Logout",3,null),o(p,{children:o(_,{classText:"mr-5 ml-10 bg-sky-500 border border-sky-500 hover:bg-sky-400 text-white",title:"Dashboard",[l]:{classText:l,title:l}},3,"uO_4"),href:"/members/dashboard",[l]:{href:l}},1,"uO_5")]},1,"uO_6"),!s.value&&o(v,{children:[o(p,{children:o(_,{classText:"mr-5 ml-5 bg-green-500 border border-green-500 hover:bg-green-400 text-white",title:"Log In",[l]:{classText:l,title:l}},3,"uO_7"),href:"/login",[l]:{href:l}},1,"uO_8"),o(p,{children:o(_,{classText:"mr-5 ml-5 bg-green-500 border border-green-500 hover:bg-green-400 text-white",title:"Sign Up",[l]:{classText:l,title:l}},3,"uO_9"),href:"/signup",[l]:{href:l}},1,"uO_10")]},1,"uO_11")],1,null)],1,null),1,"uO_12")},Re=h(d(qe,"s_D6gnpqBvIxc")),Pe="_anchor_1lwey_1",Ye="_spacer_1lwey_10",L={anchor:Pe,spacer:Ye},Ue=()=>{const e=U();return t("footer",null,null,t("div",null,{class:"container"},t("a",null,{class:L.anchor,href:"https://www.builder.io/",target:"_blank"},[t("span",null,null,"Made with ♡ by Builder.io",3,null),t("span",null,{class:L.spacer},"|",3,null),t("span",null,null,w(s=>s.value.date,[e],"p0.value.date"),3,null)],3,null),3,null),3,"so_0")},ze=h(d(Ue,"s_u0bwM0i5dA8")),Be=`html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{background:var(--qwik-dark-background);color:var(--qwik-dark-text);overflow-x:hidden}h1,h2,h3{color:#000;margin:0}h1{font-size:3.2rem;text-align:center}h1 .highlight,h3 .highlight{color:var(--qwik-light-blue)}h2{font-weight:400;font-size:2.4rem}h2 .highlight{font-weight:700}h3{font-size:2rem}@media screen and (min-width: 768px){h1{font-size:5rem}h2{font-size:3.4rem}h3{font-size:3rem}}a{text-decoration:none;color:var(--qwik-light-blue)}code{background:#e6e6e64d;border-radius:4px;padding:2px 6px}ul{margin:0;padding-left:20px}.container{margin:0 auto;padding:30px 40px}.container.container-purple{background:var(--qwik-light-purple)}.container.container-dark{background:var(--qwik-dark-background);color:var(--qwik-dark-text)}.container.container-center{text-align:center}.container.container-spacing-xl{padding:50px 40px}@media screen and (min-width: 768px){.container{padding:60px 80px}.container.container-spacing-xl{padding:100px 60px}.container.container-flex{display:flex;justify-content:center;gap:60px}}a.button,button{background:var(--qwik-light-blue);border:none;border-radius:8px;color:#000;cursor:pointer;font-size:.8rem;padding:15px 20px;text-align:center}a.button.button-dark,button.button-dark{background:var(--qwik-dirty-black)}a.button.button-small,button.button-small{padding:15px 25px}@media screen and (min-width: 768px){a.button,button{font-size:1rem;padding:23px 35px}}.ellipsis{position:absolute;top:100px;left:-100px;width:400px;height:400px;background:radial-gradient(57.58% 57.58% at 48.79% 42.42%,#18b4f480,#2e377200 63.22%);transform:rotate(5deg);opacity:.5;z-index:-1}.ellipsis.ellipsis-purple{top:1350px;left:-100px;background:radial-gradient(50% 50% at 50% 50%,#ac7ff480,#15193400);transform:rotate(-5deg)}@media screen and (min-width: 768px){.ellipsis{top:-100px;left:350px;width:1400px;height:800px}.ellipsis.ellipsis-purple{top:1300px;left:-200px}}.icon:before{width:18px;height:18px;content:"";display:inline-block;margin-right:20px;position:relative;top:2px}.icon-cli:before{background-image:url("data:image/svg+xml,%3Csvg fill='%23ffffff' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M122.499 124.87646a4.00053 4.00053 0 0 1 0 6.24708l-40 32a4.0002 4.0002 0 0 1-4.998-6.24708L113.59668 128 77.501 99.12354a4.0002 4.0002 0 0 1 4.998-6.24708ZM175.99414 156h-40a4 4 0 0 0 0 8h40a4 4 0 1 0 0-8ZM228 56.48535v143.0293A12.49909 12.49909 0 0 1 215.51465 212H40.48535A12.49909 12.49909 0 0 1 28 199.51465V56.48535A12.49909 12.49909 0 0 1 40.48535 44h175.0293A12.49909 12.49909 0 0 1 228 56.48535Zm-8 0A4.49023 4.49023 0 0 0 215.51465 52H40.48535A4.49023 4.49023 0 0 0 36 56.48535v143.0293A4.49023 4.49023 0 0 0 40.48535 204h175.0293A4.49023 4.49023 0 0 0 220 199.51465Z'/%3E%3C/svg%3E")}.icon-apps:before{background-image:url("data:image/svg+xml,%3Csvg fill='%23ffffff' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M216 44.00586H40a12.01375 12.01375 0 0 0-12 12v144a12.01375 12.01375 0 0 0 12 12H216a12.01375 12.01375 0 0 0 12-12v-144A12.01375 12.01375 0 0 0 216 44.00586Zm4 156a4.00458 4.00458 0 0 1-4 4H40a4.00458 4.00458 0 0 1-4-4v-144a4.00458 4.00458 0 0 1 4-4H216a4.00458 4.00458 0 0 1 4 4Zm-144-116a8 8 0 1 1-8-8A7.99977 7.99977 0 0 1 76 84.00586Zm40 0a8 8 0 1 1-8-8A7.99977 7.99977 0 0 1 116 84.00586Z'/%3E%3C/svg%3E")}.icon-community:before{background-image:url("data:image/svg+xml,%3Csvg fill='%23ffffff' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M246.40381 143.19434a4.00061 4.00061 0 0 1-5.60108-.7959A55.57857 55.57857 0 0 0 196 120a4 4 0 0 1 0-8 28 28 0 1 0-27.50732-33.26074 4.00013 4.00013 0 0 1-7.85987-1.49219 36.00191 36.00191 0 1 1 54.06494 37.50513 63.58068 63.58068 0 0 1 32.50147 22.84155A3.99993 3.99993 0 0 1 246.40381 143.19434Zm-57.24268 71.05273a3.9998 3.9998 0 1 1-7.1914 3.50391 60.02582 60.02582 0 0 0-107.93946 0 3.9998 3.9998 0 1 1-7.1914-3.50391 67.56008 67.56008 0 0 1 40.90625-35.20581 44 44 0 1 1 40.50976 0A67.56139 67.56139 0 0 1 189.16113 214.24707ZM128 176a36 36 0 1 0-36-36A36.04061 36.04061 0 0 0 128 176ZM60 112A28 28 0 1 1 87.50732 78.73828a3.99989 3.99989 0 1 0 7.85938-1.49219A36.00177 36.00177 0 1 0 41.30225 114.7522 63.5829 63.5829 0 0 0 8.79883 137.5957a4 4 0 1 0 6.39648 4.80469A55.58072 55.58072 0 0 1 60 120a4 4 0 0 0 0-8Z'/%3E%3C/svg%3E")}`,He=async({cacheControl:e})=>{e({staleWhileRevalidate:604800,maxAge:5})},Ke=()=>({date:new Date().toISOString()}),U=q(d(Ke,"s_x6gA60xrXEo")),We=()=>(F(d(Be,"s_vWVwLlNaHlQ")),o(v,{children:[o(Re,null,3,"p0_0"),t("main",null,null,o(G,null,3,"p0_1"),1,null),o(ze,null,3,"p0_2")]},1,"p0_3")),Fe=h(d(We,"s_AFVtdLQxhqM")),Ge=Object.freeze(Object.defineProperty({__proto__:null,default:Fe,onGet:He,useServerTimeLoader:U},Symbol.toStringTag,{value:"Module"})),Ze=()=>o(v,{children:[t("h1",null,null,"Home Page",3,null),o(p,{children:"DASHBOARD",href:"/members/dashboard",[l]:{href:l}},3,"Ro_0")]},1,"Ro_1"),Qe=h(d(Ze,"s_4uBaEu4a7Ac")),Je={title:"Welcome to home page",meta:[{name:"description",content:"this is the home page"}]},Xe=Object.freeze(Object.defineProperty({__proto__:null,default:Qe,head:Je},Symbol.toStringTag,{value:"Module"})),et=()=>{const e=$(I),s=k(!1),n=O();return C(M("s_UEfauscWwKY",[s,n,e])),o(v,{children:t("div",null,null,s.value?o(v,{children:[t("span",null,null,"Redirecting to ",3,null),o(p,{children:t("button",null,{class:"text-sky-500 hover:text-sky-600"},"Dashboard",3,null),href:"/members/dashboard",[l]:{href:l}},3,"Cv_0")]},1,"Cv_1"):o(v,{children:"Please log in"},3,"Cv_2"),1,null)},1,"Cv_3")},tt=h(d(et,"s_DWH5H0sHpx8")),st={title:"Staging",meta:[{name:"description",content:"this is the home page"}]},nt=Object.freeze(Object.defineProperty({__proto__:null,default:tt,head:st},Symbol.toStringTag,{value:"Module"})),z=e=>!!new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(e),lt=async e=>{var u,a;$e.config();const s={isSession:!1,user:{},role:""},n=process.env.SUPABASE_URL,r=process.env.SUPABASE_SECRET_KEY;if(n&&r){const i=Q(n,r),c=(u=e.get("server-access-token"))==null?void 0:u.value,{data:m}=await i.auth.getUser(c);if((a=m.user)!=null&&a.id){s.isSession=!0,s.user=m.user;const{data:f}=await i.from("profiles").select("id, role").eq("id",m.user.id).limit(1);f!=null&&f[0].role&&(s.role=f[0].role)}}return s},rt=async({sharedMap:e,redirect:s,cookie:n})=>{const r=await lt(n);if(r.role!=="free")throw s(302,"/login");e.set("profile",r)},at=({sharedMap:e})=>e.get("profile"),B=q(d(at,"s_oh7n6H8X9ks")),ot=()=>{const[e,s,n]=y();n.value.isSession?e.value=!0:s("/login")},it=()=>{const e=k(!1),s=B(),n=O();return Z(d(ot,"s_WgkLO0Z0SRY",[e,n,s])),t("main",null,null,e.value&&t("div",null,{class:"text-gray-900"},[t("div",null,{class:"text-2xl"},"Welcome to the Dashboard Page",3,null),o(p,{children:t("button",null,{class:"text-sm text-sky-500 hover:text-sky-400"},"Home Page",3,null),href:"/",[l]:{href:l}},3,"pD_0")],1,"pD_1"),1,"pD_2")},ut=h(d(it,"s_7w7YYyGS1d0")),ct={title:"Dashboard",meta:[{name:"description",content:"Members dashboard for Test Web App"}]},dt=Object.freeze(Object.defineProperty({__proto__:null,default:ut,head:ct,onGet:rt,useGetProfile:B},Symbol.toStringTag,{value:"Module"})),gt=e=>o(v,{children:e.message.message&&t("div",{class:e.classText+"transition-all duration-500 text-sm border py-2 px-4 w-full fade-in"+(e.message.status==="error"&&"text-red-600 bg-red-50 border-red-600")+(e.message.status==="warning"&&"text-yellow-600 bg-yellow-50 border-yellow-600")+(e.message.status==="notice"&&"text-sky-600 bg-sky-50 border-sky-600")+(e.message.status==="success"&&"text-green-600 bg-green-50 border-green-600")},null,w(s=>s.message.message,[e],"p0.message.message"),3,"Js_0")},1,"Js_1"),H=h(d(gt,"s_qVqzm1QnNRM")),mt=async()=>{const[e]=y(),{data:s,error:n}=await E.auth.signInWithOAuth({provider:"github",options:{redirectTo:e.url+"staging"}});console.log(`Data: ${JSON.stringify(s)}, 
Error: ${n}`)},pt=async e=>{const[s,n,r]=y();r.message=void 0,r.status="error",s.value=!0;const u=e.target.email.value;if(!z(u)){r.message="You must have a valid email",s.value=!1;return}const{data:i,error:c}=await E.auth.signInWithOtp({email:u,options:{emailRedirectTo:n.url+"staging"}});if(i!=null&&i.user&&!c){r.message="Success. Please check your email/spam folder",r.status="success",s.value=!1;return}else{r.message="There was a problem creating a user. "+(c==null?void 0:c.message),s.value=!1;return}},ft=()=>{const e=D({message:void 0,status:"error"}),s=k(!1),n=R(),r=d(mt,"s_RZswcvlb56s",[n]),u=d(pt,"s_eKGt4z6xr5M",[s,n,e]);return t("div",null,{class:"flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"},[t("div",null,{class:"sm:mx-auto sm:w-full sm:max-w-md"},[o(p,{href:"/",[l]:{href:l}},3,"iS_0"),t("h2",null,{class:"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"},"Log in",3,null),t("p",null,{class:"mt-2 text-center text-sm text-gray-600"},["Or"," ",o(p,{children:"create an account",class:"font-medium text-sky-600 hover:text-sky-500",href:"/signup",[l]:{class:l,href:l}},3,"iS_1")],1,null)],1,null),t("div",null,{class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},t("div",null,{class:"bg-white py-8 px-4 shadow sm:rounded-sm sm:px-10"},[t("div",null,{class:""},[t("div",null,{class:"grid grid-cols-2 gap-3"},[t("div",null,null,t("a",null,{class:"inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50",href:"#"},[t("span",null,{class:"sr-only"},"Log in with Google",3,null),t("svg",null,{class:"h-5 w-5",fill:"currentColor",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},[" ",t("path",null,{d:"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"},null,3,null)," "],3,null)],3,null),3,null),t("div",null,null,t("button",null,{class:"inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50",onClick$:r},[t("span",null,{class:"sr-only"},"Log in with GitHub",3,null),t("svg",null,{"aria-hidden":"true",class:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20"},t("path",null,{"clip-rule":"evenodd",d:"M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z","fill-rule":"evenodd"},null,3,null),3,null)],3,null),3,null)],3,null),t("div",null,{class:"relative py-5"},[t("div",null,{class:"absolute inset-0 flex items-center"},t("div",null,{class:"w-full border-t border-gray-300"},null,3,null),3,null),t("div",null,{class:"relative flex justify-center text-sm"},t("span",null,{class:"bg-white px-2 text-gray-500"},"Or log in with email",3,null),3,null)],3,null)],3,null),t("form",null,{action:"#",class:"space-y-6",method:"POST",onSubmit$:u,"preventdefault:submit":!0},[t("div",null,null,[t("label",null,{class:"block text-sm font-medium text-gray-700"},"Email address",3,null),t("div",null,{class:"mt-1"},t("input",null,{autoComplete:"email",class:"block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm",id:"email",name:"email",required:!0,type:"email"},null,3,null),3,null)],3,null),t("div",null,{class:"flex items-center justify-between"},t("div",null,{class:"text-sm"},o(p,{children:"Problems signing in?",class:"font-medium text-sky-600 hover:text-sky-500",href:"/contact",[l]:{class:l,href:l}},3,"iS_2"),1,null),1,null),t("div",null,null,[t("button",null,{class:"transition-all duration-300 flex w-full justify-center rounded-sm border border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:bg-gray-500 disabled:hover:bg-gray-500 focus:ring-offset-2",type:"submit"},"Log in",3,null),t("p",null,{class:"text-xs text-center text-gray-500 mt-1"},"No password required. Authorize via email.",3,null)],3,null)],1,null),o(H,{classText:"mt-3",message:e,[l]:{classText:l,message:l}},3,"iS_3")],1,null),1,null)],1,"iS_4")},ht=h(d(ft,"s_2gZ5kKqe2wY")),vt=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"})),xt=async()=>{const[e]=y(),{data:s,error:n}=await E.auth.signInWithOAuth({provider:"github",options:{redirectTo:e.url+"staging"}});console.log(`Data: ${JSON.stringify(s)}, 
Error: ${n}`)},bt=async e=>{var b;const[s,n]=y();n.message=void 0,n.status="error",s.value=!0;const r=e.target.email.value,u=e.target.terms.checked;if(!z(r)){n.message="You must have a valid email",s.value=!1;return}if(!u){n.message="You must agree to our terms, privacy and disclamer before signing up",s.value=!1;return}const i=Date.now(),c=(Math.floor(Math.random()*1e6)+r+i).toString(),{data:m,error:f}=await E.auth.signUp({email:r,password:c});if((b=m.user)!=null&&b.id){n.message="Success. Please check your email/spam folder",n.status="success",s.value=!1;return}else{n.message="There was a problem creating a user. "+(f==null?void 0:f.message),s.value=!1;return}},yt=()=>{const e=D({message:void 0,status:"error"}),s=k(!1),n=R(),r=d(xt,"s_9cfSdLzzdWg",[n]),u=d(bt,"s_rJ6GlGrY00o",[s,e]);return t("div",null,{class:"flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"},t("div",null,{class:"sm:mx-auto sm:w-full sm:max-w-md"},[o(p,{href:"/",[l]:{href:l}},3,"ft_0"),t("h2",null,{class:"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"},"Sing Up",3,null),t("p",null,{class:"mt-2 text-center text-sm text-grey-600"},["Or"," ",o(p,{children:"Log in to my account",class:"font-medium text-green-600 hover:text-green-500",href:"/login",[l]:{class:l,href:l}},3,"ft_1")],1,null),t("div",null,{class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},t("div",null,{class:"bg-white py-8 px-4 shadow sm:rounded-sm sm:px-10"},[t("div",null,{class:""},[t("div",null,{class:"grid grid-cols-2 gap-3"},[t("div",null,null,t("a",null,{class:"inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50",href:"#"},[t("span",null,{class:"sr-only"},"Log in with Google",3,null),t("svg",null,{class:"h-5 w-5",fill:"currentColor",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},[" ",t("path",null,{d:"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"},null,3,null)," "],3,null)],3,null),3,null),t("div",null,null,t("button",null,{class:"inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50",onClick$:r},[t("span",null,{class:"sr-only"},"Log in with GitHub",3,null),t("svg",null,{"aria-hidden":"true",class:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20"},t("path",null,{"clip-rule":"evenodd",d:"M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z","fill-rule":"evenodd"},null,3,null),3,null)],3,null),3,null)],3,null),t("div",null,{class:"relative py-5"},[t("div",null,{class:"absolute inset-0 flex items-center"},t("div",null,{class:"w-full border-t border-gray-300"},null,3,null),3,null),t("div",null,{class:"relative flex justify-center text-sm"},t("span",null,{class:"bg-white px-2 text-gray-500"},"Or sign up with email",3,null),3,null)],3,null)],3,null),t("form",null,{class:"space-y-6",onSubmit$:u,"preventdefault:submit":!0},[t("div",null,null,[t("label",null,{class:"block text-sm font-medium text-gray-700"},"Email address",3,null),t("div",null,{class:"mt-1"},t("input",null,{autoComplete:"email",class:"block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm",id:"email",name:"email",required:!0,type:"email"},null,3,null),3,null)],3,null),t("div",null,{class:"flex flex-col items-start justify-between space-y-4"},t("div",null,{class:"flex items-center"},[t("input",null,{class:"h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500",id:"terms",name:"terms",type:"checkbox"},null,3,null),t("label",null,{class:"ml-2 block text-sm text-gray-900"},t("span",null,null,["Agree to"," ",o(p,{children:t("span",null,{class:"text-sky-500 hover:text-sky-400"},"terms",3,null),href:"/terms",[l]:{href:l}},3,"ft_2"),","," ",o(p,{children:t("span",null,{class:"text-sky-500 hover:text-sky-400"},"privacy",3,null),href:"/privacy",[l]:{href:l}},3,"ft_3")," ","and"," ",o(p,{children:t("span",null,{class:"text-sky-500 hover:text-sky-400"},"disclaimer",3,null),href:"/disclaimer",[l]:{href:l}},3,"ft_4")],1,null),1,null)],1,null),1,null),t("div",null,null,[t("button",null,{class:"transition-all duration-300 flex w-full justify-center rounded-sm border border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:bg-gray-500 disabled:hover:bg-gray-500 focus:ring-offset-2",disabled:w(a=>a.value,[s],"p0.value"),type:"submit"},"Sign up",3,null),t("p",null,{class:"text-xs text-center text-gray-500 mt-1"},"No password required. Authorize via email.",3,null)],3,null),o(H,{message:e,[l]:{message:l}},3,"ft_5")],1,null)],1,null),1,null)],1,null),1,"ft_6")},wt=h(d(yt,"s_5aZSva0X07s")),_t=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"})),kt=()=>{const[e]=y();e.name="Works!"},Et=()=>{const e=D({name:"unassigned"});return o(v,{children:[t("h1",null,null,"Test Page",3,null),o(_,{handleFunction:d(kt,"s_ya8jfgW9MqU",[e]),[l]:{handleFunction:l}},3,"PV_0"),t("div",null,null,["Name: ",w(n=>n.name,[e],"p0.name")],3,null)]},1,"PV_1")},St=h(d(Et,"s_J8DlvUiUI1Q")),At={title:"Test Page",meta:[{name:"description",content:"this is the test page"}]},Ot=Object.freeze(Object.defineProperty({__proto__:null,default:St,head:At},Symbol.toStringTag,{value:"Module"})),Dt=[],V=()=>Ge,jt=[["/",[V,()=>Xe],"/",["q-D2lRtswi.js","q-RWSg0W-_.js"]],["login/staging/",[()=>nt],"/login/staging/",["q-CqCs-mva.js"]],["members/dashboard/",[()=>dt],"/members/dashboard/",["q-Ciqnj2e8.js"]],["login/",[()=>vt],"/login/",["q-Bi1pLtCj.js"]],["signup/",[()=>_t],"/signup/",["q-zvVLoAPw.js"]],["tester/",[V,()=>Ot],"/tester/",["q-D2lRtswi.js","q-DYru91wj.js"]]],Tt=[],Nt=!0,Lt="/",Vt=!0,Yt={routes:jt,serverPlugins:Dt,menus:Tt,trailingSlash:Nt,basePathname:Lt,cacheModules:Vt};export{Tt as a,Lt as b,Pt as c,Vt as d,se as g,Ve as m,Yt as q,jt as r,Dt as s,Nt as t};
