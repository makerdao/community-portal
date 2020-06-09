/** @jsx jsx */
import React from 'react'
import {jsx} from 'theme-ui'
import Link from '@modules/utility/Link'
import { Highlight, Snippet } from "react-instantsearch-dom"

export const SearchHit_Page = clickHandler => ({hit}) => (
		<div >	
			{console.log(hit)}
			<h4 sx={{
				m: 0,
				
			}}>
				<Highlight attribute="title" hit={hit} tagName="mark" sx={{
			'& mark': {
					backgroundColor: 'primary',
					
				}
		}}/>
			</h4>
			<Snippet attribute="excerpt" hit={hit} tagName="mark" sx={{
			'& mark': {
					backgroundColor: 'primaryMuted',
					
				}
		}} />
		</div>
	)
