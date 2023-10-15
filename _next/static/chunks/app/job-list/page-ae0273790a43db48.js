(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{3474:function(e,t,s){Promise.resolve().then(s.bind(s,5823))},5823:function(e,t,s){"use strict";s.r(t);var a=s(9424),n=s(3381),r=s(5954);t.default=()=>{let[e,t]=(0,n.useState)([]),[s,l]=(0,n.useState)([]),[c,i]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let fetchJobs=async()=>{try{let e=await fetch("https://api.openai.com/v1/fine_tuning/jobs",{headers:{Authorization:"Bearer ".concat("")}}),s=await e.json(),a=s.data,n=a.map(e=>fetch("https://api.openai.com/v1/fine_tuning/jobs/".concat(e.id),{headers:{Authorization:"Bearer ".concat("")}}).then(e=>e.json())),r=await Promise.all(n),l=r.map(e=>fetch("https://api.openai.com/v1/files/".concat(e.training_file),{headers:{Authorization:"Bearer ".concat("")}}).then(e=>e.json())),c=await Promise.all(l);r=r.map((e,t)=>({...e,filename:c[t].filename})),t(r)}catch(e){console.error("Failed to fetch jobs:",e)}};fetchJobs()},[""]),(0,n.useEffect)(()=>{l(e)},[e]),(0,n.useEffect)(()=>{c?l(e.filter(e=>"succeeded"===e.status)):l(e)},[c,e]),(0,a.jsx)("div",{className:"bg-white dark:bg-gray-800 min-h-screen",children:(0,a.jsxs)("div",{className:"p-8",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Fine Tuning Jobs"}),(0,a.jsx)(r.Z,{checked:c,label:"Show only succeeded jobs",onChange:i}),(0,a.jsxs)("table",{className:"min-w-full bg-white shadow-md rounded-md mt-4",children:[(0,a.jsx)("thead",{className:"bg-gray-800 text-white",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"w-1/5 py-2",children:"Job ID"}),(0,a.jsx)("th",{className:"w-1/5 py-2",children:"Fine Tuned Model"}),(0,a.jsx)("th",{className:"w-1/5 py-2",children:"Status"}),(0,a.jsx)("th",{className:"w-1/5 py-2",children:"Training File ID"}),(0,a.jsx)("th",{className:"w-1/5 py-2",children:"File Name"})," "]})}),(0,a.jsx)("tbody",{children:s.map(e=>(0,a.jsxs)("tr",{className:"text-gray-700 border-t",children:[(0,a.jsx)("td",{className:"py-2 px-4",children:e.id}),(0,a.jsx)("td",{className:"py-2 px-4",children:e.fine_tuned_model}),(0,a.jsx)("td",{className:"py-2 px-4",children:e.status}),(0,a.jsx)("td",{className:"py-2 px-4",children:e.training_file}),(0,a.jsx)("td",{className:"py-2 px-4",children:e.filename})]},e.id))})]})]})})}},5954:function(e,t,s){"use strict";var a=s(9424);s(3381),t.Z=e=>{let{checked:t,onChange:s,label:n}=e;return(0,a.jsx)("div",{className:"mb-4 flex items-center",children:(0,a.jsxs)("label",{htmlFor:"toggle-switch",className:"flex items-center cursor-pointer",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{id:"toggle-switch",type:"checkbox",checked:t,onChange:e=>s(e.target.checked),className:"sr-only","aria-labelledby":"toggle-label"}),(0,a.jsx)("div",{className:"block w-10 h-6 rounded-full ".concat(t?"bg-green-500":"bg-gray-400")}),(0,a.jsx)("div",{className:"dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ".concat(t?"transform translate-x-full":"")})]}),(0,a.jsx)("span",{className:"ml-3 text-gray-700 dark:text-gray-300",children:n})]})})}},4990:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=s(3381),n=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,s){var a,i={},o=null,d=null;for(a in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,a)&&!c.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:n,type:e,key:o,ref:d,props:i,_owner:l.current}}t.jsx=q,t.jsxs=q},9424:function(e,t,s){"use strict";e.exports=s(4990)}},function(e){e.O(0,[362,95,744],function(){return e(e.s=3474)}),_N_E=e.O()}]);