/* eslint no-useless-escape: "off" */

const WAVE_ASCII = `
;~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!~;;~~!!~!!!!!!!!!!~!!~~~~~~~;;~~!!!!!!!~~~!~~~~~~~~~~~~~~~~~~~~~!!~!!!!++!!!!!!!!!!!!!!~!~~~~~~;;;;;~~~+
~~~~!!!!!!~!!!!!!!!!!!!+!+!!!!++!+++++==+++++!~~~~~!!~!!!+!!!!!!!!!!!!~;~~;;;~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!~~~~~~~~!!!!!+!!!!!!!!!!!!!~~!~~~~~~~~~~!
~~~~~!~!~~~!!!!!!!!+!!!+!!!!!!+++!+++++!!!!!!~~~~!!~~!!!!!~!!!!!!!~~~~~~~;~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!~~~~~!!~~~~~~~~~~~!!!!!!!!!!!~!!!~~!~~~~~~
~!~~!!^)++!=^~!!~!!!!!!+++!!+!!!!!!!!+++++==++!~~~~~~!+++=^===+!!!~~~~~~~~~~~~~;~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!~~~~!!~~!~~!!!!!!!!!~~~~~~~~~~~~~~~
~!~~!~?^:>!-?!!~!!!!!!!!!!!!!!!!!!!++===++++)^+!!!!~"";;;!+^^|++++!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~;~~;:-\`,,-"!!!!++!!!!!!~~!~~~~~!!!!!~~~~~~~~~~~~~~~~
!!!!!~|)-?^.[!!!!!!!++!+!!!!+!!++!!+++^^~~~_..        \`!;?]\?[+~~+^^+!!!~~~~~~~~~~~~~~~~~~;~~~~;"_::\`.    .-_~~!!+!!!!!!!~!~~~~~~~!!!~~~~~~~~~~~~;;~~~~
!!!!!!\).^:.?!!!++++!+++!~~~!!!!++^^+~,.......       ':l[|[^;'^t^[--:+^^)!!!~~~~~~~~:-,\`\`\`,,----,\`.      ...\`,:;~!!!!!!!!!!~!!~~~~!!!~~~~~~~~~~~~~~~~~~
++?^|+(^.]^.(+++++!!!~;:-,,,,-!~;:'.....,'.....'!=)??|^_)1t?^!.=?l>!!+~??>|~~~!~~~~~_:-\`........          .......''\`,,-~!!!!!!~~~!!~!~~~~~~~~~~~~~~~~~
^^73>^().;+;\^^=~;_:--:----!~;........:!?[+|+-;;=v[l}|Pq?!?t{it]}]~|?|)|^|(!~!!!~!~~~~~;_'.......................\`-:;~!+++++!+!!~!+!!!~~~~~~~~!!~~~~~~~
))(i|^||.'^^\^)^+!!~~;;~^+~........_!^\{|}LBQw1Vu>?RNFKK@dJll):^>ui^{i|1|^\|~~~~~~~~~"::,'''..'............\`:_;~~!!!+++++++++!!+!!++++!!!!!!~~~!!!!!!~~~~
||[q}|??|\:+?\|\\\\()(|^~:.      ....~\[>3{]iQRK@KBUKQP@KKNQVP=?1>?+l|^;-+!;;~;;!??===~,,,,\`\`\`'\`\`''''.....'-_;~~~~!!++++++++++=+=++++==+!!+++++++==~~~~~~~~
?[>z{[[?|\~\>?]???>|-          .-6B22XEL@KND@W$N@@@NKKK@$NNEu}+1bt}\_1^}i|.~!^lttvl!?;,-------,,,,,\`\`\`',_;~~~~!!!++=====++++=^^^===^==++++=^^=^^^^^~~~~~~
[>[P{>cvivii{tcci^'            ..m@WR@@NN@@WV$@K@Hg@M@WEmHK@@@EObz!\?\=>3c1\+|!)=^;:;}l+------------,,,-:;~~!!!++==^^^^====^^^^^^^^^^^^^^^^^^)^)^))^^^~~~
}l{{t{{}}}}lll?=..              .;nE@N@E@KEhNNKKBX@K@RHN@K@KKNNQV~!?zt3^li||t71l^_)i=|=^]+:-::::::::::-_":_~;;~~+^^^^^^^^)^^)))\\\\)))))^)))))(\\\\\|\\\\))^~
3u1lllJJ3yy[+-....... ..\`-.. . .....!)\;|VPPHK@QRW@@Eg@X$@E6sxVuL|=~??iv|t>{);.+u?[?["::~_:__"";;;;~;~~~~~!~!!!!~!^^^^^^^^)(\\\\||\\\\\\\\)^^+=^^))\(\|\\\\\\\\~~~~
UddV2Y6z]!'......._.-;=\[v'......"^~_\`.~tlnn@@@bEWNQD@$@@EPd2|~~~~~~^^{)?i~[||^^!??[ii>^~~~~!!~+!!==^^^=+=!^^^^^^^^^^++^=^^^(\|||\())^^^^^^=^^^^^^^^^~~~~
wqe[^:.........\`)[[][t{[i_...!!.'>1]t[?;-!2P2c^tmQEEEN@@@PYb\^)^)+^!^]|)>}^^=|[y!:ub])][)^^)))^(((\\\\\\\\)||\|||||||\\\\\|\\\\\\\\|||||||\\\\||||||||\\\\\|\\\\|||\(~~~~~~
..'~+\)_^^|--,"{i);-.')|l[ic!~^:+)[^!\|!^>~^))]vb6llYPENQPdh???||??]???]?????|J}utz1C??\????????[[>[?[[[>>[>>[[[[[???][???[[[[>[[[][[[[[[???[[?[[[i[):~~~
..._\|[?iu1\JleXZh[)z^]?l[u}:~~((UX2b?b>2gk+;\[c=|1VbdF@Nggzl}tvittviv{>i>|v>ictvtttvt[vc{ic}}[ivl}i[vctvi>iicttttttctttttttiv}}iivivitttt>itcct3[;...~~~
,:,ll33|[]2>||zW$2X@KQ\-~^+|>[|\`uENQmBB$gKdQe?|+zz@K$W$@ggul3J11llll1}l}l{}ll}??i|v}}[}|3{}llvlll1vi}cJ}}{}}{}l}}lll}l}lllll1l1llll}l}{iitii{u?-...._~~
?t|[}>i2uv=>|?te|sUX$@E=|c^)|\~-^||+|^(|XKE$WX@BRNWm@XK@$NPP1u3uuu3J13333u3J333>Ju|1til133u}Ju3J33l13{ll}1J3333111JJJ333333J133333J1llll}}}lu|-......^~
||[tYizBWNYB%FJY$xhEEBsJ||\[ilsV(c^;?=|2cFRP$KGNNHKHEKHKEN$PLJuuyeyez3zzeeezeuzz}zu1zlzeeyzzzzzzzyez1}zyzzzzuuzzzzzzzzezezezzzzezu331ng3zhZ[-.....+)|[~
~|GqER?^tmEBQNQQ@WddQm2^[eKE3CEKHyi\l3Hh2%$@WXE$N6nZQNWWK@@@gF2x2nnsezxsy2zneynz}?znsssne22nnxsyssnnnsssssxsxysxxnnxxsxnxnnnnsssseenXXhY2>\`.....:1t2d2d
^.-:~?l1lnbdEKKNK@EkVgQVVP$NEZ3gNNFOEVbW$NFQ$$We:...-|?ebPQK@NRbsxxy222yyLY6s1e6l36ysnYLL6262bLL6b6662266LYYYL2L6L66YY6YY66YY66YYCgERFt+'......\|>J6gRR
i=+[^|iit|~|>ltbgQQ@NEBBN$%mX$NgggQ$NNWNKHNWQy+............|FK@HFddVqsnb2bhdVbCdnbuVdPVdPPdqdqdCdnddY6qdCVdPdqdPdPPPPPPkPkdk%FUBDDWmt".....'\`-|?2nbKKK
?v\i)Ju[^_^=xCYzJ6FdgREEQggQWEEEQXGU%gENKEz~..       ...   ..?P$KEgBggP1mFHHHRHHHGGRmRPHHGXRHHBXQRFBBmQXGHXQQQXQQQQQQEQEQQHQdWPBHu+....\`..:l%dX$EN$WEWE
|\mBm|bs[uEE3EGBBPnsnYPZOPwDgg$QBg$$WB%s?-.       .~!.      .-\\\\vbR$$N@KWNENNN@$KKKWENK@@@@@Km}!+}gN@@$@@@@@@@@@@@M@@@@@@gPFddJ^':_=+)?VbZEWK@@@@@@EBOO
:~K@Kg@BWYN@U3zDgXRFRPPPh6LVbztsn]^^~:..      ..-~v^~.        ._}+'\`=>lug$MN@MMM@MMMMMMMM@OJ~-...:.=2WMMMMMMMMMMMM@XEBU6et|=:....-?2bFmmRWK@@EZbsl[i|K
..~G@NWENKK$$NEdnLFw%HXmP}YFZni\-..       .'..==:;!|v;..:    ....~().^\\\\^?xX@MMMMMM@QZDZ2}c}dn2_~vl++\=lZKMMNEYbYz33}[\^!\`;')?=[i(l6DZwqV6zl3sVOk1^!71^!7
...."[ebUgQBgPbsu^+~::~=)~_:--..        ->>)\`:+[[?|c\~^+^|;-??~\`!'.:++(i!_-._>LgWKNEBENKEw6C%W$RWWWWWQXgXGQEGsi>]\):,+[3ezP2PVOYYe[v[|)\]ebbObJ|^?>c|^?>c
.................-":......\`?\^^+~,. !":;t(=+?|>i[^!\~~_[^i[liDPl)):..^ll2s~-}z\-_-)clezy6dPUZkFFb6Y23{>{|)?;,^^)>b2Vn??yxy3li?(\>>ly6VkgQg6i(|>ttilndtilnd
...,!=\\\\)~:.....'(\|~......~+?|)\|!.-~|(^;||+~:,...~^[ti\(Y2lYnUncl|^+:(zENb^|PRb?cZF6i(!:---~~~_~:;~~~++"+(|++^+~";~;:_(zbdFFUPU%HW$$Xs[^?[[>16bVPgRXgRX
....:;l|)?3i[\\\\=1i||=te~:~~+=:_^+||'......~|>t\=+.~-|]l~.'hQW%Ol}t|ieP2:-~um$6LNNNHhgEWg6t?^~!^||^~:,-++!~|J2ec|)^^|{Jzzz2n6CUOZwOU3\~''~^}zPgEBmFwPVhVh
.....--.!!!1l?[+)|\)^h@U>)l+';!>||:-~~)~.,|ve1l}t[??{!~!_.;%EKmR$hit2wFUL}?\!|J6GK@@NQgHNKRCe{|^^^cCVxi]|?cle2dUFmgDV6PgBRHEEQBRPt+"!+^\|||?c{JnbPBENKENK
...;vgggu\bCgNNkgO?$XQXgu)?})?)^+i||t|13_-?)?3vtt\=3\v1t=!-:2K$GW@@Gs}mBg%gFBF2u3sYPBEKKWE$@@K$RqnlcuYBKKWBkOgBgHGWOZBhOdYRGOz^,!|c1x2L22dBQEWQZbszeulszeul
._dNWQZPgmEKXQEWQWEllll^!c^]yl|\^!~\):~|\~1ui[~XKVndxV6J[==~=!1NEHN@WEgP26CPgFmBXgBmgUP}3LVUFgHEWWWKNXPnsYgWZVEEsgEnZQXPl^~'\`~^(|?]]>l3uzssnss2CFEKKKEKKK
:EXXWKVy2BHZEK$6dEEP!]6KRNF3KNN$?zl!)i{][|^=+-.+bZmK$QWb||sz\^\`~zkWWKKNKKRCx}12nsVh6DdPy||????|?]?[t{lll3s>qqedD2V6[\+:"!^\?2DW$WWWW$$$$WWKKKKNW$KKK@KKK@
}WEN$q@$@@NbKKEg@EN@EKRQEKRKHEENKm?__._^;um}~\`:\`i6\]12XEkPg$C:_^,-:|egN$$N@KWmPq2nbbVVhPCbVCdqYVCbYYkVVbLe1>?^+|)(?vzVPFBQEEEXRRQEEHPL1t|(^+~";~~~~;~~~
-ZW@WZNEE@KwQ@$m@WK@qKNREQEKmNEKNN2~~))lx6wQF|iR3V{!=6PGFgN@@Xi2|u(=~=;|uYOHWNNKKNEW$$$NNN$WEHXgZq2u}>\~::::--"|LbCdk%wUkddVbY6nzt|=^^^^(?[tctttv}lll}~
..>QK@WEWKKKQQKWQK@@NBWK$$WWQWKN$E$P[EUG@K[3t!~=!\(ilv|;|^{CdZK@EdwQBb!|+:~)~,~~^)^|citi[||?^|[?||??tttcct>>[??][tiit>t[]?]>v}{{tiivi{t>>ivi}i{iv{}}ll~
  `;

export default WAVE_ASCII;
