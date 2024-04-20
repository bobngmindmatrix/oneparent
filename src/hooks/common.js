import { useMediaQuery } from "@mui/material";

export const useIsMobile = () => useMediaQuery(`(max-width: 767px)`);
