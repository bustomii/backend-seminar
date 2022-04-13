export const HOST = "localhost"
// export const USER = "root" //local
export const USER = "astro_seminar"
// export const PASSWORD = "" //local
export const PASSWORD = "Astro@2022"
// export const DB = "seminar" //local
export const DB = "astro_seminar_2022"
export const dialect = "mysql"
export const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
}