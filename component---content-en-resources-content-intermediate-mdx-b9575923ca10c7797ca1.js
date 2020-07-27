(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{wEYN:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return k}));var o=t("zLVn"),a=(t("q1tI"),t("7ljp")),i=t("z1h2"),c={},l=function(e){return function(n){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",n)}},s=l("Aligner"),d=l("Image"),m=l("List"),r=l("Box"),p=l("Link"),h=l("CTA"),x=l("Accordion"),u=l("Checklist"),b=l("StatusBanner"),O=l("Process"),j=l("Column"),g=l("Chocolate"),y=l("Icon"),f=l("Categories"),w={_frontmatter:c},T=i.a;function k(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.mdx)(T,Object.assign({},w,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("h1",null,"Intermediate"),Object(a.mdx)("p",null,"Our Basic guide showed how Callouts and CTAs require each piece of content to start on a new line.\nThis is because each new mdx line is interpreted as a new ",Object(a.mdx)("strong",{parentName:"p"},"child")," when it is passed to the magic box which\nturns it into a React component. This means, when using more advanced components, you'll need to be aware not\njust of the props you're specifying in the actual tag, like ",Object(a.mdx)("inlineCode",{parentName:"p"},"primaryOutline")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"icon"),", but also the order\nin which you write the content in each component and ",Object(a.mdx)("strong",{parentName:"p"},"leaving new lines between each separate piece"),"."),Object(a.mdx)(s,{xCenter:!0,sx:{marginBottom:3},mdxType:"Aligner"},Object(a.mdx)(d,{src:"../../../images/children.jpg",mdxType:"Image"})),Object(a.mdx)("h2",null,"Lists"),Object(a.mdx)("p",null,"The list component is an example of why mdx having an opinion in how it renders components works\nin our favor. With mdx, we can order our children consistently.\nThis allows us to create smart hooks for rendering each element, which is a fancy way of saying that\nwe can create really beautiful lists with more functionality and visual pizzaz than you could ever\ndream of having in normal md files. Let's dive right in."),Object(a.mdx)("p",null,"The rule is ",Object(a.mdx)("strong",{parentName:"p"},"scripting and composition come FIRST"),", which just means that you can use the list component\nin the same way you'd write lists normally. Generally we write lists beginning with a hyphen in md. You can use the hyphen,\nor not, when writing content in our ",Object(a.mdx)("inlineCode",{parentName:"p"},"List")," component - either way it will render the same thing:"),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"basic-list.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<List>\n\nHello World\n\n</List> \n\n<List>\n\nHeader\n\nSub Content\n\n</List>\n\n<List>\n\n<Link to="/">\n\nHello World\n\n</Link>\n\n</List>\n')),Object(a.mdx)("p",null,"All end up looking like this:"),Object(a.mdx)(m,{mdxType:"List"},Object(a.mdx)("p",null,"Hello World")),Object(a.mdx)(m,{mdxType:"List"},Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)("p",null,"Header"),Object(a.mdx)("p",null,"Sub Content"))),Object(a.mdx)(m,{mdxType:"List"},Object(a.mdx)(p,{to:"/",mdxType:"Link"},Object(a.mdx)("p",null,"Hello World"))),Object(a.mdx)("p",null,"If you want a list element with sub content, that's easy enough to organise:"),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"subcontent-list.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<List>\n\n<Box>\n\nHeader\n\nSub content\n\n</Box>\n\n</List>\n")),Object(a.mdx)("p",null,"Which renders like this:"),Object(a.mdx)(m,{mdxType:"List"},Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)("p",null,"Header"),Object(a.mdx)("p",null,"Sub content"))),Object(a.mdx)("p",null,"For more complex sub content, we recommend using a Box:"),Object(a.mdx)(m,{mdxType:"List"},Object(a.mdx)("p",null,"Element Header"),Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(h,{mdxType:"CTA"}," How About This? "),Object(a.mdx)(m,{mdxType:"List"},"A list in a list?!"))),Object(a.mdx)("hr",null),Object(a.mdx)(m,{mdxType:"List"},Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)("p",null,"Element Header"),Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(h,{mdxType:"CTA"}," How About? "),Object(a.mdx)(m,{mdxType:"List"},Object(a.mdx)("p",null,"A list in a list?!"))))),Object(a.mdx)("p",null,"Want to render a few links? Easy! It's important to see, however, that\nthese are links that are only in content, and not a Link Element (see more on this below)."),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"list-of-links.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<List>\n \n<Box>\n\n<Link to="/">Writing style guide →</Link>\n\n</Box>\n\n\n<Box>\n\n<Link to="/">Writing style guide →</Link>\n\n</Box>\n\n\n<Box>\n\n<Link to="/">Writing style guide →</Link>\n\n</Box>\n\n</List>\n')),Object(a.mdx)("p",null,"Which ends up looking like this:"),Object(a.mdx)(m,{mdxType:"List"},Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(p,{to:"/",mdxType:"Link"},"Writing style guide →")),Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(p,{to:"/",mdxType:"Link"},"Writing style guide →")),Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(p,{to:"/",mdxType:"Link"},"Writing style guide →"))),Object(a.mdx)(h,{mdxType:"CTA"},Object(a.mdx)("p",null,"NOTE: Mind the gap! There should be a gap between list elements that will be on the same level\nor mdx will not recognize them as seperate elements.")),Object(a.mdx)("p",null,"It's possible to have an entire list element be a link by providing the Link component like so:"),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"list-as-link.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<List>\n\n<Link to="https://makerdao.com">\n\nMakerDao\n\n</Link>\n\n\n<Link to="/learn">\n\nLearn\n\n</Link>\n\n</List>\n\n\n')),Object(a.mdx)(h,{mdxType:"CTA"},Object(a.mdx)("p",null,"NOTE: Mind the even bigger gap! There should be 2 new lines between each link as a list item\notherwise mdx will only render the first item in your list and nothing else!")),Object(a.mdx)("p",null,"Which both end up looking like this:"),Object(a.mdx)(m,{mdxType:"List"},Object(a.mdx)(p,{to:"https://makerdao.com",mdxType:"Link"},Object(a.mdx)("p",null,"MakerDao")),Object(a.mdx)(p,{to:"/learn",mdxType:"Link"},Object(a.mdx)("p",null,"Learn"))),Object(a.mdx)("p",null,"These links are also capable of having subcontent as well:"),Object(a.mdx)(m,{mdxType:"List"},Object(a.mdx)(p,{to:"https://makerdao.com",mdxType:"Link"},Object(a.mdx)("p",null,"MakerDao"),Object(a.mdx)("p",null,"Sub content")),Object(a.mdx)(p,{to:"/learn",mdxType:"Link"},Object(a.mdx)("p",null,"Learn"),Object(a.mdx)("p",null,"subcontent"))),Object(a.mdx)("p",null,"If all this isn't enough to blow your hair back, there's some extra flair:"),Object(a.mdx)("ol",null,Object(a.mdx)("li",{parentName:"ol"},"If the link is external, the arrow icon will point up-right to mimic the design language of other external links on the website."),Object(a.mdx)("li",{parentName:"ol"},"If you hover over the elements I added some minor juice to make the arrows move.")),Object(a.mdx)("h3",null,"Differences between Ordered Lists and Unordered Lists"),Object(a.mdx)("p",null,"There are none at the moment. The List component recognizes each type and renders\nthem the same. Check out ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/community-portal/pull/45"}),"this PR")," for further\nexamples of all the crazy things you can put in our list component and to deepend your understanding\nand appreciation of children."),Object(a.mdx)("p",null,"We also DO NOT want to replace the expected behavior of how unordered lists and ordered lists\nwritten outside of the context of the list component or its sub-content."),Object(a.mdx)("h2",null,"Accordion"),Object(a.mdx)("p",null,"So you want to make a list, but with a lot of content, and you don't want to take up a lot of space\non the page? Sounds like you need a collapsable accordion menu... The Accordion component is ultra simple and\nscripting works with the same child rule. Except this time:"),Object(a.mdx)("ol",null,Object(a.mdx)("li",{parentName:"ol"},"The first child that appears is the header of the accordion."),Object(a.mdx)("li",{parentName:"ol"},"Everything AFTER the first child will be included in the collapsable content.")),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"accordion.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Accordion>\n\n## Hello World\n\nSome other content\n\n</Accordion>\n\n<Accordion>\n\n## Am I eligible to receive a micro-grant if Maker and Dai are only one part of my agenda?\n\nSome other content inside of an accordion!\n\n> CTA content inside of Accordion\n\n![Starfox](../images/starfox.png)\n\n### Let\'s see how this works?\n\n</Accordion>\n\n<Accordion>\n\n## Some other content inside of an accordion!\n\n### Let\'s see how this works? \n\n</Accordion>\n\n<Accordion openIcon="chevron_down" closeIcon="chevron_up">\n\nOf course, it\'s also possible to have your own icons for opening and closing\n\n</Accordion>\n\n<Accordion defaultOpen>\n\nAnd you can control whether the menu defaults to being open or closed...\n\nThis content will show by default now.\n\n</Accordion>\n')),Object(a.mdx)(x,{mdxType:"Accordion"},Object(a.mdx)("h2",null,"Hello World"),Object(a.mdx)("p",null,"Some other content")),Object(a.mdx)(x,{mdxType:"Accordion"},Object(a.mdx)("h2",null,"Am I eligible to receive a micro-grant if Maker and Dai are only one part of my agenda?"),Object(a.mdx)("p",null,"Some other content inside of an accordion!"),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},"CTA content inside of Accordion")),Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"../images/starfox.png",alt:"Starfox"}))),Object(a.mdx)("h3",null,"Let's see how this works?")),Object(a.mdx)(x,{mdxType:"Accordion"},Object(a.mdx)("h2",null,"Some other content inside of an accordion!"),Object(a.mdx)("h3",null,"Let's see how this works?")),Object(a.mdx)(x,{openIcon:"chevron_down",closeIcon:"chevron_up",mdxType:"Accordion"},Object(a.mdx)("p",null,"Of course, it's also possible to have your own icons for opening and closing")),Object(a.mdx)(x,{defaultOpen:!0,mdxType:"Accordion"},Object(a.mdx)("p",null,"And you can control whether the menu defaults to being open or closed..."),Object(a.mdx)("p",null,"This content will show by default now.")),Object(a.mdx)("h2",null,"Checklist"),Object(a.mdx)("p",null,"This is another simple component meant to be more visually engaging. It is ",Object(a.mdx)("strong",{parentName:"p"},"not")," interactive - it's\njust meant to organise content in a specific way, mostly for guide pages like preparing for hackathons etc.\nLike all the above, it too follows the Child Rule."),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"checkbox.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Checklist>\n\nWe can put **anything** inside this component\n\n> How about a CTA?\n\n<StatusBanner notice>\n\nOr a Status Banner...\n\n</StatusBanner>\n\n<Image src="../images/starfox.png" />\n\n#### Now we\'re talking!\n\n</Checklist>\n')),Object(a.mdx)("p",null,"Which ends up looking like this:"),Object(a.mdx)(u,{mdxType:"Checklist"},Object(a.mdx)("p",null,"We can put ",Object(a.mdx)("strong",{parentName:"p"},"anything")," inside this component"),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},"How about a CTA?")),Object(a.mdx)(b,{notice:!0,mdxType:"StatusBanner"},Object(a.mdx)("p",null,"Or a Status Banner...")),Object(a.mdx)(d,{src:"./images/starfox.png",mdxType:"Image"}),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"checkbox-code.js"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const variable = \"Can't be shown in the code-block above because that's too meta...\"\n")),Object(a.mdx)("h4",null,"Now we're talking!")),Object(a.mdx)("h2",null,"Process Stepper"),Object(a.mdx)("p",null,"The process stepper is a carbon copy of the list component, except shaved down to ignore the Link requirements.\nThis means the same mindset of scripting a process element is in place. The children dictate the content,\nand how the children are seperated determine each step in the process."),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"process-stepper.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<Process>\n\n### Child 1\n\nChild 2 \n\n<Box>\n\n### Child 3\n\nBunches and bunches of content can go in here. Anything you like, tbh.\n\n</Box>\n\n<Box>\n\n### Child 4\n\n> Even CTAs\n\n</Box>\n\n</Process>\n")),Object(a.mdx)(O,{mdxType:"Process"},Object(a.mdx)("h3",null,"Child 1"),Object(a.mdx)("p",null,"Child 2 "),Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)("h3",null,"Child 3"),Object(a.mdx)("p",null,"Bunches and bunches of content can go in here. Anything you like, tbh.")),Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)("h3",null,"Child 4"),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},"Even CTAs")),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"or inline code \n")))),Object(a.mdx)("h2",null,"Box"),Object(a.mdx)("p",null,"You'll notice that we've begun wrapping our children in boxes. This is the way to overcome the child rule\nand sneak in more content to one specific child should the need arise. If you wrap your multi-line content\ninto a ",Object(a.mdx)("inlineCode",{parentName:"p"},"<Box>"),", then this will be read and rendered as a single child. You can already see how useful this\nis in the context of complex lists or process steppers, and it will become more apparent with other, more visual\ncomponents like Touts."),Object(a.mdx)("p",null,"Basically, a ",Object(a.mdx)("inlineCode",{parentName:"p"},"<Box>")," is just the old html ",Object(a.mdx)("inlineCode",{parentName:"p"},"<div>")," element updated for this brave new world we'll be building together.\nNow it's time to head over to the Advanced tutorial and begin understanding our visual components and how to style everything."),Object(a.mdx)("h2",null,"Column"),Object(a.mdx)("p",null,'The column is a great example of where it is almost always necessary to wrap your children in boxes. Our specs\ncalled for a "2 Column Comparison component" but we developers must implement every edge case including when there\'s only 1 element.'),Object(a.mdx)("p",null,"This component follows the same principle as other advanced components in that each child is it's own column element. "),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"columns.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<Column>\n\nHello World\n\n</Column>\n\n\n<Column>\n\n<Box>\n\n- Tools that directly benefit Dai users\n- Tools that increase Dai adoption\n- Tools that increase access to personal liquidity.\n\n</Box>\n\n- A Heading\n    - Tools that directly benefit Dai users\n    - Tools that increase Dai adoption\n    - Tools that increase access to personal liquidity.\n\n</Column>\n")),Object(a.mdx)(j,{mdxType:"Column"},Object(a.mdx)("p",null,"Hello World")),Object(a.mdx)(j,{mdxType:"Column"},Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Tools that directly benefit Dai users"),Object(a.mdx)("li",{parentName:"ul"},"Tools that increase Dai adoption"),Object(a.mdx)("li",{parentName:"ul"},"Tools that increase access to personal liquidity."))),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"A Heading",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},"Tools that directly benefit Dai users"),Object(a.mdx)("li",{parentName:"ul"},"Tools that increase Dai adoption"),Object(a.mdx)("li",{parentName:"ul"},"Tools that increase access to personal liquidity."))))),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},'MIND THE GAPS: If there\'s only 1 new line between "-" element it will count them\nas part of the same UL instead of as seperate children.')),Object(a.mdx)("p",null,"There is a unique case: if you want a column with a header, follow this pattern:"),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"columns-headers.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<Column>\n\n- ## What we fund\n    - <Box>\n\n        - Tools that directly benefit Dai users\n        - Tools that increase Dai adoption\n        - Tools that increase access to personal liquidity.\n\n      </Box>\n\n\n- ## What we don't fund\n    - <Box>\n\n        - Pure R&D\n        - Information gathering \n        - Additional runway\n        - Ethereum ecosystem improvements\n        <br/>\n        <br/>\n        \n        We also do not allocate grants that contain large marketing budgets and/or Dai giveaways and airdrops.\n\n      </Box>\n\n\n</Column>\n")),Object(a.mdx)(j,{mdxType:"Column"},Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("h2",{parentName:"li"},"What we fund"),Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},"Tools that directly benefit Dai users"),Object(a.mdx)("li",{parentName:"ul"},"Tools that increase Dai adoption"),Object(a.mdx)("li",{parentName:"ul"},"Tools that increase access to personal liquidity."))))))),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("h2",{parentName:"li"},"What we don't fund"),Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},"Pure R&D"),Object(a.mdx)("li",{parentName:"ul"},"Information gathering "),Object(a.mdx)("li",{parentName:"ul"},"Additional runway"),Object(a.mdx)("li",{parentName:"ul"},"Ethereum ecosystem improvements",Object(a.mdx)("br",null),Object(a.mdx)("br",null))),Object(a.mdx)("p",{parentName:"li"},"We also do not allocate grants that contain large marketing budgets and/or Dai giveaways and airdrops."))))))),Object(a.mdx)("h2",null,"Chocolate Box"),Object(a.mdx)("p",null,"The Chocolate component is a 3 column component. It's the equivalent of using a Grid,\nexcept that it's opinionated on its sizing and gaps. The \"Box\" part of chocolate boxes comes from the combined use of the Box component\nto render content in each grid cell."),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"chocolate-box.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<Chocolate>\n\n<Box>\n\ncontent\n\n</Box>\n\n</Chocolate>\n")),Object(a.mdx)(g,{mdxType:"Chocolate"},Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)("p",null,"content"))),Object(a.mdx)("p",null,"The child rule here works the same. Each child is 1 grid cell (Box) in the Chocolate component.\nWe recommend that you use the Box component for more detailed content."),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},Object(a.mdx)("strong",{parentName:"p"},"NOTE"),": if the first child is an icon, we will set its size to 52px (default), otherwise it will be smaller.")),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"chocolate-icons.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Chocolate>\n\n<Box>\n   \n<Icon name="eye"/>\n\nMeasure community sentiment about issues affecting the MakerDAO ecosystem.\n\n[See example](https://example.com)\n\n</Box>\n\n<Box>\n   \n<Icon name="search"/>\n\nDetermine the consensus that something needs to be done in response to a perceived issue.\n\n[See example](https://example.com)\n\n</Box>\n\n<Box>\n   \n<Icon name="search"/>\n\nDetermine the consensus that something needs to be done in response to a perceived issue.\n\n[See example](https://example.com)\n\n</Box>\n\n<Box>\n   \nDetermine the consensus that something needs to be done in response to a perceived issue.\n\n[See example](https://example.com)\n\n// This will appear smaller as it is not given the default iconSize\n<Icon name="search"/>\n\n</Box>\n\n<Box>\n\n// This will be given the default iconSize of 52px\n<Icon name="search"/>\n\nDetermine the consensus that something needs to be done in response to a perceived issue.\n\n[See example](https://example.com)\n\n</Box>\n\n</Chocolate>\n')),Object(a.mdx)(g,{mdxType:"Chocolate"},Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(y,{name:"eye",mdxType:"Icon"}),Object(a.mdx)("p",null,"Measure community sentiment about issues affecting the MakerDAO ecosystem."),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://example.com"}),"See example"))),Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(y,{name:"search",mdxType:"Icon"}),Object(a.mdx)("p",null,"Determine the consensus that something needs to be done in response to a perceived issue."),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://example.com"}),"See example"))),Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(y,{name:"search",mdxType:"Icon"}),Object(a.mdx)("p",null,"Determine the consensus that something needs to be done in response to a perceived issue."),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://example.com"}),"See example"))),Object(a.mdx)(r,{mdxType:"Box"},"Determine the consensus that something needs to be done in response to a perceived issue.",Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://example.com"}),"See example")),Object(a.mdx)(y,{name:"search",mdxType:"Icon"})),Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(y,{name:"search",mdxType:"Icon"}),Object(a.mdx)("p",null,"Determine the consensus that something needs to be done in response to a perceived issue."),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://example.com"}),"See example")))),Object(a.mdx)("h2",null,"Categories"),Object(a.mdx)("p",null,"The Categories component is nearly the same as the Chocolate component, except that it\nhas a different visual design (it's width is 107.58% and not 100% of the content's parent container).\nIt also has a different rendering style depending on whether there are 2 or 4 elements.\nThe stark difference for you is that you only control the content of the Category container,\nnot the entire box itself (i.e. you can't change the background of a category box, only it's contents)."),Object(a.mdx)("p",null,"The component is also capable of having a unique status bar placement. All that's needed is that\nyour categories child has the status banner first:"),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"categories.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Categories>\n\n<Box>\n\n<StatusBanner warning> Funding is currently closed </StatusBanner>\n\n// This will have a size of 64px   \n<Icon name="metamask"/>\n\n[Hackathons](/funding/hackathons)\n\nOrganising a hackathon? Apply for a hackathon micro grant.\n\n</Box>\n\n<Box>\n\n// This will have a size of 64px\n<Icon name="metamask"/>\n\n[Hackathons](/funding/hackathons)\n\nOrganising a hackathon? Apply for a hackathon micro grant.\n\n</Box>\n\n<Box>\n\n<StatusBanner warning> Funding is currently closed </StatusBanner>\n   \n[Hackathons](/funding/hackathons)\n\n// This will NOT have the default 64px size applied\n<Icon name="metamask"/> \n\nOrganising a hackathon? Apply for a hackathon micro grant.\n\n</Box>\n\n</Categories>\n')),Object(a.mdx)(f,{mdxType:"Categories"},Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(b,{warning:!0,mdxType:"StatusBanner"}," Funding is currently closed "),Object(a.mdx)(y,{name:"metamask",mdxType:"Icon"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/funding/hackathons"}),"Hackathons")),Object(a.mdx)("p",null,"Organising a hackathon? Apply for a hackathon micro grant.")),Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(y,{name:"metamask",mdxType:"Icon"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/funding/hackathons"}),"Hackathons")),Object(a.mdx)("p",null,"Organising a hackathon? Apply for a hackathon micro grant.")),Object(a.mdx)(r,{mdxType:"Box"},Object(a.mdx)(b,{warning:!0,mdxType:"StatusBanner"}," Funding is currently closed "),"[Hackathons](/funding/hackathons)",Object(a.mdx)(y,{name:"metamask",mdxType:"Icon"}),Object(a.mdx)("p",null,"Organising a hackathon? Apply for a hackathon micro grant."))))}k.isMDXComponent=!0},z1h2:function(e,n,t){"use strict";var o=t("rePB"),a=t("q1tI"),i=t.n(a),c=t("2A+t"),l=t("izhR"),s=t("xEQ+"),d=t.n(s),m=t("YwZP"),r=t("d+M2"),p=t("4XhP"),h=function(e){var n=e.children,t=e.seo;return Object(c.c)(p.f,null,Object(c.c)(l.p,{sx:{flexDirection:"column",minHeight:"100vh",height:"100%"}},Object(c.c)(r.b,t),Object(c.c)(p.c,null),Object(c.c)(l.p,{as:"main",sx:{maxWidth:"1364px",flex:"1 0 auto",width:"100%",m:"0 auto",pr:0,pt:["90px","90px","unset"],position:"relative"},className:"content-boundary"},n),Object(c.c)(p.b,null)))},x=t("tW5L"),u=t("/xXG");function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}n.a=function(e){var n=e.children,t=e.pageContext,a=e.uri,s=t.frontmatter,r=s.title,O=s.description,j=s.keywords,g=s.featuredImage,y=s.status,f=s.hideLanguageSelector,w=s.hideSidenav,T=s.hideBreadcrumbs,k="object"==typeof y?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({children:y.text},y):{children:y},N=Object(m.useLocation)().pathname.split("/")[2],v=void 0!==N&&""!==N,B=v&&!w,C={title:r||function(){var e=i.a.Children.toArray(n).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||a.split("/").pop(),description:O,keywords:j,featuredImage:g};return Object(c.c)(h,{seo:C},B&&Object(c.c)(d.a,{boundaryElement:".content-boundary",sx:{width:"20%",minWidth:"260px",display:["none","none","initial"]},dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1},Object(c.c)(p.g,null)),Object(c.c)(l.p,{sx:{flexGrow:1,flexDirection:"column"}},Object(c.c)("article",{sx:{pl:v?[4,4,"64px"]:0,mt:v?[4,4,"59px"]:0,pb:4,pr:v?4:0}},y&&Object(c.c)(l.f,{sx:{marginTop:v?2:0}},Object(c.c)(u.m,Object.assign({sticky:!0},k,{sx:{width:"100%"}}))),(!T||v&&!f)&&Object(c.c)(l.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],mt:B?"":"2rem",px:v?0:[3,3,0]}},!T&&Object(c.c)(p.a,null),v&&!f&&Object(c.c)(x.b,null)),Object(c.c)(l.f,{sx:v&&!f?{"& > *:nth-child(1)":{lineHeight:"normal"},"& > *:nth-child(1), & > *:nth-child(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-child(2)":{mb:"32px"}}:{}},n))))}}}]);
//# sourceMappingURL=component---content-en-resources-content-intermediate-mdx-b9575923ca10c7797ca1.js.map