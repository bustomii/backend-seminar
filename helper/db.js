export const HOST = "localhost"
export const USER = "root" //local
export const PASSWORD = "" //local
export const DB = "seminar" //local
// export const PASSWORD = "Astro@2022" //server
// export const USER = "astro_seminar" //server
// export const DB = "astro_seminar_2022" //server
export const dialect = "mysql"
export const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
}