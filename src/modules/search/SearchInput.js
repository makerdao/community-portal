/** @jsx jsx */
import React, { useState } from "react";
import { Icon } from "@makerdao/dai-ui-icons";
import { Box, Input, Flex, Button, jsx } from "theme-ui";

import useTranslation from "@modules/utility/useTranslation";

const SearchInput = ({ delay, onSubmit, ...rest }) => {
  const { t } = useTranslation();

  let timerID = null;
  const bounceDelay = delay || 0;
  const [value, setValue] = useState("");

  const onChangeDebounce = (event) => {
    const _value = event.currentTarget.value;

    if (timerID !== null) {
      clearTimeout(timerID);
    }

    // if (bounceDelay > 0) {
    //   timerID = setTimeout(() => refine(_value), bounceDelay);
    // } else {
    //   refine(_value);
    // }

    setValue(_value);
    if (onSubmit) {
      onSubmit(_value);
    }
  };

  return (
    <Flex
      as="form"
      method="GET"
      role="search"
      sx={{ p: "4px", alignItems: "center", pl: "10px" }}
    >
      <Icon
        name="search"
        color="body-40"
        viewBox="-5 -5 24 24"
        sx={{
          width: "33px",
          height: "33px",
        }}
      />
      <Input
        name="keywords"
        id="search-input"
        type="search"
        value={value}
        aria-label={t("Search")}
        placeholder={t("Search")}
        onChange={onChangeDebounce}
        sx={{
          border: "none",
          borderRadius: "0",
          letterSpacing: "0.3px",
          "::placeholder": {
            color: "body",
          },
        }}
        {...rest}
      />
    </Flex>
  );
};

export default SearchInput;
