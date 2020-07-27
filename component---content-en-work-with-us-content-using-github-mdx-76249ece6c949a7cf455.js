(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"5hBX":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return h}));var i=n("zLVn"),o=(n("q1tI"),n("7ljp")),c=n("z1h2"),r={},a=function(e){return function(t){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(o.mdx)("div",t)}},l=a("Process"),d=a("Box"),s=a("Button"),p={_frontmatter:r},u=c.a;function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.mdx)(u,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"How to use github"),Object(o.mdx)(l,{mdxType:"Process"},Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("h2",null,"Login to Github"),Object(o.mdx)("p",null,"Make sure you have a GitHub account and you’re logged in."),Object(o.mdx)(s,{to:"https://github.com/login",mdxType:"Button"},"Go to Github")),Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("h2",null,"Navigate to file/folder")),Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("h2",null,"Edit/Add file"),Object(o.mdx)("h3",null,"Edit file"),Object(o.mdx)("p",null,"Once in the file, press the pen icon to edit content. This will create a duplicate of the content in your own GitHub account. This allows making and proposing new changes without overwriting the published content.\n// image"),Object(o.mdx)("h3",null,"Add file"),Object(o.mdx)("p",null,"Once in the folder that represents proper page placement, press “Create new file”. This will add a new .md file in your own GitHub account. This allows you to propose the addition of your content without publishing it right away.")),Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("h2",null,"Propose File Change/New file"),Object(o.mdx)("p",null,"Once file changes are complete, a PR will ask for an explaination of changes. This will help any reviewer understand what different, so they can make a decision whether to publish it to the main site.\n// image")),Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("h2",null,"Stage Changes"),Object(o.mdx)("p",null,"Whether uploading a file or making changes to existing work, git will catch all changes made. Depending on the environment (code editor, github's website etc.) initating a live change is as simple as staging the fresh update\n// stage commit image")),Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("h2",null,"Create Pull Request"),Object(o.mdx)("p",null,"//continue narrative of commits\n//image of CTA on Github\n//image of PR a thing")),Object(o.mdx)(d,{mdxType:"Box"},Object(o.mdx)("h2",null,"Review/Merge"),Object(o.mdx)("p",null,"There might be feedback/changes on a PR. A reviewer can approve, request changes, or merge the edited file into the repo. Edits can be made with an open PR (often without leaving Github's website) and the PR will update automatically. Once happy, a reviewer will merge your work and it will be live on the site."))))}h.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var i=n("rePB"),o=n("q1tI"),c=n.n(o),r=n("2A+t"),a=n("izhR"),l=n("xEQ+"),d=n.n(l),s=n("YwZP"),p=n("d+M2"),u=n("4XhP"),h=function(e){var t=e.children,n=e.seo;return Object(r.c)(u.f,null,Object(r.c)(a.p,{sx:{flexDirection:"column",minHeight:"100vh",height:"100%"}},Object(r.c)(p.b,n),Object(r.c)(u.c,null),Object(r.c)(a.p,{as:"main",sx:{maxWidth:"1364px",flex:"1 0 auto",width:"100%",m:"0 auto",pr:0,pt:["90px","90px","unset"],position:"relative"},className:"content-boundary"},t),Object(r.c)(u.b,null)))},m=n("tW5L"),b=n("/xXG");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}t.a=function(e){var t=e.children,n=e.pageContext,o=e.uri,l=n.frontmatter,p=l.title,O=l.description,f=l.keywords,g=l.featuredImage,j=l.status,w=l.hideLanguageSelector,y=l.hideSidenav,v=l.hideBreadcrumbs,P="object"==typeof j?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:j.text},j):{children:j},T=Object(s.useLocation)().pathname.split("/")[2],k=void 0!==T&&""!==T,B=k&&!y,C={title:p||function(){var e=c.a.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||o.split("/").pop(),description:O,keywords:f,featuredImage:g};return Object(r.c)(h,{seo:C},B&&Object(r.c)(d.a,{boundaryElement:".content-boundary",sx:{width:"20%",minWidth:"260px",display:["none","none","initial"]},dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1},Object(r.c)(u.g,null)),Object(r.c)(a.p,{sx:{flexGrow:1,flexDirection:"column"}},Object(r.c)("article",{sx:{pl:k?[4,4,"64px"]:0,mt:k?[4,4,"59px"]:0,pb:4,pr:k?4:0}},j&&Object(r.c)(a.f,{sx:{marginTop:k?2:0}},Object(r.c)(b.m,Object.assign({sticky:!0},P,{sx:{width:"100%"}}))),(!v||k&&!w)&&Object(r.c)(a.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],mt:B?"":"2rem",px:k?0:[3,3,0]}},!v&&Object(r.c)(u.a,null),k&&!w&&Object(r.c)(m.b,null)),Object(r.c)(a.f,{sx:k&&!w?{"& > *:nth-child(1)":{lineHeight:"normal"},"& > *:nth-child(1), & > *:nth-child(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-child(2)":{mb:"32px"}}:{}},t))))}}}]);
//# sourceMappingURL=component---content-en-work-with-us-content-using-github-mdx-76249ece6c949a7cf455.js.map