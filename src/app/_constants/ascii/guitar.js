/* eslint no-useless-escape: "off" */

const GUITAR_ASCII = `
                                                                                                                                                      
                                                                                                                                                  '_  
                                                                                                                                            .-=?{lct^ 
                                                                                                                                       .:+^>zli}tYLt[)
                                                                                                                                  .!||?llJn}iv]cr[>t>t
                                                                                                                             -+({J}>v{>?tlPel[?l>szLgE
                                                                                                                        -+|l]z[ci>ukziri]{[(?lx2FW$mz)
                                                                                   .....                          ._+^ix}itl[|i|([?l|c|tc|2mB$QVt~.   
                                                                            ,+[ubmQW$$$WRL;                  .;=>ruz?vl6zc?np}|ii|([zJ2mEWDz(,        
                                                                        .(nRNKKKKKKKKKNP?;3+;           ,+??[ei]1lr7tt|[i???>71]|skGWQVt+.            
                                                                      _LWKKKKKKKKKK@@B)~)?n1t,     :=|?Je|izJ}[73T1}t|[c?i[luxkWWgz^-                 
                                                                   '~)dKKKKKKKK@KKK@@U?|tie|:\`;=|?1Jtllt>]>3V31l??7[?]uiiTGEKgz='                     
                                                                  ~yt?QKKKKKKNBY}1t}emZP6zsi}yzi}3uli}Ln>}lt[>]?l[i|nbZN@EY|:                         
                                                               .+sEKKKKKKEU3l"_=+-!|lzn6z1}}3}i{}ly3}t{cit[>?r|?z6RK@KC|-                             
                                                           -(Jw$KKKNHbs^:.))(:;]?[zv(l?iJ^13|>tctc>}c[?r}u?]s6QKMMMKu,                                
                                                    .\`~|1YGNKKKWmn|_.   .=PYy{l31l1[l?l|l|]|l}lJ(|l?ctrtugK@MMMMM@i                                  
                                          .,_!)?}sTBWKKKKKWmn[~...;+!^l|))[iizlsVnz1v1Jiii?t|~|^~>?llt~~[c$MMMMMM6                                   
                            ..:;^|clsYPgXWNKKKKKKKKKK$B6>+--:-_!;;^|l(^>UzuqV[="_;!ltl2Y26z7?[i[|7[;~)?uxz1b$@@@@%,    .:;":,---~=:-:::.              
                   .-~l>J2dmXWNNKKKKKKKKKKKKKKKKKWksl"_~(=+|i|nnJ{uJ?[)=]))v[3JLlYYx2^-..;|}zx66ebx3e62>~\`;.:^}YmGBgmOUEgz~.:)??t7[l+-.!(.            
           .:^[zbFQ$NKNKKKKKKKKKKKKKKKKKKKKQBQNKKEL?(+^l?]J>?7^!l?+^[)rtlv]t?~:_l||rYJ|)!|^++;.-;^)]~\`.-^3dsd2});,\`,-'-\`..~l+~  .+?][i}Jt;            
     ._|JVR$KKKKKKK$L]2VdXE$KKKKKKKKKKK$Yy^|}3J61z{}t[J}||||[|+3l~}t^^?l+?^;[l?b2}t):__::.      :l!:. !uEHB1UZVt~.    .':~^[y?)?l!+|ie|??:            
 .+lTXNKKKKKKKKKKKKmJs{:"?",|3YzYwXWKKK$z}?]u|~,.";_:~|lll]vr77[?|i)={|!c|~^^~?t>-~12HY~\`.  .=3m@MMKHTl~-_;~:,  .=~lr2ZBg%2}>}i-).  :mi?3.            
m$KKKKKKNNWEQQQQQQE$KKKKKNHFqbu[^;=3EKKKXZ232Yv>1+:~!-."!;\`:+=)?vi7[|(^=^l+^=~^|:+vzxu;  :}UNWR@M@@@@@Qc     .)2gEXT{|+=^(|?][e.;"  :x{~|             
KKKKNRBRRQEHQWNN$$EQRGgHKKKKKKKKKKKKKKKKKKKKNEgZbl3L||l=-":. \`:::|t1u[7i|^||~~]zylt_.    ,!|+.)K@2~!;-.    '|mKH3?|][ii]|l))(?1..|..:V?!:             
KKKOPWKEPm(.~[[zYYpHNKKQeNKKKKKKKKNEUz[^l}J6QENKKKNQwPqizC||t+;^|Y?n1=|bWHmkUEKKg}!' |ulnEgZ3.\`:++        .xKN}^?[?|(l?t}1l{ri3  |  .xt:              
KKN2QKK$gPVe1}Y|,~lLmKKQ2NKKKKKKKNRd2}?!!~~;~=?]{3THNKKK$EwPdl||}tt|^^![NKKKKKKKKKd^    -_:22}i|:-..     .1KNi?>|??7t}>?l(l?icy==l!::.                
KKKN%mGQ$KKKKNWHgmEEHEWQKKKKKKKKKKKKKKNHdzt[[c!-.l+_;~tVFR$KKNEgRp2[}LgNKKKKKKKKKKNY'       =|=(|~;v'    ~EKF|>}>|[^7t7t[l+(==!-.                     
KKKKKKK$EQQQQQWNWQQWKKKKKKKKKKKKKNZ7|JbmEKKKKEmF2]~!|?:.-|eXKKKKKKKNKKKKKKKKKKKKKKKg:       }el>??t2+    l$KVz1|?Jl~+=-.                              
KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK$6~?zVQz[y?!>PKKKKKKW%YnFWKKKKKNmPDFCe?!^tYQKKKKKKKKF.      'vez}[7lel    zKKDbrz?_.                                   
KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKHrl=..;zsdVqgENKKKKKKKKKKKKKKQPTsFO1;~|tu6dgUuZKKKKKm)^'       \`!+=!~'    'QKKPYt.                                      
KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKEQWKKKKKKKKKKKKKKKKKKKKKKKhPh>sVhni|u%NN$gzCKKK$e\`    '++=^!!~.       .zKKKd6                                        
KNNKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK$1EQbxb2yWEh3xmnCEKKKW2_.    .l(_^(^+t|      .?WKK$2=                                        
KNNNNNNKNNKNKKNNKKKKKKKKKKNKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKNFYdUOVYCUFmGRG$KKNEL^-      ~Ll}]??l>J;..  -7RKKN1p-                                        
NNNNNNNNNNNNNNNNNNNKNNNNNNKNKKNNNNNKKKKKKKKKKKKKKKNKKKKKKKKKKN$$$KKKKKKKKWTl!\`:;     ^ez3l1l}l7-. .^h$KKB^!y.                                        
ENN$NNNN$NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKNNNNNNNKKKKNKKKKKKKKKNKKKKKKKWC]-  :^ \`~      ..:~!;:,. -!xEKKNx.,n[                                         
,^ng$N$$$$$EPll^tbY2dB$NNNNNNNNNNNNNNNNNNNNNNNNNNNKKNNKNKKKNKKNKKKKKNb):   .-u=?l-        ',   :?6QKKNw^.+7n:                                         
[?l-\`(bERs^.  ,~;.._:~?P$N$$$$$$$$$$$NNNN$NNNNNNNNNNNNNNNNNNKKNKNNNKR~"\`...|l6=>Ti!.     .=)~]bHKKKX1;:)?|J2                                          
:)lc7|(1+^?+::-. \`^tng$$$$$$$W$$$$$$$$$$$$$$$N$$$$NNNNNNNNNNNNNNNNNNW7'    !]^(|)-   .,_~(}bXNKKRJ+\`^1}|(Jq:                                          
 ,l7?l|z|~'-!^^:tgEWWWWWWWWW$W$$W$$WWW$W$W$$$$$$$$$$NNNN$NNNNNNNNNNNNEy+::\`. ..'-;!lcybdR$KKWD3!.\`|lt(|l?J=                                           
   .!)^|".,=^::+=.;({YFHQQQQQQQQQQQQQQQQQQQQQQQEEQEEEEEEEEEEEEEEEEEEEEEQmDCqqqOmGQEEEWEQPz?~. .!(?(^||(|r;                                            
  
`;

export default GUITAR_ASCII;
