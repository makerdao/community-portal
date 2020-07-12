//** @jsx jsx */
import React from "react";
import { Grid, Flex, Text, Box, Image, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

import { Link, getLinkIcon } from "@modules/navigation";
import allContributors from "@content/all-contributors.json";

const repoUrl = `${allContributors.repoHost}/${allContributors.projectOwner}/${allContributors.projectName}`;

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
  "video",
];

const allContributorEmojis = {
  audio: "🔊",
  a11y: "♿️",
  bug: "🐛",
  blog: "📝",
  business: "💼",
  code: "💻",
  content: "🖋",
  data: "🔣",
  doc: "📖",
  design: "🎨",
  example: "💡",
  eventOrganizing: "📋",
  financial: "💵",
  fundingFinding: "🔍",
  ideas: "🤔",
  infra: "🚇",
  maintenance: "🚧",
  platform: "📦",
  plugin: "🔌",
  projectManagement: "📆",
  question: "💬",
  review: "👀",
  security: "🛡️",
  tool: "🔧",
  translation: "🌍",
  test: "⚠️",
  tutorial: "✅",
  talk: "📢",
  userTesting: "📓",
  video: "📹",
};

const AuthorGrid = ({
  login,
  name,
  avatar_url,
  profile,
  contributions,
  hideContributions,
  noLinks,
  index,
}) => (
  <Box
    sx={{
      padding: "6px 13px",
      border: "1px solid",
      borderLeft: "none",
      borderTop: index >= 6 ? "none" : "1px solid",
      borderColor: "strokeFaded",
      textAlign: "center",
    }}
  >
    {profile && !noLinks ? (
      <Link
        hideExternalIcon
        to={profile}
        sx={{ fontSize: "13px", fontWeight: "bold" }}
      >
        {avatar_url ? (
          <Image src={avatar_url} sx={{ width: "100px", height: "100px" }} />
        ) : (
          <Flex
            sx={{
              width: "100%",
              maxWidth: "100px",
              height: "100px",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              bg: "primaryMuted",
              mb: "5px",
            }}
          >
            <Icon name="person" size={"64px"} sx={{ color: "primary" }} />
          </Flex>
        )}

        {name ? name : ""}
      </Link>
    ) : (
      <Box sx={{ fontSize: "13px", fontWeight: "bold" }}>
        {avatar_url ? (
          <Image src={avatar_url} sx={{ width: "100px", height: "100px" }} />
        ) : (
          <Flex
            sx={{
              width: "100%",
              maxWidth: "100px",
              height: "100px",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              bg: "primaryMuted",
              mb: "5px",
            }}
          >
            <Icon name="person" size={"64px"} sx={{ color: "primary" }} />
          </Flex>
        )}

        {name ? name : ""}
      </Box>
    )}
    {!hideContributions && (
      <Box
        as="ul"
        sx={{ p: 0, "& > *": { mr: "5px", display: "inline-block" } }}
      >
        {contributions.map((c, index) => {
          if (c === "code" && login) {
            return (
              <Link
                key={`${c}-${index}`}
                to={`${repoUrl}/commits?author=${login}`}
                hideExternalIcon
              >
                {" "}
                {allContributorEmojis[c] || c}{" "}
              </Link>
            );
          }

          return (
            <Box key={`${c}-${index}`}>{allContributorEmojis[c] || c}</Box>
          );
        })}
      </Box>
    )}
  </Box>
);

const AuthorList = ({
  login,
  name,
  avatar_url,
  profile,
  contributions,
  hideContributions,
  description,
  noUsername,
  noLinks,
}) => {
  return (
    <Flex>
      <Box sx={{ minWidth: "75px", maxWidth: "75px", flex: "auto" }}>
        {avatar_url && avatar_url !== "" ? (
          <Image
            src={avatar_url}
            sx={{
              borderRadius: "100%",
              minWidth: "75px",
              height: "75px",
              flex: "auto",
            }}
          />
        ) : (
          <Flex
            sx={{
              borderRadius: "100%",
              minWidth: "75px",
              height: "75px",
              flex: "auto",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              bg: "primaryMuted",
              marginBottom: "5px",
            }}
          >
            <Icon name="person" size={"60px"} sx={{ color: "primary" }} />
          </Flex>
        )}
        {!hideContributions && (
          <Box
            as="ul"
            sx={{
              p: 0,
              textAlign: "center",
              "& > *": { mr: "5px", display: "inline-block" },
            }}
          >
            {contributions.map((c, index) => {
              if (c === "code" && login) {
                return (
                  <Link
                    key={`${c}-${index}`}
                    to={`${repoUrl}/commits?author=${login}`}
                    hideExternalIcon
                  >
                    {" "}
                    {allContributorEmojis[c] || c}{" "}
                  </Link>
                );
              }

              return (
                <Box key={`${c}-${index}`}>{allContributorEmojis[c] || c}</Box>
              );
            })}
          </Box>
        )}
      </Box>

      <Box sx={{ marginLeft: "1rem", marginTop: "10px" }}>
        <Text sx={{ fontWeight: "bold", fontSize: "1.32rem" }}>
          {name || ""}
          {!noLinks && (
            <Box
              as="ul"
              sx={{
                display: "inline-block",
                marginLeft: ".5rem",
                p: 0,
                verticalAlign: "middle",
              }}
            >
              {Array.isArray(profile) ? (
                <>
                  {/* NOTE(Rejon): I'm not fleshing this out on purpose. This doesn't need a robust solution. */}
                  {profile.map((url) => getLinkIcon(url))}
                </>
              ) : (
                getLinkIcon(profile)
              )}
            </Box>
          )}
        </Text>
        {!noUsername && <Text sx={{ fontSize: "15px" }}>{`@${login}`}</Text>}
        <Text sx={{ marginTop: "5px" }}>{description}</Text>
      </Box>
    </Flex>
  );
};

const Authors = ({
  list = false,
  all = false,
  contributions = true,
  noLinks = false,
  noUsername = false,
  children,
  ...props
}) => {
  const _children = React.Children.toArray(children);

  const getAuthorDataFromChildren = () => {
    if (_children.length <= 0) {
      return [];
    }

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
    const convertMDXData = (mdxObj) => {
      const contributorData = {};

      //Check for image
      if (mdxObj.props.mdxType === "img" || mdxObj.props.mdxType === "Image") {
        contributorData["avatar_url"] = mdxObj.props.src;
        return contributorData;
      } else if (typeof mdxObj.props.children === "object") {
        const imgChild = mdxObj.props.children;

        if (
          imgChild &&
          !Array.isArray(imgChild) &&
          (imgChild.props.mdxType === "img" ||
            imgChild.props.mdxType === "Image")
        ) {
          contributorData["avatar_url"] = imgChild.props.src;
          return contributorData;
        }
      }

      //Check for Link
      if (mdxObj.props.mdxType === "Link" || mdxObj.props.mdxType === "a") {
        contributorData["profile"] = mdxObj.props.href || mdxObj.props.to;
        return contributorData;
      } else if (typeof mdxObj.props.children === "object") {
        const linkChild = mdxObj.props.children;

        if (
          linkChild &&
          !Array.isArray(linkChild) &&
          (linkChild.props.mdxType === "Link" ||
            linkChild.props.mdxType === "a")
        ) {
          contributorData["profile"] =
            linkChild.props.href || linkChild.props.to;
          return contributorData;
        }
      }

      //Check for Name
      if (mdxObj.props.mdxType === "h1") {
        contributorData["name"] = mdxObj.props.children;
        return contributorData;
      }

      //Check for Description
      if (mdxObj.props.mdxType === "h2") {
        contributorData["description"] = mdxObj.props.children;
        return contributorData;
      }

      //Check for Login
      if (mdxObj.props.mdxType === "h3") {
        contributorData["login"] = mdxObj.props.children;
        return contributorData;
      }

      //Check for Contributions
      if (mdxObj.props.mdxType === "ul" || mdxObj.props.mdxType === "ol") {
        const contribList = React.Children.toArray(mdxObj.props.children);

        contribList.map((li) => {
          if (!contributorData["contributions"]) {
            contributorData["contributions"] = [];
          }

          contributorData["contributions"].push(li.props.children);
        });
      }

      return contributorData;
    };

    //Only accept "Box" components as proper author data containers.
    const authorData = _children
      .filter(
        (child) =>
          child.props.mdxType === "Box" && child.props.children.length > 0
      )
      .map((child) => {
        const outObj = {};

        if (Array.isArray(child.props.children)) {
          child.props.children.map((ch) => {
            const cData = convertMDXData(ch);

            const key = Object.keys(cData);

            if (key.length != 0) {
              if (outObj[key] !== undefined && list) {
                const existingData = outObj[key];
                outObj[key] = !Array.isArray(outObj[key])
                  ? [outObj[key], cData[key]]
                  : [...outObj[key], cData[key]];
              } else {
                outObj[key] = cData[key];
              }
            }
          });
        } else {
          const cData = convertMDXData(child);
          const key = Object.keys(cData);

          if (key.length != 0) {
            outObj[key] = cData[key];
          }
        }

        return outObj;
      });

    return all && allContributors.contributors
      ? renderAuthorData(allContributors.contributors.concat(authorData))
      : renderAuthorData(authorData);
  };

  const renderAuthorData = (contributors) => {
    if (contributors.length <= 0) {
      return null;
    }

    const propKeys = Object.keys(props);
    const propsHasContributorKeys = allContributorsKeys.some((n) =>
      propKeys.includes(n)
    );

    const contributionFilters =
      all && !propsHasContributorKeys
        ? []
        : allContributorsKeys.filter((n) => propKeys.includes(n));

    const _contributors =
      contributionFilters.length <= 0
        ? contributors
        : contributors.filter(({ contributions }) =>
            contributions.some((c) => contributionFilters.includes(c))
          );

    return _contributors.map((data, index) =>
      list ? (
        <AuthorList
          key={`list-author-${index}`}
          {...data}
          index={index}
          noLinks={noLinks}
          noUsername={noUsername}
          hideContributions={!contributions}
        />
      ) : (
        <AuthorGrid
          key={`grid-author-${index}`}
          {...data}
          index={index}
          noLinks={noLinks}
          hideContributions={!contributions}
        />
      )
    );
  };

  const authorsToRender =
    all && allContributors.contributors && _children.length === 0
      ? renderAuthorData(allContributors.contributors)
      : getAuthorDataFromChildren();

  return (
    <Grid
      gap={0}
      columns={list ? [1, "1fr"] : [6, "1fr 1fr 1fr 1fr 1fr 1fr"]}
      sx={{
        borderLeft: !list ? "1px solid" : "unset",
        borderColor: "strokeFaded",
        gridRowGap: list ? "2rem" : "unset",
        marginBottom: "1rem",
      }}
    >
      {authorsToRender}
    </Grid>
  );
};

export default Authors;
