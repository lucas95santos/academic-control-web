import React from 'react';
// styles
import { Container, Section, Card, AddCard, AddCardCircle } from './styles';
// icons
import { FaPlus } from 'react-icons/fa';

const Dashboard: React.FunctionComponent = () => {
    return (
        <Container>
            <Section>
                {/* <Card
                    size={5}
                    height={250}
                    margin={{ left: 0, right: 16 }}
                >

                </Card> */}
                <AddCard
                    size={5}
                    height={250}
                    margin={{ left: 0, right: 0 }}
                >
                    <AddCardCircle>
                        <FaPlus />
                    </AddCardCircle>
                </AddCard>
            </Section>
            <Section>
                <Card
                    size={2}
                    height={300}
                    margin={{ left: 0, right: 16 }}
                >

                </Card>
                <Card
                    size={2}
                    height={300}
                    margin={{ left: 16, right: 0 }}
                >

                </Card>
            </Section>
        </Container>
    );
}

export default Dashboard;
