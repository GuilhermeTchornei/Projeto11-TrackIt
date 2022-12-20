import { HeaderStyle } from "./Styles";

export default function Header({image}) {
    return (
        <HeaderStyle data-test="header" image={image}>
            <p>TrackTt</p>
            <div className="image"/>
        </HeaderStyle>
    );
}