import axios from 'axios';
import * as React from 'react';

type Props = {

};
export const useData = (props: Props) => {

	const [posts, setPosts] = React.useState<IPosts[]>([])
	const getPosts: () => void = () => {
		axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
			.then(res => {

				setPosts([...posts, ...res.data.hits])
			})
			.catch(error => {

			})
	}
	React.useEffect(() => {
		// setInterval<[]>(() => {

		// }, 10000)
		getPosts()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return {
		posts,
		getPosts
	}
};