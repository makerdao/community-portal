(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{XQQs:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return h}));var a,o=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("z1h2"),l={},s=(a="CTA",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.mdx)("div",e)}),c={_frontmatter:l},d=i.a;function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.mdx)(d,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",null,"Navigation Automagic"),Object(r.mdx)("p",null,"While there are many great gatsby-starters out there for documentation, we decided\nto build our own from scratch because we needed to satisfy a number of requirements\nunique to decentralized projects, which include: handling multiple languages easily and\nmaking it as easy as possible for content contributors to write and adapt the site\nas they see fit without requiring them to learn React."),Object(r.mdx)("p",null,"Our philosophy is ",Object(r.mdx)("strong",{parentName:"p"},'"content creators write the website"'),", which means that we\nhave put a lot of thought and effort into how navigation, translations and 404 pages work\nand how non-developers can control all these things using nothing more than mdx."),Object(r.mdx)("h2",null,"The Sidenav"),Object(r.mdx)("p",null,"Each top level section (Funding, Learn, Work With Us) has it's own directory displayed\nin the form of a vertical ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/community-portal/tree/r2d/src/modules/navigation"}),"sidenav"),".\nThis sidenav has very specific features:"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Auto-magically generated links based on existing file structure of top level section"),Object(r.mdx)("li",{parentName:"ol"},"Recursively intelligent"),Object(r.mdx)("li",{parentName:"ol"},"Support for multiple languages"),Object(r.mdx)("li",{parentName:"ol"},'Default locale ("en") fills in the gaps for missing pages when on a different locale page')),Object(r.mdx)("p",null,"To do this, we leverage Gatsby's file-source querying with a graphql regex filter to get every\nsingle page in the entire content folder (this sounds expensive, but it's only run once\nin the form of a static query during build time). We then pull in the edges and convert\nthat data into something usable in the form of a sidenav."),Object(r.mdx)(s,{mdxType:"CTA"},Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"We get"),": uglified data in one array."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"We need"),": an array of objects that can contain recursive layer of children",Object(r.mdx)("br",{parentName:"p"}),"\n","(i.e. the sidenav needs to look exactly like the file structure).")),Object(r.mdx)("p",null,"We used parts of the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/hasura/gatsby-gitbook-starter"}),"hasura/gastsby-gitbook-starter"),"\nas a reference for how to logically put this together."),Object(r.mdx)("p",null,"To keep it short, there's a file called ",Object(r.mdx)("inlineCode",{parentName:"p"},"Sidenav_Tree")," that exports a method that\nconverts the MDX edge data into {title, slug, rawSlug} (rawSlug being the file path without it's locale)\nand only returns elements for the locale specified and our currentTopSection (Learn, Work With Us, Funding, etc.).\nWe convert this into sidenav objects for our default locale and our current locale\n(if our current locale is the same as the default we don't make objects for it).\nThen we merge overlap the locale files over the default locale files."),Object(r.mdx)("p",null,"After we've gotten our ",Object(r.mdx)("inlineCode",{parentName:"p"},"mergedLocaleFiles")," we reduce all them using some of the sidenav example\nfrom the hasura starter to generate an object ",Object(r.mdx)("inlineCode",{parentName:"p"},"items")," that contain more items\n(tl;dr: our sidenav in object/array form)."),Object(r.mdx)("p",null,"Our Tree component then takes that data, and renders our ",Object(r.mdx)("inlineCode",{parentName:"p"},"Sidenav_Node")," component by mapping\nthrough all of the elements."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Importantly"),", content creators can specify an ",Object(r.mdx)("inlineCode",{parentName:"p"},"order")," in the frontmatter of their files which\nis taken into account by the algorithm in ",Object(r.mdx)("inlineCode",{parentName:"p"},"Sidenav_Tree"),' and will determine the order in which links\nto different pages appear in the sidenav (otherwise this would happen alphabetically, which is not\nideal). The "order" number can range from -infinity -> infinity, and pages will be ordered\nrelative to their siblings based on these simple rules:'),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"If order exists in a file it will always be above files without order."),Object(r.mdx)("li",{parentName:"ol"},"The lower the order number, the higher it is in the list. 0 -> 10 is Top -> Bottom"),Object(r.mdx)("li",{parentName:"ol"},"If relative files have the same order (ie. human error) then they will be sorted alphabetically of their Title."),Object(r.mdx)("li",{parentName:"ol"},"Files without order are sorted in alphabetical order of their title (Title rule applies, localeCompare is used for non english characters).")),Object(r.mdx)("h2",null,"Breadcrumbs"),Object(r.mdx)("p",null,"Breadcrumbs are very simple. They are aware of their location in the app, run a query to get all the MDX,\nand then breaks down the data blob based on our current route to produce an array of objects to be rendered."),Object(r.mdx)("p",null,"You would think that we could just utilize the route/uri and convert those, however this solution doesn't\ncover every edge case. Based on our specs, the expectation is that the Breadcrumb labels will match the\ntitle (keeping to the Title Rule). So we HAVE to pull down their path, frontmatter, and headings to generate\nthe title and url for the label."),Object(r.mdx)("p",null,"It will look something like this:\n",Object(r.mdx)("strong",{parentName:"p"},"Home / Learn / Bounties / ... / ... / ... / ... / Page we're on")),Object(r.mdx)("p",null,"Note: If we're more than 3 levels deep in directories then our specs showed that we need to display\nellipsis in place of their full title. They are still clickable links though."),Object(r.mdx)("h2",null,"404s"),Object(r.mdx)("p",null,'Following the philosophy of "content creators write the website" means we should allow them to\nwrite 404 pages as well. Yes, from a developer standpoint this sounds outlandish, but because our\ncontent (specifically our translations) are all encapsulated in the content folder it should stay that way\n(instead of having translators bounce into code to fix the 404 page).'),Object(r.mdx)("p",null,"The solution is to have one 404.js page live in the ",Object(r.mdx)("inlineCode",{parentName:"p"},"src/pages")," directory, which performs a static query to\npull down all ",Object(r.mdx)("inlineCode",{parentName:"p"},"404.mdx")," pages at the top level of a locale folder, i.e. ",Object(r.mdx)("strong",{parentName:"p"},"content/locale(en)/404.mdx"),".\nSimilarly to ",Object(r.mdx)("inlineCode",{parentName:"p"},"header.mdx")," files we then render the body of the current locale mdx content."),Object(r.mdx)("p",null,"If no 404 exists for the current locale we default to en. If no en 404 exists, we use an inline developer 404 page."))}h.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var a=n("rePB"),o=n("q1tI"),r=n("2A+t"),i=n("izhR"),l=(n("xEQ+"),n("YwZP")),s=n("tW5L"),c=n("4XhP"),d=n("/xXG"),h=n("d+M2");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.a=function(e){var t=e.children,n=e.pageContext,u=e.uri,m=n.frontmatter,b=m.title,f=m.description,g=m.keywords,j=m.featuredImage,x=m.status,O=m.hideLanguageSelector,w=m.hideBreadcrumbs,y="object"==typeof x?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:x.text},x):{children:x},v=Object(l.useLocation)().pathname.split("/")[2],N=void 0!==v&&""!==v,k={title:b||function(){var e=o.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||u.split("/").pop(),description:f,keywords:g,featuredImage:j};return Object(r.c)(o.Fragment,null,Object(r.c)(h.b,k),x&&Object(r.c)(i.f,{sx:{marginTop:N?2:0}},Object(r.c)(d.l,Object.assign({sticky:!0},y,{sx:{width:"100%"}}))),(!w||N&&!O)&&Object(r.c)(i.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:N?0:[3,3,0]}},!w&&Object(r.c)(c.a,null),N&&!O&&Object(r.c)(s.b,null)),Object(r.c)(i.f,{sx:N&&!O?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-resources-engineering-navigation-mdx-3940aa9b556a0bd08413.js.map