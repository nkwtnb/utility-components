import { Box } from "@mui/material"

export default function Contents({children}: any)  {
  return (
    <Box p={2}>
      {/* <span>test</span> */}
      {children}
    </Box>
  )
}
