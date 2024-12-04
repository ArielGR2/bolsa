import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    title: "Business Quotes",
                    buttons: {
                        save: "Save",
                        cancel: "Cancel",
                        login: "Login",
                        previous_day: "Previous Day",
                        next_day: "Next Day",
                        previous_month: "Previous Month",
                        next_month: "Next Month",
                        daily_chart: "Daily Chart",
                        monthly_chart: "Monthly Chart",
                        annual_chart: "Annual Chart",
                        hora: "Hour",
                        fecha: "",
                        cotizacion: "Quote",
                    },
                    Participación_de_Empresas: "Business Participation",
                    idioma: "Language",
                    selected_date: "Selected Date",
                    selected_month: "Selected Month",
                    loading: "Loading data...",
                    no_data: "No data to display.",
                    error: "Error loading data.",
                    navbar: {
                        title: "Bolsa de Shanghái - SSE",
                    },
                    footer: {
                        languages: "Supported Languages",
                        countries:
                            "Exchanges from: Canada, USA, Turkey, Argentina, Brazil, Japan, China, England, Netherlands, France, Germany, Australia, Italy, Norway, Russia",
                    },
                    body_indices: {
                        title: "Stock Index Quotes",
                    },
                    body_empresas: {
                        title: "Companies listed on SSE",
                    },
                    grafico: {
                        tooltip: {
                            codigo: "Code",
                            valor: "Value",
                        },
                        tabla: {
                            empresa: "Company",
                            codigo: "Code",
                            valor_inicial: "Initial Value",
                            porcentaje: "Percentage (%)",
                            participacion: "Market Part."
                        },
                    },
                },
            },
            es: {
                translation: {
                    title: "Cotizaciones de Empresas",
                    buttons: {
                        save: "Guardar",
                        cancel: "Cancelar",
                        login: "Iniciar sesión",
                        previous_day: "Día Anterior",
                        next_day: "Día Siguiente",
                        previous_month: "Mes Anterior",
                        next_month: "Mes Siguiente",
                        daily_chart: "Gráfico Diario",
                        monthly_chart: "Gráfico Mensual",
                        annual_chart: "Gráfico Anual",
                        hora: "Hora",
                        fecha: "",
                        cotizacion: "Cotización",
                    },
                    Participación_de_Empresas: "Distribución del Mercado",
                    idioma: "Idioma",
                    selected_date: "Fecha Seleccionada",
                    selected_month: "Mes Seleccionado",
                    loading: "Cargando datos...",
                    no_data: "No hay datos para mostrar.",
                    error: "Error al cargar los datos.",
                    navbar: {
                        title: "Bolsa de Shanghái - SSE",
                    },
                    footer: {
                        languages: "Idiomas soportados",
                        countries:
                            "Intercambios desde: Canadá, EE.UU., Turquía, Argentina, Brasil, Japón, China, Inglaterra, Países Bajos, Francia, Alemania, Australia, Italia, Noruega, Rusia",
                    },
                    body_indices: {
                        title: "Cotizaciones de los Índices Bursátiles",
                    },
                    body_empresas: {
                        title: "Empresas cotizando en SSE",
                    },
                    grafico: {
                        tooltip: {
                            codigo: "Código",
                            valor: "Valor",
                        },
                        tabla: {
                            empresa: "Empresa",
                            codigo: "Código",
                            valor_inicial: "Valor Inicial",
                            porcentaje: "Porcentaje (%)",
                            participacion: "Part. del Mercado"
                        },
                    },
                },
            },
            ch: {
                translation: {
                    title: "公司报价",
                    buttons: {
                        save: "保存",
                        cancel: "取消",
                        login: "登录",
                        previous_day: "前一天",
                        next_day: "后一天",
                        previous_month: "上个月",
                        next_month: "下个月",
                        daily_chart: "每日图表",
                        monthly_chart: "每月图表",
                        annual_chart: "年度图表",
                        hora: "小时",
                        fecha: "",
                        cotizacion: "报价",
                    },
                    Participación_de_Empresas: "公司参与",
                    idioma: "语言",
                    selected_date: "选择的日期",
                    selected_month: "选择的月份",
                    loading: "正在加载数据...",
                    no_data: "没有数据显示。",
                    error: "加载数据时出错。",
                    navbar: {
                        title: "多伦多证券交易所 - SSE创业板市场",
                    },
                    footer: {
                        languages: "支持的语言",
                        countries:
                            "交易所来自：加拿大，美国，土耳其，阿根廷，巴西，日本，中国，英国，荷兰，法国，德国，澳大利亚，意大利，挪威，俄罗斯",
                    },
                    body_indices: {
                        title: "股票指数报价",
                    },
                    body_empresas: {
                        title: "SSE上市公司",
                    },
                    grafico: {
                        tooltip: {
                            codigo: "代码",
                            valor: "数值",
                        },
                        tabla: {
                            empresa: "公司",
                            codigo: "代码",
                            valor_inicial: "初始值",
                            porcentaje: "百分比(%)",
                            participacion: "市场份额"
                        },
                    },
                },
            },
        },
    });

export default i18next;
