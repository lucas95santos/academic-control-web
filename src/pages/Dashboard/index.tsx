import React from 'react';
// components
import { Performing, LastActions } from '../../components';
// styles
import {
    Container,
    Section,
    Card,
    CardTitle,
    CardDivider,
    CardContent,
    CardContentItem,
    CardMessage,
    CardInfo,
    AddCard,
    AddCardCircle
} from './styles';
import { ThemeContext } from 'styled-components';
// icons
import { FaPlus } from 'react-icons/fa';
// images
import booksSvg from '../../assets/books.svg';

const Dashboard: React.FunctionComponent = () => {
    const { colors } = React.useContext(ThemeContext);

    return (
        <Container>
            <Section>
                <Card
                    height={250}
                    margin={{ left: 0, right: 16 }}
                    image={booksSvg}
                    animationName="SlideInRight"
                    duration="1.5s"
                    delay="0.6s"
                >
                    <CardTitle>IA - Inteligência artificial</CardTitle>
                    <CardDivider />

                    <CardContent>
                        <CardContentItem>
                            <p><span>p1: </span>10.0</p>
                            <p><span>p2: </span>10.0</p>
                            <p><span>po: </span>10.0</p>
                            <p><span>tp: </span>10.0</p>
                        </CardContentItem>
                        <CardContentItem>
                            <p><span>mf: </span>10.0</p>
                            <CardMessage color={colors.success}>
                                <span>Passou com folga.<br />Bom trabalho!</span>
                            </CardMessage>
                        </CardContentItem>
                    </CardContent>

                    <CardInfo>
                        <span>A média para essa disciplina é 6.0</span>
                    </CardInfo>
                </Card>
                <Card
                    height={250}
                    margin={{ left: 16, right: 16 }}
                    image={booksSvg}
                    animationName="SlideInRight"
                    duration="1.5s"
                    delay="0.3s"
                >
                    <CardTitle>FUNDRED - Fundamentos de Redes</CardTitle>
                    <CardDivider />

                    <CardContent>
                        <CardContentItem>
                            <p><span>p1: </span>10.0</p>
                            <p><span>p2: </span>10.0</p>
                            <p><span>po: </span>10.0</p>
                            <p><span>tp: </span>10.0</p>
                        </CardContentItem>
                        <CardContentItem>
                            <p><span>mf: </span>10.0</p>
                            <CardMessage color={colors.success}>
                                <span>Passou com folga.<br />Bom trabalho!</span>
                            </CardMessage>
                        </CardContentItem>
                    </CardContent>

                    <CardInfo>
                        <span>A média para essa disciplina é 6.0</span>
                    </CardInfo>
                </Card>
                <AddCard
                    height={250}
                    margin={{ left: 16, right: 0 }}
                    title="Adicionar disciplina"
                    animationName="SlideInLeftAlternative"
                    duration="1.5s"
                    delay="0.3s"
                >
                    <AddCardCircle>
                        <FaPlus />
                    </AddCardCircle>
                </AddCard>
            </Section>
            <Section>
                <Card
                    width='100%'
                    height={300}
                    margin={{ left: 0, right: 16 }}
                    animationName="SlideInBottom"
                    duration="1.5s"
                    delay="1s"
                >
                    <CardTitle>Últimas ações</CardTitle>
                    <CardDivider />
                    <LastActions />
                </Card>
                <Card
                    width='100%'
                    height={300}
                    margin={{ left: 16, right: 0 }}
                    animationName="SlideInBottom"
                    duration="1.5s"
                    delay="1s"
                >
                    <CardTitle>Desempenho</CardTitle>
                    <CardDivider />
                    <Performing />
                </Card>
            </Section>
        </Container>
    );
}

export default Dashboard;
