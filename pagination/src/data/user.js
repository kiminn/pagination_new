//이름 목데이터
const firstName = ["김", "이", "박", "최", "오", "강", "한", "성"];
const lastName = [
  "가영",
  "하경",
  "진미",
  "인성",
  "동원",
  "성운",
  "짱구",
  "훈이",
  "지훈",
  "민정",
  "해수",
  "두심",
  "용녀",
];

//랜덤 날짜 생성
function makeRandomDate(startDate, endDate) {
  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);

  const formatDate = randomDate.toISOString().slice(0, 10);
  return formatDate
}

//랜덤 전화번호 생성
const makeRandomPhoneNumber = () => {
  const numbers = ["010"];
  for (let i = 0; i < 2; i++) {
    let arr = [];
    while (arr.length <= 3) {
      const RandomNumber = Math.floor(Math.random(9) * 10);
      arr.push(RandomNumber);
    }
    arr = arr.join("");
    numbers.push(arr);
  }
  return numbers.join("-");
};

//유저 데이터 생성 함수
export const userData = (count) =>
  Array(count)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      name:
        `${firstName[Math.floor(Math.random() * firstName.length)]}` +
        `${lastName[Math.floor(Math.random() * lastName.length)]}`,
      birthDate: makeRandomDate(new Date("2000-01-01"), new Date("2023-01-01")),
      phoneNumber: makeRandomPhoneNumber(),
      lastLoginDate: makeRandomDate(new Date("2023-01-01"), new Date()),
    }));