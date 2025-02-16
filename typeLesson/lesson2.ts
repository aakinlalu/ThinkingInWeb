// const userColorMap2 = new Map<string,string[]>({
//     '123': ['red', 'blue', 'green'],
//     '456': ['yellow', 'purple', 'orange'],
//     '789': ['pink', 'black', 'white'],
//   });

// const userFavoriteColors = (name: string): string[] | undefined => {
//     return userColorMap2.get(name);
// }

// const favouriteColors = userFavoriteColors('James');
// favouriteColors?.push('purple');

// console.log(userColorMap2.get('James'));


interface User {
    id: string;
}

type UserWithRole = User & {
    role: string;
}

const user: UserWithRole = {
    id: '123',
    role: 'admin'
}

console.log(user);


// String Union types

type Status = 'idle' | 'active' | 'offline';

const getUserStatus = (status: Status): string => {
    return status;
}

console.log(getUserStatus('active'));


interface User2 {
    readonly id: string;
}

const user2: User2 = {
    id: '123'
}

// user2.id = '456'; // Error


// extends interface

interface User3 {
    id: string;
}

interface UserWithRole2 extends User3 {
    role: string;
}

const user3: UserWithRole2 = {
    id: '123',
    role: 'admin'
};
console.log(user3);

// Descriminated Unions
type ApiResponse = {
    type: 'success';
    data: {
        id: string;
        name: string;
     };
    } | {
        type: 'error';
        error: {
            code: number;
            message: string;
        };
    };

const handleResponse = (response: ApiResponse) => {
    if (response.type === 'success') {
        console.log(response.data);
    } else {
        console.log(response.error);
    }
}

console.log(handleResponse({type: 'success', data: {id: '123', name: 'James'}}));


// typeof

const words = ['hello', 'world'];
type Words = typeof words[number]; // string

//const as 
const someString = 'hello';
type SomeString = typeof someString; // string
type SomeStringLiteralType =  typeof someString as const; // 'hello'