export function Shadow(): string {
    let tmp: Array<string> = [];
    for (let i = 1; i <= window.screen.height; i++) tmp.push(`#ffb07b ${i}px ${i}px`);

    return tmp.join(",");
}

interface InputProps {
    label: string,
    refs: React.RefObject<HTMLInputElement>
}
export function Input(props:InputProps) {
    return (
        <div className="Input">
            <div className="label">{props.label}</div>
            <input type="text" ref={props.refs} />
        </div>
    )
}