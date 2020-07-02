import React from "react";
import Breadcrumbs from "@modules/ui/Breadcrumbs";
import Sidenav from "@modules/navigation/Sidenav";
import StatusBanner from "@modules/ui/StatusBanner";
import Categories from "@modules/ui/Categories";
import InfoBlock from "@modules/ui/InfoBlock";
import Link from "@modules/utility/Link";
import Callout from "@modules/ui/Callout";
import Chocolate from "@modules/ui/Chocolate";
import List from "@modules/ui/List";
import { Icon } from "@makerdao/dai-ui-icons";
import Button from "@modules/ui/Button";
import Process from "@modules/ui/Process";
import CTA from "@modules/ui/CTA";
import Tout from "@modules/ui/Tout";
import Accordion from "@modules/ui/Accordion";
import Aligner from "@modules/utility/Aligner";
import Checklist from "@modules/ui/Checklist";
import Column from "@modules/ui/Column";
import Video from "@modules/utility/Video";
import Prism from "@theme-ui/prism";
import Code from '@modules/ui/Code';
import { AspectImage, Image, Text, Divider, Box } from "theme-ui";

export default {
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
  Text,
  Button,
  Breadcrumbs,
  Callout,
  StatusBanner,
  Sidenav,
  Link,
  Box,
  Icon,
  CTA,
  Process,
  Image, //<- NOTE(Rejon): This is necessary so remark doesn't auto-wrap our component instead of the other way around.
  List,
  Aligner,
  AspectImage,
  Accordion,
  InfoBlock,
  Chocolate,
  Checklist,
  Categories,
  Tout,
  Column,
  Video,
};
