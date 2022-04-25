import React, { createContext } from 'react';
import { useData } from '../hooks/useData';
interface PostsProps {
	posts: IPosts[],
	getPosts: () => void
}
export const AppContext = createContext<PostsProps | null>(null)

type Props = {
	children: JSX.Element
};
const DataProvider: React.FC<any> = (props: Props) => {
	const allContext = useData({})
	return (
		<AppContext.Provider value={allContext}>
			{props.children}
		</AppContext.Provider>
	);
};

export default DataProvider;