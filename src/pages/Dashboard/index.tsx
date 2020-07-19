import React from 'react';
import api from '../../services/api';
// components
import { Performing, LastActions, Dialog } from '../../components';
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
    AddClass,
    InLine,
    InputControl,
    CheckContainer
} from './styles';
import { ThemeContext } from 'styled-components';
// icons
import { FaPlus } from 'react-icons/fa';
// images
import booksSvg from '../../assets/books.svg';

interface Classe {
    id: number;
    name: string;
    initials: string;
    media: number;
    evaluations: {
        p1: number;
        p2: number;
        po: number;
        tp: number;
        a?: number;
        mf: number;
    }
}

const Dashboard: React.FunctionComponent = () => {
    const { colors } = React.useContext(ThemeContext);
    const [classes, setClasses] = React.useState<Classe[]>();
    const [dialogOpen, setDialogOpen] = React.useState(false);

    React.useEffect(() => {
        api.get('classes').then(response => {
            setClasses(response.data);
        });
    }, []);

    const generateDelay = (index: number) => {
        const totalClasses = classes!.length + 1;
        const initialDelay = 0.3;

        return String((totalClasses - index) * initialDelay);
    }

    return (
        <>
            <Container>
                <Section>
                    {classes?.map((classe, index) => (
                        <Card
                            key={classe.id}
                            width="20%"
                            height={250}
                            image={booksSvg}
                            animationName="SlideInRight"
                            isClass
                            duration="1.5s"
                            delay={`${generateDelay(index + 1)}s`}
                        >
                            <CardTitle>{`${classe.initials} - ${classe.name}`}</CardTitle>
                            <CardDivider />

                            <CardContent>
                                <CardContentItem>
                                    <p><span>p1: </span>{classe.evaluations.p1}</p>
                                    <p><span>p2: </span>{classe.evaluations.p2}</p>
                                    <p><span>po: </span>{classe.evaluations.po}</p>
                                    <p><span>tp: </span>{classe.evaluations.tp}</p>
                                    {classe.evaluations.a && <p><span>a: </span>{classe.evaluations.a}</p>}
                                </CardContentItem>
                                <CardContentItem>
                                    <p><span>mf: </span>{classe.evaluations.mf}</p>
                                    <CardMessage color={colors.success}>
                                        <span>Passou com folga.<br />Bom trabalho!</span>
                                    </CardMessage>
                                </CardContentItem>
                            </CardContent>

                            <CardInfo>
                                <span>{`A média para essa disciplina é ${classe.media}`}</span>
                            </CardInfo>
                        </Card>
                    ))}
                    <AddClass
                        animationName="SlideInLeft"
                        duration="1.5s"
                        delay="1.5s"
                        onClick={() => setDialogOpen(true)}
                    >
                        <FaPlus />
                        <span>Adicionar disciplina</span>
                    </AddClass>
                </Section>
                <Section>
                    <Card
                        width='50%'
                        height={300}
                        animationName="SlideInBottom"
                        duration="1.5s"
                        delay="1s"
                    >
                        <CardTitle>Últimas ações</CardTitle>
                        <CardDivider />
                        <LastActions />
                    </Card>
                    <Card
                        width='50%'
                        height={300}
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

            <Dialog
                open={dialogOpen}
                showDialog={setDialogOpen}
                contentWidth={700}
                contentHeight={500}
                title="Adicionar disciplina"
                cancelButtonText="Cancelar"
                successButtonText="Adicionar"
                successButtonAction={() => { }}
            >
                <form onSubmit={e => e.preventDefault()}>
                    <InLine>
                        <InputControl>
                            <label htmlFor="class">Nome da disciplina</label>
                            <input type="text" id="class" />
                        </InputControl>

                        <InputControl flex={0.5} marginLeft={16}>
                            <label htmlFor="initials">Sigla da disciplina</label>
                            <input type="text" id="initials" />
                        </InputControl>
                    </InLine>

                    <label>Marque as avaliações que a disciplina terá</label>
                    <CheckContainer>
                        <div>
                            <input type="checkbox" id="p1" />
                            <label htmlFor="p1">Prova 1</label>
                        </div>
                        <div>
                            <input type="checkbox" id="p2" />
                            <label htmlFor="p2">Prova 2</label>
                        </div>
                        <div>
                            <input type="checkbox" id="po" />
                            <label htmlFor="po">Prova Optativa</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tp" />
                            <label htmlFor="tp">Trabalho prático</label>
                        </div>
                        <div>
                            <input type="checkbox" id="sem" />
                            <label htmlFor="sem">Seminário</label>
                        </div>
                        <div>
                            <input type="checkbox" id="at" />
                            <label htmlFor="at">Atividades</label>
                        </div>
                        <div>
                            <input type="checkbox" id="others" />
                            <label htmlFor="others">Outras</label>
                        </div>
                    </CheckContainer>

                    <InputControl>
                        <label htmlFor="final_score">Informe o cálculo da média final</label>
                        <textarea id="final_score" cols={30} rows={10} />
                    </InputControl>
                </form>
            </Dialog>
        </>
    );
}

export default Dashboard;
