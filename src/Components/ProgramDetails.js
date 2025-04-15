import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { FaArrowLeft, FaCalendarAlt, FaDumbbell } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const programDetails = {
  1: [
    {
      day: 'Понедельник',
      exercises: ['Жим гантелей', 'Приседания', 'Планка 1 мин'],
    },
    { day: 'Среда', exercises: ['Выпады', 'Становая тяга', 'Подтягивания'] },
    { day: 'Пятница', exercises: ['Бёрпи', 'Отжимания', 'Прыжки на месте'] },
  ],
  2: [
    {
      day: 'Понедельник',
      exercises: ['Поза воина', 'Поза дерева', 'Поза кобры'],
    },
    {
      day: 'Среда',
      exercises: ['Поза мост', 'Поза ребенка', 'Поза кошки-коровы'],
    },
    {
      day: 'Пятница',
      exercises: ['Шавасана', 'Поза голубя', 'Скручивание сидя'],
    },
  ],
  3: [
    {
      day: 'Понедельник',
      exercises: ['Кардио 30 мин', 'Скакалка', 'Приседания'],
    },
    { day: 'Среда', exercises: ['Бёрпи', 'Альпинист', 'Скручивания'] },
    {
      day: 'Пятница',
      exercises: ['Выпады', 'Боковая планка', 'Прыжки на месте'],
    },
  ],
  4: [
    {
      day: 'Понедельник',
      exercises: ['Интервальный бег', 'Прыжки', 'Спринт 100 м'],
    },
    { day: 'Среда', exercises: ['Скакалка', 'Бёрпи', 'Прыжки из приседа'] },
    { day: 'Пятница', exercises: ['Кардио вело 20 мин', 'Бег 5 км'] },
  ],
  5: [
    {
      day: 'Понедельник',
      exercises: ['Функц. присед', 'Тяга резинки', 'Прыжки на платформу'],
    },
    { day: 'Среда', exercises: ['Жим гантелей', 'TRX тяга', 'Планка'] },
    { day: 'Пятница', exercises: ['Отжимания', 'Сумо-присед', 'Альпинист'] },
  ],
  6: [
    { day: 'Понедельник', exercises: ['Приседания', 'Планка', 'Отжимания'] },
    { day: 'Среда', exercises: ['Прыжки', 'Скручивания', 'Альпинист'] },
    {
      day: 'Пятница',
      exercises: ['Обратные отжимания', 'Прыжки', 'Планка боковая'],
    },
  ],
  7: [
    { day: 'Понедельник', exercises: ['HIIT 20 мин', 'Прыжки', 'Планка'] },
    { day: 'Среда', exercises: ['Бёрпи', 'Присед с прыжком', 'Скакалка'] },
    {
      day: 'Пятница',
      exercises: ['Интервальный бег', 'Альпинист', 'Отжимания'],
    },
  ],
  8: [
    {
      day: 'Понедельник',
      exercises: ['Пилатес на пресс', 'Скручивания', 'Планка'],
    },
    { day: 'Среда', exercises: ['Пилатес стоя', 'Мост', 'Поза ребенка'] },
    {
      day: 'Пятница',
      exercises: ['Работа с мячом', 'Дыхательные упражнения', 'Поза планка'],
    },
  ],
  9: [
    { day: 'Понедельник', exercises: ['Групповые кардио', 'Прыжки', 'Планка'] },
    {
      day: 'Среда',
      exercises: ['Йога с группой', 'Поза собаки', 'Поза дерева'],
    },
    {
      day: 'Пятница',
      exercises: ['Силовые станции', 'Отжимания', 'Жим гантелей'],
    },
  ],
  10: [
    {
      day: 'Понедельник',
      exercises: ['Кардио 15 мин', 'Силовая тяга', 'Приседания'],
    },
    {
      day: 'Среда',
      exercises: ['Жим гантелей', 'Прыжки на месте', 'Скакалка'],
    },
    { day: 'Пятница', exercises: ['Функц. отжимания', 'Бёрпи', 'Махи ногами'] },
  ],
  11: [
    {
      day: 'Понедельник',
      exercises: ['Танцевальная разминка', 'Аэробика', 'Шаги под музыку'],
    },
    { day: 'Среда', exercises: ['Латино движения', 'Кардио', 'Силовой танец'] },
    { day: 'Пятница', exercises: ['Zumba', 'Финальное растяжение', 'Бёрпи'] },
  ],
  12: [
    {
      day: 'Понедельник',
      exercises: ['Кроссфит круг', 'Бёрпи', 'Становая тяга'],
    },
    { day: 'Среда', exercises: ['Подтягивания', 'Жим штанги', 'Прыжки'] },
    { day: 'Пятница', exercises: ['Функц. круг', 'Альпинист', 'Пресс'] },
  ],
  13: [
    {
      day: 'Понедельник',
      exercises: ['Дыхание по квадрату', 'Медитация 10 мин', 'Поза дерева'],
    },
    {
      day: 'Среда',
      exercises: ['Шавасана', 'Дыхание Уджайи', 'Лёгкая растяжка'],
    },
    {
      day: 'Пятница',
      exercises: ['Поза кобры', 'Медитация на концентрацию', 'Планка'],
    },
  ],
  14: [
    {
      day: 'Понедельник',
      exercises: ['Ходьба', 'Лёгкие приседания', 'Дыхание'],
    },
    { day: 'Среда', exercises: ['Йога для мам', 'Пилатес', 'Шаги на месте'] },
    { day: 'Пятница', exercises: ['Мост', 'Планка', 'Растяжка'] },
  ],
  15: [
    { day: 'Понедельник', exercises: ['Скакалка', 'Приседания', 'Прыжки'] },
    {
      day: 'Среда',
      exercises: ['Йога для подростков', 'Кардио', 'Игра на реакцию'],
    },
    { day: 'Пятница', exercises: ['HIIT 10 мин', 'Отжимания', 'Скручивания'] },
  ],
  16: [
    {
      day: 'Понедельник',
      exercises: ['Лёгкая зарядка', 'Прыжки', 'Повороты корпуса'],
    },
    { day: 'Среда', exercises: ['Разминка', 'Махи ногами', 'Пресс'] },
    { day: 'Пятница', exercises: ['Прыжки', 'Шаги на месте', 'Планка'] },
  ],
  17: [
    { day: 'Понедельник', exercises: ['Растяжка', 'Шавасана', 'Медитация'] },
    { day: 'Среда', exercises: ['Поза ребенка', 'Лёгкие наклоны', 'Дыхание'] },
    { day: 'Пятница', exercises: ['Поза голубя', 'Мост', 'Лёгкая планка'] },
  ],
  18: [
    { day: 'Понедельник', exercises: ['Тяга к поясу', 'Мост', 'Планка'] },
    { day: 'Среда', exercises: ['Гиперэкстензия', 'Поза кобры', 'Отжимания'] },
    { day: 'Пятница', exercises: ['Лодочка', 'Растяжка спины', 'Дыхание'] },
  ],
  19: [
    {
      day: 'Понедельник',
      exercises: ['Махи ногами', 'Повороты таза', 'Шаги назад'],
    },
    {
      day: 'Среда',
      exercises: ['Упражнение на баланс', 'Растяжка', 'Плавные приседания'],
    },
    { day: 'Пятница', exercises: ['Йога на колени', 'Поза дерева', 'Пресс'] },
  ],
  20: [
    {
      day: 'Понедельник',
      exercises: ['Поза дерева', 'Поза воина', 'Баланс на одной ноге'],
    },
    {
      day: 'Среда',
      exercises: ['Планка', 'Растяжка боков', 'Глубокое дыхание'],
    },
    {
      day: 'Пятница',
      exercises: ['Поза мост', 'Наклоны', 'Поза кошки-коровы'],
    },
  ],
  21: [
    { day: 'Понедельник', exercises: ['Бег', 'Жим штанги', 'Подтягивания'] },
    { day: 'Среда', exercises: ['Спринт', 'Тяга', 'Прыжки'] },
    { day: 'Пятница', exercises: ['Бёрпи', 'Планка', 'Отжимания'] },
  ],
  22: [
    { day: 'Понедельник', exercises: ['Бег на улице', 'Прыжки', 'Скакалка'] },
    { day: 'Среда', exercises: ['Силовой круг', 'Присед', 'Планка'] },
    { day: 'Пятница', exercises: ['Растяжка', 'Бег 3 км', 'Дыхание'] },
  ],
  23: [
    { day: 'Понедельник', exercises: ['Кардио', 'Бёрпи', 'Скручивания'] },
    { day: 'Среда', exercises: ['HIIT', 'Пресс', 'Планка'] },
    { day: 'Пятница', exercises: ['Прыжки', 'Скакалка', 'Приседания'] },
  ],
  24: [
    { day: 'Понедельник', exercises: ['Пресс 5 мин', 'Отжимания', 'Прыжки'] },
    { day: 'Среда', exercises: ['Скакалка', 'Боковая планка', 'Сумо-присед'] },
    { day: 'Пятница', exercises: ['Кардио', 'Махи ногами', 'Скручивания'] },
  ],
  25: [
    {
      day: 'Понедельник',
      exercises: ['Поза планки', 'Поза воина', 'Йога-пресс'],
    },
    { day: 'Среда', exercises: ['Йога стоя', 'Поза моста', 'Медитация'] },
    { day: 'Пятница', exercises: ['Йога поток', 'Планка', 'Шавасана'] },
  ],
  26: [
    { day: 'Понедельник', exercises: ['Бег: 5 мин легко / 1 мин быстро'] },
    { day: 'Среда', exercises: ['Бег: 4x400м в темпе', 'Ходьба между'] },
    { day: 'Пятница', exercises: ['Бег на 3 км', 'Планка', 'Растяжка'] },
  ],
  27: [
    { day: 'Понедельник', exercises: ['Скручивания', 'Планка', 'Ножницы'] },
    {
      day: 'Среда',
      exercises: ['Обратные скручивания', 'Боковая планка', 'Пресс с весом'],
    },
    { day: 'Пятница', exercises: ['Велосипед', 'Пресс стоя', 'Супермен'] },
  ],
  28: [
    { day: 'Понедельник', exercises: ['Мост', 'Шаги', 'Лёгкая растяжка'] },
    { day: 'Среда', exercises: ['Физиотерапия', 'Планка', 'Наклоны'] },
    {
      day: 'Пятница',
      exercises: ['Пилатес', 'Поза ребенка', 'Лёгкая зарядка'],
    },
  ],
  29: [
    { day: 'Понедельник', exercises: ['Круг: 4 упражнения по 45 сек'] },
    { day: 'Среда', exercises: ['Силовой круг: жим, тяга, присед'] },
    { day: 'Пятница', exercises: ['TRX', 'Сумо-присед', 'Бёрпи'] },
  ],
  30: [
    {
      day: 'Понедельник',
      exercises: ['Растяжка шеи', 'Поза кобры', 'Поза голубя'],
    },
    { day: 'Среда', exercises: ['Планка', 'Наклоны в стороны', 'Мост'] },
    { day: 'Пятница', exercises: ['Шавасана', 'Поза дерева', 'Растяжка ног'] },
  ],
};

// Exercise item renderer for virtualized list
const ExerciseItem = ({ index, style, data }) => {
  const { exercises } = data;
  const exercise = exercises[index];

  return (
    <div style={{ ...style, padding: '5px 0' }}>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <FaDumbbell
          style={{
            marginRight: '0.5rem',
            fontSize: '0.8rem',
            color: 'var(--primary)',
          }}
        />
        {exercise}
      </li>
    </div>
  );
};

// Day schedule component with virtualized exercise list
const DaySchedule = ({ day, exercises }) => (
  <div className="card" style={{ marginBottom: '1rem', padding: '1.5rem' }}>
    <h3>
      <FaCalendarAlt
        style={{ marginRight: '0.5rem', color: 'var(--primary)' }}
      />
      {day}
    </h3>
    <div
      style={{
        height: exercises.length * 35,
        maxHeight: 150,
        marginTop: '0.5rem',
      }}
    >
      <List
        height={exercises.length * 35 > 150 ? 150 : exercises.length * 35}
        itemCount={exercises.length}
        itemSize={35}
        width="100%"
        itemData={{ exercises, day }}
      >
        {ExerciseItem}
      </List>
    </div>
  </div>
);

export const ProgramDetails = ({ program, onBack }) => {
  if (!program) {
    return (
      <div className="program-details">
        <div className="container">
          <p>Программа не найдена</p>
          <button onClick={onBack} className="cta-button">
            <FaArrowLeft /> Назад к программам
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="program-details">
      <div className="program-details-header">
        <h1>{program.title}</h1>
        <p>{program.description}</p>
      </div>

      <div className="container">
        <div className="program-details-content">
          <div className="program-details-image">
            <img
              src={program.image || '/placeholder.svg'}
              alt={program.title}
            />
          </div>

          <div className="program-details-info">
            <h2>Расписание тренировок</h2>
            <p>
              Следуйте этому расписанию для достижения максимальных результатов
            </p>

            {programDetails[program.id]?.map((day, index) => (
              <DaySchedule
                key={index}
                day={day.day}
                exercises={day.exercises}
              />
            ))}
          </div>
        </div>

        <div className="program-details-footer">
          <button onClick={onBack} className="cta-button secondary">
            <FaArrowLeft /> Назад к программам
          </button>
          <button className="cta-button">Начать программу</button>
        </div>
      </div>
    </div>
  );
};
ProgramDetails.propTypes = {
  program: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
  onBack: PropTypes.func.isRequired,
};
ExerciseItem.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  data: PropTypes.shape({
    exercises: PropTypes.arrayOf(PropTypes.string).isRequired,
    day: PropTypes.string,
  }).isRequired,
};
DaySchedule.propTypes = {
  day: PropTypes.string.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ProgramDetails;
