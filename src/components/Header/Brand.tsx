import React from 'react';
// styles
import { Brand, BrandImage, BrandTitle } from './styles';

interface Props {
    image: any;
    title: string;
}

const BrandComponent: React.FunctionComponent<Props> = ({ image, title }) => {
    function breakTitle(title: string) {
        return title.split(' ');
    }

    return (
        <Brand>
            <BrandImage src={image} alt="Brand"/>
            <BrandTitle>
                {breakTitle(title)[0]}<br/>
                {breakTitle(title)[1]}
            </BrandTitle>
        </Brand>
    );
}

export default BrandComponent;
