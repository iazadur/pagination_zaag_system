// @flow 
import { Box, Container, Grid } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { PaginationControlled } from './PaginationControlled';
import { Post } from './Post';
interface PostsProps {
}
export const Home: React.FC<PostsProps> = () => {
	const [page, setPage] = React.useState<number>(0)
	const [posts, setPosts] = React.useState<IPosts[]>([])
	const getPosts = () => {
		axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
			.then(res => {
				setPosts([...posts, ...res.data?.hits])
			})
			.catch(error => {

			})
	}
	React.useEffect(() => {

		getPosts()

		setInterval(() => {
			getPosts()
		}, 12 * 1000)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	console.log(posts.length);

	return (
		<>
			<Container>
				<Grid container spacing={2}>


					{
						posts.slice(page, page + 10).map((i: IPosts, idx: number) => (<Grid key={idx} item xs={4}>
							<Post single={i} />
						</Grid>))
					}


				</Grid>
				<Box component={'div'} sx={{
					display: 'flex',
					justifyContent: "center"
				}}>

					<PaginationControlled page={page} setPage={setPage} posts={posts} />
				</Box>
			</Container>


		</>
	);
};