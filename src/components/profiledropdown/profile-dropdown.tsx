import { Box, Stack } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const ProfileDropdown = () => {
  return (
    <Box component="span">
       <Stack direction="row" spacing={1} alignItems="center">
        Nombre Apellido
        <KeyboardArrowDownIcon />
       </Stack>
    </Box>
  )
}

export default ProfileDropdown