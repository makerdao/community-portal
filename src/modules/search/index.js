/** @jsx jsx */
import React, {useState, useEffect, createRef} from 'react';
import {InstantSearch, Index, Hits, connectStateResults, PoweredBy} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import {Box, Input, Spinner, jsx} from 'theme-ui';

import SearchInput from './SearchInput'
import Root from './Root'
import * as hitComps from './hit_components';

const Results = connectStateResults(
	({searchState: state, searchResults: res, children}) =>
		res && res.nbHits > 0 ? children : `No results for '${state.query}'`
)

//NOTE(Rejon): Commented out unless they want result count included.
// const Stats = connectStateResults(
// 	({searchResults: res}) =>
// 		res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
// )

const LoadingIndicator = connectStateResults(
	({isSearchStalled}) => isSearchStalled ? <Spinner/> : null
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
		<Box ref={ref} {...otherProps} sx={{
			borderRadius: 0,
			backgroundColor: 'body-5',
			position: 'relative'	
		}}>
			<InstantSearch
				searchClient={searchClient}
				indexName={indices[0].name} //NOTE(Rejon): If we have more than 1 index, you'll have to manage the state for this somewhere.
				onSearchStateChange={({ query }) => setQuery(query)}
			>	
				<SearchInput onFocus={() => setFocus(true)} {...{ collapse, focus }}/>
				<Box sx={{
					display: (query.length > 0 && focus) ? 'grid' : 'none',
					position: 'absolute',
					left: 0,
					backgroundColor: 'body-5',
					borderBottomLeftRadius: 'medium',
					borderBottomRightRadius: 'medium',
					borderTop: 'none',
					width: "100%",
					'::before': {
						content: '""',
						width: '100%',
						height: '1px',
						background: 'radial-gradient(rgba(83, 84, 106, 0.15), transparent)'
					}
				}}>	
					<LoadingIndicator/>
					{indices.map(({name, title, hitComp}) => (
					<Index key={name} indexName={name}>
						<Results>
							<Hits hitComponent={hitComps[hitComp](() => setFocus(false))} sx={{
								'& ul': {
									m: 0, 
									'list-style-type': 'none',
									p: 2, //.46rem
								},
								'& ul > li': {
									borderRadius: 'medium',
									p: 2,
									backgroundColor: 'transparent',
									transition: 'all .2s ease',
									cursor: 'pointer'
								},
								'& ul li:hover': {
									backgroundColor: 'secondary',
									transition: 'all .2s ease'
								}
							}}/>
						</Results>
					</Index>
				))}
				<PoweredBy sx={{
					textAlign: 'right',
					height: '18px',
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
					mb: '5px',
					pr: 2,
					pl: 2,
					'& span': {
						fontSize: '.9rem',
						mr:'6px'
					},
					'& a': {
						height: '100%',
						'& svg': {
							height: '100%',
							width: 'auto'
						}
					}
				}}/>
				</Box>
				
			</InstantSearch>
		</Box>
	)
}

