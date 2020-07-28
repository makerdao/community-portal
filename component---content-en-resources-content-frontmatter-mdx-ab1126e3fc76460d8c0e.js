(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{SH08:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return p}));var r,a=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("z1h2"),d={},s=(r="Box",function(e){return console.warn("Component '"+r+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",e)}),l={_frontmatter:d},c=o.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",null,"Frontmatter"),Object(i.mdx)("p",null,"Frontmatter is the stuff you put at the very top of your markdown files to control everything from the title, page description,\nimages, and SEO. On this site, we also use it to control what appears in the global header navigation, as well as how the sidebar\ngets rendered in each section. It's therefore quite important to know how to structure your frontmatter so that your file appears\nin the place you want it to."),Object(i.mdx)("h2",null,"Title"),Object(i.mdx)("div",{className:"gatsby-code-title prism-code-title"},"title-example.mdx"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"title[String] - Display title used for Header,Sidenav, and SEO.  \ntitle: Frontmatter\n")),Object(i.mdx)(s,{sx:{backgroundColor:"success",padding:3,marginBottom:4},mdxType:"Box"},Object(i.mdx)("h3",null,"The Title Rule"),Object(i.mdx)("p",null,"This specifies that we read and display the title in the ",Object(i.mdx)("strong",{parentName:"p"},"frontmatter first"),", then the ",Object(i.mdx)("strong",{parentName:"p"},"first h1 (#) in the file"),",\nthen we ",Object(i.mdx)("strong",{parentName:"p"},"fall back to the name of the file"),".")),Object(i.mdx)("p",null,'The "title" attribute is used for the title meta attribute for SEO. The title rule still applies - it is global.'),Object(i.mdx)("h2",null,"Order"),Object(i.mdx)("p",null,"This is a frontmatter attribute unique to this site which we use to define the order in which different pages appear\nin the sidebar navigation."),Object(i.mdx)("div",{className:"gatsby-code-title prism-code-title"},"order-example.mdx"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"order[Integer] - The order in which this file is displayed on the sidenav.\norder: 0\n")),Object(i.mdx)(s,{sx:{backgroundColor:"success",padding:3,marginBottom:4},mdxType:"Box"},Object(i.mdx)("h3",null,"Ordering"),Object(i.mdx)("p",null,"Order in the sidenav is based on lowest number (TOP) to highest (BOTTOM). Files that don't have an order are applied AFTER files that\nhave order in alphabetical order. If this file isn't rendered on the sidenav (ie. Top section files) this won't matter.")),Object(i.mdx)("p",null,'The "order" is ',Object(i.mdx)("strong",{parentName:"p"},"relative to the current directory"),", so it's not possible to take a page deeper in the directory\nand put it on the top level of the sidebar. For example, ",Object(i.mdx)("inlineCode",{parentName:"p"},"/work_with_us/bounties/test.mdx")," with an order of 0 will\njust appear at the top of the ",Object(i.mdx)("inlineCode",{parentName:"p"},"bounties")," dropdown in the sidenav and not at the top of the ",Object(i.mdx)("inlineCode",{parentName:"p"},"work_with_us")," sidenav."),Object(i.mdx)("h2",null,"Language Selector"),Object(i.mdx)("p",null,"This is a frontmatter attribute unique to this site which defines whether users will be able to see the different languages available for\nthe particular page they are currently on."),Object(i.mdx)("div",{className:"gatsby-code-title prism-code-title"},"language-example.mdx"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"hideLanguageSelector[Boolean] - Language selectors render by default, setting this to true for your page allows you to hide it.\nhideLanguageSelector: false\n")),Object(i.mdx)("h2",null,"Header Navigation"),Object(i.mdx)("p",null,'The header options are an easy way of adding internal files to the global header. Files specified in header.mdx gets applied AFTER these.\nFiles are organised in the header based on lowest number (LEFT) to highest (RIGHT). "Home" is ALWAYS first, then files with headerOrder,\nthen links in header.mdx.'),Object(i.mdx)("div",{className:"gatsby-code-title prism-code-title"},"header-example.mdx"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"header[String] - Whether this File should be rendered in the Header Navigation.\nheader: true\n\nheaderOrder[Integer] - The order in which this file will be displayed on the header.\nheaderOrder: 0\n")),Object(i.mdx)("h2",null,"SEO"),Object(i.mdx)("p",null,"So you want your page to rank well, and have a nice image and description when you share it on social media to show your friends\nthe awesome work you've done? We've got you covered."),Object(i.mdx)("div",{className:"gatsby-code-title prism-code-title"},"image-example.mdx"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'featuredImage[String] - Image to use when a link is shared (ie. Twitter/Facebook)\nfeaturedImage: "content/images/test.png"\n')),Object(i.mdx)(s,{sx:{backgroundColor:"warning",padding:3,marginBottom:4},mdxType:"Box"},Object(i.mdx)("p",null,'The "image" attribute ',Object(i.mdx)("strong",{parentName:"p"},"must")," be a path to the images in ",Object(i.mdx)("inlineCode",{parentName:"p"},"content/images/"))),Object(i.mdx)("div",{className:"gatsby-code-title prism-code-title"},"keywords-example.mdx"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'keywords[String] - Comma seperated keywords used for SEO\nkeywords: "cool, sweet, awesome"\n')),Object(i.mdx)("div",{className:"gatsby-code-title prism-code-title"},"description-example.mdx"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'description[String] - Description of this page for SEO.\ndescription: "The most complete guide to writing frontmatter in mdx files that you\'ve ever read."\n')),Object(i.mdx)("p",null,'The "description" attribute can ALSO be used for the excerpt that gets rendered and indexed for searching articles on the site.'))}p.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var r=n("rePB"),a=n("q1tI"),i=n("2A+t"),o=n("izhR"),d=n("xEQ+"),s=n.n(d),l=n("YwZP"),c=n("tW5L"),p=n("4XhP"),m=n("/xXG"),h=n("d+M2");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.children,n=e.pageContext,d=e.uri,b=n.frontmatter,g=b.title,O=b.description,x=b.keywords,f=b.featuredImage,j=b.status,y=b.hideLanguageSelector,w=b.hideSidenav,v=b.hideBreadcrumbs,N="object"==typeof j?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:j.text},j):{children:j},T=Object(l.useLocation)().pathname.split("/")[2],k=void 0!==T&&""!==T,S=k&&!w,C={title:g||function(){var e=a.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||d.split("/").pop(),description:O,keywords:x,featuredImage:f};return Object(i.c)(a.Fragment,null,Object(i.c)(h.b,C),S&&Object(i.c)(s.a,{boundaryElement:".content-boundary",sx:{width:"20%",minWidth:"260px",display:["none","none","initial"]},dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1},Object(i.c)(p.g,null)),Object(i.c)(o.p,{sx:{flexGrow:1,flexDirection:"column"}},Object(i.c)("article",{sx:{pl:k?[4,4,"64px"]:0,mt:k?[4,4,"59px"]:0,pb:4,pr:k?4:0}},j&&Object(i.c)(o.f,{sx:{marginTop:k?2:0}},Object(i.c)(m.l,Object.assign({sticky:!0},N,{sx:{width:"100%"}}))),(!v||k&&!y)&&Object(i.c)(o.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],mt:S?"":"2rem",px:k?0:[3,3,0]}},!v&&Object(i.c)(p.a,null),k&&!y&&Object(i.c)(c.b,null)),Object(i.c)(o.f,{sx:k&&!y?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))))}}}]);
//# sourceMappingURL=component---content-en-resources-content-frontmatter-mdx-ab1126e3fc76460d8c0e.js.map