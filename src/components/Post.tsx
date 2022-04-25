
import { Card, CardContent, Link, Typography } from '@mui/material';
import * as React from 'react';
import { FC } from 'react';

export const Post: FC<{ single: IPosts }> = ({ single }) => {
	const date = new Date(single.created_at)

	return (
		<>
			<Card sx={{ maxWidth: 345 }}>

				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{single.author}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{date.toLocaleString()}
					</Typography>
					<Typography variant="body1" color="text.secondary">
						{single.title}
					</Typography>
					<Link href={single.url} variant="body2">
						{"See More"}
					</Link>
				</CardContent>

			</Card>

		</>
	);
};


