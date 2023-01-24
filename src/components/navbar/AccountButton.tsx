import React, {useRef, useState} from "react";
import {ClickAwayListener, IconButton, MenuItem, MenuList, Paper, Popper} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AccountButton: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const anchorRef = useRef<HTMLElement>(null);

    const toggle = () => {
        setOpen(open => !open);
    }

    const close = (e: Event) => {
        if (anchorRef.current && anchorRef.current.contains(e.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    }

    return (
        <>
            <IconButton onClick={toggle}>
                <AccountCircleIcon/>
            </IconButton>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                disablePortal
            >
                <Paper>
                    <ClickAwayListener onClickAway={close}>
                        <MenuList>
                            <MenuItem onClick={() => {
                                setOpen(false);
                                navigate("/");
                            }}>
                                Home
                            </MenuItem>
                            <MenuItem onClick={() => {
                                setOpen(false);
                                navigate("/account");
                            }}>
                                Account
                            </MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Popper>
        </>
    );
};

export default AccountButton;
