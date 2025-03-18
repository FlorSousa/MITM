import { useSelector } from "react-redux";

import useSize from "../../../hooks/useSize";
import * as Styled from "./style";

export default function Footer({ pageLoading, ...rest }) {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
    const [footerRef, footerHeight, footerWidth] = useSize();

    return (
        <Styled.Wrapper
            $isAuthenticated={isAuthenticated}
            $pageLoading={pageLoading}
            {...rest}
        >
            <Styled.Text $pageLoading={pageLoading}>
                {pageLoading ? (
                    <Styled.From>from</Styled.From>
                ) : (
                    <>
                        
                    </>
                )}

                
                {pageLoading || "."}
            </Styled.Text>
        </Styled.Wrapper>
    );
}
