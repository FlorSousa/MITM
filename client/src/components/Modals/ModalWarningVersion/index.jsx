import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { closeModal } from "../../../app/slices/modal";
import Modal from "../../Features/Modal";
import Button from "../../Misc/Button";
import * as Styled from "./style";

export default function WarningVersion() {
    const dispatch = useDispatch();
    const [time, setTime] = useState(15);
    const name = "warningVersion";

    useEffect(() => {
        const id = setTimeout(() => {
            if (time > 0) setTime(time - 1);
        }, 1000);

        return () => clearInterval(id);
    }, [time]);

    return (
       <></>
    );
}
