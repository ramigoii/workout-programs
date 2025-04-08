import React from "react";
import { useTheme } from "../App";
import VirtualizedGrid from "../Components/VirtualizedGrid";
import "../styles/styles.css";

  
  export const programs = [
    { id: 1, title: "Сила и выносливость", image: require("../styles/images/strength.jpg"), description: "Развивайте силу и выносливость с профессиональными тренировками." },
    { id: 2, title: "Йога и растяжка", image: require("../styles/images/yoga.jpg"), description: "Гибкость и гармония тела с йогой и упражнениями на растяжку." },
    { id: 3, title: "Похудение и тонус", image: require("../styles/images/weight-loss.jpg"), description: "Эффективные тренировки для сжигания жира и подтянутого тела." },
    { id: 4, title: "Кардио интенсив", image: require("../styles/images/cardio.jpg"), description: "Высокоинтенсивные кардио-тренировки для укрепления сердца и сжигания калорий." },
    { id: 5, title: "Функциональный тренинг", image: require("../styles/images/functional.jpg"), description: "Упражнения для развития координации, силы и выносливости." },
    { id: 6, title: "Домашние тренировки", image: require("../styles/images/home-workout.jpg"), description: "Комплексные программы для занятий дома без оборудования." },
    { id: 7, title: "HIIT", image: require("../styles/images/cardio.jpg"), description: "Короткие, но интенсивные тренировки для быстрого результата." },
    { id: 8, title: "Пилатес", image: require("../styles/images/yoga.jpg"), description: "Мягкая, но эффективная тренировка на все группы мышц." },
    { id: 9, title: "Групповые занятия", image: require("../styles/images/functional.jpg"), description: "Тренируйтесь в команде и получайте мотивацию от других." },
    { id: 10, title: "Силовая аэробика", image: require("../styles/images/strength.jpg"), description: "Сочетание кардио и силовых упражнений." },
    { id: 11, title: "Танцевальный фитнес", image: require("../styles/images/cardio.jpg"), description: "Веселые тренировки под музыку." },
    { id: 12, title: "Кроссфит", image: require("../styles/images/strength.jpg"), description: "Интенсивные функциональные тренировки для продвинутых." },
    { id: 13, title: "Медитация и дыхание", image: require("../styles/images/yoga.jpg"), description: "Спокойствие ума и тела с помощью дыхательных практик." },
    { id: 14, title: "Постнатальный фитнес", image: require("../styles/images/home-workout.jpg"), description: "Безопасные тренировки для восстановления после родов." },
    { id: 15, title: "Фитнес для подростков", image: require("../styles/images/functional.jpg"), description: "Энергичные тренировки, подходящие для молодежи." },
    { id: 16, title: "Утренняя зарядка", image: require("../styles/images/cardio.jpg"), description: "Быстрая зарядка для бодрого старта дня." },
    { id: 17, title: "Вечерняя релаксация", image: require("../styles/images/yoga.jpg"), description: "Спокойные упражнения для снятия напряжения перед сном." },
    { id: 18, title: "Программа для спины", image: require("../styles/images/home-workout.jpg"), description: "Укрепление мышц спины и профилактика болей." },
    { id: 19, title: "Здоровые колени", image: require("../styles/images/functional.jpg"), description: "Упражнения для поддержки и укрепления коленных суставов." },
    { id: 20, title: "Гибкость и баланс", image: require("../styles/images/yoga.jpg"), description: "Работа над подвижностью и устойчивостью тела." },
    { id: 21, title: "Атлетическая подготовка", image: require("../styles/images/strength.jpg"), description: "Развитие силы, скорости и выносливости для спортсменов." },
    { id: 22, title: "Фитнес на свежем воздухе", image: require("../styles/images/cardio.jpg"), description: "Тренировки, которые можно проводить на улице." },
    { id: 23, title: "Пляжное тело", image: require("../styles/images/weight-loss.jpg"), description: "Целевая программа для подготовки к лету." },
    { id: 24, title: "Мини-тренировки", image: require("../styles/images/home-workout.jpg"), description: "Короткие, но эффективные тренировки на каждый день." },
    { id: 25, title: "Силовая йога", image: require("../styles/images/yoga.jpg"), description: "Йога с акцентом на развитие силы и контроля." },
    { id: 26, title: "Интервальный бег", image: require("../styles/images/cardio.jpg"), description: "Пробежки с чередованием темпа для улучшения выносливости." },
    { id: 27, title: "Прокачка пресса", image: require("../styles/images/strength.jpg"), description: "Фокус на развитии сильного и подтянутого пресса." },
    { id: 28, title: "Фитнес после травм", image: require("../styles/images/home-workout.jpg"), description: "Осторожные тренировки для восстановления после травм." },
    { id: 29, title: "Силовой круг", image: require("../styles/images/functional.jpg"), description: "Циклические упражнения с упором на силу." },
    { id: 30, title: "Растяжка для всех", image: require("../styles/images/yoga.jpg"), description: "Универсальная программа для развития гибкости." }
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
            src={program.image || "/placeholder.svg"} 
            alt={program.title} 
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover',
              borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0'
            }} 
          />
          <div className="program-card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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
            renderItem={(props) => ProgramCell({ ...props, data: { ...props.data, onProgramClick, theme } })}
            initialColumnCount={3}
            rowHeight={400}
            minColumnWidth={300}
            gap={30}
          />
        </div>
      </div>
    );
  };
  
  export default Programs;