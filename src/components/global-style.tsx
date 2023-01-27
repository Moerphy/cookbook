import { css, Global } from '@emotion/react';

export function GlobalStyle() {
    return (
        <Global
            styles={css`
                body {
                    background: #1E1B18;
                    color: #FCF7F8;
                }
            `}
        />
    );
}