//NOTE(Rejon): This context provider exists soley to pass down localtion and pageContext to non page components. 

import React, {createContext, useContext} from 'react';

export const PageDataContext = createContext();

export const usePage = () => {
	const context = useContext(PageDataContext);
	if (context === undefined) {
		throw new Error('usePageContext must be used within a PageDataProvider');
	}

  return context;
}

const PageDataProvider = ({children, value}) => {
	const {location, pageContext, uri} = value; 
	return (
		<PageDataContext.Provider value={{
			location, 
			pageContext,
			uri
		}}>
			{children}
		</PageDataContext.Provider>
	)
}

export default PageDataContext; 
export {PageDataProvider}
