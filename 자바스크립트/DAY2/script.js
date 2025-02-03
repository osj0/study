//비효율 코드
let fruit = "banana"
let fruit1 = "apple"
let fruit2 = "grape"
let fruit3 = "mango"

//배열
let fruit_ary = ["banana", "apple", "grape", "mango"]
console.log(fruit_ary)

console.log(fruit_ary[0]) 
// fruit_ary에서 첫번째만 호출할래 
// 이 번호를 인덱스라고 함
// 이 인덱스는 0부터 시작

// 배열값 바꾸기
fruit_ary[0]="cherry"
console.log(fruit_ary)

fruit_ary[2]="tomato"
console.log(fruit_ary)


setTimeout(() => {
    console.log("⏳ 3초 후에도 실행 중입니다!");
}, 3000);