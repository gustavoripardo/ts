
/**
 * String
 */

let message: string = "this var always be string";
console.log(message);


/**
 * Number
 */
let amount: number = 50.5 // 15, 36, 98.7
console.log(amount)

amount = 14
console.log(amount)


/**
 * Void
 */

function iReturnoNothing(): void {
    console.log("noting :D")
}

iReturnoNothing()


/**
 * Never
 */

/**
 * Usually used to return any errors
 */
function neverFunction(): never {
    throw new Error("any error")
}


/**
 * Enum
 */

enum Cars {
    carA = "Car A. 2019",
    carB = "Car B. 2021",
    carC = "Car C. 2017",
}

let myCar: Cars = Cars.carB
console.log(myCar)

/**
 * Array
 */

let people: string[] = ['peopleA', 'peopleB']

/**
 * Tuple
 */

let peopleA: [string, number] = ['peopleName', 1995]

/**
 * Union (union types)
 */

let number: number | string = 10;
console.log(number)

number = 'one'
console.log(number)

function payment(servicePay: 'GooglePay' | 'ApplePay'): string {
    return `You have been paying with ${servicePay == 'GooglePay' ? 'Google Pay Service' : 'Apple Pay Service'}`
}

console.log(payment('GooglePay'))
console.log(payment('ApplePay'))

/**
 * Aliases
 */

type PaymentServices = 'GooglePay' | 'ApplePay' | 'AnotherPayment'
// type PaymentServices = number | string | number[]

function paymentWithAlias(servicePay: PaymentServices): string {
    return `You have been paying with ${servicePay} Services`
}

console.log(paymentWithAlias('AnotherPayment'))
console.log(paymentWithAlias('ApplePay'))

/**
 * Interface
 */

interface Address {
    street: string,
    number?: number
}

interface People {
    readonly name: string
    years: number
    address?: Address[]
}

function showPeople(people: People): void {
    console.log(`There is somebody called ${people.name} and it is ${people.years} years old`)
    people.address?.forEach(address => {
        console.log(`${people.name} lives in ${address.street} - ${address?.number || 'N/A'}`)
    });
}

let somebody: People = {
    name: 'Andrew',
    years: 20,
    address: [
        {street: 'street A',},
        {street: 'street B', number: 635}
    ]
}
showPeople(somebody)


/**
 * Pick | Omit
 */

interface Post {
    id: number,
    title: string,
    description: string,
    slug: string,
    imageUrl: string,
}

type PostPreview = Pick<Post, 'id' | 'title'>
// type PostPreview = Omit<Post, 'id' | 'title'>
let postPreview: PostPreview = {id: 1, title: 'Typescript'}

console.log(postPreview.title)




/**
 * Decorators
 */

function logger(text: string) {
    return (target: any) => {
        console.log(target, text)
    }
}

@logger('text')
class Something {}



function version(_version: string) {
    // return (target: any) => console.log(version); OR
    return (constructor: any) => {
        return class extends constructor {
            version = _version
        }
    }
}

@version('1.2.5')
class API { /** do something */}

const api = new API();
console.log(api)
