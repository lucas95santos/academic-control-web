import React from 'react';
// styles
import { Brand, BrandImage, BrandTitle } from './styles';

interface Props {
    image: any;
    title: string;
    goToDashboard: Function;
}

const BrandComponent: React.FunctionComponent<Props> = (props) => {
    const { image, title, goToDashboard } = props;

    const breakTitle = (title: string) => {
        return title.split(' ');
    }

    return (
        <Brand onClick={() => goToDashboard()} title="Ir para o dashboard">
            <BrandImage src={image} alt="Brand"/>
            <BrandTitle>
                {breakTitle(title)[0]}<br/>
                {breakTitle(title)[1]}
            </BrandTitle>
        </Brand>
    );
}

export default BrandComponent;
