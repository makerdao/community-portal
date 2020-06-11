/** @jsx jsx */
import React, { useState, useEffect, createRef } from "react";

import { Box, Text, jsx } from "theme-ui";

import useTranslation from "@modules/utility/useTranslation";
import { usePage } from "@modules/layouts/PageContext";

import SearchInput from "./SearchInput";
import SearchHit from "./SearchHit";

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`];

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const detectClickOutside = (event) =>
      !ref.current.contains(event.target) && handler();
    for (const event of events)
      document.addEventListener(event, detectClickOutside);
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside);
    };
  });
};

export default function Search({ ...otherProps }) {
  const ref = createRef();
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);
  const [results, setResults] = useState([]);

  const { lunr } = usePage(); //Get Lunr instance.
  const { locale, t } = useTranslation();

  useClickOutside(ref, () => setFocus(false));

  const onSubmit = (val) => {
    if (lunr && val !== "") {
      const refs = lunr[locale].index.search(`${val}*`);
      const results = refs.map(({ ref }) => lunr[locale].store[ref]);
      setResults(results);
    }

    if (val === "") {
      setResults([]);
    }

    setQuery(val);
  };

  return (
    <Box
      ref={ref}
      {...otherProps}
      sx={{
        borderRadius: 0,
        backgroundColor: "body-5",
        position: "relative",
      }}
    >
      <SearchInput
        onFocus={() => setFocus(true)}
        onSubmit={onSubmit}
        {...{ focus }}
      />

      <Box
        aria-label="Search results for the entire site"
        as="section"
        sx={{
          display: query.length > 0 && focus ? "grid" : "none",
          position: "absolute",
          left: 0,
          backgroundColor: "body-5",
          borderBottomLeftRadius: "medium",
          borderBottomRightRadius: "medium",
          borderTop: "none",
          width: "100%",
          "::before": {
            content: '""',
            width: "100%",
            height: "1px",
            background: "radial-gradient(rgba(83, 84, 106, 0.15), transparent)",
          },
        }}
      >
        {results.length === 0 && query.length > 0 && (
          <Text sx={{ p: 2, textAlign: "center" }}>
            {t("No_Results", null, { query })}
          </Text>
        )}
        <ul
          sx={{
            m: 0,
            "list-style-type": "none",
            p: 2, //.46rem
            "& > li": {
              borderRadius: "medium",
              backgroundColor: "transparent",
              transition: "all .2s ease",
              cursor: "pointer",
            },
            "& > li > a": {
              p: 2,
              display: "block",
            },
            "& li:hover": {
              backgroundColor: "secondary",
              transition: "all .2s ease",
            },
          }}
        >
          {results.map((result, index) => (
            <li>
              <SearchHit {...result} onClick={() => setFocus(false)} />
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
