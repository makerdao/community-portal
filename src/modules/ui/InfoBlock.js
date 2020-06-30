//** @jsx jsx */
import React from "react";
import { Box, Flex, jsx } from "theme-ui";

//TODO(Rejon): On mobile have image ALWAYS stack in order first. Do this when we have breakpoints figured out.
const InfoBlock = ({ children, alt, backgroundImage, minImageWidth, sx }) => {
  let _Children = React.Children.toArray(children);

  const getImageData = () => {
    const checkIfElementIsImage = (el) => {
      //NOTE(Rejon): This looks like a hack, but because gatsby-remark-images blackboxes us from editing classnames
      //			   AND they change the element to be spans + a, there's no clean way to find an image.
      //			   Thus, we're dependent on the consistency of the classname gatsby-resp-image-wrapper.

      //If we're using an Image component directly in code, className will be top level.
      if (el.props.className === "gatsby-resp-image-wrapper") {
        return true;
      }
      //If we're using MD image scripting, it will be a little deeper.
      else if (typeof el.props.children === "object") {
        if (el.props.children.props.className === "gatsby-resp-image-wrapper") {
          return true;
        }
      }

      return false;
    };

    //This is to ensure that images don't shrink lower than expected.
    //NOTE(Rejon): I do this because when we shrink the screen, if the image doesn't
    // 			   have a min width it will shrink instead of the copy besides it.
    const getElementMinSize = (img) => {
      if (img.props.className === "gatsby-resp-image-wrapper") {
        return img.props.style.maxWidth;
      }
      //If we're using MD image scripting, it will be a little deeper.
      else if (typeof img.props.children === "object") {
        if (
          img.props.children.props.className === "gatsby-resp-image-wrapper"
        ) {
          return img.props.children.props.style.maxWidth;
        }
      }
    };

    if (checkIfElementIsImage(_Children[0])) {
      //Image is FIRST
      const img = _Children[0];
      _Children.splice(0, 1);

      return {
        img,
        first: true,
        minWidth: minImageWidth || getElementMinSize(img),
      };
    } else if (checkIfElementIsImage(_Children[_Children.length - 1])) {
      //Image is LAST
      const img = _Children[_Children.length - 1];
      _Children.splice(-1);

      return {
        img,
        first: false,
        minWidth: minImageWidth || getElementMinSize(img),
      };
    } else {
      //NO Image is First OR Last
      return null;
    }
  };

  const imageData = getImageData();

  const NoImageStyles =
    imageData === null
      ? {
          width: "100%",
          textAlign: "center",
          "& .gatsby-resp-image-wrapper": {
            width: "100% !important",
            margin: "auto !important",
          },
        }
      : {};

  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        background: `url(${backgroundImage})`,
        ...sx,
      }}
    >
      {imageData && (
        <Box
          sx={{
            order: imageData.first ? 0 : 1,
            mr: imageData.first && !alt ? 4 : 0,
            flex: alt ? "1" : "1 0 0%",
            flexGrow: "0",
            minWidth: alt ? "50%" : imageData.minWidth,
            maxWidth: alt ? "50%" : "40%",
            "& > *": { m: 0 },
            "& .gatsby-resp-image-wrapper": alt
              ? { maxWidth: "unset !important", width: "100%" }
              : {},
          }}
        >
          {imageData.img}
        </Box>
      )}
      <Box
        sx={{
          order: imageData && imageData.first ? 1 : 0,
          width: "auto",
          margin: "auto 0",
          pr: 3,
          pl: alt ? 3 : 0,
          ...NoImageStyles,
        }}
      >
        {_Children.map((child) => child)}
      </Box>
    </Flex>
  );
};

export default InfoBlock;
