import React from 'react';
import { useTheme } from '../App';
import VirtualizedGrid from '../Components/VirtualizedGrid';
import '../styles/styles.css';
import images from '../styles/assets/images';
import PropTypes from 'prop-types';

export const programs = [
  {
    id: 1,
    title: 'Сила и выносливость',
    image: images.strength,
    description:
      'Развивайте силу и выносливость с профессиональными тренировками.',
  },
  {
    id: 2,
    title: 'Йога и растяжка',
    image: images.yoga,
    description: 'Гибкость и гармония тела с йогой и упражнениями на растяжку.',
  },
  {
    id: 3,
    title: 'Похудение и тонус',
    image: images.weightLoss,
    description: 'Эффективные тренировки для сжигания жира и подтянутого тела.',
  },
  {
    id: 4,
    title: 'Кардио интенсив',
    image: images.cardio,
    description:
      'Высокоинтенсивные кардио-тренировки для укрепления сердца и сжигания калорий.',
  },
  {
    id: 5,
    title: 'Функциональный тренинг',
    image: images.functional,
    description: 'Упражнения для развития координации, силы и выносливости.',
  },
  {
    id: 6,
    title: 'Домашние тренировки',
    image: images.homeWorkout,
    description: 'Комплексные программы для занятий дома без оборудования.',
  },
  {
    id: 7,
    title: 'HIIT',
    image: images.hiit,
    description: 'Короткие, но интенсивные тренировки для быстрого результата.',
  },
  {
    id: 8,
    title: 'Пилатес',
    image: images.pilates,
    description: 'Мягкая, но эффективная тренировка на все группы мышц.',
  },
  {
    id: 9,
    title: 'Групповые занятия',
    image: images.group,
    description: 'Тренируйтесь в команде и получайте мотивацию от других.',
  },
  {
    id: 10,
    title: 'Силовая аэробика',
    image: images.aerobic,
    description: 'Сочетание кардио и силовых упражнений.',
  },
  {
    id: 11,
    title: 'Танцевальный фитнес',
    image: images.dfitness,
    description: 'Веселые тренировки под музыку.',
  },
  {
    id: 12,
    title: 'Кроссфит',
    image: images.crossfit,
    description: 'Интенсивные функциональные тренировки для продвинутых.',
  },
  {
    id: 13,
    title: 'Медитация и дыхание',
    image: images.meditation,
    description: 'Спокойствие ума и тела с помощью дыхательных практик.',
  },
  {
    id: 14,
    title: 'Постнатальный фитнес',
    image: images.postnatal,
    description: 'Безопасные тренировки для восстановления после родов.',
  },
  {
    id: 15,
    title: 'Фитнес для подростков',
    image: images.teenagers,
    description: 'Энергичные тренировки, подходящие для молодежи.',
  },
  {
    id: 16,
    title: 'Утренняя зарядка',
    image: images.morning,
    description: 'Быстрая зарядка для бодрого старта дня.',
  },
  {
    id: 17,
    title: 'Вечерняя релаксация',
    image: images.evening,
    description: 'Спокойные упражнения для снятия напряжения перед сном.',
  },
  {
    id: 18,
    title: 'Программа для спины',
    image: images.spina,
    description: 'Укрепление мышц спины и профилактика болей.',
  },
  {
    id: 19,
    title: 'Здоровые колени',
    image: images.koleni,
    description: 'Упражнения для поддержки и укрепления коленных суставов.',
  },
  {
    id: 20,
    title: 'Гибкость и баланс',
    image: images.balance,
    description: 'Работа над подвижностью и устойчивостью тела.',
  },
  {
    id: 21,
    title: 'Атлетическая подготовка',
    image: images.athletes,
    description: 'Развитие силы, скорости и выносливости для спортсменов.',
  },
  {
    id: 22,
    title: 'Фитнес на свежем воздухе',
    image: images.freshair,
    description: 'Тренировки, которые можно проводить на улице.',
  },
  {
    id: 23,
    title: 'Пляжное тело',
    image: images.weightLoss,
    description: 'Целевая программа для подготовки к лету.',
  },
  {
    id: 24,
    title: 'Мини-тренировки',
    image: images.mini,
    description: 'Короткие, но эффективные тренировки на каждый день.',
  },
  {
    id: 25,
    title: 'Силовая йога',
    image: images.silovaya,
    description: 'Йога с акцентом на развитие силы и контроля.',
  },
  {
    id: 26,
    title: 'Интервальный бег',
    image: images.interval,
    description: 'Пробежки с чередованием темпа для улучшения выносливости.',
  },
  {
    id: 27,
    title: 'Прокачка пресса',
    image: images.press,
    description: 'Фокус на развитии сильного и подтянутого пресса.',
  },
  {
    id: 28,
    title: 'Фитнес после травм',
    image: images.trauma,
    description: 'Осторожные тренировки для восстановления после травм.',
  },
  {
    id: 29,
    title: 'Силовой круг',
    image: images.krug,
    description: 'Циклические упражнения с упором на силу.',
  },
  {
    id: 30,
    title: 'Растяжка для всех',
    image: images.rastyazhka,
    description: 'Универсальная программа для развития гибкости.',
  },
];

// Program Card Cell Component for the virtualized grid
const ProgramCell = ({ columnIndex, rowIndex, style, data }) => {
  const { items, columnCount } = data;
  const index = rowIndex * columnCount + columnIndex;
  const program = items[index];

  if (!program) return null;

  // Add padding inside the cell
  const cellStyle = {
    ...style,
    padding: '15px',
    boxSizing: 'border-box',
  };

  return (
    <div style={cellStyle}>
      <div
        className="program-card"
        onClick={() => data.onProgramClick(program)}
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <img
          src={program.image || '/placeholder.svg'}
          alt={program.title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
          }}
        />
        <div
          className="program-card-content"
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          <h3>{program.title}</h3>
          <p style={{ flex: 1 }}>{program.description}</p>
          <button className="cta-button">Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export const Programs = ({ onProgramClick }) => {
  const { theme } = useTheme();

  return (
    <div className="programs-container">
      <section className="programs-hero">
        <div className="about-hero-content">
          <h1>Наши программы</h1>
          <p>Выберите программу, которая подходит именно вам</p>
        </div>
      </section>

      <div className="container" style={{ padding: '2rem 1rem' }}>
        <VirtualizedGrid
          items={programs}
          renderItem={(props) =>
            ProgramCell({
              ...props,
              data: { ...props.data, onProgramClick, theme },
            })
          }
          initialColumnCount={3}
          rowHeight={400}
          minColumnWidth={300}
          gap={30}
        />
      </div>
    </div>
  );
};

Programs.propTypes = {
  onProgramClick: PropTypes.func.isRequired,
};

ProgramCell.propTypes = {
  columnIndex: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  data: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    columnCount: PropTypes.number.isRequired,
    onProgramClick: PropTypes.func.isRequired,
  }).isRequired,
};
export default Programs;
