// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
///
//isPhoneNumber Tests
//
//True Tests
test('333-444-5555 is a phone number', () => {
  expect(isPhoneNumber('333-444-5555')).toBeTruthy();
});
test('223 is not a phone number', () =>{
  expect(isPhoneNumber('223')).toBeFalsy();
});
//False Tests
test('isPhoneNumber(445-889-2233) will return undefined', () =>{
  expect(isPhoneNumber('445-889-2233')).toBeUndefined();
});
test('332 is a phone number', () =>{
  expect(isPhoneNumber('332')).toBeTruthy();
});

//
//isEmail Tests
//
//True Tests
test('caz002@ucsd.edu is a valid email', () =>{
  expect(isEmail('caz002@ucsd.edu')).toBeTruthy();
});
test('isEmail(3@gmail.com) is defined', () =>{
  expect(isEmail('3@gmail.com')).toBeDefined();
});
//False Tests
test('Jordan is a valid email', () =>{
  expect(isEmail('Jordan')).toBeTruthy();
});
test('isEmail(dog) will return null', () => {
  expect(isEmail('dog')).toBeNull();
});
//
//isStrongPassword Tests
//
//True Tests
test('1 is not a strong password', () => {
  expect(isStrongPassword('a')).toEqual(false);
});
test('George is a strong password', ()=> {
  expect(isStrongPassword('George')).toBeTruthy();
});
//False Tests
test('password1234 is not a strong password', () =>{
  expect(isStrongPassword('password1234')).toBeFalsy();
});
test('Bob is a strong password', () =>{
  expect(isStrongPassword('Bob')).toEqual(true);
})
//
//isDate Tests
//
//True Tests
test('12/01/2024 is a date', ()=>{
  expect(isDate('12/01/2024')).toBeTruthy();
});
test('isDate(11/23/2001) is defined', ()=>{
  expect(isDate('11/23/2001')).toBeDefined();
});
//False Tests
test('01/10/1990 is not a date', ()=>{
  expect(isDate('01/10/1990')).toBeFalsy();
});
test('isDate(05/05/1995) is null', ()=>{
  expect(isDate('05/05/1995')).toBeNull();
});

//
//isHexColor Tests
//
//True Tests
test('#0011ff is a valid hex code', ()=>{
  expect(isHexColor('#0011ff')).toBeTruthy();
});
test('#zhf230 is not a valid hex code', () =>{
  expect(isHexColor('#zhf230')).toBeFalsy();
});
//False Tests
test('isHexColor(#0FF561) is not defined', ()=>{
  expect(isHexColor('#0FF561')).not.isDefined();
});
test('isHexColor(47) will return null', ()=>{
  expect(isHexColor('47')).isNull();
});