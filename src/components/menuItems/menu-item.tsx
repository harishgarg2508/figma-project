"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { signOut } from "next-auth/react";
import { ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSession } from "next-auth/react";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let userName = "";
  let email = "";
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (session) {
    userName = session.user?.name || "Guest";
    email = session.user?.email || "guest@example.com";
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <KeyboardArrowDownIcon sx={{ color: "white" }} />
      </Button>
      <Menu
        sx={{
          maxWidth: "240px",
          minHeight: "149px",
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Tooltip title={email} placement="bottom-start">
            <ListItemText
              sx={{
                "& .MuiListItemText-primary": {
                  display: "block",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "180px",
                },
                "& .MuiListItemText-secondary": {
                  display: "block",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "180px",
                },
              }}
              primary={userName}
              secondary={email}
            />
          </Tooltip>
        </MenuItem>
        <MenuItem onClick={() => signOut({ callbackUrl: "/login" })}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
