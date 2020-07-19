import React from 'react';
// styles
import {
    DialogContainer,
    DialogContent,
    DialogHeader,
    DialogBody,
    DialogFooter
} from './styles';
// icons
import { FiX } from 'react-icons/fi';

interface DialogProps {
    open: boolean;
    showDialog: Function;
    contentWidth?: number;
    contentHeight?: number;
    fullscreen?: boolean;
    title: string;
    cancelButtonText: string;
    successButtonText: string;
    successButtonAction: Function;
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    const {
        open,
        showDialog,
        contentWidth,
        contentHeight,
        fullscreen,
        title,
        children,
        cancelButtonText,
        successButtonText,
        successButtonAction
    } = props;

    return (
        <DialogContainer
            style={{
                opacity: open ? 1 : 0,
                visibility: open ? "visible" : "hidden"
            }}
        >
            <DialogContent
                width={contentWidth!}
                height={contentHeight!}
                fullscreen={fullscreen!}
            >
                <DialogHeader>
                    <span>{title}</span>
                    <div>
                        <FiX onClick={() => showDialog(false)} />
                    </div>
                </DialogHeader>
                <DialogBody>
                    {children}
                </DialogBody>
                <DialogFooter>
                    <button
                        className="cancel"
                        type="button"
                        onClick={() => showDialog(false)}
                    >
                        {cancelButtonText}
                    </button>
                    <button
                        className="success"
                        type="button"
                        onClick={() => successButtonAction()}
                    >
                        {successButtonText}
                    </button>
                </DialogFooter>
            </DialogContent>
        </DialogContainer>
    );
}

export default Dialog;
