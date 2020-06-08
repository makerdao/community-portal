/** @jsx jsx */
import React, {useState, useEffect, createRef} from 'react';
import {InstantSearch, Index, Hits, connectStateResults} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import {Box, Input, jsx} from 'theme-ui';

import SearchInput from './SearchInput'
import Root from './Root'
import * as hitComps from './hit_components';

const Results = connectStateResults(
	({searchState: state, searchResults: res, children}) =>
		res && res.nbHits > 0 ? children : `No results for '${state.query}'`
)

const Stats = connectStateResults(
	({searchResults: res}) =>
		res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`]
  const detectClickOutside = event =>
    !ref.current.contains(event.target) && handler()
  useEffect(() => {
    for (const event of events)
      document.addEventListener(event, detectClickOutside)
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside)
    }
  })
}

const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      [ALGOLIA ICON GOES HERE] Algolia
    </a>
  </span>
)

export default function Search({indices, collapse, hitsAsGrid, ...otherProps}) {
	const ref = createRef()
	const [query, setQuery] = useState(``)
	const [focus, setFocus] = useState(false)
	const searchClient = algoliasearch(
		process.env.GATSBY_ALGOLIA_APP_ID,
		process.env.GATSBY_ALGOLIA_SEARCH_KEY
	)

	useClickOutside(ref, () => setFocus(false))

	return (
		<Box ref={ref} {...otherProps}>
			<InstantSearch
				searchClient={searchClient}
				indexName={indices[0].name} //NOTE(Rejon): If we have more than 1 index, you'll have to manage the state for this somewhere.
				onSearchStateChange={({ query }) => setQuery(query)}
			>	
				<SearchInput onFocus={() => setFocus(true)} {...{ collapse, focus }}/>
				<Box sx={{
					display: (query.length > 0 && focus) ? 'grid' : 'none'
				}}>
					{indices.map(({name, title, hitComp}) => (
					<Index key={name} indexName={name}>
						<Results>
							<Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
						</Results>
					</Index>
				))}
				<PoweredBy/>
				</Box>
				
			</InstantSearch>
		</Box>
	)
}

