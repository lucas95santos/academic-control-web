import styled from 'styled-components';

export const TableContainer = styled.div`
    width: 100%;
    height: calc(100% - 24px);
    padding: 16px 0;
    overflow: auto;

    ::-webkit-scrollbar {
        height: 6px;
        background-color: ${props => props.theme.colors.default};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.primary};
        border-radius: 5px;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    font-family: var(--primary-font);

    & thead {
        border-bottom: 2px solid #dddddd;
        display: block;

        & th {
            color: ${props => props.theme.colors.text};
            font-size: 0.813rem;
            font-weight: bold;
            padding: 4px 52px;

            &:nth-child(1) {
                padding: 4px 16px;
            }
        }
    }

    & tbody {
        display: block;

        & tr {
            transition: background-color linear 0.2s;
            border-bottom: 1px solid #dddddd;

            & td {
                padding: 8px 16px;
                font-size: 0.813rem;
                font-weight: 400;
                color: ${props => props.theme.colors.lightText};

                &:nth-child(2) {
                    width: 100%;
                }

                & svg {
                    font-size: 1rem;
                    color: ${props => props.theme.colors.fail};
                    opacity: 0.8;
                }
            }

            &:hover {
                background-color: ${props => props.theme.colors.background};
            }
        }
    }
`
