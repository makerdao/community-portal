import React from 'react'
import { Highlight, Snippet } from "react-instantsearch-dom"

export const SearchHit_Page = clickHandler => ({hit}) => (
		<div>
			<h4>
				<Highlight attribute="title" hit={hit} tagName="mark" />
			</h4>
			<Snippet attribute="excerpt" hit={hit} tagName="mark" />
		</div>
	)
