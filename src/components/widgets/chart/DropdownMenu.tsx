import React, {useRef, useState} from "react";
import {Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import languages from "../../../redux/lang/languages";
import {useSelector} from "react-redux";
import {langSelector} from "../../../redux/lang/langSlice";

interface DropdownMenuProps {
    type: string,
    options: string[],
    parentDispatch?: React.Dispatch<any>
}

const DropdownMenu: React.FC<DropdownMenuProps> = (dropdownProps) => {
    const lang = useSelector(langSelector);
    const {type, options, parentDispatch} = {...dropdownProps};
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [optionIdx, setOptionIdx] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const toggleOpen = () => {
        setOpen(open => !open);
    }

    const handleClick = (opt: string) => {
        setOptionIdx(options.findIndex(o => o === opt));

        if (parentDispatch) {
            let arg = opt;
            if (lang === "PL") {
                const idx = languages.get("PL")!.widgets.chart.dropdowns.get(type)!.findIndex(s => s === opt);
                arg = languages.get("EN")!.widgets.chart.dropdowns.get(type)![idx];
            }
            console.log(arg);
            parentDispatch(arg.toLowerCase());
        }
    }

    return (
        <>
            <Button
                ref={anchorRef}
                onClick={toggleOpen}
            >
                {options[optionIdx]}
                {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                transition
            >
                {({TransitionProps}) => (
                    <Grow
                        {...TransitionProps}
                        style={{transformOrigin: "left top"}}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={() => setOpen(false)}>
                                <MenuList>
                                    {options.map((opt, idx) => (
                                        <MenuItem
                                            key={idx}
                                            onClick={() => handleClick(opt)}
                                        >
                                            {opt}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};

export default DropdownMenu;
