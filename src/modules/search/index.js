/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";

import { Box, Text, jsx } from "theme-ui";
import LUNR from "lunr"
import { useNavigate } from "@reach/router";
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

import {useTranslation} from "@modules/localization";
import SearchInput from "./SearchInput";
import SearchHit from "./SearchHit";

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`];

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const detectClickOutside = (event) =>
      {
        if (!ref.current) {return;}

        !ref.current.contains(event.target) && handler();
      }
    for (const event of events)
      document.addEventListener(event, detectClickOutside);
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside);
    };
  });
};

export default function Search({ ...otherProps }) {
  const MAX_RESULT_COUNT = 10; //<- Return 10 results maximum. 
  const ref = useRef();
  const resultList = useRef(); 
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);
  const [results, setResults] = useState([]);
  const [lunr, setLunr] = useState(null);
  
  const navigate = useNavigate();
  const { locale, t, DEFAULT_LOCALE } = useTranslation();

  useClickOutside(ref, () => setFocus(false));

  //On input change, run the search query and update our results state. 
  const onChange = (val) => {
    if (lunr && val !== "") {
      const query = val
      .trim() // remove trailing and leading spaces
      .replace(/\s/g, "*") // remove user's wildcards
      .toLowerCase()

      const lunrLocalized = lunr[locale] || lunr[DEFAULT_LOCALE];

      const results = lunrLocalized.index.query((q) => {
        LUNR.tokenizer(query).forEach(function (token) {
          //Fuzzy Match
          q.term(token.toString(), { editDistance: query.length >= 3 ? 2 : 0 }) //<- If our token is longer than 5 characters, let the accidental distance be 2 letters (ie. "A" <- Z,Y,B,C are 2 distances away from A in both directions.)
          //Wild card
          q.term(token.toString(), {
            //<- Wildcard treatment for our token specifically.
            wildcard:
              LUNR.Query.wildcard.LEADING | LUNR.Query.wildcard.TRAILING,
          })

          //Field boosts
          q.term(token.toString(), { fields: ["title"], boost: 20 }) //<- Boost the value of our query for a specific field.
          q.term(token.toString(), { fields: ["keywords"], boost: 15 })
          q.term(token.toString(), { fields: ["excerpt"], boost: 5 })
        })
      })
      .slice(0,MAX_RESULT_COUNT)
      .map(({ ref }) => {
        return lunr[locale].store[ref]
      })

      setResults(results);
    }

    if (val === "") {
      setResults([]);
    }

    setQuery(val);
  };

  //On form submission, navigate to the url of the first element. 
  const onSubmit = () => {
    if (results.length > 0) {
      navigate(results[0].url)
      setFocus(false);
    }
  }

  //LUNR becomes available only via the window.
  //To make it easier for our app to access it we just set it in our app context.
  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.__LUNR__) {
        window.__LUNR__.__loaded.then((lunr) => setLunr(lunr));
      }
    }
  }, [])

  return (
    <Box
      ref={ref}
      {...otherProps}
      sx={{
        borderRadius: 0,
        backgroundColor: "body-5-pure",
        position: "relative",
      }}
    >
      <SearchInput
        onFocus={() => setFocus(true)}
        onChange={onChange}
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
          backgroundColor: "body-5-pure",
          borderBottomLeftRadius: "medium",
          borderBottomRightRadius: "medium",
          borderTop: "none",
          zIndex: "1000000000",
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
          ref={resultList}
          sx={{
            m: 0,
            listStyleType: "none",
            p: 2, //.46rem
            overflow: 'auto',
            maxHeight: '464px',
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
              <SearchHit {...result} query={query} onClick={() => {
                setFocus(false)

                //Google Analytics Tracking
                trackCustomEvent({
                  category: "Internal Search",
                  action: `Click Result`,
                  label: `Query: ${query} | To Page: ${result.url}`
                });
              }} />
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
