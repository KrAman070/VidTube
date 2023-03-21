import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo}  alt="logo" height={45} /><Typography variant="h5" fontWeight={800}  color="white" mb={3} ml={{ sm: "100px"}}>
       VidTube2.O By Aman
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
