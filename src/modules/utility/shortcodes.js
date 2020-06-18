import React from "react";
import Breadcrumbs from "@modules/ui/Breadcrumbs";
import Sidenav from "@modules/navigation/Sidenav";
import StatusBanner from "@modules/ui/StatusBanner";
import Link from "@modules/utility/Link";
import Callout from "@modules/ui/Callout";
import List from "@modules/ui/List";
import { Icon } from "@makerdao/dai-ui-icons";
import Button from "@modules/ui/Button";
import CTA from "@modules/ui/CTA";
import { Image, AspectImage, Text, Divider, Box } from "theme-ui";

export default {
  a: (props) => <Link to={props.href} {...props} />,
  img: (props) => <Image {...props} />,
  h1: (props) => <Text variant="h1" sx={{ mb: "24px" }} {...props} />,
  h2: (props) => <Text variant="h2" sx={{ mb: "32px" }} {...props} />,
  h3: (props) => <Text variant="h3" sx={{ mb: "16px" }} {...props} />,
  h4: (props) => <Text variant="h4" {...props} />,
  h5: (props) => <Text variant="h5" {...props} />,
  thematicBreak: (props) => <Divider />,
  p: (props) => <Text sx={{ mb: "16px" }} as="p" {...props} />,
  blockquote: CTA,
  Button,
  Breadcrumbs,
  Callout,
  StatusBanner,
  Sidenav,
  Link,
  Box,
  Icon,
  CTA,
  Image,
  List,
  AspectImage,
};
