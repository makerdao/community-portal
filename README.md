<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-22-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://camo.githubusercontent.com/c82d5dbe0efc4f71771b4c656fd96b91d6103a8d/68747470733a2f2f7777772e6761747362796a732e636f6d2f4761747362792d4d6f6e6f6772616d2e737667" width="60" />
    ❤️
    <img alt="Dai" src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png" width="60"/>
  </a>
</p>
<h1 align="center">
  Community Development at Maker 
</h1>

The Community Development group's mandate is to directly foster the growth of the MakerDAO ecosystem by incentivizing our most motivated members. We do this through a series of initiatives that encourage people to participate in, and contribute to, the success of the Dai Stablecoin platform. Welcome to our portal, built with [Gatsby](https://github.com/gatsbyjs/gatsby-starter-default) and [DAI UI](https://github.com/makerdao/dai-ui/).

## 🏗 Our Initiatives

### [Community Meetup Grants](/content/en/contribute/meetups/index.mdx)

Community members play an invaluable role in building a stronger MakerDAO ecosystem. The Community Development Group provides the resources needed to increase Dai adoption and help MakerDAO bring stability and financial inclusion to the world. To accomplish these goals, we created a 'Do It Yourself' Meetup guide and microgranting program dedicated to helping anyone create and organize a local community meetup.

### [Community Translations](/content/en/contribute/translations/index.mdx)

We bring MakerDAO educational content to people around the world in their native languages by incentivizing our community translators with Dai bounties.

### [Development Grants Program](/content/en/funding/development-grants/index.mdx)

The MakerDAO Community grants program provides funding for projects that increase Dai adoption, support emerging economies, open new markets, provide novel uses for the stablecoin, or otherwise further the principles of the MakerDAO Foundation.

### [Hackathons](/content/en/funding/hackathon-funding.mdx)

MakerDAO participates in a number of Hackathons every year. This section contains some information about how to request our participation in an upcoming event.

### [Contributing](/content/en/contribute/index.mdx)

If you have any suggestions about how you think these initiatives should work, could be improved, or if you are interested in helping out, please join our [#community-development](https://chat.makerdao.com/channel/community-development) channel and introduce yourself.

## 📚 Our Resources

### [Awesome-MakerDAO](https://github.com/makerdao/awesome-makerdao/)

Awesome-MakerDAO is a community-curated list of MakerDAO-related resources and content to which anyone can contribute. It contains official documentation, beginner guides, in-depth analysis, links to 3rd party tools, partnership announcements, AMAs, podcasts, and much more.

### [MakerDAO MCD FAQs](/faqs/index.md)

This section provides answers to commonly asked questions about everything MakerDAO.

We welcome you to help improve the MakerDAO FAQs by submitting Pull Requests or reaching out to us with feedback.

### [Governance](/content/en/learn/governance/index.mdx)

To ensure good governance and accountability, we've set up this section to contain helpful resources such as transcripts of the meetings, historical summaries, and more.

### [Onboarding Guides](onboarding/README.md)

These are community-built guides to help onboard different types of users into our ecosystem. Whether you're a potential MKR voter, a Vault owner, or Dai user, this section should have something for you. If it doesn't, reach out to us in our [chat](https://chat.makerdao.com/channel/community-development) or [forums](https://forum.makerdao.com/). This section has a handful of guides _coming soon™️._

## 🚀 Our Stack

We've built this as a Theme-UI Gatsby starter for projects that will use Dai-UI theme kits.

_See the official [Dai-UI](https://github.com/makerdao/dai-ui) repo for more in-depth information._

1.  **Clone**

    ```shell
    git clone https://github.com/makerdao/community-portal.git
    ```

2.  **Install**
    _dai-ui-theme-maker and dai-ui-icons are pre-installed._
    _This project makes use of `yarn`. You'll likely need to use npm to get everything setup once cloned._

    ```shell
    # This project makes use of yarn.
    yarn
    ```

    PREREQUISITES: You need to have these dependencies installed before the "yarn" command.
    ○ https://brew.sh/
    ○ https://nodejs.org/en/
    ○ https://yarnpkg.com/

3.  **Start**

    ```shell
     yarn start
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at some important files and directories you'll see in this project.

    .
    ├── node_modules
    ├── src
    |    ├── gatsby-plugin-theme-ui
    |    ├── images
    |    ├── modules
    |    └── pages
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md



### Important Directories

1. **`src/gatsby-plugin-theme-ui`**: This directory contains all files that will be consumed by the gatsby-plugin-theme-ui on build and provided to components through context. For more info see their [docs](https://theme-ui.com/packages/gatsby-plugin#customizing-the-theme).

2. **`src/modules`**: This directory is the mirror image of a components folder. Except it's organized by contextual focused. You can find all your ui related components in the ui folder.

### Gatsby Usual Suspects

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## ❤️ Made with Love

Dai-UI - MakerDAO's Dai-UI Team

This Starter - <a href="https://github.com/MaximumCrash" target="_blank">@Maximum_Crash</a> and <a href="https://github.com/andytudhope" target="_blank">@andytudhope</a>

<!-- AUTO-GENERATED-CONTENT:END -->

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://rejontaylor.com"><img src="https://avatars1.githubusercontent.com/u/9157341?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Réjon Taylor-Foster</b></sub></a><br /><a href="https://github.com/makerdao/community-portal/commits?author=MaximumCrash" title="Code">💻</a> <a href="#design-MaximumCrash" title="Design">🎨</a> <a href="#example-MaximumCrash" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/amy-jung"><img src="https://avatars1.githubusercontent.com/u/26228406?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Amy Jung</b></sub></a><br /><a href="#design-amy-jung" title="Design">🎨</a> <a href="https://github.com/makerdao/community-portal/commits?author=amy-jung" title="Documentation">📖</a> <a href="#maintenance-amy-jung" title="Maintenance">🚧</a> <a href="#mentoring-amy-jung" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/makerdao/community-portal/pulls?q=is%3Apr+reviewed-by%3Aamy-jung" title="Reviewed Pull Requests">👀</a> <a href="#financial-amy-jung" title="Financial">💵</a> <a href="#projectManagement-amy-jung" title="Project Management">📆</a> <a href="#mentoring-amy-jung" title="Mentoring">🧑‍🏫</a> <a href="#video-amy-jung" title="Videos">📹</a></td>
    <td align="center"><a href="https://github.com/Davidutro"><img src="https://avatars2.githubusercontent.com/u/40721951?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Davidutro</b></sub></a><br /><a href="https://github.com/makerdao/community-portal/commits?author=Davidutro" title="Documentation">📖</a> <a href="#content-Davidutro" title="Content">🖋</a> <a href="#blog-Davidutro" title="Blogposts">📝</a> <a href="#ideas-Davidutro" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-Davidutro" title="Project Management">📆</a> <a href="#video-Davidutro" title="Videos">📹</a></td>
    <td align="center"><a href="https://github.com/annaalexakr"><img src="https://avatars.githubusercontent.com/u/68355495?v=4?s=100" width="100px;" alt=""/><br /><sub><b>annaalexakr</b></sub></a><br /><a href="#content-annaalexakr" title="Content">🖋</a> <a href="#ideas-annaalexakr" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/makerdao/community-portal/pulls?q=is%3Apr+reviewed-by%3Aannaalexakr" title="Reviewed Pull Requests">👀</a> <a href="#projectManagement-annaalexakr" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/twblack88"><img src="https://avatars3.githubusercontent.com/u/8991325?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tim Black</b></sub></a><br /><a href="https://github.com/makerdao/community-portal/commits?author=twblack88" title="Documentation">📖</a> <a href="#maintenance-twblack88" title="Maintenance">🚧</a> <a href="#mentoring-twblack88" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/makerdao/community-portal/pulls?q=is%3Apr+reviewed-by%3Atwblack88" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/makerdao/community-portal/issues?q=author%3Atwblack88" title="Bug reports">🐛</a> <a href="https://github.com/makerdao/community-portal/commits?author=twblack88" title="Code">💻</a> <a href="#projectManagement-twblack88" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/shea-fitz"><img src="https://avatars3.githubusercontent.com/u/59940380?v=4?s=100" width="100px;" alt=""/><br /><sub><b>shea-fitz</b></sub></a><br /><a href="#design-shea-fitz" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/andersonmmi"><img src="https://avatars1.githubusercontent.com/u/16314437?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aaron Anderson</b></sub></a><br /><a href="https://github.com/makerdao/community-portal/commits?author=andersonmmi" title="Documentation">📖</a> <a href="https://github.com/makerdao/community-portal/issues?q=author%3Aandersonmmi" title="Bug reports">🐛</a> <a href="https://github.com/makerdao/community-portal/commits?author=andersonmmi" title="Code">💻</a></td>
    <td align="center"><a href="https://www.isaacpearl.com"><img src="https://avatars1.githubusercontent.com/u/21342523?v=4?s=100" width="100px;" alt=""/><br /><sub><b>isaacpearl</b></sub></a><br /><a href="https://github.com/makerdao/community-portal/commits?author=isaacpearl" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/befitsandpiper"><img src="https://avatars3.githubusercontent.com/u/7257527?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Be Fit Sandpiper</b></sub></a><br /><a href="https://github.com/makerdao/community-portal/commits?author=befitsandpiper" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/LongForWisdom"><img src="https://avatars.githubusercontent.com/u/53664591?v=4?s=100" width="100px;" alt=""/><br /><sub><b>LongForWisdom</b></sub></a><br /><a href="https://github.com/makerdao/community-portal/commits?author=LongForWisdom" title="Documentation">📖</a> <a href="#maintenance-LongForWisdom" title="Maintenance">🚧</a> <a href="#mentoring-LongForWisdom" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/makerdao/community-portal/pulls?q=is%3Apr+reviewed-by%3ALongForWisdom" title="Reviewed Pull Requests">👀</a> <a href="#projectManagement-LongForWisdom" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/juan-fintech"><img src="https://avatars.githubusercontent.com/u/63864964?v=4?s=100" width="100px;" alt=""/><br /><sub><b>juan</b></sub></a><br /><a href="https://github.com/makerdao/community-portal/commits?author=juan-fintech" title="Documentation">📖</a> <a href="#content-juan-fintech" title="Content">🖋</a> <a href="#maintenance-juan-fintech" title="Maintenance">🚧</a> <a href="#mentoring-juan-fintech" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/makerdao/community-portal/pulls?q=is%3Apr+reviewed-by%3Ajuan-fintech" title="Reviewed Pull Requests">👀</a> <a href="#projectManagement-juan-fintech" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/prose11"><img src="https://avatars.githubusercontent.com/u/75535017?v=4?s=100" width="100px;" alt=""/><br /><sub><b>prose11</b></sub></a><br /><a href="#content-prose11" title="Content">🖋</a> <a href="https://github.com/makerdao/community-portal/commits?author=prose11" title="Documentation">📖</a> <a href="#maintenance-prose11" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/ghettodev"><img src="https://avatars.githubusercontent.com/u/1900655?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Richard Brown</b></sub></a><br /><a href="https://github.com/makerdao/community-portal/issues?q=author%3Aghettodev" title="Bug reports">🐛</a> <a href="#content-ghettodev" title="Content">🖋</a> <a href="https://github.com/makerdao/community-portal/commits?author=ghettodev" title="Documentation">📖</a> <a href="#financial-ghettodev" title="Financial">💵</a> <a href="#maintenance-ghettodev" title="Maintenance">🚧</a> <a href="#mentoring-ghettodev" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-ghettodev" title="Project Management">📆</a> <a href="#video-ghettodev" title="Videos">📹</a> <a href="https://github.com/makerdao/community-portal/pulls?q=is%3Apr+reviewed-by%3Aghettodev" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/TomDeMichele"><img src="https://avatars.githubusercontent.com/u/54551507?v=4?s=100" width="100px;" alt=""/><br /><sub><b>TomDeMichele</b></sub></a><br /><a href="#blog-TomDeMichele" title="Blogposts">📝</a> <a href="#content-TomDeMichele" title="Content">🖋</a> <a href="https://github.com/makerdao/community-portal/issues?q=author%3ATomDeMichele" title="Bug reports">🐛</a> <a href="#ideas-TomDeMichele" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://www.sethgoldfarbthewriter.com/"><img src="https://avatars.githubusercontent.com/u/41171114?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Seth Goldfarb</b></sub></a><br /><a href="#blog-goldfarbas" title="Blogposts">📝</a> <a href="#content-goldfarbas" title="Content">🖋</a> <a href="https://github.com/makerdao/community-portal/issues?q=author%3Agoldfarbas" title="Bug reports">🐛</a> <a href="#ideas-goldfarbas" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/makerdao/community-portal/pulls?q=is%3Apr+reviewed-by%3Agoldfarbas" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/makerdao/community-portal/commits?author=goldfarbas" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jerrygoldfarb"><img src="https://avatars.githubusercontent.com/u/60902685?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jerry Goldfarb</b></sub></a><br /><a href="#blog-jerrygoldfarb" title="Blogposts">📝</a> <a href="#content-jerrygoldfarb" title="Content">🖋</a> <a href="https://github.com/makerdao/community-portal/commits?author=jerrygoldfarb" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/aburban90"><img src="https://avatars.githubusercontent.com/u/47543589?v=4?s=100" width="100px;" alt=""/><br /><sub><b>aburban90</b></sub></a><br /><a href="#content-aburban90" title="Content">🖋</a> <a href="https://github.com/makerdao/community-portal/issues?q=author%3Aaburban90" title="Bug reports">🐛</a> <a href="#ideas-aburban90" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-aburban90" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/HaydenSander"><img src="https://avatars.githubusercontent.com/u/39495762?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mal</b></sub></a><br /><a href="#content-HaydenSander" title="Content">🖋</a> <a href="https://github.com/makerdao/community-portal/commits?author=HaydenSander" title="Documentation">📖</a> <a href="#maintenance-HaydenSander" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://andytudhope.africa/"><img src="https://avatars.githubusercontent.com/u/13001517?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andy Tudhope</b></sub></a><br /><a href="https://github.com/makerdao/community-portal/issues?q=author%3Aandytudhope" title="Bug reports">🐛</a> <a href="#blog-andytudhope" title="Blogposts">📝</a> <a href="https://github.com/makerdao/community-portal/commits?author=andytudhope" title="Code">💻</a> <a href="#content-andytudhope" title="Content">🖋</a> <a href="https://github.com/makerdao/community-portal/commits?author=andytudhope" title="Documentation">📖</a> <a href="#maintenance-andytudhope" title="Maintenance">🚧</a> <a href="#mentoring-andytudhope" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/makerdao/community-portal/pulls?q=is%3Apr+reviewed-by%3Aandytudhope" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/reuptaken"><img src="https://avatars.githubusercontent.com/u/26765602?v=4?s=100" width="100px;" alt=""/><br /><sub><b>reuptaken</b></sub></a><br /><a href="#content-reuptaken" title="Content">🖋</a> <a href="https://github.com/makerdao/community-portal/commits?author=reuptaken" title="Documentation">📖</a> <a href="#translation-reuptaken" title="Translation">🌍</a> <a href="#projectManagement-reuptaken" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/blimpa"><img src="https://avatars.githubusercontent.com/u/72349134?v=4?s=100" width="100px;" alt=""/><br /><sub><b>blimpa</b></sub></a><br /><a href="#content-blimpa" title="Content">🖋</a> <a href="https://github.com/makerdao/community-portal/commits?author=blimpa" title="Documentation">📖</a> <a href="#maintenance-blimpa" title="Maintenance">🚧</a> <a href="#video-blimpa" title="Videos">📹</a> <a href="#projectManagement-blimpa" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/0xElihu"><img src="https://avatars.githubusercontent.com/u/78811955?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Elihu</b></sub></a><br /><a href="#content-0xElihu" title="Content">🖋</a> <a href="https://github.com/makerdao/community-portal/commits?author=0xElihu" title="Documentation">📖</a> <a href="#maintenance-0xElihu" title="Maintenance">🚧</a> <a href="#projectManagement-0xElihu" title="Project Management">📆</a> <a href="#ideas-0xElihu" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
