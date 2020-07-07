import React from "react";

import { Icon } from "@makerdao/dai-ui-icons";
import { Image, Text, Divider, Box } from "theme-ui";

import {
	Accordion,
	Button, 
	Categories, 
	Callout, 
	Chocolate, 
	Checklist, 
	Code, 
	Column, 
	CTA, 
	StatusBanner, 
	InfoBlock, 
	List,
	Process, 
	Tout, 
} from '@modules/ui/';

import {
  Link
} from '@modules/navigation/';

import {
  Aligner, 
  Video
} from '@modules/utility/';


//Markdown Component overrides
//Replace MDX html defaults with our custom implementation.

//For the complete available list see: https://www.gatsbyjs.org/docs/mdx/customizing-components/
const MD_Overrides = {
  a: (props) => <Link to={props.href} {...props} />,
  img: Image,
  h1: (props) => <Text variant="h1" sx={{ mb: "24px" }} {...props} />,
  h2: (props) => <Text variant="h2" as="h2" sx={{ mb: "32px" }} {...props} />,
  h3: (props) => <Text variant="h3" as="h3" sx={{ mb: "16px" }} {...props} />,
  h4: (props) => <Text variant="h4" as="h4" {...props} />,
  h5: (props) => <Text variant="h5" as="h5" {...props} />,
  thematicBreak: (props) => <Divider />,
  p: (props) => (
    <Text
      sx={{ mb: "16px", "& .button": { display: "inline-block" } }}
      {...props}
    />
  ), //NOTE(Rejon): Don't add the as="p" prop to this text component, else you'll get warnings about our interweaving.
  blockquote: CTA,
  inlineCode: Code,
}

//Custom component fragments to be used in MDX. 
//If you want to use a component, but want it's MDX fragment name to be different
//provide a key: Component (ie: {Carousel: CarouselComponent})
const Custom_Components = {
  Code, 
  Text,
  Button,
  Callout,
  StatusBanner,
  Link,
  Box,
  Icon,
  CTA,
  Process,
  Image, //<- NOTE(Rejon): This is necessary so remark doesn't auto-wrap our component instead of the other way around.
  List,
  Aligner,
  Accordion,
  InfoBlock,
  Chocolate,
  Checklist,
  Categories,
  Tout,
  Column,
  Video,
}

export default {
  ...MD_Overrides, 
  ...Custom_Components
};
