//** @jsx jsx */
import React from "react";
import { Box, Flex, Grid, jsx } from "theme-ui";

import { HexLuminanceCheck, colorToHex } from "@utils";
import defaultImage from "@content/images/section2.png";
import altImage from "@content/images/section1.png";
import {useTranslation} from "@modules/localization";

const Tout = ({ children, alt, stroke, fade, color, image }) => {
  const { t } = useTranslation("Touts");

  const _Children = React.Children.toArray(children);
  const isGrid = _Children.length > 1;
  const variant = (alt ? "noticeAlt" : null) || "successAlt";
  const strokeVariant = (alt ? "notice" : null) || "success";

  //Check if the color of the BG (for sticky), passes our luminance test.
  //If it returns true, it's light, so we use a DARK text color.
  //Else use a LIGHT text color.
  const luminCheck = (_color, _variant) => {
    //The _color that comes in is from theme-ui below. It passes var(--theme-ui-color-variable, #000000);.
    //We just strip out the hex color.
    const hexColor = _color.slice(_color.indexOf("#"), _color.length - 1);

    return HexLuminanceCheck(colorToHex(hexColor)) && _variant !== "primary"
      ? "body"
      : "onPrimary";
  };

  const copyColor = !color
    ? (theme) => luminCheck(theme.colors[variant], variant)
    : (theme) => luminCheck(color, variant);

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

    //Check if Image is LAST Element for Touts with Images.
    if (checkIfElementIsImage(_Children[_Children.length - 1])) {
      //Image is LAST
      const img = _Children[_Children.length - 1];
      _Children.splice(-1);

      return {
        img,
        first: false,
        minWidth: getElementMinSize(img),
      };
    } else {
      //NO Image is First OR Last
      return null;
    }
  };

  const imageData = !image ? getImageData() : null;
  const otherStyles = fade
    ? {
        background: (theme) =>
          `linear-gradient(180deg, ${
            color || theme.colors[variant]
          } 0%, transparent 100%)`,
      }
    : {};

  //NOTE(Rejon): Not a very elegant solution. But it works.
  const nonParagraphColor = (theme) =>
    (fade && copyColor(theme) === "body" ? "text" : null) ||
    (fade && copyColor(theme) !== "body" ? copyColor(theme) : null) ||
    (color && !stroke ? copyColor(theme) : null) ||
    "text";

  if (isGrid) {
    return (
      <Grid
        columns={[2, "1fr 1fr"]}
        gap={"21px"}
        sx={{ gridAutoRows: "1fr", mb: "54px" }}
      >
        {_Children.map((child, index) => (
          <Flex
            key={`tout-child-${index}`}
            sx={{
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              backgroundColor: !stroke && !fade ? color || variant : null,
              borderRadius: "4px",
              border: stroke ? "1px solid" : null,
              borderColor: stroke ? color || strokeVariant : null,
              ...otherStyles,
            }}
          >
            <Box
              sx={{
                "& > * > *:not(p), & > *:not(p)": {
                  color: nonParagraphColor,
                },
                "& > * > .md-body": {
                  color: !stroke || fade ? copyColor : "unset",
                },
                "& > *:only-child": {
                  m: 0,
                },
                "& > *:last-child, & > * > *:last-child": {
                  m: 0, //NOTE(Rejon): I use important here to override internal styles.
                },
                p: "24px",
                "& h2": {
                  mb: "12px",
                },
                "& p:not(:last-child)": {
                  mb: 2,
                },
              }}
            >
              {child}
            </Box>
            {image && !imageData && (
              <Flex sx={{ width: "100%" }}>
                <img
                  sx={{ objectFit: "cover", maxHeight: "120px", width: "100%" }}
                  src={alt ? altImage : defaultImage}
                  alt={t(alt ? "alt_altImage" : "alt_defaultImage", "Touts")}
                />
              </Flex>
            )}
            {imageData && imageData.img}
          </Flex>
        ))}
      </Grid>
    );
  }

  return (
    <Box
      sx={{
        mb: "54px",
        overflow: "hidden",
        backgroundColor: !stroke && !fade ? color || variant : null,
        borderRadius: "4px",
        border: stroke ? "1px solid" : null,
        borderColor: stroke ? color || strokeVariant : null,
        ...otherStyles,
      }}
    >
      <Box
        sx={{
          "& > * > *:not(p), & > *:not(p)": {
            color: nonParagraphColor,
          },
          "& > * > p": {
            color: !stroke || fade ? copyColor : "unset",
          },
          "& > *:only-child": {
            m: 0,
          },
          "& > *:last-child, & > * > *:last-child": {
            m: 0, //NOTE(Rejon): I use important here to override internal styles.
          },
          p: "24px",
          "& h2": {
            mb: "12px",
          },
          "& p:not(:last-child)": {
            mb: 2,
          },
        }}
      >
        {children}
      </Box>
      {image && !imageData && (
        <Flex sx={{ width: "100%" }}>
          <img
            sx={{ objectFit: "cover", maxHeight: "120px", width: "100%" }}
            src={alt ? altImage : defaultImage}
            alt={t(alt ? "alt_altImage" : "alt_defaultImage", "Touts")}
          />
        </Flex>
      )}
      {imageData && imageData.img}
    </Box>
  );
};

export default Tout;
