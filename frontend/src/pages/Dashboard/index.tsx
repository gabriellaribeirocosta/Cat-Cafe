import styles from './style.module.css'
import CardDashboard from '../../components/CardDashboard'
import logoCourseMarker from '../../../public/logoCourseMarker.png'
import logoGraduationStudents from '../../../public/logoGraduationStudents.png'

const handleCardCourse = async () => {
  //logica card curso
}

const handleCardStudents = async () => {
  //logica card estudantes
}

const Dashboard = () => {
  return (
    <section className={styles.Dashboard}>
      <div className={styles.CardsList}></div>
      <div className={styles.cardRow}>
        <CardDashboard
          onClick={handleCardCourse}
          className={styles.CardStyle}
          logo={logoGraduationStudents}
          number={20}
        >
          a
        </CardDashboard>
        <CardDashboard
          onClick={handleCardStudents}
          className={styles.CardStyle}
          logo={logoCourseMarker}
          number={20}
        >
          b
        </CardDashboard>
      </div>
    </section>
  )
}

export default Dashboard
