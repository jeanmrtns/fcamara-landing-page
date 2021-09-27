import Head from 'next/head';
import Header from '../components/Header';

import {
  RiSurgicalMaskLine,
  RiGroupLine,
  RiMentalHealthLine,
  RiCalendarEventLine,
  RiClockwise2Line,
  RiBuilding2Line,
  RiThermometerLine,
} from 'react-icons/ri';

import styles from '../styles/Home.module.scss';
import Card from '../components/Card';

const Home = () => {
  return (
    <>
      <Head>
        <title>FCamara - De volta ao escritório</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>
          Pensando em voltar ao escritório?{' '}
          <span>Confira algumas orientações</span>
        </h1>
        <p className={styles.message}>
          Ficaríamos muito felizes em tê-lo ao nosso lado (presencialmente)
          novamente! Se você se sentir confortável, fique a vontade para nos
          fazer companhia!{' '}
          <span>
            O trabalho presencial não é obrigatório. Você pode continuar fazendo
            seu home-office, caso deseje :)
          </span>
        </p>

        <section className={styles.tips}>
          <Card>
            <p>
              Os escritórios ficarão abertos entre <span>8h</span> e{' '}
              <span>18h</span>
            </p>
            <RiClockwise2Line />
          </Card>

          <Card>
            <p>
              Nós temos 2 escritórios: um em <span>São Paulo (principal)</span>{' '}
              e outro em <span>Santos (filial)</span>.
            </p>
            <RiBuilding2Line />
          </Card>

          <Card>
            <p>
              O retorno ao escritório só é possível através de um sistema de{' '}
              <span>agendamento</span>
            </p>
            <RiCalendarEventLine />
          </Card>

          <Card>
            <p>
              Deverá ter sua <span>temperatura medida</span>
            </p>
            <RiThermometerLine />
          </Card>

          <Card>
            <p>
              O uso de máscara é <span>obrigatório</span>!
            </p>
            <RiSurgicalMaskLine />
          </Card>

          <Card>
            <p>
              O distanciamente social é uma <span>exigência</span>!
            </p>
            <RiGroupLine />
          </Card>

          <Card>
            <p>
              Se estiver se sentindo mal, <span>não venha</span>! Sua saúde e de
              seus colegas em <span>primeiro lugar</span>.
            </p>
            <RiMentalHealthLine />
          </Card>

          <Card>
            <p>
              Os escritórios só podem comportar{' '}
              <span>até 40% dos consultores</span>, conforme a legislação.
            </p>
            <RiGroupLine />
          </Card>
        </section>
      </main>
    </>
  );
};

export default Home;
