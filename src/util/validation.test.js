import {minLength,numberValid,emailValid,cepValid ,validFormatCpf} from './validation.js'

test('function minLength',()=>{
    expect(minLength('ola',1)).toBe(true);
    expect(minLength('ola',3)).toBe(true);
    expect(minLength('ola',5)).toBe(false);
})

test('function numberValid',()=>{
    expect(numberValid(1)).toBe(true);
    expect(numberValid('2')).toBe(true);
    expect(numberValid('2a')).toBe(false);
})
test('function emailValid',()=>{
    expect(emailValid('aassstt@gmail.com')).toBe(true);
    expect(emailValid('aassdds#gmail.com')).toBe(false);
    expect(emailValid('aaddsss#gmail')).toBe(false);
})

test('function cepValid',()=>{
    expect(cepValid('04660-006')).toBe(true);
    expect(cepValid('04660006')).toBe(true);
    expect(cepValid('04660-0061')).toBe(false);
    expect(cepValid('04a66000')).toBe(false);
    expect(cepValid('04a660000')).toBe(false);
})

test('function validFormatCpf',()=>{
    expect(validFormatCpf('652.978.200-14')).toBe(true);
    expect(validFormatCpf('65297820014')).toBe(true);
    expect(validFormatCpf('652.978.200-1')).toBe(true);
    expect(validFormatCpf('652978200141')).toBe(false);
    expect(validFormatCpf('652.978.200-111')).toBe(false);
    expect(validFormatCpf('652.978.200-123')).toBe(false);
})