import styled from 'styled-components';
// animations
import BaseAnimation, { setAnimation } from '../../styles/animations';

interface UserAccountContentProps {
    animationName?: string;
}

interface FormProps {
    maxWidth?: number;
}

interface InputProps {
    flex?: number;
    marginLeft?: number;
}

export const UserAccountContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    padding: 0 var(--gutter) var(--gutter);
`;

export const UserAccountContent = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
`;

export const UserAccountContentMenu = styled(BaseAnimation)`
    flex: 0.4;
    padding-right: calc(var(--gutter) / 2);
    animation-name: ${(props: UserAccountContentProps) => props.animationName ? setAnimation(props.animationName) : ''};

    > ul {
        list-style: none;

        > li {
            height: 48px;
            background-color: ${props => props.theme.colors.card};
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
            border-radius: 6px;
            box-shadow: 0 2px 3px 0 #00000029;

            font-family: var(--primary-font);
            font-size: 1rem;
            font-weight: 500;
            color: ${props => props.theme.colors.text};

            cursor: pointer;
            transition: all linear 0.2s;

            > svg {
                font-size: 1.1rem;
            }

            &:last-child {
                color: ${props => props.theme.colors.fail};
            }

            &:hover {
                box-shadow: 0 5px 3px 0 #00000029;
            }
        }

        > li.active {
            border-left: 6px solid ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.primary};
        }

        > li + li {
            margin-top: 16px;
        }
    }
`;

export const UserAccountContentInfo = styled(BaseAnimation)`
    flex: 1;
    padding-left: calc(var(--gutter) / 2);
    padding-bottom: calc(var(--gutter) / 2);
    margin-left: var(--gutter);
    animation-name: ${(props: UserAccountContentProps) => props.animationName ? setAnimation(props.animationName) : ''};
`;

export const UserAccountInfoArea = styled.div`
    > h1 {
        font-family: var(--primary-font);
        font-size: 1.8rem;
        line-height: 1.8rem;
        font-weight: 500;
        color: ${props => props.theme.colors.text};
    }
`;

export const UserAccountForm = styled.form`
    margin-top: var(--gutter);
    max-width: ${(props: FormProps) => props.maxWidth}vw;

    button {
        margin-top: 16px;
        border: 0;
        outline: 0;
        font-family: var(--secondary-font);
        font-weight: 600;
        font-size: 1rem;
        color: #ffffff;
        background-color: ${props => props.theme.colors.primary};
        width: 140px;
        height: 45px;
        border-radius: 4px;
        box-shadow: 0 0 5px 2px #00000029;
        cursor: pointer;
        transition: filter linear 0.2s;

        &:hover {
            filter: brightness(85%);
        }
    }
`;

export const UserAvatar = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: var(--gutter);

    label {
        cursor: pointer;
        transition: opacity linear 0.2s;

        &:hover {
            opacity: 0.8;
        }

        img {
            width: 8vw;
            height: 8vw;
            border-radius: 50%;
            border: 3px solid ${props => props.theme.colors.primary};
            object-fit: contain;
            background-color: ${props => props.theme.colors.default};
        }

        input {
            display: none;
        }
    }

    span {
        margin-left: var(--gutter);
        font-family: var(--primary-font);
        font-size: 1.4rem;
        font-weight: 500;
        color: ${props => props.theme.colors.secondary};
    }
`;

export const InLine = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 415px) {
        flex-direction: column;
    }
`;

export const InputControl = styled.div`
    width: 100%;
    flex: ${(props: InputProps) => props.flex ? props.flex : 1};
    display: flex;
    flex-direction: column;
    margin-bottom: calc(var(--gutter) / 2);

    margin-left: ${(props: InputProps) => props.marginLeft}px;

    @media (max-width: 415px) {
        margin-left: 0;
    }
`;
