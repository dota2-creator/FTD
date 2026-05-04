// Конфигурационный файл — настройки приложения
// В этом проекте файл версионируется в репозитории (на проде при необходимости замените локально).

window.ENV_CONFIG = {
    // ==========================================
    // ПОЛЬЗОВАТЕЛИ ДЛЯ ВХОДА (логин: { password, role, displayName })
    // role: 'admin' — полный доступ, ввод FTD | role: 'user' — своя посещаемость, просмотр (без ввода FTD, без Настроек и зарплаты тимлида)
    // Чтобы сделать администратором: у нужного логина замените role на 'admin'
    // ==========================================
    users: {
        'admin': { password: 'teq107', role: 'admin', displayName: 'Администратор' },
        'david_aliev': { password: 'DavAliev2026!', role: 'user', displayName: 'Давид Алиев' },
        'eldar_amirov': { password: 'EldarFt2026!', role: 'user', displayName: 'Ельдар Амиров' },
        'alexandr_burim': { password: 'AlexBurim2026!', role: 'user', displayName: 'Александр Бурим' },
        'bayram_shcherbakov': { password: 'BayramSh2026!', role: 'user', displayName: 'Байрам Щербаков' },
        'mark_baurzhanov': { password: 'MarkBau2026!', role: 'user', displayName: 'Марк Бауржанов' },
        'alina_kunaeva': { password: 'AlinaKu2026!', role: 'user', displayName: 'Алина Кунаева' }
    },

    // Пароль для входа на экран «Зарплата тим-лидера» (и доп. защита «Настройки», если не используется вход как admin)
    TEAM_LEADER_SALARY_PASSWORD: '1',

    // ==========================================
    // ТИМЛИД
    // ==========================================
    TEAM_LEADER_NAME: '',
    TEAM_LEADER_BASE_RATE: 900,
    
    // ==========================================
    // СТАВКИ И БОНУСЫ
    // ==========================================
    DEFAULT_BASE_RATE: 800,
    INVALID_BONUS_PER_FTD: 20,
    TEAM_LEADER_PER_FTD: 30,
    TEAM_PLAN_BONUS_AMOUNT: 500,
    
    // ==========================================
    // ОСНОВНЫЕ ТАРИФЫ (единые условия для всех менеджеров)
    // Диапазон — по количеству валидных FTD за период (min–max включительно)
    // ==========================================
    DEFAULT_TARIFFS: [
        { min: 0, max: 4, baseRate: 800, bonusPerFTD: 50 },
        { min: 5, max: 7, baseRate: 1000, bonusPerFTD: 65 },
        { min: 8, max: 12, baseRate: 1100, bonusPerFTD: 75 },
        { min: 13, max: 15, baseRate: 1200, bonusPerFTD: 90 },
        { min: 16, max: 19, baseRate: 1200, bonusPerFTD: 100 },
        { min: 20, max: 999, baseRate: 1500, bonusPerFTD: 100 }
    ],
    
    // ==========================================
    // ПРЕДУСТАНОВЛЕННЫЙ НАБОР (один на всех — совпадает с DEFAULT_TARIFFS)
    // ==========================================
    MANAGER_TARIFF_PRESETS: {
        preset1: {
            name: 'Единые условия',
            tariffs: [
                { min: 0, max: 4, baseRate: 800, bonusPerFTD: 50 },
                { min: 5, max: 7, baseRate: 1000, bonusPerFTD: 65 },
                { min: 8, max: 12, baseRate: 1100, bonusPerFTD: 75 },
                { min: 13, max: 15, baseRate: 1200, bonusPerFTD: 90 },
                { min: 16, max: 19, baseRate: 1200, bonusPerFTD: 100 },
                { min: 20, max: 999, baseRate: 1500, bonusPerFTD: 100 }
            ]
        }
    },
    
    // ==========================================
    // МЕНЕДЖЕРЫ
    // ==========================================
    DEFAULT_MANAGERS: [
        'Давид Алиев',
        'Ельдар Амиров',
        'Александр Бурим',
        'Байрам Щербаков',
        'Марк Бауржанов',
        'Алина Кунаева'
    ],
    INITIAL_MANAGERS: [],
    
    // ==========================================
    // ГОДЫ
    // ==========================================
    AVAILABLE_YEARS: [2024, 2025, 2026, 2027],
    
    // ==========================================
    // ОПЦИИ ВЫБОРА
    // ==========================================
    TRAFFIC_OPTIONS: ['Казатомпром', 'Нефтегаз', 'Газпром', 'Каспи', 'Ватсап'],
    COUNTRY_OPTIONS: ['Казахстан', 'Кыргызстан', 'Таджикистан', 'Белорусь', 'Монголия', 'Израиль', 'Литва'],
    
    // ==========================================
    // БАЗА ДАННЫХ (IndexedDB)
    // ==========================================
    DB_NAME: 'FTDTrackerDB',
    DB_VERSION: 1,
    STORE_NAME: 'data',
    MIGRATION_KEY: 'migration_completed'
};
