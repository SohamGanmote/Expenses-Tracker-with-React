(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),l=n.n(c),s=(n(18),n(5)),i=n(2),r=n(6),o=(n(19),n(0)),j=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),j=r[0],u=r[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),x=b[0],v=b[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+j,date:new Date(x)};e.onSaveExpenseData(n),l(""),u(""),v(""),e.tohideForm()},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){l(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){u(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"button",onClick:e.tohideForm,children:"Cancel"}),Object(o.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},u=(n(21),function(e){var t=Object(a.useState)(0),n=Object(i.a)(t,2),c=n[0],l=n[1];return Object(o.jsx)("div",{className:"new-expense",children:0===c?Object(o.jsx)("button",{onClick:function(){l(1)},children:"Add New Expense"}):Object(o.jsx)(j,{onSaveExpenseData:function(t){var n=Object(r.a)(Object(r.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)},tohideForm:function(){l(0)}})})}),d=(n(22),n(23),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsx)("div",{className:"expense-date__year",children:a}),Object(o.jsx)("div",{className:"expense-date__day",children:n})]})}),b=(n(24),function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})}),x=(n(25),function(e){return Object(o.jsx)("li",{children:Object(o.jsxs)(b,{className:"expense-item",children:[Object(o.jsx)(d,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})});var v=function(e){return 0===e.items.length?Object(o.jsx)("h2",{className:"expenses-list__fallback ",children:"No Expense Found"}):Object(o.jsx)("ul",{className:"expenses-list ",children:e.items.map((function(e){return Object(o.jsx)(x,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},O=(n(26),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})}),h=n(9);n(27),n(28);var m=function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.lebel})]})};var p=function(e){var t=e.dataPoint.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoint.map((function(e){return Object(o.jsx)(m,{value:e.value,maxValue:n,lebel:e.label},e.label)}))})};var f=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Ape",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(h.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(o.jsx)(p,{dataPoint:n})},_=(n(29),function(e){var t=Object(a.useState)("2020"),n=Object(i.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(o.jsx)("div",{children:Object(o.jsxs)(b,{className:"expenses",children:[Object(o.jsx)(O,{selected:c,onChangeFilter:function(e){l(e)}}),Object(o.jsx)(f,{expenses:s}),Object(o.jsx)(v,{items:s})]})})}),g=[],N=function(){var e=Object(a.useState)(g),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{onAddExpense:function(e){console.log("In App.js"),console.log(e),c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(o.jsx)(_,{items:n,filterYear:function(e){console.log(e)}})]})};l.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(N,{}))}},[[30,1,2]]]);
//# sourceMappingURL=main.98174444.chunk.js.map