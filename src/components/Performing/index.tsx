import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// styles
import { PerformingContainer, PerformingOptions, PerformingButton, PerformingButtonActive } from './styles';
import { ThemeContext } from 'styled-components';

const data = [
    {
        name: 'Prova 1', nota: 10.0
    },
    {
        name: 'Prova 2', nota: 8.5
    },
    {
        name: 'Prova Optativa', nota: 9.0
    },
    {
        name: 'Trabalho', nota: 7.5
    },
    {
        name: 'Atividades', nota: 10.0
    }
];

const Performing: React.FunctionComponent = () => {
    const { colors } = React.useContext(ThemeContext);
    const [performingChartWidth, setPerformingChartWidth] = React.useState(0);

    React.useEffect(() => {
        const performingContainer: Element | null = document.querySelector<Element>('#performing_container');
        if (performingContainer) {
            setPerformingChartWidth(performingContainer.clientWidth);
            window.addEventListener('resize', () => {
                setPerformingChartWidth(performingContainer.clientWidth);
            });
        }
    }, []);

    return (
        <PerformingContainer id="performing_container">
            <PerformingOptions>
                <PerformingButtonActive margin={{ left: 0, right: 8 }}>ia</PerformingButtonActive>
                <PerformingButton margin={{ left: 8, right: 8 }}>fundred</PerformingButton>
                <PerformingButton margin={{ left: 8, right: 8 }}>so</PerformingButton>
                <PerformingButton margin={{ left: 8, right: 0 }}>medsoft</PerformingButton>
            </PerformingOptions>
            <LineChart
                width={performingChartWidth}
                height={200}
                margin={{ top: 0, right: 16, bottom: 8, left: -32 }}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 'dataMax']} padding={{ top: 16, bottom: 0 }} />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="nota"
                    stroke={colors.primary}
                    activeDot={{ r: 8 }}
                    animationBegin={1250}
                />
            </LineChart>
        </PerformingContainer>
    );
}

export default Performing;
