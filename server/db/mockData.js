//Schema for the mock data in the database documented on Swagger documentation route

/**
 * @openapi
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      required:
 *        - id
 *        - productName
 *        - productOwnerName
 *        - Developers
 *        - scrumMasterName
 *        - startDate
 *        - methodology
 *      properties:
 *        id:
 *          type: string
 *          default: 1
 *        productName:
 *          type: string
 *          default: product 1
 *        productOwnerName:
 *          type: string
 *          default: product owner 1
 *        Developers:
 *          type: array
 *          default: [developer 1, developer 2]
 *        scrumMasterName:
 *          type: string
 *          default: scrum master 1
 *        startDate:
 *          type: string
 *          default: 2022/08/12
 *        methodology:
 *          type: string
 *          default: Agile
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *        productName:
 *          type: string
 *        productOwnerName:
 *          type: string
 *        Developers:
 *          type: array
 *        scrumMasterName:
 *          type: string
 *        startDate:
 *          type: string
 *        methodology:
 *          type: string
 */

//Custom mock data for the database
const data = [
    {
        id: "1",
        productName: "Prototype1",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "2",
        productName: "prototype1291",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "3",
        productName: "prototype8921",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "4",
        productName: "prototype123",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "5",
        productName: "prototype21",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "6",
        productName: "prototype12893",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "7",
        productName: "prototype182309",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "8",
        productName: "prototype380912",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "9",
        productName: "prototype993281",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "10",
        productName: "prototype321",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "11",
        productName: "prototype382901",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "12",
        productName: "prototype921",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "13",
        productName: "prototype1239",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "14",
        productName: "prototype219",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "15",
        productName: "prototype823",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "16",
        productName: "prototype412",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "17",
        productName: "prototype12213",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "18",
        productName: "prototype2913",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "19",
        productName: "prototype4412",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "20",
        productName: "prototype39012",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "21",
        productName: "prototype131313",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "22",
        productName: "prototype40901",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "23",
        productName: "prototype912",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "24",
        productName: "prototype90803491",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "25",
        productName: "prototype123i",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "26",
        productName: "prototype123i",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "27",
        productName: "prototype48912",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "28",
        productName: "prototype231",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "29",
        productName: "prototype090",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "28",
        productName: "prototype90",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "29",
        productName: "prototype189",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "30",
        productName: "prototypeasdja",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "31",
        productName: "prototypesdjlsa",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "32",
        productName: "prototype1230",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "33",
        productName: "prototype31u",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "2",
        productName: "prototype3130",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "34",
        productName: "prototype529",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "35",
        productName: "prototype3424",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "36",
        productName: "prototype312",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "37",
        productName: "prototype123",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "38",
        productName: "prototype31",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",
            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma123",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "39",
        productName: "prototype23",
        productOwnerName: "Leo",
        developers: [

            "Simer",
            "Olivia",
            "Bruna"
        ],
        scrumMasterName: "Emma9892",
        startDate: "2022/08/08",
        methodology: "Agile",
    }, {
        id: "40",
        productName: "prototype40",
        productOwnerName: "Leo",
        developers: [
            "Lee",
            "Singh",

        ],
        scrumMasterName: "Emma1",
        startDate: "2022/08/09",
        methodology: "Agile",
    }

]

module.exports = data

