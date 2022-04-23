// import Pagination from '@mui/material/Pagination';
import { Pagination, Stack, Typography } from '@mui/material';
import * as React from 'react';

export default function PaginationControlled() {
	const [page, setPage] = React.useState(1);
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	return (
		<Stack spacing={2}>
			<Typography>Page: {page}</Typography>
			<Pagination count={10} page={page} onChange={handleChange} />
		</Stack>
	);
}
