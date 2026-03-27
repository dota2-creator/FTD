// Конфигурационный файл — настройки приложения
// Этот файл НЕ попадает в git (указан в .gitignore)

window.ENV_CONFIG = {
    // ==========================================
    // ПОЛЬЗОВАТЕЛИ ДЛЯ ВХОДА (логин: пароль)
    // ==========================================
    users: {
        '1': '1'
    },

    // Пароль для доступа к настройкам зарплаты тимлида и раздела «Настройки»
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
    // ОСНОВНЫЕ ТАРИФЫ
    // ==========================================
    DEFAULT_TARIFFS: [
        { min: 1, max: 4, baseRate: 800, bonusPerFTD: 55 },
        { min: 5, max: 7, baseRate: 800, bonusPerFTD: 60 },
        { min: 8, max: 12, baseRate: 900, bonusPerFTD: 70 },
        { min: 13, max: 19, baseRate: 1200, bonusPerFTD: 90 },
        { min: 20, max: 999, baseRate: 1500, bonusPerFTD: 120 }
    ],
    
    // ==========================================
    // ПРЕДУСТАНОВЛЕННЫЕ НАБОРЫ УСЛОВИЙ (пресеты)
    // ==========================================
    MANAGER_TARIFF_PRESETS: {
        preset1: {
            name: 'Вариант 1',
            tariffs: [
                { min: 1, max: 4, baseRate: 1000, bonusPerFTD: 55 },
                { min: 5, max: 9, baseRate: 1100, bonusPerFTD: 60 },
                { min: 10, max: 12, baseRate: 1200, bonusPerFTD: 70 },
                { min: 13, max: 19, baseRate: 1300, bonusPerFTD: 90 },
                { min: 20, max: 999, baseRate: 1500, bonusPerFTD: 120 }
            ]
        },
        preset2: {
            name: 'Вариант 2',
            tariffs: [
                { min: 1, max: 4, baseRate: 800, bonusPerFTD: 55 },
                { min: 5, max: 7, baseRate: 800, bonusPerFTD: 60 },
                { min: 8, max: 12, baseRate: 900, bonusPerFTD: 70 },
                { min: 13, max: 19, baseRate: 1200, bonusPerFTD: 90 },
                { min: 20, max: 999, baseRate: 1500, bonusPerFTD: 120 }
            ]
        },
        preset3: {
            name: 'Вариант 3',
            tariffs: [
                { min: 1, max: 2, baseRate: 500, bonusPerFTD: 25 },
                { min: 3, max: 5, baseRate: 500, bonusPerFTD: 45 },
                { min: 6, max: 7, baseRate: 500, bonusPerFTD: 65 },
                { min: 8, max: 999, baseRate: 700, bonusPerFTD: 65 }
            ]
        }
    },
    
    // ==========================================
    // МЕНЕДЖЕРЫ
    // ==========================================
    DEFAULT_MANAGERS: ['Александр Литвинов'],
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
