const _0x57a51e=_0x40f2;(function(_0x1e946e,_0xffeef0){const _0x18756c=_0x40f2,_0x46bee6=_0x1e946e();while(!![]){try{const _0x238942=-parseInt(_0x18756c(0xd7))/0x1*(-parseInt(_0x18756c(0xb0))/0x2)+-parseInt(_0x18756c(0xe5))/0x3+parseInt(_0x18756c(0xde))/0x4*(parseInt(_0x18756c(0xb5))/0x5)+parseInt(_0x18756c(0xe1))/0x6*(-parseInt(_0x18756c(0xa6))/0x7)+-parseInt(_0x18756c(0xc1))/0x8+-parseInt(_0x18756c(0xea))/0x9+parseInt(_0x18756c(0xcf))/0xa;if(_0x238942===_0xffeef0)break;else _0x46bee6['push'](_0x46bee6['shift']());}catch(_0x2fb3fa){_0x46bee6['push'](_0x46bee6['shift']());}}}(_0x5465,0xc15d6));function _0x40f2(_0x44f7a9,_0x27bff5){const _0x546523=_0x5465();return _0x40f2=function(_0x40f2b6,_0x4e84ef){_0x40f2b6=_0x40f2b6-0x9c;let _0x338dc7=_0x546523[_0x40f2b6];return _0x338dc7;},_0x40f2(_0x44f7a9,_0x27bff5);}import _0x18798c from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import _0x21e100 from'../utils/logger.js';import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';import{HttpsProxyAgent}from'https-proxy-agent';import{LogLevel}from'telegram/extensions/Logger.js';function _0x5465(){const _0x4e5e3a=['destroy','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Account\x20Name\x20:','9998523MWHPRn','queryCreation','saveQueryFile','\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a','\x20|\x20Sleep\x20','disconnect','text','proxy','Invalid\x20Input','session','TELEGRAM_APP_HASH','exit','You\x20don\x27t\x20have\x20any\x20Accounts,\x20please\x20create\x20first','resolvePeer','getInputEntity','accounts/','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','accountType','readQueryFile','Enter\x20your\x20Telegram\x20Phone\x20Number\x20?','287FYZDwi','accounts','getEntity','url','serverAddress','queryModificaiton','Invalid\x20input,\x20Please\x20try\x20again','android','Welcome\x20to\x20Bot\x20\x0aBy\x20:\x20Nofan\x20Rambe\x20\x0a\x20\x0aLet\x27s\x20Getting\x20Started\x0a\x20\x0aYour\x20Session\x20List:\x0a','\x20|\x20FloodWait\x20','63708bEXscj','start','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','accountName','useSession','6987065glkagn','invoke','\x20-\x20Created,\x20Please\x20Restart\x20The\x20Bot\x20Again','Your\x20Query\x20Account\x20List\x20:\x0a\x20\x0a','warn','includes','filter','error','createDir','Query\x20','creator','\x20-\x20Created','362848TpwvQy','\x0a\x20\x0aAvailable\x20Account\x20Type:\x20\x0a1.\x20Session\x20\x0a2.\x20Query\x0a\x20\x0aPlease\x20Entery\x20Your\x20Choice\x20:\x20','query-','onBoarding','info','client','length','sessions-','init','resetAccounts','getSession','ERROR','delay','TELEGRAM_APP_ID','12617060MwnfOM','Please\x20Enter\x20Telegram\x20Query\x20:\x20','indexOf','birdx2_bot','log','RequestAppWebView','\x0a\x20\x0aYou\x20already\x20have\x20Account,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Account\x20:','Session\x20','14ybSRwE','\x20-\x20Webview\x20Connected','\x0a\x20\x0aPlease\x20Enter\x20New\x20Query\x20','agent','bot','sessionCreation','Your\x20Account\x20List\x20:\x0a\x20\x0a','4ArMMQV','peer','stringify','38286oJslya','seconds','query','save','2685387KBboXH','messages','storeSession'];_0x5465=function(){return _0x4e5e3a;};return _0x5465();}export class Telegram{[_0x57a51e(0xe7)];constructor(){const _0x1aa368=_0x57a51e;this[_0x1aa368(0xb3)]=_0x1aa368(0xa7),this[_0x1aa368(0xa9)]='https://birdx.birds.dog/',this[_0x1aa368(0xdb)]=_0x1aa368(0xd2);}async[_0x57a51e(0xc9)](){const _0x29d430=_0x57a51e;try{await this[_0x29d430(0xc4)]();}catch(_0x4867c8){console['log'](_0x4867c8),_0x21e100[_0x29d430(0xbc)](''+JSON[_0x29d430(0xe0)](_0x4867c8));throw _0x4867c8;}}async[_0x57a51e(0xc4)](){const _0xb2b463=_0x57a51e;try{let _0x269fff=_0xb2b463(0xae);const _0x515e14=Helper[_0xb2b463(0xcb)](_0xb2b463(0xa7));if(_0x515e14[_0xb2b463(0xc7)]==0x0)_0x269fff+='<empty>';else for(const _0x5eb48e of _0x515e14){_0x269fff+='-\x20'+_0x5eb48e+'\x0a';}_0x269fff+=_0xb2b463(0xed),_0x269fff+='\x0a\x20\x0a1.\x20Create\x20Account\x20\x0a2.\x20Reset\x20Account\x20\x0a3.\x20Start\x20Bot\x0a4.\x20Query\x20modification\x0a\x20\x0aInput\x20your\x20choice\x20:';const _0x34b4e4=await _0x18798c['text'](_0x269fff);if(_0x34b4e4==0x1)await this[_0xb2b463(0xa3)]();else{if(_0x34b4e4==0x2)Helper[_0xb2b463(0xca)](),await Helper[_0xb2b463(0xcd)](0xbb8),await this['onBoarding']();else{if(_0x34b4e4==0x3)Helper['getSession'](this['accountName'])?.[_0xb2b463(0xc7)]==0x0&&(console[_0xb2b463(0xc5)](_0xb2b463(0x9e)),await this[_0xb2b463(0xc4)]());else _0x34b4e4==0x4?await this[_0xb2b463(0xab)]():(console[_0xb2b463(0xbc)](_0xb2b463(0xac)),await this[_0xb2b463(0xc4)]());}}}catch(_0x1dedb7){throw _0x1dedb7;}}async['queryModificaiton'](){const _0x181f7a=_0x57a51e;try{const _0x178e25=Helper[_0x181f7a(0xcb)]('accounts'),_0x1792ae=_0x178e25[_0x181f7a(0xbb)](_0x95be8d=>_0x95be8d[_0x181f7a(0xba)](_0x181f7a(0xe3)));let _0x57dadf=_0x181f7a(0xb8);for(const _0x2e7751 of _0x1792ae){_0x57dadf+=_0x178e25[_0x181f7a(0xd1)](_0x2e7751)+0x1+'.\x20'+_0x2e7751+'\x0a';}_0x1792ae[_0x181f7a(0xc7)]==0x0?(console[_0x181f7a(0xd3)]('You\x20dont\x20have\x20any\x20Query\x20Account.'),await this[_0x181f7a(0xc4)]()):_0x57dadf+='\x0a\x20\x0aPlease\x20Select\x20Query\x20Account\x20for\x20modification:';const _0x54e699=await _0x18798c[_0x181f7a(0xf0)](_0x57dadf);if(_0x1792ae[_0x54e699-0x1]!=undefined){const _0x1e78a2=_0x1792ae[_0x54e699-0x1];this[_0x181f7a(0xb3)]=_0x181f7a(0xa1)+_0x1e78a2;const _0x2df47a='Old\x20Query\x20:\x20'+Helper[_0x181f7a(0xa4)](this[_0x181f7a(0xb3)]+'/query.txt')+_0x181f7a(0xd9),_0x222153=await _0x18798c['text'](_0x2df47a);await Helper[_0x181f7a(0xec)](this[_0x181f7a(0xb3)],_0x222153),await Helper[_0x181f7a(0xcd)](0xbb8),await this[_0x181f7a(0xc4)]();}else console[_0x181f7a(0xbc)](_0x181f7a(0xac)),await this[_0x181f7a(0xab)]();}catch(_0x227e55){throw _0x227e55;}}async[_0x57a51e(0xdc)](){const _0x3c3490=_0x57a51e;try{if(Config[_0x3c3490(0xce)]==undefined||Config[_0x3c3490(0x9c)]==undefined)throw new Error('Please\x20configure\x20your\x20TELEGRAM_APP_ID\x20and\x20TELEGRAM_APP_HASH\x20first');const _0x1319ac=Helper[_0x3c3490(0xcb)]('accounts');let _0x47700d=_0x3c3490(0xdd);for(const _0x75c56f of _0x1319ac){_0x47700d+=_0x1319ac[_0x3c3490(0xd1)](_0x75c56f)+0x1+'.\x20'+_0x75c56f+'\x0a';}_0x1319ac[_0x3c3490(0xc7)]==0x0?_0x47700d+=_0x3c3490(0xa2):_0x47700d+='\x0a\x20\x0aYou\x20already\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:';const _0x1aa040=await _0x18798c[_0x3c3490(0xf0)](_0x47700d);this[_0x3c3490(0xb3)]=Helper[_0x3c3490(0xbd)](_0x3c3490(0xc8)+_0x1aa040),await this['useSession'](this[_0x3c3490(0xb3)]),await this[_0x3c3490(0xef)](),_0x21e100[_0x3c3490(0xc5)](_0x3c3490(0xd6)+this[_0x3c3490(0xb3)]+_0x3c3490(0xc0)),console['log'](_0x3c3490(0xd6)+_0x1aa040+_0x3c3490(0xb7)),this[_0x3c3490(0xe7)][_0x3c3490(0xe4)](),await Helper[_0x3c3490(0xcd)](0xbb8),process['exit']();}catch(_0x11b367){throw _0x11b367;}}async['queryCreation'](){const _0x301583=_0x57a51e;try{const _0x46a49b=Helper[_0x301583(0xcb)](_0x301583(0xa7));let _0x19fb0f=_0x301583(0xdd);for(const _0x19a4e2 of _0x46a49b){_0x19fb0f+=_0x46a49b['indexOf'](_0x19a4e2)+0x1+'.\x20'+_0x19a4e2+'\x0a';}_0x46a49b['length']==0x0?_0x19fb0f+=_0x301583(0xe9):_0x19fb0f+=_0x301583(0xd5);const _0x4b1027=await _0x18798c[_0x301583(0xf0)](_0x19fb0f);this['accountName']=Helper[_0x301583(0xbd)](_0x301583(0xc3)+_0x4b1027);const _0x53ae41=await _0x18798c['text'](_0x301583(0xd0));await Helper[_0x301583(0xec)](this['accountName'],_0x53ae41),_0x21e100[_0x301583(0xc5)](_0x301583(0xbe)+this['accountName']+_0x301583(0xc0)),console[_0x301583(0xd3)]('Query\x20'+_0x4b1027+'\x20-\x20Created,\x20Please\x20Restart\x20The\x20Bot\x20Again'),await Helper[_0x301583(0xcd)](0xbb8),process[_0x301583(0x9d)]();}catch(_0x13b10f){throw _0x13b10f;}}async[_0x57a51e(0xa3)](){const _0x2f4b89=_0x57a51e;try{const _0x131d75=Helper[_0x2f4b89(0xcb)](_0x2f4b89(0xa7));let _0x48f7e6='Your\x20Account\x20List\x20:\x0a\x20\x0a';if(_0x131d75['length']>0x0)for(const _0x489d8a of _0x131d75){_0x48f7e6+=_0x131d75[_0x2f4b89(0xd1)](_0x489d8a)+0x1+'.\x20'+_0x489d8a+'\x0a';}else _0x48f7e6+='<empty>\x0a';_0x48f7e6+=_0x2f4b89(0xc2);const _0x62cd1a=await _0x18798c[_0x2f4b89(0xf0)](_0x48f7e6);if(_0x62cd1a==0x1)await this['sessionCreation']();else _0x62cd1a==0x2?await this[_0x2f4b89(0xeb)]():(console[_0x2f4b89(0xd3)](_0x2f4b89(0xf2)),await this['accountType']());}catch(_0x22f3ff){throw _0x22f3ff;}}async[_0x57a51e(0xb4)](_0x3ad68f,_0x6633d1){const _0x10b660=_0x57a51e;try{this[_0x10b660(0xf1)]=_0x6633d1;const _0x14e422={'connectionRetries':0x5};this[_0x10b660(0xf1)]&&(_0x14e422[_0x10b660(0xda)]=new HttpsProxyAgent(this[_0x10b660(0xf1)])),this[_0x10b660(0xe7)]=new StoreSession(_0x3ad68f),this[_0x10b660(0xc6)]=new TelegramClient(this[_0x10b660(0xe7)],Config[_0x10b660(0xce)],Config['TELEGRAM_APP_HASH'],_0x14e422),this[_0x10b660(0xc6)]['setLogLevel'](LogLevel[_0x10b660(0xcc)]),this[_0x10b660(0xe7)]['save'](),await this['client'][_0x10b660(0xb1)]({'phoneNumber':async()=>await _0x18798c[_0x10b660(0xf0)](_0x10b660(0xa5)),'password':async()=>await _0x18798c[_0x10b660(0xf0)]('Enter\x20your\x20Telegram\x20Password?'),'phoneCode':async()=>await _0x18798c['text'](_0x10b660(0xb2)),'onError':_0x588fc7=>{const _0x4b28b1=_0x10b660;console[_0x4b28b1(0xd3)](_0x588fc7['message']);}});}catch(_0x4353dd){throw _0x4353dd;}}async[_0x57a51e(0x9f)](){const _0x5e94ab=_0x57a51e;try{_0x21e100[_0x5e94ab(0xc5)](_0x5e94ab(0xd6)+this['session']+'\x20-\x20Resolving\x20Peer');while(this[_0x5e94ab(0xdf)]==undefined){try{this[_0x5e94ab(0xdf)]=await this[_0x5e94ab(0xc6)][_0x5e94ab(0xa8)](this['bot']);break;}catch(_0x31a6af){if(_0x31a6af instanceof FloodWaitError){const _0x39d524=_0x31a6af[_0x5e94ab(0xe2)];_0x21e100[_0x5e94ab(0xb9)](this[_0x5e94ab(0xc6)]['session'][_0x5e94ab(0xaa)]+_0x5e94ab(0xaf)+_0x31a6af),_0x21e100[_0x5e94ab(0xc5)](this[_0x5e94ab(0xc6)][_0x5e94ab(0xf3)]['serverAddress']+_0x5e94ab(0xee)+_0x39d524+'s'),await Helper['delay']((_0x39d524+0x3)*0x3e8);}else throw _0x31a6af;}}}catch(_0x509bd6){throw _0x509bd6;}}async['disconnect'](){const _0x87d35c=_0x57a51e;await this[_0x87d35c(0xc6)]['disconnect'](),await this['client'][_0x87d35c(0xe8)](),this[_0x87d35c(0xdf)]=undefined,this[_0x87d35c(0xb3)]=undefined;}async['initWebView'](){const _0x2c55fc=_0x57a51e;try{const _0x5adac3=await this['client'][_0x2c55fc(0xb6)](new Api[(_0x2c55fc(0xe6))][(_0x2c55fc(0xd4))]({'peer':this[_0x2c55fc(0xdb)],'app':new Api['InputBotAppShortName']({'botId':await this['client'][_0x2c55fc(0xa0)](this[_0x2c55fc(0xdb)]),'shortName':'birdx'}),'writeAllowed':!![],'platform':_0x2c55fc(0xad),'startParam':Helper[_0x2c55fc(0xbf)],'compact':!![]}));_0x21e100[_0x2c55fc(0xc5)](_0x2c55fc(0xd6)+this['session']+_0x2c55fc(0xd8));const _0x530e82=_0x5adac3['url'];return Helper['getQueryFromUrl'](_0x530e82);}catch(_0x2beb6c){throw _0x2beb6c;}}}
