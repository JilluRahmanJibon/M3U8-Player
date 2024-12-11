import React, { useState, useEffect } from 'react';

const M3U8Player = () =>
{
    const [ playlist, setPlaylist ] = useState([]);
    const [ currentStream, setCurrentStream ] = useState(null);

    // Sample M3U8 data
    const m3u8Data = `EXTM3U
#EXTINF:-1 group-title="BANGLADESHI SONGS" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhiXAC8VnI235ywdhZd2_k7PeFNQ9AIpClw&usqp=CAU" , Lute Le Tu Shakib Khan (2024)
https://vz-ce272881-d38.b-cdn.net/4a90d1fa-8cb5-4947-99c2-e9c67939538f/playlist.m3u8
#EXTINF:-1 group-title="BANGLADESHI SONGS" tvg-logo="https://vz-ce272881-d38.b-cdn.net/48c66526-821d-44b1-b128-105b2eb2ae9b/thumbnail_7a9fee44.jpg" , Jisme Mein Tera Shakib Khan (2024)
https://vz-ce272881-d38.b-cdn.net/48c66526-821d-44b1-b128-105b2eb2ae9b/playlist.m3u8
#EXTINF:-1 group-title="BANGLADESHI SONGS" tvg-logo="https://vz-ce272881-d38.b-cdn.net/48c66526-821d-44b1-b128-105b2eb2ae9b/thumbnail_7a9fee44.jpg" , ZINDAGI TUJHSE Shakib Khan (2024)
https://vz-ce272881-d38.b-cdn.net/62b501d6-b65e-402e-a68f-868e2718426b/playlist.m3u8
#EXTINF:-1 group-title="BANGLADESHI SONGS" tvg-logo="https://vz-ce272881-d38.b-cdn.net/24bef6f4-475a-4c56-ad4f-de8adc493a03/thumbnail_92effa04.jpg" , Buk chin chin korce hai NATOK SONG
https://vz-ce272881-d38.b-cdn.net/24bef6f4-475a-4c56-ad4f-de8adc493a03/playlist.m3u8
#EXTINF:-1 group-title="BANGLADESHI SONGS" tvg-logo="https://vz-ce272881-d38.b-cdn.net/31cfddcd-b6df-4292-a4cd-c40299612353/thumbnail_d57c148e.jpg" , Dang Dang Afran Nisho Song
https://vz-ce272881-d38.b-cdn.net/31cfddcd-b6df-4292-a4cd-c40299612353/playlist.m3u8
#EXTINF:-1 group-title="BANGLADESHI SONGS" tvg-logo="https://vz-ce272881-d38.b-cdn.net/992b6a4d-1582-4aed-9b04-6b48ea7917a6/thumbnail_76c6e260.jpg" , Sanai NATOK SONG 
https://vz-ce272881-d38.b-cdn.net/992b6a4d-1582-4aed-9b04-6b48ea7917a6/playlist.m3u8
#EXTINF:-1 tvg-name="ATN Bangla" tvg-logo="https://edge01.iptv.digijadoo.net/static/atn_bangla.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",ATN Bangla
https://edge01.iptv.digijadoo.net/live/atn_bangla/playlist.m3u8?md5=TclAWUBTBn3y7m-CliseMQ&expires=1733850191&user=d477246e9e724f81a011b847457e71c4   
#EXTINF:-1 tvg-name="ATN News" tvg-logo="https://edge01.iptv.digijadoo.net/static/atn_news.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",ATN News
https://edge01.iptv.digijadoo.net/live/atn_news/playlist.m3u8?md5=qJmEpSY-JF-rPo6p7Wt8IA&expires=1733850201&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Al Jazeera English HD" tvg-logo="https://edge01.iptv.digijadoo.net/static/al_jazeera.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Al Jazeera English HD
https://vz-422a9f06-c69.b-cdn.net/b577221d-d2de-451e-8d01-6b95e73bed58/playlist.m3u8 
#EXTINF:-1 tvg-name="Ananda TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/ananda_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Ananda TV
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/anandatv.stream/playlist.m3u8  
#EXTINF:-1 tvg-name="Arirang" tvg-logo="https://edge01.iptv.digijadoo.net/static/arirang.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Arirang
https://edge01.iptv.digijadoo.net/live/arirang/playlist.m3u8?md5=NEEisXxY9znKV_jNv1L2bg&expires=1733850209&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Asian Tv" tvg-logo="https://edge01.iptv.digijadoo.net/static/asian_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Asian Tv
https://edge01.iptv.digijadoo.net/live/asian_tv/playlist.m3u8?md5=GbaLx6GCKvYAor-WWJl7GA&expires=1733850215&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="BBC Lifestyle" tvg-logo="https://edge01.iptv.digijadoo.net/static/bbc_lifestyle.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",BBC Lifestyle
https://edge01.iptv.digijadoo.net/live/bbc_lifestyle/playlist.m3u8?md5=KiivTqhkQ1zYExYISGixMA&expires=1733850221&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="BBC World" tvg-logo="https://edge01.iptv.digijadoo.net/static/bbc_world.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",BBC World
https://edge01.iptv.digijadoo.net/live/bbc_world/playlist.m3u8?md5=sTo3MDmf2Xg5QIa69iC0NA&expires=1733850227&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="BTV World" tvg-logo="https://edge01.iptv.digijadoo.net/static/btv_world.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",BTV World
http://103.175.242.10:8080/hls/btv/index.m3u8 
#EXTINF:-1 tvg-name="Bangla TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/bangla_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Bangla TV
https://edge01.iptv.digijadoo.net/live/bangla_tv/playlist.m3u8?md5=p0MrhZGhrtrxuVC6XD300g&expires=1733850236&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Bangla Vision" tvg-logo="https://edge01.iptv.digijadoo.net/static/bangla_vision.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Bangla Vision
https://edge01.iptv.digijadoo.net/live/bangla_vision/playlist.m3u8?md5=ZTUh9EH1g5hEsocdYa14Eg&expires=1733850246&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Bijoy TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/bijoy_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Bijoy TV
https://edge01.iptv.digijadoo.net/live/bijoy_tv/playlist.m3u8?md5=rWbKvYHbSGUiyYJj9KTxQQ&expires=1733850252&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Boishakhi Tv" tvg-logo="https://edge01.iptv.digijadoo.net/static/boishakhi_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Boishakhi Tv
https://edge01.iptv.digijadoo.net/live/boishakhi_tv/playlist.m3u8?md5=1qZscNZq4JXL0mYrN4CNwg&expires=1733850258&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="CBEEBIES Asia" tvg-logo="https://edge01.iptv.digijadoo.net/static/cbeebies_asia.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",CBEEBIES Asia
https://edge01.iptv.digijadoo.net/live/cbeebies_asia/playlist.m3u8?md5=cVbOtX5gpqI2z7KZsqx0Lw&expires=1733850264&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="CGTN News" tvg-logo="https://edge01.iptv.digijadoo.net/static/cgtn_news.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",CGTN News
https://edge01.iptv.digijadoo.net/live/cgtn_news/playlist.m3u8?md5=ZgPa3hjGhPShEE6ksTWOFA&expires=1733850269&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="CNN" tvg-logo="https://edge01.iptv.digijadoo.net/static/cnn.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",CNN
https://edge01.iptv.digijadoo.net/live/cnn/playlist.m3u8?md5=BsBBEktKwG7l8ANuSAiu8A&expires=1733850275&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Channel 24" tvg-logo="https://edge01.iptv.digijadoo.net/static/channel_24.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Channel 24
https://edge01.iptv.digijadoo.net/live/channel_24/playlist.m3u8?md5=mpTeNK5vVHfX_2TpWiZEpg&expires=1733850281&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Channel 9" tvg-logo="https://edge01.iptv.digijadoo.net/static/channel_9.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Channel 9
https://edge01.iptv.digijadoo.net/live/channel_9/playlist.m3u8?md5=BN5v1AuSfUUAeu3aJcUYHQ&expires=1733850287&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Channel I" tvg-logo="https://edge01.iptv.digijadoo.net/static/channel_i.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Channel I
https://edge01.iptv.digijadoo.net/live/channel_i/playlist.m3u8?md5=3D2RVzWGsBhFuVnpgX1xVw&expires=1733850295&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="DBC News" tvg-logo="https://edge01.iptv.digijadoo.net/static/dbc_news.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",DBC News
https://edge01.iptv.digijadoo.net/live/dbc_news/playlist.m3u8?md5=ZjVSZPVeNm1ebfBIx3_CDA&expires=1733850303&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="DW" tvg-logo="https://edge01.iptv.digijadoo.net/static/dw.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",DW
https://edge01.iptv.digijadoo.net/live/dw/playlist.m3u8?md5=xyBWVZJNQoXZjN991ouvqA&expires=1733850312&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Deepto TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/deepto_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Deepto TV
https://edge01.iptv.digijadoo.net/live/deepto_tv/playlist.m3u8?md5=C1PnO3nmBt34bI6EqLg-bw&expires=1733850318&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Desh TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfF8DO73YRrwEy8BaKuc769Th5lZI9d5NVCVHoxEPWnGiqHtl35S2PC8&s=10" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Desh TV
https://edge01.iptv.digijadoo.net/live/desh_tv/playlist.m3u8?md5=mQvGbS5jlUJnxgQaNRLVow&expires=1733850325&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Duronto TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/duronto_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Duronto TV
https://edge01.iptv.digijadoo.net/live/duronto_tv/playlist.m3u8?md5=yMBxiv85XUezu4GOchG1NA&expires=1733850333&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Ekattor TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/ekattor_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Ekattor TV
https://edge01.iptv.digijadoo.net/live/ekattor_tv/playlist.m3u8?md5=LxSQnJd2tmQ0M2FbqeF5Pg&expires=1733850340&user=d477246e9e724f81a011b847457e71c4
#EXTINF:-1 tvg-name="Ekushey TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/ekushey_tv.pngo" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Ekushey TV
https://edge01.iptv.digijadoo.net/live/ekushey_tv/playlist.m3u8?md5=mcA8HnF8rJF37fYj1XI0dA&expires=1733850347&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Fox Action Movies" tvg-logo="https://edge01.iptv.digijadoo.net/static/fox_action_movies_hd.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Fox Action Movies
https://edge01.iptv.digijadoo.net/live/fox_action_movies_hd/playlist.m3u8?md5=ugVfF16GCT7Ft9KHH-5SSg&expires=1733850360&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Gaan Bangla" tvg-logo="https://edge01.iptv.digijadoo.net/static/gaan_bangla.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Gaan Bangla
http://103.175.242.10:8080/gaanbangla/index.m3u8 
#EXTINF:-1 tvg-name="Gazi TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/gazi_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Gazi TV
https://edge01.iptv.digijadoo.net/live/gazi_tv_hd/playlist.m3u8?md5=r6sDPanYVzyTHfcMwnIPFQ&expires=1733850372&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Independent TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/independent_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Independent TV
https://edge01.iptv.digijadoo.net/live/independent_tv/playlist.m3u8?md5=mFuUwY0wiE72-Z3Ks_J5tw&expires=1733850379&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Jamuna TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/jamuna_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Jamuna TV
https://edge01.iptv.digijadoo.net/live/jamuna_tv/playlist.m3u8?md5=eHY3FBv7UpPix3WMBJ_cLQ&expires=1733850388&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="MACAU Lotus" tvg-logo="https://edge01.iptv.digijadoo.net/static/macau_lotus.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",MACAU Lotus
https://edge01.iptv.digijadoo.net/live/macau_lotus/playlist.m3u8?md5=_k2rxLZtjacOU7J1UgDh7Q&expires=1733850395&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Maasranga" tvg-logo="https://edge01.iptv.digijadoo.net/static/maasranga.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Maasranga
https://edge01.iptv.digijadoo.net/live/maasranga/playlist.m3u8?md5=HeHIVOKVSIru3goa5hihAw&expires=1733850402&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="NHK World" tvg-logo="https://edge01.iptv.digijadoo.net/static/nhk_world.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",NHK World
https://edge01.iptv.digijadoo.net/live/nhk_world/playlist.m3u8?md5=4bhwCypdiShatlKRRFM1IQ&expires=1733850409&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="NTV" tvg-logo="https://edge01.iptv.digijadoo.net/static/ntv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",NTV
https://edge01.iptv.digijadoo.net/live/ntv/playlist.m3u8?md5=Jss4MDCp3aAQ1fkkICO9Qw&expires=1733850418&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Nagorik TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/nagorik_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Nagorik TV
https://edge01.iptv.digijadoo.net/live/nagorik_tv/playlist.m3u8?md5=_O7O0AuNrb5b_x_R0_T-qA&expires=1733850425&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="News 24 HD" tvg-logo="https://edge01.iptv.digijadoo.net/static/news_24_hd.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",News 24 HD
https://edge01.iptv.digijadoo.net/live/news_24_hd/playlist.m3u8?md5=46AOfnhd_tu9UUxmKvTk8Q&expires=1733850435&user=d477246e9e724f81a011b847457e71c4  

#EXTINF:-1 tvg-name="Nexus TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/nexus_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Nexus TV
https://edge01.iptv.digijadoo.net/live/nexus_tv/playlist.m3u8?md5=hC5aLcloKGevGPKSQloJUw&expires=1733850442&user=d477246e9e724f81a011b847457e71c4 

#EXTINF:-1 tvg-name="Quran TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/quran_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Quran TV
https://edge01.iptv.digijadoo.net/live/quran_tv/playlist.m3u8?md5=PyTJQMxhmUjlytyw674AYA&expires=1733850449&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="RT English" tvg-logo="https://edge01.iptv.digijadoo.net/static/rt_english.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",RT English
https://edge01.iptv.digijadoo.net/live/rt_english/playlist.m3u8?md5=5SbzRBnugb_BQRDPT7IWHw&expires=1733851229&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="RTV" tvg-logo="https://edge01.iptv.digijadoo.net/static/rtv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",RTV
https://edge01.iptv.digijadoo.net/live/rtv/playlist.m3u8?md5=MzNtDJe79zjR1DfcKtDThw&expires=1733850458&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="SA TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/sa_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",SA TV
https://edge01.iptv.digijadoo.net/live/sa_tv/playlist.m3u8?md5=XrMqIHEfo3Od4XGH72kJkw&expires=1733850465&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Somoy News" tvg-logo="https://edge01.iptv.digijadoo.net/static/somoy_news.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Somoy News
https://edge01.iptv.digijadoo.net/live/somoy_news/playlist.m3u8?md5=dYXb0ZXLUVtjK_mn3osyBg&expires=1733850472&user=d477246e9e724f81a011b847457e71c4
#EXTINF:-1 tvg-name="Zee Bangla" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkR9B8oQ7I-2MQvDxDrn7iV-nEk13jiwIZjA&usqp=CAU" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Zee Bangla
https://edge01.iptv.digijadoo.net/live/zee_bangla/playlist.m3u8?md5=s67yV5rrFWM9EMMPzJxf_g&expires=1733850518&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Zee Cinema" tvg-logo="https://edge01.iptv.digijadoo.net/static/zee_cinema.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Zee Cinema
https://edge01.iptv.digijadoo.net/live/zee_cinema_hd/playlist.m3u8?md5=LB_aNkLtRY4NPTFDJhf0ng&expires=1733850527&user=d477246e9e724f81a011b847457e71c4

#EXTINF:-1 tvg-name="Zee TV" tvg-logo="https://edge01.iptv.digijadoo.net/static/zee_tv.png" tvg-id="<built-in function id>" group-title="🅒🅓🅝",Zee TV
https://edge01.iptv.digijadoo.net/live/zee_tv/playlist.m3u8?md5=cKwYUQUcF-SpXdKjIrp7JQ&expires=1733850534&user=d477246e9e724f81a011b847457e71c4
#EXTM3U
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/0b3825e.png" ,BD: AAKASH AATH BANGLA
http://tv.cloudcdn.me:80/live.ts?channelId=79&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/a9682a5.png" ,BD: ABP ANANDA FHD
http://tv.cloudcdn.me:80/live.ts?channelId=40480&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/a9682a5.png" ,BD: ABP ANANDA INTERNATIONAL FHD
http://tv.cloudcdn.me:80/live.ts?channelId=44160&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/9a53b71.png" ,BD: ASIAN TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=80&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/9370f9a.png" ,BD: ATN BANGLA FHD
http://tv.cloudcdn.me:80/live.ts?channelId=81&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/9666288.png" ,BD: ATN BANGLA HD UK
http://tv.cloudcdn.me:80/live.ts?channelId=82&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/3d373fe.png" ,BD: ATN NEWS FHD
http://tv.cloudcdn.me:80/live.ts?channelId=83&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/0501848.png" ,BD: BANGLA VISION FHD
http://tv.cloudcdn.me:80/live.ts?channelId=84&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/35e8292.png" ,BD: BIJOY TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=85&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/4f0ebd2.png" ,BD: Boisakhi TV
http://tv.cloudcdn.me:80/live.ts?channelId=86&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/64a57f7.png" ,BD: CHANNEL 24 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=87&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/a4df804.png" ,BD: CHANNEL 9 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=88&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/458b683.png" ,BD: CHANNEL I FHD
http://tv.cloudcdn.me:80/live.ts?channelId=89&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/0470894.png" ,BD: COLORS BANGLA FHD
http://tv.cloudcdn.me:80/live.ts?channelId=92&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/5e0f18a.png" ,BD: Channel S HD UK
http://tv.cloudcdn.me:80/live.ts?channelId=91&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/cdb82e2.png" ,BD: DBC NEWS FHD
http://tv.cloudcdn.me:80/live.ts?channelId=29197&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/f9e40a0.png" ,BD: DD Bangla
http://tv.cloudcdn.me:80/live.ts?channelId=36290&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/cccb3a0.png" ,BD: DESH TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=93&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/cdfa406.png" ,BD: DHOOM MUSIC BANGLA
http://tv.cloudcdn.me:80/live.ts?channelId=94&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/69fbad8.png" ,BD: Discovery Channel Bengali
http://ktv.im:8080/live/678900/678900/86102.ts
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/40bbf33.png" ,BD: Duronto TV
http://tv.cloudcdn.me:80/live.ts?channelId=74553&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/1b0585e.png" ,BD: EKATTOR TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=95&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/d1b2b01.png" ,BD: EKUSHEY TV BANGLA
http://tv.cloudcdn.me:80/live.ts?channelId=96&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/ef5d237.png" ,BD: Enterr 10
http://tv.cloudcdn.me:80/live.ts?channelId=48006&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/2c1cf9a.png" ,BD: GAZI TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=98&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/ef8fe5b.png" ,BD: Gaan Bangla
http://tv.cloudcdn.me:80/live.ts?channelId=97&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/342301c.png" ,BD: INDEPENDENT TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=99&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/bfae364.png" ,BD: ION TV UK
http://tv.cloudcdn.me:80/live.ts?channelId=90230&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c53b92d.png" ,BD: JAMUNA TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=100&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/e7d0922.png" ,BD: KOLKATA TV
http://tv.cloudcdn.me:80/live.ts?channelId=44151&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/d60bd7b.png" ,BD: Khusboo TV
http://tv.cloudcdn.me:80/live.ts?channelId=44162&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c11f0a5.png" ,BD: MILLENNIUM TV USA FHD
http://tv.cloudcdn.me:80/live.ts?channelId=44161&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/bae4070.png" ,BD: MOHONA TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=103&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c27b9d9.png" ,BD: MOVIE BANGLA
http://tv.cloudcdn.me:80/live.ts?channelId=104&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/6a23fc3.png" ,BD: MY TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=106&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/05fc92c.png" ,BD: Maasranga TV
http://tv.cloudcdn.me:80/live.ts?channelId=101&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/69d0e8f.png" ,BD: NEWS 24 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=107&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/dafd243.png" ,BD: NEXUS TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=90300&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/e2123f5.png" ,BD: NRB TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=74625&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/5e80f1e.png" ,BD: NTV BANGLA FHD
http://tv.cloudcdn.me:80/live.ts?channelId=109&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/cf7136f.png" ,BD: NTV BANGLA UK FHD
http://tv.cloudcdn.me:80/live.ts?channelId=110&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/e3c6947.png" ,BD: Nandan TV
http://tv.cloudcdn.me:80/live.ts?channelId=74623&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/730f3d9.png" ,BD: News Time Bangla
http://tv.cloudcdn.me:80/live.ts?channelId=108&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c71fdcc.png" ,BD: News18 Bangla
http://tv.cloudcdn.me:80/live.ts?channelId=47440&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/178a27b.png" ,BD: RPLUS NEWS
http://tv.cloudcdn.me:80/live.ts?channelId=22781&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c49de0f.png" ,BD: RTV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=112&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/af5f17b.png" ,BD: Ruposhi Bangla
http://tv.cloudcdn.me:80/live.ts?channelId=113&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/485b2b0.png" ,BD: SA TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=114&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/9d89ea7.png" ,BD: SOMOY NEWS FHD
http://tv.cloudcdn.me:80/live.ts?channelId=115&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/25e6462.png" ,BD: STAR JALSHA FHD
http://tv.cloudcdn.me:80/live.ts?channelId=116&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/25e6462.png" ,BD: STAR JALSHA FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=116592&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/277cbc3.png" ,BD: STAR JALSHA MOVIES FHD
http://tv.cloudcdn.me:80/live.ts?channelId=117&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/33b8bba.png" ,BD: Sangeet Bangla
http://tv.cloudcdn.me:80/live.ts?channelId=38893&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/1fd2c40.png" ,BD: Sony Aath
http://tv.cloudcdn.me:80/live.ts?channelId=44150&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c2be9da.png" ,BD: TIME TELEVISION USA FHD
http://tv.cloudcdn.me:80/live.ts?channelId=118&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/1638604.png" ,BD: TV9 BANGLA FHD
http://tv.cloudcdn.me:80/live.ts?channelId=90234&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/671d049.png" ,BD: Zee 24 Ghanta
http://tv.cloudcdn.me:80/live.ts?channelId=78&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/eee0e0e.png" ,BD: Zee Bangla Cinema
http://tv.cloudcdn.me:80/live.ts?channelId=119&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="BENGALI" tvg-logo="http://ujm.from-in.com/panel/imageicon/8067afa.png" ,BD: Zee Bangla FHD
http://tv.cloudcdn.me:80/live.ts?channelId=120&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTM3U
#EXTINF:-1 group-title="Documentary" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Animal_Planet_logo.svg/2560px-Animal_Planet_logo.svg.png" ,Animal-planet
https://tiger-hub.vercel.app/Mehedi-hasan/Multi-language/Animal-planet.m3u8
#EXTINF:-1 group-title="Documentary" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjth5Bach8YZJLsxwYpfX8TqmeqVntikYzUw&s" ,National Geographic
https://tiger-hub.vercel.app/Mehedi-hasan/Multi-language/National-geographic.m3u8
#EXTINF:-1 group-title="Documentary" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbRVJHWjXTbxmEHtduPC2ub0ExPWJ6nJHCw&s" ,D-max
https://tiger-hub.vercel.app/Mehedi-hasan/Multi-language/D-max.m3u8
#EXTINF:-1 group-title="Documentary" tvg-logo="https://static.wikia.nocookie.net/wildkratts/images/1/19/Discovery_Kids_logo.png/revision/latest?cb=20170421013828" ,Discovery-kids
https://tiger-hub.vercel.app/Mehedi-hasan/Multi-language/Discovery-kids.m3u8
#EXTINF:-1 group-title="Documentary" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0B3J6K0lX7zsdxG_s0g8vl6v0FrNVt_Virg&s" ,Discovery-science
https://tiger-hub.vercel.app/Mehedi-hasan/Multi-language/Discovery-science.m3u8
#EXTINF:-1 group-title="Documentary" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmme1qnhKYlSSPPjV6SAciAYPJdP7pwj_r6A&s" ,Discovery-turbo.m3u
https://tiger-hub.vercel.app/Mehedi-hasan/Multi-language/Discovery-turbo.m3u8
#EXTINF:-1 group-title="Documentary" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Wi0QSYyY9D6OlSXSiZ_O7tKKK_1-LkK9vQ&s" ,Investigation-discovery
https://tiger-hub.vercel.app/Mehedi-hasan/Multi-language/Investigation-discovery.m3u8
#EXTINF:-1 group-title="Documentary" tvg-logo="https://static.wikia.nocookie.net/discovery-inc/images/c/cf/TLC.png/revision/latest/scale-to-width-down/340?cb=20240107214428" ,Tlc
https://tiger-hub.vercel.app/Mehedi-hasan/Multi-language/Tlc.m3u8
#EXTINF:-1 group-title="Documentary" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQzwTU_MISqranFXUQmCNzsvEYReSlkP_yw&s" ,Discovery
http://ktv.im:8080/live/678900/678900/86102.ts
#EXTINF:-1 group-title="Documentary" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Food_Network_logo.svg/1200px-Food_Network_logo.svg.png" ,Food-network
https://tiger-hub.vercel.app/Mehedi-hasan/Multi-language/Food-network.m3u8
#EXTINF:-1 group-title="Documentary" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqxE2DRyY93_PJMONS_gF3zSiyDob-u4RWQ&s" ,Travel-channel
https://tiger-hub.vercel.app/Mehedi-hasan/Multi-language/Travel-channel.m3u8
#EXTINF:-1 group-title="Today's Live Match" tvg-logo="https://banglatechclub.com/wp-content/uploads/2024/10/Bangladesh-Premier-League-5-780x470.jpg" ,BPL 2025
http://rolextv.asia/12345/54321/27807
#EXTINF:-1 group-title="Today's Live Match" tvg-logo="https://criczine.cricdiction.com/wp-content/uploads/2024/11/Sydney-Thunder-Women-vs-Perth-Scorchers-Women.jpg" ,Cricket Live 
https://live2.shoq.com.pk/live/eds/Criclife2/DASH/Criclife2.mpd?|drmScheme=clearkey&drmLicense=4301796d6d67374043c4a43c18dff7ea:96a3dc8766317aa169149a604928ebb6
#EXTINF:-1 group-title="CRI  | T20 World Cup (2024)" tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU0uDNJ8Wv6c8m0OUvDc3KQ3ExGZJyISqJIW4YyXb16FxVhPr4WTs1vIRVJWg4UIkVOhdjkrlISO3dl5QbmDBSFNbYm24Gpzt5IlSbm_un6Wmj4b8nubXjCDJhilzNnMsqeGFEgModhdzANqiWo6e0WAYlq8PvzGJAiYJDea5ssMduPSjCqyw48D3qRh4/s3264/20240829_103925.png" ,PTV Sports HD
http://xtv.ooo:8080/810523/322522/220059
#EXTINF:-1 group-title="CRI  | T20 World Cup (2024)" tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU0uDNJ8Wv6c8m0OUvDc3KQ3ExGZJyISqJIW4YyXb16FxVhPr4WTs1vIRVJWg4UIkVOhdjkrlISO3dl5QbmDBSFNbYm24Gpzt5IlSbm_un6Wmj4b8nubXjCDJhilzNnMsqeGFEgModhdzANqiWo6e0WAYlq8PvzGJAiYJDea5ssMduPSjCqyw48D3qRh4/s3264/20240829_103925.png" ,bdixiptvbd Ten sports HD
http://xtv.ooo:8080/810523/322522/220060
#EXTINF:-1 group-title="CRI  | T20 World Cup (2024)" tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU0uDNJ8Wv6c8m0OUvDc3KQ3ExGZJyISqJIW4YyXb16FxVhPr4WTs1vIRVJWg4UIkVOhdjkrlISO3dl5QbmDBSFNbYm24Gpzt5IlSbm_un6Wmj4b8nubXjCDJhilzNnMsqeGFEgModhdzANqiWo6e0WAYlq8PvzGJAiYJDea5ssMduPSjCqyw48D3qRh4/s3264/20240829_103925.png" ,bdixiptvbd Willow Live 
http://xtv.ooo:8080/810523/322522/220061
#EXTINF:-1 group-title="CRI  | T20 World Cup (2024)" tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU0uDNJ8Wv6c8m0OUvDc3KQ3ExGZJyISqJIW4YyXb16FxVhPr4WTs1vIRVJWg4UIkVOhdjkrlISO3dl5QbmDBSFNbYm24Gpzt5IlSbm_un6Wmj4b8nubXjCDJhilzNnMsqeGFEgModhdzANqiWo6e0WAYlq8PvzGJAiYJDea5ssMduPSjCqyw48D3qRh4/s3264/20240829_103925.png" ,bdixiptvbd Star Sports 1HD
http://xtv.ooo:8080/810523/322522/220062
#EXTINF:-1 group-title="CRI  | T20 World Cup (2024)" tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU0uDNJ8Wv6c8m0OUvDc3KQ3ExGZJyISqJIW4YyXb16FxVhPr4WTs1vIRVJWg4UIkVOhdjkrlISO3dl5QbmDBSFNbYm24Gpzt5IlSbm_un6Wmj4b8nubXjCDJhilzNnMsqeGFEgModhdzANqiWo6e0WAYlq8PvzGJAiYJDea5ssMduPSjCqyw48D3qRh4/s3264/20240829_103925.png" ,bdixiptvbd Star Sports Hindi1 HD
http://xtv.ooo:8080/810523/322522/220063
#EXTINF:-1 group-title="CRI  | T20 World Cup (2024)" tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU0uDNJ8Wv6c8m0OUvDc3KQ3ExGZJyISqJIW4YyXb16FxVhPr4WTs1vIRVJWg4UIkVOhdjkrlISO3dl5QbmDBSFNbYm24Gpzt5IlSbm_un6Wmj4b8nubXjCDJhilzNnMsqeGFEgModhdzANqiWo6e0WAYlq8PvzGJAiYJDea5ssMduPSjCqyw48D3qRh4/s3264/20240829_103925.png" ,bdixiptvbd Sky Sports Cricket 
http://xtv.ooo:8080/810523/322522/220064
#EXTINF:-1 group-title="CRI  | T20 World Cup (2024)" tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU0uDNJ8Wv6c8m0OUvDc3KQ3ExGZJyISqJIW4YyXb16FxVhPr4WTs1vIRVJWg4UIkVOhdjkrlISO3dl5QbmDBSFNbYm24Gpzt5IlSbm_un6Wmj4b8nubXjCDJhilzNnMsqeGFEgModhdzANqiWo6e0WAYlq8PvzGJAiYJDea5ssMduPSjCqyw48D3qRh4/s3264/20240829_103925.png" ,bdixiptvbd server 7
http://xtv.ooo:8080/810523/322522/220065
#EXTM3U
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BNGQ2MmE2YzItNjQ5YS00ODZkLTliNGQtZjgzZjk0YjdjOGU2XkEyXkFqcGc@._V1_QL75_UX490_.jpg" ,DARD & Dorod(2024)
https://ngr2dnwrdasv7gvg.pradoi.com/hls2/01/06055/hof2vjllmbyy_n/index-v1-a1.m3u8?t=QTr_KoDWHV0_9PQQbyVEfwQZI5WWgvfdHo0fO4xXgBI&s=1732096844&e=129600&f=30320544&srv=Gy4KXLg7mXRDXE7k&i=0.0&sp=500&p1=Gy4KXLg7mXRDXE7k&p2=Gy4KXLg7mXRDXE7k&asn=24432
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://upload.wikimedia.org/wikipedia/en/a/a1/Stree_2.jpg" ,Stree 2 Horror Movie Bangla Dubbed (2024)
https://ottbangla.sliposnc.workers.dev/0:/Stree.2.2024.Bengali Dubbed Ottbangla.lol.mp4
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://upload.wikimedia.org/wikipedia/en/c/c0/Bossgiri.jpg" ,Boss Giri (2016)
https://vod.bioscopelive.com/vod/vod/k/A/kANK8AWeY9L/kANK8AWeY9L_1080p.m3u8
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES " tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVaEsXK35wuBt4uyKpgk7g3GqcUKOkZ4YmJwRTR5WdebbVfFfmcrcl5Q2_hrQGRuOfgOWBaWP99Q-yxBmveKqv2jqof31Ll7PhKSpit0kiJ7hYqadneCjPAMGkuQeYxQqxhQEh_Sj5eALqy1CGVZuOgRQUJxvMAQjdxpS4rkre22lJ6cT5dKKXEH6i/w600/Screenshot%20(382).png" , Hotel Releux (2024)
https://be7713.rcr82.waw05.cdn112.com/hls2/03/05209/ufq2vtc6ckwj_h/index-v1-a1.m3u8?t=frcklkOKGldd2iNiHgIwdZveIIOCqPVECg5zipvfnE0&s=1731593857&e=10800&f=26474608&srv=30&asn=138983&sp=4000&p=
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMva9VB-RONHXv3qTPjasIMI5du0OCstEcEATWhhjLctAwlbi3nfd90CCGgtoSWvLT0oxze6xPvqCa5INnutQ9LtsdbpuvDE-Lwbx1lVebzHg3smEz9OOZYPcABFy3VfQYYs4KNSPZzAgn2wMOtE36BTfjRF7r5DD7XOhHoPljtJQ0DE-QIKiwfhJy964/s320/1000006818.jpg" ,DOROD DARD(2024)
https://ngr2dnwrdasv7gvg.pradoi.com/hls2/01/06055/hof2vjllmbyy_n/index-v1-a1.m3u8?t=QTr_KoDWHV0_9PQQbyVEfwQZI5WWgvfdHo0fO4xXgBI&s=1732096844&e=129600&f=30320544&srv=Gy4KXLg7mXRDXE7k&i=0.0&sp=500&p1=Gy4KXLg7mXRDXE7k&p2=Gy4KXLg7mXRDXE7k&asn=24432
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BNzdlMDUyZGItYTBkYS00OWJjLTkyMjYtZGE0ZDVjYmQ1ZWJjXkEyXkFqcGc@._V1_QL75_UX290_.jpg",Tofaan(2024)
https://vacdn.hakunaymatata.com/resource/cf73e0fe199f6d7b2b035a29ccbf568e.mp4?Expires=1732674236&Signature=SU8eu-NsQA6wJd-0p6B6Y3SrcCq6XUxfjlbKxtnDgHbPBxPaM~d1ZAfNg6SrSX8lW9Wd2p-stqDzhmwpXS4k2l78wZYtlIX7573k9EjEW~V-LBCg7GbFKWOGVL2qe4TOyTKBA2RI3xYhcxA0sdP4FNecECtYxei349IvYonYbG5Di9K0J61dqxZRka6iJjKtSFu10ZYFnNIGlSZqX67UHQn1x8U8PVWMhViUuAGzwuPXvgkXlz632gvhvbIINXvRpSCq2kyGuDUawcv203msKViQ41evq~VxdllGAqA8akby1J08cyFRSg2oI7cYcucbXHzh3gs5uPdJ18mhf6Sthg__&Key-Pair-Id=KIRMWBLZ0XCIZ
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xF4QpPsL0pB8Q8XuQlEJCgMbFnm.jpg" ,Kolkata Diaries
https://vacdn.hakunaymatata.com/resource/1d99a7561d7d84c36367eb16bb460f11.mp4?Expires=1731035151&Signature=E7uvBCq9HDO1fxSXo3xGf0DAGHq6SoK-~ZtpxcV0wxl6DY6ohnhHi7v534Mvc20iuaj0eGmL2O0TL7DM579whC4Ae2bljCiif0sLhTAxyHfMVHNi0ekluaqDd4Rf7JtEToF8esqCSkk~vj2jxpThosq5Zd~QhTQXiCjMjor-ERd~uu7t-a4QzM00VUbANko1nJi5AYZcxirZpBCu-OhhdWF~sxqY~SDbY-u-QOUoGyEGFS739T0g1soXCwOmjhQyuTz7uHhGX582Wfh9Vxm0MJL5MponD63Yf6LVmG~BSJINhXkLL7-KG1Pmh2P0s5rj3HitvKI-q9EzEekJ0Z-ISQ__&Key-Pair-Id=KIRMWBLZ0XCIZ
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BYTliZGIxOTAtODgxMy00MjA2LTk1NmYtMmI5ZWVkNTAzNjUyXkEyXkFqcGc@._V1_QL75_UX166_.jpg" , Jinn Bengali Horror Film (2023)
https://vacdn.hakunaymatata.com/resource/2e9715ed1717e6202540e0e47a26fe7c.mp4?Expires=1731045112&Signature=Ag7mV~ENHwpJE80qBD10Q-vIfBeLajS67myYAnRW8RMlGkdG-b1MY1ez9q6yApKoeEPoPNY8It7PXfoFMm1jQscRD8S6kP700VQKyhSxZl0F719eLFlzqQ7IN~ebLqMKHeHfZOa83IfbVFv1eKxve1Y~QF16EzFPpESvljQuDp-on0p2Y14wdr1lA50-PlsJRysOWl7SUIm8elVYlWAmqJFqITbJJ6RX~Q~attYx-tsjsrYoJwYpaifN7WaYnRXDhgywEfQMquuHaSKhfDVXJh8DRS5rvpzRIU8JyUoRYEfefDpjGR-aIoIEizt-SqF-B~2uHP3uySsl0LtUrRt2sA__&Key-Pair-Id=KIRMWBLZ0XCIZ
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BYWRiYjE4NGItYzA4OS00MmNlLWIxZDItMjc5M2JiNTkzZTUwXkEyXkFqcGc@._V1_QL75_UX290_.jpg" ,Mona Jinn 2 Bengali (2024)
https://elss36gx1qtp.cdn-jupiter.com/hls2/01/05191/orvnsxdyh1d1_n/index-v1-a1.m3u8?t=AI1TS016vAnmgG0wmJKxg_Z_4dJ986oNzIKavkSnnHU&s=1731432444&e=129600&f=25956649&srv=y60mtxjwsl4c&i=0.4&sp=500&p1=y60mtxjwsl4c&p2=y60mtxjwsl4c&asn=138983
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://upload.wikimedia.org/wikipedia/en/6/6e/Nabab_poster.jpg" , NABAB Movie (2017)
https://be4242.rcr52.ams03.cdn112.com/hls2/03/05418/gsgyfndkt2v8_x/index-v1-a1.m3u8?t=RVURogRicITKpvyohvMH4_Ryc-60XCbq5TjJxCZLwj8&s=1731593023&e=10800&f=27093151&srv=31&asn=138983&sp=5500&p=
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2cdKbF7aZbdFgmSEPCAvEJ87s2X.jpg" ,Araal (2022)
https://vacdn.hakunaymatata.com/resource/8c769cc1350926157f8855abd1488f77.mp4?Expires=1731049569&Signature=YiLrw5FCcnxARzyj5aieyCaMbZIwzLZdhDWnSBJ~kCKGx6Ioe7y5JtcvFspSrRLSDKadOztdlbMWDiUKfukCbVwMP6DR2oiTLU6Er6gCAcbXgpGCxBt1s8qJWMUKc43r3fwO7ahYk-9mFv4vmzDmMYGB00xdLHPWQS6xbt2lrgFsbenL2FInKRvcH7BMBkK90NVpHctxoDoDHKaz-kJzjLfd5i0b5ggCDGoRPLzEttANaqU85mqgNyXlRuixGVlUePUAQXScOQK5irV3dkNvhBpxT74x57ZgMdBRRcjqyJQBl3vHduWk~~zbaRf-nHiJfh8vdDw-IVsm-~-kg4XyKA__&Key-Pair-Id=KIRMWBLZ0XCIZ
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://i0.wp.com/www.themoviedb.org/t/p/w600_and_h900_bestv2/ol1mBW01T2WlXYoqsi04j212xUf.jpg?w=185&resize=185,278&ssl=1" ,Lider Ami Bangladesh(2023)
https://fgr214l.cloudatacdn.com/u5kjzvh5fpclsdgge7n6o3q6ivke2dztvvch5ncl5grdup5xpxijqwj34pkq/mu0pm1fiaf~X1K56hWvpM?token=0dco1pevw50h6seeb6rug8bw&expiry=1729840452364
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://upload.wikimedia.org/wikipedia/en/c/cf/Shikari_Second_Theatrical_Poster.jpeg" ,Shikari (2022)
https://vgorigin.hakunaymatata.com/resource/1510475ac420cbefc88351b3e9d46a80.mp4?Expires=1731052521&KeyName=wefeed&Signature=7eKq3yDeZqhMB2jIpobMS2mlGKD1lszG5lnE4lkILH4FebKuUCbdHS2dRwpqnMA73lRzLCs7Uk_haf6fHwylBA
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BZjIwYzMxMDMtNzY2OS00Y2YyLTg4NzMtZTRiODAyODZiMzVjXkEyXkFqcGc@._V1_QL75_UX360_.jpg" ,prioyotoma (2024)
https://vgorigin.hakunaymatata.com/resource/2c5e5002a5ab3b649590947805e36e7d.mp4?Expires=1731046269&KeyName=wefeed&Signature=UYPe6noEobeBdIXf4EsXMGxOkUIwverN2Ln_522XMi4eGuOLnAm4JTjoGH_Mh5ZFCZBteVKGswWOL8SO-sjeBA
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BNDg0OTA2MzUtODgwMC00N2FmLTgyMjctYzU2NmViMzI5MDU1XkEyXkFqcGc@._V1_QL75_UX436_.jpg" ,Surongo (2024)
https://vacdn.hakunaymatata.com/resource/add7a3d76bccdcb10b80a7271698fd94.mp4?Expires=1731044814&Signature=kaMzZX6tHqogAAd1uctVlNlGHPn5iGhLJkCstJsbeG-~e5AyrlMQxJ3Y5N8n~xJuzgsm1VaG0NiIywkDKPMqmONDbiLQsjf9p7L6EahFWUYeQcAjTF9XJH7IqBADr71uxjLwVeziysYxwdo1QsG6pps7b4umUPzK4p9M-xXBpEDT-E-U01yjH89ppNKAJ-xXVaumVAMntzsKDcT96rlkV-n9yfMEK0OXlpNcTbSrrwfYwJkVH2tFDfmPdZ6VVu5KBIzTqH3v2enlF0Rv8A6NWoVCqu3k2IewVJwsOFerfAUG-aVFSOeEBQ6TIAtTJT-tEaG~wT6m9UcNZ8JOX6zRvw__&Key-Pair-Id=KIRMWBLZ0XCIZ
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://filmfare.wwmindia.com/content/2024/oct/pushpa2newdate11729763120.jpg" ,Pushpa 2
http://ktv.im:8080/873747737/637763736/365358.mkv
#EXTINF:-1 group-title="BANGLADESHI MOVIE & SERIES" tvg-logo="https://i2.wp.com/cdn.bongo-solutions.com/919f93a7-400e-4149-a70d-204beb589074/content/670bfb60-a49c-4413-9157-24632315e305/982f1d8b-54a0-4f1b-9dd7-0a1ce38f8624.jpg" ,Ami Goes Doopel.com(2022)
https://shaaazam529.sliposnc.workers.dev/0:/Amigos-Doppel Dot Com 2024 Bengali Dubbed ottbangla.lol.mp4
#EXTINF:-1 group-title="Warning | BANGLADESH" tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipLsR1VsEbEItKya5cRlbT2wJpVXv26ZE4fbxFrSyMGceonD-ahbkyNNY_4E9kYdoW5zX6AIe4XDODpYwmops257jq5qdIP7NfxpRxons6N_HJidqcKtsvjWSPcjv8u7eHuT3AN9Kw_CQY0JoX1pf-zJUdy6jaYzHJ23aAh9mDVRAouhKFF080M1wtqLk/s1600/20240929_144501.png" , streaming Details 
https://drive.usercontent.google.com/download?id=15YD7tPJBjY0v9UuoxEFG9kVbfI6tO1CV&export=download
#EXITINF:1 group-title="BANGLADESHI MOVIE & SERIES"tvg-logo="https://m.media-amazon.com/images/M/MV5BZWRiYWM4YjQtNjkyYi00NjI4LWE5MDEtZTFmNDBjOWEwNDNlXkEyXkFqcGc@._V1_QL75_UX436_.jpg", Nabab Bangla Movie 2017
https://vacdn.hakunaymatata.com/resource/686fc3b7559fa7776916574236e20957.mp4?Expires=1731218798&Signature=54RTFNllSeRlwT~8CSUJIbmWVuIJ9lGKWNHEU7zavIW~NY61QdLVyg7ivuVJCGS7QInCi0VQnVAqqOIZ5Rhe0yIl1npBJE4RaQMuPTYXccT0P3dAQIV8msfy4yBhyo3dtb70diQNCCzytkAoGDQNMarYDPim-38xWhtFutYp1KTkTIY-hweV9j8ZQnRvG1o6PAzzCYgyiWG8flM-lnQLHqCF7RI-bpLPbG-5r2oCQTHtYi8CE-ryTGHw41XmUpbChVqNHXBsOlRfF35R5yEip2KBGAnE6RIHsMprVHsFUGnPUU88OD3SZVPjRYOhM6TzQ5Q8CH9HadDIJShwXNI62g__&Key-Pair-Id=KIRMWBLZ0XCIZ
#EXTM3U
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/4b87a41.png" ,IN: & Flix FHD
http://tv.cloudcdn.me:80/live.ts?channelId=49859&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/5329167.png" ,IN: & Pictures FHD
http://tv.cloudcdn.me:80/live.ts?channelId=139&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/5329167.png" ,IN: & Pictures HD
http://tv.cloudcdn.me:80/live.ts?channelId=132225&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/a8337e0.png" ,IN: & TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=140&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/a8337e0.png" ,IN: & TV FHD (USA)
http://tv.cloudcdn.me:80/live.ts?channelId=141&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/923856a.png" ,IN: 9x Jalwa
http://tv.cloudcdn.me:80/live.ts?channelId=142&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/0759b67.png" ,IN: 9xm
http://tv.cloudcdn.me:80/live.ts?channelId=143&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/56eaab9.png" ,IN: ABP News FHD
http://tv.cloudcdn.me:80/live.ts?channelId=149&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/81d6b53.png" ,IN: Aaj Tak (UK)
http://tv.cloudcdn.me:80/live.ts?channelId=145&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/81d6b53.png" ,IN: Aaj Tak FHD
http://tv.cloudcdn.me:80/live.ts?channelId=144&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/887fb6b.png" ,IN: Aastha Bhajan (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=146&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/20cbc6e.png" ,IN: Aastha TV (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=147&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/20cbc6e.png" ,IN: Aastha TV (UK) (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=148&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/imageicon/c44438c.png" ,IN: Aatma Channel  (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=44632&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/552f92c.png" ,IN: Animal Planet Hindi
http://tv.cloudcdn.me:80/live.ts?channelId=151&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/imageicon/d704b64.png" ,IN: Arya Sandesh
http://tv.cloudcdn.me:80/live.ts?channelId=37311&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/27cf79e.png" ,IN: B4U Kadak
http://tv.cloudcdn.me:80/live.ts?channelId=35383&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/127afc4.png" ,IN: B4U Movies
http://tv.cloudcdn.me:80/live.ts?channelId=152&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/e1ee774.png" ,IN: B4U Music
http://tv.cloudcdn.me:80/live.ts?channelId=153&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/d11d123.png" ,IN: B4U Plus
http://tv.cloudcdn.me:80/live.ts?channelId=154&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/56e863a.png" ,IN: BBO Classic HD
http://tv.cloudcdn.me:80/live.ts?channelId=86150&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/7b6ab8b.png" ,IN: BBO HD
http://tv.cloudcdn.me:80/live.ts?channelId=86148&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" ,IN: Bollywood Classic
http://tv.cloudcdn.me:80/live.ts?channelId=123916&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" ,IN: Bollywood HD
http://tv.cloudcdn.me:80/live.ts?channelId=123915&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/53b880f.png" ,IN: CNBC Awaaz FHD
http://tv.cloudcdn.me:80/live.ts?channelId=86147&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://147.182.195.61/panel/imageicon/21a37a8.png" ,IN: CNBC TV18
http://tv.cloudcdn.me:80/live.ts?channelId=49404&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="https://tv.cloudcdn.online/images/channels/cnbctv18prime.png" ,IN: CNBC TV18 Prime HD
http://tv.cloudcdn.me:80/live.ts?channelId=132477&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/5b37a02.png" ,IN: CNN News 18 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=28125&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="https://tv.cloudcdn.online/images/channels/BiggBoss18.png" ,IN: Colors Bigg Boss 18 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=57&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="https://tv.cloudcdn.online/images/channels/BiggBoss18.png" ,IN: Colors Bigg Boss 18 FHD (BK)
http://tv.cloudcdn.me:80/live.ts?channelId=78814&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/6ae38c6.png" ,IN: Colors Cineplex Bollywood HD
http://tv.cloudcdn.me:80/live.ts?channelId=62412&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/711d60e.png" ,IN: Colors Cineplex FHD
http://tv.cloudcdn.me:80/live.ts?channelId=470&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/711d60e.png" ,IN: Colors Cineplex HD
http://tv.cloudcdn.me:80/live.ts?channelId=132478&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/99398d7.png" ,IN: Colors Cineplex HD (UK)
http://tv.cloudcdn.me:80/live.ts?channelId=156&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/4a7b988.png" ,IN: Colors Cineplex Superhits HD
http://tv.cloudcdn.me:80/live.ts?channelId=62413&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/ad083a7.png" ,IN: Colors Infinity FHD
http://tv.cloudcdn.me:80/live.ts?channelId=157&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/c9e476d.png" ,IN: Colors Rishtey (UK)
http://tv.cloudcdn.me:80/live.ts?channelId=159&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/c9e476d.png" ,IN: Colors Rishtey FHD
http://tv.cloudcdn.me:80/live.ts?channelId=158&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/4a9ad93.png" ,IN: Colors TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=160&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/4a9ad93.png" ,IN: Colors TV FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=36129&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/4a9ad93.png" ,IN: Colors TV HD UK
http://tv.cloudcdn.me:80/live.ts?channelId=161&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/794387b.png" ,IN: DD News FHD
http://tv.cloudcdn.me:80/live.ts?channelId=163&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/1ae366e.png" ,IN: Discovery HD Hindi FHD
http://tv.cloudcdn.me:80/live.ts?channelId=164&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/bfd984c.png" ,IN: Discovery Science
http://tv.cloudcdn.me:80/live.ts?channelId=166&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/16520b2.png" ,IN: Divya TV
http://tv.cloudcdn.me:80/live.ts?channelId=33135&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/766d3d6.png" ,IN: Divyang News
http://tv.cloudcdn.me:80/live.ts?channelId=38555&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/5c49268.png" ,IN: ET Now FHD
http://tv.cloudcdn.me:80/live.ts?channelId=167&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/b35aa95.png" ,IN: Food Food
http://tv.cloudcdn.me:80/live.ts?channelId=169&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/c5f05af.png" ,IN: GNT News
http://tv.cloudcdn.me:80/live.ts?channelId=36272&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/c2f5c44.png" ,IN: HBO
http://tv.cloudcdn.me:80/live.ts?channelId=49858&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/5007540.png" ,IN: Hare Krsna TV (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=33132&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/c65ab6d.png" ,IN: India News
http://tv.cloudcdn.me:80/live.ts?channelId=33324&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/71881e5.png" ,IN: India TV
http://tv.cloudcdn.me:80/live.ts?channelId=171&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/0b1f1bc.png" ,IN: India Today
http://tv.cloudcdn.me:80/live.ts?channelId=36126&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/5007540.png" ,IN: Krishna Vani TV (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=29210&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/ee6b44e.png" ,IN: MTV Beats
http://tv.cloudcdn.me:80/live.ts?channelId=173&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/78c8cc9.png" ,IN: MTV HD
http://tv.cloudcdn.me:80/live.ts?channelId=174&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/c3b2eec.png" ,IN: Mastiii TV
http://tv.cloudcdn.me:80/live.ts?channelId=172&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/33145d2.png" ,IN: Movies Now
http://tv.cloudcdn.me:80/live.ts?channelId=162&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/61eb5d5.png" ,IN: Music India
http://tv.cloudcdn.me:80/live.ts?channelId=175&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="https://tv.cloudcdn.online/images/ndtv24x7.png" ,IN: NDTV 24x7 English
http://tv.cloudcdn.me:80/live.ts?channelId=29208&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="https://tv.cloudcdn.online/images/ndtv.png" ,IN: NDTV 24x7 UK
http://tv.cloudcdn.me:80/live.ts?channelId=132187&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="https://tv.cloudcdn.online/images/ndtvgoodtimes.png" ,IN: NDTV Good Times
http://tv.cloudcdn.me:80/live.ts?channelId=132186&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="https://tv.cloudcdn.online/images/ndtvindia.png" ,IN: NDTV India
http://tv.cloudcdn.me:80/live.ts?channelId=178&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="https://tv.cloudcdn.online/images/ndtvprofit.png" ,IN: NDTV Profit
http://tv.cloudcdn.me:80/live.ts?channelId=179&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/a00dd83.png" ,IN: Nat Geo English
http://tv.cloudcdn.me:80/live.ts?channelId=125057&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/a00dd83.png" ,IN: Nat Geo Hindi
http://tv.cloudcdn.me:80/live.ts?channelId=176&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/1380d86.png" ,IN: Nat Geo Wild Hindi
http://tv.cloudcdn.me:80/live.ts?channelId=177&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/17135d6.png" ,IN: News Nation
http://tv.cloudcdn.me:80/live.ts?channelId=29702&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/cd686e0.png" ,IN: News18 India
http://tv.cloudcdn.me:80/live.ts?channelId=61901&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/7380374.png" ,IN: NewsX India
http://tv.cloudcdn.me:80/live.ts?channelId=36127&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="https://tv.cloudcdn.online/images/channels/paramsattatv.png" ,IN: Param Satta TV (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=33150&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://tv.cloudcdn.online/images/republicbharat.png" ,IN: Republic Bharat
http://tv.cloudcdn.me:80/live.ts?channelId=126084&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/3ae517f.png" ,IN: Republic TV
http://tv.cloudcdn.me:80/live.ts?channelId=33168&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" ,IN: Samay News
http://tv.cloudcdn.me:80/live.ts?channelId=128484&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/bb811d4.png" ,IN: Sanskar TV
http://tv.cloudcdn.me:80/live.ts?channelId=181&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/08c1472.png" ,IN: Satsang TV
http://tv.cloudcdn.me:80/live.ts?channelId=182&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/54d97b8.png" ,IN: Sony Max 2 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=183&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/ad286ec.png" ,IN: Sony Max 2 UK
http://tv.cloudcdn.me:80/live.ts?channelId=40479&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/d052853.png" ,IN: Sony Max FHD
http://tv.cloudcdn.me:80/live.ts?channelId=184&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/d052853.png" ,IN: Sony Max FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=185&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/d14875b.png" ,IN: Sony Max UK FHD
http://tv.cloudcdn.me:80/live.ts?channelId=186&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/dc6e2ef.png" ,IN: Sony Pal FHD
http://tv.cloudcdn.me:80/live.ts?channelId=188&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/8ef4aa1.png" ,IN: Sony Pal FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=40482&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/0deace4.png" ,IN: Sony Pix FHD
http://tv.cloudcdn.me:80/live.ts?channelId=189&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/dbd9534.png" ,IN: Sony Sab FHD
http://tv.cloudcdn.me:80/live.ts?channelId=191&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/2e77ad4.png" ,IN: Sony Sab FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=260&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/dbd9534.png" ,IN: Sony Sab UK HD
http://tv.cloudcdn.me:80/live.ts?channelId=192&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/8046270.png" ,IN: Sony TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=193&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/8046270.png" ,IN: Sony TV FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=12356&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/8046270.png" ,IN: Sony TV HD UK
http://tv.cloudcdn.me:80/live.ts?channelId=194&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/8046270.png" ,IN: Sony TV HD UK.
http://tv.cloudcdn.me:80/live.ts?channelId=132226&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/73c26e8.png" ,IN: Sony Wah FHD
http://tv.cloudcdn.me:80/live.ts?channelId=187&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/2b7f152.png" ,IN: Star Bharat FHD
http://tv.cloudcdn.me:80/live.ts?channelId=195&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/4b1400a.png" ,IN: Star Bharat FHD UK
http://tv.cloudcdn.me:80/live.ts?channelId=305&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/770f5fd.png" ,IN: Star Gold 2 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=33165&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/770f5fd.png" ,IN: Star Gold FHD
http://tv.cloudcdn.me:80/live.ts?channelId=196&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/770f5fd.png" ,IN: Star Gold FHD UK
http://tv.cloudcdn.me:80/live.ts?channelId=12358&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" ,IN: Star Gold Romance
http://tv.cloudcdn.me:80/live.ts?channelId=128485&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/9ccc18c.png" ,IN: Star Gold Select FHD
http://tv.cloudcdn.me:80/live.ts?channelId=197&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/343394a.png" ,IN: Star Movies FHD
http://tv.cloudcdn.me:80/live.ts?channelId=198&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/58a7cb9.png" ,IN: Star Movies Select FHD
http://tv.cloudcdn.me:80/live.ts?channelId=199&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/f6bcb3a.png" ,IN: Star Plus FHD
http://tv.cloudcdn.me:80/live.ts?channelId=200&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/4833657.png" ,IN: Star Plus FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=12357&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/534d0da.png" ,IN: Star Plus HD UK
http://tv.cloudcdn.me:80/live.ts?channelId=201&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/534d0da.png" ,IN: Star Plus HD UK.
http://tv.cloudcdn.me:80/live.ts?channelId=132188&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/d6ddb63.png" ,IN: Star Utsav
http://tv.cloudcdn.me:80/live.ts?channelId=12364&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" ,IN: TLC HD
http://tv.cloudcdn.me:80/live.ts?channelId=205&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/7b43b7a.png" ,IN: TV NRI
http://tv.cloudcdn.me:80/live.ts?channelId=33136&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/e83cabf.png" ,IN: Times Now FHD
http://tv.cloudcdn.me:80/live.ts?channelId=204&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/bec6fb2.png" ,IN: WION NEWS FHD
http://tv.cloudcdn.me:80/live.ts?channelId=85499&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" ,IN: YRF Music FHD
http://tv.cloudcdn.me:80/live.ts?channelId=132375&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/5f10964.png" ,IN: Zee Action
http://tv.cloudcdn.me:80/live.ts?channelId=207&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/75016fe.png" ,IN: Zee Anmol
http://tv.cloudcdn.me:80/live.ts?channelId=208&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/86b8496.png" ,IN: Zee Anmol Cinema
http://tv.cloudcdn.me:80/live.ts?channelId=209&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" ,IN: Zee Bharat
http://tv.cloudcdn.me:80/live.ts?channelId=25528&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/597c1ee.png" ,IN: Zee Bollywood
http://tv.cloudcdn.me:80/live.ts?channelId=210&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/f37e353.png" ,IN: Zee Business
http://tv.cloudcdn.me:80/live.ts?channelId=211&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/47ceb8d.png" ,IN: Zee Café FHD
http://tv.cloudcdn.me:80/live.ts?channelId=212&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/9008fbf.png" ,IN: Zee Cinema FHD
http://tv.cloudcdn.me:80/live.ts?channelId=213&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/c466520.png" ,IN: Zee Cinema FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=12359&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/330f27f.png" ,IN: Zee Cinema UK
http://tv.cloudcdn.me:80/live.ts?channelId=214&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/187b8c7.png" ,IN: Zee Classic
http://tv.cloudcdn.me:80/live.ts?channelId=43379&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/9ece589.png" ,IN: Zee News
http://tv.cloudcdn.me:80/live.ts?channelId=216&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/550c14d.png" ,IN: Zee TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=217&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/6248328.png" ,IN: Zee TV FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=12301&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/f0673bc.png" ,IN: Zee TV HD UK
http://tv.cloudcdn.me:80/live.ts?channelId=218&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2022-02/355170886aae937e99453a9e20caf655.png" ,IN: Zee World FHD
http://tv.cloudcdn.me:80/live.ts?channelId=132304&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/b7147ce.png" ,IN: Zee Zest FHD
http://tv.cloudcdn.me:80/live.ts?channelId=29704&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/d8b8382.png" ,IN: Zing TV
http://tv.cloudcdn.me:80/live.ts?channelId=219&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="INDIAN" tvg-logo="http://ujm.from-in.com/panel/imageicon/03b20a2.png" ,IN: Zoom TV
http://tv.cloudcdn.me:80/live.ts?channelId=121&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/a6154aa0.jpg" ,PUN: 5AAB TV
http://tv.cloudcdn.me:80/live.ts?channelId=321&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/937286b.png" ,PUN: 7x Music
http://tv.cloudcdn.me:80/live.ts?channelId=61896&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/9xtashan1.jpg" ,PUN: 9x Tashan
http://tv.cloudcdn.me:80/live.ts?channelId=323&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/cb2a533.png" ,PUN: ABP Sanjha
http://tv.cloudcdn.me:80/live.ts?channelId=45937&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/f1d8be4a" ,PUN: Akaal TV (UK)
http://tv.cloudcdn.me:80/live.ts?channelId=324&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/3acb595e.png" ,PUN: Alpha Etc Punjab
http://tv.cloudcdn.me:80/live.ts?channelId=33151&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Amritwani TV (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=132343&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/e6121dfa.jpg" ,PUN: Apna Punjab TV
http://tv.cloudcdn.me:80/live.ts?channelId=36236&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/5f63301.png" ,PUN: Asia TV Canada
http://tv.cloudcdn.me:80/live.ts?channelId=303&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c58c871.png" ,PUN: Baaz TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=90831&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/259c5d63.jpg" ,PUN: Balle Balle Non Stop Music
http://tv.cloudcdn.me:80/live.ts?channelId=33137&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/259c5d63.jpg" ,PUN: Balle Balle TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=33140&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/BoogleBollywood.jpg" ,PUN: Boogle Bollywood HD
http://tv.cloudcdn.me:80/live.ts?channelId=327&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/BRITASIA.jpg" ,PUN: Brit Asia TV
http://tv.cloudcdn.me:80/live.ts?channelId=328&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/e8ba173.png" ,PUN: Candian Sath
http://tv.cloudcdn.me:80/live.ts?channelId=44636&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/cedad7ec" ,PUN: Channel Y HD
http://tv.cloudcdn.me:80/live.ts?channelId=329&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/2f080dfe.jpeg" ,PUN: Chardikla Gurbaani TV (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=36229&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/CHARDIKLATIMETV.jpg" ,PUN: Chardikla Time TV (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=330&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/11888628.jpeg" ,PUN: Chardikla Time TV North America (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=36231&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/d508b5ad" ,PUN: DD Punjabi
http://tv.cloudcdn.me:80/live.ts?channelId=332&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Darshan TV Canada
http://tv.cloudcdn.me:80/live.ts?channelId=89365&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/DESICHANNEL.png" ,PUN: Desi Channel
http://tv.cloudcdn.me:80/live.ts?channelId=333&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Desi Tashan TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=132346&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Dukh Nivaran (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=132338&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Ek Onkar
http://tv.cloudcdn.me:80/live.ts?channelId=132342&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/9705cdc.png" ,PUN: Fastway News
http://tv.cloudcdn.me:80/live.ts?channelId=334&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/e5b97fc.png" ,PUN: Fateh TV HD (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=38552&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/95329f68.jpg" ,PUN: GDNS Ludhiana (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=29212&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/452084d.png" ,PUN: Garv Punjab Gurbani TV (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=61649&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/c98dec42" ,PUN: Gaunda Punjab TV
http://tv.cloudcdn.me:80/live.ts?channelId=336&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Ghaint Punjab HD
http://tv.cloudcdn.me:80/live.ts?channelId=132339&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/43815a8.png" ,PUN: Global Punjab HD
http://tv.cloudcdn.me:80/live.ts?channelId=33322&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="https://tv.cloudcdn.online/images/channels/GunGawan.png" ,PUN: Gun Gawan TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=132344&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Gur Ki Bani TV HD (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=123901&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Gurdwara Dasmesh Darbar HD (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=123902&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/625cf89.png" ,PUN: Gurmat TV HD (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=37313&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/95e12829" ,PUN: Hamdard TV
http://tv.cloudcdn.me:80/live.ts?channelId=337&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Haryanvi Hits HD
http://tv.cloudcdn.me:80/live.ts?channelId=132340&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Hungama Bol Hadippa HD
http://tv.cloudcdn.me:80/live.ts?channelId=61897&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/697117e.png" ,PUN: India News Haryana FHD
http://tv.cloudcdn.me:80/live.ts?channelId=49862&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/f035cda.png" ,PUN: India News Punjab Himachal FHD
http://tv.cloudcdn.me:80/live.ts?channelId=49861&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/bc28e194.png" ,PUN: Jhanjar Music
http://tv.cloudcdn.me:80/live.ts?channelId=33319&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Jus Hindi HD
http://tv.cloudcdn.me:80/live.ts?channelId=132336&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/fffcaf91.jpg" ,PUN: Jus One TV FHD (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=33153&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/97014e64.jpg" ,PUN: Jus Punjabi
http://tv.cloudcdn.me:80/live.ts?channelId=347&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Jus Punjabi Canada FHD
http://tv.cloudcdn.me:80/live.ts?channelId=132335&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Jus Punjabi FHD (USA)
http://tv.cloudcdn.me:80/live.ts?channelId=132334&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/cc81b61.png" ,PUN: Kanshi TV (UK)
http://tv.cloudcdn.me:80/live.ts?channelId=36238&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/edef294.png" ,PUN: Live Punjabi TV
http://tv.cloudcdn.me:80/live.ts?channelId=85410&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/fc6a903d" ,PUN: Living India News FHD
http://tv.cloudcdn.me:80/live.ts?channelId=340&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/35bcdc3.png" ,PUN: Lok Punjabi TV
http://tv.cloudcdn.me:80/live.ts?channelId=44634&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: MH One
http://tv.cloudcdn.me:80/live.ts?channelId=132351&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="https://tv.cloudcdn.online/images/MediaWavesTv.png" ,PUN: Media Waves TV
http://tv.cloudcdn.me:80/live.ts?channelId=132183&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/MH1SHRADDHA.jpg" ,PUN: Mh One Sharddha (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=344&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/MH1NEWS.jpg" ,PUN: Mh1 News
http://tv.cloudcdn.me:80/live.ts?channelId=343&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/3722446.png" ,PUN: My TV USA
http://tv.cloudcdn.me:80/live.ts?channelId=57485&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/b59fcc1d.jpg" ,PUN: Nagara TV
http://tv.cloudcdn.me:80/live.ts?channelId=36237&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/4d897a2.png" ,PUN: News18 Punjab Haryana and HP
http://tv.cloudcdn.me:80/live.ts?channelId=61900&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Nihal TV FHD (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=123900&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/e8bfcd1.png" ,PUN: Only Music FHD
http://tv.cloudcdn.me:80/live.ts?channelId=61898&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/PTCChakde.jpg" ,PUN: PTC Chakde
http://tv.cloudcdn.me:80/live.ts?channelId=350&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/0d90afe.png" ,PUN: PTC Dhol TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43378&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/50a42f59" ,PUN: PTC Music
http://tv.cloudcdn.me:80/live.ts?channelId=351&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/PTCNEWS.png" ,PUN: PTC News
http://tv.cloudcdn.me:80/live.ts?channelId=352&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/PTCPUNJABI.png" ,PUN: PTC Punjabi
http://tv.cloudcdn.me:80/live.ts?channelId=353&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/PTCPUNJABI.png" ,PUN: PTC Punjabi (UK)
http://tv.cloudcdn.me:80/live.ts?channelId=355&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/90e355a6" ,PUN: PTC Punjabi Gold
http://tv.cloudcdn.me:80/live.ts?channelId=354&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/f944685c" ,PUN: PTC Simran (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=356&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/9373170.png" ,PUN: PTN 24 (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=325&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/a392328f.jpg" ,PUN: Pardesi TV
http://tv.cloudcdn.me:80/live.ts?channelId=357&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/58abf2c.png" ,PUN: Parvasi Punjabi TV
http://tv.cloudcdn.me:80/live.ts?channelId=38553&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Parvasi TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=123899&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/7933f511.jpg" ,PUN: Pitaara TV
http://tv.cloudcdn.me:80/live.ts?channelId=360&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/a79b99b.png" ,PUN: Politics Punjab (UK)
http://tv.cloudcdn.me:80/live.ts?channelId=85546&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Pop Pataka HD
http://tv.cloudcdn.me:80/live.ts?channelId=123903&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/19a9bb47.jpg" ,PUN: Prime Asia FHD
http://tv.cloudcdn.me:80/live.ts?channelId=348&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/95f3853b" ,PUN: Prime Plus HD
http://tv.cloudcdn.me:80/live.ts?channelId=349&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Punjab Kesari TV
http://tv.cloudcdn.me:80/live.ts?channelId=89362&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Punjab Plus HD
http://tv.cloudcdn.me:80/live.ts?channelId=52495&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Punjabi Hits FHD
http://tv.cloudcdn.me:80/live.ts?channelId=89361&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Punjabi Melodies
http://tv.cloudcdn.me:80/live.ts?channelId=132349&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/98873419.jpeg" ,PUN: Pure Punjabi
http://tv.cloudcdn.me:80/live.ts?channelId=36240&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/e9846dfd.jpg" ,PUN: Raj Mahal TV
http://tv.cloudcdn.me:80/live.ts?channelId=33141&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/211ab682.jpg" ,PUN: Ratwara Sahib (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=33143&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/edc04a92.jpeg" ,PUN: Road Today
http://tv.cloudcdn.me:80/live.ts?channelId=36241&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: STV Haryana News
http://tv.cloudcdn.me:80/live.ts?channelId=132354&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://tv.cloudcdn.me/images/55214.png" ,PUN: Sadda TV (USA)
http://tv.cloudcdn.me:80/live.ts?channelId=29213&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Saga Music FHD
http://tv.cloudcdn.me:80/live.ts?channelId=36230&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Saga Music Haryanvi FHD
http://tv.cloudcdn.me:80/live.ts?channelId=132337&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/f71ba043" ,PUN: Sangat TV (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=358&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Sanjha Punjab (USA)
http://tv.cloudcdn.me:80/live.ts?channelId=55899&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Sanjha TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=123905&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="https://tv.cloudcdn.online/images/sanjhavirsa.png" ,PUN: Sanjha Virsa TV
http://tv.cloudcdn.me:80/live.ts?channelId=123904&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/3b5738a8" ,PUN: Sardari TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=361&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/sikhchannel.jpg" ,PUN: Sikh Channel UK (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=363&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/6a93649.png" ,PUN: Singh Naad TV FHD (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=44633&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/SteelbirdMusicChannel.jpg" ,PUN: Steelbird Music
http://tv.cloudcdn.me:80/live.ts?channelId=364&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/f42a76e.png" ,PUN: TV Punjab
http://tv.cloudcdn.me:80/live.ts?channelId=44639&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/3ee4e0fa.jpg" ,PUN: TV84 (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=33138&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Tabbar Hits
http://tv.cloudcdn.me:80/live.ts?channelId=132348&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/f71ca4e.png" ,PUN: The Punjab Talk
http://tv.cloudcdn.me:80/live.ts?channelId=89366&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Total Tv Haryana
http://tv.cloudcdn.me:80/live.ts?channelId=132353&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Trucking Today TV
http://tv.cloudcdn.me:80/live.ts?channelId=123897&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Virasat Media
http://tv.cloudcdn.me:80/live.ts?channelId=123898&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Vision Punjab Gurbani HD
http://tv.cloudcdn.me:80/live.ts?channelId=43600&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Vision Punjab HD
http://tv.cloudcdn.me:80/live.ts?channelId=43601&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Vision Punjab Music HD
http://tv.cloudcdn.me:80/live.ts?channelId=43602&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/5101663.png" ,PUN: Wah Punjabi
http://tv.cloudcdn.me:80/live.ts?channelId=61148&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: World Punjabi TV
http://tv.cloudcdn.me:80/live.ts?channelId=132341&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" ,PUN: Zee Delhi NCR Haryana FHD
http://tv.cloudcdn.me:80/live.ts?channelId=132352&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/imageicon/d16db82b" ,PUN: Zee Punjab Haryana Himachal
http://tv.cloudcdn.me:80/live.ts?channelId=367&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PUNJABI" tvg-logo="http://ujm.from-in.com/panel/imageicon/bcbc221.png" ,PUN: Zee Punjabi
http://tv.cloudcdn.me:80/live.ts?channelId=28960&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/becbce6.png" ,PK: 24 NEWS HD
http://tv.cloudcdn.me:80/live.ts?channelId=368&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/channels/365digital.png" ,PK: 365 Digital TV
http://tv.cloudcdn.me:80/live.ts?channelId=132239&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/f8b8c0b.png" ,PK: 8xm
http://tv.cloudcdn.me:80/live.ts?channelId=370&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/af3a50e.png" ,PK: 92 News HD
http://tv.cloudcdn.me:80/live.ts?channelId=371&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/7c8d885.png" ,PK: 92 News HD UK
http://tv.cloudcdn.me:80/live.ts?channelId=391&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/0e0ddd1.png" ,PK: 92 News HD.
http://tv.cloudcdn.me:80/live.ts?channelId=75731&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://tv.cloudcdn.me/images/de06576.png" ,PK: A Sports
http://tv.cloudcdn.me:80/live.ts?channelId=132249&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/79e2abb.png" ,PK: A-Plus TV
http://tv.cloudcdn.me:80/live.ts?channelId=373&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/channels/a1tv.png" ,PK: A1 TV
http://tv.cloudcdn.me:80/live.ts?channelId=132241&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/aantv.png" ,PK: AAN TV HD
http://tv.cloudcdn.me:80/live.ts?channelId=21790&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/d71bea2.png" ,PK: ABN NEWS
http://tv.cloudcdn.me:80/live.ts?channelId=115212&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/d4ec6d6.png" ,PK: ATV ENTERTAINMENT
http://tv.cloudcdn.me:80/live.ts?channelId=394&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/9487592.png" ,PK: AUR Life HD
http://tv.cloudcdn.me:80/live.ts?channelId=74228&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/037f6b4.png" ,PK: AVT KHYBER
http://tv.cloudcdn.me:80/live.ts?channelId=464&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/9de8f20.png" ,PK: AWAZ ENTERTAINMENT
http://tv.cloudcdn.me:80/live.ts?channelId=22762&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/0468ea5.png" ,PK: AWAZ TV
http://tv.cloudcdn.me:80/live.ts?channelId=57494&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/af92ebd.png" ,PK: Aaj Entertainment
http://tv.cloudcdn.me:80/live.ts?channelId=375&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/a318e19.png" ,PK: Aaj News
http://tv.cloudcdn.me:80/live.ts?channelId=376&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/3c79e70.png" ,PK: Abb Tak
http://tv.cloudcdn.me:80/live.ts?channelId=378&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/aiknews.png" ,PK: Aik News Pakistan
http://tv.cloudcdn.me:80/live.ts?channelId=381&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/channels/alehsaan.png" ,PK: Al Ehsaan TV
http://tv.cloudcdn.me:80/live.ts?channelId=132238&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/371cd9d.png" ,PK: Al Quran Al Kareem
http://tv.cloudcdn.me:80/live.ts?channelId=132248&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/70c3c400" ,PK: Al Sunnah Al Nabawiyah
http://tv.cloudcdn.me:80/live.ts?channelId=132244&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/42ebe06.png" ,PK: Apna Channel
http://tv.cloudcdn.me:80/live.ts?channelId=379&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/3eac028.png" ,PK: Aruj Entertainment TV
http://tv.cloudcdn.me:80/live.ts?channelId=36259&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c6a9cc1.png" ,PK: Ary Digital HD
http://tv.cloudcdn.me:80/live.ts?channelId=380&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c6a9cc1.png" ,PK: Ary Digital HD.
http://tv.cloudcdn.me:80/live.ts?channelId=382&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/d36f1b2.png" ,PK: Ary Digital UK
http://tv.cloudcdn.me:80/live.ts?channelId=377&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/ec4f501.png" ,PK: Ary Music
http://tv.cloudcdn.me:80/live.ts?channelId=384&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/6668954.png" ,PK: Ary News HD
http://tv.cloudcdn.me:80/live.ts?channelId=386&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/27b0a89.png" ,PK: Ary News HD.
http://tv.cloudcdn.me:80/live.ts?channelId=387&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/ARYQTV1.jpg" ,PK: Ary Qtv
http://tv.cloudcdn.me:80/live.ts?channelId=388&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/e007a0e.png" ,PK: Ary Zindagi
http://tv.cloudcdn.me:80/live.ts?channelId=392&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c18bb1a.png" ,PK: Bol Entertainment HD
http://tv.cloudcdn.me:80/live.ts?channelId=396&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/529ea14.png" ,PK: Bol News HD
http://tv.cloudcdn.me:80/live.ts?channelId=397&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/55441ee.png" ,PK: Bol News HD.
http://tv.cloudcdn.me:80/live.ts?channelId=398&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/b15f92b.png" ,PK: CANADA ONE TV
http://tv.cloudcdn.me:80/live.ts?channelId=461&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/10b00b7.png" ,PK: CAPITAL TV
http://tv.cloudcdn.me:80/live.ts?channelId=22759&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/a3c7e58.png" ,PK: CHANNEL FIVE
http://tv.cloudcdn.me:80/live.ts?channelId=36260&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/c330e0d.png" ,PK: City 41
http://tv.cloudcdn.me:80/live.ts?channelId=462&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/ea60883.png" ,PK: City 42
http://tv.cloudcdn.me:80/live.ts?channelId=401&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/b80c2c6.png" ,PK: City 44 UK
http://tv.cloudcdn.me:80/live.ts?channelId=402&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/abde402.png" ,PK: DESI TV USA
http://tv.cloudcdn.me:80/live.ts?channelId=465&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/3de2df5.png" ,PK: DISCOVER PAKISTAN
http://tv.cloudcdn.me:80/live.ts?channelId=33167&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/3f578c9.png" ,PK: Dawn News
http://tv.cloudcdn.me:80/live.ts?channelId=403&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/2ca8d0a.png" ,PK: Dharti TV
http://tv.cloudcdn.me:80/live.ts?channelId=57493&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/451cc18.png" ,PK: Dunya News HD
http://tv.cloudcdn.me:80/live.ts?channelId=405&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/0325a4a.png" ,PK: Dunya News HD.
http://tv.cloudcdn.me:80/live.ts?channelId=406&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/9775ba9.png" ,PK: Dunya News UK
http://tv.cloudcdn.me:80/live.ts?channelId=442&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/1699c4e.png" ,PK: EAWAZ TV
http://tv.cloudcdn.me:80/live.ts?channelId=22761&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/7d7eb82.png" ,PK: Express Entertainment
http://tv.cloudcdn.me:80/live.ts?channelId=407&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/53e415c.png" ,PK: Express News
http://tv.cloudcdn.me:80/live.ts?channelId=408&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/d139aeb.png" ,PK: FILMAX
http://tv.cloudcdn.me:80/live.ts?channelId=36261&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/e26fed6.png" ,PK: FILMAZIA
http://tv.cloudcdn.me:80/live.ts?channelId=57489&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/e70f56d.png" ,PK: Film World
http://tv.cloudcdn.me:80/live.ts?channelId=409&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/766747a.png" ,PK: GNN NEWS
http://tv.cloudcdn.me:80/live.ts?channelId=417&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/a5320ec.png" ,PK: GTV NEWS HD
http://tv.cloudcdn.me:80/live.ts?channelId=32496&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/1ccfa3e.png" ,PK: Geo Entertainment HD
http://tv.cloudcdn.me:80/live.ts?channelId=410&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/1ccfa3e.png" ,PK: Geo Entertainment HD.
http://tv.cloudcdn.me:80/live.ts?channelId=128505&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/1ccfa3e.png" ,PK: Geo Entertainment UK
http://tv.cloudcdn.me:80/live.ts?channelId=411&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/0eec2bb.png" ,PK: Geo Kahani
http://tv.cloudcdn.me:80/live.ts?channelId=412&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/2e6972b.png" ,PK: Geo News HD
http://tv.cloudcdn.me:80/live.ts?channelId=414&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/02c0a93.png" ,PK: Geo News HD.
http://tv.cloudcdn.me:80/live.ts?channelId=52863&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/d3c87d4.png" ,PK: Geo News UK
http://tv.cloudcdn.me:80/live.ts?channelId=415&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/14f64b64" ,PK: Geo Super
http://tv.cloudcdn.me:80/live.ts?channelId=132251&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/dcd7180.png" ,PK: Geo Tez
http://tv.cloudcdn.me:80/live.ts?channelId=416&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.me/images/af1466fb.png" ,PK: Green TV Entertainment HD
http://tv.cloudcdn.me:80/live.ts?channelId=393&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/5495de3.png" ,PK: HUM NEWS HD
http://tv.cloudcdn.me:80/live.ts?channelId=419&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/84772b0.png" ,PK: Hamara TV
http://tv.cloudcdn.me:80/live.ts?channelId=52493&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/hooratv.png" ,PK: Hoora TV
http://tv.cloudcdn.me:80/live.ts?channelId=432&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c8417a1.png" ,PK: Hum Masala TV
http://tv.cloudcdn.me:80/live.ts?channelId=418&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/91dc22e.png" ,PK: Hum Masala TV UK
http://tv.cloudcdn.me:80/live.ts?channelId=390&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/c8417a1.png" ,PK: Hum Masala TV.
http://tv.cloudcdn.me:80/live.ts?channelId=52864&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/d20d246.png" ,PK: Hum Pashto 1
http://tv.cloudcdn.me:80/live.ts?channelId=439&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/8e310ce.png" ,PK: Hum Sitaray
http://tv.cloudcdn.me:80/live.ts?channelId=420&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/69ba1a0.png" ,PK: Hum TV Europe
http://tv.cloudcdn.me:80/live.ts?channelId=421&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/1d11c67.png" ,PK: Hum TV HD
http://tv.cloudcdn.me:80/live.ts?channelId=422&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/93f36bb.png" ,PK: Hum TV HD.
http://tv.cloudcdn.me:80/live.ts?channelId=423&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/bd3f90e.png" ,PK: Hum World HD
http://tv.cloudcdn.me:80/live.ts?channelId=424&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/channels/inpluspakistan.png" ,PK: InPlus Pakistan
http://tv.cloudcdn.me:80/live.ts?channelId=132240&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/6a86447.png" ,PK: Jalwa
http://tv.cloudcdn.me:80/live.ts?channelId=428&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/aed41c9.png" ,PK: Joo Music
http://tv.cloudcdn.me:80/live.ts?channelId=30298&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/25b0d60.png" ,PK: K21 News
http://tv.cloudcdn.me:80/live.ts?channelId=66&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/d34de71.png" ,PK: KAWISH TV
http://tv.cloudcdn.me:80/live.ts?channelId=468&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/b144255.png" ,PK: KHOJA TV
http://tv.cloudcdn.me:80/live.ts?channelId=36252&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/b99447c.png" ,PK: KTN ENTERTAINMENT
http://tv.cloudcdn.me:80/live.ts?channelId=22758&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/51625fb.png" ,PK: KTN NEWS
http://tv.cloudcdn.me:80/live.ts?channelId=22757&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/579d85e.png" ,PK: Kashish TV
http://tv.cloudcdn.me:80/live.ts?channelId=57488&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/46f9628.png" ,PK: Kay 2 HD
http://tv.cloudcdn.me:80/live.ts?channelId=429&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/3ba0523.png" ,PK: Khyber News
http://tv.cloudcdn.me:80/live.ts?channelId=459&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/kidszonehd.png" ,PK: Kids Zone HD
http://tv.cloudcdn.me:80/live.ts?channelId=19754&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/be695c5.png" ,PK: Kohenoor Tv
http://tv.cloudcdn.me:80/live.ts?channelId=430&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/bfbd540.png" ,PK: LAHORE RANG NEWS
http://tv.cloudcdn.me:80/live.ts?channelId=22753&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/a78f70e.png" ,PK: LTN FAMILY
http://tv.cloudcdn.me:80/live.ts?channelId=33166&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/bbc7561.png" ,PK: Lahore News HD
http://tv.cloudcdn.me:80/live.ts?channelId=431&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/channels/minimaxpk.png" ,PK: MINIMAX
http://tv.cloudcdn.me:80/live.ts?channelId=306&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/muntv.png" ,PK: MUN TV
http://tv.cloudcdn.me:80/live.ts?channelId=263&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/91443da2" ,PK: Madani Channel English
http://tv.cloudcdn.me:80/live.ts?channelId=132245&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/7b7770d8" ,PK: Madani Channel Urdu
http://tv.cloudcdn.me:80/live.ts?channelId=132246&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/55326bb.png" ,PK: Makkah TV
http://tv.cloudcdn.me:80/live.ts?channelId=132247&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/f09653c.png" ,PK: Mashriq TV
http://tv.cloudcdn.me:80/live.ts?channelId=57495&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/fe3a8d5a.png" ,PK: Meem TV
http://tv.cloudcdn.me:80/live.ts?channelId=369&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" ,PK: Mega TV
http://tv.cloudcdn.me:80/live.ts?channelId=265&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/67763ec.png" ,PK: Metro 1 News
http://tv.cloudcdn.me:80/live.ts?channelId=435&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" ,PK: N6 TV
http://tv.cloudcdn.me:80/live.ts?channelId=123907&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/41d6b90.png" ,PK: NEO NEWS HD
http://tv.cloudcdn.me:80/live.ts?channelId=436&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/News99.png" ,PK: News 99
http://tv.cloudcdn.me:80/live.ts?channelId=22108&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/d05f27b.png" ,PK: News One
http://tv.cloudcdn.me:80/live.ts?channelId=437&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/ba7d717d.jpg" ,PK: Nisbat E Rasooli
http://tv.cloudcdn.me:80/live.ts?channelId=36287&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/77fc089.png" ,PK: OPTV GLOBAL
http://tv.cloudcdn.me:80/live.ts?channelId=467&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/48c39d29.jpg" ,PK: One Golf TV
http://tv.cloudcdn.me:80/live.ts?channelId=132252&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/e497324.png" ,PK: PAK US TV
http://tv.cloudcdn.me:80/live.ts?channelId=466&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/07e3e57.png" ,PK: PTV Global UK
http://tv.cloudcdn.me:80/live.ts?channelId=443&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/b85493f.png" ,PK: PTV Home
http://tv.cloudcdn.me:80/live.ts?channelId=444&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/5b708cb.png" ,PK: PTV National
http://tv.cloudcdn.me:80/live.ts?channelId=445&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/1a299ba.png" ,PK: PTV News HD
http://tv.cloudcdn.me:80/live.ts?channelId=446&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/2c9c5c5.png" ,PK: PTV Sports FHD
http://tv.cloudcdn.me:80/live.ts?channelId=132253&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/2c9c5c5.png" ,PK: PTV Sports FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=132254&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/bb64419.png" ,PK: PTV World News
http://tv.cloudcdn.me:80/live.ts?channelId=447&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/0a97d2b.png" ,PK: PUBLIC NEWS
http://tv.cloudcdn.me:80/live.ts?channelId=448&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/0c3f418.png" ,PK: Play Entertainment FHD
http://tv.cloudcdn.me:80/live.ts?channelId=440&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/91de32d.png" ,PK: Prime Canada TV
http://tv.cloudcdn.me:80/live.ts?channelId=441&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/e37e6eb.png" ,PK: RAAVI TV
http://tv.cloudcdn.me:80/live.ts?channelId=22763&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/bd16e88.png" ,PK: ROHI TV
http://tv.cloudcdn.me:80/live.ts?channelId=57490&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/cffd09c.png" ,PK: ROZE NEWS
http://tv.cloudcdn.me:80/live.ts?channelId=36262&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/sabtvpak.png" ,PK: SAB TV HD
http://tv.cloudcdn.me:80/live.ts?channelId=123276&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/fb41a98.png" ,PK: SAMAA TV
http://tv.cloudcdn.me:80/live.ts?channelId=449&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/30f4cf5.png" ,PK: SEE TV HD
http://tv.cloudcdn.me:80/live.ts?channelId=450&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/eb4bd05.png" ,PK: SINDH TV
http://tv.cloudcdn.me:80/live.ts?channelId=452&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/1a39006.png" ,PK: SINDH TV NEWS
http://tv.cloudcdn.me:80/live.ts?channelId=451&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/c328bca.png" ,PK: SUCH NEWS HD
http://tv.cloudcdn.me:80/live.ts?channelId=22756&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/80c0a41.png" ,PK: SUNO TV
http://tv.cloudcdn.me:80/live.ts?channelId=46660&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/98aa7b3.png" ,PK: Sahar Urdu
http://tv.cloudcdn.me:80/live.ts?channelId=36268&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/6018bb3.png" ,PK: TAG TV
http://tv.cloudcdn.me:80/live.ts?channelId=33156&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/5629b5f.png" ,PK: TIMES TV DIGITAL HD
http://tv.cloudcdn.me:80/live.ts?channelId=33158&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/ae03223.png" ,PK: TORONTO 360 ENTERTAINMENT
http://tv.cloudcdn.me:80/live.ts?channelId=454&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/8058f6a.png" ,PK: TORONTO 360 TV
http://tv.cloudcdn.me:80/live.ts?channelId=453&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/22d8fe0.png" ,PK: TV ONE GLOBAL
http://tv.cloudcdn.me:80/live.ts?channelId=455&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/d67274b.png" ,PK: TV TODAY
http://tv.cloudcdn.me:80/live.ts?channelId=36263&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/6e59b07a" ,PK: Takbeer TV
http://tv.cloudcdn.me:80/live.ts?channelId=241&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" ,PK: Talon News
http://tv.cloudcdn.me:80/live.ts?channelId=115213&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/TENSPORTS.png" ,PK: Ten Sports
http://tv.cloudcdn.me:80/live.ts?channelId=132255&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/panel/imageicon/9b84a99.png" ,PK: The Light TV
http://tv.cloudcdn.me:80/live.ts?channelId=121679&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="https://tv.cloudcdn.online/images/timenews.png" ,PK: Time News Sindhi
http://tv.cloudcdn.me:80/live.ts?channelId=266&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/7a10b32.png" ,PK: URDU 1
http://tv.cloudcdn.me:80/live.ts?channelId=456&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/4eaf296.png" ,PK: VOSA TV
http://tv.cloudcdn.me:80/live.ts?channelId=469&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2022-05/19692b426c53c0e266a24cba538b6405.png" ,PK: Venus HD
http://tv.cloudcdn.me:80/live.ts?channelId=132185&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/c800d82.png" ,PK: WASEB TV
http://tv.cloudcdn.me:80/live.ts?channelId=457&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/84a7684.png" ,PK: Z9 DIGITAL TV TORONTO
http://tv.cloudcdn.me:80/live.ts?channelId=22764&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="PAKISTANI" tvg-logo="http://ujm.from-in.com/imageicon/6fc0c8f.png" ,PK: ZINDAGI TV
http://tv.cloudcdn.me:80/live.ts?channelId=36264&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-07/6221f70a946e65ab046856dea3fb44cf.png" ,KID: BBC CBBC
http://tv.cloudcdn.me:80/live.ts?channelId=4217&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-07/705c9936bc50580b1ba85b2c77896bfa.png" ,KID: BBC CBeebies
http://tv.cloudcdn.me:80/live.ts?channelId=248&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-07/5bde414cc7e22f78e4b16bcf48489233.png" ,KID: Baby TV
http://tv.cloudcdn.me:80/live.ts?channelId=242&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://ujm.from-in.com/imageicon/a5641735.jpg" ,KID: Boomerang
http://tv.cloudcdn.me:80/live.ts?channelId=243&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://ujm.from-in.com/imageicon/cartoonnetwork.jpg" ,KID: Cartoon Network Hindi
http://tv.cloudcdn.me:80/live.ts?channelId=244&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-07/8d22efc9e80e82953c3f1ee26bb699e5.png" ,KID: Cartoon Network UK
http://tv.cloudcdn.me:80/live.ts?channelId=245&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://ujm.from-in.com/imageicon/cartoonnetwork.jpg" ,KID: Cartoon Network USA
http://tv.cloudcdn.me:80/live.ts?channelId=246&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-07/c8f9b130d1457911891a0999b0b5282a.png" ,KID: Cartoonito
http://tv.cloudcdn.me:80/live.ts?channelId=247&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-09/b81b699ab1552f3c15dea79e34e5f017.png" ,KID: Disney Channel
http://tv.cloudcdn.me:80/live.ts?channelId=249&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-07/609b7a99eeb990acd812fafb408cd606.png" ,KID: Disney Junior
http://tv.cloudcdn.me:80/live.ts?channelId=250&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-07/06a89cbfbaf2158279d67c8a597bb740.png" ,KID: Disney XD
http://tv.cloudcdn.me:80/live.ts?channelId=251&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" ,KID: Kids Tv
http://tv.cloudcdn.me:80/live.ts?channelId=123913&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" ,KID: Kids Tv Nursery Rhymes And Baby Songs
http://tv.cloudcdn.me:80/live.ts?channelId=123914&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-07/282cf1ec1c6d0a176440c15caa844e60.png" ,KID: Nick Jr.
http://tv.cloudcdn.me:80/live.ts?channelId=252&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2023-08/7d7143419964782c56e68963cebfa311.jpg" ,KID: Nick Jr. too
http://tv.cloudcdn.me:80/live.ts?channelId=253&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-11/47718e36a9a5c42f3d005fcd9f3d94be.png" ,KID: Nickelodeon
http://tv.cloudcdn.me:80/live.ts?channelId=254&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-07/725a1c58e36efa9a43bacf845b757d9c.png" ,KID: Nicktoons
http://tv.cloudcdn.me:80/live.ts?channelId=255&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://ujm.from-in.com/imageicon/POGOHINDI.png" ,KID: Pogo
http://tv.cloudcdn.me:80/live.ts?channelId=256&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-11/933ce6167d33958dc29a02179a4b382b.jpg" ,KID: Pop
http://tv.cloudcdn.me:80/live.ts?channelId=257&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2023-08/6b19a9656762091abdff8955c5865953.png" ,KID: Pop Max +1
http://tv.cloudcdn.me:80/live.ts?channelId=38625&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2023-11/f2c16698ad5fdc4731899cd1838f8469.png" ,KID: Sonic Nickelodeon
http://tv.cloudcdn.me:80/live.ts?channelId=40476&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://ujm.from-in.com/panel/imageicon/065352c.png" ,KID: Sony YAY!
http://tv.cloudcdn.me:80/live.ts?channelId=78849&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-05/937244d005d01c4149622ec8d46e6fca.png" ,KID: TeleToon
http://tv.cloudcdn.me:80/live.ts?channelId=72428&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2022-02/b5494083b00b7df904e0fdda6fbed046.jpg" ,KID: Tiny Pop
http://tv.cloudcdn.me:80/live.ts?channelId=259&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-05/959ce1ae57950d695d6e1d65bc5c90f5.png" ,KID: Treehouse TV
http://tv.cloudcdn.me:80/live.ts?channelId=102888&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="KIDS" tvg-logo="http://tv.cloudcdn.me/images/af1466fbx.png" ,KID: WOW Kid
http://tv.cloudcdn.me:80/live.ts?channelId=91169&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/4e4b4128.jpg" ,SP: 5Aab Kabaddi
http://tv.cloudcdn.me:80/live.ts?channelId=277&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/de06576.png" ,SP: A SPORTS FHD
http://tv.cloudcdn.me:80/live.ts?channelId=12217&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/62a868e.png" ,SP: ASTRO SUPERSPORT 1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125429&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/4a854e6.png" ,SP: ASTRO SUPERSPORT 2 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125430&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/b58f05f.png" ,SP: ASTRO SUPERSPORT 3 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125431&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/44c5e57.png" ,SP: ASTRO SUPERSPORT 4 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125432&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/31821ce.png" ,SP: Astro Cricket
http://tv.cloudcdn.me:80/live.ts?channelId=26034&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/31821ce.png" ,SP: Astro Cricket.
http://tv.cloudcdn.me:80/live.ts?channelId=33317&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/cd30f56.png" ,SP: BEIN Sports 1 English FHD
http://tv.cloudcdn.me:80/live.ts?channelId=102481&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/beinsports2english.png" ,SP: BEIN Sports 2 English FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125427&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/beinsports3english.png" ,SP: BEIN Sports 3 English FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125428&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/cb170b7.png" ,SP: DAZN 1 DE FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125424&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/bd89a0a.png" ,SP: DAZN 2 DE FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125425&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/76354ae.png" ,SP: DD Sports
http://tv.cloudcdn.me:80/live.ts?channelId=74567&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/6f51588c" ,SP: ESPN US 1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=271&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/2abd67b6" ,SP: EUROSPORT 1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=272&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/37bb7740" ,SP: EUROSPORT 2 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=273&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/fightbox.png" ,SP: FIGHT BOX FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125426&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/bb98eda.png" ,SP: FS1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=102480&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/919dbdf.png" ,SP: Flow Sports
http://tv.cloudcdn.me:80/live.ts?channelId=105348&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/fdb00f7.png" ,SP: Fox Sports 501 Cricket
http://tv.cloudcdn.me:80/live.ts?channelId=36128&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2020-07/3a660bbb5217b20183e9135bf2aaf562.png" ,SP: Fox Sports 502
http://tv.cloudcdn.me:80/live.ts?channelId=294&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/14f64b64" ,SP: Geo Super FHD
http://tv.cloudcdn.me:80/live.ts?channelId=274&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" ,SP: INTER TV
http://tv.cloudcdn.me:80/live.ts?channelId=61668&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/76e10fc7.jpg" ,SP: Live Kabaddi
http://tv.cloudcdn.me:80/live.ts?channelId=276&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/720e2fe.png" ,SP: MAQ TV
http://tv.cloudcdn.me:80/live.ts?channelId=33157&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/mutv.png" ,SP: MUTV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125434&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/b5bc5c2f.jpg" ,SP: NBC GOLF FHD
http://tv.cloudcdn.me:80/live.ts?channelId=341&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/48c39d29.jpg" ,SP: One Golf TV
http://tv.cloudcdn.me:80/live.ts?channelId=33163&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/premiersports1.png" ,SP: PREMIER SPORTS 1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=91158&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/premiersports2.png" ,SP: PREMIER SPORTS 2 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=91159&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/2c9c5c5.png" ,SP: PTV Sports FHD
http://tv.cloudcdn.me:80/live.ts?channelId=278&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/2c9c5c5.png" ,SP: PTV Sports FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=279&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/08971a4.png" ,SP: Racing TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=37315&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/realmadridtv.png" ,SP: Real Madrid TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125433&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/skysportscricket.png" ,SP: SKY Sports Cricket FHD
http://tv.cloudcdn.me:80/live.ts?channelId=281&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/skysportscricket.png" ,SP: SKY Sports Cricket FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=35530&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/2155cf6.png" ,SP: SPORTS 18 KHEL
http://tv.cloudcdn.me:80/live.ts?channelId=102478&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2022-03/8c24e752f56cbf20e36f414088013773.png" ,SP: Sky Sports Action FHD
http://tv.cloudcdn.me:80/live.ts?channelId=280&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/skysportsarena.png" ,SP: Sky Sports Arena FHD
http://tv.cloudcdn.me:80/live.ts?channelId=36132&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/dcf6149.png" ,SP: Sky Sports F1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=282&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/SkySportsFootballHD.png" ,SP: Sky Sports Football FHD
http://tv.cloudcdn.me:80/live.ts?channelId=308&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/3060a9ae" ,SP: Sky Sports Golf FHD
http://tv.cloudcdn.me:80/live.ts?channelId=283&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/1da91974" ,SP: Sky Sports Main Event FHD
http://tv.cloudcdn.me:80/live.ts?channelId=284&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/skysportsmix.png" ,SP: Sky Sports Mix FHD
http://tv.cloudcdn.me:80/live.ts?channelId=32489&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/57778ee2" ,SP: Sky Sports News FHD
http://tv.cloudcdn.me:80/live.ts?channelId=285&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/6f94df9d" ,SP: Sky Sports Premier League FHD
http://tv.cloudcdn.me:80/live.ts?channelId=286&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/4fa225b.png" ,SP: Sony Sports 1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=289&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/e27626a.png" ,SP: Sony Sports 2 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=290&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/3a556ed.png" ,SP: Sony Sports 3 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=291&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/eb923d9.png" ,SP: Sony Sports 4 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=105349&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/panel/imageicon/9327ac5.png" ,SP: Sony Sports 5 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=105350&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/b9fba6f.png" ,SP: Sports 18 1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=102479&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" ,SP: Sports 18 2
http://tv.cloudcdn.me:80/live.ts?channelId=132373&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" ,SP: Sports 18 3
http://tv.cloudcdn.me:80/live.ts?channelId=132374&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="https://tv.cloudcdn.online/images/channels/sportsfancode.png" ,SP: Sports Fancode
http://tv.cloudcdn.me:80/live.ts?channelId=78845&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/cf7af431.jpg" ,SP: Sports Trends TV
http://tv.cloudcdn.me:80/live.ts?channelId=292&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/13e1ff38" ,SP: Star Sports 1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=293&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/13e1ff38" ,SP: Star Sports 1 FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=49566&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/215303aa" ,SP: Star Sports 1 Hindi FHD
http://tv.cloudcdn.me:80/live.ts?channelId=295&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/215303aa" ,SP: Star Sports 1 Hindi FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=49569&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/starsports1tamil.png" ,SP: Star Sports 1 Tamil FHD
http://tv.cloudcdn.me:80/live.ts?channelId=275&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/starsports1telugu.png" ,SP: Star Sports 1 Telugu FHD
http://tv.cloudcdn.me:80/live.ts?channelId=288&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/cc77312d" ,SP: Star Sports 2 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=298&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/cc77312d" ,SP: Star Sports 2 FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=49568&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/starsports3.png" ,SP: Star Sports 3 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=39098&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/StarSportsSelect1HD.jpg" ,SP: Star Sports Select 1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=299&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/StarSportsSelect2HD.png" ,SP: Star Sports Select 2 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=300&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/criclife1.png" ,SP: Starzplay CricLife 1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125421&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/criclife2.png" ,SP: Starzplay CricLife 2 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125422&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/criclife3.png" ,SP: Starzplay CricLife 3 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=125423&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/tsports.png" ,SP: T Sports FHD
http://tv.cloudcdn.me:80/live.ts?channelId=48010&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="https://www.lyngsat.com/logo/tv/tt/tnt-sports-uk-us-uk.png" ,SP: TNT Sports 1 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=267&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="https://www.lyngsat.com/logo/tv/tt/tnt-sports-uk-us-uk.png" ,SP: TNT Sports 2 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=268&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="https://www.lyngsat.com/logo/tv/tt/tnt-sports-uk-us-uk.png" ,SP: TNT Sports 3 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=269&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="https://www.lyngsat.com/logo/tv/tt/tnt-sports-uk-us-uk.png" ,SP: TNT Sports 4 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=270&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="https://www.lyngsat.com/logo/tv/tt/tnt-sports-uk-us-uk.png" ,SP: TNT Sports 5 FHD
http://tv.cloudcdn.me:80/live.ts?channelId=78867&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/44637a54.png" ,SP: TSN 1
http://tv.cloudcdn.me:80/live.ts?channelId=28961&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/a0e9afbe.jpg" ,SP: TSN 2
http://tv.cloudcdn.me:80/live.ts?channelId=28962&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/31e9ed18.png" ,SP: TSN 3
http://tv.cloudcdn.me:80/live.ts?channelId=28963&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/073a41c5.png" ,SP: TSN 4
http://tv.cloudcdn.me:80/live.ts?channelId=28964&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/c758daed.png" ,SP: TSN 5
http://tv.cloudcdn.me:80/live.ts?channelId=28965&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/TENSPORTS.png" ,SP: Ten Sports
http://tv.cloudcdn.me:80/live.ts?channelId=301&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://tv.cloudcdn.me/images/tennischannel.png" ,SP: Tennis Channel FHD
http://tv.cloudcdn.me:80/live.ts?channelId=296&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="https://tv.cloudcdn.online/images/channels/visionsportstv.png" ,SP: Vision Sports TV
http://tv.cloudcdn.me:80/live.ts?channelId=132401&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/b8b4ccb6.png" ,SP: WWE Sports
http://tv.cloudcdn.me:80/live.ts?channelId=4244&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/WILLOWCRICKETHD.jpg" ,SP: Willow Cricket FHD
http://tv.cloudcdn.me:80/live.ts?channelId=302&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/WILLOWCRICKETHD.jpg" ,SP: Willow Cricket FHD.
http://tv.cloudcdn.me:80/live.ts?channelId=40481&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SPORTS" tvg-logo="http://ujm.from-in.com/imageicon/7d6fdb72.png" ,SP: Willow Xtra
http://tv.cloudcdn.me:80/live.ts?channelId=287&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/c01edd9028bd637cc5bdc8527acc3353.png" ,ZA: SuperSport Action
http://tv.cloudcdn.me:80/live.ts?channelId=125436&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-10/0a52ab66352a2b8d466ccdb407570cad.jpg" ,ZA: SuperSport Blitz
http://tv.cloudcdn.me:80/live.ts?channelId=125437&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/5b9d9ddbf95526d59c2fdd6725253646.png" ,ZA: SuperSport Cricket
http://tv.cloudcdn.me:80/live.ts?channelId=125438&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/8dab62dd2c2faa3d66261a2a5afa6260.png" ,ZA: SuperSport Football
http://tv.cloudcdn.me:80/live.ts?channelId=125439&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/a20c92d13ce602ec324ff03b209ed0c2.png" ,ZA: SuperSport Golf
http://tv.cloudcdn.me:80/live.ts?channelId=125440&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/a8f0bee8d482364f261394bf7678fa0e.png" ,ZA: SuperSport Grandstand
http://tv.cloudcdn.me:80/live.ts?channelId=125441&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/dd29bde85c09ac2e0c1c250edb6bcf23.png" ,ZA: SuperSport LaLiga
http://tv.cloudcdn.me:80/live.ts?channelId=125442&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/488fd8d34ea146bfaf82c12331f4223e.png" ,ZA: SuperSport Maximo 1
http://tv.cloudcdn.me:80/live.ts?channelId=125443&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/cbc8390b70fc0ce16a159f392002fec4.png" ,ZA: SuperSport Motorsport
http://tv.cloudcdn.me:80/live.ts?channelId=125444&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-08/b113905d39622090910a766c75af759d.png" ,ZA: SuperSport PSL
http://tv.cloudcdn.me:80/live.ts?channelId=125446&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/2f8f23e2a35d5a4e9ea336d7b51fd98f.png" ,ZA: SuperSport Premier League
http://tv.cloudcdn.me:80/live.ts?channelId=125445&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/55a7ac3c8cdd7718d94d29b8ebc99f2e.png" ,ZA: SuperSport Rugby
http://tv.cloudcdn.me:80/live.ts?channelId=125447&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/b51cde8be3defead0ca307c5be0c9453.png" ,ZA: SuperSport Tennis
http://tv.cloudcdn.me:80/live.ts?channelId=125448&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/5440da812326351c34541cb82f6aac9e.png" ,ZA: SuperSport Variety 1
http://tv.cloudcdn.me:80/live.ts?channelId=125449&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/65bb8b6586b7fa25553a450811acce40.png" ,ZA: SuperSport Variety 2
http://tv.cloudcdn.me:80/live.ts?channelId=125450&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/712a4054a884ffbeb3cac1bd3d4700da.png" ,ZA: SuperSport Variety 3
http://tv.cloudcdn.me:80/live.ts?channelId=125451&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="SUPERSPORT" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/7816729fca81dcee05b869f633b8a84d.png" ,ZA: SuperSport Variety 4
http://tv.cloudcdn.me:80/live.ts?channelId=125452&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/9b61a2a.png" ,TM: Adithya TV
http://tv.cloudcdn.me:80/live.ts?channelId=43404&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="https://tv.cloudcdn.online/images/channels/ChithiramTv.png" ,TM: Chithiram TV
http://tv.cloudcdn.me:80/live.ts?channelId=43407&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/e74fa3f.png" ,TM: Colors Tamil FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43408&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="https://tv.cloudcdn.online/images/channels/DDPodhigai.jpg" ,TM: DD Podhigai
http://tv.cloudcdn.me:80/live.ts?channelId=43409&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/46e2b7b.png" ,TM: Jaya Max
http://tv.cloudcdn.me:80/live.ts?channelId=43410&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/643503f.png" ,TM: KTV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43411&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/ce275e7.png" ,TM: News 7 Tamil
http://tv.cloudcdn.me:80/live.ts?channelId=43413&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/70bf3c5.png" ,TM: News18 Tamil Nadu FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43412&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/2ec6b4c.png" ,TM: Peppers TV
http://tv.cloudcdn.me:80/live.ts?channelId=23125&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/8794550.png" ,TM: Puthiya Thalaimurai TV
http://tv.cloudcdn.me:80/live.ts?channelId=43414&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/e26b8bb.png" ,TM: Raj Digital Plus
http://tv.cloudcdn.me:80/live.ts?channelId=43415&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/d22a26f.png" ,TM: Raj Musix
http://tv.cloudcdn.me:80/live.ts?channelId=43416&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/fa76b3f.png" ,TM: Raj TV
http://tv.cloudcdn.me:80/live.ts?channelId=43417&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/7224188.png" ,TM: Seithigal TV
http://tv.cloudcdn.me:80/live.ts?channelId=43418&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/32340db.png" ,TM: Star Vijay FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43419&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/32340db.png" ,TM: Star Vijay FHD (BK)
http://tv.cloudcdn.me:80/live.ts?channelId=132400&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/176ce76.png" ,TM: Sun Music FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43420&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/d450e67.png" ,TM: Sun TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43421&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/d450e67.png" ,TM: Sun TV FHD (BK)
http://tv.cloudcdn.me:80/live.ts?channelId=132404&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/b03288d.png" ,TM: Vendhar TV
http://tv.cloudcdn.me:80/live.ts?channelId=43422&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/4b10e18.png" ,TM: Vikatan TV
http://tv.cloudcdn.me:80/live.ts?channelId=123917&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/867a3aa.png" ,TM: Zee Tamil FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43423&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TAMIL" tvg-logo="http://ujm.from-in.com/panel/imageicon/867a3aa.png" ,TM: Zee Tamil FHD (BK)
http://tv.cloudcdn.me:80/live.ts?channelId=128481&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/abf09e9.png" ,TG: 10TV
http://tv.cloudcdn.me:80/live.ts?channelId=43447&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/485a63f.png" ,TG: ABN Andhra Jyothi
http://tv.cloudcdn.me:80/live.ts?channelId=43448&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/f1c4543.png" ,TG: Cartoon Network Telugu
http://tv.cloudcdn.me:80/live.ts?channelId=43450&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/b95175a.png" ,TG: Gemini Comedy
http://tv.cloudcdn.me:80/live.ts?channelId=43452&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/2d79695.png" ,TG: Gemini Movies FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43453&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/ded65e2.png" ,TG: Gemini Music FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43454&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/8ae09ee.png" ,TG: Gemini TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43455&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/d97c75f.png" ,TG: I News
http://tv.cloudcdn.me:80/live.ts?channelId=43456&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/86d69bb.png" ,TG: Mahaa News
http://tv.cloudcdn.me:80/live.ts?channelId=43459&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/5f552fc.png" ,TG: Mana TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43460&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" ,TG: Mana TV Int. FHD
http://tv.cloudcdn.me:80/live.ts?channelId=132280&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/1cf8cec.png" ,TG: NTV Telugu
http://tv.cloudcdn.me:80/live.ts?channelId=43461&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/6c9ce93.png" ,TG: Raj Musix Telugu
http://tv.cloudcdn.me:80/live.ts?channelId=43462&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/265f0fe.png" ,TG: Raj News Telugu
http://tv.cloudcdn.me:80/live.ts?channelId=43463&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" ,TG: Sai TV Telugu (Spiritual)
http://tv.cloudcdn.me:80/live.ts?channelId=132287&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/b92412f.png" ,TG: Star Maa Gold
http://tv.cloudcdn.me:80/live.ts?channelId=43457&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/716b31d.png" ,TG: Star Maa TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43458&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/da8dd03.png" ,TG: T News
http://tv.cloudcdn.me:80/live.ts?channelId=43464&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/ca9aa0c.png" ,TG: TV9 Telugu FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43465&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/0e0e65a.png" ,TG: V6 News FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43466&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/7262556.png" ,TG: Zee Cinemalu FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43467&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="TELUGU" tvg-logo="http://ujm.from-in.com/panel/imageicon/31f6e57.png" ,TG: Zee Telugu FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43468&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/0c4e70a.png" ,MAL: 24 News FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43526&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/9ed798a.png" ,MAL: Asianet Movies
http://tv.cloudcdn.me:80/live.ts?channelId=43470&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/3603604.png" ,MAL: Asianet News
http://tv.cloudcdn.me:80/live.ts?channelId=43471&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/2460f75.png" ,MAL: Asianet Plus
http://tv.cloudcdn.me:80/live.ts?channelId=43472&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/9b0c268.png" ,MAL: Asianet TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43469&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/2534ffc.png" ,MAL: Flower TV
http://tv.cloudcdn.me:80/live.ts?channelId=43473&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/2534ffc.png" ,MAL: Flower TV (USA)
http://tv.cloudcdn.me:80/live.ts?channelId=132256&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/99e8c50.png" ,MAL: Janam TV
http://tv.cloudcdn.me:80/live.ts?channelId=43474&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/2e591cd.png" ,MAL: Jeevan TV
http://tv.cloudcdn.me:80/live.ts?channelId=43475&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/217ad90.png" ,MAL: Kairali News FHD
http://tv.cloudcdn.me:80/live.ts?channelId=48007&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/64e3430.png" ,MAL: Kairali TV
http://tv.cloudcdn.me:80/live.ts?channelId=43476&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/7c4859b.png" ,MAL: Kappa TV
http://tv.cloudcdn.me:80/live.ts?channelId=43477&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/4fb9551.png" ,MAL: Kerala Vision
http://tv.cloudcdn.me:80/live.ts?channelId=43525&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/857feec.png" ,MAL: Manorama News FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43478&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/360baab.png" ,MAL: Mathrubhumi News
http://tv.cloudcdn.me:80/live.ts?channelId=43479&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/bfe7e6d.png" ,MAL: Mazhavil Manorama FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43480&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/f8e56d6.png" ,MAL: Media One
http://tv.cloudcdn.me:80/live.ts?channelId=43481&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/7f25250.png" ,MAL: Reporter TV
http://tv.cloudcdn.me:80/live.ts?channelId=43482&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/a5b78dd.png" ,MAL: Safari TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43483&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/b07c646.png" ,MAL: Shalom TV
http://tv.cloudcdn.me:80/live.ts?channelId=43484&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/15e2e18.png" ,MAL: Surya Movies FHD
http://tv.cloudcdn.me:80/live.ts?channelId=85498&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/74f31ef.png" ,MAL: Surya Music
http://tv.cloudcdn.me:80/live.ts?channelId=43485&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/19fff17.png" ,MAL: Surya TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=43486&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="MALAYALAM" tvg-logo="http://ujm.from-in.com/panel/imageicon/3f6a8e6.png" ,MAL: WE TV
http://tv.cloudcdn.me:80/live.ts?channelId=43487&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/13bca577" ,IS: Ahlebait TV
http://tv.cloudcdn.me:80/live.ts?channelId=221&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/d07a1004.jpg" ,IS: Ahlulbayt TV
http://tv.cloudcdn.me:80/live.ts?channelId=29694&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="https://tv.cloudcdn.online/images/AlAjalTv.png" ,IS: Al Ajal TV
http://tv.cloudcdn.me:80/live.ts?channelId=132184&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/331ab8e.png" ,IS: Al Mahdi TV
http://tv.cloudcdn.me:80/live.ts?channelId=222&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/70c3c400" ,IS: Al Sunnah Al Nabawiyah
http://tv.cloudcdn.me:80/live.ts?channelId=223&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/afa57f36.jpg" ,IS: Al Zahra
http://tv.cloudcdn.me:80/live.ts?channelId=29218&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/70f3a88.png" ,IS: BIBLE TV UK
http://tv.cloudcdn.me:80/live.ts?channelId=36277&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/3d6511c.png" ,IS: BTL TV NETHERLANDS
http://tv.cloudcdn.me:80/live.ts?channelId=36247&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/e424d368.jpg" ,IS: Channel Win
http://tv.cloudcdn.me:80/live.ts?channelId=155&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/8324fcd.png" ,IS: DEEN TV UK
http://tv.cloudcdn.me:80/live.ts?channelId=90257&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" ,IS: Dua Channel
http://tv.cloudcdn.me:80/live.ts?channelId=37317&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/9007ad1.png" ,IS: ETERNAL LIFE TV USA
http://tv.cloudcdn.me:80/live.ts?channelId=36249&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/2ad08a22.jpg" ,IS: Eman Channel
http://tv.cloudcdn.me:80/live.ts?channelId=374&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/9522d32.png" ,IS: FTN TV
http://tv.cloudcdn.me:80/live.ts?channelId=56799&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/96441fb.png" ,IS: GAWAHI TV
http://tv.cloudcdn.me:80/live.ts?channelId=30246&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/3a4443c.png" ,IS: God Stands TV
http://tv.cloudcdn.me:80/live.ts?channelId=59352&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/2217044.png" ,IS: Good Shepherd TV
http://tv.cloudcdn.me:80/live.ts?channelId=86236&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/798f190.png" ,IS: Grace Network TV
http://tv.cloudcdn.me:80/live.ts?channelId=57486&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/8d20dc78" ,IS: Hadi TV
http://tv.cloudcdn.me:80/live.ts?channelId=224&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/a79d458.png" ,IS: Haramain TV
http://tv.cloudcdn.me:80/live.ts?channelId=225&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/aa518188.jpg" ,IS: Hidayat TV
http://tv.cloudcdn.me:80/live.ts?channelId=226&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/9e4b655b.jpg" ,IS: Huda TV
http://tv.cloudcdn.me:80/live.ts?channelId=29222&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/c3b6d688.png" ,IS: Hyder TV Canada
http://tv.cloudcdn.me:80/live.ts?channelId=399&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/80267517.jpg" ,IS: IILM TV
http://tv.cloudcdn.me:80/live.ts?channelId=36283&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/43d176dd.jpg" ,IS: ITV US Islamic
http://tv.cloudcdn.me:80/live.ts?channelId=29220&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/6eb8a1c5.jpg" ,IS: Imam Hussein 1 Persian
http://tv.cloudcdn.me:80/live.ts?channelId=29214&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/9bcd90c3.jpg" ,IS: Imam Hussein 2 Arabic
http://tv.cloudcdn.me:80/live.ts?channelId=29215&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/90ba49a9.jpg" ,IS: Imam Hussein 3 English
http://tv.cloudcdn.me:80/live.ts?channelId=29216&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/a2c058d0.jpg" ,IS: Imam Hussein 4 Urdu
http://tv.cloudcdn.me:80/live.ts?channelId=29217&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/ac7631ee.jpg" ,IS: Iqra TV Bangla
http://tv.cloudcdn.me:80/live.ts?channelId=29219&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/89a91335.png" ,IS: Iqra TV Urdu
http://tv.cloudcdn.me:80/live.ts?channelId=433&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/d1320ecf.jpg" ,IS: Isaac TV
http://tv.cloudcdn.me:80/live.ts?channelId=227&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/8b5eae16.png" ,IS: Islam Channel English
http://tv.cloudcdn.me:80/live.ts?channelId=18220&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/3d81fade" ,IS: Islam Channel Urdu
http://tv.cloudcdn.me:80/live.ts?channelId=228&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/5e95b22.png" ,IS: JESUS CHRIST WORLD USA
http://tv.cloudcdn.me:80/live.ts?channelId=36279&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/f689b05.png" ,IS: JOYSTAR TV
http://tv.cloudcdn.me:80/live.ts?channelId=36280&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/4e0aade.png" ,IS: KING TV
http://tv.cloudcdn.me:80/live.ts?channelId=33161&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/4e0aade.png" ,IS: KING TV ENGLISH
http://tv.cloudcdn.me:80/live.ts?channelId=92243&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/5936a3b.png" ,IS: MISSION ASIA TV
http://tv.cloudcdn.me:80/live.ts?channelId=36256&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/a8d7167.png" ,IS: MTA 1 World HD
http://tv.cloudcdn.me:80/live.ts?channelId=233&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/7dc07131" ,IS: Madani Channel Bangla
http://tv.cloudcdn.me:80/live.ts?channelId=229&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/91443da2" ,IS: Madani Channel English
http://tv.cloudcdn.me:80/live.ts?channelId=230&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/7b7770d8" ,IS: Madani Channel Urdu
http://tv.cloudcdn.me:80/live.ts?channelId=231&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/55326bb.png" ,IS: Makkah TV Live
http://tv.cloudcdn.me:80/live.ts?channelId=4203&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" ,IS: Minhaj TV CA
http://tv.cloudcdn.me:80/live.ts?channelId=123911&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/ff9c8dfc" ,IS: Noor TV
http://tv.cloudcdn.me:80/live.ts?channelId=235&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/82224ae.png" ,IS: PMI TV
http://tv.cloudcdn.me:80/live.ts?channelId=36265&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/f4e597f.png" ,IS: PRAISE TV
http://tv.cloudcdn.me:80/live.ts?channelId=36266&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/269d1f4b.jpg" ,IS: Paigham Quran TV
http://tv.cloudcdn.me:80/live.ts?channelId=29224&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/9e034535.jpg" ,IS: Paigham TV
http://tv.cloudcdn.me:80/live.ts?channelId=458&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/4d10648a" ,IS: Peace Journey TV
http://tv.cloudcdn.me:80/live.ts?channelId=236&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/peacetvbangla2.jpg" ,IS: Peace TV Bangla
http://tv.cloudcdn.me:80/live.ts?channelId=237&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/peacetvenglish1.jpg" ,IS: Peace TV ENG
http://tv.cloudcdn.me:80/live.ts?channelId=238&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/dc57d576" ,IS: Peace TV Urdu
http://tv.cloudcdn.me:80/live.ts?channelId=239&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" ,IS: QURAN
http://tv.cloudcdn.me:80/live.ts?channelId=123908&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" ,IS: QURAN DOCUMENTRY TV
http://tv.cloudcdn.me:80/live.ts?channelId=123909&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" ,IS: QURAN REBORN TV
http://tv.cloudcdn.me:80/live.ts?channelId=123910&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/371cd9d.png" ,IS: QURAN TV FHD
http://tv.cloudcdn.me:80/live.ts?channelId=232&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/371cd9d.png" ,IS: QURAN TV.
http://tv.cloudcdn.me:80/live.ts?channelId=57497&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/67fb0460.jpg" ,IS: Qaim TV
http://tv.cloudcdn.me:80/live.ts?channelId=29698&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/e3c4f0ea.jpg" ,IS: Safeer TV
http://tv.cloudcdn.me:80/live.ts?channelId=36286&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/panel/imageicon/f96f482.png" ,IS: Shine Star TV
http://tv.cloudcdn.me:80/live.ts?channelId=57710&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" tvg-logo="http://ujm.from-in.com/imageicon/87eb77fa.png" ,IS: Yeshuaa TV Channel
http://tv.cloudcdn.me:80/live.ts?channelId=33162&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="ISLAMIC CHANNELS" ,IS: Zainabia Channel
http://tv.cloudcdn.me:80/live.ts?channelId=37314&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ Kids" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/04dc42d583bea654a88f87449c173839.png" ,US: Disney XD
http://tv.cloudcdn.me:80/live.ts?channelId=46822&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ Sports" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/f1dc481ba9bdb4f1d02734d80a5c8f99.png" ,US: CBS Sports Network
http://tv.cloudcdn.me:80/live.ts?channelId=36094&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ News" tvg-logo="http://ujm.from-in.com/imageicon/cf6be890.png" ,US: ABC News
http://tv.cloudcdn.me:80/live.ts?channelId=472&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ News" tvg-logo="http://ujm.from-in.com/panel/imageicon/c848adc.png" ,US: BBC World News FHD
http://tv.cloudcdn.me:80/live.ts?channelId=47112&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ News" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/a4867ed7564efb55bd7f5af1fd61c88e.png" ,US: Bloomberg TV
http://tv.cloudcdn.me:80/live.ts?channelId=46797&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ News" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/930d9bbb0c0107df1b011f45e4c83e56.png" ,US: CNBC
http://tv.cloudcdn.me:80/live.ts?channelId=46798&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ News" tvg-logo="http://ujm.from-in.com/imageicon/CNN1.png" ,US: CNN International FHD
http://tv.cloudcdn.me:80/live.ts?channelId=50&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ News" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/b823782b94f98698487bdf4b98c42b3b.png" ,US: Fox News Channel
http://tv.cloudcdn.me:80/live.ts?channelId=127093&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ News" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/1279b30b8e9704c9f7b557d3bd19e8ee.png" ,US: MSNBC
http://tv.cloudcdn.me:80/live.ts?channelId=127129&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ News" tvg-logo="http://s3.i3ns.net:2052/cs/etc/blank-icon.png" ,US: NBC
http://tv.cloudcdn.me:80/live.ts?channelId=127140&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ News" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2022-12/60569c5684434c1092ceeb239e795dd2.svg" ,US: NBC News Now
http://tv.cloudcdn.me:80/live.ts?channelId=36105&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ Movie" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-08/e88f2f1db154d1e7555f9cbd99f38fcc.png" ,US: HBO
http://tv.cloudcdn.me:80/live.ts?channelId=46801&uid=4166&deviceMac=00:1A:79:F3:9F:F5
#EXTINF:-1 group-title="USA ➾ Movie" tvg-logo="http://s3.i3ns.net:2052/portal/picon/2021-06/9d4f141d9697ce3e5bff43e3e5dce90d.png" ,US: Hallmark Channel
http://tv.cloudcdn.me:80/live.ts?channelId=46800&uid=4166&deviceMac=00:1A:79:F3:9F:F5

#EXTM3U
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8V2F2QxyQ0OEgra3yKQ2rx7v0Hz.jpg" ,NIHARIKA: IN THE MIST (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383713.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://fs1.extraimage.org/picupto/2024/10/12/MV5BZGIzNWU1Y2QtZWU3Yi00YjlhLWFhMjYtOTE0MmE3OTgzYTRmXkEyXkFqcGc._V1_.jpg" ,POWER (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383685.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/eHelOt5fh68bansf2uAkflG4250.jpg" ,NOOR JAHAAN (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383676.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,TRIANGLE (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383650.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/htROqNasnMiM1vZAl0IcH2VIdFH.jpg" ,FIDAA (2018)*
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383613.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rOSUzB6CAh7tFk2jF9cMMWQAW1z.jpg" ,MAYAA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383368.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/a1gW2iAtJBH7hsJjfcYSRApXQ4D.jpg" ,CHEENE BADAM (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383356.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jezqesFI7oUoc7wm4lzeNk3HGcL.jpg" ,GHORE PHERAR GAAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383210.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,OGO BIDESHINI (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383032.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,CASINO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383009.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/AoDMqNSaqrrKoRvQ9ftLzMcJT8L.jpg" ,FORGET ME NOT (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/382211.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2vR6p2TkrPtGrtTjGO3CCCjH5ir.jpg" ,JAJABARA 2.0 (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/382210.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/njvMFTM7zFNal6yO3vKiTiAXADq.jpg" ,SO VERY UTTAM (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/382072.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gybpzR3J9tiO2b8LYTEeHZ3dCDI.jpg" ,100% LOVE (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253044.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://static.toiimg.com/photo/64813383.cms?imgsize=61990" ,AALEYA (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253047.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://i1.wp.com/bestoftheyear.in/wp-content/uploads/2018/10/amar.jpg?fit=538%2C737&ssl=1" ,AAMAR APONJON (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253048.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/seGs8rkevsmCjgchFj9JlUyWJ9H.jpg" ,AAMI ASHBO PHIREY (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253049.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BOTQ3ODI1NjktZTYwMC00NTk0LWEzNWQtZWNlYjU0ZmQ1NTRjXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_.jpg" ,ABASHESHE (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211444.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/twPeVCA2JqcdsY8SjlXukVrexpA.jpg" ,A DAY IN THE LIFE OF ANIL BAGCHI (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253056.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pBjUzjhrMoYMCAghezfJxIlDDm4.jpg" ,ADDA (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253050.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,ADIM (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377767.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ft7TEBibhlEWq2vTVWvtHgGpOIl.jpg" ,ADVENTURE OF SUNDARBAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/341119.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xmGq9ilvlZTh4KwM8kd05enQlSR.jpg" ,AGANTUK (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/284330.mp4
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bz4lBxrzyouHnWhHpotxFH7OoGX.jpg" ,AGNEE 2 (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253052.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/17W0UtarKWr78JekWhehDawCr4S.jpg" ,AHAA RE (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211471.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cA6f6KKr94nFEBNflaDmZ6AsLuv.jpg" ,ALINAGARER GOLOKDHADHA (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253053.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/iZuES3IbBojmzYtIq5vvjpTXPsr.jpg" ,AMANUSH (2010)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211453.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/p5HsITn1XPh8eaJGJ5Mn71mcMXs.jpg" ,AMANUSH 2 (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370112.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cLbye2Kfh6fvObKcMpnX18YzbJu.jpg" ,AMI JE KE TOMAR (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253054.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/ASCT_1st_Look_Poster.jpeg/220px-ASCT_1st_Look_Poster.jpeg" ,AMI SHUDHU CHEYECHI TOMAY (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253055.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BNGY4NWJlODktNmU4MS00MWFiLWJhMTYtMGRjMWIyNDUzOGNjXkEyXkFqcGdeQXVyNTA3OTU1ODQ@._V1_.jpg" ,AMI TOMAR HOTE CHAI (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211409.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sc4HCrwb8teO13Mfj0LgF1vVUPu.jpg" ,ANGSHUMAN MBA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371449.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pjwg9XkL22GZ2XQdfMvcAofLE1O.jpg" ,ANTARJAL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373782.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tBxusUY9dG07wlCIlwMjvkklt6w.jpg" ,ANTONY KOBIYAL (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211437.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,APARICHITO (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211486.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BZjYxODQ2YjMtNTczOS00YmFjLTk1ZmUtOWNhYjlmMDU5NjE3XkEyXkFqcGdeQXVyNTM0MDc1ODE@._V1_.jpg" ,APON MANUSH (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211408.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BZDFmYzM3ZTgtMjlkMS00ZGM0LWE3MGQtYjFmNDJjODQ5MzQyXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_.jpg" ,ARCHIER GALLERY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363316.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/hmglpFovmhStKBdV32HCJ5W08Q0.jpg" ,ARDHANGINI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371489.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BYTJjMWE2NzUtNjY1My00ZjhkLTkyY2ItNzZjMTIwNjY1ZTExXkEyXkFqcGdeQXVyNjExNDkxODk@._V1_.jpg" ,ARONI TAKHON (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253057.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/dUB2zlbmtmkajNJay9G1x4ktlRa.jpg" ,ARSHINAGAR (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253058.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uGAGCthCBGMuRuoKvRpw0EK0Ro0.jpg" ,ASTITVA (2000)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211421.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tpNC3PrtbniQddtUoUtu3okWKCN.jpg" ,ATITHI (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253059.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1CI8elkjywicSMwfmnBK5KkbjWt.jpg" ,AUTOGRAPH (2010)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211450.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2U0ib61DnAQuooxyiS0eP59nIZD.jpg" ,AWARA (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253061.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,AYNABAJI (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374983.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BNGNhZWY5MDctMzk4ZC00MGY3LTlhNzAtNzZjMTJhMTI5NzMzXkEyXkFqcGdeQXVyODM0ODQ5NDM@._V1_QL75_UX190_CR0,0,190,281_.jpg" ,BADSHAH THE DON (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253062.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/x6NXLTJQp7TJM9EaXIpbpoRfqxu.jpg" ,BAGH BANDI KHELA (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253063.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/l01wF0ImU8I2Mr1lb5zODooqnht.jpg" ,BAISHE SRABON (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211484.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/g8iULhj6XyKV98J5deyVtvYMVDR.jpg" ,BANGALI BABU ENGLISH MEM (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253065.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/g2QeBD5Fu7ARBgAV8zHh2BbPN0H.jpg" ,BAPI BARI JAA (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253066.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BM2I1MjdmM2ItMDAwZi00ZjQxLTkzODctNDY3MWMxOGMxM2QxXkEyXkFqcGdeQXVyMTAxOTgzNzQ1._V1_QL75_UX190_CR0,2,190,281_.jpg" ,BAROF (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211493.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BOGVmOTE1MWQtMzBlZC00Yjc0LWFjMGQtODZmNWM2M2YxZjUzXkEyXkFqcGdeQXVyMzQ5MzkwMDY@._V1_FMjpg_UX1000_.jpg" ,BASU PORIBAR (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253067.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9Vk11czZi8TUim4bOyxZIPgPByK.jpg" ,BELASESHE (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253068.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wCvGG7h4Ws5D2sbdrEYUvhBKETU.jpg" ,BELASHURU (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/277239.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/39V8mS7Pk4XQyHkit2uKAVrhT3r.jpg" ,BENGALI BEAUTY (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211405.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rzeUytorI5ZdDqLhRugF54zXqmG.jpg" ,BEPOROWA (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253070.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jQnvz3sFJea4wPjG1uS28jjm5z7.jpg" ,BHAGSHESH: THE REMAINDER (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253071.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6JcYE4sr21pGiWcAN3OfpSgxysR.jpg" ,BHAIJAAN ELO RE (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211433.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bgvvMXVpxD05QYYQp7HNTJYpdlH.jpg" ,BHALO THEKO FUL (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253073.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://fs1.extraimage.org/picupto/2023/06/28/Bhangon-2022-Bangla-1080p-HDRip-2.5GB.jpg" ,BHANGON (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/362915.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/q70bhiqr5H75gUCHj0YEUNe2zlx.jpg" ,BHEETU (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253074.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sdKz0opCeWDjIAjvqa2DnhdYiQX.jpg" ,BHOLE BABA PAAR KAREGA (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/264169.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9uc7qwT3OjoGwd96OVQJ4GWj0Qu.jpg" ,BHOOTCHAKRA PVT. LTD. (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363338.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ttqLIyYOiAH4DsZFiNSCAC47frq.jpg" ,BHUBAN MAJHI (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211399.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/faQyYHRQVTtYCIR4RO9ejYVgkfJ.jpg" ,BIBAHO OBHIJAAN (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369705.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BNDU2ZjMzNDItYjc5ZS00NzM2LWE0YjAtNDA5ODliZTU4NjVhXkEyXkFqcGdeQXVyNTMyMjgwNzI@._V1_.jpg" ,BIDAAY BYOMKESH (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370396.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj99rseBUWX-EmaZRl6LWmv5WNJQ-xt9PMd-tCwJUcNijxnuxV" ,BILU RAKKHOSH (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211483.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zgVahphVQrCbyJvOCtDxgPgn5ii.jpg" ,BINDAAS (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369691.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BNGIwMzc2NDgtYjk1Zi00NjA1LTk4ZGMtOWIxNzVkNWIzMjYxXkEyXkFqcGdeQXVyOTM4OTkwODQ@._V1_.jpg" ,BISHBASHPO (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211427.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_auto,q_auto/resources/0-0-267723/portrait/1920x770_362302787.jpg" ,BIYE.COM (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211435.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/a3AsWYwwcc4MapsXTLLa8E8VVmU.jpg" ,BIZLI: ORIGIN (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253077.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BZGM3Zjg0MWYtMzdjNS00NzM5LTk5ZjctMDM5ZTY0NzViZjkyXkEyXkFqcGdeQXVyOTQ0MDUwOTM@._V1_.jpg" ,BOBBYR BONDHURA (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253078.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,BODHON (2022
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/281141.mp4
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BZTRmMmE5ZjctN2I0Mi00M2MyLWI1NjItMzNkNTQ2MDY0OTk3XkEyXkFqcGdeQXVyOTc5MjUzNjg@._V1_.jpg" ,BOGLA MAMA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375681.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BMzFmYTIzOWMtNmI2Ny00ZDgxLTkyNDItYWRkMjUyNTVmYjQwXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_.jpg" ,BOJHENA SE BOJHENA (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253079.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8huuagrSpdrRSJXAdTcGaBEWjIm.jpg" ,BONKU BABU (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211474.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/dDQHpXfDi9juemB3mCZW5HItICS.jpg" ,BOUDI CANTEEN (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/314816.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/h0ANtmpz38FuQBEzwSuORPwKxtt.jpg" ,BOUNDARY (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253119.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jIyaQjAhbQ0KlV6DGbeq0U06ZJ0.jpg" ,BOXER (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211424.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2zgWCZNL2nvFmaCwdPsLiaeShlH.jpg" ,BROMBHODOITYO (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253081.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vpupKbd0cBD4ZQ2TOAq0GvGZexr.jpg" ,BURO SADHU (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253083.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/1765/831765-v" ,BYAPIKA BIDAY (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211431.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lgKu1PykVRlarWdqTJBTyujtYPc.jpg" ,BYOMKESH HOTYAMANCHA (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/283870.mp4
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/j6TFQCJ3eHTjgM5PrQ3K1ES3Alu.jpg" ,CHALBAAZ (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211438.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vbgSg127Rn9QLgP1ho1RuSsRQ4y.jpg" ,CHALLENGE (2009)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253085.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/fUekCoVWHKwjDr9S3TeNZv153p1.jpg" ,CHAMPION (2005)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253086.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/asSgTSgHD1HTvc2NqvkjTPiqAiU.jpg" ,CHEENI 2 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371874.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3SUTURmMu3c0Rtz0pv7JTYRSIj4.jpg" ,CHIROSHAKHA HEY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379966.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qS9dIoIUJkAY6CqZPKbGv9EhTVF.jpg" ,CHOLO PALTAI (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253089.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5GTTK6hxU4qyJMpppPSUlJK3A8V.jpg" ,CHORABALI (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211426.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uU80Z0xLlFXTOokKwZhs4CFxEQp.jpg" ,CHOWDHURY RAJBARI (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/263382.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://c.saavncdn.com/704/Chupke-Se-Timeless-Hits-Of-Gulzar-Hindi-2014-500x500.jpg" ,CHUP (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253090.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/y5VfeTC5miXXvvQmDVpUJedU7Vm.jpg" ,CHUPKOTHA (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369530.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BMGJlNmUxYjItYTVkMi00NzY5LWIxYjMtYjg3MDgwM2MzODYwXkEyXkFqcGdeQXVyNDQ4Mzc4MjI@._V1_.jpg" ,CHUPKOTHA 2 (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369566.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/dI3xrqHdWj1XhfqZs0ChORWDPjj.jpg" ,CHUYE DILE MON (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211394.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,CLAPSTICK (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211418.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/42oy7WtB05L4mEwvvBY5pq0AgXX.jpg" ,COLKATAY COLUMBUS (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253091.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://upload.wikimedia.org/wikipedia/en/9/96/Corona_%282020%29_film_poster.jpg" ,CORONA VIRUS THE SILENT KILLER (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253093.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gh8UoQd8PJOelIOY5ng9VMOmrS1.jpg" ,COSMIC SEX (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253094.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/crime-the-dark-side-et00071263-20-02-2018-12-46-00.jpg" ,CRIME, THE DARK SIDE (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253095.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BYzhlZDc0NzMtYTVhOC00MGZjLWJhN2YtYjgyNTEwNzU4M2YwXkEyXkFqcGdeQXVyMTIzNjIwNTI5._V1_.jpg" ,CRIMINALS (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375674.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8iMWXkxP4L4YaHbFyKXlgtNSdRo.jpg" ,DAAL BAATI CHURMA (CHACCHARI) (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369523.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://www.196flavors.com/wp-content/uploads/2013/10/dal-bhat-Nepal.jpg" ,DAL BHAT (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211434.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2ILhxeFrepgC1DEldiz4egxS8px.jpg" ,DAMAL (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/316030.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/h8amchpxUAaPE7E3ocWLOEPFTjf.jpg" ,DARK CHOCOLATE (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211463.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BMDZlNmE0OWEtNzMxYi00MTc2LWE2YjEtYzEwZDdhMGMwNzA5XkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_FMjpg_UX1000_.jpg" ,DASHAMI (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253097.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/m6PGmwHN8QEkl6OTMj0Ng1TGrNh.jpg" ,DASH MASH DASH DINER GALPO (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253098.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zKm5vr3Mvr4bdrX61zLc5nrBOAJ.jpg" ,DATTA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370908.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zrSaOfjOpecghoSvAO1nEuyyIdG.jpg" ,DAWSHOM AWBOTAAR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372137.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1lCqsNGxArlCgnOSzfoVX8tOIiE.jpg" ,DEBI (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253099.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/b3gjGt86lFKFyRUxX3TMO7EpQes.jpg" ,DEKH KEMON LAGE (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253100.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4rCifwLx0Gvqhk61se3ywe2bi42.jpg" ,DESHA: THE LEADER (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211406.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://i2.cinestaan.com/image-bank/1500-1500/175001-176000/175075.jpg" ,DETECTIVE (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211447.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mMvXKD9qMcryqzx2No923KASvJQ.jpg" ,DEVI (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211464.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ouLvE4abdkSy3vMtxO80yuPeT1D.jpg" ,DHANANJAY (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211480.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://upload.wikimedia.org/wikipedia/en/d/d2/Dhat_Teri_Ki_Teaser_Poster.jpeg" ,DHAT TERI KI (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211413.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://i.ibb.co/g7H6b17/E6nQddn.jpg" ,DHUSHOR KUASHA (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211403.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tW8cRfXcKsog3nGjbVMLEaujLbF.jpg" ,DILKHUSH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312217.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kGvq537CQbqYBw0hAJX3TNsWZbd.jpg" ,DIN - THE DAY (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372999.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BNTljY2Y0NzQtY2ZmOS00ZjQzLThkODUtZWVmYTg5NmM0NmE3XkEyXkFqcGdeQXVyODAzNDQ5MDg@._V1_.jpg" ,DITIO KOISHOR (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211400.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vUvybeq2TZthXD6w8oRDwJ0sWln.jpg" ,DOCTOR BAKSHI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374440.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gDgHsH9CowwTcsH31Vbe6Ef0DTv.jpg" ,DOOB (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211407.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bl458v3cVcj6KNu7QhDkQB5sCRj.jpg" ,DRACULA SIR (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211425.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/f7LhVDyG2mTVjxOMjaVuoN2bUK3.jpg" ,DRISHTIKONE (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253104.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sWMOrMW5lRpMsr5QaypYFLp9jsK.jpg" ,DUGGA (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211441.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/PzzoshxV1PjjBmwHcNadUd8HH5.jpg" ,DUI DINER DUNIYA (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/284334.mp4
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,DUI PEITHIBI (2010)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253105.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7JOCaF50Bt266UviLLTsBDfHKQ6.jpg" ,DURGESHGORER GUPTODHON (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370650.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1cxnc8bZ7GCIRw6OzYWvv8JqqwJ.jpg" ,DWITIYO PURUSH (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211481.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://tvwish.com/img/program/481688.jfif" ,EBHABEO PHIRE ASHA JAY (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253106.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,EGARO THE ELEVEN (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253107.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lJKZXlBWFexPuvHSO4svMBaCSY1.jpg" ,EI MUHURTE (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/251767.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qzk3FT8x1n3miBbp6h90ghLcGIm.jpg" ,EKLA AKASH (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211445.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://i.ytimg.com/vi/-LR1TvIkIhE/mqdefault.jpg" ,EKTU PORE ROD UTHBE (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253108.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nbNFOJvVNQvhPd1Y5fxxRbSOrse.jpg" ,ELAR CHAR ADHYAY (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253109.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/english-vs-english-et00050715-24-03-2017-15-40-53.jpg" ,ENGLISH VS ENGLISH (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253110.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zrjEgAxl9GHLGvlvilUt5XDHxtg.jpg" ,FATAFATI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369617.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3eHuoExFwYlwzoCeTfs3MMO6u9w.jpg" ,FEMALE 4 (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378791.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/Pb3Hgof3AqpAv5CyQIV8JuX2DZ.jpg" ,FLAT NO 609 (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253112.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BYTgzYWNkNTEtMjFmNy00NTcyLTk4NzktOTVjNjJhNmZlMTMzXkEyXkFqcGdeQXVyOTE1NzI0NDg@._V1_.jpg" ,FLOOR NO. 7 (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/250827.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/64KRR92afJpvSMUchAZegflxaZg.jpg" ,FLYOVER (2021)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363400.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://i.ibb.co/2N6v6hz/Friday.jpg" ,FRIDAY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/314166.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/b2LRgzTVWh4pBmz26MEnSl5VOvv.jpg" ,GANESH TALKIES (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211451.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,GARDEN GAME (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253114.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kzdrZzfSWfsoWKaUQ84QgIngFAi.jpg" ,GHARE & BAIRE (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253115.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pLD0plMIy455OQYICoRg2QbuyVy.jpg" ,GIRLFRIEND (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253116.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7HduXPDlvsi6l4Gu6Nror8AxW02.jpg" ,GOHIN HRIDOY (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363401.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pEEvzPFDJCPrYzGvDwRjRb3mPYL.jpg" ,GOLPO HOLEO SHOTTI (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253118.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://www.indiantvinfo.com/media/2023/02/Googly-Movie-WTP-Colors-Bangla.jpg" ,GOOGLY (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312628.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/txfHZAKr7kdY1MZFktJPg17RHeP.jpg" ,GOROSTHANE SABDHAN (2010)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211459.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Goyenda_Tatar.jpg/220px-Goyenda_Tatar.jpg" ,GOYENDA TATAR (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211430.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/iCkWqP22F4dklTrPm1MLjYQifh1.jpg" ,GOYNAR BAKSHO (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253121.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,GUHA MANAB (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253122.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jsIqF2XGELSxsJpImeS4Cj3a8tT.jpg" ,GUMNAAMI (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253123.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1UUljq86NVkkBqbl6lpKMJnQVhL.jpg" ,GUTI MALHAR ER ATITHI (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211496.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ovmIrYJoZihBXc0gUB2qNW1iiZb.jpg" ,HAAMI 2 (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/307995.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/384JOAAR3WB20MryVuJW5rlOjvu.jpg" ,HANUMAN DOT COM (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253124.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1Pamy2zo6uouI75uIfzEJk4Gk7Y.jpg" ,HARIPADA BANDWALA (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253125.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ycnKYxmXVX8JlxDo2keE1EWXgNr.jpg" ,HARIPADA HARIBOL (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253126.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHthIIE54GzNVOcfLBNinOtCpuf.jpg" ,HATYAPURI (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345539.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nJlJies7zuG9Y0cyMeqLHV9e1Zs.jpg" ,HELLO MEMSAHEB (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211454.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://pbs.twimg.com/media/EeUO5pRUYAYrIpI.jpg" ,HIGH JINN (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211452.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1U0y81kYJkXj5leKrjDN5HY1wjt.jpg" ,HIGHWAY (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253127.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/inVaWmQq1ItUOiMg6v2MtEC0d5l.jpg" ,HONEYMOON (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253128.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/d5hDqoaGcvQaBf44ncsw1jIEg5S.jpg" ,HOYTO MANUSH NOY (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253129.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2U4MwgNi3LAA1MZv7hHOCize25D.jpg" ,HULLOR (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211422.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xujDlJw0vOBRcJcmB8p0Cz1AIim.jpg" ,INCOMPLETE (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253131.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/iMZUAqVOwZITpXCR6ytPFZSXj3k.jpg" ,IN SPRING BREEZE (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253111.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1ui7ciB0ztK1egkMhiZTzEXfE10.jpg" ,JAANBAAZ (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211391.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/msD55TDIU0O2xMPsRW3lJag2DYt.jpg" ,JAANI DYAKHA HAWBE (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253133.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ckbt1I1ut29CWSMGMBkdPPhFlzg.jpg" ,JAMAI BADAL (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211490.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2vZ8nvgyvLTpZ7oEKpdLVV9dAmo.jpg" ,JAN-E-MAN (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253134.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ooyAqPOKLV9wLIIBOwCvK3tR6Ai.jpg" ,JANOWAR (2021)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211393.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,JAWKER DHAN (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211494.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://static.toiimg.com/thumb/msid-61256308,width-219,height-317,imgsize-35265/61256308.jpg" ,JENANA (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211442.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://www.rangoliayurved.com/wp-content/uploads/2020/10/jeevan-sudha-normal-bottle.jpg" ,JIBANSUDHA (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211432.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lDMNJtAbFallw5Nj7H5LMNZgQZt.jpg" ,JODI EKDIN (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253135.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5CoFX2BUGJo16qpORzgSufQarK6.jpg" ,JODI LOVE DILE NA PRANE (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211485.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/upXcDvPLSvnL9DP55VlnCLnMnxk.jpg" ,JOGAJOG (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344859.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/icCn6JvHEp3KjTt9ApPAyUkhKVS.jpg" ,K: SECRET EYE (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211497.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pjdDgurSFRMdBrL16AwmTZG1vdU.jpg" ,KABERI ANTARDHAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/324142.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rXmN7wnJNwjFFrKC6uJ6NMYbs7X.jpg" ,KACHER MANUSH (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312679.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/fuuKeKtEg5gcQMtIoHMrFBotkYN.jpg" ,KADAMBARI (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253136.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,KADAMBARI AAJO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372655.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/a27SOp8DUL2Wc3aSPWK04ncnV7e.jpg" ,KAGOJ (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371465.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jpJwHvGSZgF7m9a8f1I3uOt8gV9.jpg" ,KANAMACHI (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211455.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zsYW9v7MD6d7ztmoLgoxUBa90gJ.jpg" ,KARMA (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211428.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/22o4NjeRQJCWucqcd3ovz04tUee.jpg" ,KATHBIRALI (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211477.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lJj6CgFjBTSU5EJDqSrZ5guMzJ4.jpg" ,KEDARA (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211476.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pKBCNAho99F78z1cyEDxFBmXf4O.jpg" ,KELLAFATE (2010)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211465.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wfKBYvCbERP1FMYIzvJYUuJhXcH.jpg" ,KELOR KIRTI (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211461.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mdw9upt7doO3AwYFBvdZ132hZma.jpg" ,KHELA JAWKHON (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/311562.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5MLEv6dxS6NerATyJ1Yn1lqTT5O.jpg" ,KHOKA 420 (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253141.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yHwH9a46oEsAYjLNGQ2WQQj3swv.jpg" ,KHOKABABU (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253142.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BNzVlMDFhNDQtNGZiZS00NzZmLWFlMmEtOGU5NWQ5MmZjZmMwXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg" ,KIA AND COSMOS (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253143.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://i.ytimg.com/vi/wm5LvtEicoY/maxresdefault.jpg" ,KICHU NA BOLA KOTHA (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253144.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,KICHU NA BOLA KOTHA (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253145.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uUzxXpWCNwFlUkcYcJM6ZPzbR5X.jpg" ,KIDNAP (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253146.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lu1ewXqLizO0VTLQFexld6lho8R.jpg" ,KILL HIM (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371586.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/aXjtCPBTWDTbZs2UVh4Iui9To9M.jpg" ,KIRTAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375060.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/k05Xg8ib12GfxF29EYToakG4Sgc.jpg" ,KISHMISH (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/280529.mp4
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ujc9otpkB4e1BRfo9G32a1paW86.jpg" ,KOMOLA ROCKET (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253147.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ckTbidgctoi2dSTjuNDjaZ0KS4z.jpg" ,KONTTHO (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253148.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5Da76UvImtbAcIFI6Ea3vmJfgcV.jpg" ,KOSHTONEER (2021)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211417.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ukCHQ5g0gK5ESk0J8S0nduk5Vc9.jpg" ,KOTHAMRITO (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373476.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,KRISHNOBIBOR THE BLACK HOLE (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253149.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/hVvbuJjOJTtpAwQR0cRJUXVVDJ3.jpg" ,KULER ACHAAR (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/273874.mp4
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6ph7z1aq8FT4yVjdSRmR6he0KCr.jpg" ,LAST DEFENDERS OF MONOGAMY (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377304.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/byha5w0oD6ofu2bmgOMBCtbtBpX.jpg" ,LE CHAKKA (2010)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211456.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nX6rPWRPeFV0uOhwDsqLKG79Of2.jpg" ,LE HALUA LE (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253151.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,LIFE IN PARK STREET (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253152.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://static.toiimg.com/thumb/msid-74116238,imgsize-370442,width-1070,height-580,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/74116238.jpg" ,LIPLOCK (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253153.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yJMEzrZqTabA9POehHqtqhSotQh.jpg" ,LOCAL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374175.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,LOJJA (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253154.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oLPSqFVXQBe7Jq2l8fWLhLqMrzh.jpg" ,LOVE EXPRESS (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253155.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,LOVE HATE DHOKA (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211488.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ekTsloEhJEhyTiVVL06P7JjiLGu.jpg" ,LOVE MARRIAGE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369490.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/a3uY8a4uhRH6qk3o6IIOXzzxz4h.jpg" ,LOVERIA (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253157.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Love_Story_Poster.jpeg/220px-Love_Story_Poster.jpeg" ,LOVE STORY (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345228.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zOZRcFSfmkbuQAH3iZVdLjohkxd.jpg" ,LUDO (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211458.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/dcPSm1rGEFdiEc7DaKz0t5kb66b.jpg" ,MACHETE (2010)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/210917.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3VD0eWATSiSW02eeZPEK9EmYgsz.jpg" ,MADE IN BANGLADESH (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211397.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZt4G42sJ1g7yPNqXwsmy5-sL9vd35pVO3xLbOLqJAckXd12Hu7Z_ksRQBQ1OolbQJdw&usqp=CAU" ,MADLY BANGALI (2009)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253159.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,MAGIC (2021)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344777.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/hbRFBUKaDNQrlMQCSaxsfBZbcet.jpg" ,MAINKAR CHIPAY (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211440.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,MANI.KANCHANA(2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253161.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/z8RfanoGi2NHy5hkZs7DOyNxupW.jpg" ,MANOJDER ADBHUT BARI (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211478.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://1filmyworld.nl/wp-content/uploads/Maya.png" ,MAYA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377372.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://static.toiimg.com/thumb/msid-98205661,width-219,height-317,imgsize-44568/98205661.jpg" ,MAYAR JONJAL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/341071.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://www.jalshamoviez.bio/files/images/Maya_The_Lost_Mother_(2023)_Bengali_Movie.jpg" ,MAYA THE LOST MOTHER (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344508.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/IR6LQgrXzCIhPTn4rKw1cViY0P.jpg" ,MAYURAKSHI (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253162.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/dL8Z0ZmC7PPx0fNSbZwUYWDjy20.jpg" ,MEGH BRISTIR MOLAT (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253163.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7FdCdeIfDhccdc2ZEbUppBYkXeF.jpg" ,MISHAWR RAWHOSHYO (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253164.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cfZlcU5AQe5EVTlLnLdH8CIaNTv.jpg" ,MISS CALL (2021)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363011.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/IgTo09uJnN4WEA7pBOCEzgMKcw.jpg" ,MISSION EXTREME 2: BLACK WAR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/342017.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://img.indiaforums.com/media/640x0/53/6007-mistake-bengali-movie.jpg" ,MISTAKE (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253165.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jL3zN9w0lbjwWHDU0kfiqD2sXRe.jpg" ,MITIN MASHI (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344485.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qSO0CuP3HNjUkmzK4Ov7grpsZgl.jpg" ,MITTHYE PREMER GAAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375019.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://images-na.ssl-images-amazon.com/images/I/710Os6anBqL._RI_.jpg" ,MONE PRANE (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211411.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/hiapHyVZI56rHEtDfav809EtRPR.jpg" ,MON MANE NA (2008)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253166.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pZbEIREKqNu1CmNOkXDTPr8K5q1.jpg" ,MOUNTAINS OF THE MOON (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253087.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8OSQodKHx1Fdsn9hdZgPPqntlJF.jpg" ,NABAB (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253167.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://1.bp.blogspot.com/-HFUXs8tecsw/X97QMeFangI/AAAAAAAAATQ/n2wT6BV_zvoGDq8iAPSHaeXDjQOgHbDkgCLcBGAsYHQ/s319/220px-Nabab_LLB_official_poster-01.jpeg" ,NABAB LLB: CHAPTER 1 (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211395.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://msmoviesbd.com/wp-content/uploads/2021/01/1606674197_6.jpg" ,NABAB LLB: CHAPTER 2 (2021)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211390.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBlSmcB19pgmlQVDzdlnZhNn3ZkeeN2ZmyDg3Kwg32_SALTWV8" ,NAGARKIRTAN (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211457.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BNTQ2ODIwZmMtOTc2ZC00ZjAxLTkzZmYtNTJmOGY1NmEwODEwXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_.jpg" ,NAGORDOLA (2004)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253169.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BYTc4ZTMyM2YtMjEwZi00MjE2LTg0MTItMDExYmI2ZmNmM2YyXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_.jpg" ,NA HANAYTTE (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253170.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://upload.wikimedia.org/wikipedia/en/2/2b/Namte_Namte_Bengali_Movie_Poster.jpg" ,NAMTE NAMTE (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211449.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://images-na.ssl-images-amazon.com/images/I/71dxY4U3A1L._RI_.jpg" ,NEEL LOHIT (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253171.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3slHfNMMLwN0y7zL2g6Q5lYIgzY.jpg" ,NETWORK (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253172.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/33zowNx88C05O84Rw2PJhmRmxeT.jpg" ,NIKOSH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/362893.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://i.extraimage.info/pix/2020/05/01/95217033_2515467998553464_200385813773549568_o7bd80.jpg" ,NILANJANA (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211475.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,NIRBHOYA (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211419.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gHZ9Kk8iLiDC4F3Q1BvDMBP3hX5.jpg" ,NIRONTOR (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211467.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/TVEJPD5lnu7kUB04VS7bFUiVVV.jpg" ,NISHWAS (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/284404.mp4
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8b629Jo3Q5t385oS5kvr8j9Yx2G.jpg" ,NOLOK (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211401.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xebG4lhLu3R6yAePRVrXrYA4lWD.jpg" ,NOUKADUBI (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253174.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/online-habe-et00397002-1714977903.jpg" ,ONLINE HABE (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379276.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7pU1XQHEtGYvQspNVIOFgvIMxaH.jpg" ,OPERATION SUNDARBAN (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/362891.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ey2ukG8JNi8fsZy1lyhedRyVsUL.jpg" ,ORU MURAI VANTHU PARTHAYA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363425.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,OSOMOY (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374577.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,PAATHSHALA (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211414.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rzsPBBalBVMiQL9VpVDWcP5Y73f.jpg" ,PAGLU 2 (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253176.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1WJl1ZBg51hBx5UA39vrC39F7Ft.jpg" ,PARBONA AMI CHARTEY TOKEY (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253177.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BMjUzYzkwMmQtYTM0MS00ZTdkLWI0OTYtOTcwYWJjZjU3ODAxXkEyXkFqcGdeQXVyMTU4OTc2NjMx._V1_.jpg" ,PARIAH (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379439.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bjpIUyzWVYvaCnTGs087VOOLUYf.jpg" ,PASHAN (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211410.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bkbklQtXeKDxyRoOf0EdVyEf6Yq.jpg" ,PASSWORD (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211412.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/Gzi7AFRJ1lmq6H0J6DihXRHJ2j.jpg" ,PEYARAR SUBASH (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/376123.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BYjM5MWI2NTEtNzliMy00MDZmLThmM2YtMjQzNGFhYzcxODYyXkEyXkFqcGdeQXVyMzk2ODUwNjk@._V1_.jpg" ,PIPRABIDYA (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211404.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/AeG4OKaGTP3Mq76wfHKfyiYDvEJ.jpg" ,PIYA RE (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211482.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://i.ibb.co/8MhHLDd/poloke-poloke-tomake-chai-bappi-mahi-bangla-movie-11.webp" ,POLOKE POLOKE TOMAKE CHAI (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211396.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6yCCMXpr1gkIIZkdOqJ1f9pQYNs.jpg" ,PRADHAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380310.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zbhU0wMcTn0rB45v2XLo8KX8C4H.jpg" ,PREMER KAHINI (2008)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253180.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pz3tkw4yHengDsxH1DTfrxwBSCx.jpg" ,PREMI O PREMI (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211415.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6ARSaCscLG4WruvEG1yislPq2HJ.jpg" ,PREM KI BUJHINI (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211473.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BZjFkMDUxYTktM2MxNS00MTc2LWExMGEtODgzYjZjNzE4MTI0XkEyXkFqcGdeQXVyNTgzMTg5Ng@@._V1_QL75_UY281_CR112,0,190,281_.jpg" ,PRIME TIME (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253181.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bbVlVUS5KAO0XLKhSr5oNbbRXbG.jpg" ,PRIYOTOMA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369910.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1lWxvExJNnRbqMNY2xsU6c2IzXv.jpg" ,PROLOY (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253182.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BYWRlZjFhM2ItYzk5Ni00OTdlLWFlNzQtZWMxYTJiZGQ2ODUyXkEyXkFqcGdeQXVyNzgzNDAzMTA@._V1_.jpg" ,PROTIBIMBO (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253183.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oAflhPsTsAXIEi9xJrtXW3rQiOW.jpg" ,PUFF DADDY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371286.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/d7csgacuR6kvgSws55knXXW7IqF.jpg" ,PUPA (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253184.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pvetSN4WvqsFjjIlmyFkD9KkHak.jpg" ,RAAVAN (2022)*
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/317799.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sEdikFjPDnKqNnxQt6hYVvLpMU8.jpg" ,RAINBOW JELLY (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253185.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rffRoSsf0v7GEM9f5mvuoiMdyO9.jpg" ,RAJKUMAR (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378739.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3XvwvW0qYsYZbCiWGKk8d7sAcQY.jpg" ,RAJLOKHI O SRIKANTO (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253186.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4OTpfthTev7FvCyxp9K5k3RyWfn.jpg" ,RAKTABEEJ (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375190.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uIv65Qmu4rGG7HH2xuwkcHPnRmj.jpg" ,RANG MILANTI (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211448.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ld0XmIdvHFuq4bGJIrSsHzAlLKk.jpg" ,RAY & LIZ (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211489.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jOVicCcbCac7f7i8vMsW5hH6vqV.jpg" ,RED OLEANDERS RAKTOKAROBI (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253187.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uh1650bVShbicmYFC9my94jKykj.jpg" ,ROBIBAAR (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211479.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BYzE2ZWYyZmYtZjc4ZS00YjljLTk1ZjktYjQ5NjNhMTk2MmI2XkEyXkFqcGdeQXVyNDI4NTYwNjk@._V1_.jpg" ,ROCKY (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253188.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/phwVQlCqSb4JkA1FgGAO4l0mXUF.jpg" ,ROKTO (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211402.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="data:image/jpeg;base64,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" ,ROULETTE (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211439.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BMTk5ZjE2ZDctNzIzYy00ZDQxLWJhZmYtYTMyYzA1NmEzYjUxXkEyXkFqcGdeQXVyNzgzNDAzMTA@._V1_FMjpg_UX1000_.jpg" ,RUPANTAR (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253190.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://www.mp4moviez.com.vc/cover/saatao-(memories-of-gloomy-monsoons)-2023-bengali-movie.jpg" ,SAATAO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371939.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3CBU3fZUx8bz0twmSlkLroRLfje.jpg" ,SAGARDWIPEY JAWKER DHAN (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369677.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BZTM1MDU5MjItNGE3Yy00YThkLWI5ZjMtMmY5ZGRlODM2Yjg1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjY1ODk5ODA@._V1_FMjpg_UX1000_.jpg" ,SAHAJ PAATHER GAPPO (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253191.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/npNQf0AuEIGcWqyp0ETnVllUFgM.jpg" ,SAHOSH (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/251766.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/fwfaspljFjJk6PtE929g0JyRXNq.jpg" ,SANJHBATI (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211443.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9F19rT5hXzs3qiyTmfHD38ufrTe.jpg" ,SATHI (2002)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253192.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BNDc1MjA3NmQtODUxZi00MWQ4LTlkNjUtZjY1MjY0YThjMWUxXkEyXkFqcGdeQXVyMTEyMTc3OTE1._V1_FMjpg_UX1000_.jpg" ,SEND.ME.NUDES (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253194.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8w0ZYG67riuKOMfJttpBkDRXdRv.jpg" ,SHANTILAL O PROJAPOTI ROHOSHYO (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211472.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xP36tNULzotHW1qYxMvUAmR6XPp.jpg" ,SHEDIN DEKHA HOYECHILO (2010)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253195.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cY4XRQfsHqeVcT5eO0YZLGrbWz5.jpg" ,SHIBPUR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371194.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6PchxWbMFG6NzFwCcE0EYnxyYYc.jpg" ,SHIKARI (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211420.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2q6jE0cWJQg2s1tisJnLcOvF3J8.jpg" ,SHOHORER USHNOTOMO DIN E (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370100.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1xPL1knDyFFKuNBIaVt1JuCjksq.jpg" ,SHORORIPU 2: JOTUGRIHO (2021)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/268716.mp4
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/250wdKKTBFbYSInRw2pP6pNgsXd.jpg" ,SHRI SWAPANKUMARER BADAMI HYENAR KOBOLE (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377321.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/hOCZfYpl6XhyVddsB1m4VcMNWlR.jpg" ,SHUDHU TOMARI JONYO (2015)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253196.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5LEarQ23nKj8vHcv4okgYqO9Kut.jpg" ,SHUKLOPOKKHO (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/266783.mp4
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/75Obg8KCYCnZaVqXownN9JjbyW8.jpg" ,SINCERELY YOURS, DHAKA (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253197.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ce9UNwszlUO2HpeaUAlyIMHj2I.jpg" ,SOHORER UPOKOTHA (2021)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/264168.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BM2M3MDQwYjUtYzQ5Zi00OTBmLWEyNzAtYzAyMDdmOTdmZDJhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" ,SOUMENBOT DRISHTIKONE (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253045.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://static.toiimg.com/photo/61257885.cms?resizemode=4" ,SOUMENBOT HEMANTA (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253198.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BZjI5YjAzYjItN2UxMy00ODE2LWJlMzgtNTc1ZDRkMWU1YzNjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" ,SOUMENBOT OBHISHOPTO NIGHTY (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253199.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BN2NjZTNhMzktY2UzOC00MDE2LWE0YzMtYjVmODNiY2E5ODk5XkEyXkFqcGdeQXVyODk1NjE0OTk@._V1_.jpg" ,SOUMENBOT SULTAN THE SAVIOUR (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253046.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bJFFQPGd4c7IFwGzLBYNfzwgbgI.jpg" ,SRABONER DHARA (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253200.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/arsd4BZ3ZvwAzdVPYmL5sehxwqF.jpg" ,STHANIYA SAMBAAD (2009)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253201.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BOWIzZThiZTEtMjAyNi00MmMzLWE2YTQtMzg0ZmQ1MjI5MTg5XkEyXkFqcGdeQXVyNzYzNDA4OTg@._V1_FMjpg_UX1000_.jpg" ,SUFIYANA (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253202.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xIA1H1kWyxjvf6t7qpoeHwoIe2E.jpg" ,SUPER HERO (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211416.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yYh0KQk4GZ34iLSldVal2lGXMtL.jpg" ,SURONGO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370176.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oOizqhhPUX6Gl6Hcs0okZhAPUIH.jpg" ,SWAPNAJAAL (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253203.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vSIAb2xHBQ8xOLZqm2ltDrCqUpn.jpg" ,SWITZERLAND (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211491.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kqyXe5OL93MOw0xKS52PPtDzMX5.jpg" ,TAAN (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253204.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/aYLig8F0H6TkmNKVZLt2pWYDosK.jpg" ,TAROKAR MRITYU (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372654.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://play-lh.googleusercontent.com/RRF3be2tgnDj649EUcRWap8XkOIVO5yTqWsSvxBC1kPJIp8AQDomkMNOPjZeKw6qyI2r" ,TEENKAHON (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253206.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/AswMnBevN0MYxAFqvSX3CFg5U9f.jpg" ,TEEN PATTI (2010)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211429.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yjNqF4hsPat4PhUhPojvdVbMRd.jpg" ,TEKO (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253207.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xSdbLxis0mny9nHddFuFIBi6jLJ.jpg" ,TENIDA AND COMPANY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370490.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jlYk9O5nFKeq65kWNWCI5F3yiyi.jpg" ,THAI CURRY (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369266.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5zX4ZuDxPx1mGPuX4fPdBf09eOL.jpg" ,THE BONG CONNECTION (2006)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253209.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jXy1eRXfarVAcxp7wo1Hi5Lfrxy.jpg" ,THE CABIN GUARD (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253208.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/WYVLfZ7nekO1Y0KYQdU2Ypbiia.jpg" ,THE CHICK FLICK (2007)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253088.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gdznEf5HdGoMHS73K12410b3hP.jpg" ,THE EKEN RUDDHASWAS RAJASTHAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/356454.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vzjth6L7hhUvmJsJDn3VB8os6Ob.jpg" ,THE FRUIT OF EVIL (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/280528.mp4
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2N8WtaHf8wwrUxa8TM3WgnqIzAf.jpg" ,THE LAND OF CARDS (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253211.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzkjzIHQCt4EuDvtdLQN6NJ8MX8H1mAV5t0Hjc7yDSpN_ox4g1ivzFvgs7gy2BXLgb6w&usqp=CAU" ,THE LOST TRIBE (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253212.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ybAb7kHEP6xsWWGo68ei6ycfVKU.jpg" ,THE NETWORK (2016)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211468.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/omhvjIHsI2M4H48hbZM5EVHif6X.jpg" ,THE REST IS PERSONAL... (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253064.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://bollyholic.click/wp-content/uploads/2020/06/photo_2020-06-24_02-39-39.jpg" ,THIK DUPURE (MID DAY) (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211462.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1rCyZbhXPN50q5VjU7TPQmhfgA.jpg" ,TIRANDAJ SHABOR (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/269982.mp4
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://pbs.twimg.com/media/EqEBjXmVoAA35z7.jpg" ,TOAI (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211423.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uiAFckxgbCeKb1E4Thw2CMiSoIc.jpg" ,TO BE CONTINUED (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253216.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://alchetron.com/cdn/tobuo-bhalobashi-a97435d6-e664-4592-b5eb-1aa1d99c130-resize-750.jpg" ,TOBOU BHALOBASHI (2013)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211398.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rpe2Y1Xc8nkF5JdstNJfAhNqojY.jpg" ,TOMAKE CHAI (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253217.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vkqUoqEJIOIslL54JycSSjz7QuL.jpg" ,TONOYA (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/263479.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/e2QJZWn5mgPjBvluEAGSPrIn1W6.jpg" ,TROLL (2021)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211392.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3RfoIyzrzGOmWj8Se5ZI5jfcHbQ.jpg" ,TUI AMAR HERO (2020)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211487.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BMTU3MjM0NWItYmJiZS00MzdjLTg2ODYtNDhmZDhhMjZjOWJjXkEyXkFqcGdeQXVyODY4NDY5NDU@._V1_.jpg" ,TUI SUDHU AMAR (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211436.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BZGQ4MmY1NzgtNjA0Ni00ZDVjLTg2NDUtZjU0NGVmMmE5ODk1XkEyXkFqcGdeQXVyMzc4NjYyMTY@._V1_.jpg" ,TUSKI (2018)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211446.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/i6cugcc0jIfRSlvEAxx2M866p8e.jpg" ,UNICORN (2021)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211492.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vNPOJrx2pEU6cgLWC5JvMIfRcIv.jpg" ,UNISH/BISH (2019)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253218.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lOZbtiQSl91WgDVbsfM1oDM8zJZ.jpg" ,UNISH20 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312071.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" ,UNO SIR (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375385.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/71qZQ1hDsuHj7BHvo1us1O2W4bI.jpg" ,URO CHITHI (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253219.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://m.media-amazon.com/images/M/MV5BZTJkMGJkMWYtNzE3OS00NjRhLWI5MDctMDIyNDAyMDQ0NWRhXkEyXkFqcGdeQXVyNjk3MjI4NDg@._V1_.jpg" ,UTSHOBER PORE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253220.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pm3seFCzhAUI5lQlqgwmrKPZdZq.jpg" ,YETI OBHIJAAN (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/211466.mkv
#EXTINF:-1 group-title="BANGALI MOVIES" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/g2Q0CPwL1wnh45qReLK1anqpKnM.jpg" ,YODDHA (2014)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/253221.mkv
#EXTINF:-1 group-title="BANGALI DUBBED" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ia4S5v5V4iwJSeFlXcSeoL9twgR.jpg" ,LOKKHI CHHELE (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370669.mkv

#EXTINF:-1 group-title="Warning ⚠️" , You're Streaming IPTV BD LIVE TV PREMIUM 
https://drive.usercontent.google.com/download?id=13qm0XOuDdBe-VmiDZ5Sd9uTTSJrzcGbB&export=download
# iptvbdlivetvpremiumsports.m3u
#EXTM3U
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="https://static.epg.best/in/Zoom.in.png" tvg-id="zoom.in" ,IN | Zoom TV
http://xtv.ooo:8080/810523/322522/66190
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="https://static.epg.best/in/9XM.in.png" tvg-id="9xm.in" ,IN | 9xm
http://xtv.ooo:8080/810523/322522/66192
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="https://static.epg.best/in/B4UMusic.in.png" ,IN | B4u Music
http://xtv.ooo:8080/810523/322522/66203
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="https://static.epg.best/in/9XJalwa.in.png" tvg-id="9xjalwa.in" ,IN | 9x Jalwa
http://xtv.ooo:8080/810523/322522/66226
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="https://static.epg.best/in/MTVBeats.in.png" ,IN | MTV BEAT
http://xtv.ooo:8080/810523/322522/66273
#EXTINF:-1 group-title="INDIAN | MUSIC" ,IN | YRF MUSIC
http://xtv.ooo:8080/810523/322522/383530
#EXTINF:-1 group-title="INDIAN | MUSIC" ,IN | SHOWBOX MUSIC
http://xtv.ooo:8080/810523/322522/383529
#EXTINF:-1 group-title="INDIAN | MUSIC" ,ind-pun: Pittara TV
http://xtv.ooo:8080/810523/322522/66285
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="https://static.epg.best/in/9XTashan.in.png" ,IN | 9x Tashan
http://xtv.ooo:8080/810523/322522/66289
#EXTINF:-1 group-title="INDIAN | MUSIC" ,IN: Mastii
http://xtv.ooo:8080/810523/322522/112988
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-id="housefullmovies.in" ,IN: UTV Bindass
http://xtv.ooo:8080/810523/322522/112993
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://image3.mouthshut.com/images/imagesp/925599237s.png" ,IND-Punjabi: PTC MUSIC
http://xtv.ooo:8080/810523/322522/153373
#EXTINF:-1 group-title="INDIAN | MUSIC" ,MUSIC INDIA
http://xtv.ooo:8080/810523/322522/190028
#EXTINF:-1 group-title="INDIAN | MUSIC" ,IN: Boogle Bollywood
http://xtv.ooo:8080/810523/322522/206045
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="https://upload.wikimedia.org/wikipedia/fr/thumb/1/17/MTV_Idol.svg/1200px-MTV_Idol.svg.png" ,IND: MTV HD +
http://xtv.ooo:8080/810523/322522/206049
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/MTV_2021_%28brand_version%29.svg/1200px-MTV_2021_%28brand_version%29.svg.png" ,IND: MTV India
http://xtv.ooo:8080/810523/322522/206054
#EXTINF:-1 group-title="INDIAN | MUSIC" ,IND:PB: Balle Balle
http://xtv.ooo:8080/810523/322522/219495
#EXTINF:-1 group-title="INDIAN | MUSIC" ,IND:PB: Wah Punjabi
http://xtv.ooo:8080/810523/322522/219496
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Zing_2011_logo.png/1200px-Zing_2011_logo.png" ,IND: ZING
http://xtv.ooo:8080/810523/322522/219497
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 18
http://xtv.ooo:8080/810523/322522/362865
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 19
http://xtv.ooo:8080/810523/322522/362866
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 20
http://xtv.ooo:8080/810523/322522/362867
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 21
http://xtv.ooo:8080/810523/322522/362868
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,IN: 24/7 MUSIC 01
http://xtv.ooo:8080/810523/322522/219498
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,IN: 24/7 MUSIC 02
http://xtv.ooo:8080/810523/322522/270503
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,IN: 24/7 MUSIC 03
http://xtv.ooo:8080/810523/322522/270504
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 04
http://xtv.ooo:8080/810523/322522/270505
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 05
http://xtv.ooo:8080/810523/322522/270506
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 06
http://xtv.ooo:8080/810523/322522/270507
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 07
http://xtv.ooo:8080/810523/322522/270508
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 08
http://xtv.ooo:8080/810523/322522/270509
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 09
http://xtv.ooo:8080/810523/322522/270510
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 10
http://xtv.ooo:8080/810523/322522/270511
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 11
http://xtv.ooo:8080/810523/322522/270512
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 12
http://xtv.ooo:8080/810523/322522/270513
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 13
http://xtv.ooo:8080/810523/322522/270514
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 13
http://xtv.ooo:8080/810523/322522/270514
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 14
http://xtv.ooo:8080/810523/322522/270515
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 15
http://xtv.ooo:8080/810523/322522/270516
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 16
http://xtv.ooo:8080/810523/322522/270517
#EXTINF:-1 group-title="INDIAN | MUSIC" tvg-logo="http://logo.opplextv.com/logo/BOLLYWOODMUSIC247.png" ,24/7 MUSIC 17
http://xtv.ooo:8080/810523/322522/270518
#EXTM3U
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/2000px-Cartoon_Network_2010_logo.svg.png" tvg-id="cartoonnetworkhd.in" ,IN: Cartoon Network
http://xtv.ooo:8080/810523/322522/150478
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/8/89/POGO-logo.png" tvg-id="pogo.in" ,IN: Pogo
http://xtv.ooo:8080/810523/322522/150483
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/c/c5/Cartoon_Network_HD%2B_India_logo.png" ,IN: Cartoon Network HD+
http://xtv.ooo:8080/810523/322522/153154
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://static.epg.best/in/SonyYAY.in.png" ,IN | Sony yay
https://toffee.iptvbd.xyz/api/sony_yay.m3u8
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,IN: Hungama**
http://xtv.ooo:8080/810523/322522/150480
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://jiotvimages.cdn.jio.com/dare_images/images/Nick_Bangla.png" tvg-id="nick.in" ,IN: Nick Bangla
http://rolextv.asia/12345/54321/147595
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Nick_Jr._logo_2009.svg/2560px-Nick_Jr._logo_2009.svg.png" ,IND: Nick Junior
http://xtv.ooo:8080/810523/322522/153156
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2016_Discovery_Kids_logo.svg/220px-2016_Discovery_Kids_logo.svg.png" tvg-id="discoverykids.in" ,Discovery kids
http://xtv.ooo:8080/810523/322522/76723
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Disney_Junior.svg/1200px-Disney_Junior.svg.png" ,IN: Disney Junior
http://xtv.ooo:8080/810523/322522/153175
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,KIDS: Sonic bangla 
http://rolextv.asia/12345/54321/149127
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2014_Disney_Channel_logo.svg/1200px-2014_Disney_Channel_logo.svg.png" tvg-id="disneychannel.in" ,IN | DISNEY HD
http://xtv.ooo:8080/810523/322522/167551
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://upload.wikimedia.org/wikipedia/en/2/2b/Nickelodeon_Sonic_logo.png" ,IN: NICK SONIC Bangla 
http://rolextv.asia/12345/54321/149127
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://static.epg.best/in/NickHDPlus.in.png" tvg-id="sonyten3hd.in" ,NICK HD+ [FHD]
http://xtv.ooo:8080/810523/322522/76722
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="http://b1g.fun/logos2/kids_zone.jpg" ,PK | Kids Zone+ HD
http://xtv.ooo:8080/810523/322522/383066
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://static.wikia.nocookie.net/etv-gspn-bangla/images/f/f6/Rongeen_TV_logo_%282019-present%29.png/revision/latest?cb=20210423103847" , Rongeen Tv Bangladesh 
https://server.thelegitpro.in/rongeentv/rongeentv/tracks-v1a1/mono.m3u8
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://e7.pngegg.com/pngimages/990/187/png-clipart-motu-patlu-television-show-animated-film-nickelodeon-motu-patlu-television-food.png" ,24/7 MOTU PATLU 02
http://xtv.ooo:8080/810523/322522/311373
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://w7.pngwing.com/pngs/352/597/png-transparent-shiva-nickelodeon-sonic-cartoon-television-show-shiva-sports-equipment-fictional-character-pakdam-pakdai-thumbnail.png" ,24/7 SHIVA
http://xtv.ooo:8080/810523/322522/342074
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 CHUCHU TV 
http://xtv.ooo:8080/810523/322522/340807
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Baalveer_Returns_Title_Card.jpg/220px-Baalveer_Returns_Title_Card.jpg" ,24/7 Baal Veer 
http://xtv.ooo:8080/810523/322522/340809
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://m.media-amazon.com/images/M/MV5BNmFlODk2ZmEtMWE5MC00Nzg5LWE3ODMtMzViYTRhNjdjMjgzXkEyXkFqcGdeQXVyNjEyNjM1MjY@._V1_.jpg" ,24/7 Chacha Bhatija
http://xtv.ooo:8080/810523/322522/311774
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="http://logo.opplextv.com/logo/WowKidsAction.png" ,24/7 Wow Kids Action
http://xtv.ooo:8080/810523/322522/314753
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="http://logo.opplextv.com/logo/VirTheRobotBoy.png" ,24/7 Vir The Robot Boy
http://xtv.ooo:8080/810523/322522/314754
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,KIDS: PINK PANTHER 24/7
http://xtv.ooo:8080/810523/322522/301503
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,KIDS: CHU CHU TV 24/7
http://xtv.ooo:8080/810523/322522/301502
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,KIDS: Sonic 24/7
http://xtv.ooo:8080/810523/322522/301500
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,KIDS: MR BEAN (CARTOON) 24/7
http://xtv.ooo:8080/810523/322522/301501
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,KIDS: CoComelon TV 24/7
http://xtv.ooo:8080/810523/322522/301499
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 Kids: All Hail King Julien_ Exiled
http://xtv.ooo:8080/810523/322522/301504
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 Kids: Rick And Morty
http://xtv.ooo:8080/810523/322522/301505
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 Kids: Masha and the Bear
http://xtv.ooo:8080/810523/322522/301506
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 Kids: Little Baby Bum
http://xtv.ooo:8080/810523/322522/301507
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 Kids: The Boss Baby_ Back in Business
http://xtv.ooo:8080/810523/322522/301508
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 Kids: Peppa Pig
http://xtv.ooo:8080/810523/322522/301509
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 Kids: Blippi
http://xtv.ooo:8080/810523/322522/301510
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 Kids: Kids: Gabby_s Dollhouse
http://xtv.ooo:8080/810523/322522/301511
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,Oggy and the Cockroaches Hindi
http://xtv.ooo:8080/810523/322522/308282
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://upload.wikimedia.org/wikipedia/en/f/f9/Chhota_Bheem.jpg" ,24/7 Chhota Bheem
http://xtv.ooo:8080/810523/322522/315401
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://w7.pngwing.com/pngs/28/710/png-transparent-tom-and-jerry-tom-and-jerry-heroes-logo-fictional-character.png" ,24/7 Tom & Jerry
http://xtv.ooo:8080/810523/322522/329247
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://e7.pngegg.com/pngimages/578/87/png-clipart-scooby-doo-mystery-scooby-doo-velma-dinkley-youtube-scoobydoo-text-logo.png" ,24/7 Scooby-Doo
http://xtv.ooo:8080/810523/322522/329248
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 Booba
http://xtv.ooo:8080/810523/322522/340803
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 KIDS SONGS HINDI
http://xtv.ooo:8080/810523/322522/340802
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" ,24/7 BabyBus | Nursery Rhymes
http://xtv.ooo:8080/810523/322522/340804
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://co4kids.org/sites/default/files/Kids%20247%20CMYK%20%281%29.png" ,24/7 KIDS | MOV HINDI
http://xtv.ooo:8080/810523/322522/362998
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://co4kids.org/sites/default/files/Kids%20247%20CMYK%20%281%29.png" ,24/7 KIDS | MOVIES
http://xtv.ooo:8080/810523/322522/362999
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://co4kids.org/sites/default/files/Kids%20247%20CMYK%20%281%29.png" ,24/7 KIDS | MOVIES ENG 01
http://xtv.ooo:8080/810523/322522/363000
#EXTINF:-1 group-title="INDIAN | KIDS Cartoon" tvg-logo="https://co4kids.org/sites/default/files/Kids%20247%20CMYK%20%281%29.png" ,24/7 KID
http://xtv.ooo:8080/810523/322522/363001

#EXTM3U
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2" ,12-12-42 (1967)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306286.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oubHb1teqWP69qUJZbjHAEZvyJp.jpg" ,12/12/12 (2012)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306283.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rGQFVRXRFW5GX7lL3fEQhV9976K.jpg" ,12:21:21 (2017)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306373.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,A AA EE O O O - RAJA BABU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306828.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AADAT REMIX
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306620.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AADHA ISHQ - BAND BAAJA BAARAAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305932.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AAJA AAJA - BARSAAT (2005)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306712.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AAJA SONIYE - MUJHSE SHAADI KAROGI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306632.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AAJ MAUSAM BADA BEIMAAN HAI - LOAFER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306812.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AAJ RO LEN DE - 1920
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306326.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AAJ UNSE MILNA HAI - PREM RATAN DHAN PAYO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306280.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AALA RE AALA - SIMMBA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306448.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AANKHEIN KHULI HO YA HO BAND - MOHABBATEIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306725.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AANKHON KI GUSTAKHIYAN - HUM DIL DE CHUKE SANAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306576.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AAOGE JAB TUM SAJNA - JAB WE MET
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306662.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AAO KABHI HAVELI PE - STREE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306490.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AAO MILO CHALEN - JAB WE MET
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306666.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AAP KA AANA DIL DHADKANA - KURUKSHETRA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306578.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AAPKE PYAR MEIN - RAAZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306547.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AASHIQ BANAYA AAPNE TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306771.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AASHIQ PUKARO AWARA - PHOOL AUR ANGAAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306705.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AATA MAJHI SATAKLI - SINGHAM RETURNS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306169.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AA TOH SAHI - JUDWAA 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306383.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AAYEE HAI DIWALI - AAMDANI ATTHANI KHARCHA RUPAIYAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306658.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ADHURA LAFZ - BAAZAAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306456.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AFGHAN JALEBI (YA BABA) - PHANTOM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306223.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AFREEN - 1920 LONDON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306330.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AFSANA BANAKE BHOOL NA JAANA - DIL DIYA HAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306540.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AGA BAI - AIYYAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306048.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AGAR DIL RAAZI HAI ARIJIT SINGH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306440.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AGAR TU HOTA - BAAGHI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306299.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AILA RE AILA - KHATTA MEETHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306642.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AINVAYI AINVAYI - BAND BAAJA BAARAAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305934.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AITBAAR NAHI KARNA - QAYAMAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306781.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AITHEY AA - BHARAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306501.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AKELE HUM AKELE TUM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306796.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AKHA INDIA JANTA HAI-JAAN TERE NAAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306807.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AKH LAD JAAVE - LOVEYATRI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306472.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AKSAR IS DUNIYA MEIN - DHADKAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306782.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ALA BARFI - BARFI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305979.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ALFAZON KI TARAH - ROCKY HANDSOME
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306342.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ALIF SE - MR. X
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306252.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ALLAH MAAF KARE - DESI BOYZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306744.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ALLAH WAARIYAN - YAARIYAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306112.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AMBARSARIYA - FUKREY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306041.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ANARKALI DISCO CHALI - HOUSEFULL 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306025.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ANG LAGA DE (GOLIYON KI RASLEELA RAM-LEELA)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306088.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ANGOORI ANGOORI - JAANWAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306711.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ANJAANA ANJAANI TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305913.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ANKHIYAN - DO LAFZON KI KAHANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306293.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ARZOO - BLOOD MONEY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305993.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ASALAAM-E-ISHQUM - GUNDAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306181.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AUNTY JI - EK MAIN AUR EKK TU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306000.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AUR HO - ROCKSTAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305946.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AWARI - EK VILLAIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306159.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,AYAASHI - BADMAASH COMPANY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305926.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BAADSHAH O BAADSHAH - BAADSHAH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306784.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BAAKI SAB FIRST CLASS - JAI HO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306166.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BAARI BARSI - BAND BAAJA BAARAAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305933.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BAAT BAN JAYE - A GENTLEMAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306360.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BAATON KO TERI - ALL IS WELL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306248.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BABY WONT YOU TELL ME - SAAHO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306525.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BAD BOY - SAAHO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306526.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BADI LAMBIYAAN SI JUDAIYAAN - RAABTA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306392.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BADLA BADLA - HOUSEFULL 4
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306524.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BADMAASH COMPANY TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305924.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BADRINATH KI DULHANIA TITLE TRACK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306372.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BADTAMEEZ DIL - YEH JAWAANI HAI DEEWANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306687.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BAIRI PIYA - DEVDAS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306612.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BALAM PICHKARI - YEH JAWAANI HAI DEEWANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306680.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BALMA - KHILADI 786
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306013.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BAM BAM - KIS KISKO PYAAR KAROON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306215.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BAND BAAJA BAARAAT TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305936.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BANDEYA - DIL JUUNGLEE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306495.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BANDOOK MERI LAILA - A GENTLEMAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306356.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BANG BANG TITLE TRACK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306137.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BANI BANI - MAIN PREM KI DIWANI HOON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306582.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BANJAARA - EK THA TIGER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306753.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BAN JA RANI - TUMHARI SULU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306374.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BARSAAT KE DIN AAYE - BARSAAT (2005)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306713.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BEECH BEECH MEIN - JAB HARRY MET SEJAL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306362.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BEHKA MAIN BEHKA - GHAJINI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306630.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BEKHUDI - TERAA SURROOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306315.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BEPARWAH - MUNNA MICHAEL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306737.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BESHARAM TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306057.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BESHARMI KI HEIGHT - MAIN TERA HERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306162.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BEWAJA - SANAM TERI KASAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306311.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BEZUBAAN - ABCD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306093.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BHANGRA PA - A FLYING JATT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306319.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BHAR DO JHOLI MERI - BAJRANGI BHAIJAAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306842.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BHARE BAZAAR - NAMASTE ENGLAND
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306411.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BHEED MEIN TANHAI MEIN -TUMSA NAHIN DEKHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306770.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BHEEGE MANN - KHANDAANI SHAFAKHANA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306542.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BHEEGEY HONT TERE - MURDER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306838.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BHEEGH LOON (FEMALE VERSION) - KHAMOSHIYAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306218.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BHEEGI HUI HAI RAAT - SANGRAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306688.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BHULA DENA MUJHE - AASHIQUI 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306058.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BILLIONAIRE - BAAZAAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306459.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BINDIYA CHAMKE CHOODI KHANKE - TUMKO NA BHOOL PAAYENGE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306603.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BIN SAJAN JHULA JHULU - DAMINI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306832.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BINTE DIL - PADMAAVAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306455.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BIRJU - HEY BRO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306239.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BOAT MA KUKDOOKOO - WELCOME 2 KARACHI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306259.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BOL BACHCHAN (TITLE SONG)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306036.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BOL BELIYA - KILL DIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306148.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BOL DO NA ZARA FEAT. EMRAAN HASHMI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306344.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BOLNA - KAPOOR & SONS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306290.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BOLO HAR HAR HAR - SHIVAAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306296.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BOM DIGGY DIGGY - SONU KE TITU KI SWEETY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306480.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BOSS - TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306118.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BUDDHA SA MANN - KAPOOR & SONS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306291.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BUDDHI DO BHAGWAAN - PLAYERS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305998.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,BULBUL - HEY BRO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306237.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CALLER TUNE - HUMSHAKALS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306183.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAAHAT - BLOOD MONEY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305990.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAAND SITARE - KAHO NAA PYAAR HAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306678.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAAR KADAM - PK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306844.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAHOON BHI TOH - FORCE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305959.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHALAO NA NAINO SE BAAN RE - BOL BACHCHAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306037.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAL BHAAG - WELCOME 2 KARACHI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306258.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAL CHAIYYA CHAIYYA - DIL SE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306592.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHALI AAYEE - MAIN PREM KI DIWANI HOON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306580.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAL KUDIYE - DOUBLE DHAMAAL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305941.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHALLA - JAB TAK HAI JAAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306730.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHALO DILDAAR CHALO - DIL DIYA HAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306538.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHALO ISHQ LADAAYE TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306672.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHALTE CHALTE - MITRON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306443.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHALTE CHALTE - TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306694.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHALTI HAI KYA 9 SE - JUDWAA 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306386.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAMAK CHALLO CHEL CHABELI - ROWDY RATHORE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306034.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAMMO - HOUSEFULL 4
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306523.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAND AASMANO SE LAAPATA - ALONE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306242.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHANDRALEKHA - A GENTLEMAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306359.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAND SITARE YE NAJARE (FOR YOUR EYES ONLY)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306558.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHANGLI HAI CHANGLI HAI - YAMLA PAGLA DEEWANA 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306080.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHARHA DE RANG - YAMLA PAGLA DEEWANA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305983.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHASHNI - BHARAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306499.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHASKA - BADMAASH COMPANY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305927.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHAUKHAT PE TUMHARI HUM DUM TOD JAYENGE - AANKHEN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306818.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHHOD DIYA - BAAZAAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306458.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHICHORA PIYA - ACTION JACKSON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306197.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHINGAM CHABAKE - GORI TERE PYAAR MEIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306083.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHINTA TA TA CHITA CHITA - ROWDY RATHORE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306032.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHITTHIYE - EK LADKI KO DEKHA TOH AISA LAGA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306557.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHOGADA - LOVEYATRI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306473.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHOOMANTAR - MERE BROTHER KI DULHAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305957.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHORI CHORI CHUPKE CHUPKE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306718.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHORI CHORI TERA CHALNA - AAMDANI ATTHANI KHARCHA RUPAIYAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306657.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CHURA KE DIL MERA - MAIN KHILADI TU ANARI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306800.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,CUTIEPIE - AE DIL HAI MUSHKIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306269.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DAARU WARGI - WHY CHEAT INDIA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306484.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DAAWAT-E-ISHQ TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306134.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DAAYRE - DILWALE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306277.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DAINGAD DAINGAD - HUMPTY SHARMA KI DULHANIA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306202.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DANCE BASANTI - UNGLI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306210.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DANCE KE LEGEND - HERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306228.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DANCE PE CHANCE - RAB NE BANA DI JODI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306729.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DARASAL - RAABTA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306393.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DARD DILO KE (REPRISE) - THE XPOSE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306190.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DARD DILO KE - THE XPOSE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306191.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DARD E DISCO - OM SHANTI OM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306696.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DARD KARAARA - DUM LAGA KE HAISHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306736.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DARKHAAST - SHIVAAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306297.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DEEWANA HAI YE MANN - CHORI CHORI CHUPKE CHUPKE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306719.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DEEWANA KAR RAHA HAI - RAAZ 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306793.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DEEWANGI DEEWANGI - OM SHANTI OM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306698.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DEKHEGA RAJA TRAILER - MASTIZAADE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306272.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DEKH LENA - TUM BIN 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306586.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DEKHNE WAALON NE - CHORI CHORI CHUPKE CHUPKE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306722.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DESI BEAT - BODYGUARD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306757.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DESI LOOK - EK PAHELI LEELA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306265.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DEVIL-YAAR NAA MILEY - KICK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306139.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHADHANG DHANG - ROWDY RATHORE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306031.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHAT TERI KI - GORI TERE PYAAR MEIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306081.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHEERE DHEERE PYAR KO BADHANA HAI - PHOOL AUR KAANTE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306834.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHINKA CHIKA - READY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306775.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHOKA DHOKA - HIMMATWALA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306129.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHOKHA DHADI - R... RAJKUMAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306105.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHOL BAAJE - EK PAHELI LEELA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306260.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHOLIDA - LOVEYATRI FEAT. AAYUSH SHARMA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306475.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHOLI TARO DHOL BAJE - HUM DIL DE CHUKE SANAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306573.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHOLNA - HEYY BABYY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306659.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHOOM DHAAM - ACTION JACKSON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306193.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHOOM MACHALE DHOOM - DHOOM 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306084.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DHUNKI - MERE BROTHER KI DULHAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305953.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL AAJ KAL - PURANI JEANS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306157.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL CHEER KE DEKH TERA HI NAAM HOGA - RANG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306648.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL CHORI SADDA HO GAYA - SONU KE TITU KI SWEETY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306477.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL CHURA LIYA - QAYAMAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306777.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL DE DIYA - PHIR HERA PHERI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306565.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL DHADAKNE DO - ZINDAGI NA MILEGI DOBARA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305987.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL DHADAKNE DO TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306212.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL DI NAZAR - MAINE PYAAR KYUN KIYA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306741.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL DIYAN GALLAN - TIGER ZINDA HAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306352.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL HUA BESHARAM - NAAM SHABANA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306389.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL JAANIYE - KHANDAANI SHAFAKHANA (JUBIN NAUTIYAL)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306543.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL JIGER NAZAR KIYA HAI - DIL KA KYA KASOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306849.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL KA JO HAAL HAI - BESHARAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306054.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL KA KYA KASOOR (FEMALE) - DIL KA KYA KASOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306845.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL KEHTA HAI - AKELE HUM AKELE TUM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306797.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL KI TOH LAG GAYI - NAUTANKI SAALA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306126.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL KO TUMSE PYAAR HUA - REHNAA HAI TERRE DIL MEIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306548.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL KYUN YEH MERA SHOR KARE - KITES
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305937.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL LAGI KUDI GUJARAT DI - SWEETIEE WEDS NRI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306370.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DILLI WALI GIRLFRIEND - YEH JAWAANI HAI DEEWANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306686.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL MEIN HO TUM EMRAAN HASHMI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306483.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL MERA MUFT KA - AGENT VINOD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305977.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL MERA TOD DIYA USNE - KASOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306643.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL MERE TU DEEWANA HAI - SOORYAVANSHAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306795.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL MERI NA SUNE DIL KI MAIN NA SUNU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306429.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL NA DIYA - KRRISH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306765.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL NE KAR LIYA AITBAAR - HUMRAAZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306801.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL ROYI JAYE - DE DE PYAAR DE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306536.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL SE RE (TITLE TRACK)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306590.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL TOD KE - ISHQ KE PARINDEY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305928.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL TU HI BATAA - KRRISH 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306764.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DIL YE BEKARAR KYUN HAI - PLAYERS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305997.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DING DANG - MUNNA MICHAEL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306738.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DISCO DISCO - A GENTLEMAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306357.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DO ANJAANE AJNABI - VIVAH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306636.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DO DHAARI TALWAAR - MERE BROTHER KI DULHAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305955.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DOLA RE DOLA RE - DEVDAS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306608.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DOLE DOLE DIL MERA DOLE - SHOLA AUR SHABNAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306823.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DOSTI - JUNGLEE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306518.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DO YOU KNOW - HOUSEFULL 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306022.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DRAMA QUEEN - HASEE TOH PHASEE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306175.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DREAMUM WAKEUPUM - AIYYAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306045.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,D SE DANCE - HUMPTY SHARMA KI DULHANIA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306200.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DUM DUM - BAND BAAJA BAARAAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305935.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DUM MAARO DUM - DEEPIKA PADUKONE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305969.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DUPATTA TERA NAU RANG DA - PARTNER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306758.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,DUSHMAN MERA - DON 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305950.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EK CHARRAIYA - CITYLIGHTS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306149.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EK CHATUR NAAR - MACHINE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306396.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EK CHUMMA - HOUSEFULL 4
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306522.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EK DIL EK JAAN - PADMAAVAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306452.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EK DO TEEN - TEZAAB
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306817.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EK HASEENA THI - KARZZZZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306669.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EK LADKI KO DEKHA TOH AISA LAGA (1942 - A LOVE STORY)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306599.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EK LADKI KO DEKHA TOH AISA LAGA TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306554.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EK MAIN AUR EKK TU (TITLE TRACK)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305999.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EK PAL KA JEENA - AE MERE DIL TU GAYE JAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306677.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EK TAMANNA JEEVAN KI - AANKHEN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306819.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,EMOTIONAL FOOL - HUMPTY SHARMA KI DULHANIA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306198.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ENGINE KI SEETI - KHOOBSURAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306144.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,FAKEERA GHAR AAJA - JUNGLEE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306520.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,FANA FANAH YE DIL HUA FANAH - HUMKO DEEWANA KAR GAYE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306563.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,FARRATA - TUMHARI SULU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306376.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,FIKAR NOT - CHHICHHORE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306508.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,FILMON KE SAARE HERO MERE AAGE HAI ZERO - SWARG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306826.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,FIRST TIME DEKHA TUMHE HUM - JAAN TERE NAAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306809.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,FOOLISHQ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306349.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,FUKREY TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306038.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GALAT BAAT HAI - MAIN TERA HERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306160.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GALLAN GOODIYAAN - DIL DHADAKNE DO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306213.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GALLAN GORIYAN - BATLA HOUSE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306529.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GALTI SE MISTAKE - JAGGA JASOOS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306398.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GANDI BAAT - R...RAJKUMAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306104.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GANGSTER BABY - ACTION JACKSON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306196.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GA RAHA HOON IS MEHFIL MEIN - DIL KA KYA KASOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306846.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GARJE GAJRAJ HAMARE - JUNGLEE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306519.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GAWAH HAIN CHAND TAARE GAWAH HAI - DAMINI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306831.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GAZAB KA HAI DIN SOCHO ZARA - DIL JUUNGLEE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306494.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GAZAB KA HAIN YEH DIN - SANAM RE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306323.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GERUA - DILWALE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306276.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GET READY TO FIGHT AGAIN - BAAGHI 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306417.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GHAGHARA - DIRTY POLITICS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306282.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GHAGRA - YEH JAWAANI HAI DEEWANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306685.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GHUNGHAT KI AAAD SE DILBAR KA - HUM HAIN RAHI PYAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306615.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GHUNGHTE MEIN CHANDA HAI - KOYLA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306601.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GIRL I NEED YOU - BAAGHI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306298.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GLAMOROUS ANKHIYAAN - EK PAHELI LEELA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306263.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GO GO GOVINDA - OH MY GOD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306009.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GOLMAAL AGAIN (TITLE SONG)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306381.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GORE MUKHDE PE ZULFEN - SPECIAL 26
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306100.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GUD NAAL - EK LADKI KO DEKHA TOH AISA LAGA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306555.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GULABI - SHUDDH DESI ROMANCE VIDEO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306066.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GULABI 2.0 - NOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306380.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GUMNAAM HAI KOI - 1920 LONDON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306328.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GUNAAH - BLOOD MONEY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305994.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,GUZARISH - GHAJINI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306631.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HAATHON MEIN THHE HAATH - MUBARAKAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306424.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HAI APNA DIL - THE XPOSE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306192.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HAIRAT - ANJAANA ANJAANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305914.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HAI ZAROORI - NOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306379.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HALKA HALKA - FANNEY KHAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306437.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HALO RE - PREM RATAN DHAN PAYO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306279.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HAMARI SHAADI MEIN - VIVAH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306639.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HANSTE HANSTE - EK HASEENA THI EK DEEWANA THA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306338.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HARI OM HARI OM - KARZZZZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306671.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HAR KISI KO NAHI MILTA YAHAN PYAAR ZINDAGI MEIN - BOSS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306122.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HASEENO KA DEEWANA - KAABIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306402.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HASI BAN GAYE - HAMARI ADHURI KAHANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306284.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HATT JA TAU - VEEREY KI WEDDING
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306408.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HAULE HAULE - RAB NE BANA DI JODI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306727.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HAULI HAULI - DE DE PYAAR DE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306535.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HAWA HAWA - MUBARAKAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306421.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HAWA HAWAI 2.0 - TUMHARI SULU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306377.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HAWAYEIN - JAB HARRY MET SEJAL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306361.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HEER BADNAAM - ZERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306436.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HEERIYE - PYAAR KA PUNCHNAMA 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306231.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HEER TOH BADI SAD HAI - TAMASHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306268.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HIGH HEELS TE NACHCHE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306347.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HIGH RATED GABRU - NAWABZAADE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306420.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HO GAYI TUN - PLAYERS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305995.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HOLI BIRAJ MA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306430.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HONA HAI KYA - TALAASH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306027.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HONGE JUDA NA HUM TUM SE - JALEBI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306428.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HOOKAH BAR - KHILADI 786
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306011.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HOUSE PARTY - EK LADKI KO DEKHA TOH AISA LAGA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306556.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUE BECHAIN - EK HASEENA THI EK DEEWANA THA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306337.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUM DIL DE CHUKE SANAM TITLE TRACK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306572.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUMEIN TUMSE HUA HAI PYAR - AB TUMHARE HAWALE WATAN SAATHIYO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306674.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUM HO GAYE AAPKE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306806.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUMKA PEENI HAI - DABANGG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306749.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUMKO DEEWANA KAR GAYE (TITLE TRACK)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306559.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUMKO DEEWANA KAR GAYE - SAD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306562.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUM KO MALUM HAI - JAAN-E-MANN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306589.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUMKO SIRF TUMSE PYAR HAI - BARSAAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306717.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUM MAR JAYENGE - AASHIQUI 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306062.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUM NAHI SUDHRENGE - GOLMAAL AGAIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306382.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUM NA TODE - BOSS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306119.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUM PAGAL NAHIN HAI - HUMSHAKALS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306182.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUM TERE BIN KAHIN REH NAHIN PAATE - SADAK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306618.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUM TO DEEWANE HUE YAAR - BAADSHAH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306785.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUNGAMA HO GAYA - QUEEN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306167.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,HUSN PARCHAM - ZERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306435.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ICE CREAM KHAUNGI - THE XPOSE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306188.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,I HATE LUV STORYS TITLE TRACK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305930.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,IK TU HI TU HI - MAUSAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305949.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,IK VAARI AA BHI JA YAARA - RAABTA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306390.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ILAHI - YEH JAWAANI HAI DEEWANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306681.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,I LOVE YOU - BODYGUARD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306756.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,INDIA WAALE - HAPPY NEW YEAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306106.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISHQA - DISHOOM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306306.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISHQ BULAAVA - HASEE TOH PHASEE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306173.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISHQ MAINE PAAYA - BYPASS ROAD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306504.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISHQ MEIN EK PAL - BARSAAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306714.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISHQ MEIN RUSWAA - DANGEROUS ISHQ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306051.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISHQ SAMUNDER RELOADED
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306318.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISHQ SHAVA - JAB TAK HAI JAAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306732.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISHQ SUFIYANA - THE DIRTY PICTURE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306773.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISHQYAUN DHISHQYAUN (GOLIYON KI RASLEELA RAM-LEELA)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306092.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISKI USKI - 2 STATES
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306187.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISQ RISK - MERE BROTHER KI DULHAN VIDEO SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305956.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ISSAQBAAZI - ZERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306433.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,IS SHAANE KARAM KA - KACHCHE DHAAGE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305911.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ITNA TUMHE CHAHNA HAI - MACHINE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306394.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ITNI SI BAAT HAIN - AZHAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306343.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,I WILL DO THE TALKING - AGENT VINOD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305975.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAADU TONE WAALIYAN (DAAWAT-E-ISHQ)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306130.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAANE DE JAANE DE - SHOLA AUR SHABNAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306822.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAANEMAN CHUPKE CHUPKE - MUSKAAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306597.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAANE TERE SHEHAR - JAZBAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306216.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAANEWALE DEKH RAHA HAI - JAANWAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306707.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAB JAB PYAR PE - SADAK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306616.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAB MILA TU - I HATE LUV STORYS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305929.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAB PYAAR KIYA TOH DARNA KIYA - PYAAR KIYA TOH DARNA KYA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306746.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JABRA FAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306350.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAB SE MILE NAINA - FIRST LOVE LETTER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306814.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAB SE TUMKO DEKHA HAI SANAM - DAMINI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306830.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAB WE MET - HERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306225.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAD MEHNDI LAG LAG JAAVE - SINGH SAAB THE GREAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306065.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAG SUNA SUNA LAGE - OM SHANTI OM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306697.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAISE DAARU DESI - COCKTAIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306016.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAKO RAKHE SAIYAN - BATLA HOUSE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306531.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JALEBI BAI - DOUBLE DHAMAAL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305940.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JANAM JANAM - DILWALE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306274.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JANAM JANAM - PHATA POSTER NIKLA HERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306097.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JANEMAAN AAH - DISHOOM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306302.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JANNATEIN KAHAN - JANNAT 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306021.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JAO CHAHE DILLI MUMBAI AGRA NAHI MILEGA AISA GHAGRA - KURUKSHETRA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306577.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JASHN-E-ISHQA - GUNDAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306179.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JEENE KE HAIN CHAR DIN - MUJHSE SHAADI KAROGI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306633.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JHONKA HAWA KA - HUM DIL DE CHUKE SANAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306574.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JHOOM JHOOM TA TU - PLAYERS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305996.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JHUK NA PAUNGA - RAID
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306462.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JI HUZOORI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306348.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JINGLE JINGLE - BADMAASH COMPANY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305925.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JIYA -GUNDAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306177.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JIYA JALE - DIL SE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306591.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JIYA LAGE NA - TALAASH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306026.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JIYA RE - JAB TAK HAI JAAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306731.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JIYA TU BIHAR KE LALA - GANGS OF WASSEYPUR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306007.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JIYEIN KYUN - DUM MAARO DUM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305968.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JO BHI KASME KHAI THI HUMNE - RAAZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306545.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JOLLY GOOD FELLOW - JOLLY LLB 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306400.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JO TERE SANG - BLOOD MONEY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305992.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JUDAAI (REPRISED VERSION)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306243.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JUGNI - COCKTAIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306017.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JUGNI - TANU WEDS MANU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305988.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JUMME KI RAAT HAI - KICK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306142.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,JUST CHILL - MAINE PYAAR KYUN KIYA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306740.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAABIL HOON - KAABIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306405.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAALA REY - GANGS OF WASSEYPUR 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306030.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAAMYAAB - WHY CHEAT INDIA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306485.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KABHI JO BADAL BARSE - JACKPOT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306098.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KABIRA - YEH JAWAANI HAI DEEWANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306683.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KABIRA ENCORE - YEH JAWAANI HAI DEEWANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306682.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAHAAN HOON MAIN - HIGHWAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306116.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAHO NAA PYAAR HAI TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306679.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAHO NA KAHO - MURDER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306839.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAISE TUMHE - HUMKO TUMSE PYAAR HAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306747.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAMARIYA - MITRON FT. JACKKY BHAGNANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306441.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAMARIYA HILA DE - STREE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306487.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAMLI - DHOOM 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306087.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAR HAR MAIDAAN FATEH - SANJU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306465.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KARLE JUGAAD KARLE - FUKREY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306040.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KASAM KI KASAM - MAIN PREM KI DIWANI HOON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306579.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KASHMIR MAIN TU KANYAKUMARI - CHENNAI EXPRESS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306077.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KASUMBI - PARMANU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306451.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KATRA KATRA - ALONE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306240.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KAUN NACHDI - SONU KE TITU KI SWEETY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306481.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KEEDA - ACTION JACKSON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306195.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KHAABON KE PARINDAY - ZINDAGI NA MILEGI DOBARA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305985.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KHALIBALI - PADMAAVAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306454.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KHAMOSHIYAN TITLE TRACK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306217.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KHATA TO JAB HO KE - DIL KA KYA KASOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306847.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KHAYALON MEIN BHI - RAAZ 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306790.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KHEECH MERI PHOTO - SANAM TERI KASAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306313.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KHILADI 786 TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306012.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KHOYA KHOYA - HERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306227.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KHUDA JAANE - BACHNA AE HASEENO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306835.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KHWABON KHWABON - FORCE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305958.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KI KARIYE NACHNA AAONDA NAHIN - TUM BIN 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306588.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KILL DIL TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306147.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KINARA - SWEETIEE WEDS NRI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306367.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KISI SE PYAR HO JAYE - KAABIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306403.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KITNA PYAARA HAI YEH CHEHRA - RAAZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306546.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KITNI BECHAIN HOKE TUMSE MILI - KASOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306646.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KOI SEHRI BABU DIL LEHRI BABU - LOAFER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306811.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KOI TO SAATHI CHAHIYE - KASOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306644.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KOKA - KHANDAANI SHAFAKHANA (BADSHAH)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306541.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KORE KORE SAPNE MERE - SOORYAVANSHAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306794.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KUCH DIN - KAABIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306401.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KUCHH TOH HUA HAI - SINGHAM RETURNS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306171.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KUCH NA KAHO - 1942 - A LOVE STORY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306598.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KUCH TOH HAI TUJHSE RAABTA FT. DEEPIKA PADUKONE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306391.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KUN FAYA KUN - ROCKSTAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305943.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KYA KHOYA - KHAMOSHIYAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306219.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KYA TUJHE AB YE DIL BATAYE - SANAM RE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306320.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KYON KI ITNA PYAR TUMKO - KYON KI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306675.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KYUN KHANKE TERI CHOODI - TUMKO NA BHOOL PAAYENGE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306602.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KYUN KISI KO - TERE NAAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306629.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,KYUN MAIN JAAGOON - PATIALA HOUSE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305963.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAAGI NA CHOOTE - A GENTLEMAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306358.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAAL ISHQ (GOLIYON KI RAASLEELA RAM-LEELA)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306089.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAAPATA - EK THA TIGER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306751.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAFZE BAYAAN - BARKHAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306255.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAGA LAGA RE - MAINE PYAAR KYUN KIYA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306739.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAGAN LAGI - TERE NAAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306626.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAGE 440 VOLT - SULTAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306301.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAGI HAWA DIL KO - NAWABZAADE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306418.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAHU MUNH LAG GAYA (GOLIYON KI RASLEELA RAM-LEELA)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306090.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAILA - TEZZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306005.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAKK MERA HIT - SONU KE TITU KI SWEETY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306482.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LA LA LA - BAAZAAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306457.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LALLA LALLA LORI - WELCOME 2 KARACHI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306256.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LAUNG DA LASHKARA - PATIALA HOUSE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305962.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LE LE MAZA LE - WANTED
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306755.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LETS GO TO HELL - DEAR ZINDAGI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306327.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LETS NAACHO - KAPOOR & SONS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306289.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LIFE BAN JAYEGI - HUMRAAZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306803.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LIFT TERI BANDH HAI - JUDWAA 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306385.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LINE LAGA - HEY BRO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306238.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LOCHA E ULFAT - 2 STATES
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306184.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LONDON THUMAKDA - QUEEN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306168.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LONELY - KHILADI 786
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306010.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LO SAFAR SHURU HO GAYA - BAAGHI 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306415.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LOVE KI GHANTI - BESHARAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306056.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LOVELY (HAPPY NEW YEAR)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306110.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LOVE ME LOVE ME - WANTED
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306754.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LOVE ME THODA AUR - YAARIYAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306111.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LOVE YOU ZINDAGI - DEAR ZINDAGI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306324.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LUCKY TU LUCKY ME - HUMPTY SHARMA KI DULHANIA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306199.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,LUNGI DANCE - CHENNAI EXPRESS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306076.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAAR DALA - DEVDAS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306609.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MADHUBALA - MERE BROTHER KI DULHAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305952.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAHEK BHI - AIYYAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306047.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAHI AAJA - SINGH IS BLIING
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306229.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAHIYA - AWARAPAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306595.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIN AGAR SAMNE AA BHI JAYA KARU - RAAZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306544.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIN BADHIYA TU BHI BADHIYA - SANJU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306463.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIN CHALI - FORCE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305960.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAINE SOCHA KE CHURA LOON - PHIR SE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306466.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAINE SOCH LIYA - TUMSA NAHIN DEKHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306769.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAINE YEH DIL TUMKO DIYA-JAAN TERE NAAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306808.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIN HOON DEEWANA TERA - EK PAHELI LEELA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306262.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIN KAUN HOON - SECRET SUPERSTAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306354.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIN KHILADI TU ANARI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306799.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIN KYA KAROON - BARFI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305978.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIN RANG SHARBATON KA REPRISE - PHATA POSTER NIKHLA HERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306096.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIN TERA BAN JAUNGA - KABIR SINGH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306517.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIN TERE ISHQ MEIN MAR NA JAUN KAHIN - LOAFER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306810.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIN TO HOON PAGAL - BAADSHAH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306787.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAIYYA YASHODA - HUM SAATH SAATH HAIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306655.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAKE SOME NOISE FOR DESI BOYZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306743.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MALAMAAL - HOUSEFULL 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306333.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MALANG - DHOOM 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306086.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MALHARI - BAJIRAO MASTANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306701.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MANCHALA - HASEE TOH PHASEE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306176.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MANMA EMOTION JAAGE - DILWALE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306273.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MANNAT (DAAWAT-E-ISHQ)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306133.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MANN KEHNE LAGA - NAUTANKI SAALA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306124.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MANN MERA - TABLE NO. 21
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306691.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MANWAA - OCTOBER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306449.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MANZOOR-E-KHUDA - THUGS OF HINDOSTAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306470.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAREEZ-E-ISHQ - ZID
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306138.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAR JAYIAN - VICKY DONOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306050.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAST KALANDAR - HEYY BABYY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306660.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAST MAGAN - 2 STATES
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306185.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MASTON KA JHUND - BHAAG MILKHA BHAAG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306072.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAT AAZMA RE - MURDER 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306837.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MATARGASHTI - TAMASHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306267.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAT MAARI - R...RAJKUMAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306102.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAUJA HI MAUJA - JAB WE MET
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306665.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAULA MAULA - AWARAPAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306593.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAULA MAULA RE - SINGHAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305966.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MAUSAM KI TARAH TUM BHI BADAL - JAANWAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306709.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MEET ME DAILY BABY - WELCOME BACK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306236.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MEHANDI MEHANDI - CHORI CHORI CHUPKE CHUPKE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306721.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MEHERBANIYAN - VEER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305973.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERA NACHAN NU - AIRLIFT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306285.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERA PYAR TERA PYAR - JALEBI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306426.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERA SANAM SAB SE PYARA HAI - DIL KA KYA KASOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306848.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERA WALA DANCE - SIMMBA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306447.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERA YAAR - BHAAG MILKHA BHAAG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306069.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERA YAAR DILDAR BADA SONA - JAANWAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306710.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERE BROTHER KI DULHAN TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305954.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERE DIL JIGAR SE - SOLDIER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306568.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERE DIL KO KARAR AA JAYE - JIGAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306553.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERE KHWABON MEIN JO AAYE - SOLDIER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306571.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERE NAAM TU - ZERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306434.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERE NISHAAN - OH MY GOD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306008.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERE SAIYAAN SUPERSTAR - EK PAHELI LEELA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306261.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERE SOHNEYA - KABIR SINGH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306516.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERI ADA BHI - READY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306774.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERI MAA - YAARIYAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306114.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MERI TARAH TUM BHI PYAR KARKE DEKHO NA - KYA YEHI PYAAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306622.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MHARE HIWDA MEIN NACHE MOR - HUM SAATH SAATH HAIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306652.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MILEGI MILEGI - STREE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306488.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MILE HO TUM - DIL DIYA HAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306539.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MILNE HAI MUJHSE AAYI - AASHIQUI 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306059.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MILNE KI TUM KOSHISH KERNA - DIL KA KYA KASOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306850.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MILTE MILTE HASEEN WADIYON MEIN - JUNOON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306567.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MIND BLOWING - VEEREY KI WEDDING
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306407.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MOHABBAT - FANNEY KHAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306439.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MOHABBAT HO GAYEE HAI - BAADSHAH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306786.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MOHABBAT HO NA JAYE - KASOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306647.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MOHENJO DARO TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306307.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MOHE RANG DO LAAL - BAJIRAO MASTANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306702.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MOH MOH KE DHAAGE - DUM LAGA KE HAISHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306734.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MON AMOUR - KAABIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306404.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MOORA - GANGS OF WASSEYPUR 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306029.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MOREY PIYA - DEVDAS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306611.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MORNI BANKE - BADHAAI HO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306498.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUBARAKAN TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306422.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUJHE CHAAND PE LE CHALO - SANJU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306464.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUJHE ISHQ SE - YAARIYAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306113.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUJHE TUMSE MOHABBAT HAI (REMIX) - TUMSA NAHIN DEKHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306767.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUJHE TUMSE MOHABBAT HAI - QAYAMAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306776.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUJHKO PEHCHAANLO - DON 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305951.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUJHKO YAAD SATAYE TERI - PHIR HERA PHERI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306564.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUJH MEIN TU - SPECIAL 26
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306099.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUJH MEIN TU FT. AKSHAY KUMAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306101.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUJHSE MOHABBAT KA IZHAR KARTA - HUM HAIN RAHI PYAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306613.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUJHSE SHAADI KAROGI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306634.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUKHDA VEKH KE - DE DE PYAAR DE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306532.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUMMY KASAM - NAWABZAADE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306419.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUNDIYAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306416.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUSAFIR - JAGGA JASOOS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306397.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUSAFIR - SWEETIEE WEDS NRI (ATIF ASLAM)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306365.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,MUSKURANE - CITYLIGHTS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306151.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAA JAANE KAHAN SE AAYA HAI - I ME AUR MAIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306700.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NACHAN FARRATE - ALL IS WELL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306249.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NACHDA - PHANTOM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306221.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NACHLE NA - DIL JUUNGLEE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306493.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NACH LE NACH LE - BOL BACHCHAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306035.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NACHLE TU - DISHKIYAOON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306156.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NADAAN PARINDEY - ROCKSTAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305942.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAGADA NAGADA - JAB WE MET
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306664.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAHI YEH HO NAHIN SAKTA - BARSAAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306716.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAIN - EK HASEENA THI EK DEEWANA THA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306336.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAINA - KHOOBSURAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306143.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAINA RE - DANGEROUS ISHHQ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306053.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAIN NA JODEEN - BADHAAI HO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306496.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAINO MEIN SAPNA - HIMMATWALA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306127.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAINOWALE NE - PADMAAVAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306453.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NANA CHI TAANG - KHATTA MEETHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306640.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NA NA KARTE PYAR - DHADKAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306783.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAS NAS MEIN - WELCOME BACK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306233.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NA TUM JANO NA HUM - KAHO NAA PYAAR HAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306676.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAZARBATTU - YAMLA PAGLA DEEWANA PHIR SE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306446.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NAZAR NA LAG JAAYE - STREE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306489.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NEENDEIN KHUL JAATI HAIN - HATE STORY 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306689.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NIMBOODA NIMBOODA - HUM DIL DE CHUKE SANAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306575.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NIT KHAIR MANGA - RAID
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306461.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,NO. 1 PUNJABI - CHORI CHORI CHUPKE CHUPKE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306720.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,O AJNABI (SAD) - MAIN PREM KI DIWANI HOON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306581.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ODHANI - MADE IN CHINA (DARSHAN RAVAL)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306513.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,OFFO - 2 STATES
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306186.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,OH GIRL YOU ARE MINE - HOUSEFULL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305939.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,OH OH JANE JAANA - PYAAR KIYA TOH DARNA KYA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306745.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,O JAANA - TERE NAAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306625.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,O JIJI - VIVAH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306637.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,O KHUDA - HERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306226.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,O MERI JAAN - RAAZ REBOOT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306761.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ONE TWO THREE FOUR - CHENNAI EXPRESS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306075.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,OOH LA LA TU HAI MERI FANTASY - THE DIRTY PICTURE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306772.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,O PRIYA O PRIYA - KAHIN PYAAR NA HO JAAYE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306789.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,O RANGREZ - BHAAG MILKHA BHAAG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306071.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,O SAATHIYA - SWEETIEE WEDS NRI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306368.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,O SAJNA - TABLE NO. 21
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306690.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,O WOMANIYA - GANGS OF WASSEYPUR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306006.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,OYE OYE - AZHAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306346.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PAAS BULATI HAI ITNA RULATI HAI - JAANWAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306706.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PAIRON MEIN BANDHAN HAI - MOHABBATEIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306724.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PAISA YEH PAISA - TOTAL DHAMAAL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306506.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PAKEEZAH - UNGLI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306208.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PALANG TOD - HOLIDAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306163.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PALANG TODH - SINGH SAAB THE GREAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306064.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PAL EK PAL - JALEBI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306425.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PANI DA RANG - VICKY DONOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306049.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PANIYON SA - SATYAMEVA JAYATE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306414.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PAPA TOH BAND BAJAYE - HOUSEFULL 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306023.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PARA PARA - JUDGEMENTALL HAI KYA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306528.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PARDA - ONCE UPON A TIME IN MUMBAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305918.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PARI PARI - HUNGAMA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306584.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PARTY ALL NIGHT FEAT. HONEY SINGH - BOSS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306121.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PATAKHA GUDDI - HIGHWAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306117.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PEE LOON - ONCE UPON A TIME IN MUMBAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305920.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PEHLA PYAAR - KABIR SINGH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306514.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PEHLI BAAR - DIL DHADAKNE DO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306211.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PEHLI BAAR DIL YUN - HUM HO GAYE AAPKE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306805.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PEHLI DAFA - BARKHAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306254.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PEHLI PEHLI BAAR HAI - KYA YEHI PYAAR HAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306621.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PHIR MILENGE CHALTE CHALTE - RAB NE BANA DI JODI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306728.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PHIR MULAAQAT HOGI KABHI - WHY CHEAT INDIA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306486.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PHIR SE UD CHALA - ROCKSTAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305944.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PINGA - BAJIRAO MASTANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306703.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PITAH SE NAAM HAI TERA - BOSS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306120.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PIYA AAYE NA - AASHIQUI 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306061.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PIYA MILENGE - RAANJHANAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306044.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PIYA MORE - BAADSHAHO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306351.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PREET - KHOOBSURAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306145.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PREM LEELA - PREM RATAN DHAN PAYO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306278.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PROPER PATOLA - NAMASTE ENGLAND
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306409.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PSYCHO SAIYAAN - SAAHO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306527.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PUNJABI MAST - ACTION JACKSON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306194.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PUNJABI WEDDING SONG - HASEE TOH PHASEE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306172.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PYAAR NAHIN KARNA - KACHCHE DHAAGE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305912.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PYAR HUMKO HONE LAGA - TUM BIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306607.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PYAR KE KAGAZ PE - JIGAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306552.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PYAR KI - HOUSEFULL 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306331.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,PYAR KI PUNGI - AGENT VINOD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305976.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,QAYAMAT QAYAMAT - TUJHE APNA BANANA THA (QAYAMAT)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306778.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAABTA (KEHTE HAIN KHUDA) - AGENT VINOD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305974.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAANJHANAA HUA MAI TERA - RAANJHANAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306043.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAAT BHAR - HEROPANTI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306207.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAATEIN SHIVAAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306294.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAAZ AANKHEIN TERI - RAAZ REBOOT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306762.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RABBA - FUKREY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306039.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RABBA - HEROPANTI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306203.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RABBA MEIN TOH MAR GAYA OYE - MAUSAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305948.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAB KARE TUJHKO BHI PYAR HO JAYE - MUJHSE SHAADI KAROGI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306635.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RADHA - JAB HARRY MET SEJAL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306364.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAFTA RAFTA - YAMLA PAGLA DEEWANA PHIR SE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306444.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAFTA RAFTA RAAZ 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306791.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAFU - TUMHARI SULU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306375.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAGHUPATI RAGHAV - KRRISH 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306763.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAITAA PHAIL GAYA - SHAANDAAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306281.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAJA KO RANI SE - AKELE HUM AKELE TUM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306798.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RANGRELI (DAAWAT-E-ISHQ)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306131.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RANGTAARI - LOVEYATRI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306474.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RAZIA GUNDO MEIN PHAS GAYI -THANK YOU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306692.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,REHNAA HAI TERRE DIL MEIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306551.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,REHNUMA - ROCKY HANDSOME
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306341.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RIGHT NOW NOW - HOUSEFULL 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306024.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RISHTA DILON KA TODE NA TOOTE - JAANWAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306708.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ROCK THA PARTY - ROCKY HANDSOME
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306340.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ROKE NA RUKE NAINA - BADRINATH KI DULHANIA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306371.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ROLA PE GAYA - PATIALA HOUSE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305961.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ROM ROM ROMANTIC - MASTIZAADE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306271.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ROOH KA RISHTA - GHOST
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306505.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ROOTHA KYUN - 1920 LONDON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306329.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ROZANA - NAAM SHABANA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306388.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ROZANA - PHIR SE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306467.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,RULA DIYA - BATLA HOUSE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306530.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAAD SHUKRANA - MR. X
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306253.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAAIYAAN - GUNDAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306178.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAAJNA - I ME AUR MAIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306699.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAANS - JAB TAK HAI JAAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306733.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAANSON NE BAANDHI HAI DOR PIYA - DABANGG 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306748.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAARI RAAT TERI YAAD FULL VIDEO - FOOTPATH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306820.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAATHIYA - SINGHAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305964.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SACH KEH RAHA HAI DEEWANA - REHNAA HAI TERRE DIL MEIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306549.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SADDA DIL VI TU - ABCD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306094.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SADI GALI - TANU WEDS MANU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305989.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SADI GALI AAJA SANU - NAUTANKI SAALA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306123.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SADKA - I HATE LUV STORYS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305931.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAFAR - JAB HARRY MET SEJAL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306363.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAIYAARA EK THA TIGER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306752.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAJAN BADE SENTI - BADHAAI HO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306497.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAJDE - KILL DIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306146.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAJDE KIYE HAIN LAKHON - KHATTA MEETHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306641.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAJ DHAJ KE TASHAN MEIN REHNA - MAUSAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305947.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SALAAM AAYA - VEER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305971.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAMJHAWAN - HUMPTY SHARMA KI DULHANIA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306201.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SANAM MERE HUMRAAZ - HUMRAAZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306802.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SANAM TERI KASAM - SANAM TERI KASAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306310.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SANDESE AATE HAIN - BORDER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306624.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SANEDO - MADE IN CHINA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306510.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SANSON KI MALA PE - KOYLA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306600.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SANU EK PAL CHAIN - RAID
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306460.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAPNA - PARMANU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306450.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAPNA JAHAN - BROTHERS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306843.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAPNEY APNEY - SONALI CABLE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306152.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAREE KE FALL SA - R...RAJKUMAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306103.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SARSARIYA - MOHENJO DARO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306308.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SATAKLI - HAPPY NEW YEAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306107.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAU BAAR - YAMLA PAGLA DEEWANA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305980.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAU TARAH KE - DISHOOM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306304.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAVA DOLLAR - AIYYAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306046.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAWARE - PHANTOM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306222.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAWARNE LAGE - MITRON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306442.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SAXY BALIYE - SECRET SUPERSTAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306355.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SECOND HAND JAWANI - COCKTAIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306015.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SEENE PE - NASEEB
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306704.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SEHRA - DO LAFZON KI KAHANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306292.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SELFIE LE LE RE - BAJRANGI BHAIJAAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306840.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SENORITA - ZINDAGI NA MILEGI DOBARA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305984.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SHAKIRA - WELCOME 2 KARACHI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306257.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SHANIVAAR RAATI - MAIN TERA HERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306161.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SHARABI - HAPPY NEW YEAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306108.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SHAYARANA (DAAWAT-E-ISHQ)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306132.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SHUDDH DESI ROMANCE TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306068.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SHURU KAR - AIYAARY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306492.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SHURU KAREIN KYA - ARTICLE 15
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306537.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SILSILA YE CHAHAT KA - DEVDAS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306610.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SINGHAM TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305965.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SINGH SAAB THE GREAT TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306063.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SLOW MOTION ANGREZA - BHAAG MILKHA BHAAG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306070.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SOCH NA SAKE - AIRLIFT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306288.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SO GAYA YEH JAHAN - BYPASS ROAD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306503.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SO GAYA YEH JAHAN - NAUTANKI SAALA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306125.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SO GAYA YEH JAHAN - TEZAAB
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306816.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SOLDIER SOLDIER MEETHI BAATEIN BOLKAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306570.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SONEY DO - CITYLIGHTS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306150.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SONI DE NAKHRE - PARTNER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306759.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SOOHA SAAHA - HIGHWAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306115.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SOORAJ KI BAAHON MEIN - ZINDAGI NA MILEGI DOBARA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305986.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SPEAKER PHAT JAAYE - TOTAL DHAMAAL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306507.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,STYLE NASHA TERA - AAMDANI ATTHANI KHARCHA RUPAIYAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306656.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SUBAH SUBAH - SONU KE TITU KI SWEETY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306479.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SUBHA HONE NA DE - DESI BOYZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306742.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SUBHA HONE NA DE REMIX
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306305.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SUBHANALLAH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306684.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SUIT TERA LAAL RANG DA - YAMLA PAGLA DEEWANA 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306079.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SULTAN TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306300.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SUN LE ZARA - SINGHAM RETURNS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306170.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SUNO GANPATI BAPPA MORYA - JUDWAA 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306384.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SUNOJI DULHAN - HUM SAATH SAATH HAIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306654.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SUNO NA SUNO NA - CHALTE CHALTE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306693.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SURAIYYA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306469.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SURILI AKHIYON WALE - VEER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305970.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SURROOR - THE XPOSE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306189.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,SU RU - TUM BIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306606.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TAALI - VEER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305972.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TAANG UTHAKE - HOUSEFULL 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306332.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TAAR BIJLI - GANGS OF WASSEYPUR 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306028.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TAJDAR-E-HARAM - SATYAMEVA JAYATE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306413.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TAKI TAKI - HIMMATWALA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306128.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TAKI TAKI O TAKI - HIMMATWALA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306813.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TALLI TONIGHT - VEEREY KI WEDDING
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306406.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TANDOORI NIGHTS - KARZZZZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306670.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TANHAIYAN - AAP KAA SURROOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306667.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TANHA MERA PYAAR - BYPASS ROAD
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306502.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TATTAD TATTAD (RAMJI KI CHAL) - GOLIYON KI RASLEELA RAM-LEELA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306091.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TAUBA TUMHARE YEH ISHARE - CHALTE CHALTE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306695.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TE AMO - DUM MAARO DUM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305967.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA CHEHRA - SANAM TERI KASAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306312.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA DEEDAR HUA - JANNAT 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306018.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA DIL MERE PAAS REHNE DE - HUNGAMA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306583.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA FITOOR JAB SE CHADH GAYA RE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306431.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA HUA - LOVEYATRI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306476.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA INTEZAAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306387.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA ISHQ BADA TEEKHA - ROWDY RATHORE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306033.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA NOOR - TIGER ZINDA HAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306353.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA RANG BALLE BALLE - SOLDIER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306569.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA RASTAA CHHODOON NA - CHENNAI EXPRESS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306074.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA YAAR HOON MAIN - SONU KE TITU KI SWEETY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306478.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERA ZIKR - GUZAARISH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305923.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE BINA - TEZZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306004.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE BINAA - HEROPANTI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306206.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE BIN NAHI LAAGE (MALE) - EK PAHELI LEELA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306264.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE DWARE PE AAYI BARAAT - VIVAH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306638.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE JAISA - SATYAMEVA JAYATE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306412.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE JAISA TU HAI - FANNEY KHAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306438.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE LIYE - NAMASTE ENGLAND
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306410.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE LIYE - SANAM RE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306321.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE MAST MAST DO NAIN - DABANGG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306750.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE MERE BEECH MEIN - SHUDDH DESI ROMANCE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306067.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE MERE PYAR MEIN SHOLA AUR SHABNAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306821.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE NAAL ISHQA - SHIVAAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306295.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE NAAM HUMNE KIYA HAI - TERE NAAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306628.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERE YAAD REPRISE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306314.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERI ADAAO PE MARATA HUN - BARSAAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306715.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERI FARIYAD - TUM BIN 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306587.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERI JHUKI NAZAR - MURDER 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306836.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERI KHUSHBOO - MR. X
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306250.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERI MOHABBAT NE DIL MEIN MAKAAM KAR DIYA - RANG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306649.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERI YAAD - TERAA SURROOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306317.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TERI YAADON SE - BLOOD MONEY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305991.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,THE BHOOT SONG - HOUSEFULL 4
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306521.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,THE BREAKUP SONG - AE DIL HAI MUSHKIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306270.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,THE GOGGLE SONG - MUBARAKAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306423.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,THE HUMMA SONG - OK JAANU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306334.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,THE NAARI NAARI - MADE IN CHINA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306511.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,THE PAPPI SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306204.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,THI MERI DASTAN - KALYUG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306619.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TIME LAGAYA KAIKO - WELCOME BACK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306232.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TINKU JIYA - YAMLA PAGLA DEEWANA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305982.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TITLI - CHENNAI EXPRESS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306073.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TITLIYAN - ROCKY HANDSOME
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306339.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TO CHALOON - BORDER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306623.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TOH DISHOOM - DISHOOM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306303.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TOH PHIR AAO SAD - AWARAPAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306594.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TOOH - GORI TERE PYAAR MEIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306082.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TOTA TOTA SAJAN SE KEHNA - FIRST LOVE LETTER
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306815.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TOUCH MY BODY - ALONE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306241.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU BHOOLA JISE - AIRLIFT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306287.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU BICHDANN - SON OF SARDAAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306003.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HAI - BESHARAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306055.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HAI - MOHENJO DARO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306309.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HAR LAMHA - KHAMOSHIYAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306220.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HI HAI - DEAR ZINDAGI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306325.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HI HAI AASHIQUI - DISHKIYAOO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306154.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HI HAI AASHIQUI - DISHKIYAOON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306155.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HI JUNOON - DHOOM 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306085.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HI MERA - JANNAT 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306019.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HI NA JAANE - AZHAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306345.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HI RAB TU HI DUA - DANGEROUS ISHHQ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306052.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HI TOH HAI - HOLIDAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306164.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HI TOH MERA - MACHINE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306395.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU HI TU - KICK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306140.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUJHE BHULA DIYA - ANJAANA ANJAANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305915.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUJHE NA DEKHU TO CHAIN MUJHE AATA NAHI HAI - RANG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306651.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUJHE SOCHTA HOON - JANNAT 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306020.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUJHKO HI DULHAN BANAUNGA - CHALO ISHQ LADAAYE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306673.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUJH MEIN RAB DIKHTA HAI - FEMALE VERSION - RAB NE BANA DI JODI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306726.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUJHSE KAHAN JUDA HOON MAIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306432.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU JO HAIN - MR. X
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306251.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU JO MILA - BAJRANGI BHAIJAAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306841.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU KAMAAL DI KUDI - SON OF SARDAAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306002.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUKUR TUKUR - DILWALE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306275.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM BIN - SANAM RE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306322.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM BIN 2 TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306585.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU MERA MEHERBAN - JUNOON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306566.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU MERE AGAL BAGAL HAI - PHATA POSTER NIKHLA HERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306095.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU MERE TYPE KA NAHI HAI - DISHKIYAOON
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306153.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU MERI - BANG BANG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306136.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUMHARE SIVA - TUM BIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306605.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUMHEIN DEKHEN MERI AANKHEN - RANG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306650.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUMHI HO BANDHU - COCKTAIL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306014.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM HO MERE PAAS - ROCKSTAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305945.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU MILA TO HAINA - DE DE PYAAR DE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306533.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU MILE DIL KHILE - CRIMINAL
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306604.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM JO AAYE ZINDAGI MEIN - ONCE UPON A TIME IN MUMBAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305919.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM JO AAYE ZINDAGI MEIN REPRISE - ONCE UPON A TIME IN MUMBAI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305921.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM KAHAN THE - EK HASEENA THI EK DEEWANA THA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306335.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUMKO TO AANA HI THA - JAI HO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306165.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM SAANSON MEIN - HUMKO DEEWANA KAR GAYE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306560.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM SAANSON MEIN HUMKO DEEWANA KAR GAYE - II
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306561.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM SAJNA KE GHAR JAOGI - SWARG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306825.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM SE - JALEBI (JUBIN NAUTIYAL)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306427.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM SE HI - JAB WE MET
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306661.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUMSE HI TUMSE - ANJAANA ANJAANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305917.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUMSE MILNA - TERE NAAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306627.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUMSE MILNE KO DIL KARTA HAI - PHOOL AUR KAANTE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306833.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUM TAK - RAANJHANAA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306042.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU NA JAANE AAS PAAS HAI KHUDA - ANJAANA ANJAANI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305916.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUNE MAARI ENTRIYAAN - GUNDAY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306180.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUNE ZINDAGI MEIN - HUMRAAZ
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306804.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUNG TUNG BAJE - SINGH IS BLIING
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306230.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUNU TUNU - YAMLA PAGLA DEEWANA PHIR SE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306445.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TU PAGAL PREMI AWARA - SHOLA AUR SHABNAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306824.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TURPEYA - BHARAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306500.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUTTI BOLE WEDDING DI - WELCOME BACK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306234.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,TUU MERI SARE INTEHA - DUM LAGA KE HAISHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306735.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,UDI TERI AANKHON SE - GUZAARISH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305922.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,UFF - BANG BANG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306135.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,UFF YEH NOOR - NOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306378.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,UI AMMA UI AMMA KYA - RAJA BABU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306827.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ULLU KA PATTHA - JAGGA JASOOS
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306399.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,UNGLI PE NACHALEIN - TITLE TRACK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306209.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,UNN RAHA HAI NA TU - AASHIQUI 2
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306060.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,VADDI SHARABAN - DE DE PYAAR DE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306534.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,VALAM - MADE IN CHINA (ARIJIT SINGH)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306512.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,VASHMALLE - THUGS OF HINDOSTAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306471.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WAFA NE BEWAFAI - TERAA SURROOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306316.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WARNA GABBAR AA JAYEGA - GABBAR IS BACK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306214.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WAT WAT WAT - TAMASHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306266.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WEDDING SONG - SWEETIEE WEDS NRI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306366.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WELCOME BACK (TITLE TRACK)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306235.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WHISTLE BAJA - HEROPANTI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306205.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WOH DIN FILM VERSION - CHHICHHORE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306509.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WOH HO TUM - MUSKAAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306596.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WOH HUMSE KHAFA HAIN - TUMSA NAHIN DEKHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306766.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WOH LADKI BAHUT YAAD AATI - SAD (QAYAMAT)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306780.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WOH LADKI BAHUT YAAD AATI HAI - QAYAMAT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306779.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WOH LADKI JO SABSE ALAG HAI - BAADSHAH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306788.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,WORLD DANCE MEDLEY - HAPPY NEW YEAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306109.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YAAD HAI - AIYAARY
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306491.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YAAD HAI NA - RAAZ REBOOT
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306760.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YAAD SATAYE TERI NEEND CHURAYE - RAJA BABU
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306829.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YAARI YAARI - PURANI JEAN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306158.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YAAR NA MILEY - KICK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306141.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YADAAN TERIYAAN - HERO
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306224.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YAMLA PAGLA DEEWANA 2 TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306078.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YAMLA PAGLA DEEWANA TITLE SONG
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305981.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YEH AAINA - KABIR SINGH
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306515.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YEH DHUAN DHUAN - TUMSA NAHI DEKHA
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306768.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YEH DIL JO HAI BADMAASH HAI - PHIR SE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306468.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YEH ISHQ HAI - JAB WE MET
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306663.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YEH JO HALKI HALKI KHUMARIYA - SON OF SARDAAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306001.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YEH TERA MERA MILNA - AAP KAA SURROOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306668.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YE TOH SACH HAI KI BHAGWAN HAI - HUM SAATH SAATH HAIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306653.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,YUNHI KAT JAAYEGA SAFAR SAATH - HUM HAIN RAHI PYAR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306614.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ZAMANE KE DEKHE HAI RANG HAZAR - SADAK
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306617.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ZARA ZARA - REHNAA HAI TERRE DIL MEIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306550.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ZEHNASEEB - HASEE TOH PHASEE
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306174.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ZINDAGI BANA LOON - SWEETIEE WEDS NRI
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306369.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ZINDAGI BAN GAYE HO TUM - KASOOR
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306645.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ZINDAGI DO PAL KI - KITES
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/305938.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ZINDAGI SE CHURAKE - RAAZ 3
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306792.mkv
#EXTINF:-1 group-title="SONGS | BOLLYWOOD" ,ZINDA REHTI HAIN MOHABBATEIN - MOHABBATEIN
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/306723.mkv
#EXTM3U
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://upload.wikimedia.org/wikipedia/en/1/11/Pushpa_2-_The_Rule.jpg" ,Pushpa 2 The Rule(2024)
http://ftp.ctgfun.com/Indian/South%20Indian%20Movies/Pushpa%202%20The%20Rule%202024%20Hindi%20Telugu%20720p%20PreDvd%20x264%20%5BDDN%5D/Pushpa%202%20The%20Rule%202024%20Hindi%20720p%20PreDvd%20x264%20%5BDDN%5D.mp4
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://upload.wikimedia.org/wikipedia/en/6/6c/Lucky_Baskhar_film_poster.jpg" , Lucky Bashkor(2024)
http://ftp.ctgfun.com/Indian/South%20Indian%20Movies/Lucky%20Baskhar%20%282024%29%20Hindi%20Telugu%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D/Lucky%20Baskhar%20%282024%29%20Hindi%20Telugu%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D.mp4
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/au9T0fYsBXzjUC3Y3cO9hWEjBbk.jpg" ,JIGRA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383673.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/77gbFuFUfXx3OWv6pGhOAfHMBpg.jpg" ,VICKY VIDYA KA WOH WALA VIDEO (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383659.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" ,BAL NAREN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383576.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ky3ousDprUW9D4i8zvHrXQRS9GL.jpg" ,COLOURRS OF LOVE (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383417.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nXrwCSHkQNlfzpIZPyN9IlYmINa.jpg" ,THE SIGNATURE (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383416.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3CasKHr8RtkbIwK2FkYmQGlQbap.jpg" ,AMAR PREM KI PREM KAHANI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383415.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/eKqmGSFR5MLnUr6ayU3IVzLuqOt.jpg" ,KOOKI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383407.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lXmsRFM9Ih6yLu0jsxarTyAfWH3.jpg" ,BINNY AND FAMILY (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383328.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/k2X44bVRQdOo91tB868vVnt7wB.jpg" ,LOVE, SITARA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383301.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/AepCaxPrKEnvP30pwbp9LfDPXXJ.jpg" ,THE HEIST (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383212.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/isW0sXbnqoTV050OX3LoLRr7i78.jpg" ,MAAYA KA MOH (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383165.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xO5MEVQFdFYpjP8TdRz2ktaiNXV.jpg" ,KAHAN SHURU KAHAN KHATAM (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383164.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cwmVHD41mGDQyPyCAsR8x6aMGc2.jpg" ,YUDHRA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383162.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/w35SdKO67nyy51CUQqbK60Vj3Co.jpg" ,JO TERA HAI WOH MERA HAI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383144.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://upload.wikimedia.org/wikipedia/en/a/a2/Mod_-_2011_Indian_Movie_Poster.png" ,MOD (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383037.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vYe4mtJAgNelVUWG5O91bndDYU5.jpg" ,ADBHUT (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/383031.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nBCVdo3NO2UPHO2lnrfZa0NQZfB.jpg" ,BERLIN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/382979.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lPUmaQgDgybVmqYKpiZpmOCims3.jpg" ,THE BUCKINGHAM MURDERS (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/382515.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://www.moviesjagat.co/files/images/poster/Bhed_Ek_Rahasya_(2023)_Hindi_.jpg" ,BHED EK RAHASYA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/382160.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/91EPjmM9RV7f8Vh7CRKE4qf2apK.jpg" ,VISFOT (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/382159.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vtP6LJRFiZF61FEbl9gZBgWpGTd.jpg" ,IMAMDASTA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/382110.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4g4nH4w3Mu5JX3IiZUpQByIQqm7.jpg" ,A WEDDING STORY (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/382099.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vu1Iln6EReT2nHflx1VSlbu2Bpn.jpg" ,THE DIARY OF WEST BENGAL (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/382076.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BZDFhZTY5OTItNTQ2Yi00YzMxLWE4MzgtNDhkYWU2ODMxMmRlXkEyXkFqcGc@._V1_QL75_UY281_CR17,0,190,281_.jpg" ,PAD GAYE PANGE (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/382075.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/noPqNsZralpjpjaBezb0Rb2KWJ2.jpg" ,8 A.M. METRO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344953.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/eebUPRI4Z5e1Z7Hev4JZAwMIFkX.jpg" ,12TH FAIL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372287.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3TaVxo8dhnLcIesvJofN5ZYkI8y.jpg" ,72 HOORAIN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363312.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7bm5k5zwGGvLKelMtbffL4AOH6Y.jpg" ,1920: HORRORS OF THE HEART (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/362811.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="data:image/jpeg;base64,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" ,AADESH (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380031.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wWz1HDrYZXxcRt7L2QSpAs6MrAi.jpg" ,AAKHIR PALAAYAN KAB TAK..? (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375201.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3di6GxX88WeMo9IjMt8BwW9wOq1.jpg" ,AANKH MICHOLI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375059.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9IdjgWe7XzSHflYWfIVTiZyDDYT.jpg" ,AAZAM (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375568.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/dZEHhNuCzYgyq81a6WFJD7bKQEo.jpg" ,AB DILLI DUR NAHIN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375829.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7w17lS75oxMdjWE5mYIgCyisKrm.jpg" ,AB TOH SAB BHAGWAN BHAROSE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371940.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nXttAEX8wpSunKhWu2t1FT7ocgq.jpg" ,ACCIDENT OR CONSPIRACY: GODHRA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379718.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="data:image/jpeg;base64,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" ,ADAVAT (
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371969.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1H2xEZOixs0z0JKwyjANZiKNNVJ.jpg" ,ADIPURUSH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/356443.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gOFBpQBRcPFZWEkzRWnQgQHku4T.jpg" ,AE WATAN MERE WATAN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/376070.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/deBTwlgJ6vrup7zpCODofbebZGZ.jpg" ,AFWAAH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344678.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/biX8D3kSh4HuZzf1r0ynRgaEJte.jpg" ,AGRA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380482.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://www.ofilmywap.sx/files/images/Ajab_Gajab_Dhamaal_(2024)_Hindi_Movie.jpg" ,AJAB GAJAB DHAMAL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374787.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ygHDIwhBd5JBUCi8yZgGu9H2nR0.jpg" ,AJMER 92 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/368909.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pPbLh3EuvcGrxhpOMfK5XIUT1az.jpg" ,ALIYA BASU GAYAB HAI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380314.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xPV6gfhmybAUg8TebT9PKlV8EkE.jpg" ,ALL INDIA RANK (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375398.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5OKVJdLBFB2EOjCNpZlnu09HVL1.jpg" ,ALMOST PYAAR WITH DJ MOHABBAT (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/311813.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lipzcJAVfRJsvXteDgvrjqjEL8D.jpg" ,AMAR SINGH CHAMKILA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377283.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9Jbsa4KSf5Dwwwy4hku4gkRg17A.jpg" ,AMEENA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378176.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yT2nVvqENNnHYkVIm258ipiSB8Z.jpg" ,ANGITHEE 3 (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375641.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg" ,ANIMAL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373156.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wpOTqABDilffZJttzW905FRIfNx.jpg" ,APURVA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372718.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9VTemjHMpyxzfC3JsG2aFy8Bf9Y.jpg" ,ARTICLE 370 (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375322.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/dNJrK1uvoBPoYEVTAqI8ZSyrpdI.jpg" ,ASEQ (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/362810.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/75BAvjIU5yAnNAJRF7uVorBnNRd.jpg" ,AUGUST 16, 1947 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/340821.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cKvom4C6fGIM1sOKINkBi7oCqok.jpg" ,AURON MEIN KAHAN DUM THA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380118.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/d9hyR5FRUfIxd6HhOMt3lfw5UA8.jpg" ,A WINTER TALE AT SHIMLA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371296.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="data:image/jpeg;base64,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" ,AZAM (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345197.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://imgshare.info/images/2023/08/18/5e25d7e024a3ee51cdbd042fe9f97467.jpg" ,BACHHA GABBAR KA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370046.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BYjk5NmQ5ZDEtZWFlZi00NDVjLTlhZGYtZTNjZWE3Y2Q5MzkxXkEyXkFqcGdeQXVyNzIzNDA1MTQ@._V1_.jpg" ,BAD BOY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344511.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ote8HmQOgmoAfqFaqVKsEdgD2q4.jpg" ,BADE MIYAN CHOTE MIYAN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377248.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://fs1.extraimage.org/picupto/2023/07/22/Badmaash-Babes-2022-Hindi-1080p-HDRip-ESub-1.8GB.jpg" ,BADMAASH BABES (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/368948.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qDlqxGATpYBWqGciPB4tmQm3bFT.jpg" ,BAD NEWZ (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379669.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kl16eqkdZ8AA8GfAk0xrXp09GTB.jpg" ,BAGHA JATIN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372107.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yZrAUCMqg5pT6WJRnZ0BA0WXCoT.jpg" ,BAJRANG AUR ALI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378597.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pjzrQXwFCodpxLhnKI1BcyGiuli.jpg" ,BARDOVI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380210.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/N6yYSmGHnT38plOCaadlVcQH02.jpg" ,BASTAR: THE NAXAL STORY (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375869.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kT0mA3kYzvl2UZGxhJnLyTUYa2z.jpg" ,BAWAAL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/368905.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BOTE1OWI1ZTAtYWIzZC00ZTU2LThlZDYtNTBiYTFhZmU4MTI2XkEyXkFqcGdeQXVyODA2Mzc0MDI@._V1_.jpg" ,BED NO 17 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377069.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nEMp5Nidr97gpuBlyEh1TMCmRaz.jpg" ,BHAIYYA JI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378250.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2eCELoyf0l3njFKfn3oddo3JaRG.jpg" ,BHAKSHAK (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375011.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sJ3uHEY9LLP0BpdPy0KlJzYnmkv.jpg" ,BHEED (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/323757.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/w8paJrxs5QLAUqzhsnurdBuxiWJ.jpg" ,BHOLAA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/328731.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oM8BXWDuqfzvq0erG3ErPTwQUe5.jpg" ,BHRAANTI AN ILLUSION (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344501.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3na9yLIz6j2Q44dzMEHWeSDg4Ef.jpg" ,BLACKOUT (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378580.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xQZwovI3SD0slOkTM7a2fNjRQxD.jpg" ,BLIND (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363082.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gX8k6oKpIsWHpfWNz3Bu4wUuliA.jpg" ,BLOODY DADDY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345743.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/fsnI89zd3vpkXCBkBPgTrZmInur.jpg" ,BLOODY ISHQ (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379950.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/12VEUEHebd9ydQs0Y4ikzb179LY.jpg" ,BODYGUARD (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379071.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8VszbVarbnPamsVwQAZDUCpIcfG.jpg" ,BOO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345196.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cAdB4yxtzjP8zzxNjJLAAYpO3Lm.jpg" ,CANTT ROAD: THE BEGINNING (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370049.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/fjeOsh6R3tw4HFLxpnNt3PsfAar.jpg" ,CASCADE (2023)*
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379933.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/hielGItVUX7hu4vlPJxT3LUl1E4.jpg" ,CHALTI RAHE ZINDAGI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379935.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" ,CHANCHAL HASEENA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380659.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/AprEYzaWgMuSQtJXMxz1P5Z3e3P.jpg" ,CHANDU CHAMPION (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378726.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mkEQiWvOp4MYElFfnFv8jqajVPR.jpg" ,CHENGIZ (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/342085.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yj6QBEx3QMMxfz5AqDtFEgvlfSb.jpg" ,CHHATRIWALI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/310215.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1MIDERaEUMw1rYDM99tGZPY80Ap.jpg" ,CHOR NIKAL KE BHAGA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/321556.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4Ny4dJiSpcMlFuQyROg4DydJouL.jpg" ,CHOTE NAWAB (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378797.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BMzdkNWE5MTgtNzgwZi00ZTcxLThlNGQtYmFhMDc4ZTEyZjk0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" ,CRAKK JEETEGAA TOH JIYEGAA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375323.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8mnCtQngfhYt0W0BmkrCePutmvy.jpg" ,CREW (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/376973.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/Vu2FL34N0ZxWoYqkLhUR9O1KTx.jpg" ,DAAYRE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373767.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4dJ0ktBUmnrAIw6i1p61WTTbz3H.jpg" ,DANGE (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375523.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/b7rb2gzXa6sL0WC9CeXgXE7Mioq.jpg" ,DARRANCHHOO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371933.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jMyD3RjhzEKVgGaG860Y4AAP1QJ.jpg" ,DASHMI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375172.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lo6S9EWMbNetnTXGOajUCLl8Owo.jpg" ,DEDH BIGHA ZAMEEN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378380.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-148786,resizemode-75,msid-107974418/news/international/us/demon-slayer-2024-movie-heres-what-we-know-about-release-date-streaming-schedule-what-to-expect-cast-and-more.jpg" ,DEMONS (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377457.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/l3VtG2LeHL0AGnDC8dsDwmPu5PK.jpg" ,DHAK DHAK (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371877.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2jQbzDAsoYIhgYKSSyXya4kX85J.jpg" ,DIVIT (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/340793.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2eDWmo69uPMKPzxVY5KKkf8vOMi.jpg" ,DO AUR DO PYAAR (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377472.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ewDBUMMrCSwm5r4pTCaYlIkIuXM.jpg" ,DONO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371581.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gvNeqDNwZ8isym8CeHZsZk1QiSJ.jpg" ,DREAM GIRL 2 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370082.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lse7qPwWpYi0bdjmjrXfam7KpXg.jpg" ,DRY DAY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373771.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mbeJh5s3q19JqQSiqquYo4fZIgh.jpg" ,DUKAAN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377112.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kPRb1mbVHGop0egQ7153y0lhzGL.jpg" ,DUNKI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373764.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/baURi2ePyh110YGNH5nq3lruWD3.jpg" ,EK KORI PREM KATHA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379897.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://www.magzmumbai.com/wp-content/uploads/Roshni-Kashyap-Rishabh-Sharma-in-film-Ek-Naradham.jpg" ,EK NARADHAM (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/311355.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BZjU3ZTA1NjUtZDFlNy00NDIwLThjZDAtN2EzMWZiZDg4NDVkXkEyXkFqcGdeQXVyMzM2MzQzNTQ@._V1_.jpg" ,EK THA HERO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/315923.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zm44m39czUrFME5p6O0owMz7z6D.jpg" ,FARAAZ (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/328783.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ihdqS2PvRcjN1i9ozQxtyoKvBX.jpg" ,FARREY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372997.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zDZowwb9GZGEctAu2PCpjiPQAMM.jpg" ,FIGHTER (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374656.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7jRrTQInT31hO81ATDuL3TNDOE9.jpg" ,FRIDAY NIGHT PLAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370504.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1E5qIvLBNrv4onx5SxnNz5Monac.jpg" ,FUKREY 3 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371360.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/brCBYKGQaxZZcwmFF6OIxZLdKVU.jpg" ,GADAR 2 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370415.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8z4XIHUKlni69c5dZWPbSBzJTg1.jpg" ,GAME OVER (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374658.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/z5kngie7G0bR9CL3tcWhZLwIpIc.jpg" ,GANAPATH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372069.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7MKuFlrrLJtiV49sxL4P640KP6M.jpg" ,GANDHI GODSE EK YUDH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/310370.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8D3lObq5pv7lH0o5tny908SldKf.jpg" ,GASLIGHT (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/328784.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ghaznavi-et00353234-1677052153.jpg" ,GHAZNAVI (2023) SCAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312808.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6npQ0MxlmCqPPF8H5xK4yGt7ZLL.jpg" ,GHOOMER (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370048.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/njUkW5MEWOBogouci5rfmF8TSDY.jpg" ,GHUSPAITHIYA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380313.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="data:image/jpeg;base64,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" ,GRADUATE WITH FIRST CLASS (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/376117.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9ovEm6ush0W19f1lV8Q3XN6l8uJ.jpg" ,GULMOHAR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312767.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tFaQuuz26BKMXdcDxLrlmVNQlM7.jpg" ,GUMRAAH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/340820.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nThbym8MQhyW5qORaOBwdiz6sAf.jpg" ,GUNEHGAAR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345746.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6fXh8g5YRPoCbYjqcSaKkorf03m.jpg" ,GUTHLEE LADOO (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371970.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ntePxxFjnYQoBTIPHq1H1aj3gwH.jpg" ,HADDI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370639.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7m2XD7WducMBegSF1vnhOyIzSPl.jpg" ,HAIWAAN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375215.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ey2CKXPkTDMUv5VeltHCc4rrDeZ.jpg" ,HAMARE BAARAH (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378849.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/shOgVSYQgDoRjevLi1t3TExLDSL.jpg" ,HEY KAMEENI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373879.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wnwkSps8oAJteTzXqjELSMHFBKt.jpg" ,HINDUSTANI 2 (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379401.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sCkwIC1al8FukrrRYFQOk2fxmHZ.jpg" ,HOUSE OF LIES (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378376.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="data:image/jpeg;base64,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" ,HUME TOH LOOT LIYA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345171.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/n3tDKjw14Ig3suHOx8GSBtCxEX7.jpg" ,IB 71 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344780.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8pksVd0XEpuot0QfLI9BIZq3x92.jpg" ,I KILLED BAPU (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371415.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/u04epjbCqF6xx2G5fR9TV1IM8Wu.jpg" ,I LOVE YOU (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/356101.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rBC4KmKsAImwKiWcX9DCFd43t9h.jpg" ,INCAR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312789.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/fPoiIfqmVfNYZRVUtfTSyuAj8Tw.jpg" ,INDIAN 2: ZERO TOLERANCE (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380309.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/h063MhmRssjzCGEsu6NuSGjpLla.jpg" ,ISHQ-E-NADAAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363446.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bJ9fGn0t9XO2Mjz1P05OQh76AaI.jpg" ,ISHQ VISHK REBOUND (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378856.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7XKdjkvq9Z2arK0DXxoEZKXRV4K.jpg" ,JAANE DO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/368862.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oaUOV9VCNM5MjrmonqgH4o3XNwQ.jpg" ,JAANE JAAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371128.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg" ,JAWAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370642.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rlPTdgLfgsSv8WiQXRZ2AVIDwAi.jpg" ,JIGARTHANDA DOUBLEX (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372649.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oxO0wGxxyaXGTPG5XIIvn7KTZ8O.jpg" ,JNU: JAHANGIR NATIONAL UNIVERSITY (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378854.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/npQpUMeNLOempcA5I6PzNOXvIl8.jpg" ,JOGIRA SARA RA RA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345183.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/r5QNn8wyKlVb4J5tRmhNFvqmT68.jpg" ,JORAM (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373471.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ncSNPsoB67lkkbJpbPP3RMRmUTq.jpg" ,JOURNEY OF LOVE 18+ (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370899.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1oAlwHBW5sOrhqmARQYnic5EhM6.jpg" ,KAAGAZ 2 (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375519.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5Fw5log9OJLSCKdbZDpeyLNUSgM.jpg" ,KAAM CHALU HAI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377454.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/eB7VUbPWvbohPvmYn22XAtpmcvU.jpg" ,KADAK SINGH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373456.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://i.ibb.co/DQ0Fsqk/Kaisa-Yeh-Fitoor-2023-Hindi-SM-WEB-DL-H264-AAC-1080p-720p-480p-Download.jpg" ,KAISA YEH FITOOR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372245.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kc16Hwkst3GOfjqdfglSO1b3UjN.jpg" ,KAKUDA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379387.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rstcAnBeCkxNQjNp3YXrF6IP1tW.jpg" ,KALKI 2898-AD (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379027.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sT02AqTJjztmM6gYe5O0IL0CnqT.jpg" ,KANJOOS MAKHICHOOS (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/321554.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ow3EDBT6FxjyzWIPsYVaB0uuigu.jpg" ,KANWAR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/341160.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qKw7thGAiGsn6jw9gqR5FbPxWFC.jpg" ,KARMA STRIKES (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312765.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/upOZls6aZMSVBSEPTPlMTrP7IVb.jpg" ,KARTAM BHUGTAM (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378147.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qVPi2al8xTqblfZazbmQB09sKVw.jpg" ,KASOOMBO (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377769.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tHlcVOKR3s2gpUljrtBm5MaMqH5.jpg" ,KATHAL: A JACKFRUIT MYSTERY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344927.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/32P0oQf41HXbENRGtu2h0rqBF2k.jpg" ,KHEL KHEL MEIN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380418.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tIbcDgeW7KoN1R9JME76pgyF5XI.jpg" ,KHICHDI 2: MISSION PAANTHUKISTAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372785.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/faBlHGSclZX96MOUiQowSOJOO5J.jpg" ,KHO GAYE HUM KAHAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373948.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bbHUuTEo2DsYLoXCjkL8kB0oPhy.jpg" ,KHUFIYA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371562.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg" ,KILL (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379221.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yJ2JqgfWniQLnXPM5WkM7f1rqaY.jpg" ,KISI KA BHAI... KISI KI JAAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/342067.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/t9R05SjYwdn2pzg3Pomm9SpqJFY.jpg" ,KUCH KHATTAA HO JAAY (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375169.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BZGMwYWNiNzktNjE3ZS00MGRiLWFjNTUtMjVlZmMxZGJjNDI1XkEyXkFqcGdeQXVyNjU4MzU3NDg@._V1_FMjpg_UX1000_.jpg" ,KUNWARAPUR (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380413.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bwJHR0qzAvJLKy7EioiSRu0QivY.jpg" ,KUTTEY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/309776.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yXt07MYeiyQRzS69PMHy0BPjCGP.jpg" ,LAAPATAA LADIES (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375476.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tgyHSVTw42PMHxnq0KOXbTVwu5C.jpg" ,LAKADBAGGHA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/362947.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qvC36WiMHg3WPhGTyb8E1SWaW0Y.jpg" ,LANTRANI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374996.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bTXJTmMn37imtkvSVO09t5UQ4mU.jpg" ,LAVASTE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345268.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BZTMwMGY2NTQtNzAxOS00ZTMzLWFlNmMtNTc1ZmE2N2YwZmE1XkEyXkFqcGdeQXVyMTMyMjYwMDI0._V1_FMjpg_UX1000_.jpg" ,LA VASTE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377111.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yRQkH26GZ7Qp9xkAMfmVNnkb1Ez.jpg" ,LOST (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312188.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BOTlkZGJkODAtMGFmNC00M2NhLWIwNjEtYmE1YWI1YWUyNzEwXkEyXkFqcGdeQXVyODc0OTI3NTQ@._V1_.jpg" ,LOVE-ALL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370503.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4TpMrY6h1wzT5rkQJlaqSIfuslq.jpg" ,LOVE IN A TAXI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/328742.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ywUtbLJngSqykpxiIHIqJNA06EX.jpg" ,LSD 2: LOVE, SEX AUR DHOKHA 2 (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377469.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uN7D0qrFOZ31F8ee2vVUaDq0lkR.jpg" ,LUV KI ARRANGE MARRIAGE (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378741.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1526J8qCvVi71SIzHIk1GSXU9Wh.jpg" ,LUV YOU SHANKAR (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377473.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kS1s8FKLWFR6cn1rlVUyqURb5os.jpg" ,MADGAON EXPRESS (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/376113.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6TNrS4KaKTQPWZzX6IEK7hvDHdT.jpg" ,MAESTRO (2021)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380721.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4EiX4tCXxd4Avk7IVNouGgCR4Ba.jpg" ,MAHADEV KA GORAKHPUR (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/376990.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lsuUGtUzrzEnlIUjVRSqFNUMZEz.jpg" ,MAHARAJ (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378851.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rJ2aIlkoIhYDVHVR4S1LFVTjCMe.jpg" ,MAHARASHTRA SHAHIR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345521.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/eKbAVKQf6choCfasNWuYoSTOPBP.jpg" ,MAIDAAN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377219.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tBiTGjPXGXHpdyPRKSVfAYqxz6R.jpg" ,MAIN ATAL HOON (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374578.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BZTY4NTlmZmQtYzI2Ny00ZmIxLWJkMjEtMGIxMzU2YTMyMGRmXkEyXkFqcGdeQXVyNDM2NjkyNDA@._V1_.jpg" ,MAJNU KHARCHILI LAILA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/314801.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/is17siyU3Cm6OQM771iB2gTsSgj.jpg" ,MALHAR (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378655.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BYTUwN2VkOGEtNDY5NS00NjA3LTlmZmItMDRkYzAzODI2YjY5XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg" ,MANGALAVAAR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373655.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3Eh52dsIdT9sM3ceCPvoaBRE4cM.jpg" ,MANUSH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373001.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/fvmoPUbo3BoTAfboT9TsnQwPdnP.jpg" ,MARRIAGE.COM (2023)*
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378296.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://ww1.filmyzilla.training/files/images/Marriage_Me_Dhamal_(2023)_Hindi_Movie.jpg" ,MARRIAGE ME DHAMAL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/340751.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/l2y2693EHKtrpNtOuy0goF38XZX.jpg" ,MAST MEIN REHNE KA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373454.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6nVZjYv9tflNkhWJvK8SF0GXCyQ.jpg" ,MINUS 31: THE NAGPUR FILES (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/368991.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rYlbpbtLGMlWOnFrvBKa1LTcvOC.jpg" ,MISSION MAJNU (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/310235.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://c.saavncdn.com/559/Mission-Raniganj-The-Great-Bharat-Rescue-Hindi-2023-20230922190804-500x500.jpg" ,MISSION RANIGANJ THE GREAT BHARAT RESCUE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371595.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/x1v8Qzvp46WEpxoBFlqaGfSsAxw.jpg" ,MR. & MRS. MAHI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378382.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6a4BLbBLqag3iAxtzyq3D4X1SDs.jpg" ,MRIT (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/340753.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uy26E04DxYdICergibgtAFIUuDo.jpg" ,MRS. CHATTERJEE VS NORWAY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/316029.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wEKwOfgo3IMGNNGkDF0WJQtrmIx.jpg" ,MRS. UNDERCOVER (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/341163.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xdbEuFGkmzCcP2C3Doa0iETMArh.jpg" ,MUNJYA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378593.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/joU5VihgUvkhyPnhzxfjmWk32rd.jpg" ,MURDER MUBARAK (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375870.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/s6wD5v2UFbwzmxQZnbhERlD0yxK.jpg" ,MUSIC SCHOOL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344783.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yHLEle6lz50GH97D7bAcingUlxG.jpg" ,NEEYAT (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363310.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gxDjPPJsa6u5Cs0V4WDj11iqMsj.jpg" ,NON STOP DHAMAAL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370047.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lOS4s5BY75eqGBULDi8Pfn1lznz.jpg" ,NRI WIVES (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345229.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kApiO3oL6t100aCtkcwEhk2kqgK.jpg" ,OMG 2 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370414.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/edHRoFYs4Qg80MfOM6DrCzK0KVp.jpg" ,ONE FRIDAY NIGHT (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369359.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/74POACvCFXj6ckfvxHJzvE32jd4.jpg" ,OPERATION FRYDAY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/310426.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/riHtNCga1E2jGyZuWI6jxuGNWVh.jpg" ,OPERATION MAYFAIR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345163.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lYKhXtKEngSP0GE8Uax1I74Azzw.jpg" ,ORANGE LILLY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373719.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uOkSmZV80onEP8LRIbJ0OpKgQxs.jpg" ,OUT OF TIME (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373638.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://picsxtra.com/images/2024/07/02/0-2x3.md.jpg" ,PANCHAYAT ZAMEEN KI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379145.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg" ,PATHAAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/310356.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/A2rFSihwKXEp6kxdxHJPaLaCw39.jpg" ,PATNA SHUKLLA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/376387.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://www.skymovieshd.me.in/files/images/Phaans_(2024)_Bollywood_Hindi_Movie.jpg" ,PHAANS (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374931.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/hsPvwNyBupTa1JlVEYUWvIVNl7p.jpg" ,PINKY BEAUTY PARLOUR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/341179.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/70K1fbeGsQ1ujdiKw4FsWSbZbR6.jpg" ,PUSHTAINI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378912.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yWk8mO3rUKK7YyFaQ2frnKFjyy4.jpg" ,PYAAR HAI TOH HAI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372157.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/32Qz0v7TVnStu3h5AzR1WfuhyNk.jpg" ,PYAAR ISHQ AUR POSSESSION (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379871.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/goRKDzysaYPxcjq9sr6VMHUm8om.jpg" ,RABIA AND OLIVIA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312553.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/asKw9WwRPFpuAwiGuarPCelE9Yx.jpg" ,RAUTU KA RAAZ (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379056.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yV9K6ZGplZbmLR7fL9tysz8JIcJ.jpg" ,RAZAKAR (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377667.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8eEqMk00XeGqbmS3Lrfm00ETusx.jpg" ,ROACHED (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/340752.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vTQIqlxUkOuyf2UKhlM2OUaFGKz.jpg" ,ROCKY AUR RANI KII PREM KAHAANI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/369371.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rZFOBPoiOBToSgzHe62FQZbIrP.jpg" ,ROSH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345058.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/eBJVmuGbgq4gCKSbF1k9OuJBcBH.jpg" ,RUSLAAN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377622.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9HqvelCldr8rIGfFkyNMg4MHWYk.jpg" ,SAFED (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374039.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xkDtXIlQBtkaHSjL6NyUsZREZTe.jpg" ,SAJINI SHINDE KA VIRAL VIDEO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372288.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wbonIVQaGmtUkZnlPIqpUBCIFdy.jpg" ,SALAAR: PART 1 - CEASEFIRE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373772.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/dFQytJBHxcueASNKcv97Ps2mRW0.jpg" ,SAM BAHADUR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373155.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BNWJjYjdhMTgtZTVjYi00YzRiLTgwNjAtNjc0ZmUzNDRkODVhXkEyXkFqcGdeQXVyMTEyMjkzODU1._V1_FMjpg_UX1000_.jpg" ,SAMOSA AND SONS (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373146.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/t9Rd5Gw9e9FqHdX2Si5ZnEusdoa.jpg" ,SANTOSH (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379719.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/b1FA9I8c12UTU3a5YCi1MUtAWnu.jpg" ,SARFIRA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379400.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/99DkKzMm7SrNw8p6jozCkKmOnTy.jpg" ,SATYAPREM KI KATHA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/362922.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gq1Es7NTM3LPjvvnnadFd6hgcmj.jpg" ,SAVI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378403.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/s8jg24AsNAagX1ZJMZd6J4fPRTv.jpg" ,SCAMMY BOYS (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375167.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1QU1MCj0gFEZzIKl6pbfLsfClbJ.jpg" ,SELFIEE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312565.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BYTcxM2M5MDMtYWEwYy00ZmExLWJmOTgtNjIwMmRkNTk4M2Y4XkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_QL75_UY281_CR46,0,190,281_.jpg" ,SERGEANT (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/362938.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BYWNiYWU0M2ItM2ZlOC00NDRmLTk0MWQtM2Y2MjAxNjI5MzUzXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg" ,SHAITAN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375656.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oTpaw9dTBNUooqrQ9x9LyHmjBkx.jpg" ,SHANAYA - AN UNSOLVED MYSTERY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/362907.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vJc61J8aZvLz49BHQ7MXyjgQCzk.jpg" ,SHARMAJEE KI BETI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379053.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bQAr7bL7NVVUOornTs30Ma61zPK.jpg" ,SHASHANK (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/362906.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/65TUjulAyxoKFvkghXxusDYzVns.jpg" ,SHASTRY VIRUDDH SHASTRY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372612.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xxtCfFhjaKO5JfJhY7IWDDuhuwO.jpg" ,SHASTRY VIRUDH SHASTRY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374038.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rcKbsGBZCwDs1sVXNkGHqEVLzQW.jpg" ,SHEHZADA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312226.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5BQ08rSNniscpTEl2VAQNNAY6LC.jpg" ,SHIV SHASTRI BALBOA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/311933.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sazCl3nmMzwpjNkePfcSm2XYmau.jpg" ,SILENCE 2: THE NIGHT OWL BAR SHOOTOUT (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377376.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/i8wMjVoQOyo9XUOrQk60WCcklCj.jpg" ,SIRF EK BANDAA KAAFI HAI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345091.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BM2MwYTM3NjctZDZhNS00NTIwLThhNDctOTNjN2IxYzc1MTk1XkEyXkFqcGdeQXVyMTYzMjE0NjM@._V1_FMjpg_UX1000_.jpg" ,SIR MADAM SARPANCH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375423.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kNhNUoZcdEIThFQTQPhzx78og9K.jpg" ,SIYA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/356442.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nkWF1jIMQqWZSShNTAdBUqrdFsZ.jpg" ,SRIKANTH (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377958.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/volrYUHHPHJYPfdukDVcZ9xCYQa.jpg" ,STARFISH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373002.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3ND7BIj94JSDhnVKOEcsSDwRLem.jpg" ,STORY AVE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374904.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zgxpT5Q5pe3FtL99F0UOIglPGrQ.jpg" ,STREE 2 (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380410.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1MHZRVa4TKrVtVe5vZJRs4QIx8H.jpg" ,SUKHEE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371210.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vk0TctYXqWMNzHSXWgljYK9nUVb.jpg" ,SULAIKHA MANZIL (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345288.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kuOJvP8YxynEKn5SMKoEc1CEMXP.jpg" ,SUMMER IN RED (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379057.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1mLVbGHviitXzDb8A2ATpOn9adO.jpg" ,SWATANTRYA VEER SAVARKAR (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/376104.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nAyEiIDGZHYFPaGMBdVcBCqwOnD.jpg" ,TARLA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363081.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2ylKeJmF1ZHJ5FE3CwL7TMIFJ1j.jpg" ,TEJAS (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372286.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6YyXQWbKqGjp8M4gQ8tUApPoCys.jpg" ,TERA KYA HOGA LOVELY (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375724.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vwsBpnwmMO0xtIgxvCrViJgZhVj.jpg" ,TERI BAATON MEIN AISA ULJHA JIYA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375013.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BYzc2NWVhM2YtMTlkZS00Nzg3LThiMWYtM2ExYzBkMzJmNDJiXkEyXkFqcGdeQXVyNDU1NTgyNjU@._V1_.jpg" ,TERI KHATA (2022)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344449.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/f6XB8v38Y49ts4bklaHuCHuJKCf.jpg" ,THANK YOU FOR COMING (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371618.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://fs1.extraimage.org/picupto/2023/07/16/Maaveeran-2023-Tamil-1080p-PreDVDRip-3.4GB-Download.jpg" ,THE FIGHTER SUMAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363962.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9Gxe853oX3URrNj8PKGfvoBF3tx.jpg" ,THE GREAT INDIAN FAMILY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371211.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/R5k4e4dz04phVenZCp7ENz2VFA.jpg" ,THE LADY KILLER (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372537.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9fz0I7piUbwzqDZexJeUlMm6L8Q.jpg" ,THE LADYKILLER (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379967.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/s4i7ZccAZcBeS0br4OsypZ7xr3e.jpg" ,THE LAST COFFEE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312133.mp4
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nFMPayo7qfQKoMmGytBzR4K7sSq.jpg" ,THE RECEPTIONIST (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345349.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4XuS7kJjR0wg8BNmazdNYmwoJJu.jpg" ,THE SONG OF SCORPIONS (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344502.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-tenant-et00350353-1675235671.jpg" ,THE TENANT (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312063.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gSmwfAVKmfUBAkG9GZoI5RkBsLM.jpg" ,THE UP FILES (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380044.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ceWCWvbEogkXU1It8gH1l2rcfEJ.jpg" ,THE VACCINE WAR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371375.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/hCIHaorKVzsY8qLpEv9wYmBIBl1.jpg" ,THE Y (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/308397.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5KQTxjyfhbSrsjkgG1oKFWIIaKN.jpg" ,THREE OF US (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372538.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7wgED7Yx9VLcNWSO91VgwicHmMD.jpg" ,TIGER 3 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372673.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5VteTuZZ8ZhHUFPYTk9UIunYQAP.jpg" ,TIKDAM (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380664.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5mp4KqqVU6uUNwnpYqAtthik1DB.jpg" ,TIKU WEDS SHERU (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/362650.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qxzaYYRAH6gZoyJlnajCvYeL6Ms.jpg" ,TO KILL A TIGER (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375720.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kpGnnQ0zu1Utxh8F0QUgZ9d2hol.jpg" ,TRIAL PERIOD (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/368902.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/k3zltzxeK7JpGd3lYH4OwzACHyj.jpg" ,TRISHA ON THE ROCKS (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378874.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="data:image/jpeg;base64,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" ,TU JHOOTHI MAIN MAKKAAR (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/314783.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ziz7A8NgRExxeCxmTYGE6VGuMKs.jpg" ,TUMSE NA HO PAYEGA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371454.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="data:image/jpeg;base64,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" ,TWO HEARTS (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344447.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3nyMIlmfknVJRlxETTnuFSuVkGz.jpg" ,U-TURN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344476.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tRTaE89m8As6G6aqgYjCBmm6MKN.jpg" ,ULAJH (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380114.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/54P4qVJjwlFb5O3QVyv3pjDQpyQ.jpg" ,UNWOMAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377493.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sgJ5fr71NGfy7QGXPEx46g8LuNL.jpg" ,UT 69 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372475.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lOqxIxX6tSjEB7J5mqktFxPhUZy.jpg" ,VEDAA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380421.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BNTQwYmMzOTEtYzMyMC00YWFiLTkzM2UtZTBlNjM0ZWQ0MDYxXkEyXkFqcGdeQXVyMTc4Njg5MDI1._V1_.jpg" ,WELCOME WEDDING (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379881.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/185ag4JOB1fYL5ixnzRGWtuVoKY.jpg" ,WHO AM I? (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372981.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5EpIjplAtUiFyjR6C2gYN6xPiCP.jpg" ,WILD WILD PUNJAB (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379347.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/h3DsI8axwLe44jQD4W2L02GVHv6.jpg" ,WOH BHI DIN THE (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/376386.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zcy8ZFwnzMhB32RaPArpj2XASP4.jpg" ,YAARIYAN 2 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372089.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/i9IYAo3cnrUa7ZWRVd6reTFFP0F.jpg" ,YEH SHAADI NAHI HO SAKTI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370537.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/fqBoeTYdYjUTDmSlaOIyBjphPsg.jpg" ,YODHA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375867.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wIziBCZWsDCzFbil4iT9TyUOnhT.jpg" ,ZARA HATKE ZARA BACHKE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345519.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8qZW4n704CjO2QWnM3uxPQ2ghW6.jpg" ,ZEHAN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374829.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8JTSyqOWnUSUZLj6Ybw2oq8G9oj.jpg" ,ZINDAGI SHATRANJ HAI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/310291.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cy5prmLqNUVOqfEqa0ArhqIRDB1.jpg" ,ZWIGATO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/316027.mkv

#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="data:image/jpeg;base64,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
http://xtv.ooo:8080/movie/boss7770035788/
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="data:image/jpeg;base64,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" ,AZAM (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345197.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://imgshare.info/images/2023/08/18/5e25d7e024a3ee51cdbd042fe9f97467.jpg" ,BACHHA GABBAR KA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370046.mkv

#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2eCELoyf0l3njFKfn3oddo3JaRG.jpg" ,BHAKSHAK (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375011.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sJ3uHEY9LLP0BpdPy0KlJzYnmkv.jpg" ,BHEED (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/323757.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/w8paJrxs5QLAUqzhsnurdBuxiWJ.jpg" ,BHOLAA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/328731.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oM8BXWDuqfzvq0erG3ErPTwQUe5.jpg" ,BHRAANTI AN ILLUSION (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/344501.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3na9yLIz6j2Q44dzMEHWeSDg4Ef.jpg" ,BLACKOUT (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378580.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xQZwovI3SD0slOkTM7a2fNjRQxD.jpg" ,BLIND (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/363082.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gX8k6oKpIsWHpfWNz3Bu4wUuliA.jpg" ,BLOODY DADDY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345743.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/fsnI89zd3vpkXCBkBPgTrZmInur.jpg" ,BLOODY ISHQ (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379950.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/12VEUEHebd9ydQs0Y4ikzb179LY.jpg" ,BODYGUARD (2011)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379071.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8VszbVarbnPamsVwQAZDUCpIcfG.jpg" ,BOO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/345196.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cAdB4yxtzjP8zzxNjJLAAYpO3Lm.jpg" ,CANTT ROAD: THE BEGINNING (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370049.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/fjeOsh6R3tw4HFLxpnNt3PsfAar.jpg" ,CASCADE (2023)*
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379933.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/hielGItVUX7hu4vlPJxT3LUl1E4.jpg" ,CHALTI RAHE ZINDAGI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379935.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" ,CHANCHAL HASEENA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380659.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/AprEYzaWgMuSQtJXMxz1P5Z3e3P.jpg" ,CHANDU CHAMPION (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378726.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mkEQiWvOp4MYElFfnFv8jqajVPR.jpg" ,CHENGIZ (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/342085.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yj6QBEx3QMMxfz5AqDtFEgvlfSb.jpg" ,CHHATRIWALI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/310215.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1MIDERaEUMw1rYDM99tGZPY80Ap.jpg" ,CHOR NIKAL KE BHAGA (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/321556.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4Ny4dJiSpcMlFuQyROg4DydJouL.jpg" ,CHOTE NAWAB (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378797.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BMzdkNWE5MTgtNzgwZi00ZTcxLThlNGQtYmFhMDc4ZTEyZjk0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" ,CRAKK JEETEGAA TOH JIYEGAA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375323.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8mnCtQngfhYt0W0BmkrCePutmvy.jpg" ,CREW (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/376973.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/Vu2FL34N0ZxWoYqkLhUR9O1KTx.jpg" ,DAAYRE (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373767.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4dJ0ktBUmnrAIw6i1p61WTTbz3H.jpg" ,DANGE (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375523.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/b7rb2gzXa6sL0WC9CeXgXE7Mioq.jpg" ,DARRANCHHOO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371933.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jMyD3RjhzEKVgGaG860Y4AAP1QJ.jpg" ,DASHMI (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/375172.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lo6S9EWMbNetnTXGOajUCLl8Owo.jpg" ,DEDH BIGHA ZAMEEN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/378380.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-148786,resizemode-75,msid-107974418/news/international/us/demon-slayer-2024-movie-heres-what-we-know-about-release-date-streaming-schedule-what-to-expect-cast-and-more.jpg" ,DEMONS (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377457.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/l3VtG2LeHL0AGnDC8dsDwmPu5PK.jpg" ,DHAK DHAK (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371877.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2jQbzDAsoYIhgYKSSyXya4kX85J.jpg" ,DIVIT (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/340793.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2eDWmo69uPMKPzxVY5KKkf8vOMi.jpg" ,DO AUR DO PYAAR (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377472.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ewDBUMMrCSwm5r4pTCaYlIkIuXM.jpg" ,DONO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371581.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gvNeqDNwZ8isym8CeHZsZk1QiSJ.jpg" ,DREAM GIRL 2 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370082.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lse7qPwWpYi0bdjmjrXfam7KpXg.jpg" ,DRY DAY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373771.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mbeJh5s3q19JqQSiqquYo4fZIgh.jpg" ,DUKAAN (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/377112.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kPRb1mbVHGop0egQ7153y0lhzGL.jpg" ,DUNKI (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/373764.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/baURi2ePyh110YGNH5nq3lruWD3.jpg" ,EK KORI PREM KATHA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/379897.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://www.magzmumbai.com/wp-content/uploads/Roshni-Kashyap-Rishabh-Sharma-in-film-Ek-Naradham.jpg" ,EK NARADHAM (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/311355.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://m.media-amazon.com/images/M/MV5BZjU3ZTA1NjUtZDFlNy00NDIwLThjZDAtN2EzMWZiZDg4NDVkXkEyXkFqcGdeQXVyMzM2MzQzNTQ@._V1_.jpg" ,EK THA HERO (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/315923.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zm44m39czUrFME5p6O0owMz7z6D.jpg" ,FARAAZ (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/328783.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ihdqS2PvRcjN1i9ozQxtyoKvBX.jpg" ,FARREY (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372997.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zDZowwb9GZGEctAu2PCpjiPQAMM.jpg" ,FIGHTER (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374656.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7jRrTQInT31hO81ATDuL3TNDOE9.jpg" ,FRIDAY NIGHT PLAN (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370504.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1E5qIvLBNrv4onx5SxnNz5Monac.jpg" ,FUKREY 3 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/371360.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/brCBYKGQaxZZcwmFF6OIxZLdKVU.jpg" ,GADAR 2 (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370415.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8z4XIHUKlni69c5dZWPbSBzJTg1.jpg" ,GAME OVER (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/374658.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/z5kngie7G0bR9CL3tcWhZLwIpIc.jpg" ,GANAPATH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/372069.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7MKuFlrrLJtiV49sxL4P640KP6M.jpg" ,GANDHI GODSE EK YUDH (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/310370.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8D3lObq5pv7lH0o5tny908SldKf.jpg" ,GASLIGHT (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/328784.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ghaznavi-et00353234-1677052153.jpg" ,GHAZNAVI (2023) SCAM
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/312808.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6npQ0MxlmCqPPF8H5xK4yGt7ZLL.jpg" ,GHOOMER (2023)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/370048.mkv
#EXTINF:-1 group-title="BOLLYWOOD (2023-2024)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/njUkW5MEWOBogouci5rfmF8TSDY.jpg" ,GHUSPAITHIYA (2024)
http://xtv.ooo:8080/movie/boss7770035788/navid@47855098/380313.mkv




 
Chat

New Conversation

🤓 Explain a complex thing

Explain Artificial Intelligence so that I can explain it to my six-year-old child.


🧠 Get suggestions and create new ideas

Please give me the best 10 travel ideas around the world


💭 Translate, summarize, fix grammar and more…

Translate "I love you" French


GPT-4o Mini
Hello, how can I help you today?
GPT-4o Mini
coin image
10
Upgrade



1 tvg-name="Al Jazeera English HD" 




Make a Review & Earn Credit ❤
Chat
Ask
Search
Write
Image
ChatPDF
Vision
Full Page
Invite & Earn

  `;

    // Parse M3U8 Data
    const parseM3U8 = (data) =>
    {
        const lines = data.trim().split('\n');
        const playlist = [];
        for (let i = 0;i < lines.length;i++)
        {
            if (lines[ i ].startsWith('#EXTINF'))
            {
                const metadata = lines[ i ];
                const url = lines[ i + 1 ];
                const groupTitleMatch = metadata.match(/group-title="([^"]+)"/);
                const logoMatch = metadata.match(/tvg-logo="([^"]+)"/);
                const titleMatch = metadata.split(',').pop();

                playlist.push({
                    groupTitle: groupTitleMatch ? groupTitleMatch[ 1 ] : null,
                    logo: logoMatch ? logoMatch[ 1 ] : null,
                    title: titleMatch || null,
                    url: url.trim(),
                });
            }
        }
        return playlist;
    };

    useEffect(() =>
    {
        setPlaylist(parseM3U8(m3u8Data));
    }, []);

    // Handle click on media item to load the stream
    const handleStreamClick = (url) =>
    {
        setCurrentStream(url);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">M3U8 Playlist</h1>

            {/* Video Player */}
            <div className="mb-4">
                <video
                    id="videoPlayer"
                    className="w-full h-64"
                    controls
                    autoPlay
                    src={currentStream ? currentStream : ''}
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Playlist */}
            <div className="space-y-4 grid grid-cols-4 gap-6">
                {playlist.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-200"
                        onClick={() => handleStreamClick(item.url)}
                    >
                        <img src={item.logo} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                        <div>
                            <p className="text-lg font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.groupTitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default M3U8Player;
