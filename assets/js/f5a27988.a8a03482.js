"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[59481],{62008:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Discord/development/coders/chat_2024-12-02","title":"\ud83d\udcbb-coders 2024-12-02","description":"Summary","source":"@site/community/Discord/development/coders/chat_2024-12-02.md","sourceDirName":"Discord/development/coders","slug":"/Discord/development/coders/chat_2024-12-02","permalink":"/eliza/community/Discord/development/coders/chat_2024-12-02","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"\ud83d\udcbb-coders 2024-12-01","permalink":"/eliza/community/Discord/development/coders/chat_2024-12-01"},"next":{"title":"\ud83d\udcbb-coders 2024-12-03","permalink":"/eliza/community/Discord/development/coders/chat_2024-12-03"}}');var s=n(74848),o=n(28453);const r={},a="\ud83d\udcbb-coders 2024-12-02",l={},d=[{value:"Summary",id:"summary",level:2},{value:"FAQ",id:"faq",level:2},{value:"Who Helped Who",id:"who-helped-who",level:2},{value:"Action Items",id:"action-items",level:2},{value:"Technical Tasks",id:"technical-tasks",level:3},{value:"Documentation Needs",id:"documentation-needs",level:3},{value:"Feature Requests",id:"feature-requests",level:3}];function c(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"-coders-2024-12-02",children:"\ud83d\udcbb-coders 2024-12-02"})}),"\n",(0,s.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(i.p,{children:"The chat focused on technical discussions about hosting Eliza, adjusting the twitter scraper for original tweets only and choosing a character at login. Kanye faced an issue with looping errors while using grok & openai APIs."}),"\n",(0,s.jsx)(i.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Why is the same tweet being checked over and over again with warning signs still showing? Using grok & openai, but terminal works fine. Any ideas why this happens on Twitter only (00:34)? Answered by:[SotoAlt | WAWE] (asked by [Kanye])"}),"\n",(0,s.jsx)(i.li,{children:"What's the best Discord channel to find developers looking for work and joining a team? How can I do this without breaking any rules? (asked by @T)"}),"\n",(0,s.jsx)(i.li,{children:"How does your AWS Lambda worker handle distributed, live responses when needed while keeping wallet access air-gapped with only client DB connection (and possibly an event bus if required)? (asked by :elizasalute:)"}),"\n",(0,s.jsx)(i.li,{children:"Anybody can help me with this? Stuck here, agent on twitter not responding to replies. Running latest and version 0.1.3. (asked by @kanye (04:42))"}),"\n",(0,s.jsxs)(i.li,{children:["Why does SQLITE throw an error when inputting image? (asked by ",(0,s.jsx)(i.a,{href:"05:22",children:"VI"}),")"]}),"\n",(0,s.jsx)(i.li,{children:"Does anyone have a suggestion for how to integrate this into the starter - when I try to download the package from GitHub directly, I get bunch of type and other errors?\nOdilitime (05:47): You can runs an agent without any token... Starter relies on npm being at same tag.\n\ua9c1Ninja_Dev\ua9c2(05:48): But lets say, I do have a token and its on EVM. Seems like either way the token is separate from the agent?\nIf so you just tie in the token... Odilitime (05:49)... Jacob (06:12) (asked by @Jacob)"}),"\n",(0,s.jsx)(i.li,{children:"Does AI16 have support for something like VIRTUALS' Roblox Westwood game? Specifically wondering how their ai agents can make decisions in a seemingly continuous space, such as moving to X location and shooting in Y direction, in real time. Where should I go ask this question or do you have a link to the game? (asked by @Bullish)"}),"\n",(0,s.jsx)(i.li,{children:"Do you understand my previous query? Do you have any suggestions on how easy it is to build a game integration with AI16's stack, and what documentation/support exists for this process? (asked by @Bullish)"}),"\n",(0,s.jsx)(i.li,{children:"Can ai16z work for VTuber models as well? Should I use it or stick with the other AI and apply ai16z to socials only? (asked by @sleepysign)"}),"\n",(0,s.jsx)(i.li,{children:"When will metamike open source integrated version of chatvrm on github, if not already available for users using v0.1.3? (asked by @jin)"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"who-helped-who",children:"Who Helped Who"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"[SotoAlt | WAWE] helped [Kanye (00:34)] with Troubleshooting Twitter API issues by providing Help Kanye with the looping error issue"}),"\n",(0,s.jsx)(i.li,{children:"@T helped All members with similar issues. with @LaserRiot explained how their AWS Lambda worker operates in a distributed manner while keeping wallet access air-gapped, providing insight to others facing related challenges. Recipients: All interested parties by providing @crazysailor1000 provided a solution to the issue of switching models from OpenAI to Anthropic, which involved deleting db.sqlite and modifying settings for embeddingModel."}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"04:39",children:"AIFlow.ML"})," helped @kungfumode(05:12) with Resolving agent-twitter client issue by providing wil (04:30) helped Kanye by suggesting to update the model ts file & rebuild."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"04:39",children:"solswappa"})," helped [kungfumode(05:12)] with Optimizing agent-twitter client by providing Havohej (05:07) offered to investigate unused checks and functions in the twitter scraper library."]}),"\n",(0,s.jsx)(i.li,{children:"@Jacob helped @Jacob with Integration of the Eliza Agent in Starter Project by providing @Odilitime provided a solution to integrate Eliza agent into starter by using npm latest version."}),"\n",(0,s.jsx)(i.li,{children:"@Odilitime helped  with Inquiry on AI16's capabilities for continuous space decision-making in games. by providing Odilitime provided information about an existing bot integrated online game."}),"\n",(0,s.jsx)(i.li,{children:"@AM helped @Kanye with Addressing recurring error message on AI16 platform by providing AM acknowledged Kanye\u2019s issue with a positive response, indicating awareness."}),"\n",(0,s.jsx)(i.li,{children:"helped @sleepysign with Added contributor role and provided link for integrated chatvrm version by providing @jin"}),"\n",(0,s.jsx)(i.li,{children:"@sleepysign helped @Black with Resolving error with AMD card by providing @Odilitime helped @andy8052 by suggesting to remove 'device: gpu' references for non-AMD GPU compatibility."}),"\n",(0,s.jsx)(i.li,{children:"@Odilitime helped @andy8052 with Finding alternative voice solutions by providing @SotoAlt suggested using Vocaloid, specifically Hatsune Miku."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"action-items",children:"Action Items"}),"\n",(0,s.jsx)(i.h3,{id:"technical-tasks",children:"Technical Tasks"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Host Eliza locally with M1 Pro and 16 GB RAM (mentioned by [Sam (00:23)])"}),"\n",(0,s.jsx)(i.li,{children:"Choose character at login for AIFlow.ML platform (mentioned by [AIFlow.ML (02:06)])"}),"\n",(0,s.jsx)(i.li,{children:"Resolve issue related to switching models from OpenAI to Anthropic (mentioned by @crazysailor1000)"}),"\n",(0,s.jsxs)(i.li,{children:["Update model ts file & rebuild to fix issue (mentioned by ",(0,s.jsx)(i.a,{href:"04:30",children:"wil"}),")"]}),"\n",(0,s.jsxs)(i.li,{children:["Investigate unused checks and functions in agent-twitter-client library for optimization. (mentioned by ",(0,s.jsx)(i.a,{href:"05:02",children:"Havohej"}),")"]}),"\n",(0,s.jsxs)(i.li,{children:["Modify TwitterPipeline.js to handle replies and the tweets they are responding to. (mentioned by ",(0,s.jsx)(i.a,{href:"05:39",children:"Havohej"}),")"]}),"\n",(0,s.jsx)(i.li,{children:"Integrate Eliza agent into starter by using npm latest version (mentioned by Odilitime)"}),"\n",(0,s.jsx)(i.li,{children:"Investigate Kanye's recurring error with AI16 (mentioned by @Kanye)"}),"\n",(0,s.jsx)(i.li,{children:"Implement new release for users on v0.1.3 (mentioned by @Bunchu)"}),"\n",(0,s.jsx)(i.li,{children:"Edit source to remove 'device: gpu' instances for non-AMD GPU compatibility. (mentioned by Odilitime)"}),"\n",(0,s.jsx)(i.li,{children:"Create a character JSON file to modify prompts (mentioned by Odilitime)"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"documentation-needs",children:"Documentation Needs"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Find a suitable Discord channel for developers seeking work and joining teams. (mentioned by :elizasalute:)"}),"\n",(0,s.jsxs)(i.li,{children:["Update documentation for createMemoriesFromFiles function in eliza client-github package (mentioned by ",(0,s.jsx)(i.a,{href:"05:26",children:"PC"}),")"]}),"\n",(0,s.jsx)(i.li,{children:"Provide documentation and support for game integration stack. (mentioned by @Odilitime)"}),"\n",(0,s.jsx)(i.li,{children:"Update eliza startr fork to latest version using pull or sync. (mentioned by @BlackJesus)"}),"\n",(0,s.jsx)(i.li,{children:"Update character file documentation to reflect current system (mentioned by andy8052)"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"feature-requests",children:"Feature Requests"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Adjust Twitter scraper to only include original tweets, not replies. (mentioned by [Havohej (00:42)])"}),"\n",(0,s.jsx)(i.li,{children:"Test the whatsapp plugin to identify build issues. (mentioned by Citizen1553)"}),"\n",(0,s.jsx)(i.li,{children:"Integrate own voices using Eleven API (mentioned by sleepysign)"}),"\n",(0,s.jsx)(i.li,{children:"Create custom plugin for Twitter integration with task triggers. (mentioned by Ninja_Dev)"}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);