import styles from './AnimatedGradientCard.module.css';

export const AnimatedGradientCard = ({ title, description, icon, theme = 'purple' }) => {
  return (
    <div className={`${styles.wrapper} ${theme === 'green' ? styles.green : ''}`}>
      <div className={styles.card}>
        <div className={styles.border} />
        {icon && (
          <div className={styles.iconContainer}>
            {icon}
          </div>
        )}
        <div className="relative z-10 my-auto">
          {title && <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>}
          <p className="text-white text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
