//** @jsx jsx */
import React from 'react';
import {Grid, Flex, Text, Box, Image, jsx} from 'theme-ui'
import { Icon } from "@makerdao/dai-ui-icons";

import {Link} from '@modules/navigation'
import allContributors from '@content/all-contributors.json'
import githubDark from "@images/githubDark.svg";

const repoUrl  = `${allContributors.repoHost}/${allContributors.projectOwner}/${allContributors.projectName}`

//Keys associated with Allcontributors Emoji Keys. 
//Used to identify and filter contributions per author.
//Add your own if you want...
const allContributorsKeys = [
	"audio",
	"a11y",
	"bug",
	"blog",
	"business",
	"code",
	"content",
	"data",
	"doc",
	"design",
	"example",
	"eventOrganizing",
	"financial",
	"fundingFinding",
	"ideas",
	"infra",
	"maintenance",
	"platform",
	"plugin",
	"projectManagement",
	"question",
	"review",
	"security",
	"tool",
	"translation",
	"test",
	"tutorial",
	"talk",
	"userTesting",
	"video"
]

const allContributorEmojis = {
	"audio": "🔊",
	"a11y": "♿️",
	"bug": "🐛",
	"blog": "📝",
	"business": "💼",
	"code": "💻",
	"content": "🖋",
	"data": "🔣",
	"doc": "📖",
	"design": "🎨",
	"example": "💡",
	"eventOrganizing": "📋",
	"financial": "💵",
	"fundingFinding": "🔍",
	"ideas": "🤔",
	"infra": "🚇",
	"maintenance": "🚧",
	"platform": "📦",
	"plugin": "🔌",
	"projectManagement": "📆",
	"question": "💬",
	"review": "👀",
	"security": "🛡️",
	"tool": "🔧",
	"translation": "🌍",
	"test": "⚠️",
	"tutorial": "✅",
	"talk": "📢",
	"userTesting": "📓",
	"video": "📹"
}

const AuthorGrid = ({login, name, avatar_url, profile, contributions, hideContributions, index}) => (
	<Box sx={{padding: '6px 13px', border: '1px solid',   borderLeft: 'none', borderTop: index >= 6 ? 'none' : '1px solid',borderColor: 'strokeFaded', textAlign: 'center'}}>
		{profile ? 
			<Link hideExternalIcon to={profile} sx={{fontSize: '13px', fontWeight: 'bold'}}>
				{avatar_url ?
					<Image src={avatar_url} sx={{width: '100px', height:'100px'}} />
					:
					<Flex sx={{width: '100%', maxWidth: '100px', height: '100px', alignItems: 'center', justifyContent: 'center', margin: 'auto', bg: 'primaryMuted', mb: '5px'}}>
						<Icon name="person" size={"64px"} sx={{color: 'primary'}}/>
					</Flex>
				}

				{name ? name : ''}
			</Link>

			:
			<>

			</>
		}
		{!hideContributions &&
			<Box as="ul" sx={{p: 0}}>
			{
				contributions.map((c,index) => {
					if (c === 'code' && login) {
						return <Link key={`${c}-${index}`} to={`${repoUrl}/commits?author=${login}`} hideExternalIcon> {allContributorEmojis[c] || c} </Link>
					}

					return <React.Fragment key={`${c}-${index}`}>
						{allContributorEmojis[c] || c}
					</React.Fragment>;
				})
			}
			</Box>
		}
	</Box>
)

const AuthorList = ({login, name, avatar_url, profile, contributions, hideContributions, description}) => {
const getLinkIcon = (url) => {
	if (url.includes("github")) {
		return (
			<Link hideExternalIcon to={url}>
				<Image src={githubDark} sx={{width: '23px'}}/>
			</Link>
		)
	}
	else if (url.includes("twitter")) {
		return (
			<Link hideExternalIcon to={url}>
				<Icon name="twitter" size={"23px"}/>
			</Link>
		)
	}
	else {
		return (
			<Link hideExternalIcon to={url}>
				<Icon name="open_in_new_tab" size={"23px"}/>
			</Link>
		)
	}
}

 return (<Flex>
		<Box sx={{minWidth: '75px', flex: 'auto'}}>
		{avatar_url && avatar_url !== '' ?
			<Image src={avatar_url}  sx={{borderRadius: '100%', minWidth: '75px', height:'75px', flex: 'auto'}}/>
			:
			<Flex sx={{borderRadius: '100%', minWidth: '75px', height:'75px', flex: 'auto', alignItems: 'center', justifyContent: 'center', margin: 'auto', bg: 'primaryMuted',marginBottom: '5px'}}>
				<Icon name="person" size={"60px"} sx={{color: 'primary'}}/>
			</Flex>
		}
		{!hideContributions &&
			<Box as="ul" sx={{p: 0, textAlign: 'center'}}>
			{
				contributions.map((c,index) => {
					if (c === 'code' && login) {
						return <Link key={`${c}-${index}`} to={`${repoUrl}/commits?author=${login}`} hideExternalIcon> {allContributorEmojis[c] || c} </Link>
					}

					return <React.Fragment key={`${c}-${index}`}>
						{allContributorEmojis[c] || c}
					</React.Fragment>;
				})
			}
			</Box>
		}
		</Box>

		<Box sx={{marginLeft: '1rem', marginTop: '10px'}}>
			<Text sx={{fontWeight: 'bold', fontSize: '1.32rem'}}>
				{name || ''}
				<Box as="ul" sx={{display: 'inline-block', marginLeft: '.5rem', p: 0, verticalAlign: 'middle'}}>
					{Array.isArray(profile) ?
						<>
						{/* NOTE(Rejon): I'm not fleshing this out on purpose. This doesn't need a robust solution. */}
						{profile.map((url) => getLinkIcon(url))}
						</>
					:
						getLinkIcon(profile)
					}
				</Box>
			</Text>
			<Text sx={{fontSize: '15px'}}>
				{`@${login}`}
			</Text>
			<Text sx={{marginTop: '5px'}}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra quam augue. Nulla facilisi. Ut sed volutpat nisl. Cras eget nunc sed erat malesuada faucibus. Donec non vehicula elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit imperdiet maximus. In hac habitasse platea dictumst. Sed id luctus justo. Morbi in tortor et quam lacinia finibus ac in quam. Suspendisse mollis efficitur dui eu laoreet.
				{description}
			</Text>
		</Box>
 </Flex>)
} 

const Authors = ({list=false, noImage=false, all=false, contributions=true, children, ...props}) => {
	const _children = React.Children.toArray(children)

	const getAuthorDataFromChildren = () => {
		if (_children.length <= 0) {return [];}

		//Must an array like
		/* {
			"login": "MaximumCrash" <- @url
			"name": "Réjon Taylor-Foster"
			"avatar_url": image url
			"profile": personal website,
			"contributions": [
				code, 
				a11y,
				ect...
			]
			}*/
		return _children.map((child) => {
			//<Box>
			//![Image Name](image url) or <Image>
			//[Link Name](link url) or <Link> <-- Have this check for twitter, github, ect. for auto icons.
			//## NAME
			//### Description
			//</Box>
		})	 
	}

	const renderAuthorData = (contributors) => {
		if (contributors.length <= 0) {return null;}

		const propKeys = Object.keys(props);
		const propsHasContributorKeys = allContributorsKeys.some((n) => propKeys.includes(n));
 
		const contributionFilters = all && !propsHasContributorKeys ? [] : allContributorsKeys.filter(n => propKeys.includes(n));

		const _contributors = contributionFilters.length <= 0 ?
			contributors
			:
			contributors.filter(({contributions}) => contributions.some((c) => contributionFilters.includes(c)));

		return _contributors.map((data, index) => (list ? <AuthorList  key={`list-author-${index}`} {...data} index={index} hideContributions={!contributions}/> : <AuthorGrid key={`grid-author-${index}`} {...data} index={index} hideContributions={!contributions}/>))
	}

	const authorsToRender = all && allContributors.contributors ? renderAuthorData(allContributors.contributors) : getAuthorDataFromChildren();

	return (
		<Grid gap={0} columns={list? [1, '1fr'] : [6, '1fr 1fr 1fr 1fr 1fr 1fr']} sx={{borderLeft: !list ? '1px solid' : 'unset', borderColor: 'strokeFaded', gridRowGap: list ? '2rem' : 'unset'}}>
			{authorsToRender}
		</Grid>
	)
}

export default Authors;
