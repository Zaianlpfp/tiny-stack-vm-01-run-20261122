R=require('fs'),I=process.env.MAKEFUN_INPUT_DIR||'/input',O=process.env.MAKEFUN_OUTPUT_DIR||'/output',N=0,K="01146:;?0000000099999995999599909990000000000000044000000000000058000000000000004414"
for(N=0;++N<41;){
let D='i'+('00'+N).slice(-3),Y=I+'/'+D,X=O+'/'+D,P=R.readFileSync(Y+'/program.bin'),Q=R.readFileSync(Y+'/input.bin'),p=0,S=0,E=0,i=0,l=0,s=[],t=0,C=[],u=0,M=[],o=[],a,b,v,w,L,g,k
while(1){
if(S==1e6){E=10;break}
if(p<0|p>=P.length){E=9;break}
w=P[p]
if(!([0x7fff00ff,0x1f0007,0xf0003][w>>5]>>w&1)){E=5;break}
L=w==1?1:w==2?4:w>47&&w<52?2:0
if(p+1+L>P.length){E=9;break}
S++
k=K.charCodeAt(w)-48
if(t<(k>>2)){E=2;break}
if(t-(k>>2)+(k&3)>256){E=3;break}
if(w<8){
if(w==0){E=0;break}
else if(w==1){s[t++]=(P[p+1]<<24)>>24;p+=2}
else if(w==2){s[t++]=P.readInt32LE(p+1);p+=5}
else if(w==3){t--;p++}
else if(w==4){s[t]=s[t-1];t++;p++}
else if(w==5){v=s[t-1];s[t-1]=s[t-2];s[t-2]=v;p++}
else if(w==6){s[t]=s[t-2];t++;p++}
else{v=s[t-3];s[t-3]=s[t-2];s[t-2]=s[t-1];s[t-1]=v;p++}
}else if(w<35){
if(w==23||w==27){s[t-1]=w==23?-s[t-1]|0:~s[t-1];p++}
else{b=s[--t];a=s[--t]
if(w>18&&w<23&&b==0){E=4;break}
v=w==16?a+b|0:w==17?a-b|0:w==18?Math.imul(a,b):w==19?a/b|0:w==20?a%b|0:w==21?(a>>>0)/(b>>>0)|0:w==22?(a>>>0)%(b>>>0)|0:w==24?a&b:w==25?a|b:w==26?a^b:w==28?a<<(b&31):w==29?a>>(b&31):w==30?a>>>(b&31)|0:w==32?a==b?1:0:w==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0
s[t++]=v;p++}
}else if(w<53){
if(w==51){if(u>63){E=7;break}C[u++]=p+3;p=P[p+1]|P[p+2]<<8}
else if(w==52){if(u==0){E=8;break}p=C[--u]}
else{g=(P[p+1]|P[p+2]<<8)<<16>>16
if(w==48)p+=3+g
else{v=s[--t];p+=(w==49?!v:v)?3+g:3}}
}else if(w<66){
if(w==64){a=s[--t];if(a<0||a>255){E=6;break}s[t++]=M[a]|0;p++}
else{a=s[--t];v=s[--t];if(a<0||a>255){E=6;break}M[a]=v;p++}
}else{
if(w==80){v=s[--t];g=v+'';if(l+g.length>65536){E=11;break}o.push(...Buffer.from(g));l+=g.length;p++}
else if(w==81){v=s[--t];if(l>65535){E=11;break}o.push(v&255);l++;p++}
else if(w==82){s[t++]=i<Q.length?Q[i++]:-1;p++}
else{E=s[--t]&255;break}
}
}
R.mkdirSync(X,{recursive:true})
R.writeFileSync(X+'/stdout.bin',Buffer.from(o))
R.writeFileSync(X+'/exit.txt',E+'')
}
