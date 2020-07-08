/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@makerdao/dai-ui-icons";
import { Input, Flex, jsx } from "theme-ui";

import {useTranslation} from "@modules/localization";

const SearchInput = ({ delay, onChange, onSubmit, ...rest }) => {
  const { t } = useTranslation();
  const searchRef = useRef();

  let timerID = null;
  const [value, setValue] = useState("");

  const onChangeDebounce = (event) => {
    const _value = event.currentTarget.value;

    if (timerID !== null) {
      clearTimeout(timerID);
    }

    setValue(_value);
    if (onChange) {
      onChange(_value);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(e.currentTarget.value);
    }
  }

  const onKeyDown = (e) => {
    
    if (typeof window !== undefined) 
    {
      if (e.key === "/" && searchRef.current && document.activeElement !== searchRef.current) {
        e.preventDefault();
        searchRef.current.focus();
      }
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      document.addEventListener('keydown', onKeyDown)

      return (() => {
        document.removeEventListener('keydown', onKeyDown )
      })
    }
  }, [])

  return (
    <Flex
      as="form"
      method="GET"
      role="search"
      onSubmit={onFormSubmit}
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
        ref={searchRef}
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
          "::-webkit-search-cancel-button": {
              WebkitAppearance: "none",
            },
        }}
        {...rest}
      />
    </Flex>
  );
};

export default SearchInput;
