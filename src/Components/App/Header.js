import { HeaderStyle } from "./Styles";

export default function Header({image}) {
    return (
        <HeaderStyle image={image}>
            <p>TrackTt</p>
            <div className="image"/>
        </HeaderStyle>
    );
}