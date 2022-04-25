
import { Pagination, Stack } from '@mui/material';
import * as React from 'react';
interface IProps {
	page: number,
	setPage: React.Dispatch<React.SetStateAction<number>>,
	posts: IPosts[]
}
export const PaginationControlled: React.FC<IProps> = ({ page, setPage, posts }) => {
	const [pages, setPages] = React.useState(1);
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage((value - 1) * 10);
		setPages(value);
	};

	return (
		<Stack spacing={2}>
			{/* <Typography>Page: {pages}</Typography> */}
			<Pagination count={posts.length / 10} page={pages} onChange={handleChange} />
		</Stack>
	);
}
