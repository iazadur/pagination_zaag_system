/* eslint-disable react-hooks/exhaustive-deps */
// @flow 
import { Alert, Box, Container, Grid, Snackbar } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { PaginationControlled } from './PaginationControlled';
import { Post } from './Post';
interface PostsProps {
}
export const Home: React.FC<PostsProps> = () => {
	const [page, setPage] = React.useState<number>(0)
	const [posts, setPosts] = React.useState<IPosts[]>([])
	const [open, setOpen] = React.useState<boolean>(false)

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	const getPosts = () => {
		axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
			.then(res => {
				setPosts([...posts, ...res.data?.hits])
				if (res.data?.hits) {

					handleClick()
				}
			})
			.catch(error => {
				console.log("error", error);

			})
	}
	React.useEffect(() => {
		if (!posts.length) {

			getPosts()
		}


	}, [])

	React.useEffect(() => {
		setTimeout(() => {
			getPosts()

		}, 12000);


	}, [posts])


	console.log(posts.length);




	return (
		<>
			<Container>
				<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
						New blog available now!
					</Alert>
				</Snackbar>
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