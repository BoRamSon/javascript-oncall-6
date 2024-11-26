class printWorkSchedule {
  async printWorkSchedule(whatMonth) {
    for (let i = 1; i <= getDaysPerMonth[whatMonth]; i++) {
      // 월 데이터 입력하는거 받아오고
      // 일자 데이터는... let i 그대로 가져오고
      // 그래서 stingDate(whatMonth, i); 완성했고
      // 그래서 요일은 가져올 수 있고,
      // 평일이면서 법정공휴일의 경우에만 요일 뒤에 (휴일) 표기를 해야 한다.
      // 예시)  5월 5일 금(휴일) 루루
      // = print 5월 5일 금 >>> 조건에 따라 '' or '(휴일)' 붙여주면 됨.
      // 이제 준팍, 도밥, 고니 등등을 순서대로 출력하면서
      // 규칙에 맞추면 됩니다.
    }
  }
}
