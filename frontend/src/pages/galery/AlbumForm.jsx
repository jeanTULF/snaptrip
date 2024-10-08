/* eslint-disable arrow-body-style */

import {
	Box,
	List,
	ListItem,
	ListItemText,
	Stack,
	Typography,
} from '@mui/material'
import { PhotoSwipe } from './PhotoSwipe'
import { NavBar } from '../../components/navigation/NavBar'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import CameraIcon from '@mui/icons-material/Camera'

export const AlbumForm = () => {
	return (
		<>
			<NavBar />
			<Box sx={{ mt: '60px', backgroundColor: '#FBFCFF', pb: '20px' }}>
				<Box
					sx={{
						backgroundColor: '#F2F5FA',
					}}
				>
					<Stack spacing={1} sx={{ py: '1rem' }}>
						<Typography
							sx={{
								fontSize: '28px',
								fontWeight: '700',
								textAlign: 'center',
							}}
						>
							Album 1
						</Typography>
						<Typography
							component="p"
							sx={{ fontSize: '14px', textAlign: 'center' }}
						>
							{
								'Tomada con una Canon EOS R5 al amanecer. Apertura f/2.8, ISO100. La luz dorada realza los colores, capturando cadadetalle con nitidez impresionante y un increíble rango dinámico.'
							}
						</Typography>
						<List>
							<ListItem sx={{ gap: '20px' }}>
								<CameraAltIcon sx={{ fontSize: '18px' }} />
								<ListItemText
									primary="Canon EOS 5D Mark IV"
									sx={{
										'& .MuiListItemText-primary': {
											fontSize: '14px',
										},
									}}
								/>
							</ListItem>
							<ListItem sx={{ gap: '20px' }}>
								<CameraIcon sx={{ fontSize: '18px' }} />
								<ListItemText
									primary="Canon EF 24-70mm f/2.8L II USM"
									sx={{
										'& .MuiListItemText-primary': {
											fontSize: '14px',
										},
									}}
								/>
							</ListItem>
						</List>
					</Stack>
				</Box>
				<PhotoSwipe />
			</Box>
		</>
	)
}
