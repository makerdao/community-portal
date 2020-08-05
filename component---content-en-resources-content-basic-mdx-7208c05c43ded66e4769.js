(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{rcLK:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return j}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("z1h2"),s={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.mdx)("div",t)}},c=r("Image"),l=r("Link"),d=r("Button"),m=r("Icon"),u=r("Video"),p=r("Callout"),h=r("CTA"),b=r("StatusBanner"),g={_frontmatter:s},x=i.a;function j(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)(x,Object.assign({},g,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Basic"),Object(o.mdx)("p",null,"Not everyone wants to be a hardcore developer. Writing truly engaging content,\nthat both delights and educates people, is an underrated talent and you\nshouldn't be required to learn all the intricacies of modern web frameworks\njust to produce awesome pages. In the past, the best you could have done\nwould be to write content in your editor of choice, export it into markdown\nand then hope that some developer somewhere can incorporate it and add the styles,\nbuttons, images and other visual features which are required to make content transformational,\nrather than just more boring information."),Object(o.mdx)("p",null,"This site changes all that."),Object(o.mdx)("h2",null,"What is Mdx anyway?"),Object(o.mdx)("p",null,"In short: it's your normal markdown - ",Object(o.mdx)("inlineCode",{parentName:"p"},"md")," - with an added little ",Object(o.mdx)("inlineCode",{parentName:"p"},"x")," factor.\nIn practice, the ",Object(o.mdx)("inlineCode",{parentName:"p"},"x")," means that we can ",Object(o.mdx)("inlineCode",{parentName:"p"},"extend")," the capabilities of markdown\nand, in fact, create entire React components directly in our content files. If you\ndon't know what a React component is, or why you would want to have them in your\ncontent files, don't stress! This section is all about showing you how this is\nactually a writing superpower, and how you can put it to best use when contributing."),Object(o.mdx)("p",null,"You might have used a markdown cheatsheet\nbefore to figure out how to handle headings, links, images, and other basic necessities.\nThe beauty of ",Object(o.mdx)("inlineCode",{parentName:"p"},"mdx")," is that all that stuff still works exactly the same. You'll still be\nwriting what appears - for the most part - to be normal markdown. It's just that\nwe can now do so much more..."),Object(o.mdx)("h2",null,"Images"),Object(o.mdx)("p",null,"Let's take images, for example. If you ever written markdown content before, you'll be\nfamiliar with the way images are added, which remains the same with ",Object(o.mdx)("inlineCode",{parentName:"p"},"mdx"),":"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"basic-image.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"![Basic image example](../../../images/starfox.png)\n")),Object(o.mdx)("p",null,Object(o.mdx)("img",Object.assign({parentName:"p"},{src:"../../../images/starfox.png",alt:"Basic image example"}))),Object(o.mdx)("p",null,"However, because we're extending markdown's capabilities, you could also choose to write:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"react-image.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Image src="../../../images/starfox.png"/>\n')),Object(o.mdx)(c,{src:"../../../images/starfox.png",mdxType:"Image"}),Object(o.mdx)("p",null,"In this case, the result is the same (except for the bottom margin, which we'll fix later).\nUsing the traditional markdown format defaults to how Gatsby generally processes images,\nthough learning how to use the ",Object(o.mdx)("inlineCode",{parentName:"p"},"Image")," tag will allow you to start doing more complicated\nthings later on, like specifying your own styles or passing specific properties to components\nwhich come ready-made with many different options."),Object(o.mdx)("h2",null,"Links"),Object(o.mdx)("p",null,"The same idea goes for links. You're likely used to writing markdown links like this:"),Object(o.mdx)("p",null,Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.youtube.com/watch?v=Qzm_1Tuor1A"}),"Awesome video")),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"basic-link.md"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"[Awesome video](https://www.youtube.com/watch?v=Qzm_1Tuor1A)\n")),Object(o.mdx)("p",null,"Which will still work exactly as you expect it to in ",Object(o.mdx)("inlineCode",{parentName:"p"},"mdx")," files. However, sometimes a link\njust isn't enough. Sometimes, we want to make things a bit more fancy, which is not possible\nusing plain old markdown. Happily, this as easy as specifying a proper React Image was:"),Object(o.mdx)(l,{to:"https://www.chat.makerdao.com",icon:"rocketchat",mdxType:"Link"},"link to with an icon."),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"react-link.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-mdx"}),'<Link to="https://www.chat.makerdao.com" icon="rocketchat">\n  link to with an icon.\n</Link>\n')),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"When writing relative links, be aware that you must write out the full route from after the locale,\ni.e. the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/develop/content/intermediate"}),"Intermediate tutorial")," is linked to like this: ",Object(o.mdx)("inlineCode",{parentName:"p"},"[Intermediate tutorial](/develop/content/intermediate)"),".\nIf you want to link to other internal locales, then specify the locale as well, i.e. ",Object(o.mdx)("inlineCode",{parentName:"p"},"es/develop/content/intermediate"))),Object(o.mdx)("p",null,"The Link component will check whether the link is internal/external;\nif the internal has a locale appened (",Object(o.mdx)("inlineCode",{parentName:"p"},"fr/work_with_us/bounties"),"); and if external links have ",Object(o.mdx)("inlineCode",{parentName:"p"},"https"),"\n(",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"http://google.com"}),"http://google.com")," will automatically be transformed). Internal links are not directory based, like images,\nbut route based as this is a more robust solution for a site with many different contributors."),Object(o.mdx)("h2",null,"Buttons"),Object(o.mdx)("p",null,"This is where React components begin to become more fun, and powerful, than the normal\nmarkdown you're used to. This is becuase we can start adding properties to them,\nor ",Object(o.mdx)("inlineCode",{parentName:"p"},"props")," in developer-lingo."),Object(o.mdx)("p",null,"Sometimes you really need to grab your reader's attention. You need more than even a fancy\nicon. You need a button. We want to"),Object(o.mdx)(d,{to:"#",mdxType:"Button"},"Do This!"),Object(o.mdx)("p",null,"Which is actually very straightforward:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"basic-button.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-mdx"}),'<Button to="#">Do This!</Button>\n')),Object(o.mdx)("p",null,"But this is just the beginning. ",Object(o.mdx)("inlineCode",{parentName:"p"},"Props")," control the appearance of your chosen component. So, instead\nof just having a normal icon with your link or an ordinary button, you can do all sorts of funky things:"),Object(o.mdx)(d,{secondary:!0,to:"#",mdxType:"Button"},"secondary")," ",Object(o.mdx)(d,{primary:!0,outline:!0,to:"#",mdxType:"Button"},"primary outline")," ",Object(o.mdx)(d,{secondary:!0,outline:!0,to:"#",mdxType:"Button"},"secondary outline")," ",Object(o.mdx)(d,{to:"#",mdxType:"Button"},Object(o.mdx)(m,{name:"rocketchat",mdxType:"Icon"})," Rocket Chat"),Object(o.mdx)(d,{disabled:!0,inline:!0,to:"/resources/palette",mdxType:"Button"}," ","Disabled Inline"," "),Object(o.mdx)(d,{secondary:!0,inline:!0,to:"/resources/palette",mdxType:"Button"}," ","Inlined Secondary"," "),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"advanced-buttons.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Button secondary to="#">\n  secondary\n</Button>{" "}\n\n<Button primary outline to="#">\n  primary outline\n</Button>{" "}\n\n<Button secondary outline to="#">\n  secondary outline\n</Button>{" "}\n\n<Button to="#">\n  <Icon name="rocketchat" /> Rocket Chat\n</Button>\n\n<Button disabled inline to="/resources/palette">\n  {" "}\n  Disabled Inline{" "}\n</Button>\n\n<Button secondary inline to="/resources/palette">\n  {" "}\n  Inlined Secondary{" "}\n</Button>\n')),Object(o.mdx)("p",null,"The big question here is where to go to see all the different property options, and icons, you could\npotentially add to your buttons and links? We've got you covered there too:"),Object(o.mdx)(l,{to:"https://design-system.mkr-js-prod.now.sh/",icon:"eye",mdxType:"Link"},"Colours"),Object(o.mdx)(l,{to:"https://design-system.mkr-js-prod.now.sh/",icon:"dai",mdxType:"Link"},"Icons"),Object(o.mdx)("h2",null,"Inline Code"),Object(o.mdx)("p",null,"By now, you're likely wondering how to write all these cool inline code blocks...\nWell, the basics are exactly the same as regular markdown: just use three backticks ",Object(o.mdx)("strong",{parentName:"p"},"`","``"),"."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{}),'const variable = "hello";\n')),Object(o.mdx)("p",null,"If you'd like your code to be highlighted specifically just provide a language after the backticks, like ",Object(o.mdx)("strong",{parentName:"p"},"`","``js"),"\nand a language tab will appear on the right."),Object(o.mdx)("p",null,"NOTE: We only support so many languages, and css, html, and js are coded to render their tabs.\nSee ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"}),"here")," for languages supported."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const variable = "hello";\n')),Object(o.mdx)("p",null,"If you'd like the code to have a filename attached, you need to add a title attribute, such as\n",Object(o.mdx)("strong",{parentName:"p"},"`","``js:title=calculateTreeData.js")),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"calculateTreeData.js"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const variable = "hello";\n')),Object(o.mdx)("h2",null,"Inline Videos"),Object(o.mdx)("p",null,'Inline code is not enough though, we want more cool inline tricks! Bring on those easily-embedded videos! This\nisn\'t so much a "component" as it is an integration of gatsby-remark-embed-video for ease of use in mdx. You\ncan write some simple md to embed a responsive iframe from YouTube, vimeo, videoPress and twitch (though twitch is buggy\nand we recommend you stay away from it). Please see ',Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-remark-embed-video/?=remark-embed"}),"their docs")," for more detail."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md:embed-video.mdx"}),"`video: [What is DAI?](https://vimeo.com/411464106)`\n\n`vimeo: [What is DAI?](411464106)`\n\n**A11Y support**\n\n`video: [Your love!](https://www.youtube.com/watch?v=mzDVaKRApcg)`\n\n`youtube: [Your love!](mzDVaKRApcg)`\n")),Object(o.mdx)("p",null,Object(o.mdx)("div",Object.assign({parentName:"p"},{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"50%",position:"relative",height:"0",overflow:"hidden"}})," ",Object(o.mdx)("div",Object.assign({parentName:"div"},{className:"embedVideo-container"})," ",Object(o.mdx)("iframe",Object.assign({parentName:"div"},{title:"",src:"https://player.vimeo.com/video/411464106",className:"embedVideo-iframe",style:{border:"0",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},allowFullScreen:!0}))," ")," ")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"A11Y support")),Object(o.mdx)("p",null,Object(o.mdx)("div",Object.assign({parentName:"p"},{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"50%",position:"relative",height:"0",overflow:"hidden"}})," ",Object(o.mdx)("div",Object.assign({parentName:"div"},{className:"embedVideo-container"})," ",Object(o.mdx)("iframe",Object.assign({parentName:"div"},{title:"Your love!",src:"https://www.youtube.com/embed/mzDVaKRApcg?rel=0",className:"embedVideo-iframe",style:{border:"0",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},allowFullScreen:!0}))," ")," ")),Object(o.mdx)("p",null,"Sometimes, we'll need to embed a video which also links to a specific playlist. Inline videos do not allow\nus to do this, which is an issue for our Governance and Risk call series, amongst others. Therefore, if you're\nwanting to embed a video and link it within a specific YouTube playlist, we do have a bespoke ",Object(o.mdx)("inlineCode",{parentName:"p"},"<Video />")," component for you.\nThis serves as a helper for getting around youtube playlists, but we still recommend using the inline video spec\n(ie. video: ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://urltoyoutubevideo.com"}),"https://urltoyoutubevideo.com"),") for regular inline videos."),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"video-playlist.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Video src="https://www.youtube.com/embed/videoseries?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan"/>\n')),Object(o.mdx)(u,{src:"https://www.youtube.com/embed/videoseries?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan",mdxType:"Video"}),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"NOTE: Embedding a youtube video from a specific playlist requires that you use a url with\n",Object(o.mdx)("strong",{parentName:"p"},"videoseries?list="),", NOT ",Object(o.mdx)("strong",{parentName:"p"},"playlist?="),". See ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://support.google.com/youtube/answer/171780?hl=en"}),"here")," for more info.")),Object(o.mdx)("h2",null,"Callouts and CTAs"),Object(o.mdx)("p",null,"OK, so now we can handle images, links, buttons, and inline code - all of which will make our content really pop\nand we didn't have to ask a single developer to add anything to our work. What a relief... The last\nbasic tool we want to introduce you to, before moving on to more detailed use of React components, is the\nCallout. Sometimes, you don't want the user to take action - you just need to draw attention to a very\nspecific and important part of your content - a note or summary or key takeaway. We've got you covered."),Object(o.mdx)(p,{icon:!0,mdxType:"Callout"},Object(o.mdx)("p",null,'This is a callout with the (default) primary style and the default "warning" icon from dai-ui-icons!')),Object(o.mdx)(p,{icon:"search",secondary:!0,mdxType:"Callout"},Object(o.mdx)("p",null,"This is a callout with the (specified) secondary style and the \"search' icon from dai-ui-icons!")),Object(o.mdx)("p",null,"In addition to callouts, we can do Calls To Action. CTAs are really just good-looking green boxes to be\nused as shorthand when you want to draw attention to a particular piece of content. They do not change if\nyou pass them any props. Callouts are fully fleshed out and they support icons.\nSo, if you want colors and icons, use a Callout. If you just want a green box for attention, use a CTA. This\ncan be achieved either with a ",Object(o.mdx)("inlineCode",{parentName:"p"},"<CTA>")," React component tag, or the simply md blockquote syntax, i.e. ",Object(o.mdx)("inlineCode",{parentName:"p"},">"),"."),Object(o.mdx)(h,{mdxType:"CTA"},Object(o.mdx)("p",null,'One important note is here is that you must ensure your content is on a separate line, with spaces\nin between. This is because of what we call the "Child Rule", which we explain in the next section.')),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"This is also a shorthand way of creating CTAs.")),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"callouts.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-mdx"}),'<Callout icon>\n\nThis is a callout with the (default) primary style and the default "warning" icon from dai-ui-icons!\n\n</Callout>\n\n<Callout icon="search" secondary>\n\nThis is a callout with the (specified) secondary style and the "search\' icon from dai-ui-icons!\n\n</Callout>\n\n<CTA>\n\nImportant note!\n\n</CTA>\n\n> This is also an important note!\n')),Object(o.mdx)("h2",null,"Status Banners"),Object(o.mdx)("p",null,"At various stages in our docs, we need to be able to show the Status of a given project or process. This\nrequires something slightly different from either a Callout or a CTA, so we have the ",Object(o.mdx)("inlineCode",{parentName:"p"},"<StatusBanner>")," component\nwhich comes replete with flexible color props and a bunch of other cool features for the enterprising writer."),Object(o.mdx)(b,{sticky:!0,mdxType:"StatusBanner"},Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"This will stick with us until the end..."))),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"status-banners.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<StatusBanner>\n\n**You're becoming an mdx expert already! [Much wow](#)**\n\n</StatusBanner>\n\n<StatusBanner warning>\n\n**You're becoming an mdx expert already! [Much wow](#)**\n\n</StatusBanner>\n")),Object(o.mdx)(b,{mdxType:"StatusBanner"},Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"You're becoming an mdx expert already! ",Object(o.mdx)("a",Object.assign({parentName:"strong"},{href:"#"}),"Much wow")))),Object(o.mdx)(b,{warning:!0,mdxType:"StatusBanner"},Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"You're becoming an mdx expert already! ",Object(o.mdx)("a",Object.assign({parentName:"strong"},{href:"#"}),"Much wow")))),Object(o.mdx)("p",null,"It gets even better though, because StatusBanner not only give you the ability to control colors and set\nyour own should you require them. They can also receive the ",Object(o.mdx)("inlineCode",{parentName:"p"},"sticky")," prop, which means that they will stick\nto the top of the screen as soon as the user scrolls past them, wherever they are in the page."),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"sticky-status.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<StatusBanner sticky>\n\n**This will stick with us until the end...**\n\n</StatusBanner>\n")),Object(o.mdx)("p",null,"And that's not all. You can even include a StatusBanner in your file's frontmatter, which means that it will\nappear above the breadcrumbs on your page. You can leverage the same options there, defining both its color and\nstickiness in the frontmatter itself. The one at the top of this page is defined below:"),Object(o.mdx)("div",{className:"gatsby-code-title prism-code-title"},"frontmatter-status.mdx"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'status: {text: "You\'ll learn how to create a banner like this in the tutorial below!", notice: true, sticky: false}\n')))}j.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var a=n("rePB"),o=n("q1tI"),i=n("2A+t"),s=n("izhR"),r=(n("xEQ+"),n("YwZP")),c=n("tW5L"),l=n("4XhP"),d=n("/xXG"),m=n("d+M2");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.a=function(e){var t=e.children,n=e.pageContext,p=e.uri,h=n.frontmatter,b=h.title,g=h.description,x=h.keywords,j=h.featuredImage,y=h.status,w=h.hideLanguageSelector,O=h.hideBreadcrumbs,f="object"==typeof y?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:y.text},y):{children:y},v=Object(r.useLocation)().pathname.split("/")[2],k=void 0!==v&&""!==v,N={title:b||function(){var e=o.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||p.split("/").pop(),description:g,keywords:x,featuredImage:j};return Object(i.c)(o.Fragment,null,Object(i.c)(m.b,N),y&&Object(i.c)(s.f,{sx:{marginTop:k?2:0}},Object(i.c)(d.l,Object.assign({sticky:!0},f,{sx:{width:"100%"}}))),(!O||k&&!w)&&Object(i.c)(s.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:k?0:[3,3,0]}},!O&&Object(i.c)(l.a,null),k&&!w&&Object(i.c)(c.b,null)),Object(i.c)(s.f,{sx:k&&!w?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-resources-content-basic-mdx-7208c05c43ded66e4769.js.map