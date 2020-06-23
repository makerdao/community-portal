import React from 'react';
import Breadcrumbs from '@modules/ui/Breadcrumbs';
import Categories from '@modules/ui/Categories';
import Sidenav from '@modules/sidenav';
import StatusBanner from '@modules/ui/StatusBanner';
import Link from '@modules/utility/Link';
import Callout from '@modules/ui/Callout';
import { Icon } from '@makerdao/dai-ui-icons';
import Button from '@modules/ui/Button';
import { Image, Text, Divider, Box } from 'theme-ui';

export default {
  a: props => <Link to={props.href} {...props} />,
  img: props => <Image {...props} />,
  h1: props => <Text variant="h1" {...props} />,
  h2: props => <Text variant="h2" {...props} />,
  h3: props => <Text variant="h3" {...props} />,
  h4: props => <Text variant="h4" {...props} />,
  h5: props => <Text variant="h5" {...props} />,
  thematicBreak: props => <Divider />,
  p: props => <Text {...props} />,
  Button,
  Breadcrumbs,
  Callout,
  Categories,
  StatusBanner,
  Sidenav,
  Link,
  Box,
  Icon
};
