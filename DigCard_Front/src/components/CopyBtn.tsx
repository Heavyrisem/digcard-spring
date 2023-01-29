import React, { LegacyRef, useRef, useState } from 'react';

interface props {
    str: string,
    before: string,
    after: string
}
function CopyBtn(props: props) {
    const [State, setState] = useState<string>(props.before);

    function Copy() {
        navigator.clipboard.writeText(props.str);
        setState(props.after);
    }

    return (
        <button onClick={Copy}>
            {State}
        </button>
    )
}

export default CopyBtn;