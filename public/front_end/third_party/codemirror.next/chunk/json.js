import{L as O,N as e,a as r,i as a,c as t,b as s,d as P,s as Q,t as n,e as o}from"./codemirror.js";const i=O.deserialize({version:13,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[[e.openedBy,7,"{",12,"["],[e.closedBy,8,"}",13,"]"]],skippedNodes:[0],repeatNodeCount:2,tokenData:"(p~RaXY!WYZ!W]^!Wpq!Wrs!]|}$i}!O$n!Q!R$w!R![&V![!]&h!}#O&m#P#Q&r#Y#Z&w#b#c'f#h#i'}#o#p(f#q#r(k~!]Oc~~!`Upq!]qr!]rs!rs#O!]#O#P!w#P~!]~!wOe~~!zXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#g~#jR!Q![#s!c!i#s#T#Z#s~#vR!Q![$P!c!i$P#T#Z$P~$SR!Q![$]!c!i$]#T#Z$]~$`R!Q![!]!c!i!]#T#Z!]~$nOh~~$qQ!Q!R$w!R![&V~$|RT~!O!P%V!g!h%k#X#Y%k~%YP!Q![%]~%bRT~!Q![%]!g!h%k#X#Y%k~%nR{|%w}!O%w!Q![%}~%zP!Q![%}~&SPT~!Q![%}~&[ST~!O!P%V!Q![&V!g!h%k#X#Y%k~&mOg~~&rO]~~&wO[~~&zP#T#U&}~'QP#`#a'T~'WP#g#h'Z~'^P#X#Y'a~'fOR~~'iP#i#j'l~'oP#`#a'r~'uP#`#a'x~'}OS~~(QP#f#g(T~(WP#i#j(Z~(^P#X#Y(a~(fOQ~~(kOW~~(pOV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),c=()=>O=>{try{JSON.parse(O.state.doc.toString())}catch(e){if(!(e instanceof SyntaxError))throw e;const r=function(O,e){let r;return(r=O.message.match(/at position (\d+)/))?Math.min(+r[1],e.length):(r=O.message.match(/at line (\d+) column (\d+)/))?Math.min(e.line(+r[1]).from+ +r[2]-1,e.length):0}(e,O.state.doc);return[{from:r,message:e.message,severity:"error",to:r}]}return[]};const p=r.define({parser:i.configure({props:[a.add({Object:t({except:/^\s*\}/}),Array:t({except:/^\s*\]/})}),s.add({"Object Array":P}),Q({String:n.string,Number:n.number,"True False":n.bool,PropertyName:n.propertyName,null:n.null,",":n.separator,"[ ]":n.squareBracket,"{ }":n.brace})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function g(){return new o(p)}export{g as json,p as jsonLanguage,c as jsonParseLinter};
