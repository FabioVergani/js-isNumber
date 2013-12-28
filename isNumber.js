function isNumber(n){
 var r=0,f=isFinite,k=typeof n;
 if(k!='number'||isNaN(n)){if(k=='string'){if(Number(n)===n){r=1}else if(n.trim()){r=f(n)}}}else{r=f(n)};
 return r;
};


/*

function isNumber(n){
 var r=0,k=typeof n;
 if(k != 'number' || isNaN(n)){
	if(k == 'string'){
	 k=Number(n);
	 if(k === n){
		r=1
	 }else if(n.trim()){
		r=isFinite(n)
	 }
	}
 }else{
	r=isFinite(n);
 };
 return r;
};



//
var areNumber={
 NumberString:['0000','01','1.0','0','0.0','0.42','07','075','5','6','6.5','9','11','11.112','25','99','999','-01','-1','-1.5','-3.5','-123.432','.42'],
 NumberNumber:[0x23,35,0xad,0xfff,0xff,-0,0x0,0x000,0,0.0,8e5,0.42,07,1,1.0,1.1,1.2123,-1,-1.5,-123.423],
};
var nonNumber={
 StringString:['null','-',"a","a2",'blah','dg##$','jklsd0','hallo','sfsd','OxFFF','Oxfff'],
 StringNumeric:['NaN','Infinity','(1/0-1/0)','1.2.3','2123.4','2123.4.0','2123.4.123','1.2,34'],
 StringHtmlHex:["#00","#000",'#abcdef','#fff'],
 NumberNumber:[(1/0-1/0),1/0,Infinity],
 StringBlank:["\n","\t",'\n\r','\t\f','\t\t',' ','  ','    '],
 Objects:[NaN,false,true,null,,undefined,[],[1,2],{}]
};

//
function Test(m){m.forEach(function(x){console.log(typeof x," \t",isNumber(x)?"\u221A":"\u263B"," \t",x)});console.log("\n")};
//
Test(nonNumber.StringBlank);
Test(nonNumber.StringNumeric);
Test(nonNumber.StringHtmlHex);
Test(areNumber.NumberString);
Test(areNumber.NumberNumber);
Test(nonNumber.StringString);
Test(nonNumber.NumberNumber);
Test(nonNumber.Objects);
*/

*/
