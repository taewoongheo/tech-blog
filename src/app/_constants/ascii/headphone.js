/* eslint no-useless-escape: "off" */

const HEADPHONE_ASCII = `
                                                                                                                                  
                                                    .:~=^))()(|llll|||l&!_-.                                                      
                                          .~|{x6URQQHHEEQHUmm23ls3lz2n2hQWWWEXZbJl;.                                              
                                     _|yPREFbkFpQEW$NN$WWWWWEEEEWWEN@EWmF6FRH$MMKKE$m6v)-                                         
                                 .(bgQxOgBX$@MMMMMMMMMMMMMMMMMMMMMMMMMM@NHBOmPVWW@@N$FXK$muc;                                     
                              .^JgPZgRKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWEQRQE@M@KW$KHmby^                                  
                            .+z1gHKMMMMMMMMMMMMMM@$WWXgkTbbbbbbbTkFgQQXEN@MMMMMMMMKW$KNHwgBXWKOCqz-                               
                           !c3CR@MMMMMMMMMMMKXdz>^!_'               .:!^)?ubgW@@MMMM@HQMHPQEXQNMEdg2l'                             
                         ^?2QN$NNNKKK@MEdl)-                                  .;|3PE@MMMKP]?JJ1yHNKhmu.                           
                        ttRKMMMMMMMMMm^                                             .=l6PR@2)lvFmRN@HYm|                          
                      ,u}ybZEK@MMMMKt                                                    -?PE]tJgBW@MMOFy                         
                     =z{wgQN@KNNK@E:                                                       ={Hx)UCRHQNMNGF'                       
                    ~utEMM@$WWWWEpl'                                                         =J6R?>xYdQ$K@EH~                      
                   "nvKMMMMMMMMFC.                                                           ~e}W||(lLQNMMEX+                     
                  .ytKMMMMMMM@bb.                                                             -6bK[il62xQ@MHQ)                    
                  e?KMMMMMMMMdd.                                                               -bRK>clPkOB@MRE_                   
                 >]E@MMMMMMMWp:                                                                 ;ZKW|t6OUZE@MGm                   
                l'zz@MMMMMMM@U?                                                                   ^QMZ(pBRE$K@@$v                  
                z>RMMMMMMMMYP                                                                     zHMe?GBBNMMMM$.                 
               -dVKMMMMMMM@zl                                                                    'hK@=zERm$MMMM|                 
               xYgMMMMMMMMZi                                                                       |RME:EM@MMMMMm                 
               mPRMK@MMMM@n!                                                                        b$Mx?MMMMMMM@~                
              :PZMWBUZFZwq}"~                                                                       imMQ.WMMMMMMMe                
              |YEMMWCEgEXXEE|:   ...                                                                :OMK+PMMMMMMMg                
              }2MMMKKKN$K$QssxPgHmEXmb3ll~                                                           }MEu2MMMMMMMW                
              lLW@$KWRMMMM@@@@FN>~^?{bdQmOh|_.                                                   ...^gMkdyMMMMMMMK                
              >2VlgW@@K@MKp6+-~>[^!)ll]+|kW@HJ!:                                          ;^)^|tebl}@MMJPdMMMMMMMK.               
              !phumEdegMQLt. .-LXKRBNK$NKy3KMMK6|+                                   -?>rnyxmNMMMMMmWMXlhKMMMMMMM@.               
              :KmgEllEM$O~  .?$@M@$EEEE@MM@QMMMM$>>^                              ^}uCTH@M@@MMMMKQEEm@lFlqgGHHXEWX                
              {YRT:lBM@V!  :uWMEKKKEREEPkKMMMMMMM@C|l.                         ;JxhF@MM@KKRE@KK$W@KEW$@@EWNK@MMMMK.               
             >E2E;!LMM$}: ->V@OEKRRQEHBHWZgMMMMMMMME|z;                     .[nPg@@QgBZW@WEWN@@KEOENK@MMMMMMMMMMMM2               
            )@UbW.iFMMpu^ ~p$M2MRQHXgBBgEXKOE$MMMMMM@JJ!                  :uPmKMMNgBREWHBPdPBEWKWWER$MMMM@KNKNKWXEMb              
            GMkY@~JXMMm3{._lQM2M@QFmBgEEQE$MBgQMMMMMMM6z+               _ygg@M@WdbGQGl^cbE@EE$KEEZgKMNp3)[PH$$W$M@@M~             
           -@MpYN:}GMM@giu_3WEbM$mgEHEHEEEGE$wUEMMMMMMM2u;            _nmQMMN$$KWGy~:lHKEHEWNKmwHKEu;^yPbv=--~l]JdE@-             
           -N@guN=!XM@W@Rgy6FWZwEWGEXEQXQEEWKNmE$K@MMMMMz6.         ,xRQMMMERHNEb"^d@WEFXEERdFKEEgHgPi:.lsgKMMMMMMku              
            Fm?2KZ_6NNuHWKWyuWKbEWNQEREWEWK$EQWPKKJEMMMM@Jl        |gHM@@KB$N@$tlmWKM$EKNUyF@$GREgl:'[FKMMMMMMMMMML[              
            =$JMMNnlwNedX$NNyPM@bEWRENEWNWWXRBQEbkE_mE@MMHh      ,hg$MMMKN@M@blFEggBQ@@PeE@EWWEEU-!6KMMMMMMMMMMMM$x_              
            .N[@MMNPrBNJdEKM@W$MEbO@WENEWHRRQERETuK:;$WMMMW.    -PmMMMMMMMM@nmWCbTCgKkvmEHE@KWUcrRMMMMMMMMMMMMMMK1{               
             tmYMMMEm6KNZF$MM@@ERNgZ@K$EHQHQHQEXw@glllQXMMMM~   -3PM@whMMMMMMMQ2CZZQhtdEHWMNNQe2NMMMMMMMMMMMMMMMK}2                
              yngMMMQEgNKERWWWK@KBWMWEXEXEEEEHBQgW|]6RQMMMM-  .^sMEOgQM@MMMMMNZne3lw$EKMWEEOm@MMMMMMMMMMMMMMMMErv                 
               bnZMMMWE@EH@UgR@MMMQZQMwE@$WEHRBRg; >FKMMMME   tuMWeHgMK@MMMMMMM@@K@MMMNWWGEMMMMMMMMMMMMMMMMM@6l)                  
                tVu@MM@EWMMMKEQNMMMMZbbbs2LPdbT]- :PNMMMMMl  t|KMEhH@E@M@MMMMMMMMMMM@$WREMMMMMMMMMMMMMMMMMMHtt                 
                 +p}gMMM@QH@M@KWZQMMMKWU2e6^!~-={kWMMMMM@e   6tMMKH@O@@m@MMMMMMMMMMM@QQMMMMMMMMMMMMMMMMMMWt>!                     
                   lz{QMMM@mZXWWKN@ERK@MMKNNNKKMMMM@MMEU|   .1>MMMMbWM2KMMMMMMMMMMM@W@MMMMMMMMMMMMMMMMMQr|)                       
                    ']llXMMM@ghdQXgHNMMKOdFwKWKgNXmpg6?l'     |.WMMMuMEJMMMMMMMMMM@@@MMMMMMMMMMMMMMMMMgc|)                         
                       -;{gWMMMKOTpEXZPhPkZ6d6PpPy3?_        .)(mMMuMTbMMMMMMMMMQKX@MMMMMMMMMMMMMM@Pt])                           
                          .^lPQK@MMEd6dgXEGVel|_               ~lumzmOzMMMM@lNM@bpKMMMMMMMMMMMM@mzt?:                             
                                .'.                                 :x[JFXh! wMNYYMMMMMMMMMM@R63?)                                
                                                                      '+^!_-,(QNwQKMMMM@EZq6>|!                                   
                                                                            .~>lbOO2{|)^:                                       
  `;

export default HEADPHONE_ASCII;
