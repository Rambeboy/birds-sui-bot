function _0x332c(_0x456d86,_0x3dc93d){const _0x2a6b73=_0x2a6b();return _0x332c=function(_0x332c24,_0x2521f1){_0x332c24=_0x332c24-0x140;let _0x5d5ad9=_0x2a6b73[_0x332c24];return _0x5d5ad9;},_0x332c(_0x456d86,_0x3dc93d);}const _0x454e04=_0x332c;function _0x2a6b(){const _0x4656c6=['6618312mzXgrl','119fjPaTU','application/json,\x20text/plain,\x20*/*','1rcaLjx','4DAKOWw','en-US,en;q=0.9,id;q=0.8','tma\x20','generateHeaders','522573HhNnbD','application/json','referer','headers','\x20-\x20','stringify','status','Agent','...','1111ViIjCe','Error\x20:\x20','60402seeUet','queryObj','origin','query','Response\x20:\x20','response','proxy','exit','Content-Type','empty','statusText','Response\x20Data\x20:\x20','Request\x20Body\x20:\x20','message','fetch','same-site','\x20:\x20','info','randomUserAgent','Request\x20Header\x20:\x20','url','37572wDlBcB','518050TqNsWb','153YxDdpu','4314050McmHgU','error','json','780002WgYtiS'];_0x2a6b=function(){return _0x4656c6;};return _0x2a6b();}(function(_0x54cffb,_0x532eaf){const _0x3af5b3=_0x332c,_0x2834a9=_0x54cffb();while(!![]){try{const _0x199ded=-parseInt(_0x3af5b3(0x147))/0x1*(parseInt(_0x3af5b3(0x143))/0x2)+-parseInt(_0x3af5b3(0x14c))/0x3+parseInt(_0x3af5b3(0x148))/0x4*(parseInt(_0x3af5b3(0x140))/0x5)+parseInt(_0x3af5b3(0x157))/0x6*(-parseInt(_0x3af5b3(0x145))/0x7)+-parseInt(_0x3af5b3(0x144))/0x8+-parseInt(_0x3af5b3(0x16e))/0x9*(-parseInt(_0x3af5b3(0x16d))/0xa)+-parseInt(_0x3af5b3(0x155))/0xb*(-parseInt(_0x3af5b3(0x16c))/0xc);if(_0x199ded===_0x532eaf)break;else _0x2834a9['push'](_0x2834a9['shift']());}catch(_0x4a7039){_0x2834a9['push'](_0x2834a9['shift']());}}}(_0x2a6b,0x795d2));import{HttpsProxyAgent}from'https-proxy-agent';import{Helper}from'../utils/helper.js';import _0xe6f634 from'../utils/logger.js';import _0x1b48ae from'https';import _0x1fb46a from'node-fetch';export class API{constructor(_0x3d2875,_0x17d3ab,_0x568048,_0x90ce26,_0x5d4d3d,_0x59c069){const _0x444510=_0x332c;this[_0x444510(0x16b)]=_0x90ce26,this[_0x444510(0x158)]=_0x17d3ab,this[_0x444510(0x159)]=_0x5d4d3d,this[_0x444510(0x14e)]=_0x59c069,this['ua']=Helper[_0x444510(0x169)](),this[_0x444510(0x15a)]=_0x3d2875,this[_0x444510(0x15d)]=_0x568048;}async[_0x454e04(0x14b)](_0x10b745=this[_0x454e04(0x15a)]){const _0x19d61c=_0x454e04,_0x237271={'Accept':_0x19d61c(0x146),'Accept-Language':_0x19d61c(0x149),'Content-Type':_0x19d61c(0x14d),'Sec-Fetch-Dest':_0x19d61c(0x160),'Sec-Fetch-Site':_0x19d61c(0x166),'Sec-Fetch-Mode':'cors','User-Agent':this['ua'],'Origin':this[_0x19d61c(0x159)]};return _0x10b745&&(_0x237271['telegramAuth']=_0x19d61c(0x14a)+_0x10b745),_0x237271;}async[_0x454e04(0x165)](_0x74686e,_0x5b5d4f='GET',_0x1af234,_0x5f129e={},_0x414798={},_0x356d6a=![]){const _0x3c9397=_0x454e04;try{const _0x167855=_0x356d6a?_0x74686e:''+this['url']+_0x74686e,_0x328242={...await this['generateHeaders'](_0x1af234),..._0x414798};_0xe6f634[_0x3c9397(0x168)](_0x5b5d4f+_0x3c9397(0x167)+_0x167855+'\x20'+(this[_0x3c9397(0x15d)]?this[_0x3c9397(0x15d)]:'')),_0xe6f634[_0x3c9397(0x168)](_0x3c9397(0x16a)+JSON[_0x3c9397(0x151)](_0x328242)),_0xe6f634[_0x3c9397(0x168)](_0x3c9397(0x163)+JSON[_0x3c9397(0x151)](_0x5f129e));const _0xdf53e={'method':_0x5b5d4f,'headers':_0x328242,'agent':this[_0x3c9397(0x15d)]?new HttpsProxyAgent(this[_0x3c9397(0x15d)]):new _0x1b48ae[(_0x3c9397(0x153))]({'rejectUnauthorized':![]}),'body':_0x5b5d4f!=='GET'?JSON[_0x3c9397(0x151)](_0x5f129e):undefined,'Referer':this[_0x3c9397(0x14e)]},_0x3d4f28=await _0x1fb46a(_0x167855,_0xdf53e),_0x2f618d=_0x3d4f28[_0x3c9397(0x14f)]['get'](_0x3c9397(0x15f));let _0x26612c;_0x2f618d&&_0x2f618d['includes'](_0x3c9397(0x14d))?_0x26612c=await _0x3d4f28[_0x3c9397(0x142)]():_0x26612c={'message':await _0x3d4f28['text']()};const _0x416542={'status':_0x3d4f28[_0x3c9397(0x152)],..._0x26612c};return _0xe6f634[_0x3c9397(0x168)](_0x3c9397(0x15b)+_0x3d4f28['status']+'\x20'+_0x3d4f28[_0x3c9397(0x161)]),_0xe6f634[_0x3c9397(0x168)](_0x3c9397(0x162)+JSON[_0x3c9397(0x151)](_0x26612c)['substring'](0x0,0x96)+_0x3c9397(0x154)),_0x416542;}catch(_0x38c5f4){_0xe6f634['error'](_0x3c9397(0x156)+_0x38c5f4[_0x3c9397(0x164)]);if(_0x38c5f4[_0x3c9397(0x15c)]&&_0x38c5f4['response']['status']===0x190){const _0x593d2b={'status':_0x38c5f4['response'][_0x3c9397(0x152)],...await _0x38c5f4['response'][_0x3c9397(0x142)]()};return _0x593d2b;}else{if(_0x38c5f4[_0x3c9397(0x15c)]&&_0x38c5f4[_0x3c9397(0x15c)][_0x3c9397(0x152)]===0x1ad)throw Error(_0x38c5f4[_0x3c9397(0x15c)][_0x3c9397(0x152)]+_0x3c9397(0x150)+_0x38c5f4[_0x3c9397(0x164)]);else{if(_0x38c5f4[_0x3c9397(0x15c)]&&(_0x38c5f4[_0x3c9397(0x15c)][_0x3c9397(0x152)]===0x1f8||_0x38c5f4['response'][_0x3c9397(0x152)]===0x194))console[_0x3c9397(0x141)]('DETECT\x20API\x20CHANGE..\x20EXIT'),await process[_0x3c9397(0x15e)]();else throw _0x38c5f4;}}}}}
